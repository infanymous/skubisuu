# Images

This folder is served statically by Next.js (everything under `public/` is available at `/<path>`).

## Suggested structure

- `public/images/brand/` – logo / brand assets
- `public/images/gallery/` – gallery photos

## Naming

Use simple, stable names so you don't have to touch code often:

- Brand: `logo.png` (preferred), or `logo.svg`
- Gallery: `01.webp`, `02.webp`, `03.webp`, ...

## Notes

- If you replace the logo, keep the same filename to avoid code changes.
- For photos, prefer `webp`/`avif` (see Copilot guidance in chat).
