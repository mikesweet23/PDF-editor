# ADI Markup

A simple drawing markup tool for ADI Climate Systems. Open a PDF, JPEG or PNG, mark it up, measure it, and save or export it again.

It is a single file, `index.html`, that runs in the browser (Chrome or Edge recommended). Nothing is uploaded: files stay on your computer. It needs an internet connection the first time it loads, to fetch the PDF libraries.

## Using it

- **Run locally:** double-click `index.html`.
- **Host for the team:** put `index.html` on any web server, SharePoint or Teams site, or GitHub Pages (Settings → Pages → deploy from branch).

## Features

| Area | What you can do |
|---|---|
| Open | PDF (all pages), JPEG, PNG and saved `.adimarkup.json` projects. Drag and drop or use **Open**. |
| Scale | Use the **No scale / Scale** button at the bottom. Either type the drawing scale (1:50, 1:100…) for PDFs, or draw along a known dimension and type its length. You can set the scale per page or for all pages. |
| Measure | Length, multi-point run (total length), and area (m² plus perimeter). Choose mm or m. Page totals appear on the Markups tab. |
| Draw | Line, arrow, rectangle, ellipse, polygon, freehand, and revision cloud with a rev tag. Shift gives straight lines and squares. Measuring tools snap to markup end points. |
| Colour code | Swatches with meanings (red = remove, green = new, etc.), which you can edit in Settings. The **Colour key** tool places a legend on the drawing. |
| Text | Text boxes and callouts (arrow plus note). To "edit" existing text, use **White-out** to cover the old text, then type over it. |
| Highlight | Highlighter pen and highlight box. |
| Stamps | APPROVED, APPROVED AS NOTED, REVISED, FOR COMMENT, NOT FOR CONSTRUCTION and more. Each stamp includes ADI Climate Systems, your initials and the date. |
| Move part of a drawing | **Move part of drawing** tool: box an area, then drag it to its new position. The original spot is whited out. |
| Images | Insert a signature, logo or photo, or paste one with Ctrl+V. |
| Pages | Thumbnails, page navigation, rotate page. |
| Save | **Save** writes an `.adimarkup.json` project (the original file plus your markups). Reopen it later and keep editing. The app also autosaves your last session in the browser. |
| Export | PDF (all pages, original drawing kept as vectors), PNG, JPEG, and a CSV schedule of every markup and measurement. |
| Rename and date | Rename in the header or the Document tab. Today's date is filled in automatically and used in file names (`Name_2026-11-04.pdf`). An optional ADI footer stamp (name, date, initials, rev) is added to each page. |

## Keyboard shortcuts

| Key | Tool | | Key | Tool |
|---|---|---|---|---|
| V | Select | | T | Text |
| H / Space | Pan | | O | Callout |
| L | Line | | S | Stamp |
| A | Arrow | | I | Image |
| R | Rectangle | | K | Colour key |
| E | Ellipse | | Y | Highlighter |
| P | Polygon | | B | Highlight box |
| F | Freehand | | W | White-out |
| C | Revision cloud | | X | Move part of drawing |
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
| Mouse wheel / + / − / 0 | Zoom / zoom in / zoom out / fit page |
| Page Up / Page Down | Change page |

## Settings

The ⚙ button lets you set your initials, upload the company logo (used in the header and footer stamp), choose default units, and edit the colour key meanings. Settings are stored in the browser on each computer.

## Notes

- PDF export keeps the original drawing as vectors and lays the markups over it, so text and linework stay sharp.
- White-out covers text visually. The original text is still inside the PDF underneath, so someone could still copy or search it.
- Libraries: [pdf.js](https://mozilla.github.io/pdf.js/) 3.11.174 and [pdf-lib](https://pdf-lib.js.org/) 1.17.1, both loaded from cdnjs.
