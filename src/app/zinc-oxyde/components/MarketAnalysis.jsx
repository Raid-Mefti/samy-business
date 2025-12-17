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
        {
            label: "Classification",
            value: "Toxique organismes aquatiques (H410)",
        },
        {
            label: "Gestion",
            value: "Précautions manipulation (éviter poussières)",
        },
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
        <div className="space-y-16 p-6 md:p-12 max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-4">
                <h2 className="text-5xl font-extrabold text-[rgb(223,126,60)]">
                    Analyse du Marché & Tendances 2025
                </h2>
                <p className="text-base-content/70 text-lg">
                    Contexte économique pour la prise de décision stratégique.
                </p>
            </div>

            {/* Price Dynamics */}
            <div>
                <h3 className="text-3xl font-bold text-sky-400 mb-6">
                    Dynamique des Prix
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {priceData.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            <p className="text-sky-400 font-semibold mb-2 text-lg">
                                {item.metric}
                            </p>
                            <p className="text-base-content text-sm">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Nano-ZnO Market */}
            <div>
                <h3 className="text-3xl font-bold text-purple-400 mb-6">
                    Segment Nano-ZnO (Forte Croissance)
                </h3>
                <div className="bg-base-100 border border-purple-300 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-purple-400 font-bold mb-4 text-lg">
                                Données Marché
                            </h4>
                            <div className="space-y-4">
                                {nanoMarket.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="hover:translate-x-1 transition-all duration-200"
                                    >
                                        <p className="text-purple-400 font-semibold text-sm">
                                            {item.label}
                                        </p>
                                        <p className="text-base-content">
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-purple-400 font-bold mb-4 text-lg">
                                Applications Futures
                            </h4>
                            <ul className="space-y-3 text-base-content">
                                <li className="flex gap-3 items-start">
                                    <span className="text-purple-400 text-xl">
                                        •
                                    </span>
                                    Électronique flexible et transparente
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-purple-400 text-xl">
                                        •
                                    </span>
                                    Textiles intelligents (antibactériens)
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-purple-400 text-xl">
                                        •
                                    </span>
                                    Emballages alimentaires actifs
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Regulations */}
            <div>
                <h3 className="text-3xl font-bold text-orange-400 mb-6">
                    Contraintes Réglementaires (REACH)
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {regulations.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-base-100 border border-orange-300 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            <p className="text-orange-400 font-semibold mb-2">
                                {item.label}
                            </p>
                            <p className="text-base-content text-sm">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Technical Specs */}
            <div>
                <h3 className="text-3xl font-bold text-sky-400 mb-6">
                    Spécifications Techniques Types (Grades Importés)
                </h3>
                <div className="space-y-6">
                    {specs.map((spec, idx) => (
                        <div
                            key={idx}
                            className="bg-base-100 border border-base-300 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            <h4 className="text-sky-400 font-bold mb-6 text-lg">
                                {spec.category}
                            </h4>
                            <div className="grid md:grid-cols-3 gap-6">
                                {spec.specs.map((s, sIdx) => (
                                    <div
                                        key={sIdx}
                                        className="hover:scale-105 transition-transform duration-200"
                                    >
                                        <p className="text-base-content/50 text-xs uppercase tracking-wider">
                                            {s.param}
                                        </p>
                                        <p className="text-base-content font-semibold mt-1">
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
