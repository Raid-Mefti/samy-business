"use client";

export default function ManufacturingProcess() {
    const processes = [
        {
            name: "Procédé Français (Indirect)",
            market: "58% du marché",
            icon: "🔵",
            principle:
                "Fusion du zinc métal → Vaporisation → Oxydation à l'air",
            material: "Zinc métal pur (99.995%)",
            quality: "99.5% – 99.9% pureté",
            applications: "Pharma, Cosmétique, Caoutchouc haute performance",
            advantage: "Contrôle précis de la pureté et de la granulométrie",
        },
        {
            name: "Procédé Américain (Direct)",
            market: "Industrie lourde",
            icon: "🟠",
            principle: "Réduction du minerai → Réoxydation immédiate",
            material: "Minerais et concentrés",
            quality: "Pureté variable (< 99%)",
            applications: "Caoutchouc standard, Céramiques, Peintures",
            advantage: "Coût de production optimisé",
        },
        {
            name: "Procédé Chimique (Voie Humide)",
            market: "Applications spécialisées",
            icon: "🟢",
            principle: "Précipitation chimique → Calcination",
            material: "Solutions purifiées",
            quality: "Surface spécifique très élevée",
            applications: "Nano-ZnO, Catalyse, chimie fine",
            advantage: "Contrôle nanométrique des particules",
        },
    ];

    return (
        <section className="space-y-10">
            <header className="max-w-2xl">
                <h2 className="text-3xl font-extrabold text-base-content mb-3">
                    Procédés de fabrication
                </h2>
                <p className="text-base-content/70">
                    Les principales méthodes industrielles de production de
                    l’oxyde de zinc et leurs domaines d’excellence.
                </p>
            </header>

            <div className="grid gap-8">
                {processes.map((p, i) => (
                    <div
                        key={i}
                        className="relative rounded-3xl border border-base-200 bg-base-100 p-8 shadow-sm hover:shadow-md transition"
                    >
                        {/* Accent */}
                        <span className="absolute left-0 top-8 h-12 w-1 rounded-full bg-[rgb(223,126,60)]" />

                        <div className="flex items-start gap-4 mb-6">
                            <span className="text-3xl">{p.icon}</span>
                            <div>
                                <h3 className="text-xl font-bold text-base-content">
                                    {p.name}
                                </h3>
                                <p className="text-sm text-base-content/60">
                                    {p.market}
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5 text-sm">
                            <Info label="Principe" value={p.principle} />
                            <Info label="Matière première" value={p.material} />
                            <Info label="Qualité obtenue" value={p.quality} />
                            <Info label="Applications" value={p.applications} />
                        </div>

                        <p className="mt-6 text-sm font-semibold text-[rgb(223,126,60)]">
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
            <p className="font-semibold text-base-content mb-1">{label}</p>
            <p className="text-base-content/70">{value}</p>
        </div>
    );
}
