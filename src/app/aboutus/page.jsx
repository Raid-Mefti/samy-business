"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
    const { language: rawLanguage } = useLanguage();
    const { theme } = useTheme();
    const lang = rawLanguage ? rawLanguage.split("-")[0] : "fr";
    const isRtl = lang === "ar";

    // Define color schemes for light and dark modes with lighter dark theme
    const colorSchemes = {
        light: {
            background: "#ffffff",
            cardBackground: "#f8f9fa",
            textPrimary: "#1a1a1a",
            textSecondary: "#666666",
            gradientStart: "#2f86fd", // rgb(47, 134, 253)
            gradientEnd: "#4cf2ff", // rgb(76, 242, 255)
            primary: "#2f86fd",
            blue: "#192b5e", // rgb(25, 43, 94)
            white: "#ffffff",
            lightGray: "#f5f5f5",
            mediumGray: "#b4b4b4", // rgb(180, 180, 180)
            border: "#e0e0e0",
            orange: "#DF7E3C",
            navyBlue: "#4E6BA4",
            darkBlue: "#38367F",
        },
        dark: {
            background: "#0c121e", // Fallback solid color
            backgroundGradient:
                "linear-gradient(135deg, #0c121e 0%, #121a2c 100%)",
            cardBackground: "rgba(255, 255, 255, 0.05)",
            elevatedCardBackground: "rgba(255, 255, 255, 0.08)",
            textPrimary: "#f0f0f0",
            textSecondary: "#b4b4b4",
            gradientStart: "#4cf2ff",
            gradientEnd: "#2f86fd",
            primary: "#4cf2ff",
            blue: "#f0f0f0",
            white: "rgba(255, 255, 255, 0.05)",
            lightGray: "rgba(255, 255, 255, 0.03)",
            mediumGray: "rgba(180, 180, 180, 0.7)",
            border: "rgba(255, 255, 255, 0.1)",
            accentBorder: "rgba(76, 242, 255, 0.3)",
            orange: "#DF7E3C",
            navyBlue: "#4E6BA4",
            darkBlue: "#38367F",
        },
    };

    // Set currentColors based on theme
    const currentColors = colorSchemes[theme] || colorSchemes.light;
    const isDark = theme === "dark";

    // Gradient definitions
    const gradientBlue = "linear-gradient(135deg, #2f86fd 0%, #4cf2ff 100%)";
    const gradientBlueHover =
        "linear-gradient(135deg, #3c91ff 0%, #5afaff 100%)";

    // Background gradients for sections
    const getBackgroundStyle = (section) => {
        if (!isDark) {
            switch (section) {
                case "values":
                    return {
                        background: `linear-gradient(135deg, ${colorSchemes.light.cardBackground} 0%, ${colorSchemes.light.lightGray} 100%)`,
                    };
                case "cta":
                    return {
                        background: `linear-gradient(135deg, ${colorSchemes.light.cardBackground} 0%, ${colorSchemes.light.lightGray} 100%)`,
                    };
                default:
                    return { backgroundColor: colorSchemes.light.background };
            }
        }

        switch (section) {
            case "values":
                return { background: colorSchemes.dark.backgroundGradient };
            case "cta":
                return { background: colorSchemes.dark.backgroundGradient };
            default:
                return { backgroundColor: colorSchemes.dark.background };
        }
    };

    const t = translations[lang] || translations.fr;

    return (
        <>
            <Header />

            <main
                className="min-h-screen transition-colors duration-300"
                dir={isRtl ? "rtl" : "ltr"}
                style={{
                    backgroundColor: isDark
                        ? currentColors.background
                        : currentColors.background,
                    color: currentColors.textPrimary,
                }}
            >
                {/* HERO SECTION */}
                <section className="relative overflow-hidden py-20 md:py-32">
                    <div className="absolute inset-0">
                        <div
                            className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage: `radial-gradient(${
                                    isRtl ? "circle at left" : "circle at right"
                                } 30%, ${
                                    currentColors.gradientEnd
                                } 2px, transparent 2px)`,
                                backgroundSize: "60px 60px",
                            }}
                        ></div>
                    </div>

                    <div className="max-w-6xl mx-auto px-6 relative z-10">
                        <div className="mb-8">
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                                style={{
                                    backgroundColor: isDark
                                        ? "rgba(76, 242, 255, 0.15)"
                                        : "rgba(76, 242, 255, 0.1)",
                                    color: currentColors.gradientStart,
                                    border: `1px solid ${
                                        isDark
                                            ? "rgba(76, 242, 255, 0.3)"
                                            : "rgba(76, 242, 255, 0.3)"
                                    }`,
                                }}
                            >
                                <div
                                    className="w-2 h-2 rounded-full animate-pulse"
                                    style={{
                                        backgroundColor:
                                            currentColors.gradientStart,
                                    }}
                                ></div>
                                {lang === "fr"
                                    ? "Notre Histoire"
                                    : lang === "ar"
                                      ? "تاريخنا"
                                      : "Our Story"}
                            </div>

                            <h1
                                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                                style={{ color: currentColors.blue }}
                            >
                                {t.about.title}
                            </h1>

                            <p
                                className="text-lg md:text-xl leading-relaxed max-w-4xl opacity-90"
                                style={{ color: currentColors.textPrimary }}
                            >
                                {t.about.description}
                            </p>
                        </div>

                        {/* Company Stats - UPDATED: 21 collaborators instead of 15 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            {[
                                {
                                    value: "2007",
                                    label:
                                        lang === "fr"
                                            ? "Année de Création"
                                            : lang === "ar"
                                              ? "سنة التأسيس"
                                              : "Year Founded",
                                },
                                {
                                    value: "21", // CHANGED: 21 instead of 15
                                    label:
                                        lang === "fr"
                                            ? "Collaborateurs"
                                            : lang === "ar"
                                              ? "متعاونين"
                                              : "Collaborators",
                                },
                                {
                                    value: "100+",
                                    label:
                                        lang === "fr"
                                            ? "Clients Industriels"
                                            : lang === "ar"
                                              ? "عملاء صناعيين"
                                              : "Industrial Clients",
                                },
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="text-center p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
                                    style={{
                                        backgroundColor: isDark
                                            ? "rgba(25, 43, 94, 0.1)"
                                            : "rgba(25, 43, 94, 0.05)",
                                        border: `1px solid ${
                                            isDark
                                                ? "rgba(25, 43, 94, 0.3)"
                                                : "rgba(25, 43, 94, 0.2)"
                                        }`,
                                        boxShadow: isDark
                                            ? "0 8px 32px rgba(0, 0, 0, 0.2)"
                                            : "0 4px 20px rgba(0, 0, 0, 0.05)",
                                    }}
                                >
                                    <div
                                        className="text-3xl md:text-4xl font-bold mb-2"
                                        style={{
                                            color: currentColors.gradientStart,
                                        }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div
                                        className="text-sm"
                                        style={{
                                            color: currentColors.mediumGray,
                                        }}
                                    >
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SERVICES SECTION - UPDATED: Changed service descriptions */}
                <section className="py-20 md:py-32">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2
                                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                                style={{ color: currentColors.blue }}
                            >
                                {t.services.title}
                            </h2>
                            <p
                                className="text-lg max-w-3xl mx-auto"
                                style={{ color: currentColors.mediumGray }}
                            >
                                {lang === "fr"
                                    ? "Une expertise métallurgique complète au service de l'industrie algérienne"
                                    : lang === "ar"
                                      ? "خبرة معدنية شاملة في خدمة الصناعة الجزائرية"
                                      : "Complete metallurgical expertise for Algerian industry"}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {t.services.items.map((s, i) => (
                                <div
                                    key={i}
                                    className="group rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl"
                                    style={{
                                        backgroundColor: isDark
                                            ? currentColors.cardBackground
                                            : currentColors.cardBackground,
                                        border: `1px solid ${currentColors.border}`,
                                        boxShadow: isDark
                                            ? "0 20px 60px rgba(0, 0, 0, 0.3)"
                                            : "0 8px 32px rgba(0, 0, 0, 0.08)",
                                    }}
                                >
                                    <div className="mb-6">
                                        <div
                                            className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                                            style={{
                                                background: gradientBlue,
                                            }}
                                        >
                                            <span className="text-2xl">
                                                {i === 0 && "🌍"}
                                                {i === 1 && "⚙️"}
                                                {i === 2 && "💡"}
                                            </span>
                                        </div>
                                        <h3
                                            className="text-xl font-bold mb-3"
                                            style={{
                                                color: currentColors.darkBlue,
                                            }}
                                        >
                                            {s.name}
                                        </h3>
                                    </div>
                                    <p
                                        className="leading-relaxed whitespace-pre-line"
                                        style={{
                                            color: currentColors.textSecondary,
                                        }}
                                    >
                                        {s.desc}
                                    </p>

                                    {/* Service Features - UPDATED with new features */}
                                    <div
                                        className="mt-8 pt-6 border-t"
                                        style={{
                                            borderColor: currentColors.border,
                                        }}
                                    >
                                        <ul className="space-y-2">
                                            {getServiceFeatures(
                                                s.name,
                                                lang
                                            ).map((feature, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-center gap-2"
                                                >
                                                    <div
                                                        className="p-1 rounded-full"
                                                        style={{
                                                            backgroundColor:
                                                                isDark
                                                                    ? "rgba(76, 242, 255, 0.15)"
                                                                    : "rgba(76, 242, 255, 0.1)",
                                                        }}
                                                    >
                                                        <svg
                                                            className="w-3 h-3"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            style={{
                                                                color: currentColors.gradientStart,
                                                            }}
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <span
                                                        className="text-sm"
                                                        style={{
                                                            color: currentColors.textPrimary,
                                                        }}
                                                    >
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* VALUES SECTION - UPDATED: Changed values descriptions */}
                <section
                    className="py-20 md:py-32"
                    style={getBackgroundStyle("values")}
                >
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2
                                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                                style={{ color: currentColors.blue }}
                            >
                                {lang === "fr"
                                    ? "Nos Engagements"
                                    : lang === "ar"
                                      ? "التزاماتنا"
                                      : "Our Commitments"}
                            </h2>
                            <p
                                className="text-lg max-w-3xl mx-auto"
                                style={{ color: currentColors.mediumGray }}
                            >
                                {lang === "fr"
                                    ? "Nos standards de qualité et d'excellence"
                                    : lang === "ar"
                                      ? "معاييرنا للجودة والتميز"
                                      : "Our standards of quality and excellence"}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {getValues(lang).map((value, index) => (
                                <div
                                    key={index}
                                    className="text-center p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                                    style={{
                                        backgroundColor: isDark
                                            ? "rgba(255, 255, 255, 0.05)"
                                            : currentColors.background,
                                        border: `1px solid ${currentColors.border}`,
                                        boxShadow: isDark
                                            ? "0 8px 32px rgba(0, 0, 0, 0.2)"
                                            : "0 4px 20px rgba(0, 0, 0, 0.05)",
                                    }}
                                >
                                    <div
                                        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                        style={{
                                            background: gradientBlue,
                                        }}
                                    >
                                        <span className="text-2xl">
                                            {value.icon}
                                        </span>
                                    </div>
                                    <h3
                                        className="font-bold text-lg mb-2"
                                        style={{
                                            color: currentColors.textPrimary,
                                        }}
                                    >
                                        {value.title}
                                    </h3>
                                    <p
                                        className="text-sm"
                                        style={{
                                            color: currentColors.textSecondary,
                                        }}
                                    >
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section
                    className="py-20 md:py-32"
                    style={getBackgroundStyle("cta")}
                >
                    <div className="max-w-6xl mx-auto px-6">
                        <div
                            className="rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
                            style={{
                                backgroundColor: isDark
                                    ? "rgba(255, 255, 255, 0.05)"
                                    : currentColors.white,
                                border: `1px solid ${currentColors.border}`,
                                boxShadow: isDark
                                    ? "0 20px 60px rgba(0, 0, 0, 0.3)"
                                    : "0 20px 60px rgba(0, 0, 0, 0.08)",
                            }}
                        >
                            <div
                                className="absolute top-0 left-0 w-32 h-32 rounded-full -translate-x-1/2 -translate-y-1/2"
                                style={{
                                    backgroundColor: isDark
                                        ? "rgba(76, 242, 255, 0.15)"
                                        : "rgba(76, 242, 255, 0.1)",
                                }}
                            ></div>
                            <div
                                className="absolute bottom-0 right-0 w-48 h-48 rounded-full translate-x-1/3 translate-y-1/3"
                                style={{
                                    backgroundColor: isDark
                                        ? "rgba(47, 134, 253, 0.15)"
                                        : "rgba(47, 134, 253, 0.1)",
                                }}
                            ></div>

                            <div className="relative">
                                <h2
                                    className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                                    style={{ color: currentColors.blue }}
                                >
                                    {lang === "fr"
                                        ? "Prêt à collaborer ?"
                                        : lang === "ar"
                                          ? "مستعد للتعاون؟"
                                          : "Ready to collaborate?"}
                                </h2>

                                <p
                                    className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
                                    style={{ color: currentColors.mediumGray }}
                                >
                                    {lang === "fr"
                                        ? "Notre équipe d'experts est disponible pour analyser vos besoins et vous proposer la solution métallurgique optimale."
                                        : lang === "ar"
                                          ? "فريق خبرائنا متاح لتحليل احتياجاتك واقتراح الحل المعدني الأمثل."
                                          : "Our team of experts is available to analyze your needs and propose the optimal metallurgical solution."}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        href="/contact"
                                        className="group inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 font-bold text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-base md:text-lg"
                                        style={{
                                            background: gradientBlue,
                                            border: `1px solid ${
                                                isDark
                                                    ? currentColors.accentBorder
                                                    : "rgba(255, 255, 255, 0.3)"
                                            }`,
                                            boxShadow: isDark
                                                ? "0 10px 25px -5px rgba(76, 242, 255, 0.15)"
                                                : "0 10px 25px -5px rgba(47, 134, 253, 0.15)",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background =
                                                gradientBlueHover;
                                            e.currentTarget.style.boxShadow =
                                                isDark
                                                    ? "0 20px 40px -10px rgba(76, 242, 255, 0.25)"
                                                    : "0 20px 40px -10px rgba(47, 134, 253, 0.25)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background =
                                                gradientBlue;
                                            e.currentTarget.style.boxShadow =
                                                isDark
                                                    ? "0 10px 25px -5px rgba(76, 242, 255, 0.15)"
                                                    : "0 10px 25px -5px rgba(47, 134, 253, 0.15)";
                                        }}
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                            />
                                        </svg>
                                        {lang === "fr"
                                            ? "Contactez-nous"
                                            : lang === "ar"
                                              ? "اتصل بنا"
                                              : "Contact Us"}
                                    </a>

                                    <a
                                        href="/products"
                                        className="group inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 font-bold transition-all duration-300 text-base md:text-lg"
                                        style={{
                                            border: `2px solid ${currentColors.gradientStart}`,
                                            color: currentColors.gradientStart,
                                            backgroundColor: isDark
                                                ? "rgba(47, 134, 253, 0.1)"
                                                : "rgba(47, 134, 253, 0.05)",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor =
                                                isDark
                                                    ? "rgba(47, 134, 253, 0.2)"
                                                    : "rgba(47, 134, 253, 0.1)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor =
                                                isDark
                                                    ? "rgba(47, 134, 253, 0.1)"
                                                    : "rgba(47, 134, 253, 0.05)";
                                        }}
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                            />
                                        </svg>
                                        {lang === "fr"
                                            ? "Voir nos produits"
                                            : lang === "ar"
                                              ? "عرض منتجاتنا"
                                              : "View our products"}
                                    </a>
                                </div>

                                <div
                                    className="mt-10 pt-8 border-t"
                                    style={{
                                        borderColor: currentColors.border,
                                    }}
                                >
                                    <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-10">
                                        {[
                                            {
                                                title:
                                                    lang === "fr"
                                                        ? "Réponse sous 24h"
                                                        : lang === "ar"
                                                          ? "الرد خلال 24 ساعة"
                                                          : "Response within 24h",
                                                icon: "⏱️",
                                            },
                                            {
                                                title:
                                                    lang === "fr"
                                                        ? "Analyse technique gratuite"
                                                        : lang === "ar"
                                                          ? "تحليل فني مجاني"
                                                          : "Free technical analysis",
                                                icon: "🔬",
                                            },
                                            {
                                                title:
                                                    lang === "fr"
                                                        ? "Support permanent"
                                                        : lang === "ar"
                                                          ? "دعم دائم"
                                                          : "Permanent support",
                                                icon: "🤝",
                                            },
                                        ].map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-3"
                                            >
                                                <div
                                                    className="p-2 rounded-lg"
                                                    style={{
                                                        backgroundColor: isDark
                                                            ? "rgba(76, 242, 255, 0.15)"
                                                            : "rgba(76, 242, 255, 0.1)",
                                                    }}
                                                >
                                                    <span className="text-lg">
                                                        {item.icon}
                                                    </span>
                                                </div>
                                                <span
                                                    className="text-sm font-medium"
                                                    style={{
                                                        color: currentColors.mediumGray,
                                                    }}
                                                >
                                                    {item.title}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

// Helper function to get service features based on language - UPDATED
function getServiceFeatures(serviceName, lang) {
    const features = {
        "Import & Distribution": {
            fr: [
                "Sourcing international certifié",
                "Produits aux normes internationales",
                "Sélection rigoureuse des fournisseurs",
                "Contrôle qualité rigoureux",
            ],
            en: [
                "Certified international sourcing",
                "Products meeting international standards",
                "Rigorous supplier selection",
                "Comprehensive quality control",
            ],
            ar: [
                "تزويد دولي معتمد",
                "منتجات مطابقة للمعايير الدولية",
                "اختيار صارم للموردين",
                "مراقبة جودة شاملة",
            ],
        },
        "Transformation & ZnO": {
            fr: [
                "Expertise procédés industriels",
                "Analyse périodique des produits",
                "Logistique complète maîtrisée",
                "Support technique dédié",
            ],
            en: [
                "Industrial process expertise",
                "Periodic product analysis",
                "Complete logistics mastery",
                "Dedicated technical support",
            ],
            ar: [
                "خبرة في العمليات الصناعية",
                "تحليل دوري للمنتجات",
                "إتقان كامل للوجستيك",
                "دعم فني مخصص",
            ],
        },
        "Consulting Métallurgique": {
            fr: [
                "Partenariats européens reconnus",
                "Conformité normes internationales",
                "Optimisation coûts-délais",
                "Décisions stratégiques",
            ],
            en: [
                "Recognized European partnerships",
                "International standards compliance",
                "Cost-time optimization",
                "Strategic decision support",
            ],
            ar: [
                "شراكات أوروبية معترف بها",
                "مطابقة المعايير الدولية",
                "تحسين التكاليف والآجال",
                "دعم القرارات الاستراتيجية",
            ],
        },
    };

    // Find the matching service name
    const serviceKey = Object.keys(features).find(
        (key) =>
            key.toLowerCase() === serviceName.toLowerCase() ||
            (serviceName.includes("Import") && key.includes("Import")) ||
            (serviceName.includes("Transformation") &&
                key.includes("Transformation")) ||
            (serviceName.includes("Consulting") && key.includes("Consulting"))
    );

    return serviceKey
        ? features[serviceKey][lang] || features[serviceKey].fr
        : [];
}

// Helper function to get company values - UPDATED
function getValues(lang) {
    const values = {
        fr: [
            {
                title: "Normes Internationales",
                description:
                    "Produits certifiés conformes aux standards mondiaux",
                icon: "🏆",
            },
            {
                title: "Croissance Appréciable",
                description:
                    "Santé financière solide confirmant notre développement",
                icon: "📈",
            },
            {
                title: "Fiabilité",
                description: "Engagement sur la qualité et les délais",
                icon: "🤝",
            },
            {
                title: "Expertise Technique",
                description: "Maîtrise complète de la chaîne logistique",
                icon: "⚙️",
            },
        ],
        en: [
            {
                title: "International Standards",
                description: "Certified products meeting global standards",
                icon: "🏆",
            },
            {
                title: "Steady Growth",
                description:
                    "Strong financial health confirming our development",
                icon: "📈",
            },
            {
                title: "Reliability",
                description: "Commitment to quality and deadlines",
                icon: "🤝",
            },
            {
                title: "Technical Expertise",
                description: "Complete logistics chain mastery",
                icon: "⚙️",
            },
        ],
        ar: [
            {
                title: "المعايير الدولية",
                description: "منتجات معتمدة مطابقة للمعايير العالمية",
                icon: "🏆",
            },
            {
                title: "نمو ملحوظ",
                description: "صحة مالية قوية تؤكد تطورنا",
                icon: "📈",
            },
            {
                title: "الموثوقية",
                description: "التزام بالجودة والمواعيد النهائية",
                icon: "🤝",
            },
            {
                title: "الخبرة التقنية",
                description: "إتقان كامل لسلسلة التوريد",
                icon: "⚙️",
            },
        ],
    };

    return values[lang] || values.fr;
}

/* ---------------- TRANSLATIONS ---------------- */

const translations = {
    fr: {
        about: {
            title: "EURL Samy Business",
            description:
                "EURL Samy Business est une entreprise algérienne fondée en 2007 à Alger par son gérant unique, M. Rabah Bourrai.\n\nSpécialisée dans l'importation, se dirige vers la production, transformation et la commercialisation de produits sidérurgiques et divers métaux, en particulier l'Oxyde de Zinc, qui sont destinés principalement aux secteurs industriels.\n\nDepuis plusieurs années, Samy Business accompagne des acteurs industriels nationaux à travers une offre structurée, reposant sur la maîtrise des chaînes d'approvisionnement, la conformité aux normes selon le standard international. L'entreprise s'appuie sur une organisation interne solide et une équipe pluridisciplinaire couvrant la direction générale, l'administration, les finances, le commercial, la logistique et des moyens techniques.",
        },
        services: {
            title: "Notre Expertise",
            items: [
                {
                    name: "Import & Distribution",
                    color: "#38367F",
                    desc: "Maîtrise complète de la chaîne logistique.\nPartenariat avec des fournisseurs européens reconnus (Allemagne, Belgique, Espagne).",
                },
                {
                    name: "Transformation & ZnO",
                    color: "#38367F",
                    desc: "Production et transformation de l'Oxyde de Zinc pour divers secteurs industriels.\nAnalyse périodique des produits fabriqués.",
                },
                {
                    name: "Consulting Métallurgique",
                    color: "#38367F",
                    desc: "Expertise technique pour les décisions industrielles.\nConformité aux normes internationales et optimisation des coûts.",
                },
            ],
        },
    },

    en: {
        about: {
            title: "EURL Samy Business",
            description:
                "EURL Samy Business is an Algerian company founded in 2007 in Algiers by its sole manager, Mr. Rabah Bourrai.\n\nSpecializing in import, moving towards production, processing, and commercialization of steel products and various metals, particularly Zinc Oxide, primarily serving industrial sectors.\n\nFor several years, Samy Business has supported national industrial players through a structured offering based on supply chain mastery and compliance with international standards. The company relies on a solid internal organization and a multidisciplinary team covering general management, administration, finance, sales, logistics, and technical resources.",
        },
        services: {
            title: "Our Expertise",
            items: [
                {
                    name: "Import & Distribution",
                    color: "#38367F",
                    desc: "Complete logistics chain mastery.\nPartnerships with recognized European suppliers (Germany, Belgium, Spain).",
                },
                {
                    name: "Processing & ZnO",
                    color: "#38367F",
                    desc: "Production and processing of Zinc Oxide for various industrial sectors.\nPeriodic analysis of manufactured products.",
                },
                {
                    name: "Metallurgical Consulting",
                    color: "#38367F",
                    desc: "Technical expertise for industrial decisions.\nCompliance with international standards and cost optimization.",
                },
            ],
        },
    },

    ar: {
        about: {
            title: "شركة سامي بيزنس ذات المسؤولية المحدودة",
            description:
                "شركة سامي بيزنس ذات المسؤولية المحدودة هي شركة جزائرية تأسست سنة 2007 بالجزائر العاصمة على يد مسيرها الوحيد السيد رباح بوراي.\n\nمتخصصة في الاستيراد، تتجه نحو الإنتاج، التحويل وتسويق المنتجات الحديدية والمعادن المختلفة، خاصة أكسيد الزنك، الموجهة أساسًا للقطاعات الصناعية.\n\nمنذ عدة سنوات، ترافق سامي بيزنس الفاعلين الصناعيين الوطنيين من خلال عرض منظم يرتكز على التحكم في سلاسل التموين ومطابقة المعايير الدولية. تعتمد الشركة على تنظيم داخلي متين وفريق متعدد التخصصات يشمل الإدارة العامة، الإدارة، المالية، التجارة، اللوجستيك والوسائل التقنية.",
        },
        services: {
            title: "خبرتنا",
            items: [
                {
                    name: "الاستيراد والتوزيع",
                    color: "#38367F",
                    desc: "إتقان كامل لسلسلة التوريد.\nشراكات مع موردين أوروبيين معترف بهم (ألمانيا، بلجيكا، إسبانيا).",
                },
                {
                    name: "التحويل و ZnO",
                    color: "#38367F",
                    desc: "إنتاج وتحويل أكسيد الزنك لمختلف القطاعات الصناعية.\nتحليل دوري للمنتجات المصنعة.",
                },
                {
                    name: "الاستشارة المعدنية",
                    color: "#38367F",
                    desc: "خبرة تقنية لدعم القرارات الصناعية.\nمطابقة المعايير الدولية وتحسين التكاليف.",
                },
            ],
        },
    },
};
