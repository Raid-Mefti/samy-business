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
                <div className="absolute w-full h-full bg-black opacity-30"></div>
                <img
                    className="w-full h-full object-cover"
                    src="hero.jpg"
                    alt="Hero background image"
                />
                {/* Subtle dark gradient overlay for contrast */}
                {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" /> */}{" "}
                <div
                    // Dynamic Positioning: right-20 for LTR, left-20 for RTL
                    className={`absolute [top:12%] max-w-[80ch] bg-base-100/70 text-base-content/90 backdrop-blur-sm rounded-2xl shadow-2xl ${
                        isRtl ? "right-8 sm:right-14" : "left-8 sm:left-14"
                    } 
                        ${isRtl ? "text-right" : "text-left"}
                    `}
                    // Use dir attribute for browser-level RTL support
                    dir={isRtl ? "rtl" : "ltr"}
                >
                    <h1
                        className="font-extrabold tracking-tight drop-shadow-sm bg-white/80 text-[rgb(238,128,56)] w-full rounded-t-2xl p-6"
                        style={{
                            fontSize: "min(9vw, 64px)",
                            lineHeight: 1.1,
                        }}
                    >
                        {t.line1}{" "}
                    </h1>
                    <h1
                        className="font-extrabold tracking-tight drop-shadow-sm bg-black/80 text-white w-full rounded-b-2xl p-6"
                        style={{
                            fontSize: "min(9vw, 64px)",
                            lineHeight: 1.1,
                        }}
                    >
                        {t.line2}
                    </h1>
                </div>
            </div>
        </>
    );
}
