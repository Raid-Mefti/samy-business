"use client";

export default function ManufacturingProcess() {
  const processes = [
    {
      name: "Procédé Français (Indirect)",
      market: "58% du marché",
      color: "from-blue-500/10 to-blue-600/10",
      icon: "🔵",
      principle: "Fusion du zinc métal → Vaporisation → Oxydation à l'air",
      material: "Zinc métal pur (99.995%)",
      quality: "99.5% - 99.9% pureté",
      applications: "Pharma, Cosmétique, Caoutchouc haute performance",
      advantage: "Contrôle précis de pureté et taille de particules",
    },
    {
      name: "Procédé Américain (Direct)",
      market: "Industrie Lourde",
      color: "from-amber-500/10 to-orange-600/10",
      icon: "🟠",
      principle: "Réduction du minerai → Réoxydation immédiate",
      material: "Minerais, concentrés, résidus",
      quality: "Pureté variable (< 99%)",
      applications: "Caoutchouc standard, Céramiques, Peintures",
      advantage: "Coût de production plus faible",
    },
    {
      name: "Procédé Chimique (Voie Humide)",
      market: "Spécialités",
      color: "from-green-500/10 to-emerald-600/10",
      icon: "🟢",
      principle: "Précipitation de sels → Calcination",
      material: "Solutions de sels, résidus purifiés",
      quality: "Surface spécifique très élevée",
      applications: "Nano-ZnO, Catalyseurs, Désulfuration",
      advantage: "Production de particules nanométriques",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-sky-400 mb-4">
          Procédés de Fabrication Industriels
        </h2>
        <p className="text-slate-300 text-lg">
          Comparatif des trois méthodes dominantes sur le marché mondial en
          2025.
        </p>
      </div>

      <div className="grid gap-6">
        {processes.map((process, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${process.color} border border-slate-600 rounded-xl p-6 md:p-8 hover:border-sky-400/50 transition`}
          >
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">{process.icon}</span>
              <div>
                <h3 className="text-2xl font-bold text-sky-300">
                  {process.name}
                </h3>
                <p className="text-slate-400 text-sm mt-1">{process.market}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-sm md:text-base">
              <div>
                <p className="text-sky-300 font-semibold mb-2">Principe</p>
                <p className="text-slate-300">{process.principle}</p>
              </div>
              <div>
                <p className="text-sky-300 font-semibold mb-2">
                  Matière Première
                </p>
                <p className="text-slate-300">{process.material}</p>
              </div>
              <div>
                <p className="text-sky-300 font-semibold mb-2">
                  Qualité Obtenue
                </p>
                <p className="text-slate-300">{process.quality}</p>
              </div>
              <div>
                <p className="text-sky-300 font-semibold mb-2">
                  Applications Cibles
                </p>
                <p className="text-slate-300">{process.applications}</p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-600">
              <p className="text-sky-200 font-semibold">
                ✓ {process.advantage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
