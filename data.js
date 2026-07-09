/* =========================================================================
   Sadaqah Stories — Content Data Layer
   All module content (Module A stories, Module B impact, Module C games,
   Module D guidelines + sample stories) lives here as plain JS data so the
   UI layer stays declarative and the app remains a single embeddable bundle.
   ========================================================================= */

/* ----------------------------- MODULE A ----------------------------------
   10 historical-figure story outlines. */
const MODULE_A = [
  {
    id: "uthman",
    n: 1,
    figure: "Uthman ibn Affan",
    title: "The Well of Rumah",
    period: "630 CE",
    location: "Madinah, Arabian Peninsula",
    type: "Water Waqf (Sadaqah Jariyah)",
    art: ["rumah_a.jpeg", "rumah_b.jpeg"],
    summary:
      "Uthman purchased the city's only well and endowed it forever — water became free for everyone, rich and poor.",
    body: [
      "In the early years of Islam, fresh water was scarce in Madinah. A Jewish merchant owned the Well of Rumah — the city's main water source — and sold water at high prices that the poor simply could not afford. The Prophet Muhammad (peace be upon him) made an open call to his companions: \"Who will buy the Well of Rumah and make it available for all Muslims, and he will have something better than it in Paradise?\"",
      "Uthman ibn Affan, one of the wealthiest companions and the future third Caliph of Islam, stepped forward. He negotiated with the owner and first purchased half the well for 12,000 dirhams, agreeing that the well would alternate between public and private use on different days. When the owner saw that all the residents chose to collect water on Uthman's free days, he sold the remaining half for 8,000 dirhams.",
      "Uthman declared the entire Well of Rumah a waqf — a permanent endowment — for the entire Muslim community. No one would ever pay for water again. Rich and poor, young and old, they all drew from the same well freely. This single act transformed daily life in Madinah and set a powerful example of what charity could look like: not a one-time gift, but a lasting structure that kept giving.",
      "The Well of Rumah became one of Islam's most celebrated examples of Sadaqah Jariyah — ongoing charity that continues to earn reward even after the giver has passed away. Historical chronicles record the well continuing to serve Madinah through the Umayyad and Abbasid periods. Its location is still identified in the modern city of Madinah today, over 1,400 years later.",
    ],
  },
  {
    id: "fatima",
    n: 2,
    figure: "Fatima al-Fihri",
    title: "Al-Qarawiyyin — A Woman Who Built the World's Oldest University",
    period: "859 CE",
    location: "Fez, Morocco",
    type: "Educational Endowment (Waqf)",
    art: ["qarawiyyin.jpeg"],
    summary:
      "Fatima spent her entire inheritance to build a mosque-university that has taught students for over 1,160 unbroken years.",
    body: [
      "When Fatima al-Fihri's wealthy father died in Fez, Morocco, he left her a significant inheritance. Most people in her position would have kept the money for themselves. Fatima chose differently. She looked at her community — filled with Muslim immigrants from Kairouan, Tunisia, many of whom had no center for prayer, learning, or gathering — and made a decision that would shape the world for over a thousand years.",
      "Fatima dedicated her entire inheritance to building a mosque and educational institution for her community. She supervised the construction personally, reportedly fasting throughout the entire building process as an act of spiritual devotion. Every detail mattered to her. When the building was finally complete and she prayed her first prayer inside, she prostrated in gratitude to Allah for allowing her to see the project through.",
      "The institution she built — Al-Qarawiyyin — became one of the greatest centers of Islamic learning in the world. Scholars traveled from across the Muslim world and beyond to study theology, jurisprudence, astronomy, medicine, and mathematics there. Among the notable students were the Berber geographer Muhammad al-Idrisi and the Jewish philosopher Maimonides. Fatima structured the mosque-university as a waqf, meaning the endowment would sustain scholars, students, and the building's maintenance in perpetuity.",
      "Today, UNESCO and Guinness World Records both recognize Al-Qarawiyyin as the world's oldest continuously operating degree-granting university — founded in 859 CE and still functioning today. That is over 1,160 years of unbroken education, made possible by one woman's decision to give everything she had for her community.",
    ],
  },
  {
    id: "umar-ashes",
    n: 3,
    figure: "Caliph Umar ibn al-Khattab",
    title: "The Year of Ashes — Feeding a Nation in Crisis",
    period: "639 CE",
    location: "Arabian Peninsula",
    type: "Emergency Food Distribution and Famine Relief",
    art: ["year_ashes.jpeg"],
    summary:
      "Through a devastating drought, Umar coordinated 4,000 camels of grain, ran public kitchens, and ate only bread and oil alongside his people.",
    body: [
      "In 18 AH (639 CE), a devastating drought swept across the Arabian Peninsula. Crops failed. Livestock died. The earth turned gray and cracked. People called it \u2018Aam ar-Ramadah — the Year of Ashes — because the scorched ground looked like ash. Thousands faced starvation, and the responsibility for their survival fell on the shoulders of Caliph Umar ibn al-Khattab.",
      "Umar acted immediately. He sent urgent letters to the governors of Egypt, Syria, and Iraq — regions with food surplus — ordering emergency grain shipments to Madinah. Historical records describe over 4,000 camels arriving in relief caravans, carrying wheat, dates, and oil. Umar then organized public kitchens across Madinah, preparing free meals twice a day for anyone who needed them — Muslim or non-Muslim, local resident or Bedouin who had traveled seeking help.",
      "What made Umar's response remarkable was not just its scale but his personal commitment. He refused to eat anything but bread and olive oil throughout the famine, saying: \"How can I understand the plight of the poor if I haven't experienced what they experience?\" His companions noted that his skin darkened visibly from the harsh diet. The Caliph of the entire Muslim world chose to suffer alongside his people rather than eat well while they starved.",
      "The relief effort lasted nine months, until the rains finally returned. Historians estimate that thousands of lives were saved through Umar's coordinated response — one of the earliest recorded examples of state-organized humanitarian aid in history. His system of central coordination, provincial resource mobilization, and equitable distribution became a model for Islamic governance during crises that scholars still study today.",
    ],
  },
  {
    id: "umar-orphans",
    n: 4,
    figure: "Caliph Umar ibn al-Khattab",
    title: "The Orphans' Stipend",
    period: "636 CE",
    location: "Madinah, Arabian Peninsula",
    type: "Institutionalized Orphan Sponsorship and Public Welfare",
    art: ["food_parcel_a.jpeg"],
    summary:
      "Umar built the Diwan — the first public welfare registry — registering every orphan for a regular stipend, then revised the policy overnight when he found a gap.",
    body: [
      "After the early Islamic conquests brought new wealth into the Muslim state, Caliph Umar ibn al-Khattab faced a challenge: how do you make sure that wealth actually reaches the people who need it most? His answer was to build a system — not just give charity when he happened to remember, but create a structure that would protect the poor, the orphaned, and the elderly as a matter of right, not luck.",
      "In 636 CE, Umar established the Diwan — the first organized public welfare registry in Islamic history. Every orphan in the state was registered and given a regular stipend from the Bayt al-Mal (the public treasury). The amount increased as children grew older: infants received an immediate allowance, which rose when they could eat solid food, and rose again when they were weaned. Orphans of companions who had died at the battles of Badr or Uhud received higher allocations as an honor to their parents' sacrifice.",
      "Umar reviewed cases personally. The historian al-Tabari records a moment that reveals his character: Umar noticed a woman feeding her infant broth instead of milk. When he asked why, she explained that orphans only received the adult food stipend after weaning — so she was forcing her child to wean early just to access more support. Umar was shaken. He immediately revised the policy that same night and led the prayer asking Allah's forgiveness for having overlooked this gap.",
      "This story illustrates something important about Umar's approach: he understood that good intentions are not enough. Real care for the vulnerable requires constant attention to the details of how a system actually works in people's daily lives. The welfare structure he created — predictable, rights-based, and administratively accountable — became a foundation for Islamic social institutions for centuries to come.",
    ],
  },
  {
    id: "adudi",
    n: 5,
    figure: "Adud al-Dawla",
    title: "The Adudi Hospital — Free Healthcare in 10th-Century Baghdad",
    period: "981 CE",
    location: "Baghdad, Iraq",
    type: "Medical Endowment with Universal Free Care",
    art: ["food_parcel_b.jpeg"],
    summary:
      "A 10th-century Baghdad hospital where anyone — rich or poor, Muslim or not — was treated for free, funded by a permanent waqf.",
    body: [
      "In 981 CE, the Buyid emir Adud al-Dawla built something that would have seemed remarkable anywhere in the medieval world: a hospital in Baghdad where anyone — poor or rich, Muslim or non-Muslim — could receive medical treatment completely free of charge. The Bimaristan al-Adudi was not a simple ward but a full medical complex, funded through a permanent waqf endowment designed to sustain it indefinitely.",
      "The hospital was organized into specialized departments — internal medicine, surgery, ophthalmology, and orthopedics — a level of medical organization that was centuries ahead of its time. It employed 24 physicians, maintained separate wards for men and women, and housed an extensive medical library. The physician Ibn Butlan documented that when patients were discharged, they were given clean clothing so they would not have to return home in the same soiled garments they arrived in. Every detail was designed to restore dignity alongside health.",
      "The waqf structure was carefully designed to ensure the hospital's independence. Revenue from commercial properties, agricultural lands, and public baths was dedicated to covering physician salaries, patient meals, medications, and building maintenance. Because doctors received regular salaries from the endowment, they were not dependent on wealthy patrons — which meant they could treat the poor with the same attention they gave anyone else. Medical students also trained there for free.",
      "The Adudi Hospital operated for over 400 years before being destroyed during the Mongol invasion of Baghdad in 1258 CE. The geographer al-Muqaddasi and physician Ibn Abi Usaybi'a both documented its exceptional standards. What Adud al-Dawla built was not just a building — it was a proof of concept: that a society could structure its institutions so that illness never had to mean abandonment.",
    ],
  },
  {
    id: "nuri",
    n: 6,
    figure: "Nur ad-Din Zangi",
    title: "Bimaristan Nuri — Healthcare as a Human Right in 12th-Century Damascus",
    period: "12th Century CE",
    location: "Damascus, Syria",
    type: "Charitable Hospital Endowment with Free Universal Care",
    art: ["food_parcel_a.jpeg"],
    summary:
      "A Damascus hospital with dedicated mental-health care — funded by a waqf so it never depended on a ruler's mood.",
    body: [
      "In 12th-century Damascus, Nur ad-Din Zangi — a ruler known for his piety and justice — founded Bimaristan Nuri, a hospital unlike anything the region had seen. His motivation was straightforward: he believed that no person should suffer from illness without access to care, regardless of whether they could pay. The hospital was structured as a waqf, funded by endowments that ensured it could operate without depending on ongoing royal generosity.",
      "Bimaristan Nuri was organized to treat a wide range of needs. It included separate wards for men and women, a dedicated section for children, and notably, care for patients with mental illness — a remarkably compassionate approach for the era. The hospital employed trained physicians, surgeons, pharmacists, and nurses, all of whom were held to strict ethical guidelines. Beyond treatment, it served as a teaching institution where aspiring medical professionals received hands-on training.",
      "The hospital's endowment covered everything: staff salaries, equipment, patient meals, medications, and building upkeep. This financial structure gave it a stability that charitable institutions relying on voluntary donations often lacked. Generations of patients received care there not because someone felt generous that day, but because a permanent system had been built to ensure it would always be available.",
      "Bimaristan Nuri's influence spread far beyond Damascus. It inspired similar hospitals across the Islamic world and set standards for how medical institutions could be organized, funded, and run. The Prophet Muhammad (peace be upon him) had said: \"Whoever relieves the hardship of a believer in this world, Allah will relieve his hardship on the Day of Resurrection.\" Nur ad-Din's hospital was a lasting architectural expression of that principle.",
    ],
  },
  {
    id: "walid",
    n: 7,
    figure: "Caliph Al-Walid ibn Abd al-Malik",
    title: "The Orphanage of Damascus",
    period: "Early 8th Century CE",
    location: "Damascus, Syria",
    type: "Comprehensive Orphan Care and Education",
    art: ["education.jpeg"],
    summary:
      "One of the first state-funded orphanages in Islamic history — sheltering, feeding, educating, and training hundreds of children.",
    body: [
      "In the early 8th century, under the Umayyad Caliph Al-Walid ibn Abd al-Malik, Damascus saw the establishment of one of the first state-funded orphanages in Islamic history. Al-Walid recognized that caring for orphaned children was not just an act of personal charity — it was a responsibility of governance. A child who lost their parents should not lose their future.",
      "The orphanage was designed to be more than a shelter. It housed hundreds of children and provided them with food, clothing, and medical care. But what set it apart was its educational mission: children received religious instruction, literacy training, and practical vocational skills — carpentry, agriculture, and other trades that would allow them to build independent lives when they came of age. The Caliph's vision was not just to keep children alive but to equip them to thrive.",
      "The institution's impact was visible in the lives of those it served. Children who would otherwise have been left to survive on the streets were instead given structure, learning, and community. They left the orphanage with both knowledge and skills, ready to participate as full members of society. Al-Walid's decision to fund this through the state — not rely on private charity alone — signaled that the welfare of orphans was a public obligation.",
      "The Quran is explicit on this point: \u2018I and the one who sponsors an orphan will be like this in Paradise,' said the Prophet Muhammad (peace be upon him), gesturing with his index and middle fingers held close together. Al-Walid's orphanage translated that teaching into institutional reality — creating a model that would be replicated across the Islamic world for centuries.",
    ],
  },
  {
    id: "amr",
    n: 8,
    figure: "Amr ibn al-As",
    title: "The Mosque of Fustat — Islam's First Mosque in Africa",
    period: "641 CE",
    location: "Fustat (Cairo), Egypt",
    type: "Mosque and Community Center Endowment (Waqf)",
    art: ["mosque.jpeg"],
    summary:
      "A waqf-funded mosque built as a full community institution — still standing in Cairo more than 1,380 years later.",
    body: [
      "In 641 CE, the companion of the Prophet Amr ibn al-As led the Muslim army into Egypt. After establishing the new capital city of Fustat — today part of modern Cairo — he recognized that the growing Muslim community needed more than shelter and safety. They needed a place to pray, to learn, and to come together. He purchased land and began building the first mosque on the African continent.",
      "The Mosque of Amr ibn al-As was built not just as a place of prayer but as a full community institution. It served as a center for education, a venue for community meetings, and a hub for social welfare. Amr structured it as a waqf — a permanent endowment — with specific provisions for maintaining the building, supporting scholars and students, and assisting the poor and needy in the area.",
      "The endowment meant the mosque could sustain itself across generations without depending on the generosity of any single ruler or patron. Revenue from dedicated properties funded its operations. Scholars received support to teach there. The poor found assistance within its walls. This model — the mosque as a multi-function community institution — became one of the defining features of Islamic urban life across the world.",
      "The Mosque of Amr ibn al-As has been rebuilt and expanded many times over the centuries, but it still stands today in Cairo — one of the oldest mosques in Africa and a living example of how a single act of waqf can outlast empires. What Amr ibn al-As built in 641 CE continues to serve its community more than 1,380 years later.",
    ],
  },
  {
    id: "abdurrahman",
    n: 9,
    figure: "Abdurrahman ibn Awf",
    title: "The Merchant Who Gave Half His Fortune",
    period: "7th Century CE",
    location: "Madinah, Arabian Peninsula",
    type: "Personal Philanthropy and Bequest for Widows and Orphans",
    art: ["child_donate.jpeg"],
    summary:
      "A refugee who rebuilt a fortune through trade — then bequeathed half of it to widows, orphans, and the freeing of slaves.",
    body: [
      "Abdurrahman ibn Awf arrived in Madinah as a refugee. He had left behind everything he owned in Mecca to migrate for his faith. When a fellow companion offered him half his wealth and one of his wives in marriage — as was the custom of brotherhood between the Ansar (Madinah residents) and Muhajirun (Meccan migrants) — Abdurrahman politely declined, asking only to be shown the marketplace. Within years, he had rebuilt his fortune through trade and become one of the wealthiest men in Madinah.",
      "But Abdurrahman ibn Awf never let wealth become his identity. He was known for his humility, his simple dress, and his discomfort with luxury. The Prophet Muhammad (peace be upon him) once saw him and observed that he would enter Paradise, but slowly — because wealth brings accountability. Abdurrahman reportedly wept at those words and redoubled his efforts to give.",
      "When he died, Abdurrahman bequeathed half of his vast fortune to the Muslim community. He directed that this wealth be used specifically to support widows, orphans, and the poor — the most vulnerable members of society. Historians record that he freed thousands of enslaved people during his lifetime and provided dowries for women who could not afford to marry. His estate also contributed significantly to equipping Muslim armies at his own expense.",
      "Abdurrahman ibn Awf's story is not about a single dramatic act but about a lifetime of consistent, conscious generosity. He understood that wealth was a trust, not a possession — something to be held temporarily and passed on in service to others. His example became a model for generations of Muslim merchants and philanthropists who followed: that commercial success and spiritual integrity are not opposites, but can reinforce each other.",
    ],
  },
  {
    id: "qalawun",
    n: 10,
    figure: "Sultan Qalawun",
    title: "The Qalawun Complex — A Hospital, a School, and a Mausoleum for Cairo",
    period: "1284 CE",
    location: "Cairo, Egypt",
    type: "Multi-Purpose Waqf Complex with Free Medical Care",
    art: ["mosque.jpeg"],
    summary:
      "A Mamluk sultan who vowed, after being healed as a patient, to build a hospital no one would ever be turned away from.",
    body: [
      "In 1284 CE, the Mamluk Sultan Qalawun built one of the most ambitious charitable complexes in Islamic history in the heart of Cairo. The al-Mansuri complex — named after his title al-Malik al-Mansur, the Victorious King — combined a hospital (bimaristan), a madrasa (school of religious learning), and a mausoleum within a single waqf endowment. It was not just charity on a large scale but a deliberate statement about what a just society should provide for its people.",
      "The hospital at the center of the complex was designed to treat anyone, free of charge. According to historical sources, Qalawun gave orders that no patient should ever be turned away regardless of their background, religion, or financial status. The facility was divided into specialized sections for different conditions — fevers, eye diseases, surgical cases, mental illness — and included a pharmacy, lecture halls for medical students, and separate wings for men and women.",
      "Qalawun's inspiration reportedly came from personal experience: years before becoming Sultan, he had been treated at the Bimaristan Nuri in Damascus and recovered from an illness there. He vowed that if he ever had the power to do so, he would build something similar for Cairo. That memory of receiving care when he needed it most became the seed of one of medieval Egypt's greatest institutions.",
      "The Qalawun complex was funded through an elaborate waqf that included revenues from shops, markets, farms, and properties across Cairo and Egypt. This financial structure ensured the complex's operations would continue regardless of political changes. The hospital operated for centuries after Qalawun's death, serving countless patients who never knew the Sultan's name but benefited from his decision to turn gratitude into enduring action.",
    ],
  },
];

