# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js-based website for **Thalir Manam**, a child development and therapy center. The project uses:
- **Next.js 14** (App Router with static export)
- **React 18**
- **Tailwind CSS** with custom configuration
- **Framer Motion** for animations
- **Swiper** for carousels
- **shadcn/ui** components (customized)

The site provides information about child development services including speech therapy, behavioral therapy, autism support, and other specialized treatments.

## Build & Development Commands

```bash
# Development server (default port 3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Build and export static site
npm run export
```

Note: The project is configured for static export (`output: 'export'` in next.config.js), meaning it builds to static HTML files in the `out/` directory.

## Architecture

### Directory Structure

```
app/                    # Next.js App Router pages (route handlers)
├── page.js            # Homepage route
├── layout.js          # Root layout
├── about-us/          # Page routes (each has page.js)
├── services/
├── contact-us/
└── [other-routes]/

src/
├── components/
│   ├── pages/         # Full page components (Blog, AboutUs, etc.)
│   ├── sections/      # Reusable section components
│   │   ├── headers/   # Header variants (headerOne, etc.)
│   │   ├── footers/   # Footer variants
│   │   ├── heros/     # Hero section variants
│   │   ├── services/  # Service-related sections
│   │   ├── blogs/     # Blog sections
│   │   └── [others]/  # Other section components
│   └── ui/            # Base UI components (Button, Input, etc.)
├── lib/
│   ├── utils.js       # cn() utility for className merging
│   ├── seo-config.js  # SEO metadata configuration
│   ├── fackdata/      # Static data for components
│   │   ├── menuList.js      # Navigation menu structure
│   │   ├── servicesDataOne.js
│   │   ├── blogData.js
│   │   └── [others].js
│   └── animations/    # Framer Motion animation configs
├── assets/            # Static assets (images, etc.)
└── index.css          # Global styles and Tailwind directives

public/                # Public static files
```

### Architecture Patterns

1. **Page Composition Pattern**: App Router `page.js` files import and compose page components from `src/components/pages/`, which themselves compose section components.

   Example flow:
   ```
   app/page.js → imports full page sections (HeroOne, AboutOne, etc.)
   app/about-us/page.js → imports HeaderOne + AboutUs page component + FooterOne
   ```

2. **Section Variants**: Components like headers, footers, heros have numbered variants (headerOne, heroTwo, etc.) for different page styles.

3. **Data Separation**: Static content lives in `src/lib/fackdata/` as JavaScript objects/arrays, imported by components.

4. **SEO Configuration**: Centralized in `src/lib/seo-config.js` with `getPageSEO()` helper used in page metadata exports.

5. **Path Aliases**: `@/` points to `src/` directory (configured in jsconfig.json).

### Key Implementation Details

- **Static Export**: Site builds to static HTML. No server-side rendering at runtime. Images are unoptimized (`unoptimized: true`).
- **Trailing Slashes**: Enabled in Next.js config for static hosting compatibility.
- **Custom Tailwind Theme**: Extended with custom colors (warm, green, cream), custom spacing units, custom animations (left-right, up-down, skw), and specific font families (Bubblegum Sans, Jost, Nunito).
- **Menu Structure**: Navigation menu defined in `src/lib/fackdata/menuList.js` with support for dropdown menus. Used by header components.
- **Service Pages**: Dynamic service routes under `/services/[service-name]` for different conditions (ADHD, ASD, behavioral disorders, etc.).

## Working with Components

- **Adding a new page**: Create `app/[page-name]/page.js`, compose with Header + page component + Footer, add SEO config to `src/lib/seo-config.js`.
- **Adding a section variant**: Create new section component in appropriate `src/components/sections/[category]/` directory, follow naming pattern (e.g., `heroThree.jsx`).
- **Adding static data**: Create or modify files in `src/lib/fackdata/`, export data objects/arrays.
- **UI components**: Located in `src/components/ui/`, follow shadcn/ui patterns with custom styling.

## Styling

- Use Tailwind utility classes
- Custom spacing: `2.5`, `4.5`, `7.5`, `12.5`, `15`, `25` (in tailwind.config.js)
- Color system uses CSS variables defined in src/index.css
- Container: centered, max-width 1290px on xl breakpoint, 5px padding
- Use `cn()` from `@/lib/utils` for conditional className merging

## Important Notes

- All components use `.jsx` extension except App Router files which use `.js`
- This is configured for static hosting (export mode), so no API routes or server actions
- Images in public/assets/ and src/assets/ directories
- README.md is outdated (mentions Vite but project uses Next.js)
