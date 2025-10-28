"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
    fr: {
        line1: "L’utilisation du zinc",
        line2: "Applications et avantages industriels",
    },
    en: {
        line1: "The use of zinc",
        line2: "Applications and industrial advantages",
    },
    ar: {
        line1: "استخدام الزنك",
        line2: "التطبيقات والمزايا الصناعية",
    },
};

export default function StatisticsHero() {
    const { language: currentLangCode } = useLanguage();
    const t = translations[currentLangCode] || translations.en;
    const isRtl = currentLangCode === "ar";

    return (
        <div className="relative h-[90vh] overflow-hidden">
            {/* Background image */}
            <img
                className="w-full h-full object-cover opacity-50"
                src="/statistics.jpg"
                alt="Hero background image"
            />

            {/* Overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />

            {/* Text content */}
            <div
                className={`absolute bottom-4 sm:bottom-8 md:bottom-12 max-w-[80ch] ${
                    isRtl
                        ? "right-4 sm:right-8 md:right-14 text-right"
                        : "left-4 sm:left-8 md:left-14 text-left"
                }`}
                dir={isRtl ? "rtl" : "ltr"}
            >
                {/* Title */}
                <h1
                    className="font-extrabold tracking-tight drop-shadow-2xl text-[rgb(238,128,56)] w-full px-4 sm:px-6"
                    style={{
                        fontSize: "min(8vw, 56px)",
                        lineHeight: 1.1,
                    }}
                >
                    {t.line1}
                </h1>

                {/* Subtitle */}
                <h2
                    className="font-bold tracking-tight drop-shadow-2xl text-white w-full px-4 pb-4 sm:px-6 sm:pb-6"
                    style={{
                        fontSize: "min(6vw, 40px)",
                        lineHeight: 1.2,
                    }}
                >
                    {t.line2}
                </h2>
            </div>
        </div>
    );
}
