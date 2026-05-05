# Changelog

## 2026-05-05

### Phase 1 and Phase 2
- Initialized the project as a Next.js App Router application with TypeScript, Tailwind CSS, and `src` directory structure.
- Added project config files: `package.json`, `package-lock.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `next-env.d.ts`, and `.gitignore`.
- Created the required route skeletons:
  - `/`
  - `/about`
  - `/services`
  - `/services/[slug]`
  - `/case-studies`
  - `/tools`
  - `/insights`
  - `/insights/[slug]`
  - `/contact`
- Added reusable base components:
  - `Header`
  - `MobileNav`
  - `Footer`
  - `SectionShell`
  - `CTA`
  - `ServiceCard`
  - `CaseStudyCard`
  - `ToolCard`
  - `ArticleCard`
  - `ContactForm`
- Added structured data files for services, case studies, tools, insights, navigation, and contact placeholders.
- Added a basic shared layout, global styling, route metadata, placeholder content structure, and a not-found page.
- Used `assets/images/Future-of-AI.jpg` only as a temporary homepage visual reference.
- Kept tools and brand displays text-based because approved logo/icon assets are not yet available.
- Installed dependencies and validated the scaffold with a successful `npm run build`.
