"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import React from "react"; // Ajout de l'import React pour Fragment

export default function ProcessSteps() {
    // NOTE: L'import de useLanguage est conservé comme demandé,
    // en supposant que le contexte de langue est disponible dans votre environnement.
    const { language } = useLanguage();

    const translations = {
        fr: {
            title: "Procédure de fabrication",
            showMore: "Afficher plus",
            showLess: "Afficher moins",
            step1: {
                title: "Réception et manutention des minerais",
                description:
                    "Le concentré de zinc (blende) (ZnS) est acheminé par bateau principalement d'Amérique latine (Pérou). Bientôt deux autres sources d'approvisionnements seront mise en place. Il s'agit du minerai d'El Abed et d'Oued Amizour. Les minerais sont déchargés et stockés dans des loges séparées. Le complexe reçoit annuellement plus de 70000 tonnes de minerais.",
            },
            step2: {
                title: "Grillage Acide",
                description:
                    "Pour produire du zinc le complexe d'ALZINC utilise comme matière première du Concentré du Zinc contenant en moyenne 54% à 60% de zinc, 32% de soufre, 6% de fer, 1% à 2% de plomb, 3% de SiO2 et une quinzaine d'autres éléments dont les teneurs sont inférieurs à 0,5%. Les opérations de traitement commencent par un grillage du concentré",
            },
            step3: {
                title: "Lixiviation",
                description:
                    "La calcine est mise en solution dans l'acide sulfurique, cette opération est appelée lixiviation. La réaction donne une solution de sulfate de zinc qui après purification alimentera les halles de l'électrolyse. La lixiviation s'opère en deux étapes : La lixiviation Neutre consiste",
            },
            step4: {
                title: "Purification",
                description:
                    "La solution de sulfate de zinc provenant de la lixiviation et encore impure et est purifiée en deux étapes successives. D'abord a lieu la cémentation du cuivre, ensuite celle du cobalt et de cadmium. Ces éléments sont précipités à l'état métallique par addition de poudre de zinc et l'antimoine.",
            },
        },
        en: {
            title: "Fabrication Process",
            showMore: "Show more",
            showLess: "Show less",
            step1: {
                title: "Reception and handling of ores",
                description:
                    "Zinc concentrate (sphalerite) (ZnS) is transported by ship mainly from Latin America (Peru). Soon two other supply sources will be put in place. These are the ores from El Abed and Oued Amizour. The ores are unloaded and stored in separate compartments. The complex receives more than 70,000 tons of ores annually.",
            },
            step2: {
                title: "Acid Roasting",
                description:
                    "To produce zinc, the ALZINC complex uses Zinc Concentrate as raw material containing on average 54% to 60% zinc, 32% sulfur, 6% iron, 1% to 2% lead, 3% SiO2 and about fifteen other elements whose contents are less than 0.5%. Processing operations begin with roasting the concentrate",
            },
            step3: {
                title: "Leaching",
                description:
                    "The calcine is dissolved in sulfuric acid, this operation is called leaching. The reaction produces a zinc sulfate solution which, after purification, will feed the electrolysis halls. Leaching operates in two stages: Neutral leaching consists",
            },
            step4: {
                title: "Purification",
                description:
                    "The zinc sulfate solution from leaching, still impure, is purified in two successive stages. First, copper cementation takes place, then that of cobalt and cadmium. These elements are precipitated in metallic state by addition of zinc powder and antimony.",
            },
        },
        ar: {
            title: "عملية التصنيع",
            showMore: "عرض المزيد",
            showLess: "إخفاء",
            step1: {
                title: "استقبال ومناولة الخامات",
                description:
                    "يُنقل مركز الزنك (السفاليريت) (ZnS) بالسفن بشكل أساسي من أمريكا اللاتينية (بيرو). قريبًا سيتم اعتماد مصدرين إضافيين للتوريد، وهما خامات العابد ووادي ميزور. تُفرغ الخامات وتُخزن في حجرات منفصلة. يستقبل المركب سنويًا أكثر من 70,000 طن من الخامات.",
            },
            step2: {
                title: "التحميص الحمضي",
                description:
                    "لإنتاج الزنك، يستخدم مركب ALZINC كمادة أولية مركز الزنك الذي يحتوي في المتوسط على 54% إلى 60% من الزنك، 32% كبريت، 6% حديد، 1% إلى 2% رصاص، 3% SiO2 وحوالي خمسة عشر عنصرًا آخر بنسب أقل من 0.5%. تبدأ عمليات المعالجة بتحميص المركز.",
            },
            step3: {
                title: "الاستخلاص (الترشيح)",
                description:
                    "تُذاب الكالسين في حمض الكبريت، وتسمى هذه العملية بالاستخلاص. تُنتج التفاعل محلول كبريتات الزنك الذي سيغذي بعد التنقية قاعات التحليل الكهربائي. يتم الاستخلاص على مرحلتين: يتضمن الاستخلاص المحايد...",
            },
            step4: {
                title: "التنقية",
                description:
                    "تُنقّى محلول كبريتات الزنك الناتج عن الاستخلاص —والذي لا يزال غير نقي— على مرحلتين متتاليتين. أولاً تتم إسمنتة النحاس، ثم الكوبالت والكادميوم. تُرسب هذه العناصر في الحالة المعدنية بإضافة مسحوق الزنك والأنتيمون.",
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

    const toggleExpanded = (stepNumber) => {
        setExpanded((prev) => ({
            ...prev,
            [stepNumber]: !prev[stepNumber],
        }));
    };

    const renderStep = (stepNum, iconSrc, ariaLabelKey) => {
        const step = t[`step${stepNum}`];
        const isExpanded = expanded[stepNum];
        // const isArabic = language === "ar"; // Not used directly, but kept for context

        const icon = (
            <div
                key="icon" // Ajout d'une clé pour éviter les avertissements React
                className="w-12 h-12 lg:w-20 lg:h-20 flex-shrink-0 bg-base-content mask mask-squircle"
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
                {" "}
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
            {/* INJECTION DU CSS FOURNI */}
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
                    /* Include base transition for smooth hover */
                    transition: transform 220ms cubic-bezier(0.2, 0.9, 0.2, 1),
                        box-shadow 220ms;
                }
                .step-card:hover {
                    /* Apply subtle lift effect on hover */
                    transform: translateY(-6px) scale(1.01);
                    box-shadow: 0 12px 30px rgba(2, 6, 23, 0.12);
                }
            `}</style>

            <h2
                className={`text-5xl lg:text-6xl font-bold text-center py-8 mb-8 `}
            >
                {t.title}
            </h2>
            <div
                // Ajout des classes pour centrer et ajouter du padding pour un meilleur affichage
                className={`flex flex-col gap-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
                    language === "ar" ? "text-right" : ""
                }`}
            >
                {[1, 2, 3, 4].map((stepNum, i) => (
                    <div
                        key={stepNum}
                        // Application des classes step-card (pour le hover) et shadow-lg
                        className={`step-card flex flex-col lg:flex-row items-center gap-10 p-8 rounded-2xl shadow-lg ${
                            i % 2 === 1
                                ? "lg:flex-row-reverse bg-gray-100"
                                : "bg-white"
                        }`}
                        style={{
                            // Application de l'animation fadeInUp avec un délai échelonné (staggered delay)
                            animation: `fadeInUp 600ms cubic-bezier(0.2, 0.9, 0.2, 1) ${
                                i * 200
                            }ms forwards`,
                            opacity: 0, // Commence invisible
                        }}
                    >
                        {renderStep(stepNum, icons[i], `step${stepNum}`)}
                    </div>
                ))}
            </div>
        </div>
    );
}
