"use client";

import React from "react";

export default function ArticlePage({
    productName = "Article",
    category,
    imageSrc = null,
    themeColor = null,
}) {
    const lang =
        typeof document !== "undefined"
            ? (document.documentElement.lang || "fr").split("-")[0]
            : "fr";

    const isRTL = lang === "ar";

    const slugify = (name) =>
        String(name || "")
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9\-ء-ي]/g, "");

    const slug = slugify(productName);

    // Product content database (per slug, per language).
    const productData = {
        zamak: {
            image: "/product_section/lingots-du-zamak.webp", // NEW
            imageTableau: "/tableaux/tableau_zamak.jpeg", // NEW
            fr: {
                shortTitle: "Zamak",
                longTitle: "Zamak (Zamak 5)",
                intro: "Le Zamak est un alliage principalement composé de zinc (≈95 %), d’aluminium (≈4 %), de cuivre (≈1 %) et de traces de magnésium. Zamak 5, le plus utilisé, offre une excellente fluidité pour le moulage sous pression, de bonnes propriétés mécaniques et une résistance à la corrosion accrue grâce au cuivre.",
                specsHtml: `<pre class="whitespace-pre-wrap text-sm">Composition : Zn ≈95 %, Al ≈4 %, Cu ≈1 %, Mg (traces)
Densité : 6,6 – 6,7 g/cm³
Température de fusion : ≈385 °C
Résistance à la traction : 280 – 320 MPa
Allongement : ≈10 %
Conductivité thermique : ~110 W/m·K
Utilisations : pièces de précision, connectique, outillage, pièces automobiles</pre>`,
            },
            en: {
                shortTitle: "Zamak",
                longTitle: "Zamak (Zamak 5)",
                intro: "Zamak is an alloy mainly composed of zinc (≈95%), aluminum (≈4%), copper (≈1%) and trace magnesium. Zamak 5, the most common grade, delivers excellent die-casting fluidity, good mechanical properties and improved corrosion resistance thanks to copper.",
                specsHtml: `<pre class="whitespace-pre-wrap text-sm">Composition: Zn ≈95%, Al ≈4%, Cu ≈1%, Mg (traces)
Density: 6.6 – 6.7 g/cm³
Melting point: ≈385 °C
Tensile strength: 280 – 320 MPa
Elongation: ≈10 %
Thermal conductivity: ~110 W/m·K
Uses: precision die-casting, connectors, tooling, automotive parts</pre>`,
            },
            ar: {
                shortTitle: "زاماك",
                longTitle: "زاماك (Zamak 5)",
                intro: "الزاماك سبيكة تتكون أساسًا من الزنك (≈95٪)، والألمنيوم (≈4٪)، والنحاس (≈1٪) وآثار من المغنيسيوم. Zamak 5 الأكثر شيوعًا يقدّم سيولة ممتازة للصب بالقالب وقوة ميكانيكية جيدة ومقاومة متزايدة للتآكل بفضل النحاس.",
                specsHtml: `<pre class="whitespace-pre-wrap text-sm">التركيب: Zn ≈95٪، Al ≈4٪، Cu ≈1٪، Mg (آثار)
الكثافة: 6.6 – 6.7 جم/سم³
نقطة الانصهار: ≈385 °م
قوة الشد: 280 – 320 ميجا باسكال
الاستطالة: ≈10٪
التوصيل الحراري: ~110 واط/م·ك
الاستخدامات: صب دقيق، موصلات، أدوات، قطع سيارات</pre>`,
            },
        },

        "plomb-doux": {
            image: "/product_section/plomb-doux.png", // NEW
            imageTableau: "/tableaux/tableau_plombDoux.jpeg", // NEW
            fr: {
                shortTitle: "Plomb doux",
                longTitle: "Plomb doux pur ≥ 99 %",
                intro: "Le plomb doux présente une pureté supérieure à 99 % et se caractérise par une malléabilité extrême, une densité élevée et une très faible dureté. Il résiste à de nombreux agents corrosifs mais nécessite des précautions sanitaires strictes en raison de sa toxicité.",
                specsHtml: `<pre class="whitespace-pre-wrap text-sm">Pureté : ≥99 %
Densité : 11,34 g/cm³
Point de fusion : 327 °C
Conductivité électrique : ≈4,8 MS/m
Utilisation : gaines, revêtements anti-corrosion, radioprotection</pre>`,
            },
            en: {
                shortTitle: "Soft lead",
                longTitle: "Soft Lead (≥ 99%)",
                intro: "Soft lead has purity above 99% and features extreme malleability, high density and low hardness. It resists many corrosive agents but requires strict health precautions due to toxicity.",
                specsHtml: `<pre class="whitespace-pre-wrap text-sm">Purity: ≥99%
Density: 11.34 g/cm³
Melting point: 327 °C
Electrical conductivity: ≈4.8 MS/m
Uses: sheathing, anti-corrosion coatings, radiation protection</pre>`,
            },
            ar: {
                shortTitle: "الرصاص اللين",
                longTitle: "الرصاص اللين نقي ≥ 99٪",
                intro: "الرصاص اللين ذو نقاء يفوق 99٪ ويتميز بسهولة التشكيل وكثافة عالية وصلابة منخفضة. يقاوم العديد من العوامل المسببة للتآكل لكنه يتطلب احتياطات صحية صارمة بسبب سميّته.",
                specsHtml: `<pre class="whitespace-pre-wrap text-sm">النقاء: ≥99٪
الكثافة: 11.34 جم/سم³
نقطة الانصهار: 327 °م
التوصيل الكهربائي: ≈4.8 MS/m
الاستخدامات: أغماد، طلاءات مضادة للتآكل، الحماية الإشعاعية</pre>`,
            },
        },

        aluminium: {
            image: "/product_section/aluminium-en-lingots.avif", // NEW
            imageTableau: "/tableaux/tableau_aluminium.jpeg", // NEW
            fr: {
                shortTitle: "Aluminium",
                longTitle: "Aluminium (lingots / feuilles)",
                intro: "L’aluminium industriel est pur à environ 99,7 % et parfois allié selon l'application. Il est léger, ductile, et résistant à la corrosion via une couche d’oxyde protectrice.",
                specsHtml: `<pre class="whitespace-pre-wrap text-sm">Pureté : ≈99,7 %
Densité : 2,7 g/cm³
Température de fusion : 660 °C
Résistance à la traction : 70 – 700 MPa (selon alliage)
Conductivité thermique : 237 W/m·K
Utilisation : tôlerie, aviation, emballage, extrusion</pre>`,
            },
            en: {
                shortTitle: "Aluminium",
                longTitle: "Aluminium (ingots / sheets)",
                intro: "Industrial aluminium is typically ~99.7% pure and sometimes alloyed. It is lightweight, ductile and naturally corrosion-resistant thanks to a protective oxide layer.",
                specsHtml: `<pre class="whitespace-pre-wrap text-sm">Purity: ≈99.7%
Density: 2.7 g/cm³
Melting point: 660 °C
Tensile strength: 70 – 700 MPa (depending on alloy)
Thermal conductivity: 237 W/m·K
Uses: sheet metal, aerospace, packaging, extrusion</pre>`,
            },
            ar: {
                shortTitle: "الألمنيوم",
                longTitle: "الألمنيوم (سبائك/صفائح)",
                intro: "الألمنيوم الصناعي نقاؤه ≈99.7٪ وقد يُخلَط بعناصر أخرى حسب التطبيق. يتميز بخفة الوزن والليونة ومقاومة للتآكل عبر طبقة أكسيد واقية.",
                specsHtml: `<pre class="whitespace-pre-wrap text-sm">النقاء: ≈99.7٪
الكثافة: 2.7 جم/سم³
نقطة الانصهار: 660 °م
قوة الشد: 70 – 700 ميجا باسكال (حسب السبيكة)
التوصيل الحراري: 237 واط/م·ك
الاستخدامات: الصفائح، الطيران، التعبئة، البثق</pre>`,
            },
        },

        "oxyde-de-zinc": {
            image: "/product_section/oxyde de zinc.avif", // NEW
            imageTableau: "/tableaux/tableau_oxideZinc.jpeg", // NEW
            fr: {
                shortTitle: "Oxyde de Zinc",
                longTitle: "Oxyde de Zinc (ZnO)",
                intro: "Oxyde de zinc — produit obtenu par oxydation contrôlée de la vapeur de zinc; utilisé dans le caoutchouc, céramique, pharmaceutique et électronique.",
                specsHtml: `<pre class="whitespace-pre-wrap text-sm">Propriétés typiques :
Pureté : souvent ≥ 99,8 %
Forme : poudre, granulométrie contrôlée
Applications : caoutchouc, céramique, pharmaceutique, électronique</pre>`,
            },
            en: {
                shortTitle: "Zinc oxide",
                longTitle: "Zinc Oxide (ZnO)",
                intro: "Zinc oxide — obtained by controlled oxidation of zinc vapor; widely used in rubber, ceramics, pharmaceuticals and electronics.",
                specsHtml: `<pre class="whitespace-pre-wrap text-sm">Typical properties:
Purity: often ≥ 99.8%
Form: powder, controlled particle-size distribution
Applications: rubber, ceramics, pharmaceutical, electronics</pre>`,
            },
            ar: {
                shortTitle: "أكسيد الزنك",
                longTitle: "أكسيد الزنك (ZnO)",
                intro: "أكسيد الزنك — ينتج من أكسدة بخار الزنك بطريقة مضبوطة؛ يستخدم على نطاق واسع في المطاط والسيراميك والدواء والإلكترونيات.",
                specsHtml: `<pre class="whitespace-pre-wrap text-sm">الخصائص النموذجية:
النقاء: غالبًا ≥ 99.8%
الشكل: مسحوق، توزيع حجم جسيمات متحكم به
التطبيقات: المطاط، السيراميك، الصناعات الدوائية، الإلكترونيات</pre>`,
            },
        },

        "zinc-shg": {
            image: "/product_section/SHG-99.995.png", // NEW
            imageTableau: "/tableaux/tableau_zincSHG99.jpeg", // NEW
            fr: {
                shortTitle: "Zinc SHG",
                longTitle: "Zinc SHG 99.995% (Super High Grade)",
                intro: "Le zinc SHG est un métal pur à ≥ 99,995 % utilisé pour la galvanisation et des applications exigeantes en faible impuretés.",
                specsHtml: `<pre class="whitespace-pre-wrap text-sm">Pureté : ≥99,995 %
Densité : 7,1 g/cm³
Point de fusion : 419 °C
Utilisation : galvanisation, alliages, chimie</pre>`,
            },
            en: {
                shortTitle: "Zinc SHG",
                longTitle: "Zinc SHG 99.995% (Super High Grade)",
                intro: "Zinc SHG is a metal of ≥ 99.995% purity used in galvanizing and applications requiring very low impurities.",
                specsHtml: `<pre class="whitespace-pre-wrap text-sm">Purity: ≥99.995%
Density: 7.1 g/cm³
Melting point: 419 °C
Uses: galvanizing, alloys, chemical industry</pre>`,
            },
            ar: {
                shortTitle: "زنك SHG",
                longTitle: "زنك SHG 99.995٪",
                intro: "زنك SHG معدن بنقاء ≥ 99.995٪ يُستخدم في الجلفنة والتطبيقات التي تتطلب شوائب منخفضة جدًا.",
                specsHtml: `<pre class="whitespace-pre-wrap text-sm">النقاء: ≥99.995٪
الكثافة: 7.1 جم/سم³
نقطة الانصهار: 419 °م
الاستخدامات: الجلفنة، السبيكات، الصناعة الكيميائية</pre>`,
            },
        },

        "zinc-aluminé": {
            image: "/product_section/zinc-aluminé.jpg", // NEW
            imageTableau: "/tableaux/tableau_aluminium.jpeg", // NEW
            fr: {
                shortTitle: "Zinc alluminé",
                longTitle: "Zinc alluminé",
                intro: "Alliage de zinc (≈95 %) et d'aluminium (≈5 %), utilisé pour le revêtement anticorrosion (galvanisation) et tôlerie acier.",
                specsHtml: `<pre class="whitespace-pre-wrap text-sm">Composition : Zn ≈95%, Al ≈5%
Densité : ≈6,5 – 7 g/cm³
Température de fusion : 420 – 450 °C
Utilisation : revêtements anticorrosion, tôles acier</pre>`,
            },
            en: {
                shortTitle: "Zinc aluminized",
                longTitle: "Zinc aluminized",
                intro: "Alloy of zinc (≈95%) and aluminum (≈5%), used for anticorrosion coatings (hot-dip) and steel sheet protection.",
                specsHtml: `<pre class="whitespace-pre-wrap text-sm">Composition: Zn ≈95%, Al ≈5%
Density: ≈6.5 – 7 g/cm³
Melting point: 420 – 450 °C
Uses: anticorrosion coatings, steel sheets</pre>`,
            },
            ar: {
                shortTitle: "زنك مضاف بالألمنيوم",
                longTitle: "زنك مضاف بالألمنيوم",
                intro: "سبيكة زنك (≈95٪) وألمنيوم (≈5٪) تُستخدم في الطلاءات المضادة للتآكل وألواح الصلب.",
                specsHtml: `<pre class="whitespace-pre-wrap text-sm">التركيب: Zn ≈95٪، Al ≈5٪
الكثافة: ≈6.5 – 7 جم/سم³
نقطة الانصهار: 420 – 450 °م
الاستخدامات: طلاءات مضادة للتآكل، صفائح فولاذية</pre>`,
            },
        },

        cuivres: {
            image: "/product_section/lingot-de-cuivre.jpg", // NEW
            imageTableau: "/tableaux/tableau_cuivre.jpeg", // NEW
            fr: {
                shortTitle: "Cuivre",
                longTitle: "Cuivre (cathodes / plaques)",
                intro: "Cuivre industriel pur (≥ 99,9 %) en cathodes ou plaques, excellent en conductivité électrique et thermique.",
                specsHtml: `<pre class="whitespace-pre-wrap text-sm">Pureté : ≥99,9 %
Densité : 8,96 g/cm³
Température de fusion : 1084 °C
Conductivité électrique : ≈58 MS/m
Utilisation : câblage، tuyauterie، alliages</pre>`,
            },
            en: {
                shortTitle: "Copper",
                longTitle: "Copper (cathodes / plates)",
                intro: "Industrial copper (≥ 99.9%) available as cathodes or plates, excellent in electrical and thermal conductivity.",
                specsHtml: `<pre class="whitespace-pre-wrap text-sm">Purity: ≥99.9%
Density: 8.96 g/cm³
Melting point: 1084 °C
Electrical conductivity: ≈58 MS/m
Uses: wiring, piping, alloys</pre>`,
            },
            ar: {
                shortTitle: "النحاس",
                longTitle: "النحاس (قِطَع / ألواح)",
                intro: "نحاس صناعي نقي (≥ 99.9٪) متوفر في شكل كاثودات أو ألواح، ذو توصيل كهربائي وحراري ممتاز.",
                specsHtml: `<pre class="whitespace-pre-wrap text-sm">النقاء: ≥99.9٪
الكثافة: 8.96 جم/سم³
نقطة الانصهار: 1084 °م
التوصيل الكهربائي: ≈58 MS/m
الاستخدامات: الأسلاك، الأنابيب، السبيكات</pre>`,
            },
        },

        carton: {
            image: "", // NEW
            imageTableau: "", // NEW
            fr: {
                shortTitle: "Carton",
                longTitle: "Carton industriel (emballage)",
                intro: "Carton pour emballage industriel : grades kraft et ondulé pour palette, résistances à la compression et propriétés d’amortissement selon l’application (simple/double cannelure).",
                specsHtml: `<pre class="whitespace-pre-wrap text-sm">Grades : kraft, testliner, fluting
Propriétés : résistance à la compression (ECT), résistance au poinçonnement
Applications : boîtes, palettes, calages, emballage industriel</pre>`,
            },
            en: {
                shortTitle: "Industrial cardboard",
                longTitle: "Industrial Cardboard (packaging)",
                intro: "Industrial cardboard for packaging: kraft and corrugated grades for pallets, with compression strength and cushioning properties depending on single/double wall configurations.",
                specsHtml: `<pre class="whitespace-pre-wrap text-sm">Grades: kraft, testliner, fluting
Properties: compression strength (ECT), puncture resistance
Uses: boxes, pallets, void fill, industrial packaging</pre>`,
            },
            ar: {
                shortTitle: "كرتون صناعي",
                longTitle: "كرتون صناعي (تغليف)",
                intro: "كرتون للتغليف الصناعي: درجات كرافت ومموجة للمنصات، بخصائص مقاومة الانضغاط وامتصاص الصدمات حسب الطبقات.",
                specsHtml: `<pre class="whitespace-pre-wrap text-sm">الدرجات: كرافت، تيستلائنر، فلوتينج
الخصائص: مقاومة الانضغاط (ECT)، مقاومة الثقب
الاستخدامات: صناديق، منصات، حشوات، تغليف صناعي</pre>`,
            },
        },
    };

    // fallback product if slug not found
    const fallback = {
        fr: {
            shortTitle: productName,
            longTitle: productName,
            intro: "Description non disponible pour ce produit.",
            specsHtml: "",
        },
        en: {
            shortTitle: productName,
            longTitle: productName,
            intro: "Description not available for this product.",
            specsHtml: "",
        },
        ar: {
            shortTitle: productName,
            longTitle: productName,
            intro: "الوصف غير متوفر لهذا المنتج.",
            specsHtml: "",
        },
    };

    const data = productData[slug]
        ? productData[slug][lang] || productData[slug].fr
        : fallback[lang];

    const mainImage =
        imageSrc ||
        productData[slug]?.image ||
        "/tableaux/tableau_aluminium.jpeg";

    const bandImageTableau = productData[slug]?.imageTableau;
    const bandColor = themeColor || "#DF7E3C";

    return (
        <section
            className="min-h-screen bg-base-100"
            dir={isRTL ? "rtl" : "ltr"}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* ================= HERO ================= */}
                <header className="max-w-3xl mx-auto text-center mb-20">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
                        {data.shortTitle}
                    </h1>
                    <p className="text-base-content/60 text-base">
                        {data.longTitle}
                    </p>
                </header>

                {/* ================= CONTENT GRID ================= */}
                <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-start ${
                        isRTL ? "lg:[direction:rtl]" : ""
                    }`}
                >
                    {/* IMAGE COLUMN */}
                    <div className="w-full">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-neutral-200">
                            <img
                                src={mainImage}
                                onError={(e) => {
                                    e.currentTarget.src = "/couvertureIMG.jpg";
                                }}
                                alt={data.longTitle}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* TEXT COLUMN */}
                    <div
                        className={`max-w-xl ${
                            isRTL ? "text-right mr-auto" : "text-left ml-auto"
                        }`}
                    >
                        <h2 className="text-2xl font-bold mb-6">
                            {data.longTitle}
                        </h2>

                        <p className="leading-relaxed text-base-content/90 mb-8 whitespace-pre-line">
                            {data.intro}
                        </p>

                        {data.specsHtml && (
                            <div className="mb-10">
                                <h3 className="text-sm font-semibold uppercase tracking-wide mb-3 text-base-content/70">
                                    {lang === "fr"
                                        ? "Fiche technique"
                                        : lang === "ar"
                                        ? "البيانات الفنية"
                                        : "Technical sheet"}
                                </h3>

                                <div className="bg-base-200 rounded-xl p-5 text-sm leading-relaxed">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: data.specsHtml,
                                        }}
                                    />
                                </div>
                            </div>
                        )}

                        <p className="text-base-content/80">
                            {lang === "fr"
                                ? "Pour toute demande technique ou commerciale, contactez notre service commercial."
                                : lang === "ar"
                                ? "لأي استفسار فني أو تجاري، يرجى التواصل مع قسم المبيعات."
                                : "For technical or commercial inquiries, please contact our sales team."}
                        </p>
                    </div>
                </div>

                {/* {bandImageTableau && (
                    <div
                        className="mt-28 rounded-2xl py-14 px-6 flex justify-center"
                        style={{ backgroundColor: bandColor }}
                    >
                        <img
                            src={bandImageTableau}
                            alt={data.longTitle}
                            className="max-h-72 object-contain"
                        />
                    </div>
                )} */}
            </div>
        </section>
    );
}
