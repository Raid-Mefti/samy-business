"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

const CONTENT = {
    fr: {
        title: "Oxyde de Zinc (ZnO)",
        text: "Chez Samy Business, l'oxyde de zinc incarne notre exigence industrielle. Sélectionné auprès de fournisseurs certifiés et conforme aux normes européennes, il répond aux besoins des secteurs les plus exigeants, de la transformation industrielle à la fabrication spécialisée.",
        points: [
            "Qualité industrielle certifiée",
            "Approvisionnement maîtrisé",
            "Normes européennes",
        ],
        cta: "Découvrir le produit",
    },
    en: {
        title: "Zinc Oxide (ZnO)",
        text: "At Samy Business, zinc oxide reflects our industrial standards. Carefully sourced from certified suppliers and compliant with European regulations, it is trusted by demanding industries ranging from processing to advanced manufacturing.",
        points: [
            "Certified industrial quality",
            "Controlled supply chain",
            "European standards",
        ],
        cta: "Discover the product",
    },
    ar: {
        title: "أكسيد الزنك (ZnO)",
        text: "في سامي بيزنس، يجسّد أكسيد الزنك معاييرنا الصناعية الصارمة. يتم اختياره من موردين معتمدين ووفق المعايير الأوروبية لتلبية متطلبات الصناعات الأكثر تطلبًا.",
        points: [
            "جودة صناعية معتمدة",
            "سلسلة توريد محكمة",
            "مطابقة للمعايير الأوروبية",
        ],
        cta: "اكتشاف المنتج",
    },
};

export default function ZincOxideIntro() {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const c = CONTENT[language] || CONTENT.fr;
    const isRTL = language === "ar";
    const isDark = theme === "dark";

    // Theme-based colors
    const gradientBlue =
        "linear-gradient(135deg, rgb(47, 134, 253) 0%, rgb(76, 242, 255) 100%)";
    const gradientBlueHover =
        "linear-gradient(135deg, rgb(60, 145, 255) 0%, rgb(90, 250, 255) 100%)";
    const darkBlue = "rgb(25,43,94)";

    // Backgrounds
    const backgroundColor = isDark
        ? "linear-gradient(135deg, rgb(12,18,30) 0%, rgb(18,26,44) 100%)"
        : "linear-gradient(135deg, rgb(240, 240, 240) 0%, rgb(245, 245, 245) 100%)";

    const cardBackground = isDark ? "rgba(255,255,255,0.05)" : "white";
    const elevatedCardBackground = isDark ? "rgba(255,255,255,0.08)" : "white";

    // Text colors
    const textPrimary = isDark ? "rgb(240,240,240)" : "rgb(25, 43, 94)";
    const textSecondary = isDark ? "rgb(180,180,180)" : "rgb(25, 43, 94)";

    // Borders & dividers
    const borderColor = isDark ? "rgba(255,255,255,0.1)" : "rgb(180, 180, 180)";
    const accentBorder = isDark
        ? "rgba(76,242,255,0.3)"
        : "rgba(255,255,255,0.3)";

    return (
        <section
            dir={isRTL ? "rtl" : "ltr"}
            style={{ background: backgroundColor }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Visual - Mobile: first, Desktop: first (LTR) or second (RTL) */}
                <div
                    className={`order-1 ${
                        isRTL ? "md:order-2" : "md:order-1"
                    } relative h-64 sm:h-80 md:h-[32rem] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl`}
                    style={{
                        backgroundColor: isDark
                            ? "rgba(0,0,0,0.2)"
                            : "rgb(240, 240, 240)",
                        border: `1px solid ${borderColor}`,
                        boxShadow: isDark
                            ? "0 20px 60px rgba(0,0,0,0.3)"
                            : "0 20px 60px rgba(0,0,0,0.08)",
                    }}
                >
                    <img
                        src="/finals/oxyde_de_zinc2.png"
                        alt="Oxyde de zinc industriel de haute qualité"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                    {/* Dark mode overlay effect */}
                    {isDark && (
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(25,43,94,0.3)] to-transparent" />
                    )}
                </div>

                {/* Content - Mobile: second, Desktop: second (LTR) or first (RTL) */}
                <div
                    className={`order-2 ${
                        isRTL ? "md:order-1" : "md:order-2"
                    } space-y-6 md:space-y-8 ${
                        isRTL ? "text-right" : "text-left"
                    }`}
                >
                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl font-bold md:font-extrabold tracking-tight"
                        style={{ color: textPrimary }}
                    >
                        {c.title}
                    </h2>

                    <p
                        className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-relaxed font-light"
                        style={{ color: textSecondary }}
                    >
                        {c.text}
                    </p>

                    {/* Points grid - responsive layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                        {c.points.map((p) => (
                            <div
                                key={p}
                                className="
                                    rounded-xl md:rounded-xl
                                    px-4 py-3 sm:px-5 sm:py-4
                                    text-xs sm:text-sm font-semibold
                                    text-center
                                    transition-all duration-300
                                    hover:shadow-md
                                    hover:-translate-y-0.5
                                    active:scale-95
                                "
                                style={{
                                    backgroundColor: cardBackground,
                                    border: `1px solid ${borderColor}`,
                                    color: textPrimary,
                                    boxShadow: isDark
                                        ? "0 4px 12px rgba(0,0,0,0.2)"
                                        : "0 4px 12px rgba(0,0,0,0.05)",
                                }}
                            >
                                {p}
                            </div>
                        ))}
                    </div>

                    {/* Button with gradient blue */}
                    <div
                        className={`flex ${
                            isRTL
                                ? "justify-end md:justify-start"
                                : "justify-start"
                        } md:justify-start`}
                    >
                        <Link
                            href="/zinc-oxyde"
                            className="group inline-flex items-center justify-center
                                rounded-full
                                px-6 py-3 sm:px-8 sm:py-3
                                font-semibold text-white text-sm sm:text-base
                                transition-all duration-300
                                hover:scale-105
                                active:scale-95
                                w-full sm:w-auto
                                text-center"
                            style={{
                                background: gradientBlue,
                                border: `1px solid ${accentBorder}`,
                                boxShadow: isDark
                                    ? "0 10px 25px -5px rgba(76, 242, 255, 0.15)"
                                    : "0 10px 25px -5px rgba(47, 134, 253, 0.15)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background =
                                    gradientBlueHover;
                                e.currentTarget.style.boxShadow = isDark
                                    ? "0 20px 40px -10px rgba(76, 242, 255, 0.25)"
                                    : "0 20px 40px -10px rgba(47, 134, 253, 0.25)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = gradientBlue;
                                e.currentTarget.style.boxShadow = isDark
                                    ? "0 10px 25px -5px rgba(76, 242, 255, 0.15)"
                                    : "0 10px 25px -5px rgba(47, 134, 253, 0.15)";
                            }}
                        >
                            {c.cta}
                            <svg
                                className={`w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform ${
                                    isRTL ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
