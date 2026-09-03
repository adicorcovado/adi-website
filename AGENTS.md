## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
- [Motion for React — animation patterns](https://motion.dev/docs/react) — consult before building any animated component; reuse Motion's documented patterns (variants, `AnimatePresence`, scroll/gesture animations, layout animations) instead of inventing custom ones.

## Project context

ADI Corcovado is a non-profit association that runs a hospedaje (lodging), food service, and the Sirena ranger station inside Corcovado National Park, Costa Rica. The site exists to explain who they are, what they run in the park, and the projects they fund/operate, and to drive contact/support.

Expect a small marketing-style site rather than an app: pages like Home, Projects, Corcovado, About Us, and Contact. Design and build with that in mind — modern, beautiful, content-forward, image/nature-driven, and fast. Prioritize a polished, animated feel (see Motion section below) without hurting load performance — this is a marketing site, first impressions and page speed both matter.

## Styling conventions

- **Colors:** only use colors defined in the `@theme` block in [src/styles/global.css](src/styles/global.css) (`primary`, `secondary`, `accent` scales). Never hardcode a hex/rgb/oklch value or use arbitrary Tailwind color values (`bg-[#123456]`) in components or pages. If a needed color/shade doesn't exist yet, add it to the `@theme` block first, then use the generated utility.
- **Fonts:** two typefaces, loaded via the Adobe Fonts (Typekit) `<link>` in [src/layouts/Layout.astro](src/layouts/Layout.astro) and configured globally in `global.css`:
  - **Brevia** — titles and subtitles (headings). Applied globally to `h1`–`h6` in `global.css`; use the `font-brevia` utility for subtitle-style text that isn't a real heading element.
  - **Futura PT** — body copy. This is the site's `--default-font-family`, so it applies automatically; no class needed for regular body text.
  - Don't hardcode `font-family` in component styles — rely on the global defaults and the `font-brevia`/`font-bold`/`font-semibold` utilities.
- **Tailwind first.** Use Tailwind utility classes for styling. Only write custom CSS when Tailwind genuinely can't express it (complex keyframes, third-party widget overrides, etc.), and when you do, put it in its own file under `src/styles/` (see `swiper.css` for the existing pattern) rather than inline `<style>` blocks or ad hoc classes.

## Internationalization

- No hardcoded user-facing text in components or pages. Every string lives in [src/utils/translations.ts](src/utils/translations.ts) and is pulled in through a utility function — never inline literals.
- The site launches with `en` and `es` (see `src/utils/languages.ts` and the `i18n` config in `astro.config.mjs`), but the translation utilities must stay language-count-agnostic so adding a third language later is just adding a key, not restructuring code. Keep `translations.ts`'s language keys, `languages.ts`'s supported-language list, and `astro.config.mjs`'s `i18n.locales` in sync.
- Structure `translations.ts` by page/section (e.g. `translations.en.home.hero.title`) rather than one flat namespace, so it scales as pages are added.

## Component architecture

- Aim for a solid set of common/shared components (buttons, nav, cards, section wrappers, etc.) rather than one-off, page-specific markup.
- Separate components by rendering target:
  - `src/components/server/` — Astro components (`.astro`), static/server-rendered, no client JS.
  - `src/components/client/` — React components (`.tsx`) that need interactivity or animation and are hydrated as Astro islands (`client:*` directives).
- Use the narrowest `client:*` hydration directive that works (e.g. `client:visible` for below-the-fold animated sections) to keep the site fast — don't ship JS for anything that can stay server-rendered.

## Animation

- Use the [Motion](https://motion.dev/) library (`motion/react`) for animating React (client) components.
- Check the Motion docs for existing, documented animation patterns before writing custom animation logic.
- Favor animations that enhance perceived performance and polish (entrance/scroll reveals, smooth transitions) without blocking initial content or hurting Core Web Vitals — this site needs to feel fast, not just look animated.
