# ADI Markup

A simple drawing markup tool for ADI Climate Systems. Open a PDF, JPEG or PNG, mark it up, measure it, and save or export it again.

It is a single file, `index.html`, that runs in the browser (Chrome or Edge recommended). Nothing is uploaded: files stay on your computer. It needs an internet connection the first time it loads, to fetch the PDF libraries.

## Using it

- **Run locally:** double-click `index.html`.
- **Host for the team:** put `index.html` on any web server, SharePoint or Teams site, or GitHub Pages (Settings → Pages → deploy from branch).

## Features

| Area | What you can do |
|---|---|
| Open | PDF (all pages), JPEG, PNG, TIFF (including multi-page TIFFs, LZW/Deflate/JPEG/CCITT), WebP, GIF, BMP and saved `.adimarkup.json` projects. Drag and drop or use **Open**. Images can also be dropped onto an open drawing to place them on the page. |
| Scale | Use the **No scale / Scale** button at the bottom. Either type the drawing scale (1:50, 1:100…) for PDFs, or draw along a known dimension and type its length. You can set the scale per page or for all pages. |
| Measure | Length, multi-point run (total length), and area (m² plus perimeter). Choose mm or m. Page totals appear on the Markups tab. |
| Draw | Line, arrow, rectangle, ellipse, polygon and freehand. Shift gives straight lines and squares. Measuring tools snap to markup end points. |
| Cloud markup | A "bubbly" cloud drawn as a box or an ellipse/circle, with its own outline and fill colour and an attached note. Use it to flag an area for change, an instruction or documentation. Optional rev tag. Double-click a cloud to add or edit its note. |
| Colours and rotation | Every shape has an outline colour, plus a fill colour with strength (none, light, medium, solid). Rotate any selected markup by dragging the round handle above it (Shift snaps to 15°), with the ⟲/⟳ buttons, by typing an angle, or with `[` and `]`. |
| Colour code | Swatches with meanings (red = remove, green = new, etc.), which you can edit in Settings. The **Colour key** tool places a legend on the drawing. |
| Text | Text boxes and callouts (arrow plus note). To "edit" existing text, use **White-out** to cover the old text, then type over it. |
| Highlight | Highlighter pen and highlight box. |
| Stamps | APPROVED, APPROVED AS NOTED, REVISED, FOR COMMENT, NOT FOR CONSTRUCTION and more. Each stamp includes ADI Climate Systems, your initials and the date. |
| Move part of a drawing | **Move part of drawing** tool: box an area, then drag it to its new position. The original spot is whited out. |
| Images | Insert a signature, logo or photo, or paste one with Ctrl+V. |
| Sign | **Sign** tool (G): draw, type or upload your signature once and it's saved in your browser. Click to place it on any drawing, optionally with a "Signed by … · date" line. Each person's browser keeps its own signatures; nobody else can see them. It's an image of a signature, not a certificate-based digital signature. Signatures can be resized (proportions kept), rotated and deleted. |
| HVAC symbols | **HVAC symbols** tool (Q) opens a panel of schematic symbols. **Valves:** isolating, ball, butterfly, globe, non-return, DRV, commissioning set, drain cock, drain valve (on branch), drain point to waste (tundish), safety/relief, lockshield, pressure reducing valve (PRV), TRV. **Control valves:** 2-port, 3-port mixing, 3-port diverting, motorised zone valve, PICV, DPCV. **Pumps & ancillaries:** pump, twin pump, strainer, dirt separator, bypass valve, flexible connection, air vent, expansion vessel, flow and heat meters, reducer, capped end, flow arrow. **Sensors & instruments:** test point, temperature sensor, pressure sensor, pressure switch, differential pressure sensor/switch, flow switch, pressure gauge, thermometer. Pick one and click on the pipework (keep clicking to place more). Choose horizontal or vertical pipe runs and a size; `[` `]` rotate. Each symbol takes any colour and line weight and can be resized, rotated and given a tag (e.g. "V1 25mm"). A **valve & component schedule** table is added to the top-right of the page as soon as the first symbol is placed and fills in automatically (symbol, description, quantity, tags). Drag it anywhere, change its text size, or delete it; it won't come back on that page unless you tick the option in the symbols panel again. Symbol counts also appear on the Markups tab, and every symbol with its tag is listed in the CSV schedule for the CAD technician. The symbols follow common UK schematic conventions; check them against your project's symbol legend. |
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
| Mouse wheel / + / − / 0 | Zoom / zoom in / zoom out / fit page |
| Page Up / Page Down | Change page |

## Settings

The ⚙ button lets you set your initials, upload the company logo (used in the header and footer stamp), choose default units, and edit the colour key meanings. Settings are stored in the browser on each computer.

## Notes

- PDF export keeps the original drawing as vectors and lays the markups over it, so text and linework stay sharp.
- White-out covers text visually. The original text is still inside the PDF underneath, so someone could still copy or search it.
- Libraries: [pdf.js](https://mozilla.github.io/pdf.js/) 3.11.174 and [pdf-lib](https://pdf-lib.js.org/) 1.17.1 from cdnjs. For TIFF files only, [UTIF.js](https://github.com/photopea/UTIF.js) 3.1.0 (jsDelivr) and [pako](https://github.com/nodeca/pako) 2.1.0 (cdnjs) are loaded when needed.
- Marked-up images can be exported as PDF (all pages), PNG or JPEG.
