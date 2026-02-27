# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production (static export to /out directory)
npm run lint     # Run ESLint
npm run start    # Start production server (after build)
npm run deploy   # Deploy /out to GitHub Pages via gh-pages (run build first)
```

No test runner is configured in this project.

## Architecture

**myDokkan** is a Next.js 14 app (App Router) that acts as a gacha calculator for the mobile game Dragon Ball Z: Dokkan Battle. It calculates how many pulls (連) a player can do given a number of Dragon Stones (龍石), and vice versa.

The app is configured for **static export** (`output: "export"` in `next.config.mjs`), deployed to GitHub Pages at the `/mydokkan` subpath. Because of static export, API Routes, Server Actions, and dynamic server-side rendering are not available.

### Path/basePath Configuration

`myConfig.mjs` is the central config for path handling. In production (`NODE_ENV=production`), `basePath` and `assetPrefix` are set to `/mydokkan`. In development they are empty strings. This file is imported by both `next.config.mjs` and `app/page.tsx` for constructing image URLs.

### App Router Structure

- `app/layout.tsx` — Root layout (Inter font, Japanese `lang="ja"`)
- `app/page.tsx` — Main page (`'use client'`): all core calculator logic lives here as local components
- `app/_page.tsx` — Original Next.js boilerplate (underscore prefix = excluded from routing), kept for reference
- `app/not-found.tsx` — 404 page
- `app/(group1)/` — Route group used for experimentation/learning; shares a layout via `(group1)/layout.tsx`
- `app/about/` — About page with a module CSS example

### Key Patterns

- All UI components in `app/page.tsx` are defined as local functions within the file (no separate `components/` directory).
- Tailwind CSS is used for all styling; one module CSS example exists in `app/(group1)/g1/buttons.module.css`.
- The `@/*` path alias maps to the repo root (e.g., `@/myConfig.mjs`).
- Images are served from `public/images/` and must be prefixed with `mySetting.basePath` when referenced in code.
