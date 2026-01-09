"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import Link from "next/link";

/* ======================================================
   PAGE
====================================================== */

export default function ZincOxidePage() {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const [activeTab, setActiveTab] = useState("specs");

    const t = TRANSLATIONS[language] || TRANSLATIONS.fr;

    const tabs = [
        { id: "specs", label: t.tabs.specs },
        { id: "manufacturing", label: t.tabs.manufacturing },
        { id: "applications", label: t.tabs.applications },
        { id: "market", label: t.tabs.market },
        { id: "company", label: t.tabs.company },
    ];

    // Theme-based color system
    const isDark = theme === "dark";

    // Primary colors
    const gradientBlue =
        "linear-gradient(135deg, rgb(47, 134, 253) 0%, rgb(76, 242, 255) 100%)";
    const gradientBlueHover =
        "linear-gradient(135deg, rgb(60, 145, 255) 0%, rgb(90, 250, 255) 100%)";
    const darkBlue = "rgb(25,43,94)";

    // Backgrounds
    const backgroundColor = isDark ? darkBlue : "rgb(255,255,255)";
    const cardBackground = isDark
        ? "rgba(255,255,255,0.05)"
        : "rgb(248,249,250)";
    const elevatedCardBackground = isDark
        ? "rgba(255,255,255,0.08)"
        : "rgb(255,255,255)";

    // Text colors
    const textPrimary = isDark ? "rgb(240,240,240)" : "rgb(25,43,94)";
    const textSecondary = isDark ? "rgb(180,180,180)" : "rgb(75,85,99)";
    const textTertiary = isDark ? "rgb(140,140,140)" : "rgb(107,114,128)";

    // Borders & dividers
    const borderColor = isDark ? "rgba(255,255,255,0.1)" : "rgb(229,231,235)";
    const accentBorder = isDark
        ? "rgba(76,242,255,0.3)"
        : "rgba(47,134,253,0.2)";

    // Interactive elements
    const buttonShadow = isDark
        ? "0 10px 25px -5px rgba(76, 242, 255, 0.15)"
        : "0 10px 25px -5px rgba(47, 134, 253, 0.15)";

    const buttonShadowHover = isDark
        ? "0 20px 40px -10px rgba(76, 242, 255, 0.25)"
        : "0 20px 40px -10px rgba(47, 134, 253, 0.25)";

    return (
        <>
            <Header />

            <main
                style={{
                    backgroundColor,
                    color: textPrimary,
                    minHeight: "100vh",
                }}
            >
                {/* Hero Section */}
                <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                    {/* Background decorative elements */}
                    {isDark && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[rgb(47,134,253,0.3)] to-transparent" />
                    )}

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Column - Content */}
                        <div className="space-y-10 relative z-10">
                            {/* Title with decorative underline */}
                            <div>
                                <h1
                                    className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
                                    style={{ color: textPrimary }}
                                >
                                    {t.pageTitle}
                                </h1>
                                <div className="flex items-center gap-6 mb-8">
                                    <div
                                        className="h-1 w-20 rounded-full"
                                        style={{ background: gradientBlue }}
                                    />
                                    <div
                                        className="h-px flex-1"
                                        style={{ backgroundColor: borderColor }}
                                    />
                                </div>
                                <p
                                    className="text-xl md:text-2xl leading-relaxed font-light"
                                    style={{ color: textSecondary }}
                                >
                                    {t.pageSubtitle}
                                </p>
                            </div>

                            {/* Company Info Cards */}
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    {
                                        icon: "calendar",
                                        value: t.companyInfo.year,
                                    },
                                    {
                                        icon: "users",
                                        value: t.companyInfo.employees,
                                    },
                                    {
                                        icon: "bank",
                                        value: t.companyInfo.capital,
                                    },
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="p-4 rounded-xl text-center transition-all duration-300 hover:scale-105"
                                        style={{
                                            backgroundColor: cardBackground,
                                            border: `1px solid ${borderColor}`,
                                            boxShadow: isDark
                                                ? "0 4px 12px rgba(0,0,0,0.2)"
                                                : "0 4px 12px rgba(0,0,0,0.05)",
                                        }}
                                    >
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3"
                                            style={{ background: gradientBlue }}
                                        >
                                            {item.icon === "calendar" && (
                                                <svg
                                                    className="w-5 h-5 text-white"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            )}
                                            {item.icon === "users" && (
                                                <svg
                                                    className="w-5 h-5 text-white"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                                </svg>
                                            )}
                                            {item.icon === "bank" && (
                                                <svg
                                                    className="w-5 h-5 text-white"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                                </svg>
                                            )}
                                        </div>
                                        <p
                                            className="font-semibold text-sm md:text-base"
                                            style={{ color: textPrimary }}
                                        >
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Key Points */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div
                                        className="w-3 h-6 rounded-r"
                                        style={{ background: gradientBlue }}
                                    />
                                    <h3
                                        className="text-xl font-semibold"
                                        style={{ color: textPrimary }}
                                    >
                                        {t.keyPoints.title}
                                    </h3>
                                </div>
                                <div className="grid gap-3">
                                    {t.keyPoints.items.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-4 p-3 rounded-lg transition-all duration-300 hover:pl-4"
                                            style={{
                                                backgroundColor: cardBackground,
                                                border: `1px solid ${borderColor}`,
                                            }}
                                        >
                                            <div
                                                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                                                style={{
                                                    background: gradientBlue,
                                                }}
                                            >
                                                <svg
                                                    className="w-3 h-3 text-white"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <p
                                                className="text-base"
                                                style={{ color: textSecondary }}
                                            >
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="pt-6">
                                <Link
                                    href="/devis"
                                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105"
                                    style={{
                                        background: gradientBlue,
                                        boxShadow: buttonShadow,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background =
                                            gradientBlueHover;
                                        e.currentTarget.style.boxShadow =
                                            buttonShadowHover;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background =
                                            gradientBlue;
                                        e.currentTarget.style.boxShadow =
                                            buttonShadow;
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
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                    {t.ctaButton}
                                    <svg
                                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
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

                        {/* Right Column - Product Showcase */}
                        <div className="relative">
                            {/* Floating card effect */}
                            <div
                                className="relative rounded-3xl p-8"
                                style={{
                                    backgroundColor: elevatedCardBackground,
                                    border: `1px solid ${borderColor}`,
                                    boxShadow: isDark
                                        ? "0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(76,242,255,0.1)"
                                        : "0 20px 60px rgba(0,0,0,0.08), 0 0 0 1px rgba(47,134,253,0.05)",
                                }}
                            >
                                {/* Glow effect */}
                                {isDark && (
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[rgb(47,134,253,0.2)] to-[rgb(76,242,255,0.2)] rounded-3xl blur-xl -z-10" />
                                )}

                                {/* Product Image */}
                                <div className="relative h-72 md:h-80 rounded-xl overflow-hidden mb-8 bg-gradient-to-br from-white to-gray-50">
                                    <Image
                                        src="/finals/oxyde_de_zinc2.png"
                                        alt="Zinc Oxide High Purity - Samy Business"
                                        fill
                                        className="object-contain p-6"
                                        priority
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>

                                {/* Product Info */}
                                <div className="text-center space-y-6">
                                    <div>
                                        <h3
                                            className="text-2xl font-bold mb-2"
                                            style={{ color: textPrimary }}
                                        >
                                            ZINC OXIDE
                                        </h3>
                                        <p
                                            className="text-sm uppercase tracking-wider font-medium"
                                            style={{ color: textSecondary }}
                                        >
                                            High Purity • Consistent Quality
                                        </p>
                                    </div>

                                    {/* Quality Badge */}
                                    <div
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border"
                                        style={{
                                            backgroundColor: isDark
                                                ? "rgba(76,242,255,0.1)"
                                                : "rgba(47,134,253,0.1)",
                                            borderColor: accentBorder,
                                            color: isDark
                                                ? "rgb(76,242,255)"
                                                : "rgb(47,134,253)",
                                        }}
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="font-bold text-sm">
                                            25 kg packaging
                                        </span>
                                    </div>

                                    {/* Quality Statement */}
                                    <p
                                        className="text-sm leading-relaxed px-4"
                                        style={{ color: textTertiary }}
                                    >
                                        {t.productInfo.norm}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tabs Navigation */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <div
                        className="flex flex-wrap justify-center gap-2 p-1 rounded-2xl"
                        style={{ backgroundColor: cardBackground }}
                    >
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                                    activeTab === tab.id
                                        ? "shadow-lg transform -translate-y-0.5"
                                        : "hover:opacity-80"
                                }`}
                                style={{
                                    background:
                                        activeTab === tab.id
                                            ? gradientBlue
                                            : "transparent",
                                    color:
                                        activeTab === tab.id
                                            ? "white"
                                            : textSecondary,
                                }}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Content Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                    <div
                        className="rounded-3xl p-6 sm:p-8 md:p-12"
                        style={{
                            backgroundColor: elevatedCardBackground,
                            border: `1px solid ${borderColor}`,
                            boxShadow: isDark
                                ? "0 20px 40px rgba(0,0,0,0.2)"
                                : "0 20px 40px rgba(0,0,0,0.05)",
                        }}
                    >
                        {activeTab === "specs" && (
                            <TechnicalSpecs
                                t={t.specs}
                                textPrimary={textPrimary}
                                textSecondary={textSecondary}
                                textTertiary={textTertiary}
                                borderColor={borderColor}
                                cardBackground={cardBackground}
                                gradientBlue={gradientBlue}
                            />
                        )}
                        {activeTab === "manufacturing" && (
                            <ManufacturingProcess
                                t={t.manufacturing}
                                textPrimary={textPrimary}
                                textSecondary={textSecondary}
                                textTertiary={textTertiary}
                                borderColor={borderColor}
                                cardBackground={cardBackground}
                                elevatedCardBackground={elevatedCardBackground}
                                gradientBlue={gradientBlue}
                                isDark={isDark}
                            />
                        )}
                        {activeTab === "applications" && (
                            <ApplicationsByIndustry
                                t={t.applications}
                                textPrimary={textPrimary}
                                textSecondary={textSecondary}
                                textTertiary={textTertiary}
                                borderColor={borderColor}
                                cardBackground={cardBackground}
                                elevatedCardBackground={elevatedCardBackground}
                                gradientBlue={gradientBlue}
                                isDark={isDark}
                            />
                        )}
                        {activeTab === "market" && (
                            <MarketAnalysis
                                t={t.market}
                                textPrimary={textPrimary}
                                textSecondary={textSecondary}
                                textTertiary={textTertiary}
                                borderColor={borderColor}
                                cardBackground={cardBackground}
                                elevatedCardBackground={elevatedCardBackground}
                                gradientBlue={gradientBlue}
                                gradientBlueHover={gradientBlueHover}
                                isDark={isDark}
                                buttonShadow={buttonShadow}
                                buttonShadowHover={buttonShadowHover}
                            />
                        )}
                        {activeTab === "company" && (
                            <CompanyProfile
                                t={t.company}
                                textPrimary={textPrimary}
                                textSecondary={textSecondary}
                                textTertiary={textTertiary}
                                borderColor={borderColor}
                                cardBackground={cardBackground}
                                elevatedCardBackground={elevatedCardBackground}
                                gradientBlue={gradientBlue}
                                isDark={isDark}
                            />
                        )}
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                    {/* Background decoration */}
                    {isDark && (
                        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(47,134,253,0.05)] to-[rgb(76,242,255,0.05)] rounded-3xl" />
                    )}

                    <div
                        className="relative text-center space-y-10 rounded-3xl border p-12 backdrop-blur-sm"
                        style={{
                            backgroundColor: isDark
                                ? "rgba(255,255,255,0.03)"
                                : "rgba(255,255,255,0.9)",
                            borderColor: accentBorder,
                            boxShadow: isDark
                                ? "0 20px 60px rgba(0,0,0,0.3)"
                                : "0 20px 60px rgba(0,0,0,0.08)",
                        }}
                    >
                        <div className="space-y-6">
                            <h3
                                className="text-3xl md:text-4xl font-bold"
                                style={{ color: textPrimary }}
                            >
                                {t.bottomCta.title}
                            </h3>
                            <p
                                className="text-xl max-w-2xl mx-auto leading-relaxed font-light"
                                style={{ color: textSecondary }}
                            >
                                {t.bottomCta.description}
                            </p>
                        </div>
                        <Link
                            href="/devis"
                            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
                            style={{
                                background: gradientBlue,
                                boxShadow: buttonShadow,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background =
                                    gradientBlueHover;
                                e.currentTarget.style.boxShadow =
                                    buttonShadowHover;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = gradientBlue;
                                e.currentTarget.style.boxShadow = buttonShadow;
                            }}
                        >
                            {t.bottomCta.button}
                            <svg
                                className="w-6 h-6 ml-2 transform group-hover:translate-x-2 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

/* ======================================================
   TECHNICAL SPECS COMPONENT
====================================================== */

function TechnicalSpecs({
    t,
    textPrimary,
    textSecondary,
    textTertiary,
    borderColor,
    cardBackground,
    gradientBlue,
}) {
    return (
        <section className="space-y-12">
            <header className="space-y-6">
                <div className="flex items-center gap-4">
                    <div
                        className="w-4 h-12 rounded-full"
                        style={{ background: gradientBlue }}
                    />
                    <div>
                        <h2
                            className="text-3xl md:text-4xl font-bold"
                            style={{ color: textPrimary }}
                        >
                            {t.title}
                        </h2>
                        <div
                            className="h-px w-20 mt-2"
                            style={{ background: gradientBlue }}
                        />
                    </div>
                </div>
                <p
                    className="text-xl max-w-3xl leading-relaxed"
                    style={{ color: textSecondary }}
                >
                    {t.description}
                </p>
            </header>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.properties.map((property, idx) => (
                    <div
                        key={property.label}
                        className="group relative p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                        style={{
                            backgroundColor: cardBackground,
                            border: `1px solid ${borderColor}`,
                            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                        }}
                    >
                        {/* Hover effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[rgb(47,134,253,0)] to-[rgb(76,242,255,0)] group-hover:from-[rgb(47,134,253,0.05)] group-hover:to-[rgb(76,242,255,0.05)] transition-all duration-300" />

                        <div className="relative">
                            <p
                                className="text-xs uppercase tracking-wider font-semibold mb-3"
                                style={{ color: textTertiary }}
                            >
                                {property.label}
                            </p>
                            <p
                                className="text-3xl font-bold mb-2"
                                style={{ color: textPrimary }}
                            >
                                {property.value}
                            </p>
                            {property.note && (
                                <p
                                    className="text-xs"
                                    style={{ color: textTertiary }}
                                >
                                    {property.note}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ======================================================
   MANUFACTURING PROCESS COMPONENT
====================================================== */

function ManufacturingProcess({
    t,
    textPrimary,
    textSecondary,
    textTertiary,
    borderColor,
    cardBackground,
    elevatedCardBackground,
    gradientBlue,
    isDark,
}) {
    return (
        <section className="space-y-16">
            <header className="space-y-6">
                <div className="flex items-center gap-4">
                    <div
                        className="w-4 h-12 rounded-full"
                        style={{ background: gradientBlue }}
                    />
                    <div>
                        <h2
                            className="text-3xl md:text-4xl font-bold"
                            style={{ color: textPrimary }}
                        >
                            {t.title}
                        </h2>
                        <div
                            className="h-px w-20 mt-2"
                            style={{ background: gradientBlue }}
                        />
                    </div>
                </div>
                <p
                    className="text-xl max-w-3xl leading-relaxed"
                    style={{ color: textSecondary }}
                >
                    {t.description}
                </p>
            </header>

            <div className="grid gap-8">
                {t.processes.map((process, index) => (
                    <div
                        key={process.name}
                        className="relative rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02]"
                        style={{
                            backgroundColor: elevatedCardBackground,
                            border: `1px solid ${borderColor}`,
                            boxShadow: isDark
                                ? "0 10px 30px rgba(0,0,0,0.2)"
                                : "0 10px 30px rgba(0,0,0,0.05)",
                        }}
                    >
                        {/* Step indicator */}
                        <div
                            className="absolute -left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg"
                            style={{ background: gradientBlue }}
                        >
                            {index + 1}
                        </div>

                        <div className="ml-8">
                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                                <div className="space-y-2">
                                    <h3
                                        className="text-2xl font-bold"
                                        style={{ color: textPrimary }}
                                    >
                                        {process.name}
                                    </h3>
                                    <div className="flex items-center gap-3">
                                        <span
                                            className="text-sm font-medium px-3 py-1 rounded-full"
                                            style={{
                                                backgroundColor: isDark
                                                    ? "rgba(76,242,255,0.1)"
                                                    : "rgba(47,134,253,0.1)",
                                                color: isDark
                                                    ? "rgb(76,242,255)"
                                                    : "rgb(47,134,253)",
                                            }}
                                        >
                                            {process.market}
                                        </span>
                                        <span
                                            className="text-sm font-bold"
                                            style={{ color: textTertiary }}
                                        >
                                            {process.quality}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <InfoBlock
                                    title={t.labels.principle}
                                    content={process.principle}
                                    textPrimary={textPrimary}
                                    textSecondary={textSecondary}
                                />
                                <InfoBlock
                                    title={t.labels.material}
                                    content={process.material}
                                    textPrimary={textPrimary}
                                    textSecondary={textSecondary}
                                />
                                <InfoBlock
                                    title={t.labels.applications}
                                    content={process.applications}
                                    textPrimary={textPrimary}
                                    textSecondary={textSecondary}
                                />
                            </div>

                            {/* Advantage highlight */}
                            <div
                                className="mt-8 p-4 rounded-xl border-l-4"
                                style={{
                                    backgroundColor: isDark
                                        ? "rgba(76,242,255,0.05)"
                                        : "rgba(47,134,253,0.05)",
                                    borderLeftColor: isDark
                                        ? "rgb(76,242,255)"
                                        : "rgb(47,134,253)",
                                }}
                            >
                                <p
                                    className="font-semibold flex items-center gap-3"
                                    style={{
                                        color: isDark
                                            ? "rgb(76,242,255)"
                                            : "rgb(47,134,253)",
                                    }}
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    {process.advantage}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function InfoBlock({ title, content, textPrimary, textSecondary }) {
    return (
        <div>
            <h4
                className="font-bold text-lg mb-2"
                style={{ color: textPrimary }}
            >
                {title}
            </h4>
            <p className="leading-relaxed" style={{ color: textSecondary }}>
                {content}
            </p>
        </div>
    );
}

/* ======================================================
   APPLICATIONS BY INDUSTRY COMPONENT
====================================================== */

function ApplicationsByIndustry({
    t,
    textPrimary,
    textSecondary,
    textTertiary,
    borderColor,
    cardBackground,
    elevatedCardBackground,
    gradientBlue,
    isDark,
}) {
    return (
        <section className="space-y-12">
            <header className="space-y-6">
                <div className="flex items-center gap-4">
                    <div
                        className="w-4 h-12 rounded-full"
                        style={{ background: gradientBlue }}
                    />
                    <div>
                        <h2
                            className="text-3xl md:text-4xl font-bold"
                            style={{ color: textPrimary }}
                        >
                            {t.title}
                        </h2>
                        <div
                            className="h-px w-20 mt-2"
                            style={{ background: gradientBlue }}
                        />
                    </div>
                </div>
                <p
                    className="text-xl max-w-3xl leading-relaxed"
                    style={{ color: textSecondary }}
                >
                    {t.description}
                </p>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
                {t.industries.map((industry, index) => (
                    <div
                        key={industry.title}
                        className="group relative p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                        style={{
                            backgroundColor: elevatedCardBackground,
                            border: `1px solid ${borderColor}`,
                            boxShadow: isDark
                                ? "0 8px 25px rgba(0,0,0,0.15)"
                                : "0 8px 25px rgba(0,0,0,0.04)",
                        }}
                    >
                        {/* Hover glow */}
                        {isDark && (
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[rgb(47,134,253,0)] to-[rgb(76,242,255,0)] group-hover:from-[rgb(47,134,253,0.05)] group-hover:to-[rgb(76,242,255,0.05)] transition-all duration-300" />
                        )}

                        <div className="relative flex items-start gap-4">
                            {/* Icon */}
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                                style={{ background: gradientBlue }}
                            >
                                <div className="text-white font-bold text-sm">
                                    {String(index + 1).padStart(2, "0")}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3
                                    className="font-bold text-xl mb-2"
                                    style={{ color: textPrimary }}
                                >
                                    {industry.title}
                                </h3>
                                <p
                                    className="leading-relaxed"
                                    style={{ color: textSecondary }}
                                >
                                    {industry.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ======================================================
   MARKET ANALYSIS COMPONENT
====================================================== */

function MarketAnalysis({
    t,
    textPrimary,
    textSecondary,
    textTertiary,
    borderColor,
    cardBackground,
    elevatedCardBackground,
    gradientBlue,
    gradientBlueHover,
    isDark,
    buttonShadow,
    buttonShadowHover,
}) {
    return (
        <section className="space-y-14">
            <header className="space-y-6">
                <div className="flex items-center gap-4">
                    <div
                        className="w-4 h-12 rounded-full"
                        style={{ background: gradientBlue }}
                    />
                    <div>
                        <h2
                            className="text-3xl md:text-4xl font-bold"
                            style={{ color: textPrimary }}
                        >
                            {t.title}
                        </h2>
                        <div
                            className="h-px w-20 mt-2"
                            style={{ background: gradientBlue }}
                        />
                    </div>
                </div>
                <p
                    className="text-xl max-w-3xl leading-relaxed"
                    style={{ color: textSecondary }}
                >
                    {t.description}
                </p>
            </header>

            {/* Indicators */}
            <div className="grid md:grid-cols-3 gap-6">
                {t.indicators.map((indicator, idx) => (
                    <div
                        key={indicator.title}
                        className="group relative p-6 rounded-2xl transition-all duration-300 hover:scale-[1.03]"
                        style={{
                            backgroundColor: elevatedCardBackground,
                            border: `1px solid ${borderColor}`,
                            boxShadow: isDark
                                ? "0 8px 25px rgba(0,0,0,0.15)"
                                : "0 8px 25px rgba(0,0,0,0.04)",
                        }}
                    >
                        <div className="relative">
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                style={{ background: gradientBlue }}
                            >
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                </svg>
                            </div>
                            <h3
                                className="font-bold text-xl mb-3"
                                style={{ color: textPrimary }}
                            >
                                {indicator.title}
                            </h3>
                            <p
                                className="leading-relaxed"
                                style={{ color: textSecondary }}
                            >
                                {indicator.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Growth Chart */}
            <div
                className="mt-12 p-8 rounded-2xl"
                style={{
                    backgroundColor: elevatedCardBackground,
                    border: `1px solid ${borderColor}`,
                    boxShadow: isDark
                        ? "0 15px 35px rgba(0,0,0,0.2)"
                        : "0 15px 35px rgba(0,0,0,0.06)",
                }}
            >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div>
                        <h3
                            className="text-2xl font-bold mb-2"
                            style={{ color: textPrimary }}
                        >
                            {t.growth.title}
                        </h3>
                        <p className="text-lg" style={{ color: textSecondary }}>
                            {t.growth.trend}
                        </p>
                    </div>
                    <div
                        className="px-4 py-2 rounded-full font-bold text-sm"
                        style={{
                            backgroundColor: isDark
                                ? "rgba(76,242,255,0.1)"
                                : "rgba(47,134,253,0.1)",
                            color: isDark
                                ? "rgb(76,242,255)"
                                : "rgb(47,134,253)",
                        }}
                    >
                        ↗️ Growing Market
                    </div>
                </div>

                {/* Chart */}
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 py-6">
                    {t.growth.years.map((year) => (
                        <div key={year.year} className="flex-1 text-center">
                            <div
                                className="w-full rounded-t-lg mx-auto mb-4 transition-all duration-300 hover:opacity-90"
                                style={{
                                    height: `${year.height}px`,
                                    maxWidth: "60px",
                                    background: gradientBlue,
                                }}
                            />
                            <p
                                className="text-2xl font-bold mb-1"
                                style={{ color: textPrimary }}
                            >
                                {year.value}
                            </p>
                            <p
                                className="text-sm font-medium"
                                style={{ color: textTertiary }}
                            >
                                {year.year}
                            </p>
                        </div>
                    ))}
                </div>

                <p
                    className="text-center mt-10 max-w-2xl mx-auto text-lg leading-relaxed"
                    style={{ color: textSecondary }}
                >
                    {t.growth.description}
                </p>
            </div>
        </section>
    );
}

/* ======================================================
   COMPANY PROFILE COMPONENT
====================================================== */

function CompanyProfile({
    t,
    textPrimary,
    textSecondary,
    textTertiary,
    borderColor,
    cardBackground,
    elevatedCardBackground,
    gradientBlue,
    isDark,
}) {
    return (
        <section className="space-y-16">
            <header className="space-y-6">
                <div className="flex items-center gap-4">
                    <div
                        className="w-4 h-12 rounded-full"
                        style={{ background: gradientBlue }}
                    />
                    <div>
                        <h2
                            className="text-3xl md:text-4xl font-bold"
                            style={{ color: textPrimary }}
                        >
                            {t.title}
                        </h2>
                        <div
                            className="h-px w-20 mt-2"
                            style={{ background: gradientBlue }}
                        />
                    </div>
                </div>
                <p
                    className="text-xl max-w-3xl leading-relaxed"
                    style={{ color: textSecondary }}
                >
                    {t.description}
                </p>
            </header>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-8">
                    {/* Company Info */}
                    <CompanyCard
                        title={t.sections.companyInfo.title}
                        icon="building"
                        items={t.sections.companyInfo.items}
                        textPrimary={textPrimary}
                        textSecondary={textSecondary}
                        borderColor={borderColor}
                        elevatedCardBackground={elevatedCardBackground}
                        gradientBlue={gradientBlue}
                        isDark={isDark}
                    />

                    {/* Expertise */}
                    <CompanyCard
                        title={t.sections.expertise.title}
                        icon="lightbulb"
                        items={t.sections.expertise.items}
                        textPrimary={textPrimary}
                        textSecondary={textSecondary}
                        borderColor={borderColor}
                        elevatedCardBackground={elevatedCardBackground}
                        gradientBlue={gradientBlue}
                        isDark={isDark}
                    />
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                    {/* Products */}
                    <div
                        className="rounded-2xl p-8"
                        style={{
                            backgroundColor: elevatedCardBackground,
                            border: `1px solid ${borderColor}`,
                            boxShadow: isDark
                                ? "0 10px 30px rgba(0,0,0,0.15)"
                                : "0 10px 30px rgba(0,0,0,0.04)",
                        }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center"
                                style={{ background: gradientBlue }}
                            >
                                <svg
                                    className="w-5 h-5 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                                </svg>
                            </div>
                            <h3
                                className="font-bold text-xl"
                                style={{ color: textPrimary }}
                            >
                                {t.sections.products.title}
                            </h3>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {t.sections.products.items.map((product, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 p-3 rounded-lg transition-all duration-300 hover:scale-105"
                                    style={{
                                        backgroundColor: cardBackground,
                                        border: `1px solid ${borderColor}`,
                                    }}
                                >
                                    <div
                                        className="w-2 h-2 rounded-full"
                                        style={{ background: gradientBlue }}
                                    />
                                    <span
                                        className="text-sm font-medium"
                                        style={{ color: textSecondary }}
                                    >
                                        {product}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Values */}
                    <div
                        className="rounded-2xl p-8"
                        style={{
                            backgroundColor: elevatedCardBackground,
                            border: `1px solid ${borderColor}`,
                            boxShadow: isDark
                                ? "0 10px 30px rgba(0,0,0,0.15)"
                                : "0 10px 30px rgba(0,0,0,0.04)",
                        }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center"
                                style={{ background: gradientBlue }}
                            >
                                <svg
                                    className="w-5 h-5 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <h3
                                className="font-bold text-xl"
                                style={{ color: textPrimary }}
                            >
                                {t.sections.values.title}
                            </h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {t.sections.values.items.map((value) => (
                                <div
                                    key={value.title}
                                    className="p-4 rounded-xl text-center transition-all duration-300 hover:scale-105"
                                    style={{
                                        backgroundColor: cardBackground,
                                        border: `1px solid ${borderColor}`,
                                    }}
                                >
                                    <h4
                                        className="font-bold text-lg mb-2"
                                        style={{ color: textPrimary }}
                                    >
                                        {value.title}
                                    </h4>
                                    <p
                                        className="text-sm leading-relaxed"
                                        style={{ color: textSecondary }}
                                    >
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CompanyCard({
    title,
    icon,
    items,
    textPrimary,
    textSecondary,
    borderColor,
    elevatedCardBackground,
    gradientBlue,
    isDark,
}) {
    const icons = {
        building:
            "M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z",
        lightbulb:
            "M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z",
    };

    return (
        <div
            className="rounded-2xl p-8"
            style={{
                backgroundColor: elevatedCardBackground,
                border: `1px solid ${borderColor}`,
                boxShadow: isDark
                    ? "0 10px 30px rgba(0,0,0,0.15)"
                    : "0 10px 30px rgba(0,0,0,0.04)",
            }}
        >
            <div className="flex items-center gap-3 mb-8">
                <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: gradientBlue }}
                >
                    <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d={icons[icon]}
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <h3
                    className="font-bold text-xl"
                    style={{ color: textPrimary }}
                >
                    {title}
                </h3>
            </div>
            <div className="space-y-4">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-lg transition-all duration-300 hover:pl-4"
                        style={{
                            backgroundColor: elevatedCardBackground,
                            border: `1px solid ${borderColor}`,
                        }}
                    >
                        <div
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ background: gradientBlue }}
                        />
                        <span style={{ color: textSecondary }}>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ======================================================
   TRANSLATIONS (Same as before)
====================================================== */

const TRANSLATIONS = {
    fr: {
        pageTitle: "Oxyde de Zinc (ZnO) - Samy Business",
        pageSubtitle:
            "Fournisseur certifié d'oxyde de zinc de qualité supérieure pour l'industrie algérienne, avec plus de 15 ans d'expertise.",
        companyInfo: {
            year: "Depuis 2007",
            employees: "15 collaborateurs",
            capital: "250M DA de capital",
        },
        keyPoints: {
            title: "Nos engagements qualité",
            items: [
                "Produits aux normes européennes",
                "Côtés LME (London Metal Exchange)",
                "Sélection rigoureuse des fournisseurs",
                "Contrôles qualité systématiques",
                "Expertise métaux ferreux et non-ferreux",
            ],
        },
        productInfo: {
            norm: "Tous nos produits sont préalablement sélectionnés et analysés auprès de fournisseurs reconnus",
        },
        ctaButton: "Demander un devis",
        tabs: {
            specs: "Propriétés techniques",
            manufacturing: "Fabrication",
            applications: "Applications",
            market: "Marché & tendances",
            company: "Samy Business",
        },
        specs: {
            title: "Propriétés techniques de l'Oxyde de Zinc",
            description:
                "L'oxyde de zinc (ZnO) est un produit essentiel dans de nombreuses industries pour ses propriétés physico-chimiques exceptionnelles.",
            properties: [
                { label: "Nom chimique", value: "Oxyde de Zinc" },
                { label: "Formule", value: "ZnO" },
                { label: "Numéro CAS", value: "1314-13-2" },
                { label: "Apparence", value: "Poudre blanche fine" },
                { label: "Masse molaire", value: "81.38 g/mol" },
                { label: "Point de fusion", value: "1975 °C" },
                { label: "Densité", value: "5.61 g/cm³" },
                { label: "Band gap", value: "≈ 3.37 eV" },
            ],
        },
        manufacturing: {
            title: "Procédés de fabrication du ZnO",
            description:
                "Différents procédés de fabrication permettent d'obtenir des oxydes de zinc adaptés à diverses applications industrielles.",
            labels: {
                principle: "Principe de fabrication",
                material: "Matière première",
                applications: "Applications cibles",
            },
            processes: [
                {
                    name: "Procédé Français (Indirect)",
                    market: "≈ 58% du marché mondial",
                    quality: "99.5% – 99.9%",
                    principle:
                        "Fusion du zinc métal pur, vaporisation puis oxydation contrôlée sous atmosphère régulée",
                    material: "Zinc métal pur (99.995% Zn)",
                    applications: "Pharmacie, cosmétique, caoutchouc technique",
                    advantage:
                        "Excellente maîtrise de la pureté et de la granulométrie",
                },
                {
                    name: "Procédé Américain (Direct)",
                    market: "Industrie lourde & construction",
                    quality: "98% – 99%",
                    principle:
                        "Réduction directe du minerai suivi d'une réoxydation immédiate en four rotatif",
                    material: "Minerais et concentrés de zinc",
                    applications:
                        "Caoutchouc standard, céramique, peintures industrielles",
                    advantage:
                        "Optimisation des coûts de production à grande échelle",
                },
                {
                    name: "Procédé Chimique (Voie humide)",
                    market: "Applications spécialisées & haute technologie",
                    quality: "Surface spécifique élevée",
                    principle:
                        "Précipitation chimique contrôlée suivie de calcination à température maîtrisée",
                    material: "Solutions de sels de zinc purifiés",
                    applications:
                        "Nano-ZnO, catalyse, chimie fine, électronique",
                    advantage:
                        "Contrôle précis des tailles de particules et morphologie",
                },
            ],
        },
        applications: {
            title: "Applications industrielles du ZnO",
            description:
                "L'oxyde de zinc est utilisé dans de nombreux secteurs industriels pour ses propriétés fonctionnelles.",
            industries: [
                {
                    title: "Caoutchouc & Pneumatique",
                    description:
                        "Agent de vulcanisation essentiel pour les pneus et pièces techniques",
                },
                {
                    title: "Céramique Technique",
                    description:
                        "Agent de frittage et stabilisateur pour céramiques industrielles",
                },
                {
                    title: "Pharmaceutique & Cosmétique",
                    description:
                        "Ingrédient actif dans les crèmes solaires et formulations dermatologiques",
                },
                {
                    title: "Peintures & Revêtements",
                    description:
                        "Pigment blanc, inhibiteur de corrosion et fongicide",
                },
                {
                    title: "Agriculture & Nutrition",
                    description:
                        "Complément alimentaire pour animaux et engrais micronutritif",
                },
                {
                    title: "Électronique & Semi-conducteurs",
                    description:
                        "Matériau pour cellules photovoltaïques et dispositifs électroniques",
                },
            ],
        },
        market: {
            title: "Analyse du marché du ZnO",
            description:
                "Comprendre les tendances du marché pour optimiser les décisions d'approvisionnement.",
            indicators: [
                {
                    title: "Indexation des prix",
                    description:
                        "Prix corrélé au cours LME Zinc avec prime qualité selon pureté et granulométrie",
                },
                {
                    title: "Volatilité du marché",
                    description:
                        "Nécessite une gestion proactive via des stratégies de couverture adaptées",
                },
                {
                    title: "Croissance du Nano-ZnO",
                    description:
                        "Marché en croissance grâce aux applications high-tech et aux innovations",
                },
            ],
            growth: {
                title: "Croissance de Samy Business",
                trend: "+50% croissance annuelle",
                description:
                    "Notre société opère dans un environnement à fort potentiel, générant des flux importants au regard des produits à valeur boursière commercialisés.",
                years: [
                    { year: "2020", value: "872 KDA", height: 60 },
                    { year: "2021", value: "1.184 KDA", height: 85 },
                    { year: "2022", value: "1.977 KDA", height: 140 },
                ],
            },
        },
        company: {
            title: "Samy Business - Votre partenaire industriel",
            description:
                "Société d'importation de produits sidérurgiques divers du domaine des métaux ferreux et non-ferreux, destinés à la transformation et fabrication.",
            sections: {
                companyInfo: {
                    title: "Présentation de l'entreprise",
                    items: [
                        "Créée en 2007 sous forme EURL",
                        "Capital social : 250.000.000,00 DA",
                        "15 collaborateurs spécialisés",
                        "Siège à Alger (Said Hamdine)",
                        "Dirigeant : Mr. Rabah BOURRAI",
                    ],
                },
                expertise: {
                    title: "Notre expertise",
                    items: [
                        "Plus de 15 ans d'expérience dans les métaux ferreux et non-ferreux",
                        "Maîtrise complète de la chaîne logistique d'import-export",
                        "Partenariats avec fournisseurs européens reconnus (Allemagne, Luxembourg, Belgique, Espagne)",
                        "Produits côtés LME (London Metal Exchange)",
                        "Conformité aux normes européennes",
                    ],
                },
                products: {
                    title: "Gamme de produits",
                    items: [
                        "Oxyde de Zinc (ZnO)",
                        "Plomb doux pur 99%",
                        "Zamak 5",
                        "Aluminium en lingot",
                        "Cuivre cathode/plaque",
                        "Zinc SHG 99.95%",
                        "Bobines acier/inox",
                        "Fil machine métallique",
                    ],
                },
                values: {
                    title: "Nos valeurs",
                    items: [
                        {
                            title: "Mission",
                            description:
                                "Satisfaction client, qualité produit et fiabilité",
                        },
                        {
                            title: "Vision",
                            description:
                                "Développement durable et valeur ajoutée locale",
                        },
                        {
                            title: "Valeurs",
                            description:
                                "Innovation, perfection et rapidité d'exécution",
                        },
                        {
                            title: "Engagement",
                            description:
                                "Contribution efficace au développement économique",
                        },
                    ],
                },
            },
        },
        bottomCta: {
            title: "Besoin d'oxyde de zinc de qualité ?",
            description:
                "Notre équipe d'experts est à votre disposition pour vous conseiller et répondre à vos besoins spécifiques en produits sidérurgiques.",
            button: "Demander un devis personnalisé",
        },
    },
    en: {
        pageTitle: "Zinc Oxide (ZnO) - Samy Business",
        pageSubtitle:
            "Certified supplier of premium quality zinc oxide for Algerian industry, with over 15 years of expertise.",
        companyInfo: {
            year: "Since 2007",
            employees: "15 employees",
            capital: "250M DA capital",
        },
        keyPoints: {
            title: "Our quality commitments",
            items: [
                "Products meeting European standards",
                "LME (London Metal Exchange) listed",
                "Rigorous supplier selection",
                "Systematic quality controls",
                "Expertise in ferrous and non-ferrous metals",
            ],
        },
        productInfo: {
            norm: "All our products are pre-selected and analyzed from recognized suppliers",
        },
        ctaButton: "Request a quote",
        tabs: {
            specs: "Technical properties",
            manufacturing: "Manufacturing",
            applications: "Applications",
            market: "Market & trends",
            company: "Samy Business",
        },
        specs: {
            title: "Zinc Oxide Technical Properties",
            description:
                "Zinc oxide (ZnO) is an essential product in many industries due to its exceptional physico-chemical properties.",
            properties: [
                { label: "Chemical name", value: "Zinc Oxide" },
                { label: "Formula", value: "ZnO" },
                { label: "CAS Number", value: "1314-13-2" },
                { label: "Appearance", value: "Fine white powder" },
                { label: "Molar mass", value: "81.38 g/mol" },
                { label: "Melting point", value: "1975 °C" },
                { label: "Density", value: "5.61 g/cm³" },
                { label: "Band gap", value: "≈ 3.37 eV" },
            ],
        },
        manufacturing: {
            title: "ZnO Manufacturing Processes",
            description:
                "Different manufacturing processes produce zinc oxides suitable for various industrial applications.",
            labels: {
                principle: "Manufacturing principle",
                material: "Raw material",
                applications: "Target applications",
            },
            processes: [
                {
                    name: "French Process (Indirect)",
                    market: "≈ 58% of global market",
                    quality: "99.5% – 99.9%",
                    principle:
                        "Melting of pure zinc metal, vaporization then controlled oxidation under regulated atmosphere",
                    material: "Pure zinc metal (99.995% Zn)",
                    applications: "Pharmaceutical, cosmetic, technical rubber",
                    advantage: "Excellent control of purity and particle size",
                },
                {
                    name: "American Process (Direct)",
                    market: "Heavy industry & construction",
                    quality: "98% – 99%",
                    principle:
                        "Direct reduction of ore followed by immediate reoxidation in rotary kiln",
                    material: "Zinc ores and concentrates",
                    applications:
                        "Standard rubber, ceramics, industrial paints",
                    advantage: "Production cost optimization at large scale",
                },
                {
                    name: "Chemical Process (Wet)",
                    market: "Specialized & high-tech applications",
                    quality: "High specific surface",
                    principle:
                        "Controlled chemical precipitation followed by calcination at controlled temperature",
                    material: "Purified zinc salt solutions",
                    applications:
                        "Nano-ZnO, catalysis, fine chemicals, electronics",
                    advantage:
                        "Precise control of particle sizes and morphology",
                },
            ],
        },
        applications: {
            title: "Industrial Applications of ZnO",
            description:
                "Zinc oxide is used in many industrial sectors for its functional properties.",
            industries: [
                {
                    title: "Rubber & Tires",
                    description:
                        "Essential vulcanization agent for tires and technical parts",
                },
                {
                    title: "Technical Ceramics",
                    description:
                        "Sintering agent and stabilizer for industrial ceramics",
                },
                {
                    title: "Pharmaceutical & Cosmetic",
                    description:
                        "Active ingredient in sunscreens and dermatological formulations",
                },
                {
                    title: "Paints & Coatings",
                    description:
                        "White pigment, corrosion inhibitor and fungicide",
                },
                {
                    title: "Agriculture & Nutrition",
                    description:
                        "Animal feed supplement and micronutrient fertilizer",
                },
                {
                    title: "Electronics & Semiconductors",
                    description:
                        "Material for photovoltaic cells and electronic devices",
                },
            ],
        },
        market: {
            title: "ZnO Market Analysis",
            description:
                "Understanding market trends to optimize supply decisions.",
            indicators: [
                {
                    title: "Price indexing",
                    description:
                        "Price correlated to LME Zinc with quality premium based on purity and particle size",
                },
                {
                    title: "Market volatility",
                    description:
                        "Requires proactive management through adapted hedging strategies",
                },
                {
                    title: "Nano-ZnO growth",
                    description:
                        "Growing market thanks to high-tech applications and innovations",
                },
            ],
            growth: {
                title: "Samy Business Growth",
                trend: "+50% annual growth",
                description:
                    "Our company operates in a high-potential environment, generating significant flows given the commercialized stock market value products.",
                years: [
                    { year: "2020", value: "872 KDA", height: 60 },
                    { year: "2021", value: "1.184 KDA", height: 85 },
                    { year: "2022", value: "1.977 KDA", height: 140 },
                ],
            },
        },
        company: {
            title: "Samy Business - Your industrial partner",
            description:
                "Import company of various steel products in the field of ferrous and non-ferrous metals, intended for transformation and manufacturing.",
            sections: {
                companyInfo: {
                    title: "Company presentation",
                    items: [
                        "Founded in 2007 as EURL",
                        "Share capital: 250,000,000.00 DA",
                        "15 specialized employees",
                        "Headquarters in Algiers (Said Hamdine)",
                        "Director: Mr. Rabah BOURRAI",
                    ],
                },
                expertise: {
                    title: "Our expertise",
                    items: [
                        "Over 15 years experience in ferrous and non-ferrous metals",
                        "Complete import-export logistics mastery",
                        "Partnerships with recognized European suppliers (Germany, Luxembourg, Belgium, Spain)",
                        "LME (London Metal Exchange) listed products",
                        "Compliance with European standards",
                    ],
                },
                products: {
                    title: "Product range",
                    items: [
                        "Zinc Oxide (ZnO)",
                        "Soft Lead 99% pure",
                        "Zamak 5",
                        "Aluminum ingot",
                        "Copper cathode/plate",
                        "Zinc SHG 99.95%",
                        "Steel/stainless coils",
                        "Metallic wire rod",
                    ],
                },
                values: {
                    title: "Our values",
                    items: [
                        {
                            title: "Mission",
                            description:
                                "Customer satisfaction, product quality and reliability",
                        },
                        {
                            title: "Vision",
                            description:
                                "Sustainable development and local added value",
                        },
                        {
                            title: "Values",
                            description:
                                "Innovation, perfection and execution speed",
                        },
                        {
                            title: "Commitment",
                            description:
                                "Effective contribution to economic development",
                        },
                    ],
                },
            },
        },
        bottomCta: {
            title: "Need quality zinc oxide?",
            description:
                "Our team of experts is available to advise you and respond to your specific steel product needs.",
            button: "Request a custom quote",
        },
    },
    ar: {
        pageTitle: "أكسيد الزنك (ZnO) - Samy Business",
        pageSubtitle:
            "مورد معتمد لأكسيد الزنك عالي الجودة للصناعة الجزائرية، مع خبرة تزيد عن 15 عاماً.",
        companyInfo: {
            year: "منذ 2007",
            employees: "15 موظف",
            capital: "250 مليون دينار رأسمال",
        },
        keyPoints: {
            title: "التزاماتنا الجودة",
            items: [
                "منتجات مطابقة للمعايير الأوروبية",
                "مدرجة في LME (بورصة لندن للمعادن)",
                "اختيار صارم للموردين",
                "ضوابط جودة منهجية",
                "خبرة في المعادن الحديدية وغير الحديدية",
            ],
        },
        productInfo: {
            norm: "جميع منتجاتنا يتم اختيارها وتحليلها مسبقاً من موردين معترف بهم",
        },
        ctaButton: "طلب عرض سعر",
        tabs: {
            specs: "الخصائص التقنية",
            manufacturing: "التصنيع",
            applications: "التطبيقات",
            market: "السوق والاتجاهات",
            company: "Samy Business",
        },
        specs: {
            title: "الخصائص التقنية لأكسيد الزنك",
            description:
                "أكسيد الزنك (ZnO) هو منتج أساسي في العديد من الصناعات بفضل خصائصه الفيزيائية والكيميائية الاستثنائية.",
            properties: [
                { label: "الاسم الكيميائي", value: "أكسيد الزنك" },
                { label: "الصيغة", value: "ZnO" },
                { label: "رقم CAS", value: "1314-13-2" },
                { label: "المظهر", value: "مسحوق أبيض ناعم" },
                { label: "الكتلة المولية", value: "81.38 ج/مول" },
                { label: "نقطة الانصهار", value: "1975 °C" },
                { label: "الكثافة", value: "5.61 جم/سم³" },
                { label: "فجوة النطاق", value: "≈ 3.37 إلكترون فولت" },
            ],
        },
        manufacturing: {
            title: "عمليات تصنيع أكسيد الزنك",
            description:
                "عمليات تصنيع مختلفة تنتج أكاسيد الزنك المناسبة لتطبيقات صناعية متنوعة.",
            labels: {
                principle: "مبدأ التصنيع",
                material: "المادة الخام",
                applications: "التطبيقات المستهدفة",
            },
            processes: [
                {
                    name: "الطريقة الفرنسية (غير مباشرة)",
                    market: "≈ 58% من السوق العالمية",
                    quality: "99.5% – 99.9%",
                    principle:
                        "صهر معدن الزنك النقي، التبخر ثم الأكسدة المتحكم بها تحت جو منظم",
                    material: "معدن الزنك النقي (99.995% زنك)",
                    applications: "الصيدلة، مستحضرات التجميل، المطاط التقني",
                    advantage: "تحكم ممتاز في النقاوة وحجم الجسيمات",
                },
                {
                    name: "الطريقة الأمريكية (مباشرة)",
                    market: "الصناعة الثقيلة والبناء",
                    quality: "98% – 99%",
                    principle:
                        "الاختزال المباشر للخام متبوعاً بإعادة أكسدة فورية في فرن دوار",
                    material: "خامات ومركزات الزنك",
                    applications:
                        "المطاط القياسي، السيراميك، الدهانات الصناعية",
                    advantage: "تحسين تكاليف الإنتاج على نطاق واسع",
                },
                {
                    name: "الطريقة الكيميائية (رطبة)",
                    market: "تطبيقات متخصصة وتقنية عالية",
                    quality: "سطح نوعي مرتفع",
                    principle:
                        "ترسيب كيميائي متحكم به متبوع بالتكلس بدرجة حرارة مضبوطة",
                    material: "محاليل أملاح الزنك المصفاة",
                    applications:
                        "أكسيد الزنك النانوي، الحفز، الكيمياء الدقيقة، الإلكترونيات",
                    advantage: "تحكم دقيق بأحجام الجسيمات والبنية",
                },
            ],
        },
        applications: {
            title: "التطبيقات الصناعية لأكسيد الزنك",
            description:
                "يستخدم أكسيد الزنك في العديد من القطاعات الصناعية لخصائصه الوظيفية.",
            industries: [
                {
                    title: "المطاط والإطارات",
                    description: "عامل كبريتة أساسي للإطارات والأجزاء التقنية",
                },
                {
                    title: "السيراميك التقني",
                    description: "عامل تلبيد ومثبت للسيراميك الصناعي",
                },
                {
                    title: "الصيدلاني ومستحضرات التجميل",
                    description:
                        "مكون نشط في كريمات الوقاية من الشمس والمستحضرات الجلدية",
                },
                {
                    title: "الدهانات والطلاءات",
                    description: "صبغة بيضاء، مثبط للتآكل ومبيد للفطريات",
                },
                {
                    title: "الزراعة والتغذية",
                    description: "مكمل غذائي للحيوانات وسماد مغذي دقيق",
                },
                {
                    title: "الإلكترونيات وأشباه الموصلات",
                    description:
                        "مادة لخلايا الطاقة الشمسية والأجهزة الإلكترونية",
                },
            ],
        },
        market: {
            title: "تحليل سوق أكسيد الزنك",
            description: "فهم اتجاهات السوق لتحسين قرارات التوريد.",
            indicators: [
                {
                    title: "فهرسة الأسعار",
                    description:
                        "السعر مرتبط بسعر بورصة لندن للمعادن مع قسط جودة حسب النقاوة وحجم الجسيمات",
                },
                {
                    title: "تقلب السوق",
                    description:
                        "يتطلب إدارة استباقية من خلال استراتيجيات التحوط المناسبة",
                },
                {
                    title: "نمو أكسيد الزنك النانوي",
                    description:
                        "سوق متنام بفضل التطبيقات التقنية العالية والابتكارات",
                },
            ],
            growth: {
                title: "نمو Samy Business",
                trend: "+50% نمو سنوي",
                description:
                    "تعمل شركتنا في بيئة عالية الإمكانات، وتولد تدفقات كبيرة نظراً للمنتجات ذات القيمة البورصية المسوقة.",
                years: [
                    { year: "2020", value: "872 ألف دينار", height: 60 },
                    { year: "2021", value: "1.184 ألف دينار", height: 85 },
                    { year: "2022", value: "1.977 ألف دينار", height: 140 },
                ],
            },
        },
        company: {
            title: "Samy Business - شريكك الصناعي",
            description:
                "شركة استيراد منتجات حديدية متنوعة في مجال المعادن الحديدية وغير الحديدية، المخصصة للتحويل والتصنيع.",
            sections: {
                companyInfo: {
                    title: "تقديم الشركة",
                    items: [
                        "تأسست عام 2007 كشركة EURL",
                        "رأس المال: 250,000,000.00 دينار",
                        "15 موظفاً متخصصاً",
                        "المقر الرئيسي في الجزائر (سعيد حمدين)",
                        "المدير: السيد رابح بوراعي",
                    ],
                },
                expertise: {
                    title: "خبرتنا",
                    items: [
                        "أكثر من 15 عاماً من الخبرة في المعادن الحديدية وغير الحديدية",
                        "إتقان كامل لسلسلة التوريد للاستيراد والتصدير",
                        "شراكات مع موردين أوروبيين معترف بهم (ألمانيا، لوكسمبورغ، بلجيكا، إسبانيا)",
                        "منتجات مدرجة في بورصة لندن للمعادن",
                        "المطابقة للمعايير الأوروبية",
                    ],
                },
                products: {
                    title: "مجموعة المنتجات",
                    items: [
                        "أكسيد الزنك (ZnO)",
                        "رصاص ناعم نقي 99%",
                        "زاماك 5",
                        "ألومنيوم في سبائك",
                        "نحاس كاثود/ألواح",
                        "زنك SHG 99.95%",
                        "لفائف الصلب/الستانلس",
                        "سلك معدني",
                    ],
                },
                values: {
                    title: "قيمنا",
                    items: [
                        {
                            title: "المهمة",
                            description: "رضا العملاء، جودة المنتج والموثوقية",
                        },
                        {
                            title: "الرؤية",
                            description:
                                "التنمية المستدامة والقيمة المضافة المحلية",
                        },
                        {
                            title: "القيم",
                            description: "الابتكار، الكمال وسرعة التنفيذ",
                        },
                        {
                            title: "الالتزام",
                            description: "مساهمة فعالة في التنمية الاقتصادية",
                        },
                    ],
                },
            },
        },
        bottomCta: {
            title: "هل تحتاج إلى أكسيد زنك عالي الجودة؟",
            description:
                "فريق خبرائنا متاح لتقديم المشورة لك والاستجابة لاحتياجاتك المحددة في المنتجات الحديدية.",
            button: "طلب عرض سعر مخصص",
        },
    },
};
