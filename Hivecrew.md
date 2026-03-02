# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HIVE Studio / hivecrew — a single-page marketing website targeting Southeast Asian brand sponsors. The site introduces the HIVE crew (Seoul-based creative entertainment collective) and drives sponsor enquiries via Instagram DM.

**Live URL:** https://hivecrew.vercel.app
**GitHub:** https://github.com/Jadenkkk/hivecrew

## Architecture

Single file: `index.html` contains all HTML, CSS, and JavaScript with no build step or dependencies.

- **Fonts:** Google Fonts (Cormorant Garamond + Inter) loaded via CDN
- **i18n:** Custom inline JS object `T` with `en` and `ko` keys — `setLang(l)` swaps all `[data-i18n]` elements
- **Animations:** IntersectionObserver-based fade-in using `.f-in` / `.show` classes
- **Deployment:** Vercel (auto-deploys on push to `main`)

## Deployment

```bash
# Preview locally
python3 -m http.server 3000

# Deploy (commit + push triggers Vercel auto-deploy)
git add index.html
git commit -m "description"
git push
```

## Workflow Guidelines (Claude Code)

After every code change:
1. **Always show the local preview link**: `http://localhost:3000`
2. **Always commit and push** when the user confirms — Vercel auto-deploys on push to `main`
3. **Live site**: https://hivecrew.vercel.app
4. **Always add CSS/HTML comments** explaining what was changed and why — e.g. `/* [변경] hero title 크기 축소: 68px→52px, 사용자 요청 */`

## Design Tokens

Defined as CSS variables in `:root`:

| Variable | Value | Usage |
|----------|-------|-------|
| `--ink` | `#111110` | Primary text |
| `--gold` | `#b09060` | Accent colour |
| `--off` | `#f7f5f1` | Section backgrounds |
| `--warm` | `#edeae3` | Alternate section backgrounds |
| `--muted` | `#8c897f` | Body / secondary text |

## Content

- **Contact:** All CTAs link to https://www.instagram.com/hivecrew.official/
- **Language:** EN (default) + KO toggle — both languages live in the `T` object in the `<script>` tag
- **No backend or database** — purely static
