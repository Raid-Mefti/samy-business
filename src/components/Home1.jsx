"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
    fr: {
        line: "Plus qu'un importateur, votre architecte en solution métallique",
    },
    en: {
        line: "more than an importer, your architect in metal solutions",
        line2: "beyond importing, your architect in metal solutions",
    },
    ar: {
        line: "yedik fih hbibi",
    },
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
            <div className="relative h-[90vh] overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
                <img
                    className="w-full h-full object-cover"
                    src="hero.jpg"
                    alt="Hero background image"
                />
                <div
                    // Dynamic Positioning: right-20 for LTR, left-20 for RTL
                    className={`absolute bottom-40 w-fit bg-base-100/80 text-base-content rounded-lg p-4 
                        ${isRtl ? "left-20" : "right-20"} 
                        ${isRtl ? "text-right" : "text-left"}
                    `}
                    // Use dir attribute for browser-level RTL support
                    dir={isRtl ? "rtl" : "ltr"}
                >
                    <h1 className=" text-4xl font-bold">{t.line}</h1>
                    {t.line2 ? (
                        <>
                            <h1 className="text-4xl font-bold">{t.line2}</h1>
                        </>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
}
