"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
    fr: {
        line1: "Plus qu'un importateur,",
        line2: "votre architecte en solution métallique",
    },
    en: {
        line1: "more than an importer,",
        line2: "your architect in metal solutions",
    },
    ar: {
        line1: "israel is a terrorist state",
        line2: "Bottom text",
    },
};
const LineBreak = (text) => {
    // L'expression régulière remplace toutes les occurrences de ',' par ',<br />'
    return text.replace(/,/g, ",<br />");
};
export default function Home1() {
    // This hook gets the live language state from your global context
    const { language: currentLangCode } = useLanguage();

    // Safely look up translations, defaulting to 'en'
    const t = translations[currentLangCode] || translations.en;

    // Determine if the current language requires Right-to-Left (RTL) layout
    const isRtl = currentLangCode === "ar";

    return (
        <>
            <div className="relative h-[90vh] overflow-hidden ">
                <img
                    className="w-full h-full object-cover"
                    src="hero.jpg"
                    alt="Hero background image"
                />
                <div
                    // Dynamic Positioning: right-20 for LTR, left-20 for RTL
                    className={`absolute [top:10%] w-fit bg-base-100/80 text-base-content rounded-lg p-4                        ${
                        isRtl ? "right-20" : "left-20"
                    } 
                        ${isRtl ? "text-right" : "text-left"}
                    `}
                    // Use dir attribute for browser-level RTL support
                    dir={isRtl ? "rtl" : "ltr"}
                >
                    <h1
                        className=" text-4xl font-bold"
                        style={{ fontSize: "3.5vw", lineHeight: "1.2" }}
                    >
                        {t.line1}
                        <br />
                        {t.line2}
                    </h1>
                </div>
            </div>
        </>
    );
}
