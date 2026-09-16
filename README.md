# Re-scoring Taskmaster

GitHub Pages-ready development structure.

## Working pages
- `series/1/index.html` — approved Series 1 prototype
- `series/1/episode-1/index.html` — approved Series 1 Episode 1 prototype

## Shared code
- `css/global.css` — site-wide colour palette, font setup, header, navigation, footer and common components
- `css/series.css` — Series-page-only layout
- `css/episode.css` — Episode-page-only layout, including the approved mobile score-card presentation
- `scripts/site.js` — shared mobile-menu behaviour
- `scripts/episode.js` — episode image lightbox

## Assets
Episode 1 assets are stored under:
`assets/series-1/episode-1/`

This keeps future episode assets isolated and avoids filename collisions.

## Custom font
The font file is intentionally not included in this package.
Place your licensed copy of:

`American Typewriter Regular.ttf`

inside the `/fonts/` folder.

## Placeholder structure
The `/series/` and `/specials/` folders have been generated from the supplied project structure spreadsheet.
Placeholder pages are included so GitHub tracks the folders and internal links do not lead to missing directories.

## GitHub Pages
Upload the contents of this package to the root of the repository, then publish GitHub Pages from the `main` branch / root folder.

The relative paths are designed to work both:
- on a GitHub Pages project URL, and
- later on `rescoringtaskmaster.co.uk`.

Do not add a `CNAME` file until you are ready to connect the custom domain.