/* ----------------------------- MODULE B ----------------------------------
   9 charity project impact simulations, each with Year 1 / 5 / 10 / 20 panels. */
const MODULE_B = [
  {
    id: "water",
    name: "Water",
    title: "Clean Water Well Project",
    icon: "\u{1F6B0}",
    art: "water_a.jpeg",
    // Per-year impact imagery. Replace each with a project-specific Firefly
    // image showing progression (small village tap → full well → network).
    // Convention: assets/<id>_y1.jpeg, _y5.jpeg, _y10.jpeg, _y20.jpeg
    years_art: ["water_y1.jpeg", "water_y5.jpeg", "water_y10.jpeg", "water_y20.jpeg"],
    cost: "$5,000\u2013$10,000 per well",
    overview:
      "Funds the drilling and construction of a deep freshwater well in a rural village with no clean water, including a pump, storage tank, concrete base, and maintenance training for 2\u20133 local members. A single well serves an entire village.",
    years: [
      {
        label: "Year 1",
        metric: "500 people gain daily clean water",
        points: [
          "500 people (approx. 80\u2013100 families) gain daily access to clean water",
          "Women and girls save 2\u20134 hours per day previously spent collecting water",
          "Waterborne disease cases (diarrhea, cholera, typhoid) drop by up to 60%",
          "School attendance improves as children \u2014 especially girls \u2014 are freed from water collection",
          "1 well constructed, 2 trained local maintenance volunteers",
        ],
      },
      {
        label: "Year 5",
        metric: "2,500 person-years of clean water",
        points: [
          "Cumulative 2,500 person-years of clean water access delivered",
          "Child mortality from waterborne diseases reduced significantly in the village",
          "Freed time allows women to engage in income-generating activities; local economy strengthens",
          "Word spreads: neighboring villages request similar projects",
          "First major maintenance performed; well still fully functional",
        ],
      },
      {
        label: "Year 10",
        metric: "5,000+ people served",
        points: [
          "Over 5,000 people have benefited from the well across a decade",
          "A generation of children grows up without experiencing water scarcity",
          "Girls' school completion rates measurably higher than neighboring areas",
          "Local maintenance team has repaired the pump twice \u2014 community is self-sufficient",
          "The donor continues earning Sadaqah Jariyah reward for every drop drawn",
        ],
      },
      {
        label: "Year 20",
        metric: "10,000+ people served",
        points: [
          "Estimated 10,000+ people served over 20 years (population grows, village expands)",
          "Children born after the well have never known water scarcity \u2014 it becomes the new normal",
          "The well becomes a community landmark; used in hygiene education and school visits",
          "Second refurbishment may be needed; waqf endowment model ensures funding is available",
          "A $5,000\u2013$10,000 donation has generated 20 years of life-changing benefit \u2014 one of the highest-impact forms of Sadaqah Jariyah",
        ],
      },
    ],
  },
  {
    id: "education",
    name: "Education",
    title: "Community School Construction & Support",
    icon: "\u{1F4DA}",
    art: "education.jpeg",
    years_art: ["education_y1.jpeg", "education_y5.jpeg", "education_y10.jpeg", "education_y20.jpeg"],
    cost: "$20,000\u2013$40,000 to build",
    overview:
      "Funds construction of a school in a rural or underserved community, plus teacher salaries, supplies, and student sponsorships. Structured as a waqf so endowment income covers ongoing costs \u2014 no annual fundraising needed to stay open.",
    years: [
      {
        label: "Year 1",
        metric: "150\u2013250 students enrolled",
        points: [
          "1 school built with 2\u20134 classrooms, serving 150\u2013250 students",
          "Up to 50 previously out-of-school children enrolled for the first time",
          "2\u20134 local teachers hired and paid regular salaries",
          "School supplies (books, pens, uniforms) provided for 100 low-income students",
          "Community gains a dedicated learning space \u2014 children previously studied outdoors or not at all",
        ],
      },
      {
        label: "Year 5",
        metric: "750\u20131,250 student-years of education",
        points: [
          "750\u20131,250 student-years of education delivered",
          "First cohort of students completes primary education cycle",
          "Literacy rates in the village noticeably improve \u2014 children teach parents to read",
          "Girls' enrollment increases as parents feel safer sending daughters to a local school",
          "School may be expanded with an additional classroom if demand exceeds capacity",
        ],
      },
      {
        label: "Year 10",
        metric: "1,500\u20132,500 students educated",
        points: [
          "1,500\u20132,500 students educated over the decade",
          "First generation of graduates entering secondary education or vocational training",
          "Some graduates returning as teachers, multiplying the original investment",
          "School becomes the educational anchor for the region \u2014 neighboring villages send children",
          "Endowment income has covered 10 years of teacher salaries with no additional fundraising needed",
        ],
      },
      {
        label: "Year 20",
        metric: "3,000\u20135,000 children educated",
        points: [
          "3,000\u20135,000 children educated \u2014 an entire generation transformed",
          "Second generation now in the school, whose parents were among the first graduates",
          "Village poverty levels measurably lower due to higher literacy and employability",
          "Some graduates have become doctors, engineers, teachers, business owners \u2014 all traced back to one school",
          "The school stands as permanent Sadaqah Jariyah: knowledge that keeps multiplying",
        ],
      },
    ],
  },
  {
    id: "food",
    name: "Food Security",
    title: "Sustainable Food Security Program",
    icon: "\u{1F35A}",
    art: "food_a.jpeg",
    years_art: ["food_y1.jpeg", "food_y5.jpeg", "food_y10.jpeg", "food_y20.jpeg"],
    cost: "$30\u2013$50 / family food parcel",
    overview:
      "Two complementary approaches: immediate food relief (parcels and community kitchens during crises/Ramadan) and long-term agricultural development (seeds, tools, and training so families grow their own food).",
    years: [
      {
        label: "Year 1",
        metric: "500 families fed",
        points: [
          "500 families (approx. 2,500 people) receive monthly food parcels for 6\u201312 months",
          "200 farming families receive agricultural starter kits and 2-day training",
          "Community kitchen feeds 100 people per day during Ramadan (3,000 meals total)",
          "Acute malnutrition cases in target area decrease by 40\u201350%",
          "Participating farmers harvest their first crops \u2014 partial self-sufficiency begins",
        ],
      },
      {
        label: "Year 5",
        metric: "200 farming families self-sufficient",
        points: [
          "200 trained farming families now produce 60\u201380% of their own food needs",
          "Surplus farmers begin selling at local markets \u2014 food security becomes economic opportunity",
          "Food parcel program transitions to focus on the most vulnerable (elderly, disabled, widows)",
          "Child stunting rates (caused by malnutrition) declining in project villages",
          "Knowledge shared: trained farmers teach techniques to neighbors, spreading impact",
        ],
      },
      {
        label: "Year 10",
        metric: "Villages largely food-secure",
        points: [
          "Target villages largely food-secure; emergency food distributions needed only during unusual crises",
          "Local food markets thriving \u2014 farmers earning regular income from surplus production",
          "Second generation of farmers trained using accumulated community knowledge",
          "Children with consistent nutrition show better school performance and health outcomes",
          "Program shifts to supporting adjacent vulnerable villages using lessons learned",
        ],
      },
      {
        label: "Year 20",
        metric: "Region no longer needs food aid",
        points: [
          "The original 200 farming families have collectively produced millions of kilograms of food over 20 years",
          "Food security is now the norm, not the exception \u2014 the region no longer needs emergency food aid",
          "Farming knowledge passed to a new generation; agricultural techniques improved over time",
          "Economic impact extends beyond food: families invest in children's education and healthcare",
          "A $200 agricultural kit investment has generated 20 years of food production \u2014 a return no financial instrument can match",
        ],
      },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    title: "Community Health Clinic",
    icon: "\u{1F49A}",
    art: "food_parcel_b.jpeg",
    years_art: ["healthcare_y1.jpeg", "healthcare_y5.jpeg", "healthcare_y10.jpeg", "healthcare_y20.jpeg"],
    cost: "$30,000\u2013$60,000 to build",
    overview:
      "Builds and runs a primary healthcare clinic for a community with the nearest hospital 50\u2013100 km away. Offers consultations, maternal and child health, vaccinations, common-illness treatment, and referrals. Operating costs covered by a waqf.",
    years: [
      {
        label: "Year 1",
        metric: "2,000\u20135,000 people served",
        points: [
          "1 clinic serving a catchment population of 2,000\u20135,000 people",
          "1,200\u20132,000 patient consultations in the first year",
          "Vaccination coverage for children under 5 rises from near zero to 70\u201380%",
          "Maternal deaths during childbirth reduced \u2014 at least 3\u20135 preventable deaths avoided in year one",
          "Patients no longer travel 50\u2013100 km for basic care; families save money and time",
        ],
      },
      {
        label: "Year 5",
        metric: "8,000\u201312,000 consultations",
        points: [
          "8,000\u201312,000 consultations delivered over 5 years",
          "Under-5 child mortality in the catchment area reduced by 25\u201335%",
          "Vaccination program reaches near-universal coverage for target age groups",
          "Chronic diseases (diabetes, hypertension) identified and managed before becoming life-threatening",
          "Staff trained and experienced; clinic runs efficiently with strong community trust",
        ],
      },
      {
        label: "Year 10",
        metric: "20,000\u201330,000 consultations",
        points: [
          "20,000\u201330,000 consultations over the decade",
          "A generation of children fully vaccinated \u2014 preventable diseases largely eliminated in the area",
          "Maternal mortality rate approaches national average (previously far higher)",
          "Clinic expands services based on community needs \u2014 possibly dental or mental health support",
          "Local community health workers trained by clinic staff extend reach to remote households",
        ],
      },
      {
        label: "Year 20",
        metric: "50,000\u201370,000 patient encounters",
        points: [
          "50,000\u201370,000 patient encounters over 20 years \u2014 a staggering number of lives touched",
          "Life expectancy in the catchment area measurably higher than comparable unserved communities",
          "Children who received vaccines and nutrition support as infants are now healthy adults",
          "The clinic has become a training ground for the next generation of local health workers",
          "Hundreds of deaths prevented, thousands of illnesses treated \u2014 all from a single endowment",
        ],
      },
    ],
  },
  {
    id: "orphan",
    name: "Orphan Care",
    title: "Orphan Sponsorship & Support Program",
    icon: "\u{1F9D1}\u200D\u{1F37C}",
    art: "food_parcel_a.jpeg",
    years_art: ["orphan_y1.jpeg", "orphan_y5.jpeg", "orphan_y10.jpeg", "orphan_y20.jpeg"],
    cost: "$30\u2013$50 / month per child",
    overview:
      "Comprehensive sponsorship for orphaned children living in poverty with widowed mothers or extended family. A monthly sponsorship covers school fees, uniforms, books, meals, healthcare, and psychosocial support \u2014 keeping families together.",
    years: [
      {
        label: "Year 1",
        metric: "100 orphans enrolled",
        points: [
          "100 orphaned children enrolled in the sponsorship program",
          "All 100 children enrolled in school \u2014 many for the first time",
          "100 caregiver families (typically widowed mothers) receive monthly support",
          "Healthcare visits for each child: vaccinations, growth monitoring, dental checks",
          "Psychosocial sessions help children process grief and build resilience",
        ],
      },
      {
        label: "Year 5",
        metric: "500 child-years of support",
        points: [
          "500 child-years of support delivered across the cohort",
          "School completion rates for sponsored children 3\u00d7 higher than non-sponsored peers",
          "Children showing measurable improvements in academic performance and emotional wellbeing",
          "Caregiver mothers supported with vocational training \u2014 some achieving economic independence",
          "First cohort of older children completing primary school and enrolling in secondary",
        ],
      },
      {
        label: "Year 10",
        metric: "First sponsored children reach adulthood",
        points: [
          "First sponsored children reaching adulthood \u2014 some completing secondary school, entering university or work",
          "Children who entered at age 5\u20136 are now 15\u201316 with education and prospects",
          "Documented cases of sponsored children becoming teachers, nurses, technicians",
          "Families that received support now more stable \u2014 cycle of poverty interrupted",
          "Program reputation attracts more sponsors, expanding to support 200+ children",
        ],
      },
      {
        label: "Year 20",
        metric: "Generational change",
        points: [
          "Multiple cohorts of children have grown into educated, self-sufficient adults",
          "Some former sponsored children now sponsor orphans themselves \u2014 generosity multiplied",
          "The cascading effect: educated orphans raise better-educated families of their own",
          "Communities where orphan sponsorship is common show stronger social cohesion and lower poverty",
          "Every $30/month sponsor investment has shaped an entire human life \u2014 no donation is more personal",
        ],
      },
    ],
  },
  {
    id: "refugee",
    name: "Refugee Support",
    title: "Refugee Resettlement & Integration Program",
    icon: "\u{1F3E1}",
    art: "child_donate.jpeg",
    years_art: ["refugee_y1.jpeg", "refugee_y5.jpeg", "refugee_y10.jpeg", "refugee_y20.jpeg"],
    cost: "$800\u2013$1,500 / family (year 1)",
    overview:
      "Comprehensive support for displaced families: emergency shelter, food, healthcare, children's education, legal documentation, language classes, and vocational training. Families are treated as rights-holders, not helpless recipients.",
    years: [
      {
        label: "Year 1",
        metric: "200 families resettled",
        points: [
          "200 displaced families (1,000 people) receive emergency shelter, food, and basic services",
          "All 300+ school-age children in the program enrolled in local or camp schools",
          "Healthcare access provided \u2014 vaccinations, maternal care, treatment of injuries",
          "Legal documentation (ID cards, birth certificates) processed for 150 families",
          "Adults begin language classes and skills assessment for vocational training",
        ],
      },
      {
        label: "Year 5",
        metric: "60\u201370% families self-sufficient",
        points: [
          "60\u201370% of originally supported families now partially or fully economically self-sufficient",
          "Children who arrived as refugees have completed 4\u20135 years of education in the host country",
          "Adults who completed vocational training employed in local businesses or self-employed",
          "Community integration improving \u2014 refugee families building social ties with host community",
          "Emergency support needs reduced; program shifts focus to integration and long-term stability",
        ],
      },
      {
        label: "Year 10",
        metric: "Stable, contributing families",
        points: [
          "First cohort of refugee children completing secondary education \u2014 some entering university",
          "Families who arrived with nothing now living in stable housing, paying rent or owning small businesses",
          "Children born in host country to refugee parents are full citizens with full futures",
          "Former refugees contributing to local economy as workers, business owners, taxpayers",
          "Some families able to contribute to the charity that once helped them \u2014 full circle",
        ],
      },
      {
        label: "Year 20",
        metric: "Generational integration",
        points: [
          "A generation of children who arrived as refugees are now educated, employed adults",
          "Refugee-background families fully integrated \u2014 indistinguishable from host community",
          "Studies show refugees who receive early comprehensive support contribute more to host economies than they cost",
          "Children born to original refugee families have never experienced displacement \u2014 the trauma ends with their parents' generation",
          "A decision to invest in 200 families in year one has created generational change for thousands",
        ],
      },
    ],
  },
  {
    id: "mosque",
    name: "Mosque Construction",
    title: "Mosque Construction & Community Center",
    icon: "\u{1F3DB}\uFE0F",
    art: "mosque.jpeg",
    years_art: ["mosque_y1.jpeg", "mosque_y5.jpeg", "mosque_y10.jpeg", "mosque_y20.jpeg"],
    cost: "$50,000\u2013$100,000 to build",
    overview:
      "Builds a mosque as a full community center for a community with no dedicated place of worship: prayer hall, ablution facilities, library, maktab classroom, and a multi-purpose room. Structured as a waqf \u2014 it can never be sold or repurposed.",
    years: [
      {
        label: "Year 1",
        metric: "300\u2013500 worshippers",
        points: [
          "1 mosque built, accommodating 300\u2013500 worshippers for Friday prayers",
          "Community has a dedicated, dignified space for the 5 daily prayers",
          "Islamic education classes begin: 50\u201380 children enrolled in Quran and Arabic instruction",
          "Community gatherings (Eid prayers, funerals, weddings, charity distributions) held with dignity",
          "The mosque becomes a social anchor \u2014 neighbors who rarely met now gather regularly",
        ],
      },
      {
        label: "Year 5",
        metric: "400\u2013600 regular worshippers",
        points: [
          "Friday congregation grows to 400\u2013600 regular worshippers as community expands",
          "Maktab graduates first cohort: 50+ children complete basic Quran memorization",
          "Mosque library used regularly by students and community members",
          "Social services operating: food distribution, charity collection, welfare referrals",
          "Mosque-based mediation resolves community disputes \u2014 social cohesion strengthened",
        ],
      },
      {
        label: "Year 10",
        metric: "Permanent community institution",
        points: [
          "A generation of children has grown up with Islamic education at the mosque",
          "Mosque becomes community institution: used for funerals, Eid celebrations, charity drives, and education",
          "Community religiosity and social solidarity measurably stronger than comparable communities without a mosque",
          "Zakat and Sadaqah collection organized through mosque supports 50\u2013100 local needy families annually",
          "Mosque may need expansion as congregation grows \u2014 original waqf structure facilitates future investment",
        ],
      },
      {
        label: "Year 20",
        metric: "Two generations educated",
        points: [
          "Two generations of children educated in Islamic values at the mosque's maktab",
          "The mosque has hosted thousands of prayers, hundreds of funerals, Eid celebrations, weddings, and events",
          "Young adults who attended maktab as children now bringing their own children \u2014 tradition passed on",
          "The mosque's charity operations have distributed hundreds of thousands of dollars in local Zakat and Sadaqah",
          "The donor's name is written in the waqf deed \u2014 remembered and prayed for by every person who prays there",
        ],
      },
    ],
  },
  {
    id: "emergency",
    name: "Emergency Relief",
    title: "Emergency Humanitarian Relief Fund",
    icon: "\u{26A1}",
    art: "year_ashes.jpeg",
    years_art: ["emergency_y1.jpeg", "emergency_y5.jpeg", "emergency_y10.jpeg", "emergency_y20.jpeg"],
    cost: "$60\u2013$100 / family emergency kit",
    overview:
      "Immediate response when disaster strikes \u2014 earthquakes, floods, famine, displacement \u2014 delivering life-saving supplies within 24\u201372 hours. An emergency kit includes 2 weeks of food, water purification, shelter tarpaulin, hygiene kit, and blankets.",
    years: [
      {
        label: "Year 1",
        metric: "1,000 families reached",
        points: [
          "1,000 families (5,000 people) receive emergency kits within 72 hours of a disaster",
          "Field medical team treats 500+ injured or sick survivors",
          "Emergency water trucking delivers clean water to 3,000 people for 2 weeks",
          "Mass feeding operation serves 2,000 meals per day for 30 days",
          "Estimated 50\u2013100 deaths prevented through immediate medical and nutritional intervention",
        ],
      },
      {
        label: "Year 5",
        metric: "15,000\u201325,000 people reached",
        points: [
          "Fund has responded to 3\u20135 separate disaster events over 5 years",
          "Cumulative 15,000\u201325,000 people reached across multiple crises",
          "Pre-positioned emergency supplies mean response time improves with each operation",
          "Lessons learned from each response improve efficiency \u2014 more lives saved per dollar spent",
          "Relationships with local partners established, enabling faster, better-targeted responses",
        ],
      },
      {
        label: "Year 10",
        metric: "50,000+ people reached",
        points: [
          "Fund has responded to 7\u201312 disaster events; a trusted, experienced relief actor",
          "Cumulative 50,000+ people reached in emergencies",
          "Transition support: fund now links emergency response to longer-term recovery programs",
          "Community resilience training added \u2014 helping communities prepare for future disasters",
          "Survivors from early responses now trained as community first responders",
        ],
      },
      {
        label: "Year 20",
        metric: "100,000+ people reached",
        points: [
          "100,000+ people reached across two decades of humanitarian response",
          "Hundreds of lives saved that would have been lost without rapid intervention",
          "The fund has become a trusted, experienced humanitarian actor with regional knowledge and networks",
          "Former disaster survivors supported by the fund now contributing as volunteers and donors",
          "Emergency relief is the highest-stakes form of charity: donations given today could save a life tomorrow",
        ],
      },
    ],
  },
  {
    id: "waqf",
    name: "Waqf Endowment",
    title: "Productive Waqf",
    icon: "\u{1F333}",
    art: "trees_a.jpeg",
    years_art: ["waqf_y1.jpeg", "waqf_y5.jpeg", "waqf_y10.jpeg", "waqf_y20.jpeg"],
    cost: "$100,000 example investment",
    overview:
      "An endowment where a capital asset (building, land, or fund) generates ongoing income permanently dedicated to charity. The principal is never spent \u2014 only the returns. This is the mechanism behind Al-Qarawiyyin, the Ottoman educational system, and thousands of mosques and hospitals still operating today.",
    years: [
      {
        label: "Year 1",
        metric: "$8,000\u2013$10,000 distributed",
        points: [
          "$100,000 invested in a waqf property generating 8\u201310% annual return",
          "Year 1 income: $8,000\u2013$10,000 distributed to charitable programs",
          "Equivalent to: 200 monthly food parcels, OR 1 water well, OR school supplies for 80 students",
          "Capital fully preserved \u2014 the $100,000 investment has not decreased",
          "Waqf deed registered: the endowment is now permanent and legally protected",
        ],
      },
      {
        label: "Year 5",
        metric: "$40,000\u2013$50,000 distributed",
        points: [
          "Cumulative income distributed: $40,000\u2013$50,000 over 5 years",
          "Equivalent to: 5 water wells built, OR 250 orphan-months of sponsorship, OR 2 years of clinic operation",
          "Capital still fully intact \u2014 still worth $100,000+",
          "Income may grow if property value increases \u2014 returns rise with inflation protection",
          "Donor has given $100,000 once but delivered $40,000\u2013$50,000 in social benefit already",
        ],
      },
      {
        label: "Year 10",
        metric: "$80,000\u2013$100,000 distributed",
        points: [
          "Cumulative income distributed: $80,000\u2013$100,000 \u2014 already returned the original investment",
          "Capital still intact: the original $100,000 is still working",
          "Every year from this point forward is pure additional impact, above and beyond the original gift",
          "The waqf has now funded more good than a straightforward $100,000 cash donation would have",
          "Beneficiaries of the waqf income do not know the donor's name \u2014 yet their lives have been shaped by it",
        ],
      },
      {
        label: "Year 20",
        metric: "$160,000\u2013$200,000 distributed",
        points: [
          "Cumulative income distributed: $160,000\u2013$200,000 from a single $100,000 investment",
          "Capital still intact \u2014 the endowment has not been spent, only grown",
          "Total social value created: double the original investment, with no end in sight",
          "The donor passed on years ago \u2014 the waqf continues in their name, earning reward",
          "This is Sadaqah Jariyah in its most powerful form: wealth transformed into an eternal act of worship",
        ],
      },
    ],
  },
];

/* ----------------------------- MODULE C ----------------------------------
   9 youth mini-games across 3 age groups. Each carries its own playable engine
   in app.js (referenced by id). */
const MODULE_C = [
  {
    age: "7-10",
    games: [
      {
        id: "charity-match",
        title: "Charity Match",
        icon: "\u{1F9F0}",
        concept:
          "A memory-style card matching game where children flip cards to find pairs. Each pair connects a charity concept (e.g., 'building a well') with an image (a village child drinking clean water).",
        how: [
          "A 4\u00d74 grid of face-down cards appears on screen.",
          "The player flips two cards at a time.",
          "If the cards match (concept + image), they stay face up and earn a star.",
          "If they don't match, they flip back over.",
          "Game ends when all pairs are matched, with an animated explanation for each pair.",
        ],
        outcome:
          "Children learn the names and visual associations of core Islamic charity concepts without memorization pressure.",
        difficulty: "Easy",
      },
      {
        id: "fill-box",
        title: "Fill the Donation Box",
        icon: "\u{1F4E6}",
        concept:
          "A drag-and-drop game where a person in need appears on screen and the player drags the correct items into a donation box. Correct items transform the scene.",
        how: [
          "A scene appears: a character in a specific situation of need (cold, hungry, sick, uneducated).",
          "A shelf of items appears on the side \u2014 some helpful, some irrelevant.",
          "The player drags the right items into the donation box.",
          "Correct items trigger a happy animation; wrong items bounce back with a gentle hint.",
          "After filling the box correctly, the scene transforms \u2014 the character is now warm, fed, healthy, or in school.",
        ],
        outcome:
          "Children connect specific forms of charity to real human needs, developing empathy alongside Islamic knowledge.",
        difficulty: "Easy",
      },
      {
        id: "giving-tree",
        title: "The Giving Tree",
        icon: "\u{1F332}",
        concept:
          "A nurturing game where the player grows a tree by correctly answering simple charity questions. Each correct answer waters the tree. The fully grown tree represents a lifetime of Sadaqah Jariyah.",
        how: [
          "A small seedling appears on screen.",
          "A simple question appears with three image options.",
          "A correct answer waters the tree \u2014 it grows visibly with an animation.",
          "A wrong answer gives a gentle clue and asks again.",
          "After several questions, the tree is fully grown and glowing.",
        ],
        outcome:
          "Children understand the concept of Sadaqah Jariyah through a living visual metaphor that grows with their correct answers.",
        difficulty: "Easy-Medium",
      },
    ],
  },
  {
    age: "11-14",
    games: [
      {
        id: "build-community",
        title: "Build Your Community",
        icon: "\u{1F3D8}\uFE0F",
        concept:
          "A strategy-lite simulation: players receive a fictional village and a $10,000 charity budget, choose which projects to fund, and see the immediate impact play out. Different combinations produce different outcomes.",
        how: [
          "Meet the village: shown the population and their main problems (no water, no school, sick children).",
          "Receive a budget of $10,000 and a menu of projects with costs and descriptions.",
          "Select projects within budget \u2014 you cannot fund everything, so you must prioritize.",
          "After confirming, an animated sequence shows the village 1 year later.",
          "A 'community happiness score' shows the outcome; replay with different combinations.",
        ],
        outcome:
          "Players develop prioritization thinking and connect decision-making to Islamic values of justice and care for the vulnerable.",
        difficulty: "Medium",
      },
      {
        id: "sort-zakat",
        title: "Sort the Zakat",
        icon: "\u2696\uFE0F",
        concept:
          "A categorization game based on the 8 categories of Zakat recipients. Players read short character descriptions and drag each person to the correct Zakat category.",
        how: [
          "8 labeled category boxes appear, each with a short description and icon.",
          "A character card appears (e.g., 'Ahmad is traveling and has run out of money far from home').",
          "Player drags the character to the correct category.",
          "Correct: animated confirmation + explanation of the ruling.",
          "Wrong: gentle correction with a hint about which category fits better.",
        ],
        outcome:
          "Players memorize and understand the 8 Zakat categories through contextual examples rather than rote memorization.",
        difficulty: "Medium",
      },
      {
        id: "chain-reaction",
        title: "Charity Chain Reaction",
        icon: "\u{1F517}",
        concept:
          "A chain-reaction puzzle where players trace the ripple effects of a single charitable act, predicting what happens next. The longest chain reveals the power of Sadaqah Jariyah.",
        how: [
          "A starting charity action is shown (e.g., 'Ibrahim digs a water well in his village').",
          "Player clicks 'What happens next?' and chooses from 3 possible outcomes.",
          "Correct choice unlocks the next scene and keeps the chain going.",
          "Wrong choices branch into a shorter chain, showing a less impactful outcome.",
          "At the end, a comparison shows: one-time gift chain vs. Sadaqah Jariyah chain.",
        ],
        outcome:
          "Players viscerally understand why ongoing charity (wells, schools, waqf) generates far more impact than one-time giving.",
        difficulty: "Medium-Hard",
      },
    ],
  },
  {
    age: "15-18",
    games: [
      {
        id: "waqf-architect",
        title: "Waqf Architect",
        icon: "\u{1F3D7}\uFE0F",
        concept:
          "A financial design simulation: players receive a fictional inheritance ($50,000) and design a productive waqf endowment \u2014 choosing the asset, the cause, and the governance \u2014 then simulate 20 years of impact.",
        how: [
          "Receive a scenario: 'Your grandfather has left you $50,000. You decide to make it a waqf.'",
          "Step 1 \u2014 Choose asset: commercial property (8% return), farmland (5% return + food), or a waqf fund (7% return).",
          "Step 2 \u2014 Choose cause: education, healthcare, water, orphan care, or emergency relief.",
          "Step 3 \u2014 Set governance: family trustee, charity organization, or independent board.",
          "The simulation runs: Year 1 \u2192 5 \u2192 10 \u2192 20 shown in animated infographics.",
        ],
        outcome:
          "Players develop financial literacy around Islamic endowments and practice ethical decision-making about wealth.",
        difficulty: "Hard",
      },
      {
        id: "giving-dilemma",
        title: "The Giving Dilemma",
        icon: "\u{1F9AD}",
        concept:
          "An ethical scenario game presenting real-world charity dilemmas that have no obvious right answer. Players choose, articulate their reasoning using Islamic principles, then see how others responded.",
        how: [
          "A dilemma is presented (e.g., '$500: feed 100 families for one day OR dig one well serving 50 families for 20 years?').",
          "Player reads both options carefully and selects one.",
          "Player chooses which Islamic principle guided the decision (Sadaqah Jariyah, urgency, numbers helped, most vulnerable).",
          "The game reveals how 1,000 other players responded, and a scholarly note on the trade-off.",
          "5 dilemmas total; final reflection: 'What matters is that you give thoughtfully, with a pure intention.'",
        ],
        outcome:
          "Players develop sophisticated thinking about charity ethics \u2014 urgency vs. sustainability, quantity vs. depth, immediate need vs. long-term impact.",
        difficulty: "Hard",
      },
      {
        id: "impact-calc",
        title: "Real Impact Calculator",
        icon: "\u{1F4A1}",
        concept:
          "An interactive calculator that shows what actual money could achieve. Players input an amount and a project area, and the calculator shows exactly what that funds \u2014 with real numbers and animated infographics.",
        how: [
          "Player selects a giving amount using a slider ($1 to $1,000).",
          "Player selects a project area (water, food, education, healthcare, orphan care).",
          "The calculator instantly shows specific impact with real numbers.",
          "An animated infographic shows the impact visually.",
          "Player can switch between project areas to compare.",
        ],
        outcome:
          "Players connect abstract money amounts to concrete human impact and understand that small amounts genuinely matter.",
        difficulty: "Medium",
      },
    ],
  },
];

/* ----------------------------- MODULE D ----------------------------------
   Story writing guidelines + 5 original sample stories for the community wall. */
const MODULE_D = {
  guidelines: [
    {
      title: "Your story must be true",
      do: [
        "Write about something that actually happened \u2014 your own act of charity, or one you witnessed firsthand.",
        "Use real details: a real place, a real situation, a real person (use a first name or 'my neighbor' for privacy).",
      ],
      dont: [
        "Don't invent or exaggerate details to sound impressive. A small, honest story is more powerful than a large made-up one.",
        "Don't copy stories from the internet or books. This platform is for your voice.",
      ],
    },
    {
      title: "Tell it like a story, not a report",
      do: [
        "Start with a scene: Where were you? What did you see? What made you decide to act?",
        "Include a moment of decision: What made you give?",
        "Show what happened after: How did the person react? What changed? How did you feel?",
      ],
      dont: ["Don't write a list of facts. Tell us the human story."],
    },
    {
      title: "Connect it to Islamic values \u2014 but naturally",
      do: [
        "If a verse or hadith came to mind in the moment, include it \u2014 naturally, as part of how you experienced the story.",
        "Reflect on what the experience taught you about Sadaqah, Waqf, Zakat, or another concept.",
      ],
      dont: [
        "Don't force Quranic quotes into every paragraph. The story itself should carry the Islamic spirit.",
        "Don't moralize or lecture the reader. Trust your story to speak for itself.",
      ],
    },
    {
      title: "Be specific",
      do: [
        "Specific: 'I bought a bag of rice, three tins of tomatoes, and a box of sugar.'",
        "Specific: 'She looked up at me without saying anything and held the box against her chest.'",
      ],
      dont: [
        "Vague: 'I gave food to people who needed it.'",
        "Specific details are what make a reader feel they were there with you.",
      ],
    },
    {
      title: "Respect people's dignity and privacy",
      do: [
        "Ask permission before sharing details about another person's situation.",
        "Use first names or descriptions only ('a woman in my neighborhood') to protect privacy.",
        "Write about people with dignity \u2014 describe their strength and resilience, not just their need.",
      ],
      dont: ["Don't share photos or identifying details of beneficiaries without explicit consent."],
    },
    {
      title: "Length and format",
      do: [
        "Length: 300\u2013700 words is ideal.",
        "Structure: A beginning (the situation), a middle (the act of giving), and an end (the impact or reflection).",
        "Tone: Warm, honest, personal. Write the way you would tell a story to a friend.",
      ],
      dont: ["Don't use formal academic language."],
    },
  ],
  samples: [
    {
      title: "The Date at the Bus Stop",
      teaser:
        "Two dates, five seconds, a stranger's smile \u2014 and a hadith I finally understood.",
      body: [
        "It was a Tuesday in Ramadan, about twenty minutes before Maghrib. I was at the bus stop near our apartment, waiting with my younger brother. I had a small bag of dates in my school bag \u2014 my mother had packed them so we wouldn't arrive home too hungry before Iftar.",
        "An older man sat down on the bench beside us. He had a worn jacket and a plastic bag at his feet. He was not speaking to anyone. He was just sitting there very quietly, and I noticed he kept looking at his watch.",
        "I don't know exactly what made me do it. Maybe it was the way he looked at his watch \u2014 like someone counting down the minutes until he could finally eat. I reached into my bag and took out two dates and held them out to him. He looked at me for a moment, surprised. Then he smiled and took them. \u2018Jazak Allahu khayran,' he said. May Allah reward you with good.",
        "My brother looked at me after the man got on his bus. \u2018Why did you give him your dates?' he asked. \u2018You'll be hungry.'",
        "I thought about it. \u2018I still have some left,' I said. \u2018And he needed them more before I did.'",
        "It was two dates. It took five seconds. But I think about that man's smile more than I think about most things. The Prophet (peace be upon him) said: \u2018Do not belittle any act of kindness, even meeting your brother with a cheerful face.' I understood that differently after that Tuesday.",
      ],
    },
    {
      title: "My Grandfather's Bookshelf",
      teaser:
        "147 books, a mosque library, and a teenage boy who had no idea whose book he was reading.",
      body: [
        "When my grandfather passed away three years ago, he left behind a large wooden bookshelf in his study \u2014 filled with Islamic books, history books, science books, and Qurans in different sizes. My father asked us what we should do with them.",
        "My first instinct was to keep them. They were his. They smelled like his house. But my younger cousin said something I have not forgotten: \u2018Grandfather always said a book sitting on a shelf is asleep. It only wakes up when someone reads it.'",
        "We decided to donate the entire shelf to the mosque library in our neighborhood. A carpenter from the community came and helped us move it. We packed 147 books in total.",
        "A few months later, I went to the mosque for Friday prayer and saw a teenage boy, maybe 13 or 14, sitting in the corner after prayer, reading one of my grandfather's history books. The one about the early caliphs. He had no idea whose book it had been. He was just reading, completely absorbed.",
        "I sat there watching him for a moment before I went home. I did not say anything.",
        "My grandfather used to say: \u2018Ilm la yanqus bil-i'taa \u2014 knowledge does not decrease when you give it away.' I think what he meant was that when you share knowledge, it does not leave you, it multiplies.",
      ],
    },
    {
      title: "Hundred Riyals",
      teaser:
        "A new school bag I didn't need, a mother's quiet lesson, and giving 'without the right hand knowing.'",
      body: [
        "My mother gave me hundred riyals to spend on a new school bag. The one I had was perfectly fine, honestly, she just thought it was time for a new one.",
        "On the way to the mall, we passed a woman sitting outside a supermarket. She had two small children with her, both younger than my little sister. One of the children was wearing a sandal on one foot and a torn shoe on the other. I do not know why I noticed that specifically. I just did.",
        "I told my mother I did not need a new bag. She looked at me for a moment and then looked at the woman and the children. She did not say anything. She just opened her purse and took out another hundred riyals and handed it to me along with mine.",
        "I went back to the woman and crouched down so I was at eye level with her. \u2018This is for your family,' I said. \u2018Allah ybarek feek,' she said.",
        "In the car home, my mother said: \u2018You know, the best charity is given when neither the right hand knows what the left hand gives.' I asked her what that meant. She said it means giving without wanting credit for it, not expecting thanks, not even quite expecting anything from yourself.",
      ],
    },
    {
      title: "The Meal We Cooked Together",
      teaser:
        "A Syrian family two floors below, a winter of lentil soup, and what neighbors are supposed to do.",
      body: [
        "There is a family that lives two floors below us. A Syrian family \u2014 a mother, a grandmother, and three children. The father is not with them. I do not know the details and it is not my place to ask.",
        "Last winter was very cold. One evening my mother mentioned that she had not seen the mother in several days and was worried. She knocked on their door and came back looking quiet.",
        "That evening, my mother, my aunt who was visiting, and I spent two hours in the kitchen. We made a large pot of lentil soup, a dish of rice with vegetables, a pan of bread, and a small plate of sweets left over from Eid. We put it all in containers and carried it downstairs.",
        "The grandmother opened the door. When she saw the food, she did not say anything at first. She put her hand on my mother's arm and then on my cheek and said something in a dialect I did not fully understand. But I understood enough.",
        "We did this every Friday for the rest of winter. Sometimes we cooked specifically for them. Sometimes we just made extra of whatever we were already making.",
        "I do not think of it as charity in the formal sense. I think of it as what neighbors do \u2014 what they are supposed to do. The Prophet (peace be upon him) said: \u2018He is not a believer whose neighbor goes hungry while he sleeps full.' We were just trying to be believers.",
      ],
    },
    {
      title: "What My Pocket Money Built",
      teaser:
        "A twelfth birthday with no presents, four months of saving, and a well in Somalia I will never see.",
      body: [
        "For my twelfth birthday, I asked my parents not to give me presents. I know that sounds strange. But I had been thinking about it for a while. I already had more things than I needed, and I had read that a water well in parts of Africa costs about the same as a year of birthday presents.",
        "My parents agreed. Instead of presents, they let me collect contributions from family and add my own pocket money that I had been saving. After four months, I had raised enough.",
        "We donated through a verified charity that builds wells in Somalia. They sent us a photo of the completed well three months later, and a note saying it would serve a village of about 400 people.",
        "I printed the photo and taped it next to my desk. I have not told many people about it. I look at it because it helps me understand something I find hard to hold in my head: that the people in that village are real, and they are drinking clean water, and some part of that is connected to me even though I will never meet them.",
        "I am thirteen now. I have started saving again for next year.",
        "The Prophet (peace be upon him) said: \u2018The best charity is giving water.' I used to think that meant literally giving a cup of water to someone in front of you. Now I think it means: however you can \u2014 pocket money, birthday, whatever you have \u2014 give people water. Even if they never know your name.",
      ],
    },
  ],
};

window.SADAQAH_DATA = { MODULE_A, MODULE_B, MODULE_C, MODULE_D };
