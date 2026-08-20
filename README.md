# Sadaqah Stories — Interactive Charity Learning App (v5)

A **bilingual (English + Arabic, RTL)**, embeddable, dependency-free interactive
web app. Runs locally or on any static host (GitHub Pages). All source files
included for the receiving team to edit.

- **No build step. No npm.** Just open `index.html`.
- Full **EN / AR** with automatic **RTL** layout flip.
- Flow: **Home → Language → Age → Age hub → Module selector (6 modules) → Module → Completion → badge + 3 options**.
- Saves progress (stars, badges, modules done, stories read, games played, submitted stories) in `localStorage`.
- **Story search** (filter 62 stories by title/text), **lexicon search** (filter 81 terms), **read indicators** on story cards, **keyboard arrows** for the flipbook (RTL-aware), **lazy image loading**, **OG meta tags** for embed previews.

---

## The user journey (Task 2.3 flowchart implemented)

```
Home (project title + hero text in EN + AR, logos, About button)
  └─ Choose language (English | العربية)
       └─ Choose age (7–10 | 11–14 | 15–18)
            ├─ 7–10  → "Young Givers" hub
            ├─ 11–14 → "Charity Builders" hub
            └─ 15–18 → "Impact Makers" hub
                 └─ Module selector (6 cards):
                      ├─ Stories of the Past    (62 stories × 4-page flipbook + videos)
                      ├─ Impact Simulator       (9 projects × Year 1/5/10/20)
                      ├─ Play & Learn           (games for the chosen age)
                      ├─ Community Wall         (guidelines + 5 samples + submit form)
                      ├─ Helping Hands          (Sadaqah intro + YouTube video)
                      └─ Lexicon               (81-term specialised glossary, wiki-style)
                            └─ On finishing any module:
                                 Completion screen → badge earned + 3 options
                                   a) Return to module selector
                                   b) View progress (badges + stats)
                                   c) Share your story
```

The original Figma flowchart is **internal only** (not shown to users).

---

## Website placement (branding)

- **Project title** (home, prominent, bilingual): *The AI Sadaqah Journey: Explore, Give, Inspire*.
- **Funding credit** (home + About page): Led by *Northwestern University in Qatar*, funded by *QRDI Council* and *RACA*, Grant No. *MCSC02-0217-250013*.
- **Logos** (home + About page, in this order): NUQ (`nuq.jpg`) → QRDI (`qrdi.svg`) → RACA (`raca.png`).
- **About page**: bilingual "Funding and Institutional Support" section (EN left, AR right).
- **Footer** (all pages, bilingual): short credit + grant number.

---

## Files

```
app/
├── index.html          ← entry point (open or embed)
├── styles.css          ← all styling (scoped under #ss-app) + RTL rules
├── data.js             ← English content (Modules A–D) + years_art arrays
├── data-ar.js          ← Arabic content overlay (merged at boot)
├── data-stories.js     ← 62 stories × 2 languages (auto-generated)
├── data-videos.js      ← 14 story videos (story id → YouTube id)
├── data-lexicon.js     ← 81 lexicon entries (auto-generated from lexicon.docx)
├── i18n.js             ← EN + AR UI string tables + L()/t() helpers
├── app.js              ← router + views + 9 game engines + Helping Hands + Lexicon
├── embed.html          ← demo showing the iframe embed
├── embed-snippet.txt   ← copy-paste iframe snippet
├── README.md           ← this file
└── assets/
    ├── *.jpeg / *.png  ← original Firefly art + icons + logos (nuq/qrdi/raca)
    ├── stories_en/     ← 248 story images (en_NN_pY.jpg)
    └── stories_ar/     ← 248 story images (ar_NN_pY.jpg)
```

## How to run / embed

**Run locally:** double-click `index.html`.

**Embed in a website** (copy `embed-snippet.txt`, set `src`):
```html
<div style="position:relative;width:100%;max-width:1100px;aspect-ratio:16/11;border-radius:18px;overflow:hidden;">
  <iframe src="https://yoursite.org/sadaqah/index.html"
          style="position:absolute;inset:0;width:100%;height:100%;border:0;"
          title="Sadaqah Stories" loading="lazy"></iframe>
</div>
```

**Deploy to GitHub Pages:** push the `app/` folder contents to a repo, enable
Pages. Works from any static host or LMS that allows iframes.

## The 6 modules

| Module | Card label | Content |
|---|---|---|
| A | Stories of the Past | **62 stories** × 4-page flipbook (image + paragraph per page, drop-cap on page 1, RTL arrows for Arabic). **Stories 1–14** show a YouTube video after the last page. |
| B | Impact Simulator | 9 charity projects; slide Year 1 → 5 → 10 → 20 with CSS-progression images |
| C | Play & Learn | Age-gated games (3–4 per age group) — see table below |
| D | Community Wall | 6 writing guidelines + 5 sample stories + submission form (saves to browser) |
| E | Helping Hands | Sadaqah introduction + embedded YouTube video (language-following: EN video for EN, AR video for AR) |
| F | Lexicon | 81-term specialised glossary of charitable terminology, wiki-style table. EN columns: Arabic \| Transliteration \| English Usage. AR columns: المصطلح \| الاستخدام. |

