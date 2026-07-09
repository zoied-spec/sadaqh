/* =========================================================================
   Sadaqah Stories — Application Logic (v2)
   Bilingual (EN/AR) with RTL. Flow:
     Home → Language → Age → Age-hub → Module selector → Module → Completion
   No dependencies. 9 playable mini-games preserved from v1.
   ========================================================================= */

(function () {
  "use strict";
  const D = window.SADAQAH_DATA;
  const ASSET = "assets/";
  // merge Arabic content into module arrays
  if (window.mergeArabic) window.mergeArabic();

  /* ----------------------------- State ---------------------------------- */
  const state = {
    route: "home",
    params: {},
    lang: localStorage.getItem("ss_lang") || "en",
    age: null,                 // "7-10" | "11-14" | "15-18"
    lastModule: null,          // for completion screen context
    simId: "water",
    simYear: 0,
    storyArt: 0,
    storyPage: 0,
    stars: Number(localStorage.getItem("ss_stars") || 0),
    badges: JSON.parse(localStorage.getItem("ss_badges") || "[]"),
    wall: JSON.parse(localStorage.getItem("ss_wall") || "[]"),
    stats: JSON.parse(localStorage.getItem("ss_stats") || '{"modulesDone":[],"storiesRead":[],"gamesPlayed":[]}'),
    _mem: null, _fill: null, _tree: null, _comm: null, _zakat: null,
    _chain: null, _waqf: null, _dilemma: null, _calc: null,
  };

  function save() {
    localStorage.setItem("ss_stars", String(state.stars));
    localStorage.setItem("ss_badges", JSON.stringify(state.badges));
    localStorage.setItem("ss_wall", JSON.stringify(state.wall));
    localStorage.setItem("ss_stats", JSON.stringify(state.stats));
    localStorage.setItem("ss_lang", state.lang);
  }
  function t(key) { return window.t ? window.t(key, state.lang) : key; }
  function L(obj, field) { return window.L ? window.L(obj, field, state.lang) : (obj ? obj[field] : ""); }
  const isRTL = () => state.lang === "ar";

  function track(stat, id) {
    state.stats[stat] = state.stats[stat] || [];
    if (!state.stats[stat].includes(id)) { state.stats[stat].push(id); save(); }
  }
  function addStars(n, reason) {
    state.stars += n; save(); refreshStars();
    if (reason) toast("+" + n + " " + t("stars.count") + " — " + reason);
  }
  function awardBadge(id) {
    if (!state.badges.find((b) => b.id === id)) {
      state.badges.push({ id });
      save();
      toast(t("badge.earned") + ": " + t("b." + id));
      return true;
    }
    return false;
  }

  let toastTimer;
  function toast(msg) {
    let el = document.getElementById("ss-toast");
    if (!el) { el = document.createElement("div"); el.id = "ss-toast"; el.className = "ss-toast"; document.body.appendChild(el); }
    el.textContent = msg; el.style.display = "block";
    clearTimeout(toastTimer); toastTimer = setTimeout(() => (el.style.display = "none"), 2600);
  }
  function refreshStars() { const el = document.getElementById("ss-star-count"); if (el) el.textContent = state.stars; }

  /* ----------------------------- Router --------------------------------- */
  function go(route, params) {
    state.route = route; state.params = params || {};
    if (route === "play" && params && params.id) track("gamesPlayed", params.id);
    if (route === "story" && params && params.id) track("storiesRead", params.id);
    if (route === "home") { state.lang = null; save(); }
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ----------------------------- Shell ---------------------------------- */
  function dirAttr() { return isRTL() ? "rtl" : "ltr"; }
  function applyDir() { document.documentElement.setAttribute("dir", dirAttr()); document.documentElement.setAttribute("lang", state.lang || "en"); }

  function shell(inner) {
    applyDir();
    return `
      <div class="ss-topbar">
        <div class="ss-brand" data-act="go-home">
          <img src="${ASSET}icon_tree.png" alt="">
          <div>
            <div class="ss-brand-name">${t("brand.name")}</div>
            <span class="ss-brand-sub">${t("brand.sub")}</span>
          </div>
        </div>
        <div class="ss-spacer"></div>
        <div class="ss-stars" data-go="progress">
          ⭐ <span id="ss-star-count">${state.stars}</span>
        </div>
        ${state.lang ? `<button class="ss-lang-toggle" data-act="toggle-lang">${state.lang === "en" ? "العربية" : "English"}</button>` : ""}
      </div>
      <div class="ss-wrap"><div class="ss-view">${inner}</div></div>`;
  }

  /* ----------------------------- HOME ----------------------------------- */
  function home() {
    // Home shows hero text in BOTH languages (per requirement), then CTA.
    const en = window.SADAQAH_I18N.en, ar = window.SADAQAH_I18N.ar;
    return `
      <div class="ss-hero ss-hero-home">
        <div class="ss-home-logo"><img src="${ASSET}icon_tree.png" alt=""></div>
        <div class="ss-bilingual">
          <div class="ss-lang-block ss-lang-en" dir="ltr">
            <h1>${en["home.h1"]}</h1>
            <p>${en["home.p"]}</p>
          </div>
          <div class="ss-lang-block ss-lang-ar" dir="rtl">
            <h1>${ar["home.h1"]}</h1>
            <p>${ar["home.p"]}</p>
          </div>
        </div>
        <div class="ss-cta" style="margin-top:24px;">
          <button class="ss-btn ss-btn-primary ss-btn-lg" data-go="language">${en["home.cta.start"]} / ${ar["home.cta.start"]}</button>
        </div>
      </div>`;
  }

  /* ----------------------------- LANGUAGE ------------------------------- */
  function language() {
    return `
      <div class="ss-center-screen">
        <h2 class="ss-prompt">${t("home.lang")}</h2>
        <p class="ss-prompt-sub">${t("home.lang.sub")}</p>
        <div class="ss-choice-row">
          <button class="ss-big-choice" data-act="pick-lang" data-lang="en" dir="ltr">
            <span class="ss-bc-emoji">🇬🇧</span><span class="ss-bc-label">English</span>
          </button>
          <button class="ss-big-choice" data-act="pick-lang" data-lang="ar" dir="rtl">
            <span class="ss-bc-emoji">📖</span><span class="ss-bc-label">العربية</span>
          </button>
        </div>
      </div>`;
  }

  /* ----------------------------- AGE ------------------------------------ */
  function age() {
    const ages = [["7-10","age.7-10"],["11-14","age.11-14"],["15-18","age.15-18"]];
    return `
      <div class="ss-center-screen">
        <h2 class="ss-prompt">${t("home.age")}</h2>
        <p class="ss-prompt-sub">${t("home.age.sub")}</p>
        <div class="ss-choice-row">
          ${ages.map(([a,key]) => `
            <button class="ss-big-choice" data-act="pick-age" data-age="${a}">
              <span class="ss-bc-emoji">${ageEmoji(a)}</span>
              <span class="ss-bc-label">${t(key)}</span>
            </button>`).join("")}
        </div>
      </div>`;
  }
  function ageEmoji(a) { return a === "7-10" ? "🌱" : a === "11-14" ? "🏗️" : "🌍"; }

  /* ----------------------------- AGE HUB -------------------------------- */
  function hub() {
    const age = state.age || "7-10";
    if (!state.age) state.age = age;
    return `
      <div class="ss-hub-screen">
        <div class="ss-hub-emoji">${ageEmoji(state.age)}</div>
        <h2 class="ss-hub-title">${t("hub." + state.age + ".title")}</h2>
        <p class="ss-hub-desc">${t("hub." + state.age + ".desc")}</p>
        <button class="ss-btn ss-btn-primary ss-btn-lg" data-go="modules">${t("nav.continue")} →</button>
      </div>`;
  }

  /* ----------------------------- MODULE SELECTOR ------------------------ */
  function modules() {
    const mods = [
      { go: "module-a", label: t("mod.stories"), desc: t("mod.stories.desc"), art: "rumah_a.jpeg" },
      { go: "module-b", label: t("mod.impact"), desc: t("mod.impact.desc"), art: "water_a.jpeg" },
      { go: "module-c", label: t("mod.games"), desc: t("mod.games.desc"), art: "trees_b.jpeg" },
      { go: "module-d", label: t("mod.wall"), desc: t("mod.wall.desc"), art: "food_parcel_a.jpeg" },
    ];
    return `
      <div class="ss-section-head">
        <h2>${t("hub." + state.age + ".title")}</h2>
        <p>${t("hub." + state.age + ".desc")}</p>
      </div>
      <div class="ss-modules">
        ${mods.map((m, i) => `
          <div class="ss-mod-card" data-go="${m.go}">
            <div class="ss-mod-art" style="background-image:url('${ASSET}${m.art}')"></div>
            <div class="ss-mod-body">
              <h3>${m.label}</h3>
              <p>${m.desc}</p>
              <span class="ss-mod-go">${t("mod.enter")} →</span>
            </div>
          </div>`).join("")}
      </div>`;
  }

  /* ----------------------------- MODULE A (stories) ---------------------
     Uses the extracted 62-story dataset (SADAQAH_STORIES) which overrides the
     legacy 10-story MODULE_A. Each story = 4 pages (image + paragraph). */
  const STORIES = window.SADAQAH_STORIES || { en: [], ar: [] };
  function stories() { return STORIES[state.lang] || STORIES.en; }

  function moduleA() {
    const list = stories();
    return `
      <div class="ss-section-head">
        <h2>${t("mod.stories")}</h2>
        <p>${t("mod.stories.desc")}</p>
      </div>
      <div class="ss-grid">
        ${list.map((s, i) => `
          <div class="ss-story-card" data-act="open-story" data-id="${s.id}">
            <div class="ss-art" style="background-image:url('${ASSET}${s.pages[0].img}')"></div>
            <div class="ss-body">
              <div class="ss-num">${t("story.of")} ${i+1} / ${list.length}</div>
              <h4>${s.title}</h4>
            </div>
          </div>`).join("")}
      </div>`;
  }
  function storyView() {
    const list = stories();
    const s = list.find((x) => x.id === (state.params.id || ""));
    if (!s) return `<div class="ss-empty">${t("nav.allStories")}</div>`;
    const idx = list.indexOf(s) + 1;
    const page = Math.min(state.storyPage || 0, s.pages.length - 1);
    const pg = s.pages[page];
    const last = page === s.pages.length - 1;
    return `
      <div class="ss-back" data-go="module-a">← ${t("nav.allStories")}</div>
      <div class="ss-flipbook">
        <div class="ss-fb-head">
          <div class="ss-num">${t("story.of")} ${idx} / ${list.length}</div>
          <h2 class="ss-detail-title">${s.title}</h2>
        </div>
        <div class="ss-fb-page">
          <div class="ss-fb-img"><img src="${ASSET}${pg.img}" alt=""></div>
          <div class="ss-fb-text ${page===0?'ss-dropcap':''}">${pg.text}</div>
        </div>
        <div class="ss-fb-nav">
          <button class="ss-fb-arrow" data-act="fb-prev" ${page===0?'disabled':''}>←</button>
          <div class="ss-fb-dots">${s.pages.map((_,i)=>`<span class="ss-fb-dot ${i===page?'on':''}" data-act="fb-goto" data-page="${i}"></span>`).join("")}</div>
          <button class="ss-fb-arrow" data-act="fb-next" ${last?'disabled':''}>→</button>
        </div>
        ${last ? `<button class="ss-btn ss-btn-primary ss-btn-done" data-act="finish-module" data-mod="stories">${t("complete.opt.progress")} →</button>` : ''}
      </div>`;
  }

  /* ----------------------------- MODULE B (impact) ---------------------- */
  function moduleB() {
    const sim = D.MODULE_B.find((p) => p.id === state.simId) || D.MODULE_B[0];
    const yi = state.simYear;
    const yr = sim.years[yi];
    return `
      <div class="ss-section-head">
        <h2>${t("mod.impact")}</h2>
        <p>${t("impact.progression")}</p>
      </div>
      <div class="ss-sim-tabs">
        ${D.MODULE_B.map((p) => `
          <button class="ss-sim-tab ${p.id===sim.id?'active':''}" data-act="pick-sim" data-sim="${p.id}">${p.icon} ${L(p,"name")}</button>`).join("")}
      </div>
      <div class="ss-sim">
        <div class="ss-sim-head">
          <div class="ss-sim-illu">${impactArt(sim, yi)}</div>
          <div>
            <h3>${sim.icon} ${L(sim,"title")}</h3>
            <div class="ss-cost">${t("impact.cost")}: ${sim.cost}</div>
            <p class="ss-sim-overview">${L(sim,"overview")}</p>
          </div>
        </div>
        <div class="ss-year-rail">
          ${sim.years.map((y,i) => `
            <button class="ss-year-btn ${i===yi?'active':''}" data-act="pick-year" data-year="${i}">
              ${t("year."+["1","5","10","20"][i])}<small>${L(y,"metric")}</small>
            </button>`).join("")}
        </div>
        <div class="ss-year-panel">
          <div class="ss-year-prog">${[0,1,2,3].map((i) => `<span class="${i<=yi?'on':''}"></span>`).join("")}</div>
          <h3 class="ss-year-h">${t("year."+["1","5","10","20"][yi])}</h3>
          <div class="ss-year-metric">${L(yr,"metric")}</div>
          <ul>${(L(yr,"points") || yr.points).map((p) => `<li>${p}</li>`).join("")}</ul>
        </div>
      </div>
      <button class="ss-btn ss-btn-primary ss-btn-done" data-act="finish-module" data-mod="impact">${t("complete.opt.progress")} →</button>`;
  }

  /* ---- CSS/SVG year-progression illustrations ----
     Each project draws a simple SVG that grows/progresses Y1→Y20.
     Palette: warm gold/teal matching the app. */
  /* ---- Impact imagery (Adobe Firefly assets with year progression) ----
     Each project carries a `years_art` array: [y1, y5, y10, y20] filenames
     in assets/. If a per-year file is missing (404), the <img> falls back
     to the project's main `art` image via onerror. A CSS class (yr-1..yr-20)
     layers a visual progression effect (scale / saturation / brightness) so
     Y1 -> Y20 visibly "grows" even with a single image.

     TO SWAP IMAGES (for the receiving team):
       1. Export 4 Firefly images per project, named: <id>_y1.jpg, _y5.jpg,
          _y10.jpg, _y20.jpg (e.g. water_y1.jpg ... water_y20.jpg).
       2. Drop them into the assets/ folder.
       3. Update the matching years_art array in data.js if your filenames
          differ. Done — no code changes needed.
  */
  function impactArt(project, yearIdx) {
    const yrClass = ["yr-1", "yr-5", "yr-10", "yr-20"][yearIdx];
    const yearFiles = (project.years_art && project.years_art.length === 4)
      ? project.years_art
      : [project.art, project.art, project.art, project.art];
    const fallback = project.art;
    const file = yearFiles[yearIdx] || fallback;
    // onerror: if the per-year image is absent, fall back to the main art,
    // then strip the handler so it doesn't loop.
    return `<img class="ss-sim-img ${yrClass}" src="${ASSET}${file}" alt="${L(project,"title")}"
      onerror="if(this.src.indexOf('${ASSET}${fallback}')<0){this.src='${ASSET}${fallback}';}else{this.onerror=null;}">`;
  }

  /* ----------------------------- MODULE C (games) ----------------------- */
  // Only the games for the selected age are shown. No age headers, no concept
  // paragraphs, no "Learning:" lines — just title + concept sketch + Play.
  function moduleC() {
    const group = D.MODULE_C.find((g) => g.age === state.age) || D.MODULE_C[0];
    return `
      <div class="ss-section-head">
        <h2>${t("mod.games")}</h2>
      </div>
      <div class="ss-game-grid">
        ${group.games.map((g) => `
          <div class="ss-game-card">
            <div class="ss-gtop">
              <span class="ss-gicon">${g.icon}</span>
              <h4>${L(g,"title")}</h4>
            </div>
            <div class="ss-game-sketch">${gameSketch(g.id)}</div>
            <button class="ss-btn ss-btn-teal ss-play" data-go="play" data-id="${g.id}">▶ ${t("games.play")}</button>
          </div>`).join("")}
      </div>`;
  }
  // Simple concept sketch per game (line-drawing SVG).
  function gameSketch(id) {
    const s = {
      "charity-match": `<svg viewBox="0 0 80 50" class="ss-sketch"><rect x="5" y="5" width="18" height="22" rx="3" fill="#c79a3a"/><rect x="30" y="5" width="18" height="22" rx="3" fill="#fffdf8" stroke="#c79a3a"/><rect x="55" y="5" width="18" height="22" rx="3" fill="#2f8f87"/></svg>`,
      "fill-box": `<svg viewBox="0 0 80 50" class="ss-sketch"><rect x="20" y="15" width="40" height="28" rx="3" fill="none" stroke="#c79a3a" stroke-width="2" stroke-dasharray="4 3"/><circle cx="35" cy="8" r="5" fill="#e8a23a"/><rect x="50" y="3" width="8" height="8" fill="#c66b6b"/></svg>`,
      "giving-tree": `<svg viewBox="0 0 80 50" class="ss-sketch"><rect x="37" y="30" width="6" height="18" fill="#6b5a48"/><circle cx="40" cy="25" r="14" fill="#5b8c4f"/></svg>`,
      "build-community": `<svg viewBox="0 0 80 50" class="ss-sketch"><rect x="10" y="20" width="18" height="25" fill="#e8d5a8"/><rect x="32" y="15" width="18" height="30" fill="#c79a3a"/><rect x="54" y="25" width="18" height="20" fill="#2f8f87"/></svg>`,
      "sort-zakat": `<svg viewBox="0 0 80 50" class="ss-sketch"><rect x="5" y="10" width="20" height="30" rx="2" fill="none" stroke="#6b5a48"/><rect x="30" y="10" width="20" height="30" rx="2" fill="none" stroke="#6b5a48"/><rect x="55" y="10" width="20" height="30" rx="2" fill="#c79a3a"/><circle cx="65" cy="25" r="6" fill="#fff"/></svg>`,
      "chain-reaction": `<svg viewBox="0 0 80 50" class="ss-sketch"><circle cx="12" cy="25" r="6" fill="#c79a3a"/><circle cx="32" cy="25" r="6" fill="#2f8f87"/><circle cx="52" cy="25" r="6" fill="#5b8c4f"/><circle cx="72" cy="25" r="6" fill="#c66b6b"/><line x1="18" y1="25" x2="26" y2="25" stroke="#6b5a48"/><line x1="38" y1="25" x2="46" y2="25" stroke="#6b5a48"/><line x1="58" y1="25" x2="66" y2="25" stroke="#6b5a48"/></svg>`,
      "waqf-architect": `<svg viewBox="0 0 80 50" class="ss-sketch"><rect x="15" y="10" width="50" height="32" fill="none" stroke="#c79a3a" stroke-width="2"/><line x1="15" y1="20" x2="65" y2="20" stroke="#c79a3a"/><line x1="15" y1="30" x2="65" y2="30" stroke="#c79a3a"/><circle cx="40" cy="38" r="4" fill="#6b5a48"/></svg>`,
      "giving-dilemma": `<svg viewBox="0 0 80 50" class="ss-sketch"><path d="M20 10 L20 35 L40 35" fill="none" stroke="#2f8f87" stroke-width="2"/><path d="M60 10 L60 35 L40 35" fill="none" stroke="#c66b6b" stroke-width="2"/><circle cx="40" cy="35" r="4" fill="#c79a3a"/></svg>`,
      "impact-calc": `<svg viewBox="0 0 80 50" class="ss-sketch"><rect x="8" y="18" width="64" height="8" rx="4" fill="#e8d5a8"/><circle cx="30" cy="22" r="9" fill="#c79a3a"/><rect x="50" y="32" width="18" height="10" fill="#2f8f87"/><text x="59" y="40" text-anchor="middle" font-size="8" fill="#fff">=</text></svg>`,
    };
    return s[id] || s["charity-match"];
  }

  /* ----------------------------- MODULE D (wall) ------------------------ */
  function moduleD() {
    const imgs = ["food_parcel_a.jpeg","education.jpeg","child_donate.jpeg","food_a.jpeg","water_b.jpeg"];
    return `
      <div class="ss-section-head">
        <h2>${t("wall.guidelines")}</h2>
        <p>${t("wall.guidelinesDesc")}</p>
      </div>
      <div class="ss-guide-grid">
        ${D.MODULE_D.guidelines.map((g,i) => `
          <div class="ss-guide-card">
            <h4>${i+1}. ${L(g,"title")}</h4>
            <div class="ss-do"><div class="ss-list-h">✔ ${t("wall.do")}</div><ul>${(L(g,"do")||g.do).map((d)=>`<li>${d}</li>`).join("")}</ul></div>
            <div class="ss-dont"><div class="ss-list-h">✘ ${t("wall.dont")}</div><ul>${(L(g,"dont")||g.dont).map((d)=>`<li>${d}</li>`).join("")}</ul></div>
          </div>`).join("")}
      </div>
      <div class="ss-section-head" style="margin-top:36px;">
        <h2>${t("nav.wall")}</h2>
      </div>
      <div class="ss-wall">
        ${D.MODULE_D.samples.map((s,i) => `
          <div class="ss-wall-card" data-go="sample" data-id="${i}">
            <div class="ss-wall-img" style="background-image:url('${ASSET}${imgs[i]}')"></div>
            <div class="ss-wall-body"><h4>${L(s,"title")}</h4><p class="ss-teaser">${L(s,"teaser")}</p></div>
          </div>`).join("")}
        ${state.wall.map((s,i) => `
          <div class="ss-wall-card" data-act="read-own" data-idx="${i}">
            <div class="ss-wall-img" style="background-image:url('${ASSET}icon_donation.png');background-size:60%;background-color:var(--bg-soft)"></div>
            <div class="ss-wall-body"><h4>${esc(s.title)}</h4><p class="ss-teaser">${t("wall.by")} ${esc(s.author)} — ${t("wall.yourStory")}</p></div>
          </div>`).join("")}
      </div>
      <div class="ss-submit">
        <h3>${t("wall.share")}</h3>
        <p class="ss-submit-sub">${t("wall.shareDesc")}</p>
        <div class="ss-field"><label>${t("wall.author")}</label><input id="ss-f-author" placeholder="..."></div>
        <div class="ss-field"><label>${t("wall.title")}</label><input id="ss-f-title" placeholder="..."></div>
        <div class="ss-field"><label>${t("wall.body")}</label><textarea id="ss-f-body" rows="7" placeholder="${t("wall.bodyPlaceholder")}"></textarea>
          <div class="ss-counter"><span id="ss-wc">0</span> ${t("wall.words")} · ${t("wall.wordTarget")}</div></div>
        <button class="ss-btn ss-btn-primary" data-act="submit-story">${t("wall.post")} →</button>
      </div>`;
  }
  function sampleView() {
    const s = D.MODULE_D.samples[Number(state.params.id||0)];
    if (!s) return `<div class="ss-empty"></div>`;
    const body = L(s,"body"); const arr = Array.isArray(body) ? body : s.body;
    return `
      <div class="ss-back" data-go="module-d">← ${t("nav.wall")}</div>
      <h2 class="ss-detail-title">${L(s,"title")}</h2>
      <p class="ss-teaser">${L(s,"teaser")}</p>
      <div class="ss-prose">${arr.map((p)=>`<p>${p}</p>`).join("")}</div>`;
  }

  /* ----------------------------- PROGRESS / BADGES ---------------------- */
  function progress() {
    const all = ["explorer","matcher","grower","zakat","builder","architect","reader","simulator","writer"];
    const imgs = { explorer:"icon_badge.png", matcher:"icon_donation.png", grower:"icon_tree.png", zakat:"icon_zakat.png", builder:"mosque.jpeg", architect:"education.jpeg", reader:"icon_badge.png", simulator:"water_a.jpeg", writer:"icon_donation.png" };
    return `
      <div class="ss-badge-screen">
        <img src="${ASSET}icon_badge.png" alt="">
        <h2 class="ss-badge-h">${t("badges.title")}</h2>
        <p class="ss-badge-sub">⭐ <strong>${state.stars}</strong> ${t("badges.earned")} · ${state.badges.length}/${all.length} ${t("badges.unlocked")}</p>
        <div class="ss-stats-row">
          <div class="ss-stat"><div class="ss-stat-n">${state.stats.modulesDone?.length || 0}</div><div class="ss-stat-l">${t("badges.modulesDone")}</div></div>
          <div class="ss-stat"><div class="ss-stat-n">${state.stats.storiesRead?.length || 0}</div><div class="ss-stat-l">${t("badges.storiesRead")}</div></div>
          <div class="ss-stat"><div class="ss-stat-n">${state.stats.gamesPlayed?.length || 0}</div><div class="ss-stat-l">${t("badges.gamesPlayed")}</div></div>
        </div>
        <div class="ss-badge-list">
          ${all.map((id) => `<div class="ss-badge ${state.badges.find(b=>b.id===id)?'earned':''}"><img src="${ASSET}${imgs[id]}" alt=""><span>${t("b."+id)}</span></div>`).join("")}
        </div>
        <p class="ss-badge-hint">${t("badges.hint")}</p>
      </div>`;
  }

  /* ----------------------------- COMPLETION ----------------------------- */
  function complete() {
    const mod = state.lastModule || "stories";
    const modLabel = { stories: t("mod.stories"), impact: t("mod.impact"), games: t("mod.games"), wall: t("mod.wall") }[mod] || "";
    track("modulesDone", mod);
    return `
      <div class="ss-complete-screen">
        <div class="ss-complete-badge"><img src="${ASSET}icon_badge.png" alt=""></div>
        <h2 class="ss-complete-title">${t("complete.title")}</h2>
        <p class="ss-complete-mod">${modLabel}</p>
        <p class="ss-complete-earned">${t("complete.badge")} 🏆</p>
        <div class="ss-complete-opts">
          <button class="ss-btn ss-btn-ghost" data-go="modules">↩ ${t("complete.opt.return")}</button>
          <button class="ss-btn ss-btn-primary" data-go="progress">📊 ${t("complete.opt.progress")}</button>
          <button class="ss-btn ss-btn-teal" data-go="module-d">✍ ${t("complete.opt.share")}</button>
        </div>
      </div>`;
  }

  function esc(s) { return String(s).replace(/[&<>"']/g, (c) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c])); }

  /* ========================================================================
     PLAYABLE GAMES (preserved + i18n strings)
     ======================================================================== */
  const MATCH_PAIRS = [
    { a:{en:"Water Well",ar:"بئر ماء"}, b:"🚰", note:{en:"A water well is Sadaqah Jariyah — it keeps giving even after you're gone!",ar:"بئر الماء صدقة جارية — يبقى عطاؤها حتى بعد رحيلك!"} },
    { a:{en:"Orphan",ar:"يتيم"}, b:"🧑‍🍼", note:{en:"The Prophet (pbuh) said he and the orphan's sponsor will be neighbours in Paradise.",ar:"قال النبي ﷺ إنه وكافل اليتيم في الجنة كهاتين."} },
    { a:{en:"Mosque",ar:"مسجد"}, b:"🕌", note:{en:"Whoever builds a mosque for Allah, Allah builds a house for him in Paradise.",ar:"من بنى لله مسجداً بنى الله له بيتاً في الجنة."} },
    { a:{en:"School",ar:"مدرسة"}, b:"📚", note:{en:"Knowledge shared multiplies — like Fatima al-Fihri's Al-Qarawiyyin.",ar:"العلم يتناسخ بالعطاء — كجامعة القرويين."} },
    { a:{en:"Food / Iftar",ar:"طعام / إفطار"}, b:"🍪", note:{en:"Whoever feeds a fasting person has the same reward as them.",ar:"من فطّر صائماً فله مثل أجره."} },
    { a:{en:"Zakat",ar:"زكاة"}, b:"⚖️", note:{en:"Zakat purifies wealth and is given to 8 categories.",ar:"الزكاة تطهّر المال وتُصرف لثماني مصارف."} },
    { a:{en:"Doctor",ar:"طبيب"}, b:"🩺", note:{en:"Relieving a believer's hardship earns relief in the next world.",ar:"تفريج الكرب في الدنيا يجلب تفريجاً في الآخرة."} },
    { a:{en:"Sadaqah",ar:"صدقة"}, b:"💜", note:{en:"Every good act — even a smile — is charity.",ar:"كل معروف صدقة — حتى الابتسامة."} },
  ];
  function gCharityMatch() {
    const cards = [];
    MATCH_PAIRS.forEach((p,i) => { cards.push({k:i,face:p.a,b:p.b,note:p.note,t:"word"}); cards.push({k:i,face:p.a,b:p.b,note:p.note,t:"pic"}); });
    shuffle(cards);
    state._mem = { cards, flipped: [], matched: [], moves: 0, locked: false };
    return memField();
  }
  function memField() {
    const m = state._mem;
    return `
      <h3 class="ss-game-title">🧰 ${gt("charity-match")}</h3>
      <p class="ss-game-sub">${m.matched.length}/${MATCH_PAIRS.length}</p>
      <div class="ss-mem-grid">
        ${m.cards.map((c,i) => {
          const shown = m.flipped.includes(i) || m.matched.includes(c.k);
          const done = m.matched.includes(c.k);
          const face = c.t === "word" ? `<span class="ss-label">${c.face[state.lang]}</span>` : c.b;
          return `<div class="ss-mem-card ${shown?'flipped':''} ${done?'done':''}" data-act="mem" data-mem="${i}">${shown?face:"?"}</div>`;
        }).join("")}
      </div>
      ${m.matched.length===MATCH_PAIRS.length ? `<div class="ss-game-win">🎉</div><button class="ss-btn ss-btn-primary ss-btn-done" data-act="finish-module" data-mod="games">${t("complete.opt.progress")} →</button>` : ""}`;
  }
  function memClick(i) {
    const m = state._mem;
    if (m.locked || m.flipped.includes(i) || m.matched.includes(m.cards[i].k)) return;
    m.flipped.push(i);
    if (m.flipped.length === 2) {
      m.moves++;
      const [a,b] = m.flipped; const ca = m.cards[a], cb = m.cards[b];
      if (ca.k === cb.k && ca.t !== cb.t) {
        m.matched.push(ca.k); m.flipped = [];
        toast(ca.note[state.lang]); addStars(1, t("toast.match"));
        if (m.matched.length === MATCH_PAIRS.length) { awardBadge("matcher"); if (m.moves <= MATCH_PAIRS.length) addStars(5, t("toast.flawless")); }
      } else { m.locked = true; setTimeout(() => { m.flipped = []; m.locked = false; rerenderGame(); }, 900); }
    }
    rerenderGame();
  }

  /* ---- Fill the Box ---- */
  const FILL_ITEMS = { food:"🍚", water:"💧", blanket:"🛏️", clothing:"👕", book:"📖", pencil:"✏️", medicine:"💊" };
  function fillField() {
    const scenes = [
      { need_en:"Cold at night", need_ar:"برد في الليل", emoji:"🥶", want:["blanket","clothing"], shelf:["blanket","clothing","book","medicine"] },
      { need_en:"Hungry family", need_ar:"أسرة جائعة", emoji:"🥺", want:["food","water"], shelf:["food","water","book","blanket"] },
      { need_en:"Child with no books", need_ar:"طفل بلا كتب", emoji:"🧑", want:["book","pencil"], shelf:["book","pencil","medicine","blanket"] },
      { need_en:"Sick, no medicine", need_ar:"مريض بلا دواء", emoji:"🤒", want:["medicine","water"], shelf:["medicine","water","food","pencil"] },
    ];
    if (!state._fill) state._fill = { scene:0, placed:[], done:false, scenes };
    const f = state._fill;
    const sc = f.scenes[f.scene];
    const allGood = sc.want.every(w => f.placed.includes(w));
    return `
      <h3 class="ss-game-title">📦 ${gt("fill-box")}</h3>
      <p class="ss-game-sub">${f.scene+1}/${f.scenes.length}</p>
      <div class="ss-drop-scene">
        <div class="ss-drop-need"><div class="ss-emoji">${allGood?"😊":sc.emoji}</div><div style="font-weight:700;">${state.lang==="ar"?sc.need_ar:sc.need_en}</div></div>
        <div class="ss-drop-box" id="ss-dropbox">${f.placed.map(p=>`<span class="ss-chip"><span class="ss-ie">${FILL_ITEMS[p]}</span>${p}</span>`).join("")}</div>
      </div>
      <div class="ss-shelf">${sc.shelf.map(it=>`<div class="ss-item" data-act="fill" data-item="${it}"><span class="ss-ie">${FILL_ITEMS[it]}</span>${it}</div>`).join("")}</div>
      ${f.done?`<div class="ss-game-win">🎉</div><button class="ss-btn ss-btn-primary ss-btn-done" data-act="finish-module" data-mod="games">${t("complete.opt.progress")} →</button>`:""}`;
  }
  function fillDrop(item) {
    const f = state._fill; if (!f) return; const sc = f.scenes[f.scene];
    if (sc.want.includes(item) && !f.placed.includes(item)) {
      f.placed.push(item); toast(t("toast.correct"));
      if (sc.want.every(w=>f.placed.includes(w))) {
        addStars(2,"✓");
        setTimeout(() => { f.scene++; f.placed=[]; if (f.scene>=f.scenes.length){f.scene=f.scenes.length-1;f.done=true;awardBadge("explorer");} rerenderGame(); }, 700);
      }
    } else if (!sc.want.includes(item)) { toast(t("toast.tryAgain")); }
    rerenderGame();
  }

  /* ---- Giving Tree ---- */
  const TREE_Q = [
    { q_en:"What do we call charity that keeps giving after we're gone?", q_ar:"ماذا نسمي الصدقة التي يبقى عطاؤها بعد رحيلنا؟",
      opts:[{e:"🌳",t_en:"Sadaqah Jariyah",t_ar:"صدقة جارية",ok:true},{e:"💵",t_en:"A one-off gift",t_ar:"هدية لمرة واحدة"},{e:"🎁",t_en:"A present",t_ar:"هدية"}] },
    { q_en:"Which of these is Sadaqah Jariyah?", q_ar:"أيٌّ مما يلي صدقة جارية؟",
      opts:[{e:"🍪",t_en:"A biscuit",t_ar:"بسكويت"},{e:"🚰",t_en:"A water well",t_ar:"بئر ماء",ok:true},{e:"💵",t_en:"A coin",t_ar:"عملة"}] },
    { q_en:"Building what earns a house in Paradise?", q_ar:"بناء ماذا يكسب بيتاً في الجنة؟",
      opts:[{e:"🕌",t_en:"A mosque",t_ar:"مسجداً",ok:true},{e:"🏠",t_en:"Own house",t_ar:"بيتك"},{e:"🚧",t_en:"A fence",t_ar:"سوراً"}] },
    { q_en:"Even a ____ is charity, said the Prophet (pbuh).", q_ar:"حتى ____ صدقة، قال النبي ﷺ.",
      opts:[{e:"😊",t_en:"Smile",t_ar:"الابتسامة",ok:true},{e:"💵",t_en:"Coin",t_ar:"عملة"},{e:"🍪",t_en:"Biscuit",t_ar:"بسكويت"}] },
  ];
  const TREE_STAGES = ["🌱","🌿","☘️","🌳"];
  function treeField() {
    const tr = state._tree; if (!tr) return "";
    if (tr.q >= TREE_Q.length) { awardBadge("grower"); return `<div class="ss-tree-win">🌳</div><p>${state.lang==="ar"?"نمت شجرة صدقتك الجارية!":"Your Sadaqah Jariyah tree is fully grown!"}</p><button class="ss-btn ss-btn-primary ss-btn-done" data-act="finish-module" data-mod="games">${t("complete.opt.progress")} →</button>`; }
    const item = TREE_Q[tr.q];
    return `
      <h3 class="ss-game-title">🌳 ${gt("giving-tree")}</h3>
      <div class="ss-tree-stage"><div class="ss-tree-emoji">${TREE_STAGES[tr.stage]}</div><div class="ss-tree-stage-n">${tr.stage}/${TREE_STAGES.length-1}</div></div>
      <div class="ss-tree-q">${state.lang==="ar"?item.q_ar:item.q_en}</div>
      <div class="ss-opts">${item.opts.map((o,i)=>`<button class="ss-opt" data-act="tree" data-tree="${i}"><span class="ss-oe">${o.e}</span>${state.lang==="ar"?o.t_ar:o.t_en}</button>`).join("")}</div>`;
  }
  function gGivingTree() { state._tree = { q:0, stage:0 }; return treeField(); }
  function treeAnswer(i) {
    const tr = state._tree; const item = TREE_Q[tr.q];
    if (item.opts[i].ok) { tr.stage = Math.min(tr.stage+1, TREE_STAGES.length-1); tr.q++; addStars(1,"✓"); } else { toast(t("toast.tryAgain")); }
    rerenderGame();
  }

  /* ---- Build Community ---- */
  const COMM_PROJECTS = [
    { id:"well", cost:8000, emoji:"🚰", happy:25, vuln:5, n_en:"Water well", n_ar:"بئر ماء", d_en:"Clean water for the village", d_ar:"ماء نظيف للقرية" },
    { id:"school", cost:6000, emoji:"📚", happy:20, vuln:10, n_en:"School", n_ar:"مدرسة", d_en:"Education for children", d_ar:"تعليم للأطفال" },
    { id:"clinic", cost:7000, emoji:"💚", happy:18, vuln:15, n_en:"Health clinic", n_ar:"مستوصف", d_en:"Healthcare access", d_ar:"وصول للرعاية الصحية" },
    { id:"kitchen", cost:3000, emoji:"🍚", happy:12, vuln:20, n_en:"Food kitchen", n_ar:"مطبخ خيري", d_en:"Daily meals", d_ar:"وجبات يومية" },
    { id:"orphan", cost:4000, emoji:"🧑‍🍼", happy:8, vuln:25, n_en:"Orphan sponsorship", n_ar:"كفالة يتيم", d_en:"Support the vulnerable", d_ar:"دعم الأشد ضعفاً" },
  ];
  const BUDGET = 10000;
  function commField() {
    const c = state._comm; if (!c) return "";
    const spent = c.picked.reduce((s,p)=>s+p.cost,0);
    if (c.outcome) {
      const score = Math.min(100, c.outcome.happy + c.outcome.vuln);
      return `<h3 class="ss-game-title">🏘️</h3><p class="ss-game-sub">${state.lang==="ar"?"النتيجة":"Score"}: <strong>${score}/100</strong></p><div class="ss-budget-bar"><span style="width:${score}%"></span></div>
        <div class="ss-comm-grid">${c.picked.map(p=>`<div class="ss-proj-pick selected"><div class="ss-pi">${p.emoji}</div><div class="ss-pn">${state.lang==="ar"?p.n_ar:p.n_en}</div></div>`).join("")}</div>
        <button class="ss-btn ss-btn-primary ss-btn-done" data-act="finish-module" data-mod="games">${t("complete.opt.progress")} →</button>`;
    }
    return `<h3 class="ss-game-title">🏘️ ${gt("build-community")}</h3>
      <p class="ss-game-sub">$${spent.toLocaleString()} / $${BUDGET.toLocaleString()}</p>
      <div class="ss-budget-bar"><span style="width:${(spent/BUDGET)*100}%"></span></div>
      <div class="ss-comm-grid">${COMM_PROJECTS.map(p=>{
        const sel=c.picked.find(x=>x.id===p.id); const can=!sel&&spent+p.cost<=BUDGET;
        return `<button class="ss-proj-pick ${sel?'selected':''}" data-act="comm" data-comm="${p.id}" ${(!sel&&!can)?'disabled style="opacity:.4"':''}><div class="ss-pi">${p.emoji}</div><div class="ss-pc">$${p.cost.toLocaleString()}</div><div class="ss-pn">${state.lang==="ar"?p.n_ar:p.n_en}</div></button>`;
      }).join("")}</div>
      <button class="ss-btn ss-btn-primary" style="margin-top:14px;" data-act="comm-confirm" ${c.picked.length===0?'disabled':''}>${state.lang==="ar"?"ابنِ القرية":"Build"} →</button>`;
  }
  function gBuildCommunity() { state._comm = { picked:[], outcome:null }; return commField(); }
  function commToggle(id) { const c=state._comm; const p=COMM_PROJECTS.find(x=>x.id===id); const ex=c.picked.find(x=>x.id===id); const spent=c.picked.reduce((s,x)=>s+x.cost,0); if(ex)c.picked=c.picked.filter(x=>x.id!==id); else if(spent+p.cost<=BUDGET)c.picked.push(p); rerenderGame(); }
  function commConfirm() { const c=state._comm; c.outcome={happy:c.picked.reduce((s,p)=>s+p.happy,0),vuln:c.picked.reduce((s,p)=>s+p.vuln,0)}; addStars(3,"✓"); if(c.outcome.vuln>=20)awardBadge("builder"); rerenderGame(); }

  /* ---- Sort Zakat ---- */
  const ZAKAT_CATS = [
    {id:"fuqara",n_en:"The Poor",n_ar:"الفقراء",d_en:"Those who have little",d_ar:"من يملكون القليل"},
    {id:"masakin",n_en:"The Needy",n_ar:"المساكين",d_en:"Those in hardship",d_ar:"في شدّة"},
    {id:"amilun",n_en:"Collectors",n_ar:"العاملون",d_en:"Employed to collect Zakat",d_ar:"العاملون على الزكاة"},
    {id:"muallaf",n_en:"Hearts Reconciled",n_ar:"المؤلّفة قلوبهم",d_en:"Hearts to be reconciled",d_ar:"تأليف القلوب"},
    {id:"riqab",n_en:"Captives",n_ar:"الرقاب",d_en:"To free captives",d_ar:"عتق الأسرى"},
    {id:"gharimun",n_en:"Debtors",n_ar:"الغارمون",d_en:"Cannot pay debts",d_ar:"عاجزون عن الديون"},
    {id:"sabil",n_en:"In Allah's Cause",n_ar:"في سبيل الله",d_en:"In the cause of Allah",d_ar:"في سبيل الله"},
    {id:"ibn-sabil",n_en:"Travellers",n_ar:"ابن السبيل",d_en:"Stranded travellers",d_ar:"المسافر المحتاج"},
  ];
  const ZAKAT_CHARS = [
    {n_en:"Ahmad ran out of money far from home.",n_ar:"أحمد نفد ماله بعيداً عن وطنه.",cat:"ibn-sabil"},
    {n_en:"A man cannot repay his loan.",n_ar:"رجل لا يقدر على سداد قرضه.",cat:"gharimun"},
    {n_en:"A widow struggles to feed her children.",n_ar:"أرملة تجد صعوبة في إطعام أطفالها.",cat:"fuqara"},
    {n_en:"A new Muslim seeking community.",n_ar:"مسلم جديد يطلب المجتمع.",cat:"muallaf"},
    {n_en:"A state Zakat collector.",n_ar:"عامل على جمع الزكاة.",cat:"amilun"},
    {n_en:"A captive whose ransom can be paid.",n_ar:"أسير يُمكن فداؤه.",cat:"riqab"},
    {n_en:"A family whose home burned down.",n_ar:"أسرة احترق منزلها.",cat:"masakin"},
    {n_en:"Funds for the community mosque.",n_ar:"أموال لمسجد المجتمع.",cat:"sabil"},
  ];
  function zakatField() {
    const z = state._zakat; if (!z) return "";
    if (z.queue.length===0) { if(z.correct===z.total)awardBadge("zakat"); return `<h3 class="ss-game-title">⚖️</h3><p class="ss-game-sub">${z.correct}/${z.total}</p><button class="ss-btn ss-btn-primary ss-btn-done" data-act="finish-module" data-mod="games">${t("complete.opt.progress")} →</button>`; }
    const cur = z.queue[0];
    return `<h3 class="ss-game-title">⚖️ ${gt("sort-zakat")}</h3>
      <p class="ss-game-sub">${state.lang==="ar"?"اسحب الشخص إلى مصرف الزكاة الصحيح":"Drag the person to the correct Zakat category"}</p>
      <div class="ss-zchar">${state.lang==="ar"?cur.n_ar:cur.n_en}</div>
      <div class="ss-zakat-bins">${ZAKAT_CATS.map(cat=>`<div class="ss-zbin" data-act="zakat" data-zbin="${cat.id}"><h5>${state.lang==="ar"?cat.n_ar:cat.n_en}</h5><div class="ss-zd">${state.lang==="ar"?cat.d_ar:cat.d_en}</div></div>`).join("")}</div>`;
  }
  function gSortZakat() { state._zakat={queue:[...ZAKAT_CHARS],placed:{},correct:0,total:ZAKAT_CHARS.length}; return zakatField(); }
  function zakatDrop(catId){ const z=state._zakat; const cur=z.queue[0]; if(!cur)return; if(cur.cat===catId){z.correct++;toast(t("toast.correct"));addStars(1,"✓");}else{const r=ZAKAT_CATS.find(c=>c.id===cur.cat);toast((state.lang==="ar"?"في ":"In ")+(state.lang==="ar"?r.n_ar:r.n_en));} z.queue.shift(); rerenderGame(); }

  /* ---- Chain Reaction ---- */
  const CHAIN = [
    { en:"Ibrahim digs a water well.", ar:"إبراهيم يحفر بئر ماء.", emoji:"🚰", choices:[{t_en:"Villagers get clean water",t_ar:"الحصول على ماء نظيف",ok:true,next:1},{t_en:"Dries up in a month",t_ar:"يجف في شهر",next:99}] },
    { en:"Women and girls save hours daily.", ar:"النساء والبنات يوفّرن ساعات يومياً.", emoji:"⏱️", choices:[{t_en:"Girls attend school",t_ar:"البنات يلتحقن بالمدرسة",ok:true,next:2},{t_en:"They just rest",t_ar:"يرحن فقط",next:99}] },
    { en:"A generation of girls finishes school.", ar:"جيل من البنات يُكمل المدرسة.", emoji:"🎓", choices:[{t_en:"Some become nurses & teachers",t_ar:"يصبحن ممرضات ومعلمات",ok:true,next:3},{t_en:"They leave the village",t_ar:"يتركن القرية",next:99}] },
    { en:"Educated women strengthen the economy.", ar:"النساء المتعلّمات يقوين الاقتصاد.", emoji:"💼", choices:[{t_en:"Village no longer needs aid",t_ar:"القرية لا تحتاج معونة",ok:true,next:4},{t_en:"Economy collapses",t_ar:"ينهار الاقتصاد",next:99}] },
    { en:"20 years later — a thriving community.", ar:"بعد 20 عاماً — مجتمع مزدهر.", emoji:"🌳", choices:[] },
    { en:"A one-time gift fades quickly.", ar:"هدية لمرة واحدة تتلاشى بسرعة.", emoji:"🍂", choices:[] },
  ];
  function chainField() {
    const c = state._chain; if (!c) return "";
    const node = CHAIN[c.stage];
    const done = node.choices.length===0;
    return `<h3 class="ss-game-title">🔗 ${gt("chain-reaction")}</h3>
      <div class="ss-chain">${[...Array(c.links).keys()].map(i=>{const nd=CHAIN[i<c.links-1?i:c.stage];return `<div class="ss-chain-link"><span class="ss-cln">${i+1}.</span><span style="font-size:24px">${nd.emoji}</span><span>${state.lang==="ar"?nd.ar:nd.en}</span></div>`;}).join("")}</div>
      ${done?`<button class="ss-btn ss-btn-primary ss-btn-done" data-act="finish-module" data-mod="games">${t("complete.opt.progress")} →</button>`:`<div class="ss-chain-choices">${node.choices.map((ch,i)=>`<button class="ss-opt" data-act="chain" data-chain="${i}">${state.lang==="ar"?ch.t_ar:ch.t_en}</button>`).join("")}</div>`}`;
  }
  function gChainReaction(){state._chain={stage:0,links:1};return chainField();}
  function chainChoose(i){const c=state._chain;const node=CHAIN[c.stage];const ch=node.choices[i];if(ch.ok)addStars(1,"✓");c.stage=ch.next;c.links++;if(c.stage===4)addStars(4,"✓");rerenderGame();}

  /* ---- Waqf Architect ---- */
  function waqfField() {
    const w = state._waqf; if (!w) return "";
    const assets=[{id:"property",n_en:"Commercial property",n_ar:"عقار تجاري",ret:0.08},{id:"farmland",n_en:"Farmland",n_ar:"أرض زراعية",ret:0.05},{id:"fund",n_en:"Waqf fund",n_ar:"صندوق وقف",ret:0.07}];
    const causes=["education","healthcare","water","orphan","emergency"];
    const govs=[{id:"family",n_en:"Family trustee",n_ar:"وصي عائلي"},{id:"charity",n_en:"Charity org",n_ar:"جمعية خيرية"},{id:"board",n_en:"Independent board",n_ar:"مجلس مستقل"}];
    if (!w.ran) {
      return `<h3 class="ss-game-title">🏗️ ${gt("waqf-architect")}</h3>
        <div class="ss-waqf-stepper">
          <div class="ss-waqf-step"><h5>1</h5>${w.asset?`✔ ${state.lang==="ar"?assets.find(a=>a.id===w.asset).n_ar:assets.find(a=>a.id===w.asset).n_en}`:`<div class="ss-opts">${assets.map(a=>`<button class="ss-opt" data-act="waqf-asset" data-wa="${a.id}"><span class="ss-oe">${(a.ret*100).toFixed(0)}%</span>${state.lang==="ar"?a.n_ar:a.n_en}</button>`).join("")}</div>`}</div>
          <div class="ss-waqf-step"><h5>2</h5>${w.cause?`✔ ${w.cause}`:(w.asset?`<div class="ss-segments">${causes.map(c=>`<button class="ss-seg" data-act="waqf-cause" data-wc="${c}">${c}</button>`).join("")}</div>`:'...')}</div>
          <div class="ss-waqf-step"><h5>3</h5>${w.gov?`✔ ${state.lang==="ar"?govs.find(g=>g.id===w.gov).n_ar:govs.find(g=>g.id===w.gov).n_en}`:(w.cause?`<div class="ss-segments">${govs.map(g=>`<button class="ss-seg" data-act="waqf-gov" data-wg="${g.id}">${state.lang==="ar"?g.n_ar:g.n_en}</button>`).join("")}</div>`:'...')}</div>
        </div>
        ${w.asset&&w.cause&&w.gov?`<button class="ss-btn ss-btn-primary" data-act="waqf-run">${state.lang==="ar"?"شغّل المحاكاة":"Run simulation"} →</button>`:''}`;
    }
    const asset=assets.find(a=>a.id===w.asset); const years=[1,5,10,20]; const vals=years.map(y=>Math.round(50000*asset.ret*y));
    return `<h3 class="ss-game-title">🏗️</h3><div class="ss-infogrid">${years.map((y,i)=>`<div class="ss-info"><div class="ss-iy">${t("year."+["1","5","10","20"][i])}</div><div class="ss-iv">$${vals[i].toLocaleString()}</div><div class="ss-id">${w.cause}</div></div>`).join("")}</div>
      <button class="ss-btn ss-btn-primary ss-btn-done" data-act="finish-module" data-mod="games">${t("complete.opt.progress")} →</button>`;
  }
  function gWaqfArchitect(){state._waqf={asset:null,cause:null,gov:null,ran:false};return waqfField();}
  function waqfRun(){state._waqf.ran=true;awardBadge("architect");addStars(4,"✓");rerenderGame();}

  /* ---- Giving Dilemma ---- */
  const DILEMMAS=[
    {q_en:"You have $500.",a_en:"Feed 100 families for one day",b_en:"Dig one well serving 50 families for 20 years",q_ar:"لديك 500 دولار.",a_ar:"إطعام 100 أسرة ليوم واحد",b_ar:"حفر بئر تخدم 50 أسرة لـ 20 عاماً"},
    {q_en:"You can give $1,000.",a_en:"Emergency relief today",b_en:"A waqf endowment forever",q_ar:"يمكنك التبرّع بـ 1000 دولار.",a_ar:"إغاثة طارئة اليوم",b_ar:"وقف للأبد"},
    {q_en:"Sponsor 1 orphan for 10 years.",a_en:"The child nearest to you",b_en:"The most vulnerable far away",q_ar:"اكفل يتيماً لـ 10 سنوات.",a_ar:"الطفل الأقرب إليك",b_ar:"الأشد ضعفاً البعيد"},
    {q_en:"$100/month.",a_en:"Small amounts to many",b_en:"One high-impact project",q_ar:"100 دولار شهرياً.",a_ar:"مبالغ صغيرة لعدّة أسباب",b_ar:"مشروع واحد عالي الأثر"},
    {q_en:"Ramadan approaches.",a_en:"All charity in Ramadan",b_en:"Spread across the year",q_ar:"يقترب رمضان.",a_ar:"كل الصدقة في رمضان",b_ar:"موزّعة عبر السنة"},
  ];
  function dilemmaField(){const d=state._dilemma;if(!d)return"";if(d.i>=DILEMMAS.length){const lc=d.picks.filter(p=>p==="b").length;const pr=lc>=3?(state.lang==="ar"?"باني وقف طويل المدى":"long-term waqf builder"):lc>=1?(state.lang==="ar"?"عاطاء متوازن":"balanced giver"):(state.lang==="ar"?"مستجيب فوري":"immediate-need responder");return `<h3 class="ss-game-title">🦭</h3><p>${state.lang==="ar"?"أنت":"You are"} <strong>${pr}</strong>.</p><button class="ss-btn ss-btn-primary ss-btn-done" data-act="finish-module" data-mod="games">${t("complete.opt.progress")} →</button>`;}const it=DILEMMAS[d.i];return `<h3 class="ss-game-title">🦭 ${gt("giving-dilemma")}</h3><div class="ss-dilemma"><h4>${state.lang==="ar"?it.q_ar:it.q_en}</h4><div class="ss-choice-grid"><button class="ss-choice" data-act="dilemma" data-d="a">${state.lang==="ar"?it.a_ar:it.a_en}</button><button class="ss-choice" data-act="dilemma" data-d="b">${state.lang==="ar"?it.b_ar:it.b_en}</button></div></div>`;}
  function gGivingDilemma(){state._dilemma={i:0,picks:[]};return dilemmaField();}
  function dilemmaChoose(p){const d=state._dilemma;d.picks.push(p);d.i++;addStars(1,"✓");rerenderGame();}

  /* ---- Impact Calculator ---- */
  const CALC_RATES={water:{per:10,u_en:"people given clean water",u_ar:"شخص يحصل على ماء نظيف",label_en:"Water",label_ar:"الماء",emoji:"🚰"},food:{per:5,u_en:"food parcels",u_ar:"طرد غذائي",label_en:"Food",label_ar:"الطعام",emoji:"🍚"},education:{per:40,u_en:"child-months of school",u_ar:"شهر-طفل من التعليم",label_en:"Education",label_ar:"التعليم",emoji:"📚"},healthcare:{per:25,u_en:"clinic consultations",u_ar:"استشارة طبية",label_en:"Healthcare",label_ar:"الرعاية الصحية",emoji:"💚"},orphan:{per:40,u_en:"orphan sponsor months",u_ar:"شهر كفالة يتيم",label_en:"Orphan",label_ar:"كفالة يتيم",emoji:"🧑‍🍼"}};
  function calcField(){const c=state._calc;if(!c)return"";const r=CALC_RATES[c.area];const qty=Math.floor(c.amount/r.per);return `<h3 class="ss-game-title">💡 ${gt("impact-calc")}</h3>
    <div class="ss-calc-card"><label style="font-weight:700;">$${c.amount}</label><input type="range" min="1" max="1000" value="${c.amount}" class="ss-slider" data-act="calc" data-cal="amount" style="width:100%">
    <div class="ss-segments" style="margin-top:12px;">${Object.keys(CALC_RATES).map(k=>`<button class="ss-seg ${k===c.area?'selected':''}" data-act="calc-area" data-ca="${k}">${CALC_RATES[k].emoji} ${state.lang==="ar"?CALC_RATES[k].label_ar:CALC_RATES[k].label_en}</button>`).join("")}</div></div>
    <div class="ss-result"><div class="ss-re">${r.emoji}</div><div><div style="font-size:24px;font-weight:800;color:var(--teal-deep);">${qty.toLocaleString()} ${state.lang==="ar"?r.u_ar:r.u_en}</div></div></div>
    <button class="ss-btn ss-btn-primary ss-btn-done" data-act="finish-module" data-mod="games">${t("complete.opt.progress")} →</button>`;}
  function gImpactCalc(){state._calc={amount:50,area:"water"};return calcField();}

  /* ---- Game dispatcher ---- */
  // Bilingual game title lookup by id.
  const GAME_TITLES = {
    "charity-match":   { en: "Charity Match",           ar: "مطابقة الخير" },
    "fill-box":        { en: "Fill the Donation Box",   ar: "املأ صندوق التبرع" },
    "giving-tree":     { en: "The Giving Tree",         ar: "شجرة العطاء" },
    "build-community": { en: "Build Your Community",    ar: "ابنِ مجتمعك" },
    "sort-zakat":      { en: "Sort the Zakat",          ar: "رتّب الزكاة" },
    "chain-reaction":  { en: "Charity Chain Reaction",  ar: "سلسلة الخير" },
    "waqf-architect":  { en: "Waqf Architect",          ar: "مهندس الوقف" },
    "giving-dilemma":  { en: "The Giving Dilemma",      ar: "مُعضلة العطاء" },
    "impact-calc":     { en: "Real Impact Calculator",  ar: "حاسبة الأثر الحقيقي" },
  };
  function gt(id) { const g = GAME_TITLES[id]; return g ? (g[state.lang] || g.en) : id; }

  function initGame(id){ state._mem=null;state._fill=null;state._tree=null;state._comm=null;state._zakat=null;state._chain=null;state._waqf=null;state._dilemma=null;state._calc=null;
    switch(id){case"charity-match":return gCharityMatch();case"fill-box":return fillField();case"giving-tree":return gGivingTree();case"build-community":return gBuildCommunity();case"sort-zakat":return gSortZakat();case"chain-reaction":return gChainReaction();case"waqf-architect":return gWaqfArchitect();case"giving-dilemma":return gGivingDilemma();case"impact-calc":return gImpactCalc();default:return `<div class="ss-empty">Game not found.</div>`;} }
  function renderGame(id){ switch(id){case"charity-match":return memField();case"fill-box":return fillField();case"giving-tree":return treeField();case"build-community":return commField();case"sort-zakat":return zakatField();case"chain-reaction":return chainField();case"waqf-architect":return waqfField();case"giving-dilemma":return dilemmaField();case"impact-calc":return calcField();default:return "";} }
  function playView() {
    const id = state.params.id;
    return `<div class="ss-back" data-go="module-c">← ${t("nav.allGames")}</div><div class="ss-playfield">${initGame(id)}</div>`;
  }
  function rerenderGame(){ if(state.route!=="play")return; const pf=document.querySelector("#ss-app .ss-playfield"); if(pf){pf.innerHTML=`<div class="ss-back" data-go="module-c">← ${t("nav.allGames")}</div>`+renderGame(state.params.id); } }

  function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}

  /* ----------------------------- Render --------------------------------- */
  function viewFor() {
    switch (state.route) {
      case "home": return home();
      case "language": return language();
      case "age": return age();
      case "hub": return hub();
      case "modules": return modules();
      case "module-a": return moduleA();
      case "story": return storyView();
      case "module-b": return moduleB();
      case "module-c": return moduleC();
      case "play": return playView();
      case "module-d": return moduleD();
      case "sample": return sampleView();
      case "progress": return progress();
      case "complete": return complete();
      default: return home();
    }
  }
  function render() {
    const app = document.getElementById("ss-app");
    app.innerHTML = shell(viewFor());
    refreshStars();
  }

  /* ----------------------------- Events --------------------------------- */
  document.addEventListener("click", function (e) {
    const app = document.getElementById("ss-app");
    if (!app || !app.contains(e.target)) return;
    const tEl = e.target.closest("[data-go],[data-act],[data-mem]");
    if (!tEl) return;

    if (tEl.hasAttribute("data-go")) {
      const dest = tEl.getAttribute("data-go");
      const id = tEl.getAttribute("data-id");
      go(dest, id ? { id } : {});
      return;
    }
    const act = tEl.getAttribute("data-act");
    switch (act) {
      case "go-home": state.lang = null; save(); go("home"); break;
      case "toggle-lang": state.lang = state.lang === "en" ? "ar" : "en"; save(); render(); break;
      case "pick-lang": state.lang = tEl.getAttribute("data-lang"); save(); go("age"); break;
      case "pick-age": state.age = tEl.getAttribute("data-age"); go("hub"); break;
      case "pick-sim": state.simId = tEl.getAttribute("data-sim"); state.simYear = 0; render(); break;
      case "pick-year": state.simYear = Number(tEl.getAttribute("data-year")); render(); break;
      case "mem": memClick(Number(tEl.getAttribute("data-mem"))); break;
      case "fill": fillDrop(tEl.getAttribute("data-item")); break;
      case "tree": treeAnswer(Number(tEl.getAttribute("data-tree"))); break;
      case "comm": commToggle(tEl.getAttribute("data-comm")); break;
      case "comm-confirm": commConfirm(); break;
      case "zakat": zakatDrop(tEl.getAttribute("data-zbin")); break;
      case "chain": chainChoose(Number(tEl.getAttribute("data-chain"))); break;
      case "waqf-asset": state._waqf.asset = tEl.getAttribute("data-wa"); rerenderGame(); break;
      case "waqf-cause": state._waqf.cause = tEl.getAttribute("data-wc"); rerenderGame(); break;
      case "waqf-gov": state._waqf.gov = tEl.getAttribute("data-wg"); rerenderGame(); break;
      case "waqf-run": waqfRun(); break;
      case "dilemma": dilemmaChoose(tEl.getAttribute("data-d")); break;
      case "calc":
        // handled by input listener
        break;
      case "calc-area": state._calc.area = tEl.getAttribute("data-ca"); rerenderGame(); break;
      case "finish-module": state.lastModule = tEl.getAttribute("data-mod"); go("complete"); break;
      case "open-story": { state.storyPage = 0; const sid = tEl.getAttribute("data-id"); go("story", { id: sid }); break; }
      case "fb-prev": state.storyPage = Math.max(0, (state.storyPage||0) - 1); render(); break;
      case "fb-next": { const lst = stories(); const cs = lst.find(x=>x.id===(state.params.id||"")); const max = cs?cs.pages.length-1:3; state.storyPage = Math.min(max, (state.storyPage||0) + 1); render(); break; }
      case "fb-goto": state.storyPage = Number(tEl.getAttribute("data-page")); render(); break;
      case "submit-story": submitStory(); break;
      case "read-own": readOwnStory(Number(tEl.getAttribute("data-idx"))); break;
    }
  });
  document.addEventListener("input", function (e) {
    const app = document.getElementById("ss-app");
    if (!app || !app.contains(e.target)) return;
    if (e.target.hasAttribute("data-cal") && e.target.getAttribute("data-cal") === "amount") {
      state._calc.amount = Number(e.target.value); rerenderGame();
    }
  });

  function submitStory() {
    const author = (document.getElementById("ss-f-author").value || "Anonymous").trim();
    const title = (document.getElementById("ss-f-title").value || "Untitled").trim();
    const body = (document.getElementById("ss-f-body").value || "").trim();
    const wc = body.split(/\s+/).filter(Boolean).length;
    if (wc < 20) { toast(state.lang === "ar" ? "اكتب أكثر قليلاً" : "Please write more (min 20 words)."); return; }
    state.wall.push({ author, title, body, wc, lang: state.lang }); save();
    addStars(5, "✓"); awardBadge("writer");
    toast("✓"); render();
  }
  function readOwnStory(i) {
    const s = state.wall[i]; if (!s) return;
    const overlay = document.createElement("div");
    overlay.innerHTML = `<div class="ss-modal-bg" data-act="close-modal"><div class="ss-modal"><div class="ss-modal-head"><h3>${esc(s.title)}</h3><span class="ss-x" data-act="close-modal">✕</span></div><div style="padding:20px;"><p style="color:var(--ink-soft);font-style:italic;">${t("wall.by")} ${esc(s.author)} · ${s.wc} ${t("wall.words")}</p><div class="ss-prose">${esc(s.body).split(/\n+/).map(p=>`<p>${p}</p>`).join("")}</div></div></div></div>`;
    document.getElementById("ss-app").appendChild(overlay.firstElementChild);
  }
  document.addEventListener("click", function (e) {
    const el = e.target.closest("[data-act='close-modal']");
    if (el) { const bg = el.closest(".ss-modal-bg"); if (bg) bg.remove(); }
  });

  /* ----------------------------- Boot ----------------------------------- */
  function boot() { render(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
  window.SadaqahApp = { state, go, render };
})();
