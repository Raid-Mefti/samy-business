"use client";

import { useState } from "react";
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
                <section className="max-w-6xl mx-auto px-6 pt-32 pb-28 space-y-24">
                    {/* Page header */}
                    <header className="text-center space-y-8">
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[rgb(223,126,60)]">
                            {t.pageTitle}
                        </h1>
                        <p className="text-lg text-base-content/70 max-w-3xl mx-auto leading-relaxed">
                            {t.pageSubtitle}
                        </p>

                        {/* Company info badge */}
                        <div className="inline-flex items-center gap-4 px-6 py-3 bg-base-200/60 rounded-full border border-base-300">
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
                            <div className="h-4 w-px bg-base-300"></div>
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
                            <div className="h-4 w-px bg-base-300"></div>
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
                    </header>

                    {/* CTA Button - Request Quote */}
                    <div className="flex justify-center">
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

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                                    activeTab === tab.id
                                        ? "bg-[rgb(223,126,60)] text-white border-[rgb(223,126,60)] shadow-sm"
                                        : "bg-base-200/60 border-base-300 hover:border-[rgb(223,126,60)] hover:text-[rgb(223,126,60)]"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="rounded-3xl bg-base-200/40 border border-base-300 p-10 md:p-14 shadow-sm space-y-24">
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

                    {/* Bottom CTA */}
                    <div className="text-center space-y-6">
                        <h3 className="text-2xl font-bold">
                            {t.bottomCta.title}
                        </h3>
                        <p className="text-base-content/70 max-w-2xl mx-auto">
                            {t.bottomCta.description}
                        </p>
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
   TECHNICAL SPECS
====================================================== */

