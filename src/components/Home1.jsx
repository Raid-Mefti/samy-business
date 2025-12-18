"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
    fr: {
        line1: "Plus qu'un importateur,",
        line2: "votre architecte en solution métallique",
        subtitle: "Bureau d’affaires & consulting import-export",
    },
    en: {
        line1: "more than an importer,",
        line2: "your architect in metal solutions",
        subtitle: "Business office & import-export consulting",
    },
    ar: {
        line1: "أكثر من مجرد مستورد",
        line2: "مهندس حلولك المعدنية",
        subtitle: "مكتب أعمال واستشارات في الاستيراد والتصدير",
    },
};

const LineBreak = (text) => text.replace(/,/g, ",<br />");

export default function Home1() {
    const { language: currentLangCode } = useLanguage();
    const t = translations[currentLangCode] || translations.en;
    const isRtl = currentLangCode === "ar";

    return (
        <div className="relative h-[90vh] overflow-hidden">
            {/* Background image */}
            <img
                className="w-full h-full object-cover"
                src="/hero2.jpg"
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
                {/* Slogan Line 1 */}
                <h1
                    className="font-extrabold tracking-tight drop-shadow-2xl text-white w-full px-4 sm:px-6"
                    style={{
                        fontSize: "min(8vw, 56px)",
                        lineHeight: 1.1,
                    }}
                    dangerouslySetInnerHTML={{ __html: LineBreak(t.line1) }}
                />

                {/* Slogan Line 2 */}
                <h1
                    className="font-extrabold tracking-tight drop-shadow-2xl text-[rgb(238,128,56)] w-full px-4 pb-4 sm:px-6 sm:pb-6"
                    style={{
                        fontSize: "min(8vw, 56px)",
                        lineHeight: 1.1,
                    }}
                    dangerouslySetInnerHTML={{ __html: LineBreak(t.line2) }}
                />

                {/* Elegant subtitle */}
                <p
                    className="ml-4 sm:ml-6 text-gray-200/90 font-light italic tracking-wide mt-[-0.5rem]"
                    style={{
                        fontSize: "min(3.5vw, 22px)",
                        textShadow: "0 0 8px rgba(0,0,0,0.4)",
                        letterSpacing: "0.04em",
                    }}
                >
                    {t.subtitle}
                </p>
            </div>
        </div>
    );
}
