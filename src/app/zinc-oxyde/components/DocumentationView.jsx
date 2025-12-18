"use client";

import { useState } from "react";
import TechnicalSpecs from "./TechnicalSpecs";
import ManufacturingProcess from "./ManufacturingProcess";
import ApplicationsByIndustry from "./ApplicationsByIndustry";
import MarketAnalysis from "./MarketAnalysis";
import PDFExport from "./PDFExport";

export default function DocumentationView() {
    const [activeTab, setActiveTab] = useState("specs");

    const tabs = [
        { id: "specs", label: "Propriétés chimiques" },
        { id: "manufacturing", label: "Fabrication" },
        { id: "applications", label: "Applications" },
        { id: "market", label: "Marché & tendances" },
    ];

    return (
        <section className="py-20 bg-base-100">
            <div className="h-28"></div>
            <div className="max-w-6xl mx-auto px-4 space-y-12">
                {/* Header */}
                <header className="text-center">
                    <h1 className="text-5xl font-extrabold text-base-content mb-4">
                        Oxyde de Zinc (ZnO)
                    </h1>
                    <p className="text-base-content/70 max-w-2xl mx-auto">
                        Documentation technique et industrielle destinée aux
                        professionnels.
                    </p>
                </header>

                <div className="flex justify-center">
                    <PDFExport />
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold border transition ${
                                activeTab === tab.id
                                    ? "bg-[rgb(223,126,60)] text-white border-[rgb(223,126,60)]"
                                    : "bg-base-100 border-base-300 text-base-content hover:border-[rgb(223,126,60)]"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="rounded-3xl border border-base-200 bg-base-100 p-8 md:p-12 shadow-sm">
                    {activeTab === "specs" && <TechnicalSpecs />}
                    {activeTab === "manufacturing" && <ManufacturingProcess />}
                    {activeTab === "applications" && <ApplicationsByIndustry />}
                    {activeTab === "market" && <MarketAnalysis />}
                </div>
            </div>
        </section>
    );
}
