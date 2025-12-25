"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ======================================================
   PAGE
====================================================== */

export default function ZincOxidePage() {
    const [activeTab, setActiveTab] = useState("specs");

    const tabs = [
        { id: "specs", label: "Propriétés chimiques" },
        { id: "manufacturing", label: "Fabrication" },
        { id: "applications", label: "Applications" },
        { id: "market", label: "Marché & tendances" },
    ];

    return (
        <>
            <Header />

            <main className="bg-base-100 text-base-content">
                <section className="max-w-6xl mx-auto px-6 pt-32 pb-28 space-y-24">
                    {/* Page header */}
                    <header className="text-center space-y-6">
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[rgb(223,126,60)]">
                            Oxyde de Zinc (ZnO)
                        </h1>
                        <p className="text-lg text-base-content/70 max-w-2xl mx-auto leading-relaxed">
                            Cette page rassemble les données techniques,
                            industrielles et économiques essentielles liées à
                            l’oxyde de zinc (ZnO), telles qu’utilisées par les
                            industriels, formulateurs et acheteurs
                            professionnels. Elle reflète l’approche Samy
                            Business : rigueur, traçabilité et fiabilité à long
                            terme.
                        </p>
                    </header>

                    {/* PDF – secondary action */}
                    <div className="flex justify-center">
                        <PDFExport />
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                                    activeTab === tab.id
                                        ? "bg-[rgb(223,126,60)] text-[rgb(223,126,60)]-content border-[rgb(223,126,60)] shadow-sm"
                                        : "bg-base-200/60 border-base-300 hover:border-[rgb(223,126,60)] hover:text-[rgb(223,126,60)]"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="rounded-3xl bg-base-200/40 border border-base-300 p-10 md:p-14 shadow-sm space-y-24">
                        {activeTab === "specs" && <TechnicalSpecs />}
                        {activeTab === "manufacturing" && (
                            <ManufacturingProcess />
                        )}
                        {activeTab === "applications" && (
                            <ApplicationsByIndustry />
                        )}
                        {activeTab === "market" && <MarketAnalysis />}
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

function TechnicalSpecs() {
    const properties = [
        ["Nom chimique", "Oxyde de Zinc"],
        ["Formule", "ZnO"],
        ["CAS", "1314-13-2"],
        ["Apparence", "Poudre blanche"],
        ["Masse molaire", "81.38 g/mol"],
        ["Point de fusion", "1975 °C"],
        ["Densité", "5.61 g/cm³"],
        ["Band gap", "~3.37 eV"],
    ];

    return (
        <section className="space-y-14">
            <header className="space-y-3">
                <h2 className="text-3xl font-bold">
                    Propriétés physico-chimiques
                </h2>
                <p className="text-base-content/70 max-w-xl">
                    Ces propriétés constituent la base des décisions de
                    formulation, de sélection matière et de contrôle qualité
                    dans des environnements industriels exigeants.
                </p>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
                {properties.map(([label, value]) => (
                    <div
                        key={label}
                        className="rounded-2xl bg-base-200/60 border border-base-300 p-6 shadow-sm"
                    >
                        <p className="text-sm uppercase tracking-wide text-base-content/50">
                            {label}
                        </p>
                        <p className="mt-1 font-semibold text-lg">{value}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ======================================================
   MANUFACTURING
====================================================== */

function ManufacturingProcess() {
    const processes = [
        {
            name: "Procédé Français (Indirect)",
            market: "≈ 58% du marché mondial",
            principle:
                "Fusion du zinc métal → Vaporisation → Oxydation contrôlée",
            material: "Zinc métal pur (99.995%)",
            quality: "99.5% – 99.9%",
            applications: "Pharmacie, cosmétique, caoutchouc technique",
            advantage:
                "Excellente maîtrise de la pureté et de la granulométrie",
        },
        {
            name: "Procédé Américain (Direct)",
            market: "Industrie lourde",
            principle:
                "Réduction du minerai suivie d’une réoxydation immédiate",
            material: "Minerais et concentrés",
            quality: "< 99%",
            applications: "Caoutchouc standard, céramique, peintures",
            advantage: "Optimisation des coûts de production",
        },
        {
            name: "Procédé Chimique (Voie humide)",
            market: "Applications spécialisées",
            principle: "Précipitation chimique puis calcination",
            material: "Solutions de sels purifiés",
            quality: "Surface spécifique élevée",
            applications: "Nano-ZnO, catalyse, chimie fine",
            advantage: "Contrôle précis des tailles de particules",
        },
    ];

    return (
        <section className="space-y-16">
            <header className="space-y-3">
                <h2 className="text-3xl font-bold">Procédés de fabrication</h2>
                <p className="text-base-content/70 max-w-xl">
                    Le procédé de fabrication influence directement la
                    performance, la constance des lots et l’adéquation du ZnO
                    aux applications finales.
                </p>
            </header>

            <div className="grid gap-10">
                {processes.map((p) => (
                    <div
                        key={p.name}
                        className="relative rounded-3xl bg-base-200/60 border border-base-300 p-10 shadow-sm"
                    >
                        <span className="absolute left-0 top-10 h-14 w-1 rounded-full bg-[rgb(223,126,60)]" />

                        <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                        <p className="text-sm text-base-content/60 mb-8">
                            {p.market}
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 text-sm">
                            <Info label="Principe" value={p.principle} />
                            <Info label="Matière première" value={p.material} />
                            <Info label="Qualité obtenue" value={p.quality} />
                            <Info label="Applications" value={p.applications} />
                        </div>

                        <p className="mt-8 font-semibold text-[rgb(223,126,60)]">
                            ✓ {p.advantage}
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

function ApplicationsByIndustry() {
    const industries = [
        "Caoutchouc & pneumatique",
        "Céramique technique",
        "Pharmaceutique & cosmétique",
        "Peintures & revêtements",
    ];

    return (
        <section className="space-y-12">
            <header className="space-y-3">
                <h2 className="text-3xl font-bold">Applications</h2>
                <p className="text-base-content/70 max-w-xl">
                    L’oxyde de zinc est utilisé pour ses propriétés
                    fonctionnelles dans des secteurs où la conformité
                    réglementaire et la répétabilité sont critiques.
                </p>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
                {industries.map((i) => (
                    <div
                        key={i}
                        className="rounded-2xl bg-base-200/60 border border-base-300 p-8 shadow-sm"
                    >
                        {i}
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ======================================================
   MARKET
====================================================== */

function MarketAnalysis() {
    const items = [
        ["Indexation", "Prix corrélé au LME Zinc"],
        ["Volatilité", "Gestion via stratégies de couverture"],
        ["Nano-ZnO", "Croissance annuelle estimée > 8%"],
    ];

    return (
        <section className="space-y-14">
            <header className="space-y-3">
                <h2 className="text-3xl font-bold">Marché & tendances</h2>
                <p className="text-base-content/70 max-w-xl">
                    Indicateurs clés permettant d’anticiper les risques
                    économiques et d’optimiser les décisions d’achat.
                </p>
            </header>

            <div className="grid md:grid-cols-3 gap-6">
                {items.map(([k, v]) => (
                    <div
                        key={k}
                        className="rounded-2xl bg-base-200/60 border border-base-300 p-8 shadow-sm"
                    >
                        <p className="font-semibold text-lg">{k}</p>
                        <p className="mt-2 text-sm text-base-content/70">{v}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ======================================================
   PDF
====================================================== */

function PDFExport() {
    const handlePDFExport = async () => {
        const response = await fetch("/api/generate-pdf", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: "Documentation Oxyde de Zinc",
            }),
        });

        if (!response.ok) return;

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Documentation_Oxyde_de_Zinc_2025.pdf";
        link.click();
    };

    return (
        <button
            onClick={handlePDFExport}
            className="text-sm px-6 py-2 rounded-full border border-base-300 text-base-content/70 hover:text-[rgb(223,126,60)] hover:border-[rgb(223,126,60)] transition"
        >
            📄 Télécharger la documentation PDF
        </button>
    );
}
