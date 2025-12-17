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
    { id: "specs", label: "Propriétés Chimiques", icon: "⚗️" },
    { id: "manufacturing", label: "Procédés de Fabrication", icon: "🏭" },
    { id: "applications", label: "Applications par Secteur", icon: "🚗" },
    { id: "market", label: "Marché & Tendances", icon: "📊" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "specs":
        return <TechnicalSpecs />;
      case "manufacturing":
        return <ManufacturingProcess />;
      case "applications":
        return <ApplicationsByIndustry />;
      case "market":
        return <MarketAnalysis />;
      default:
        return <TechnicalSpecs />;
    }
  };

  return (
    <div className="min-h-screen p-6 md:p-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-sky-400 mb-4">
            OXYDE DE ZINC
          </h1>
          <p className="text-xl text-slate-300 mb-2">
            Documentation Technique & Stratégique Complète
          </p>
          <p className="text-sm text-slate-400">Samy Business - 2025</p>
        </div>

        {/* PDF Export Button */}
        <div className="flex justify-center mb-8">
          <PDFExport />
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex flex-wrap gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-sky-500 text-white shadow-lg shadow-sky-500/50"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
