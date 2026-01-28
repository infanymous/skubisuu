# Images

This folder is served statically by Next.js (everything under `public/` is available at `/<path>`).

## Suggested structure

- `public/images/brand/` – logo / brand assets
- `public/images/gallery/` – gallery photos

## Naming

Use simple, stable names so you don't have to touch code often:

- Brand: `logo.svg` (preferred), or `logo.png`
- Gallery: `01.webp`, `02.webp`, `03.webp`, ...

## Notes

- If you replace the placeholder SVGs, keep the same filenames to avoid code changes.
- For photos, prefer `webp`/`avif` (see Copilot guidance in chat).
