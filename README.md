# ADI Markup

A simple drawing markup tool for ADI Climate Systems. Open a PDF, JPEG or PNG, mark it up, measure it, and save or export it again.

It is a single file, `index.html`, that runs in the browser (Chrome or Edge recommended). Nothing is uploaded: files stay on your computer. It needs an internet connection the first time it loads, to fetch the PDF libraries.

## Using it

- **Run locally:** double-click `index.html`.
- **Host for the team:** put `index.html` on any web server, SharePoint or Teams site, or GitHub Pages (Settings → Pages → deploy from branch).

## Install as an app (PWA)

When ADI Markup is served over https, for example with GitHub Pages (**Settings → Pages → Deploy from branch → `main` / root**), it can be installed like a desktop program:

- **Chrome / Edge (Windows, Mac):** click the install icon at the right of the address bar, or **⋮ → Save and share → Install page as app**. It gets its own window, a desktop/Start-menu icon, and appears under **Open with** for PDF, PNG, JPEG and TIFF files.
- **iPhone / iPad:** Share → **Add to Home Screen**. **Android:** ⋮ → **Install app**.

### Updates – nothing goes stale

- The installed app always loads the **latest published version** when online. The stored copy is used only offline, or when the network takes longer than 5 seconds.
- A running app checks for a new version every 30 minutes and whenever its window is brought back into view.
- **No drawing open:** it updates itself straight away.
- **Drawing open:** an **Update available** box appears. **Update now** saves the drawing, reloads into the new version and reopens it; **Later** asks again in 2 hours.
- **Settings → App updates → Check now** checks on demand.
- When publishing, push `index.html` to `main`. Nothing else needs changing: updates are detected from the file itself.
- Bump `CACHE` in `sw.js` only if you add new core files that must work offline.

### Icons

`icons/` holds the app icon: SVG source, 192/512 PNG, a maskable 512 PNG for Android, an Apple touch icon and `favicon.ico`. The favicon is also embedded in `index.html`, so it shows even when the file is opened straight from the desktop.

## Features

| Area | What you can do |
|---|---|
| Open | PDF (all pages), JPEG, PNG, TIFF (including multi-page TIFFs, LZW/Deflate/JPEG/CCITT), WebP, GIF, BMP and saved `.adimarkup.json` projects. Drag and drop or use **Open**. Images can also be dropped onto an open drawing to place them on the page. |
| New / blank canvas | **New** (header) opens a window to **open another drawing**, start a **blank canvas** (A4–A0, portrait or landscape, drawing scale such as 1:50 set automatically, optional 5 mm or 10 mm grid) to draft a concept from scratch, or **close** the current drawing. If there are unsaved changes you're asked to **Save first**, **Don't save** or **Cancel**. Blank canvases are true-size PDFs, so measuring, symbols, schedules and exports all work as normal. |
| Pages | **+ Add page** (Pages tab, or **+ Page** next to the page numbers) inserts a blank page after the current one, with the same size and scale (and grid, on a blank canvas). **Delete page** removes the current page after asking. This works on PDFs and blank canvases; on JPEG/PNG/TIFF documents you can add blank pages and delete the ones you added. Added pages are kept when you save the project. |
| Scale | Use the **No scale / Scale** button at the bottom. Either type the drawing scale (1:50, 1:100…) for PDFs, or draw along a known dimension and type its length. You can set the scale per page or for all pages. |
| Measure | Length, multi-point run (total length), and area (m² plus perimeter). Choose mm or m. Page totals appear on the Markups tab. |
| Draw | Line, arrow, rectangle, ellipse, polygon and freehand. **Straight lines lock to 0°, 45° or 90° by default** (lines, arrows, measuring, scale ruler, callout leaders, polygon, run, area and pipe lines, both when drawing and when dragging an end point). **Hold Alt for any angle.** Lines still snap exactly onto existing end points. You can turn the default off in Settings. Shift draws squares and circles. |
| Cloud markup | A "bubbly" cloud drawn as a box or an ellipse/circle, with its own outline and fill colour and an attached note. Use it to flag an area for change, an instruction or documentation. Optional rev tag. Double-click a cloud to add or edit its note. |
| Colours and rotation | Every shape has an outline colour, plus a fill colour with strength (none, light, medium, solid). Rotate any selected markup by dragging the round handle above it (Shift snaps to 15°), with the ⟲/⟳ buttons, by typing an angle, or with `[` and `]`. |
| Colour code | Swatches with meanings (red = remove, green = new, etc.), which you can edit in Settings. The **Colour key** tool places a legend on the drawing. |
| Text | Text boxes and callouts (arrow plus note). To "edit" existing text, use **White-out** to cover the old text, then type over it. |
| Highlight | Highlighter pen and highlight box. |
| Stamps | APPROVED, APPROVED AS NOTED, REVISED, FOR COMMENT, NOT FOR CONSTRUCTION and more. Each stamp includes ADI Climate Systems, your initials and the date. |
| Move part of a drawing | **Move part of drawing** tool: box an area, then drag it to its new position. The original spot is whited out. |
| Images | Insert a signature, logo or photo, or paste one with Ctrl+V. |
| Sign | **Sign** tool (G): draw, type or upload your signature once and it's saved in your browser. Click to place it on any drawing, optionally with a "Signed by … · date" line. Each person's browser keeps its own signatures; nobody else can see them. It's an image of a signature, not a certificate-based digital signature. Signatures can be resized (proportions kept), rotated and deleted. |
| HVAC symbols | **HVAC symbols** tool (Q) opens a panel of 94 schematic symbols in nine groups. **Valves:** isolating, ball, butterfly, globe, non-return, DRV, commissioning set, drain valve, drain to waste (tundish), drain cock, safety/relief, lockshield, PRV, TRV, TMV, double check (with bleed), double block and bleed, solenoid, flushing bypass. **Control valves:** 2-port, 3-port mixing/diverting, zone valve, PICV, DPCV. **Pumps & ancillaries:** pump, twin pump, strainer, bypass valve, flexible connection, air vent, expansion vessel, flow and heat meters. **Water treatment:** dirt separator, air separator, air & dirt separator, low loss header, magnetic filter, side-stream filter, vacuum degasser, dosing pot. **Plant & equipment:** heat exchangers, chiller, cooling tower, boiler, CHP, ASHP, GSHP, buffer vessel, pressurisation unit, water softener, HW cylinder/calorifier, HIU, cold water storage tank, booster set, solar thermal, immersion heater. **Heat emitters & terminals:** radiator, UFH manifold, FCU, fan convector, trench heater, chilled beam. **Ventilation & air conditioning:** AHU, VAV box, fan, MVHR, VRF/split indoor and outdoor units. **Sensors & controls:** test point, temperature/pressure sensors, pressure switch, differential pressure, flow switch, gauge, thermometer, room and outside air sensors, frost stat, BMS controller. **Pipework:** rise, drop, connect to existing, pipe break, continuation, anchor, guide, expansion bellows, reducer, capped end, flow arrow. Click to place (keep clicking for more), choose horizontal/vertical runs and a size; `[` `]` rotate. **Tags are numbered automatically** (IV1, IV2…, P1, DRV1…), and a **Size** (e.g. 28mm) can be set before placing or on any selected symbol. A **valve & component schedule** is added to the page with the first symbol and fills in automatically (symbol, description, size, quantity, tags such as IV1–IV3). It also lists **pipework** drawn with the Pipe tool (service, size and measured length) and ends with an editable **note** (default: a pipe-sizing note; select the schedule to change or clear it). Drag it anywhere or delete it (it stays off for that page unless re-ticked in the panel). Symbol counts are on the Markups tab and every symbol is in the CSV schedule. The symbols follow common UK schematic conventions; check them against your project's legend. |
| Pipe services | **Pipe** tool (J): pick a service (LTHW flow/return, CHW flow/return, CWS, MCWS, HWS, HWS return, condensate, gas, refrigerant), optionally a size, then click along the route and double-click to finish. Each service has its own colour and line style, and labels such as "LTHW F 28mm" repeat along long runs. With a scale set, lengths per service show on the Markups tab and in the CSV. |
| Pages | Thumbnails, page navigation, rotate page. |
| Save | **Save** opens a window where you can rename the file, set the date, and choose **Save project** (an editable `.adimarkup.json` file you reopen with **Open**) or export a PDF, PNG, JPEG or CSV. A badge next to the name shows **Not saved** or **Saved**, and a confirmation appears at the top of the screen when a file is saved. The app also autosaves your last session in the browser. |
| Export | PDF (all pages, original drawing kept as vectors), PNG, JPEG, and a CSV schedule of every markup and measurement. |
| Rename and date | Rename in the header or the Document tab. Today's date is filled in automatically and used in file names (`Name_2026-11-04.pdf`). An optional ADI footer stamp (name, date, initials, rev) is added to each page. |