## Stories of the Past (Module A) — editing

- **Data:** `data-stories.js` — `SADAQAH_STORIES.en[]` and `.ar[]` arrays, each with 62 entries: `{ id, title, pages: [{ img, text } × 4] }`.
- **Images:** `assets/stories_en/en_NN_pY.jpg` and `assets/stories_ar/ar_NN_pY.jpg` (NN = story 01–62, Y = page 1–4). Replace any file to update its image.
- **Videos:** `data-videos.js` maps story id → YouTube video id (stories 01–14). Same video shows for EN and AR. To add/change a video, edit the id in this file. Videos use `youtube-nocookie.com` + `referrerpolicy="strict-origin-when-cross-origin"` (Error 153-safe).
- **Regenerating stories from source:** the HTML files `English/englishstories.html` and `Arabic/ArabicStories.html` are the source of truth. Re-run the extraction script (PowerShell) to rebuild `data-stories.js` + copy images if the source changes.

## Impact Simulator (Module B) — swapping images

Each project carries a `years_art` array in `data.js`:
```js
id: "water",
years_art: ["water_y1.jpeg", "water_y5.jpeg", "water_y10.jpeg", "water_y20.jpeg"],
```

To use custom images: name them `<id>_y1.jpg` … `_y20.jpg` (`<id>` = water, education, food, healthcare, orphan, refugee, mosque, emergency, waqf), drop into `assets/`, and update the array if the extension differs. Missing files auto-fallback to the project's main `art` image. A CSS class (`.yr-1` → `.yr-20`) layers a scale/saturation effect so even a single image visibly "grows".

**Project IDs → suggested Year 1 → Year 20 progression:**
| id | Progression |
|---|---|
| water | hand-dug well → pump → village network → regional water system |
| education | outdoor class → 1-room school → full primary → school + graduates |
| food | food parcel → community kitchen → farms → self-sufficient region |
| healthcare | mobile clinic → small clinic → full clinic → training hospital |
| orphan | 1 sponsored child → small group → cohort in school → graduates |
| refugee | emergency tent → shelter → housing → integrated family |
| mosque | open-air prayer → small mosque → full mosque → community complex |
| emergency | disaster scene → relief kits → field hospital → rebuilt community |
| waqf | seed capital → 1 property → portfolio → endowment distributing |

## Lexicon (Module F) — editing

- **Data:** `data-lexicon.js` — `SADAQAH_LEXICON[]` array of 81 entries: `{ arabic, translit, en_use, ar_use }`.
- **Source:** `lexicon.docx` (11 tables). Re-run `extract_lexicon.ps1` to regenerate.
- **Columns per language:** EN shows `arabic | translit | en_use`; AR shows `arabic | ar_use` (RTL).

## Helping Hands (Module E) — video editing

The module shows only the selected language's content + video:
- **English:** video ID `iKOfCm1X79g`
- **Arabic:** video ID `734vFtBeZ60`

Both use the privacy-enhanced `youtube-nocookie.com` domain with `referrerpolicy="strict-origin-when-cross-origin"` to avoid Error 153. To change a video, edit the `en.video` / `ar.video` IDs in `app.js` (`helpingHands()` function).

## Play & Learn (Module C) — age-gated games

| Age | Games |
|---|---|
| 7–10 | Charity Match (memory) · Fill the Donation Box (drag/click) · The Giving Tree (quiz-grow) |
| 11–14 | Build Your Community (budget) · Sort the Zakat (8 categories) · Charity Chain Reaction · Real Impact Calculator |
| 15–18 | Waqf Architect (20-yr simulation) · The Giving Dilemma (ethics) |

Each game awards stars + a badge; finishing routes to the completion screen. Game titles are bilingual via the `GAME_TITLES` table in `app.js`.

## Customising

- **UI strings (both languages):** `i18n.js` — `en` and `ar` tables.
- **Content:** `data.js` (English) + `data-ar.js` (Arabic overlay, keyed by id).
- **Stories:** `data-stories.js` + images in `assets/stories_en/`, `assets/stories_ar/`.
- **Story videos:** `data-videos.js`.
- **Lexicon:** `data-lexicon.js`.
- **Theme colours/fonts:** CSS variables at the top of `styles.css`.
- **Game concept sketches:** illustrated animated SVG generators in `app.js` (`gameSketch()`) — one per game, watercolor palette, CSS-animated (float/drop/glow), reduced-motion safe.
- **Add art:** drop images in `assets/`, reference by filename.
- **Logos:** `assets/nuq.jpg`, `assets/qrdi.svg`, `assets/raca.png` (replace to rebrand).

## Accessibility & privacy

- Drag-and-drop games also work by **click/tap** (touch-friendly).
- Honours `prefers-reduced-motion`.
- Full RTL support for Arabic (including mirrored flipbook arrows).
- No accounts, analytics, or cookies — data stays in the browser.
- The only external requests are YouTube video embeds (privacy-enhanced mode via `youtube-nocookie.com`).
