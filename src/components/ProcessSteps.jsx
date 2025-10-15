"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function ProcessSteps() {
    const { language } = useLanguage();

    const translations = {
        fr: {
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

    return (
        <div
            className={`h-fit grid grid-cols-1 lg:grid-cols-2 grid-rows-2 text-base-content py-8 bg-base-100 ${
                language === "ar" ? "text-right" : ""
            }`}
        >
            <div className="p-8 lg:p-12 flex flex-col lg:flex-row justify-center items-center">
                <div
                    className={`mt-4 w-20 h-20 ${
                        language === "ar" ? "ml-8" : "mr-8"
                    } bg-base-content mask mask-squircle`}
                    style={{
                        WebkitMaskImage: 'url("Vector1.png")',
                        maskImage: 'url("Vector1.png")',
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                    }}
                    aria-label="Réception et manutention des minerais"
                    role="img"
                />
                <div>
                    <h1 className="text-3xl font-bold">{t.step1.title}</h1>
                    <br />
                    <p className="text-xl">{t.step1.description}</p>
                </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col lg:flex-row justify-center items-center">
                <div
                    className={`mt-4 w-20 h-20 ${
                        language === "ar" ? "ml-8" : "mr-8"
                    } bg-base-content mask mask-squircle`}
                    style={{
                        WebkitMaskImage: 'url("Frame1.png")',
                        maskImage: 'url("Frame1.png")',
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                    }}
                    aria-label="Grillage Acide"
                    role="img"
                />
                <div>
                    <h1 className="text-3xl font-bold">{t.step2.title}</h1>
                    <br />
                    <p className="text-xl">{t.step2.description}</p>
                </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col lg:flex-row justify-center items-center">
                <div
                    className={`mt-4 w-20 h-20 ${
                        language === "ar" ? "ml-8" : "mr-8"
                    } bg-base-content mask mask-squircle`}
                    style={{
                        WebkitMaskImage: 'url("Vector.png")',
                        maskImage: 'url("Vector.png")',
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                    }}
                    aria-label="Lixiviation"
                    role="img"
                />
                <div>
                    <h1 className="text-3xl font-bold">{t.step3.title}</h1>
                    <br />
                    <p className="text-xl">{t.step3.description}</p>
                </div>
            </div>

            <div className="p-8 lg:p-12 flex flex-col lg:flex-row justify-center items-center">
                <div
                    className={`mt-4 w-20 h-20 ${
                        language === "ar" ? "ml-8" : "mr-8"
                    } bg-base-content mask mask-squircle`}
                    style={{
                        WebkitMaskImage: 'url("Vector1.png")',
                        maskImage: 'url("Vector1.png")',
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                    }}
                    aria-label="Purification"
                    role="img"
                />
                <div>
                    <h1 className="text-3xl font-bold">{t.step4.title}</h1>
                    <br />
                    <p className="text-xl">{t.step4.description}</p>
                </div>
            </div>
        </div>
    );
}
