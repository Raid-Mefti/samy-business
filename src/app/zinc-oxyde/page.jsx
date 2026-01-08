"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

/* ======================================================
   PAGE
====================================================== */

export default function ZincOxidePage() {
    const { language } = useLanguage();
    const [activeTab, setActiveTab] = useState("specs");

    const t = TRANSLATIONS[language] || TRANSLATIONS.fr;

    const tabs = [
        { id: "specs", label: t.tabs.specs },
        { id: "manufacturing", label: t.tabs.manufacturing },
        { id: "applications", label: t.tabs.applications },
        { id: "market", label: t.tabs.market },
        { id: "company", label: t.tabs.company },
    ];

    return (
        <>
            <Header />

            <main className="bg-base-100 text-base-content">
                {/* Hero Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Content */}
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[rgb(223,126,60)] leading-tight">
                                    {t.pageTitle}
                                </h1>
                                <p className="text-lg md:text-xl text-base-content/80 mt-6 leading-relaxed">
                                    {t.pageSubtitle}
                                </p>
                            </div>

                            {/* Company Info Badge */}
                            <div className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-4 bg-base-200/60 rounded-2xl border border-base-300">
                                <div className="flex items-center gap-2">
                                    <svg
                                        className="w-5 h-5 text-[rgb(223,126,60)]"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="font-medium">
                                        {t.companyInfo.year}
                                    </span>
                                </div>
                                <div className="hidden sm:block h-4 w-px bg-base-300"></div>
                                <div className="flex items-center gap-2">
                                    <svg
                                        className="w-5 h-5 text-[rgb(223,126,60)]"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="font-medium">
                                        {t.companyInfo.employees}
                                    </span>
                                </div>
                                <div className="hidden sm:block h-4 w-px bg-base-300"></div>
                                <div className="flex items-center gap-2">
                                    <svg
                                        className="w-5 h-5 text-[rgb(223,126,60)]"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                        <path
                                            fillRule="evenodd"
                                            d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="font-medium">
                                        {t.companyInfo.capital}
                                    </span>
                                </div>
                            </div>

                            {/* Key Points from PDF */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-[rgb(223,126,60)]">
                                    {t.keyPoints.title}
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {t.keyPoints.items.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3"
                                        >
                                            <svg
                                                className="w-5 h-5 text-[rgb(223,126,60)] mt-0.5 flex-shrink-0"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="text-base-content/80 text-sm">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="pt-4">
                                <Link
                                    href="/devis"
                                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[rgb(223,126,60)] text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-xl"
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
                                </Link>
                            </div>
                        </div>

                        {/* Right Column - Product Image */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-md">
                                <div className="rounded-2xl bg-gradient-to-br from-base-200 to-base-300 p-8 shadow-xl">
                                    {/* Product Image */}
                                    <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-6 bg-white">
                                        <Image
                                            src="/finals/oxyde_de_zinc2.png"
                                            alt="Zinc Oxide High Purity - Samy Business"
                                            fill
                                            className="object-contain p-4"
                                            priority
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>

                                    {/* Product Info */}
                                    <div className="space-y-4 text-center">
                                        <div>
                                            <h3 className="text-xl font-bold text-[rgb(223,126,60)]">
                                                ZINC OXIDE
                                            </h3>
                                            <p className="text-base-content/70 mt-1">
                                                High Purity • Consistent Quality
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(223,126,60)]/10 text-[rgb(223,126,60)]">
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="font-semibold">
                                                25 kg packaging
                                            </span>
                                        </div>
                                        <p className="text-sm text-base-content/60">
                                            {t.productInfo.norm}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tabs Navigation */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 rounded-full text-sm font-semibold border transition-all duration-300 ${
                                    activeTab === tab.id
                                        ? "bg-[rgb(223,126,60)] text-white border-[rgb(223,126,60)] shadow-lg transform -translate-y-1"
                                        : "bg-base-200/60 border-base-300 hover:border-[rgb(223,126,60)] hover:text-[rgb(223,126,60)] hover:shadow-md"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Content Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                    <div className="rounded-3xl bg-base-200/40 border border-base-300 p-6 sm:p-8 md:p-12 shadow-sm">
                        {activeTab === "specs" && (
                            <TechnicalSpecs t={t.specs} />
                        )}
                        {activeTab === "manufacturing" && (
                            <ManufacturingProcess t={t.manufacturing} />
                        )}
                        {activeTab === "applications" && (
                            <ApplicationsByIndustry t={t.applications} />
                        )}
                        {activeTab === "market" && (
                            <MarketAnalysis t={t.market} />
                        )}
                        {activeTab === "company" && (
                            <CompanyProfile t={t.company} />
                        )}
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                    <div className="text-center space-y-8 bg-gradient-to-br from-base-200/50 to-base-300/30 rounded-3xl border border-base-300 p-8 md:p-12">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                {t.bottomCta.title}
                            </h3>
                            <p className="text-lg text-base-content/70 max-w-3xl mx-auto leading-relaxed">
                                {t.bottomCta.description}
                            </p>
                        </div>
                        <Link
                            href="/devis"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[rgb(223,126,60)] text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-xl"
                        >
                            {t.bottomCta.button}
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

function TechnicalSpecs({ t }) {
    return (
        <section className="space-y-12">
            <header className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">{t.title}</h2>
                <p className="text-lg text-base-content/80 max-w-3xl">
                    {t.description}
                </p>
            </header>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.properties.map((property) => (
                    <div
                        key={property.label}
                        className="rounded-2xl bg-base-200/60 border border-base-300 p-6 shadow-sm hover:border-[rgb(223,126,60)]/30 transition-colors"
                    >
                        <p className="text-sm uppercase tracking-wide text-base-content/50 font-semibold">
                            {property.label}
                        </p>
                        <p className="mt-2 font-bold text-2xl text-[rgb(223,126,60)]">
                            {property.value}
                        </p>
                        {property.note && (
                            <p className="mt-1 text-xs text-base-content/60">
                                {property.note}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ======================================================
   MANUFACTURING PROCESS COMPONENT
====================================================== */

function ManufacturingProcess({ t }) {
    return (
        <section className="space-y-16">
            <header className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">{t.title}</h2>
                <p className="text-lg text-base-content/80 max-w-3xl">
                    {t.description}
                </p>
            </header>

            <div className="grid gap-10">
                {t.processes.map((process, index) => (
                    <div
                        key={process.name}
                        className="relative rounded-3xl bg-base-200/60 border border-base-300 p-8 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="absolute left-0 top-8 bottom-8 w-1 rounded-full bg-[rgb(223,126,60)]"></div>

                        <div className="ml-6">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-[rgb(223,126,60)] text-white flex items-center justify-center font-bold text-sm">
                                            {index + 1}
                                        </div>
                                        <h3 className="text-xl font-bold">
                                            {process.name}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-base-content/60">
                                        {process.market}
                                    </p>
                                </div>
                                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[rgb(223,126,60)]/10 text-[rgb(223,126,60)] text-sm font-medium">
                                    {process.quality}
                                </span>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 ml-6">
                                <Info
                                    label={t.labels.principle}
                                    value={process.principle}
                                />
                                <Info
                                    label={t.labels.material}
                                    value={process.material}
                                />
                                <Info
                                    label={t.labels.applications}
                                    value={process.applications}
                                />
                            </div>

                            <div className="mt-6 ml-6 p-4 rounded-xl bg-[rgb(223,126,60)]/5 border border-[rgb(223,126,60)]/10">
                                <p className="font-semibold text-[rgb(223,126,60)] flex items-center gap-2">
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
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

function Info({ label, value }) {
    return (
        <div>
            <p className="font-semibold text-sm text-base-content/70 mb-1">
                {label}
            </p>
            <p className="text-base-content/80 leading-relaxed">{value}</p>
        </div>
    );
}

/* ======================================================
   APPLICATIONS BY INDUSTRY COMPONENT
====================================================== */

function ApplicationsByIndustry({ t }) {
    return (
        <section className="space-y-12">
            <header className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">{t.title}</h2>
                <p className="text-lg text-base-content/80 max-w-3xl">
                    {t.description}
                </p>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
                {t.industries.map((industry, index) => (
                    <div
                        key={industry.title}
                        className="rounded-2xl bg-base-200/60 border border-base-300 p-6 shadow-sm hover:border-[rgb(223,126,60)]/30 transition-colors"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-[rgb(223,126,60)]/10 flex-shrink-0">
                                <svg
                                    className="w-6 h-6 text-[rgb(223,126,60)]"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs font-semibold px-2 py-1 rounded bg-[rgb(223,126,60)]/10 text-[rgb(223,126,60)]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <h3 className="font-bold text-lg">
                                        {industry.title}
                                    </h3>
                                </div>
                                <p className="text-base-content/70 text-sm">
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

function MarketAnalysis({ t }) {
    return (
        <section className="space-y-14">
            <header className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">{t.title}</h2>
                <p className="text-lg text-base-content/80 max-w-3xl">
                    {t.description}
                </p>
            </header>

            <div className="grid md:grid-cols-3 gap-6">
                {t.indicators.map((indicator) => (
                    <div
                        key={indicator.title}
                        className="rounded-2xl bg-base-200/60 border border-base-300 p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-[rgb(223,126,60)]/10">
                                <svg
                                    className="w-5 h-5 text-[rgb(223,126,60)]"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                </svg>
                            </div>
                            <p className="font-bold text-lg">
                                {indicator.title}
                            </p>
                        </div>
                        <p className="text-sm text-base-content/70">
                            {indicator.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Growth Chart - Based on PDF data */}
            <div className="mt-12 p-8 rounded-2xl bg-base-200/60 border border-base-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <h3 className="text-xl font-bold">{t.growth.title}</h3>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(223,126,60)]/10 text-[rgb(223,126,60)] text-sm font-medium">
                        <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                clipRule="evenodd"
                            />
                        </svg>
                        {t.growth.trend}
                    </span>
                </div>
                <div className="flex flex-col md:flex-row items-end justify-between gap-6">
                    {t.growth.years.map((year) => (
                        <div key={year.year} className="flex-1 text-center">
                            <div
                                className="w-full bg-gradient-to-t from-[rgb(223,126,60)]/30 via-[rgb(223,126,60)]/15 to-transparent rounded-t-lg mb-3"
                                style={{ height: `${year.height}px` }}
                            ></div>
                            <p className="font-bold text-2xl text-[rgb(223,126,60)]">
                                {year.value}
                            </p>
                            <p className="text-sm text-base-content/60 mt-2">
                                {year.year}
                            </p>
                        </div>
                    ))}
                </div>
                <p className="text-center mt-8 text-base-content/70 max-w-2xl mx-auto">
                    {t.growth.description}
                </p>
            </div>
        </section>
    );
}

/* ======================================================
   COMPANY PROFILE COMPONENT
====================================================== */

function CompanyProfile({ t }) {
    return (
        <section className="space-y-16">
            <header className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">{t.title}</h2>
                <p className="text-lg text-base-content/80 max-w-3xl">
                    {t.description}
                </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-8">
                    {/* Company Info */}
                    <div className="rounded-2xl bg-base-200/60 border border-base-300 p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-[rgb(223,126,60)]/10">
                                <svg
                                    className="w-5 h-5 text-[rgb(223,126,60)]"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-bold text-xl">
                                {t.sections.companyInfo.title}
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {t.sections.companyInfo.items.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-3 rounded-lg bg-base-300/30"
                                >
                                    <div className="w-2 h-2 rounded-full bg-[rgb(223,126,60)] flex-shrink-0"></div>
                                    <span className="text-base-content/80">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Expertise */}
                    <div className="rounded-2xl bg-base-200/60 border border-base-300 p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-[rgb(223,126,60)]/10">
                                <svg
                                    className="w-5 h-5 text-[rgb(223,126,60)]"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-bold text-xl">
                                {t.sections.expertise.title}
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {t.sections.expertise.items.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-3 rounded-lg bg-base-300/30"
                                >
                                    <svg
                                        className="w-4 h-4 text-[rgb(223,126,60)] mt-1 flex-shrink-0"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-base-content/80">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    {/* Products */}
                    <div className="rounded-2xl bg-base-200/60 border border-base-300 p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-[rgb(223,126,60)]/10">
                                <svg
                                    className="w-5 h-5 text-[rgb(223,126,60)]"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-xl">
                                {t.sections.products.title}
                            </h3>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {t.sections.products.items.map((product, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 p-2 rounded bg-base-300/30 hover:bg-base-300/50 transition-colors"
                                >
                                    <svg
                                        className="w-3 h-3 text-[rgb(223,126,60)] flex-shrink-0"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-sm text-base-content/80 truncate">
                                        {product}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Values */}
                    <div className="rounded-2xl bg-base-200/60 border border-base-300 p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-[rgb(223,126,60)]/10">
                                <svg
                                    className="w-5 h-5 text-[rgb(223,126,60)]"
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
                            <h3 className="font-bold text-xl">
                                {t.sections.values.title}
                            </h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {t.sections.values.items.map((value) => (
                                <div
                                    key={value.title}
                                    className="text-center p-4 rounded-lg bg-base-300/40 border border-base-300/50"
                                >
                                    <h4 className="font-bold text-[rgb(223,126,60)] mb-2">
                                        {value.title}
                                    </h4>
                                    <p className="text-sm text-base-content/70">
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

/* ======================================================
   TRANSLATIONS - BASED ONLY ON PDF CONTENT
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
