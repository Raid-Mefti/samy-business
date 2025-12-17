"use client";

export default function TechnicalSpecs() {
  const properties = [
    { label: "Nom Chimique", value: "Oxyde de Zinc" },
    { label: "Formule", value: "ZnO" },
    { label: "CAS Number", value: "1314-13-2" },
    { label: "Apparence", value: "Poudre blanche inodore" },
    { label: "Masse Molaire", value: "81.38 g/mol" },
    { label: "Point de Fusion", value: "1975 °C" },
    { label: "Densité", value: "5.61 g/cm³" },
    { label: "Indice de Réfraction", value: "2.00 - 2.02" },
    { label: "Band Gap", value: "~3.37 eV" },
  ];

  const uniqueProperties = [
    {
      title: "Piézoélectricité",
      desc: "Génère une charge électrique sous contrainte mécanique (capteurs)",
    },
    {
      title: "Antibactérien",
      desc: "Action inhibitrice sur les micro-organismes (médical, emballages)",
    },
    {
      title: "Bloqueur UV",
      desc: "Absorbe efficacement les rayons ultraviolets UVA et UVB",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Section Title */}
      <div>
        <h2 className="text-3xl font-bold text-sky-400 mb-4">
          Fiche Technique & Propriétés Physico-Chimiques
        </h2>
        <p className="text-slate-300 text-lg">
          Caractéristiques fondamentales du ZnO essentielles pour les
          responsables techniques et ingénieurs qualité.
        </p>
      </div>

      {/* Identification */}
      <div>
        <h3 className="text-2xl font-bold text-sky-300 mb-4">Identification</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {properties.slice(0, 4).map((prop, idx) => (
            <div
              key={idx}
              className="bg-slate-700/50 border border-slate-600 rounded-lg p-4"
            >
              <p className="text-sky-300 font-semibold">{prop.label}</p>
              <p className="text-slate-100 text-lg mt-2">{prop.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Physical Properties */}
      <div>
        <h3 className="text-2xl font-bold text-sky-300 mb-4">
          Propriétés Physiques
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="bg-slate-700 text-sky-300">
                <th className="px-4 py-3 text-left font-semibold">Propriété</th>
                <th className="px-4 py-3 text-left font-semibold">
                  Valeur / Description
                </th>
                <th className="px-4 py-3 text-left font-semibold">
                  Impact Industriel
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-600">
              {properties.slice(4).map((prop, idx) => (
                <tr key={idx} className="hover:bg-slate-700/30 transition">
                  <td className="px-4 py-3 text-sky-300 font-semibold">
                    {prop.label}
                  </td>
                  <td className="px-4 py-3 text-slate-100">{prop.value}</td>
                  <td className="px-4 py-3 text-slate-300">
                    {idx === 0 && "Haute stabilité thermique"}
                    {idx === 1 && "Densité élevée comparée aux charges"}
                    {idx === 2 && "Opacité et blancheur exceptionnelles"}
                    {idx === 3 && "Stable dans les formulations aqueuses"}
                    {idx === 4 && "Caractère amphotère"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Unique Properties */}
      <div>
        <h3 className="text-2xl font-bold text-sky-300 mb-4">
          Propriétés Uniques
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {uniqueProperties.map((prop, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-sky-400/30 rounded-lg p-6"
            >
              <h4 className="text-sky-300 font-bold text-lg mb-2">
                {prop.title}
              </h4>
              <p className="text-slate-300">{prop.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
