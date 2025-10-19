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
        line1: "أكثر من مجرد مستورد",
        line2: "مهندس حلولك المعدنية",
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
            <div className="relative h-[90vh] overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src="couvertureIMG.jpg"
                    alt="Hero background image"
                />
                {/* Subtle dark gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
                <div
                    // Dynamic Positioning: right-20 for LTR, left-20 for RTL
                    className={`absolute bottom-4 sm:bottom-8 md:bottom-12 max-w-[80ch] ${
                        isRtl ? "right-4 sm:right-8 md:right-14" : "left-4 sm:left-8 md:left-14"
                    } 
                        ${isRtl ? "text-right" : "text-left"}
                    `}
                    // Use dir attribute for browser-level RTL support
                    dir={isRtl ? "rtl" : "ltr"}
                >
                    <h1
                        className="font-extrabold tracking-tight drop-shadow-2xl text-[rgb(238,128,56)] w-full p-4 sm:p-6"
                        style={{
                            fontSize: "min(8vw, 56px)",
                            lineHeight: 1.1,
                        }}
                        dangerouslySetInnerHTML={{ __html: LineBreak(t.line1) }}
                    />
                    <h1
                        className="font-extrabold tracking-tight drop-shadow-2xl text-white w-full p-4 sm:p-6"
                        style={{
                            fontSize: "min(8vw, 56px)",
                            lineHeight: 1.1,
                        }}
                        dangerouslySetInnerHTML={{ __html: LineBreak(t.line2) }}
                    />
                </div>
            </div>
        </>
    );
}