/* =========================================================================
   Sadaqah Stories — Internationalisation (i18n)
   EN + AR string tables for the app shell. Content strings (stories, games,
   impact points, guidelines) live in data.js with parallel `ar` fields.
   Usage:  t("home.title")  -> resolves for the active language in state.
   ========================================================================= */

window.SADAQAH_I18N = {
  en: {
    dir: "ltr",
    _name: "English",

    // Brand
    "brand.name": "Sadaqah Stories",
    "brand.sub": "Charity, in living colour",

    // Home
    "home.h1": "Charity that keeps giving — told in stories, numbers, and play.",
    "home.p": "Explore 1,400 years of Islamic generosity, simulate what your donation could become, play to learn, and share your own story on the community wall.",
    "home.cta.start": "Begin",
    "home.lang": "Choose your language",
    "home.lang.sub": "Select English or Arabic",
    "home.age": "Choose your age group",
    "home.age.sub": "Your journey is tailored to your age",

    // Languages
    "lang.en": "English",
    "lang.ar": "العربية",

    // Age groups
    "age.7-10": "7 – 10 years",
    "age.11-14": "11 – 14 years",
    "age.15-18": "15 – 18 years",

    // Age-named hubs
    "hub.7-10.title": "Young Givers",
    "hub.7-10.desc": "Discover charity through stories, play, and imagination.",
    "hub.11-14.title": "Charity Builders",
    "hub.11-14.desc": "Learn how charity builds communities and changes lives.",
    "hub.15-18.title": "Impact Makers",
    "hub.15-18.desc": "Design lasting impact and think critically about giving.",

    // Module selector labels (NO "Module A/B/C/D")
    "mod.stories": "Stories of the Past",
    "mod.stories.desc": "Historical figures whose charity still gives today.",
    "mod.impact": "Impact Simulator",
    "mod.impact.desc": "See what a donation becomes at Year 1, 5, 10, and 20.",
    "mod.games": "Play & Learn",
    "mod.games.desc": "Interactive games — earn stars and badges.",
    "mod.wall": "Community Wall",
    "mod.wall.desc": "Read stories and share your own.",
    "mod.enter": "Enter",

    // Generic
    "nav.home": "Home",
    "nav.back": "Back",
    "nav.next": "Next",
    "nav.continue": "Continue",
    "nav.start": "Start",
    "nav.restart": "Play again",
    "nav.close": "Close",
    "nav.allStories": "All stories",
    "nav.allGames": "All games",
    "nav.allProjects": "All projects",
    "nav.wall": "Community wall",

    // Stars / badges
    "stars.count": "stars",
    "badge.earned": "Badge earned",
    "badge.progress": "View progress",

    // Completion screen
    "complete.title": "Module complete!",
    "complete.badge": "You earned a badge",
    "complete.opt.return": "Return to module selector",
    "complete.opt.progress": "View progress: badges & stats",
    "complete.opt.share": "Share your story",

    // Module A (stories)
    "story.of": "Story",
    "story.readFull": "Read full story",

    // Module B (impact)
    "impact.cost": "Cost",
    "impact.overview": "Overview",
    "impact.progression": "Watch your donation compound over time",
    "year.1": "Year 1",
    "year.5": "Year 5",
    "year.10": "Year 10",
    "year.20": "Year 20",

    // Module C (games)
    "games.play": "Play",
    "games.difficulty": "Difficulty",

    // Module D (wall)
    "wall.guidelines": "Story Writing Guidelines",
    "wall.guidelinesDesc": "Guidelines to help your story feel honest, vivid, and dignified.",
    "wall.do": "Do",
    "wall.dont": "Avoid",
    "wall.share": "Share your story",
    "wall.shareDesc": "Stories are saved in your browser. Keep it true and 300–700 words.",
    "wall.author": "Your name (or \"Anonymous\")",
    "wall.title": "Story title",
    "wall.body": "Your story",
    "wall.bodyPlaceholder": "Start with a scene...",
    "wall.post": "Post to my wall",
    "wall.words": "words",
    "wall.wordTarget": "aim for 300–700",
    "wall.yourStory": "your story",
    "wall.by": "By",

    // Badges screen
    "badges.title": "Your stars & badges",
    "badges.earned": "stars earned",
    "badges.unlocked": "badges unlocked",
    "badges.hint": "Play games and read stories to earn more. Progress saves in your browser.",
    "badges.stats": "Stats",
    "badges.modulesDone": "Modules completed",
    "badges.storiesRead": "Stories read",
    "badges.gamesPlayed": "Games played",

    // Toasts
    "toast.match": "match",
    "toast.flawless": "flawless round",
    "toast.correct": "Correct!",
    "toast.tryAgain": "Not quite — try again",

    // Badge names
    "b.explorer": "Story Explorer",
    "b.matcher": "Charity Matcher",
    "b.grower": "Tree Grower",
    "b.zakat": "Zakat Scholar",
    "b.builder": "Community Builder",
    "b.architect": "Waqf Architect",
    "b.reader": "Story Reader",
    "b.simulator": "Impact Explorer",
    "b.writer": "Story Sharer",
  },

  ar: {
    dir: "rtl",
    _name: "العربية",

    "brand.name": "حكايات الصدقة",
    "brand.sub": "الصدقة بألوان الحياة",

    "home.h1": "صدقةٌ تدوم عطاؤها — بالحكايات والأرقام واللعب.",
    "home.p": "اكتشف 1400 عام من كرم الإسلام، وحاكِ ما قد تصبح عليه تبرعاتك، وتعلّم باللعب، وشارك قصتك على جدار المجتمع.",
    "home.cta.start": "ابدأ",
    "home.lang": "اختر لغتك",
    "home.lang.sub": "اختر الإنجليزية أو العربية",
    "home.age": "اختر فئتك العمرية",
    "home.age.sub": "رحلتك مصمّمة وفق عمرك",

    "lang.en": "English",
    "lang.ar": "العربية",

    "age.7-10": "7 – 10 سنوات",
    "age.11-14": "11 – 14 سنة",
    "age.15-18": "15 – 18 سنة",

    "hub.7-10.title": "المانحون الصغار",
    "hub.7-10.desc": "اكتشف الصدقة عبر الحكايات واللعب والخيال.",
    "hub.11-14.title": "بُناة الخير",
    "hub.11-14.desc": "تعلّم كيف تبني الصدقة المجتمعات وتغيّر الحياة.",
    "hub.15-18.title": "صُنّاع الأثر",
    "hub.15-18.desc": "صمّم أثراً يدوم وفكّر بنقد في العطاء.",

    "mod.stories": "حكايات الماضي",
    "mod.stories.desc": "شخصيات تاريخية لا يزال عطاؤها يدوم حتى اليوم.",
    "mod.impact": "محاكي الأثر",
    "mod.impact.desc": "شاهد ما تصبح عليه التبرعة في السنة 1 و5 و10 و20.",
    "mod.games": "العب وتعلّم",
    "mod.games.desc": "ألعاب تفاعلية — اكسب النجوم والأوسمة.",
    "mod.wall": "جدار المجتمع",
    "mod.wall.desc": "اقرأ الحكايات وشارك قصتك.",
    "mod.enter": "ادخل",

    "nav.home": "الرئيسية",
    "nav.back": "رجوع",
    "nav.next": "التالي",
    "nav.continue": "متابعة",
    "nav.start": "ابدأ",
    "nav.restart": "العب مجدداً",
    "nav.close": "إغلاق",
    "nav.allStories": "كل الحكايات",
    "nav.allGames": "كل الألعاب",
    "nav.allProjects": "كل المشاريع",
    "nav.wall": "جدار المجتمع",

    "stars.count": "نجمة",
    "badge.earned": "وسام جديد",
    "badge.progress": "عرض التقدّم",

    "complete.title": "اكتمل الدرس!",
    "complete.badge": "لقد حصلت على وسام",
    "complete.opt.return": "العودة إلى اختيار الدروس",
    "complete.opt.progress": "عرض التقدّم: الأوسمة والإحصاءات",
    "complete.opt.share": "شارك قصتك",

    "story.of": "حكاية",
    "story.readFull": "اقرأ الحكاية كاملة",

    "impact.cost": "التكلفة",
    "impact.overview": "نظرة عامة",
    "impact.progression": "شاهد تبرعتك تنمو عبر الزمن",
    "year.1": "السنة 1",
    "year.5": "السنة 5",
    "year.10": "السنة 10",
    "year.20": "السنة 20",

    "games.play": "العب",
    "games.difficulty": "المستوى",

    "wall.guidelines": "إرشادات كتابة الحكايات",
    "wall.guidelinesDesc": "إرشادات تساعد قصتك على أن تكون صادقة ونابضة وكريمة.",
    "wall.do": "افعل",
    "wall.dont": "تجنّب",
    "wall.share": "شارك قصتك",
    "wall.shareDesc": "تُحفظ الحكايات في متصفحك. اجعلها صادقة وبين 300–700 كلمة.",
    "wall.author": "اسمك (أو \"مجهول\")",
    "wall.title": "عنوان الحكاية",
    "wall.body": "قصتك",
    "wall.bodyPlaceholder": "ابدأ بمشهد...",
    "wall.post": "انشر على جداري",
    "wall.words": "كلمة",
    "wall.wordTarget": "الهدف 300–700",
    "wall.yourStory": "قصتك",
    "wall.by": "بقلم",

    "badges.title": "نجومك وأوسمتك",
    "badges.earned": "نجمة مكتسبة",
    "badges.unlocked": "وسام مفتوح",
    "badges.hint": "العب واقرأ لتكسب المزيد. يُحفظ تقدّمك في متصفحك.",
    "badges.stats": "الإحصاءات",
    "badges.modulesDone": "دروس مكتملة",
    "badges.storiesRead": "حكايات مقروءة",
    "badges.gamesPlayed": "ألعاب ملعوبة",

    "toast.match": "تطابق",
    "toast.flawless": "جولة مثالية",
    "toast.correct": "صحيح!",
    "toast.tryAgain": "ليس تماماً — حاول مجدداً",

    "b.explorer": "مستكشف الحكايات",
    "b.matcher": "مطابق الخير",
    "b.grower": "زارع الشجر",
    "b.zakat": "عالِم الزكاة",
    "b.builder": "باني المجتمع",
    "b.architect": "مهندس الوقف",
    "b.reader": "قارئ الحكايات",
    "b.simulator": "مستكشف الأثر",
    "b.writer": "مشارك الحكايات",
  },
};

// Helper: resolve a key for the given (or current) language.
window.t = function (key, lang) {
  lang = lang || (window.SadaqahApp && window.SadaqahApp.state && window.SadaqahApp.state.lang) || "en";
  const table = window.SADAQAH_I18N[lang] || window.SADAQAH_I18N.en;
  return table[key] !== undefined ? table[key] : (window.SADAQAH_I18N.en[key] !== undefined ? window.SADAQAH_I18N.en[key] : key);
};

// Pick a content field for the active language: obj.title_ar or obj.title
window.L = function (obj, field, lang) {
  lang = lang || (window.SadaqahApp && window.SadaqahApp.state && window.SadaqahApp.state.lang) || "en";
  if (lang === "ar") {
    const arKey = field + "_ar";
    if (obj && obj[arKey] !== undefined && obj[arKey] !== "") return obj[arKey];
  }
  return obj ? obj[field] : "";
};