function TechnicalSpecs({ t }) {
    return (
        <section className="space-y-14">
            <header className="space-y-3">
                <h2 className="text-3xl font-bold">{t.title}</h2>
                <p className="text-base-content/70 max-w-3xl">
                    {t.description}
                </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.properties.map((property) => (
                    <div
                        key={property.label}
                        className="rounded-2xl bg-base-200/60 border border-base-300 p-6 shadow-sm hover:border-[rgb(223,126,60)]/30 transition-colors"
                    >
                        <p className="text-sm uppercase tracking-wide text-base-content/50">
                            {property.label}
                        </p>
                        <p className="mt-1 font-semibold text-lg">
                            {property.value}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ======================================================
   MANUFACTURING
====================================================== */

function ManufacturingProcess({ t }) {
    return (
        <section className="space-y-16">
            <header className="space-y-3">
                <h2 className="text-3xl font-bold">{t.title}</h2>
                <p className="text-base-content/70 max-w-3xl">
                    {t.description}
                </p>
            </header>

            <div className="grid gap-10">
                {t.processes.map((process) => (
                    <div
                        key={process.name}
                        className="relative rounded-3xl bg-base-200/60 border border-base-300 p-10 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <span className="absolute left-0 top-10 h-14 w-1 rounded-full bg-[rgb(223,126,60)]" />

                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
                            <div>
                                <h3 className="text-xl font-bold mb-1">
                                    {process.name}
                                </h3>
                                <p className="text-sm text-base-content/60">
                                    {process.market}
                                </p>
                            </div>
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[rgb(223,126,60)]/10 text-[rgb(223,126,60)] text-sm font-medium">
                                {process.quality}
                            </span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 text-sm">
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

                        <p className="mt-8 font-semibold text-[rgb(223,126,60)] flex items-center gap-2">
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
                ))}
            </div>
        </section>
    );
}

function Info({ label, value }) {
    return (
        <div>
            <p className="font-semibold mb-1">{label}</p>
            <p className="text-base-content/70 leading-relaxed">{value}</p>
        </div>
    );
}

/* ======================================================
   APPLICATIONS
====================================================== */

function ApplicationsByIndustry({ t }) {
    return (
        <section className="space-y-12">
            <header className="space-y-3">
                <h2 className="text-3xl font-bold">{t.title}</h2>
                <p className="text-base-content/70 max-w-3xl">
                    {t.description}
                </p>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
                {t.industries.map((industry) => (
                    <div
                        key={industry.title}
                        className="rounded-2xl bg-base-200/60 border border-base-300 p-8 shadow-sm hover:border-[rgb(223,126,60)]/30 transition-colors"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-[rgb(223,126,60)]/10">
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
                                <h3 className="font-bold text-lg mb-2">
                                    {industry.title}
                                </h3>
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
   MARKET
====================================================== */

function MarketAnalysis({ t }) {
    return (
        <section className="space-y-14">
            <header className="space-y-3">
                <h2 className="text-3xl font-bold">{t.title}</h2>
                <p className="text-base-content/70 max-w-3xl">
                    {t.description}
                </p>
            </header>

            <div className="grid md:grid-cols-3 gap-6">
                {t.indicators.map((indicator) => (
                    <div
                        key={indicator.title}
                        className="rounded-2xl bg-base-200/60 border border-base-300 p-8 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <p className="font-semibold text-lg mb-2">
                            {indicator.title}
                        </p>
                        <p className="mt-2 text-sm text-base-content/70">
                            {indicator.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Growth Chart */}
            <div className="mt-12 p-8 rounded-2xl bg-base-200/60 border border-base-300">
                <h3 className="text-xl font-bold mb-6">{t.growth.title}</h3>
                <div className="flex flex-col md:flex-row items-end justify-between gap-6">
                    {t.growth.years.map((year) => (
                        <div key={year.year} className="flex-1 text-center">
                            <div
                                className="w-full bg-gradient-to-t from-[rgb(223,126,60)]/20 to-[rgb(223,126,60)]/5 rounded-t-lg mb-3"
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
                <p className="text-center mt-6 text-base-content/70">
                    {t.growth.description}
                </p>
            </div>
        </section>
    );
}

/* ======================================================
   COMPANY PROFILE
====================================================== */

function CompanyProfile({ t }) {
    return (
        <section className="space-y-16">
            <header className="space-y-3">
                <h2 className="text-3xl font-bold">{t.title}</h2>
                <p className="text-base-content/70 max-w-3xl">
                    {t.description}
                </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-base-200/60 border border-base-300">
                        <h3 className="font-bold text-xl mb-4">
                            {t.sections.companyInfo.title}
                        </h3>
                        <div className="space-y-3">
                            {t.sections.companyInfo.items.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-2 h-2 rounded-full bg-[rgb(223,126,60)]"></div>
                                    <span className="text-base-content/70">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-base-200/60 border border-base-300">
                        <h3 className="font-bold text-xl mb-4">
                            {t.sections.expertise.title}
                        </h3>
                        <div className="space-y-3">
                            {t.sections.expertise.items.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-2 h-2 rounded-full bg-[rgb(223,126,60)]"></div>
                                    <span className="text-base-content/70">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-base-200/60 border border-base-300">
                        <h3 className="font-bold text-xl mb-4">
                            {t.sections.products.title}
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            {t.sections.products.items.map((product, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2"
                                >
                                    <svg
                                        className="w-4 h-4 text-[rgb(223,126,60)]"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-sm text-base-content/70">
                                        {product}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-base-200/60 border border-base-300">
                        <h3 className="font-bold text-xl mb-4">
                            {t.sections.values.title}
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {t.sections.values.items.map((value) => (
                                <div
                                    key={value.title}
                                    className="text-center p-4 rounded-lg bg-base-200/40"
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
   TRANSLATIONS
====================================================== */

const TRANSLATIONS = {
    fr: {
        pageTitle: "Oxyde de Zinc (ZnO) - Expertise Industrielle",
        pageSubtitle:
            "Cette page présente les données techniques, industrielles et économiques essentielles liées à l'oxyde de zinc (ZnO), reflétant l'approche Samy Business : rigueur, traçabilité et fiabilité à long terme.",
        companyInfo: {
            year: "Depuis 2007",
            employees: "15 collaborateurs",
            capital: "250M DA de capital",
        },
        ctaButton: "Demander un devis",
        tabs: {
            specs: "Propriétés chimiques",
            manufacturing: "Fabrication",
            applications: "Applications",
            market: "Marché & tendances",
            company: "Samy Business",
        },
        specs: {
            title: "Propriétés physico-chimiques",
            description:
                "Ces propriétés constituent la base des décisions de formulation, de sélection matière et de contrôle qualité dans des environnements industriels exigeants.",
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
            title: "Procédés de fabrication",
            description:
                "Le procédé de fabrication influence directement la performance, la constance des lots et l'adéquation du ZnO aux applications finales.",
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
            title: "Applications industrielles",
            description:
                "L'oxyde de zinc est utilisé pour ses propriétés fonctionnelles dans des secteurs où la conformité réglementaire et la répétabilité sont critiques.",
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
            title: "Marché & tendances économiques",
            description:
                "Indicateurs clés permettant d'anticiper les risques économiques et d'optimiser les décisions d'achat stratégiques.",
            indicators: [
                {
                    title: "Indexation des prix",
                    description:
                        "Prix corrélé au cours LME Zinc avec prime qualité selon pureté et granulométrie",
                },
                {
                    title: "Volatilité du marché",
                    description:
                        "Gestion proactive via stratégies de couverture et contrats à terme",
                },
                {
                    title: "Croissance du Nano-ZnO",
                    description:
                        "Taux de croissance annuel > 8% grâce aux applications high-tech",
                },
            ],
            growth: {
                title: "Évolution du Chiffre d'Affaires Samy Business",
                description:
                    "Croissance moyenne de 50% par an grâce à l'expertise métier et au développement stratégique",
                years: [
                    { year: "2020", value: "872 KDA", height: 60 },
                    { year: "2021", value: "1.184 KDA", height: 85 },
                    { year: "2022", value: "1.977 KDA", height: 140 },
                ],
            },
        },
        company: {
            title: "Samy Business - Expertise Métallurgique",
            description:
                "Leader dans l'import-export de produits sidérurgiques avec plus de 15 ans d'expertise et un engagement fort pour le développement industriel algérien.",
            sections: {
                companyInfo: {
                    title: "Présentation de la Société",
                    items: [
                        "Création en 2007 sous forme EURL",
                        "Capital social de 250.000.000,00 DA",
                        "15 collaborateurs spécialisés",
                        "Siège à Alger (Said Hamdine)",
                        "Dirigeant : Mr. Rabah BOURRAI",
                    ],
                },
                expertise: {
                    title: "Expertise & Savoir-faire",
                    items: [
                        "Plus de 15 ans d'expérience dans les métaux ferreux et non-ferreux",
                        "Maîtrise complète de la chaîne logistique d'import-export",
                        "Partenariats avec fournisseurs européens reconnus",
                        "Produits cotés LME (London Metal Exchange)",
                        "Conformité aux normes européennes",
                    ],
                },
                products: {
                    title: "Gamme de Produits",
                    items: [
                        "Oxyde de Zinc",
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
                    title: "Valeurs de l'Entreprise",
                    items: [
                        {
                            title: "Mission",
                            description:
                                "Satisfaction client, qualité produit et fiabilité totale",
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
            title: "Prêt à passer à l'action ?",
            description:
                "Contactez-nous pour discuter de vos besoins spécifiques en oxyde de zinc ou tout autre produit sidérurgique. Notre équipe d'experts est à votre disposition pour vous conseiller.",
            button: "Demander un devis personnalisé",
        },
    },
    en: {
        pageTitle: "Zinc Oxide (ZnO) - Industrial Expertise",
        pageSubtitle:
            "This page presents essential technical, industrial, and economic data related to zinc oxide (ZnO), reflecting the Samy Business approach: rigor, traceability, and long-term reliability.",
        companyInfo: {
            year: "Since 2007",
            employees: "15 employees",
            capital: "250M DA capital",
        },
        ctaButton: "Request a Quote",
        tabs: {
            specs: "Chemical Properties",
            manufacturing: "Manufacturing",
            applications: "Applications",
            market: "Market & Trends",
            company: "Samy Business",
        },
        // Add English translations similarly...
        bottomCta: {
            title: "Ready to take action?",
            description:
                "Contact us to discuss your specific zinc oxide or other steel product needs. Our team of experts is available to advise you.",
            button: "Request a Custom Quote",
        },
    },
    ar: {
        pageTitle: "أكسيد الزنك (ZnO) - الخبرة الصناعية",
        pageSubtitle:
            "تعرض هذه الصفحة البيانات الفنية والصناعية والاقتصادية الأساسية المتعلقة بأكسيد الزنك (ZnO)، مما يعكس نهج Samy Business: الدقة، إمكانية التتبع والموثوقية على المدى الطويل.",
        companyInfo: {
            year: "منذ 2007",
            employees: "15 موظف",
            capital: "250 مليون دينار رأسمال",
        },
        ctaButton: "طلب عرض سعر",
        tabs: {
            specs: "الخصائص الكيميائية",
            manufacturing: "التصنيع",
            applications: "التطبيقات",
            market: "السوق والاتجاهات",
            company: "Samy Business",
        },
        // Add Arabic translations similarly...
        bottomCta: {
            title: "مستعد للتحرك؟",
            description:
                "اتصل بنا لمناقشة احتياجاتك الخاصة من أكسيد الزنك أو أي منتج فولاذي آخر. فريق خبرائنا متاح لتقديم المشورة لك.",
            button: "طلب عرض سعر مخصص",
        },
    },
};
