/* ADI Markup service worker.
   - The app's own files are fetched NETWORK-FIRST, so an installed app always
     runs the latest version when online; the cached copy is only used offline
     (or if the network takes longer than 5 seconds).
   - Versioned library files from the CDNs never change, so they are CACHE-FIRST.
   - A new service worker activates straight away (no "waiting" state). */
const CACHE = 'adi-markup-v1';
const CORE = ['./', './index.html', './manifest.webmanifest', './icons/icon.svg', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];
const LIBS = [
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js',
];
const CDN_HOSTS = ['cdnjs.cloudflare.com', 'cdn.jsdelivr.net', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => Promise.all([
    ...CORE.map(u => c.add(new Request(u, {cache: 'reload'})).catch(() => {})),
    ...LIBS.map(u => c.add(new Request(u, {mode: 'cors'})).catch(() => {})),
  ])));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('message', e => { if (e.data === 'SKIP_WAITING') self.skipWaiting(); });

const timeout = ms => new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms));
async function notifyClients(msg){ (await self.clients.matchAll({type: 'window'})).forEach(c => c.postMessage(msg)); }

async function networkFirst(req){
  const cache = await caches.open(CACHE);
  const net = fetch(req).then(async res => {
    if (res && res.ok) await cache.put(req, res.clone());
    return res;
  });
  try {
    return await Promise.race([net, timeout(5000)]);
  } catch (err) {
    const hit = await cache.match(req, {ignoreSearch: true})
      || (req.mode === 'navigate' ? (await cache.match('./index.html')) || (await cache.match('./')) : null);
    if (!hit) return net;               // nothing cached: keep waiting for the network
    // Served an older copy: if the network answers later with something newer, tell the page.
    if (req.mode === 'navigate'){
      net.then(async res => {
        if (!res || !res.ok) return;
        const [a, b] = await Promise.all([hit.clone().text(), res.clone().text()]);
        if (a !== b) notifyClients({type: 'UPDATE_READY'});
      }).catch(() => {});
    }
    return hit;
  }
}
async function cacheFirst(req){
  const cache = await caches.open(CACHE);
  const hit = await cache.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
  return res;
}
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) e.respondWith(networkFirst(req));
  else if (CDN_HOSTS.includes(url.hostname)) e.respondWith(cacheFirst(req));
});
