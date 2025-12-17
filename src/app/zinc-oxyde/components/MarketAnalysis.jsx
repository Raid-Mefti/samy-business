"use client";

export default function MarketAnalysis() {
  const priceData = [
    {
      metric: "Corrélation LME",
      value: "Prix indexé sur Zinc Métal (London Metal Exchange)",
    },
    {
      metric: "Prime de Transformation",
      value: "Prix LME + Coûts énergie + Main d'œuvre",
    },
    {
      metric: "Volatilité",
      value: "Facteur de risque majeur (nécessite hedging)",
    },
  ];

  const nanoMarket = [
    { label: "Définition", value: "Particules < 100 nm" },
    { label: "Croissance", value: "> 8% par an" },
    { label: "Marché 2024", value: "~USD 500-600 millions" },
    { label: "Projection 2034", value: "~USD 1.5-2 milliards" },
  ];

  const regulations = [
    { label: "Classification", value: "Toxique organismes aquatiques (H410)" },
    { label: "Gestion", value: "Précautions manipulation (éviter poussières)" },
    { label: "Tendance", value: 'Vers ZnO "actifs" (dosages réduits)' },
  ];

  const specs = [
    {
      category: "Caoutchouc/Pneu (Standard)",
      specs: [
        { param: "Pureté ZnO", value: "99.5% - 99.7%" },
        { param: "Plomb (Pb)", value: "0.002% - 0.005%" },
        { param: "Cadmium (Cd)", value: "0.001%" },
      ],
    },
    {
      category: "Céramique",
      specs: [
        { param: "Pureté ZnO", value: "99.0% - 99.5%" },
        { param: "Plomb (Pb)", value: "0.05% - 0.15%" },
        { param: "Fer (Fe)", value: "0.01%" },
      ],
    },
    {
      category: "Pharma/Cosmétique (BP/USP)",
      specs: [
        { param: "Pureté ZnO", value: "99.9% min" },
        { param: "Plomb (Pb)", value: "< 0.001% (10 ppm)" },
        { param: "Cadmium (Cd)", value: "< 0.0005% (5 ppm)" },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-sky-400 mb-4">
          Analyse du Marché & Tendances 2025
        </h2>
        <p className="text-slate-300 text-lg">
          Contexte économique pour la prise de décision stratégique.
        </p>
      </div>

      {/* Dynamique des Prix */}
      <div>
        <h3 className="text-2xl font-bold text-sky-300 mb-4">
          Dynamique des Prix
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {priceData.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-700/50 border border-slate-600 rounded-lg p-4"
            >
              <p className="text-sky-300 font-semibold mb-2">{item.metric}</p>
              <p className="text-slate-200 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Nano-ZnO Market */}
      <div>
        <h3 className="text-2xl font-bold text-sky-300 mb-4">
          Segment Nano-ZnO (Forte Croissance)
        </h3>
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-purple-300 font-bold mb-4">Données Marché</h4>
              <div className="space-y-3">
                {nanoMarket.map((item, idx) => (
                  <div key={idx}>
                    <p className="text-sky-300 text-sm font-semibold">
                      {item.label}
                    </p>
                    <p className="text-slate-200">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-purple-300 font-bold mb-4">
                Applications Futures
              </h4>
              <ul className="space-y-2 text-slate-200">
                <li className="flex gap-2">
                  <span className="text-purple-400">•</span>
                  Électronique flexible et transparente
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400">•</span>
                  Textiles intelligents (antibactériens)
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400">•</span>
                  Emballages alimentaires actifs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Regulations */}
      <div>
        <h3 className="text-2xl font-bold text-sky-300 mb-4">
          Contraintes Réglementaires (REACH)
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {regulations.map((item, idx) => (
            <div
              key={idx}
              className="bg-orange-500/10 border border-orange-400/30 rounded-lg p-4"
            >
              <p className="text-orange-300 font-semibold mb-2">{item.label}</p>
              <p className="text-slate-200 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Specs */}
      <div>
        <h3 className="text-2xl font-bold text-sky-300 mb-4">
          Spécifications Techniques Types (Grades Importés)
        </h3>
        <div className="space-y-4">
          {specs.map((spec, idx) => (
            <div
              key={idx}
              className="bg-slate-700/30 border border-slate-600 rounded-lg p-6"
            >
              <h4 className="text-sky-300 font-bold mb-4">{spec.category}</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {spec.specs.map((s, sIdx) => (
                  <div key={sIdx}>
                    <p className="text-slate-400 text-xs uppercase tracking-wider">
                      {s.param}
                    </p>
                    <p className="text-slate-100 font-semibold mt-1">
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
