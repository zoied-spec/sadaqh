# Sadaqah Stories — Interactive Charity Learning App (v2)

A **bilingual (English + Arabic, RTL)**, embeddable, dependency-free interactive
web app. Runs locally or on any static host (GitHub Pages). All source files
included for the receiving team to edit.

- **No build step. No npm. No external requests.** Just open `index.html`.
- Full **EN / AR** with automatic **RTL** layout flip.
- Flow: **Home → Language → Age → Age hub → Module selector → Module → Completion → badge + 3 options**.
- Saves progress (stars, badges, modules done, stories read, games played, submitted stories) in `localStorage`.

---

## The user journey (Task 2.3 flowchart implemented)

```
Home (hero text in EN + AR side by side)
  └─ Choose language (English | العربية)
       └─ Choose age (7–10 | 11–14 | 15–18)
            ├─ 7–10  → "Young Givers" hub
            ├─ 11–14 → "Charity Builders" hub
            └─ 15–18 → "Impact Makers" hub
                 └─ Module selector (4 cards, no "Module A/B" labels):
                      ├─ Stories of the Past  (10 historical figures)
                      ├─ Impact Simulator    (9 projects × Year 1/5/10/20, CSS/SVG art)
                      ├─ Play & Learn        (3 games for the chosen age)
                      └─ Community Wall      (guidelines + 5 samples + submit form)
                            └─ On finishing any module:
                                 Completion screen → badge earned + 3 options
                                   a) Return to module selector
                                   b) View progress (badges + stats)
                                   c) Share your story
```

The original Figma flowchart is **internal only** (not shown to users).

---

## Files

```
app/
├── index.html          ← entry point (open or embed)
├── styles.css          ← all styling (scoped under #ss-app) + RTL rules
├── data.js             ← all English content (Modules A–D)
├── data-ar.js          ← Arabic content overlay (merged at boot)
├── i18n.js             ← EN + AR UI string tables + L()/t() helpers
├── app.js              ← router + views + 9 game engines + SVG illustrations
├── embed.html          ← demo showing the iframe embed
├── embed-snippet.txt   ← copy-paste iframe snippet
├── README.md           ← this file
└── assets/             ← 19 Firefly art images + icons
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

## Customising (for the receiving team)

- **Edit UI strings (both languages):** `i18n.js` — `en` and `ar` tables.
- **Edit content:** `data.js` (English) + `data-ar.js` (Arabic). The Arabic
  overlay is keyed by id and merged automatically; add/translate any item.
- **Theme colours/fonts:** CSS variables at the top of `styles.css`.
- **Impact illustrations:** each project's `years_art` array in `data.js`
  lists 4 image filenames (Year 1 / 5 / 10 / 20). Drop matching files into
  `assets/` to show real per-year progression. See "Swapping impact images"
  below.
- **Game concept sketches:** SVG generators in `app.js` (`gameSketch()`).
- **Add art:** drop images in `assets/`, reference by filename.

### Swapping impact images (Module B)

Each of the 9 impact projects shows imagery that progresses across Year 1 → 5
→ 10 → 20. The active images are defined per project in `data.js`:

```js
id: "water",
years_art: ["water_y1.jpeg", "water_y5.jpeg", "water_y10.jpeg", "water_y20.jpeg"],
```

**To use your own Adobe Firefly images:**
1. Generate 4 images per project showing the progression (e.g. a single
   village tap at Year 1 → a full well network at Year 20).
2. Name them `<id>_y1.jpg`, `<id>_y5.jpg`, `<id>_y10.jpg`, `<id>_y20.jpg`
   where `<id>` is the project id: `water`, `education`, `food`,
   `healthcare`, `orphan`, `refugee`, `mosque`, `emergency`, `waqf`.
3. Drop the files into `assets/`.
4. If your extension differs (`.jpg` vs `.jpeg`), update the matching
   `years_art` array in `data.js`.

**Graceful fallback:** if a per-year image file is missing, the app
automatically falls back to the project's main `art` image, so the simulator
always renders. A CSS class (`.yr-1` → `.yr-20`) layers a scale/saturation
effect so even a single image visibly "grows" across the years.

**Project IDs → suggested Firefly themes:**
| id | Suggested Year 1 → Year 20 progression |
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

## The 9 mini-games (Module C — age-gated)

| Age | Games |
|---|---|
| 7–10 | Charity Match (memory) · Fill the Donation Box (drag/click) · The Giving Tree (quiz-grow) |
| 11–14 | Build Your Community (budget) · Sort the Zakat (8 categories) · Charity Chain Reaction |
| 15–18 | Waqf Architect (20-yr simulation) · The Giving Dilemma (ethics) · Real Impact Calculator |

Each game awards stars + a badge; finishing routes to the completion screen.

## Accessibility & privacy

- Drag-and-drop games also work by **click/tap** (touch-friendly).
- Honours `prefers-reduced-motion`.
- Full RTL support for Arabic.
- No accounts, analytics, cookies, or network calls — data stays in the browser.
