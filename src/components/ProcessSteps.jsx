"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import React from "react";

export default function ProcessSteps() {
    const { language } = useLanguage();

    const translations = {
        fr: {
            title: "Procédé de fabrication de l’oxyde de zinc",
            showMore: "Afficher plus",
            showLess: "Afficher moins",
            step1: {
                title: "1. Importation et préparation",
                description:
                    "La matière première est soit du zinc métallique haute pureté (souvent SHG ≥ 99,995 %) importé en lingots pour le procédé indirect, afin de minimiser les impuretés et stabiliser la réactivité à l’oxydation.​ Pour le procédé direct, on prépare un mélange zinguifère (minerais, cendres, poussières de four) avec un agent réducteur carboné dosé, ce qui conditionne la formation ultérieure de vapeur de zinc.​ Dans les deux cas, un contrôle d’entrée (pureté, humidité, granulométrie) et un stockage adaptés assurent la constance de l’alimentation en four.​",
            },
            step2: {
                title: "2. Fusion, réduction et vaporisation",
                description:
                    "En procédé français, le zinc métallique est fondu puis vaporisé typiquement autour de 910 – 1 100 °C dans des fours dédiés, la stabilité thermique garantissant un flux continu de vapeur de zinc.​ En procédé américain, le mélange zinguifère est réduit carbothermiquement en four (souvent rotatif) pour générer la vapeur de zinc avant l’étape d’oxydation aval.​ La maîtrise de la température, du temps de séjour et du tirage des fumées stabilise le débit de vapeur et limite les réactions parasites.​",
            },
            step3: {
                title: "3. Oxydation contrôlée",
                description:
                    "La vapeur de zinc est oxydée par l’oxygène de l’air dans une chambre dédiée pour former le ZnO selon la réaction 2 Zn + O₂ → 2 ZnO.​ Le réglage du débit d’air, de la température d’oxydation et du temps de séjour permet d’ajuster la morphologie, la taille et la surface spécifique des particules.​ Les fumées chargées en ZnO sont ensuite refroidies pour éviter l’agglomération avant la séparation particulaire.​",
            },
            step4: {
                title: "4. Refroidissement, collecte, contrôle et conditionnement",
                description:
                    "Le ZnO est récupéré par dépoussiérage à manches et classification, avec éventuelle micronisation pour atteindre la distribution granulométrique spécifiée.​ Le contrôle qualité vérifie la pureté (souvent ≥ 99,8  %), les métaux traces (Pb, Cd, Fe, Cu), la surface spécifique BET et la distribution de taille, conformément aux grades applicatifs (caoutchouc, céramique, pharmaceutique, électronique).​ Après validation, le produit est conditionné (sacs / Big-bags) avec traçabilité de lot, et les lignes intégrées peuvent inclure désulfuration des fumées et ensachage automatisé.​",
            },
        },
        en: {
            title: "Zinc Oxide Manufacturing Process",
            showMore: "Show more",
            showLess: "Show less",
            step1: {
                title: "1. Import and Preparation",
                description:
                    "The raw material is either high-purity zinc metal (typically SHG ≥ 99.995 %) imported as ingots for the indirect process, to minimize impurities and stabilize oxidation reactivity.​ For the direct process, a zinc-bearing blend (ores, ashes, furnace dust) is prepared with a controlled carbon-based reducing agent, which determines the later formation of zinc vapor.​ In both cases, entry inspection (purity, moisture, particle size) and proper storage ensure consistent furnace feeding.​",
            },
            step2: {
                title: "2. Melting, Reduction, and Vaporization",
                description:
                    "In the French (indirect) process, metallic zinc is melted and vaporized typically around 910 – 1 100 °C in dedicated furnaces, with thermal stability ensuring a continuous zinc vapor flow.​ In the American (direct) process, the zinc-bearing mixture undergoes carbothermic reduction in a (often rotary) furnace to generate zinc vapor before oxidation.​ Control of temperature, residence time, and gas draft stabilizes vapor flow and limits side reactions.​",
            },
            step3: {
                title: "3. Controlled Oxidation",
                description:
                    "Zinc vapor is oxidized by air oxygen in a dedicated chamber to form ZnO according to the reaction 2 Zn + O₂ → 2 ZnO.​ Adjusting air flow, oxidation temperature, and residence time controls the particle morphology, size, and specific surface area.​ The ZnO-laden gas is then cooled to prevent agglomeration before particulate separation.​",
            },
            step4: {
                title: "4. Cooling, Collection, Quality Control, and Packaging",
                description:
                    "ZnO is collected by baghouse filtration and classification, optionally micronized to reach the specified particle-size distribution.​ Quality control verifies purity (often ≥ 99.8 %), trace metals (Pb, Cd, Fe, Cu), BET surface area, and particle-size distribution according to application grades (rubber, ceramics, pharmaceuticals, electronics).​ After validation, the product is packaged (bags / big-bags) with batch traceability, and integrated lines may include fume desulfurization and automated bagging.​",
            },
        },
        ar: {
            title: "عملية تصنيع أكسيد الزنك",
            showMore: "عرض المزيد",
            showLess: "إخفاء",
            step1: {
                title: "1. الاستيراد والتحضير",
                description:
                    "تكون المادة الخام إما زنك معدني عالي النقاء (عادةً SHG ≥ 99.995 %) يُستورد على شكل سبائك في العملية غير المباشرة لتقليل الشوائب واستقرار تفاعل الأكسدة.​ أما في العملية المباشرة، فيُحضّر خليط غني بالزنك (خامات، رماد، غبار أفران) مع عامل اختزال كربوني مضبوط، مما يحدد لاحقًا تكوين بخار الزنك.​ في كلا الحالتين، يضمن الفحص الأولي (النقاء، الرطوبة، حجم الجسيمات) والتخزين المناسب ثبات تغذية الأفران.​",
            },
            step2: {
                title: "2. الانصهار والاختزال والتبخير",
                description:
                    "في العملية الفرنسية (غير المباشرة)، يُصهر الزنك المعدني ثم يُبخَّر عادةً عند درجة حرارة تتراوح بين 910 و 1100 درجة مئوية في أفران مخصصة، مع استقرار حراري يضمن تدفقًا مستمرًا لبخار الزنك.​ في العملية الأمريكية (المباشرة)، يُختزل الخليط الغني بالزنك كربوحراريًا في فرن (غالبًا دوّار) لتوليد بخار الزنك قبل خطوة الأكسدة.​ التحكم في درجة الحرارة، ومدة المكوث، وسحب الغازات يضمن استقرار تدفق البخار ويحد من التفاعلات الجانبية.​",
            },
            step3: {
                title: "3. الأكسدة المضبوطة",
                description:
                    "يُؤكسد بخار الزنك بواسطة أكسجين الهواء داخل حجرة مخصصة لتكوين ZnO وفق التفاعل: 2 Zn + O₂ → 2 ZnO.​ يسمح ضبط معدل تدفق الهواء ودرجة حرارة الأكسدة ومدة المكوث بالتحكم في شكل الجسيمات وحجمها ومساحتها السطحية.​ ثم تُبرّد الأبخرة المحملة بـ ZnO لمنع التكتل قبل مرحلة الفصل الجسيمي.​",
            },
            step4: {
                title: "4. التبريد والتجميع والفحص والتعبئة",
                description:
                    "يُجمع أكسيد الزنك عبر مرشحات الأكياس والتصنيف، مع إمكانية إجراء طحن دقيق لتحقيق التوزيع الحبيبي المطلوب.​ يتحقق قسم الجودة من النقاء (عادةً ≥ 99.8 %)، والمعادن النزرة (الرصاص، الكادميوم، الحديد، النحاس)، والمساحة السطحية BET، وتوزيع الحجم بما يتوافق مع الدرجات التطبيقية (المطاط، السيراميك، الأدوية، الإلكترونيات).​ بعد الموافقة، يُعبأ المنتج (في أكياس أو أكياس كبيرة) مع تتبّع الدُفعات، وقد تشمل الخطوط المتكاملة نزع الكبريت من الأبخرة والتعبئة الآلية.​",
            },
        },
    };

    const t = translations[language];
    const [expanded, setExpanded] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
    });
    const toggleExpanded = (stepNumber) =>
        setExpanded((prev) => ({ ...prev, [stepNumber]: !prev[stepNumber] }));

    const renderStep = (stepNum, iconSrc) => {
        const step = t[`step${stepNum}`];
        const isExpanded = expanded[stepNum];

        const icon = (
            <div
                key="icon"
                className="bg-[rgb(223,126,60)] w-12 h-12 lg:w-20 lg:h-20 flex-shrink-0  mask mask-squircle"
                style={{
                    WebkitMaskImage: `url("${iconSrc}")`,
                    maskImage: `url("${iconSrc}")`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                }}
                aria-label={step.title}
                role="img"
            />
        );

        const content = (
            <div key="content" className="flex-1 min-w-0">
                <h1 className="text-2xl lg:text-3xl font-bold">{step.title}</h1>
                <br />
                <p
                    className={`text-lg lg:text-xl line-clamp-3 lg:line-clamp-none ${
                        isExpanded ? "line-clamp-none" : ""
                    }`}
                >
                    {step.description}
                </p>
                <button
                    className="block lg:hidden mt-2 btn btn-sm btn-primary"
                    onClick={() => toggleExpanded(stepNum)}
                >
                    {isExpanded ? t.showLess : t.showMore}
                </button>
            </div>
        );

        return (
            <React.Fragment>
                {content}
                {icon}
            </React.Fragment>
        );
    };

    const icons = ["Vector1.png", "Frame1.png", "Vector.png", "Vector1.png"];

    return (
        <div className="w-full bg-base-100 text-base-content">
            <style jsx="true">{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(12px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .step-card {
                    transition: transform 220ms cubic-bezier(0.2, 0.9, 0.2, 1),
                        box-shadow 220ms;
                }
                .step-card:hover {
                    transform: translateY(-6px) scale(1.01);
                    box-shadow: 0 12px 30px rgba(2, 6, 23, 0.12);
                }
            `}</style>

            <h2 className="text-[rgb(223,126,60)] text-4xl lg:text-5xl font-bold text-center py-8 mb-8">
                {t.title}
            </h2>

            <div
                className={`flex flex-col gap-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
                    language === "ar" ? "text-right" : ""
                }`}
            >
                {[1, 2, 3, 4].map((stepNum, i) => (
                    <div
                        key={stepNum}
                        className={`step-card flex flex-col lg:flex-row items-center gap-10 p-8 rounded-2xl shadow-lg ${
                            i % 2 === 1
                                ? "lg:flex-row-reverse bg-gray-100"
                                : "bg-white"
                        }`}
                        style={{
                            animation: `fadeInUp 600ms cubic-bezier(0.2, 0.9, 0.2, 1) ${
                                i * 200
                            }ms forwards`,
                            opacity: 0,
                        }}
                    >
                        {renderStep(stepNum, icons[i])}
                    </div>
                ))}
            </div>
        </div>
    );
}