## Keyboard shortcuts

| Key | Tool | | Key | Tool |
|---|---|---|---|---|
| V | Select | | T | Text |
| H / Space | Pan | | O | Callout |
| L | Line | | S | Stamp |
| A | Arrow | | I | Image |
| G | Sign | | Q | HVAC symbols |
| J | Pipe service line | | | |
| R | Rectangle | | K | Colour key |
| E | Ellipse | | Y | Highlighter |
| P | Polygon | | B | Highlight box |
| F | Freehand | | W | White-out |
| C | Cloud markup | | X | Move part of drawing |
| M | Measure | | N | Run |
| U | Area | | | |

| Shortcut | Action |
|---|---|
| Ctrl+Z / Ctrl+Y | Undo / redo |
| Ctrl+S | Save (Ctrl+Shift+S to save as) |
| Ctrl+D | Duplicate the selected markup |
| Ctrl+C / Ctrl+V | Copy and paste markups (works across pages) |
| Del | Delete the selected markup |
| Arrow keys | Nudge the selected markup |
| `[` / `]` | Rotate the selected markup 15° (with Shift: 90°) |
| Alt (hold) | Draw or drag straight lines at any angle; without it they lock to 0° / 45° / 90° |
| Mouse wheel / + / − / 0 | Zoom / zoom in / zoom out / fit page |
| Page Up / Page Down | Change page |

## Settings

The ⚙ button lets you set your initials, upload the company logo (used in the header and footer stamp), choose default units, and edit the colour key meanings. Settings are stored in the browser on each computer.

## Notes

- PDF export keeps the original drawing as vectors and lays the markups over it, so text and linework stay sharp.
- White-out covers text visually. The original text is still inside the PDF underneath, so someone could still copy or search it.
- Libraries: [pdf.js](https://mozilla.github.io/pdf.js/) 3.11.174 and [pdf-lib](https://pdf-lib.js.org/) 1.17.1 from cdnjs. For TIFF files only, [UTIF.js](https://github.com/photopea/UTIF.js) 3.1.0 (jsDelivr) and [pako](https://github.com/nodeca/pako) 2.1.0 (cdnjs) are loaded when needed.
- Marked-up images can be exported as PDF (all pages), PNG or JPEG.
