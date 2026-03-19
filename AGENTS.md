# 🤖 Project Intelligence Guidelines (AGENTS)

Context for AI Coding Assistants working on the `portfolio-devpbdias` repository.

## 🏗️ Architecture & Stack
- **Framework**: Next.js 15 (App Router with Server Components default).
- **Styling**: Tailwind CSS v4.
- **Language**: TypeScript (`.ts` and `.tsx`).

## 🎨 Design System & Aesthetics
- **Theme**: Dark Mode by default. Cyberpunk / Futuristic / Premium aesthetic.
- **Typography**: 
  - Base font (sans): `Inter` (configured natively).
  - Headings font: `Erbaum` (custom local font, uses `font-heading` and `font-black`).
- **Spacing**: We heavily rely on extensive vertical breathing room (`py-48 lg:py-64` minimum between main sections). Do NOT cramp elements.
- **Components**: 
  - Use `<Container>` (`src/components/ui/Container.tsx`) to horizontally bound content.
  - Use `<ScrollReveal>` (`src/components/ui/ScrollReveal.tsx`) to wrap ANY new entrance content or sections for scroll-triggered fade/translate animations.
- **Visual Effects**: Use utility classes `.text-glow` for neon-like text shadows and `.text-outline` for hollow typography. Frequent use of `backdrop-blur-sm`, `bg-black/60` (or similar overlays), and `border-white/10`.

## 📦 Directory Structure
- `src/app/` -> Routing and global layout.
- `src/components/` -> UI sections (`Hero`, `About`, `SkillsServices`, `Projects`, `Footer`).
- `src/components/ui/` -> Reusable atomic elements.
- `src/data/` -> Centralized static data (`projects-data.ts`, `techs-data.tsx`, etc.). ANY content update must happen here, not hardcoded in components.
- `public/assets/` -> All source images and media. Be sure to use Next.js `<Image>` with explicit `sizes` when updating.

## ⚠️ Important Rules for Modification
- Always maintain the premium `mix-blend-screen` and `opacity` layering logic over background images.
- When generating Next.js 15 pages with dynamic routing (`[id]`), you MUST `await params` since params is a Promise.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
