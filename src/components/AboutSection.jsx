"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
    const { language } = useLanguage();

    const translations = {
        fr: {
            title: "About samy business!",
            description:
                "Basée à Alger et créée en 2007, Samy Business est une EURL (Entreprise Unipersonnelle à Responsabilité Limitée) algérienne spécialisée dans l'importation de produits sidérurgiques, ferreux et non-ferreux, destinés à la transformation et à la fabrication. Dirigée par son gérant unique, M. Rabah BOURRAI, l'entreprise a vu son chiffre d'affaires augmenter de manière significative ces dernières années, atteignant 1 977 000 KDA en 2022. Avec une équipe d'une quinzaine d'employés, Samy Business se positionne comme un acteur clé du marché local, misant sur la qualité, la fiabilité et l'innovation pour satisfaire ses clients.",
            button: "Plus d'infos",
        },
        en: {
            title: "About Samy Business!",
            description:
                "Based in Algiers and founded in 2007, Samy Business is an Algerian EURL (Single-Person Limited Liability Company) specialized in importing ferrous and non-ferrous steel products for transformation and manufacturing. Led by its sole manager, Mr. Rabah BOURRAI, the company has seen its turnover increase significantly in recent years, reaching 1,977,000 KDA in 2022. With a team of about fifteen employees, Samy Business positions itself as a key player in the local market, relying on quality, reliability and innovation to satisfy its customers.",
            button: "More info",
        },
    };

    const t = translations[language];

    return (
        <div className="hero bg-base-100 h-96 mt-12 mb-12 text-base-content">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex flex-col justify-center  items-center">
                    <h1 className="text-6xl font-bold">{t.title}</h1>
                    <p className="py-6 text-2xl">{t.description}</p>
                    <button className="btn btn-primary mr-0">{t.button}</button>
                </div>
            </div>
        </div>
    );
}
