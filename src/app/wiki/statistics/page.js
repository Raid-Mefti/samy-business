"use client";
import React, { useState, useRef, useEffect } from "react";
import StatisticsHero from "@/components/StatisticsHero";
import Header from "@/components/Header";

// --- 1. Content Data Structure (FULL 9 PAGES EXTRACTED, INCLUDING ALL REFERENCES) ---
// Note: Citations (e.g., ¹, ³, ¹⁷) are preserved in the text content.
const reportContent = [
    {
        type: "title",
        level: 1,
        text: "Rapport d'Analyse Stratégique : Marché de l'Oxyde de Zinc (ZnO) – Fabrication, Commerce International et Potentiel en Algérie",
        id: "main-title",
    },

    {
        type: "heading",
        level: 2,
        text: "I. Synthèse Exécutive et Moteurs Macroéconomiques (Analyse Globale du ZnO)",
        id: "synthesis",
    },
    {
        type: "paragraph",
        text: "L'oxyde de zinc (ZnO), code du Système Harmonisé (SH) 2817.00¹, est un composé inorganique essentiel à l'industrie mondiale, agissant comme activateur de vulcanisation dans le caoutchouc, filtre UV dans les cosmétiques, et additif dans les céramiques et l'électronique. Le marché mondial affiche une trajectoire de croissance soutenue, principalement tirée par l'industrialisation en Asie-Pacifique et l'évolution des applications de spécialité.",
    },

    {
        type: "heading",
        level: 3,
        text: "1.1. Taille et Projections de Croissance du Marché Mondial",
        id: "global-market-size",
    },
    {
        type: "paragraph",
        text: "En 2023, la taille du marché mondial de l'oxyde de zinc était évaluée entre **4,18 milliards USD³** et **5,40 milliards USD⁴**, ce qui témoigne d'une valeur marchande significative pour ce produit chimique de base. Les projections indiquent une expansion robuste. Le marché devrait atteindre entre **6,82 milliards $USD³** et **9,66 milliards USD⁴** d'ici 2032.",
    },
    {
        type: "paragraph",
        text: "Le Taux de Croissance Annuel Composé (TCAC) prévu pour l'oxyde de zinc se situe de manière consistante dans une fourchette élevée, avec des estimations allant d'environ **5,6% à 5,8%** pour la période 2024-2032/2035³. En termes de volume, les prévisions de croissance sont également positives, notamment pour les utilisations liées au secteur automobile (pneus) et les applications liées aux revêtements.",
    },

    {
        type: "heading",
        level: 3,
        text: "1.2. Segmentation du Marché par Procédé de Fabrication",
        id: "segmentation-process",
    },
    {
        type: "paragraph",
        text: "La production de l'oxyde de zinc est dominée par deux méthodes principales, qui se distinguent par la pureté et le coût final du produit :",
    },
    {
        type: "list",
        items: [
            "**Procédé Français (indirect)** : Le plus utilisé (environ 80% de la production mondiale⁵). Il produit un ZnO de haute pureté, idéal pour les produits pharmaceutiques et les applications de niche.",
            "**Procédé Américain (direct)** : Utilise des minerais ou des résidus de zinc moins raffinés, le produit final est souvent de moindre pureté mais plus économique, et est majoritairement utilisé dans les industries du caoutchouc et des peintures.",
        ],
    },

    {
        type: "heading",
        level: 3,
        text: "1.3. Applications Sectorielles Clés",
        id: "sectorial-applications",
    },
    {
        type: "paragraph",
        text: "La demande en oxyde de zinc est fortement corrélée à la santé de plusieurs industries lourdes et de spécialité.",
    },
    {
        type: "table",
        headers: ["Secteur d'Application", "Fonction Principale du ZnO"],
        rows: [
            [
                "**Caoutchouc & Pneus**",
                "Activateur de vulcanisation (accélère le durcissement du caoutchouc)",
            ],
            [
                "**Céramiques & Verres**",
                "Modificateur de point de fusion et opacifiant",
            ],
            [
                "**Chimie & Pharmaceutique**",
                "Ingrédient dans les pommades (antiseptique), suppléments alimentaires",
            ],
            [
                "**Agriculture (Aliments pour animaux)**",
                "Complément nutritionnel (croissance, santé intestinale)",
            ],
            [
                "**Cosmétiques (Filtres UV)**",
                "Agent bloquant les rayons UVA/UVB (produits solaires)",
            ],
        ],
        caption: "Table 1: Applications Sectorielles de l'Oxyde de Zinc.",
    },

    {
        type: "heading",
        level: 2,
        text: "II. Dynamiques du Commerce International (SH 2817.00)",
        id: "international-trade",
    },
    {
        type: "paragraph",
        text: "L'analyse des flux commerciaux mondiaux sous le code SH 2817.00 (Oxyde et Peroxyde de Zinc) révèle les puissances exportatrices et les marchés demandeurs.",
    },

    {
        type: "heading",
        level: 3,
        text: "2.1. Les 5 Principaux Pays Exportateurs (2023)",
        id: "top-exporters",
    },
    {
        type: "paragraph",
        text: "En 2023, le marché des exportations d'Oxyde et Peroxyde de Zinc a atteint une valeur globale de **2,3 milliards USD¹⁵**. Les cinq principaux pays exportateurs ont dominé l'offre mondiale, reflétant la concentration de la capacité industrielle :",
    },
    {
        type: "table",
        headers: ["Pays Exportateur", "Valeur des Exportations (USD millions)"],
        rows: [
            ["**République Populaire de Chine**", "321,2"],
            ["**Allemagne**", "224,9"],
            ["**Pays-Bas**", "158,1"],
            ["**Belgique**", "134,7"],
            ["**Corée du Sud**", "129,5"],
            ["**TOTAL Top 5**", "968,4"],
        ],
        caption:
            "Table 2: Les 5 Principaux Pays Exportateurs d'Oxyde de Zinc (SH 2817.00) en 2023.",
    },
    {
        type: "paragraph",
        text: "Ces cinq pays représentent près de **42%** du marché mondial des exportations. La Chine se positionne en tête, souvent grâce à son utilisation du procédé américain et une production massive. L'Allemagne, les Pays-Bas, et la Belgique se distinguent par des exportations de produits à haute valeur ajoutée, notamment pour le secteur pharmaceutique et les applications chimiques de spécialité.",
    },

    {
        type: "heading",
        level: 3,
        text: "2.2. Les 5 Principaux Pays Importateurs (2023)",
        id: "top-importers",
    },
    {
        type: "paragraph",
        text: "Les principaux pays importateurs sont généralement des nations industrialisées ou des centres de production automobile et chimique majeurs, qui ne disposent pas d'une capacité de production locale suffisante.",
    },
    {
        type: "table",
        headers: ["Pays Importateur", "Valeur des Importations (USD millions)"],
        rows: [
            ["**États-Unis**", "148,6"],
            ["**Inde**", "145,1"],
            ["**Japon**", "136,4"],
            ["**Turquie**", "118,2"],
            ["**Canada**", "89,5"],
            ["**TOTAL Top 5**", "637,8"],
        ],
        caption:
            "Table 3: Les 5 Principaux Pays Importateurs d'Oxyde de Zinc (SH 2817.00) en 2023.",
    },
    {
        type: "paragraph",
        text: "Ce classement met en évidence la forte demande de l'Amérique du Nord et de l'Asie, notamment l'Inde et le Japon, qui sont des géants de la consommation de produits à base de caoutchouc et d'engrais. La Turquie, quant à elle, représente un hub industriel croissant avec des besoins en augmentation.",
    },

    {
        type: "heading",
        level: 3,
        text: "2.3. Tendances Commerciales Clés",
        id: "trade-trends",
    },
    {
        type: "paragraph",
        text: "Deux tendances majeures caractérisent l'évolution récente du commerce de l'oxyde de zinc :",
    },
    {
        type: "list",
        items: [
            "**Volatilité des Prix du Zinc Métal** : Le prix du ZnO est intrinsèquement lié au prix du zinc métal (LME). Les fluctuations récentes ont conduit à une augmentation des coûts de production, impactant les marges.",
            "**Localisation de la Production** : Une tendance à la relocalisation de la production plus proche des points de consommation, notamment en Europe, pour réduire les risques logistiques et les coûts de transport, influençant les flux d'échanges.",
        ],
    },

    {
        type: "heading",
        level: 2,
        text: "III. Potentiel de l'Algérie sur le Marché de l'Oxyde de Zinc",
        id: "algeria-potential",
    },
    {
        type: "paragraph",
        text: "L'Algérie présente une opportunité unique de s'intégrer dans la chaîne de valeur mondiale, en s'appuyant sur ses ressources minières et ses capacités de transformation existantes.",
    },

    {
        type: "heading",
        level: 3,
        text: "3.1. Levier de l'Amont : Le Projet Oued Amizour",
        id: "oued-amizour",
    },
    {
        type: "paragraph",
        text: "Le développement du projet minier de zinc et plomb d'**Oued Amizour** (Wilaya de Béjaïa) est le principal levier stratégique. Ce projet est considéré comme un gisement de classe mondiale, avec des estimations de production le plaçant potentiellement dans le Top 5 des producteurs de concentrés de zinc au niveau global²¹.",
    },
    {
        type: "paragraph",
        text: "Le succès de ce projet est fondamental. Il assurera un approvisionnement amont stable, continu et de qualité pour l'industrie nationale de transformation, notamment pour la production d'oxyde de zinc. Cet ancrage dans la matière première renforce la compétitivité coût face aux fournisseurs internationaux.",
    },

    {
        type: "heading",
        level: 3,
        text: "3.2. Les Acteurs Locaux de la Transformation",
        id: "local-actors",
    },
    {
        type: "paragraph",
        text: "La production nationale d'oxyde de zinc est principalement assurée par la **SPA Société Algérienne du ZINC et dérivés (ALZINC)**¹⁷, une filiale de la Société Nationale de Sidérurgie (SNS).",
    },
    {
        type: "paragraph",
        text: "ALZINC, opérant notamment à Ghazaouet (Tlemcen)¹⁸, détient une position clé pour répondre à la demande locale (caoutchouc, peintures, etc.) et pour se positionner à l'export.",
    },

    {
        type: "heading",
        level: 3,
        text: "3.3. Analyse du Potentiel d'Exportation Algérien (SH 2817.00)",
        id: "algerian-export-potential",
    },
    {
        type: "paragraph",
        text: "L'Algérie détient un avantage de proximité géographique non négligeable.",
    },
    {
        type: "list",
        items: [
            "**Région MENA (Proximité)** : Accès direct aux marchés d'Afrique du Nord et du Moyen-Orient, où l'Algérie bénéficie d'une logistique simplifiée.",
            "**Europe du Sud (Compétitivité Logistique)** : Les coûts de transport maritime vers des pays comme l'Italie, l'Espagne, ou même la Turquie sont plus compétitifs que ceux de l'Asie de l'Est.",
        ],
    },
    {
        type: "table",
        headers: [
            "Marché Cible",
            "Potentiel d'Exportation (Estimation, USD)",
            "Indice de Complexité Logistique",
        ],
        rows: [
            ["**Union Européenne (Général)**", "5,5 millions", "Modéré"],
            ["**Turquie**", "3,1 millions", "Faible"],
            ["**Tunisie**", "0,9 million", "Très Faible"],
        ],
        caption:
            "Table 4: Estimation du Potentiel d'Exportation pour l'Algérie (2023). Source: Estimation basée sur l'outil Market Access Map et l'analyse de proximité logistique¹⁶.",
    },

    {
        type: "heading",
        level: 2,
        text: "IV. Synthèse des Recommandations Stratégiques",
        id: "strategic-recommendations",
    },
    {
        type: "paragraph",
        text: "Pour maximiser l'intégration de l'Algérie sur le marché mondial de l'oxyde de zinc, les actions suivantes sont recommandées :",
    },
    {
        type: "heading",
        level: 3,
        text: "4.1. Consolidation de la Chaîne d'Approvisionnement Amont",
        id: "supply-chain-consolidation",
    },
    {
        type: "paragraph",
        text: "**Priorité** : Le succès du projet Oued Amizour doit être sécurisé et accéléré pour garantir la fourniture de concentrés de zinc de haute qualité à l'industrie de transformation.",
    },
    {
        type: "heading",
        level: 3,
        text: "4.2. Stratégie d'Exportation Ciblée",
        id: "targeted-export-strategy",
    },
    {
        type: "paragraph",
        text: "L'accent doit être mis sur les marchés où l'avantage logistique est maximal : **Turquie** et l'**Europe du Sud** (Espagne, Italie). Ces marchés peuvent être approchés avec des produits issus du procédé américain (pour le secteur du caoutchouc) et, si la pureté le permet, du procédé français (pour les applications de spécialité).",
    },
    {
        type: "heading",
        level: 3,
        text: "4.3. Standardisation et Qualité",
        id: "standardization-quality",
    },
    {
        type: "paragraph",
        text: "Pour concurrencer les produits européens, il est impératif de garantir une conformité totale aux normes internationales de qualité (ISO, REACH si ciblant l'UE) pour l'oxyde de zinc.",
    },

    {
        type: "heading",
        level: 2,
        text: "V. Glossaire et Références (Page 9)",
        id: "glossary-references",
    },
    {
        type: "list",
        isGlossary: true,
        items: [
            "**SH 2817.00** : Code du Système Harmonisé pour l'Oxyde et Peroxyde de Zinc.",
            "**TCAC** : Taux de Croissance Annuel Composé.",
            "**LME** : London Metal Exchange (Bourse des Métaux de Londres).",
            "**ALZINC** : SPA Société Algérienne du ZINC et dérivés.",
        ],
    },
    {
        type: "heading",
        level: 3,
        text: "Références Complètes",
        id: "complete-references",
    },
    {
        type: "list",
        isGlossary: true,
        items: [
            "**1.** Zinc Oxide Global Market Report 2024, consulté le octobre 18, 2025, https://www.thebusinessresearchcompany.com/report/zinc-oxide-global-market-report",
            "**2.** Zinc Oxide Market Size, Share & Trends Analysis Report 2024-2032, consulté le octobre 18, 2025, https://www.grandviewresearch.com/industry-analysis/zinc-oxide-market",
            "**3.** Zinc Oxide Market Size, Share, Price Analysis, Growth & Forecast 2024-2032, consulté le octobre 18, 2025, https://www.expertmarketresearch.com/reports/zinc-oxide-market",
            "**4.** Zinc Oxide Market Size, Share, Trends, Growth, Forecast 2024-2032, consulté le octobre 18, 2025, https://www.fortunebusinessinsights.com/zinc-oxide-market-103099",
            "**5.** Zinc Oxide Process - A Comparison of the French and American Process, consulté le octobre 18, 2025, https://www.zincoxideweb.com/blog/french-american-process/",
            "**6.** Zinc Oxide in Rubber Industry, consulté le octobre 18, 2025, https://www.chemicalbook.com/News/Detail_12501.html",
            "**7.** Zinc Oxide in Ceramics and Glass, consulté le octobre 18, 2025, https://ceramicartsnetwork.org/daily/article/zinc-oxide-in-glazes/",
            "**8.** Zinc Oxide Market - Growth, Trends, and Forecasts 2024 - 2029, consulté le octobre 18, 2025, https://www.mordorintelligence.com/industry-reports/zinc-oxide-market",
            "**9.** Zinc Oxide Nanoparticles in Sunscreens, consulté le octobre 18, 2025, https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3712800/",
            "**10.** Zinc Oxide as a Feed Additive in Animal Nutrition, consulté le octobre 18, 2025, https://www.agri-feeds.com/zinc-oxide-as-a-feed-additive-in-animal-nutrition/",
            "**11.** Zinc Oxide (ZnO) Market: Global Industry Trends, Share, Size, Growth, Opportunity and Forecasts 2024-2032, consulté le octobre 18, 2025, https://www.imarcgroup.com/zinc-oxide-market",
            "**12.** Global Trade of Zinc Oxide (HS Code 2817.00) - Data 2023, consulté le octobre 19, 2025, https://wits.worldbank.org/",
            "**13.** Top Exporters of Zinc Oxide and Peroxide 2023, consulté le octobre 19, 2025, https://oec.world/en/profile/hs/zinc-oxide-and-peroxide",
            "**14.** Top Importers of Zinc Oxide and Peroxide 2023, consulté le octobre 19, 2025, https://oec.world/en/profile/hs/zinc-oxide-and-peroxide",
            "**15.** Zinc Oxide and Peroxide - International Trade Data 2023 - UN Comtrade, consulté le octobre 19, 2025, https://comtrade.un.org/data/app/visualization/trade/comtrade/en/country/ALL/year/2023/tradeflow/Exports/partner/WLD/product/281700",
            "**16.** Export potential by market, consulté le octobre 19, 2025, https://exportpotential.intracen.org/?q=92&whatMarker=k&what=281700&toMarker=j",
            "**17.** ALZINC - Société Nationale de Sidérurgie, consulté le octobre 19, 2025, https://www.holding-sns.dz/filiale/10",
            "**18.** ALZINC Société Algérienne du ZINC et dérivés à Ghazaouet Tlemcen, consulté le octobre 19, 2025, https://spa-alzinc.dz/",
            "**19.** Alzing-inter: Accueil, consulté le octobre 19, 2025, https://alzing-inter.com/",
            "**20.** Liste d'exportateurs - Composés du zinc - Algérie | Annuaire des entreprises Kompass, consulté le octobre 19, 2025, https://dz.kompass.com/y/exporter/a/composes-du-zinc/21210/",
            "**21.** L'Algérie vise le Top 5 mondial avec le projet de mine de zinc et plomb à Oued Amizour, consulté le octobre 19, 2025, https://www.algerie360.com/lalgerie-vise-le-top-5-mondial-avec-le-projet-de-mine-de-zinc-et-plomb-a-oued-...",
        ],
    },
];

// --- 2. Utility Functions and Components ---

/**
 * Generates a slug from a string for anchor IDs. Handles null/undefined safely.
 * FIX: Used (text || "") to prevent 'toLowerCase' of undefined error.
 * @param {string} text
 */
const createSlug = (text) =>
    (text || "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

// Renders individual content blocks
const ContentBlock = ({ item }) => {
    // Determine which classes to use for paragraphs/lists based on the type
    const commonClasses = "mb-6 text-base-content leading-relaxed";
    const id = createSlug(item.id);

    switch (item.type) {
        case "title":
            return (
                <h1
                    id={id}
                    className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-10 mt-4 tracking-tight"
                    ref={(el) => (item.ref = el)}
                >
                    {item.text}
                </h1>
            );
        case "heading":
            if (item.level === 2) {
                return (
                    <h2
                        id={id}
                        className={`text-3xl font-bold mt-10 mb-5 border-b-2 border-base-300 pb-2 text-secondary`}
                        ref={(el) => (item.ref = el)}
                    >
                        {item.text}
                    </h2>
                );
            } else if (item.level === 3) {
                return (
                    <h3
                        id={id}
                        className={`text-xl font-semibold mt-8 mb-4 text-base-content/90`}
                        ref={(el) => (item.ref = el)}
                    >
                        {item.text}
                    </h3>
                );
            }
            return null;
        case "paragraph":
            return (
                <p
                    className={commonClasses}
                    dangerouslySetInnerHTML={{ __html: item.text }}
                />
            );
        case "list":
            return (
                <ul
                    className={`${commonClasses} ${
                        item.isGlossary
                            ? "space-y-3 list-none"
                            : "list-disc ml-5 space-y-2"
                    }`}
                >
                    {item.items.map((text, index) => {
                        // For the References section, use numbers for index visual aid
                        const listStyle =
                            item.id === "complete-references"
                                ? `${index + 1}. `
                                : "";
                        return (
                            <li
                                key={index}
                                className="text-base-content/80 pl-1"
                                dangerouslySetInnerHTML={{
                                    __html: listStyle + text,
                                }}
                            />
                        );
                    })}
                </ul>
            );
        case "table":
            return (
                <div className="my-6">
                    <div className="overflow-x-auto shadow-lg rounded-lg border border-base-300">
                        <table className="table w-full table-zebra">
                            <thead>
                                <tr className="bg-base-300 text-base-content">
                                    {item.headers.map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {item.rows.map((row, rowIndex) => (
                                    <tr
                                        key={rowIndex}
                                        className="text-base-content"
                                    >
                                        {row.map((cell, cellIndex) => (
                                            <td
                                                key={cellIndex}
                                                dangerouslySetInnerHTML={{
                                                    __html: cell,
                                                }}
                                            />
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {item.caption && (
                        <p
                            className="text-sm text-center text-base-content/70 mt-2 italic"
                            dangerouslySetInnerHTML={{ __html: item.caption }}
                        />
                    )}
                </div>
            );
        default:
            return null;
    }
};

// --- 3. Main Report Component ---

export default function Statistics() {
    const [activeId, setActiveId] = useState(createSlug(reportContent[0].id));
    const contentRef = useRef(null);

    // Identify headings for the sidebar (Level 2 only for clear TOC)
    // Exclude the complete references heading from the main TOC for better clarity
    const sidebarHeadings = reportContent.filter(
        (item) => item.type === "heading" && item.level === 2
    );

    // Function to handle scroll navigation
    const scrollToId = (id) => {
        const element = document.getElementById(createSlug(id));
        if (element && contentRef.current) {
            // Adjust scroll position for the fixed header
            const headerHeight = 64;
            contentRef.current.scrollTo({
                top: element.offsetTop - headerHeight - 20,
                behavior: "smooth",
            });
            setActiveId(createSlug(id));
        }
    };

    // Observer to update active sidebar link based on scroll position
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Only update if it's a section title (level 2)
                        const targetId = entry.target.id;
                        if (
                            sidebarHeadings.some(
                                (h) => createSlug(h.id) === targetId
                            )
                        ) {
                            setActiveId(targetId);
                        }
                    }
                });
            },
            {
                root: contentRef.current,
                rootMargin: "-70px 0px -70% 0px",
                threshold: 0,
            }
        );

        // Observe only section headings (level 2)
        sidebarHeadings.forEach((item) => {
            const element = document.getElementById(createSlug(item.id));
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [sidebarHeadings]); // Recalculate observer if headings change (though they shouldn't here)

    // Helper component for the Sidebar
    const Sidebar = () => (
        // The sticky height needs to account for the fixed header
        <div
            className="w-full lg:w-72 xl:w-80 p-6 bg-base-200 shadow-xl overflow-y-auto custom-scrollbar-lg flex-shrink-0"
            style={{
                height: "calc(100vh - 4rem)",
                position: "sticky",
                top: "4rem",
            }}
        >
            <h3 className="text-xl font-bold mb-4 text-primary border-b border-primary/50 pb-2">
                Table des Matières
            </h3>
            <nav className="space-y-2">
                {sidebarHeadings.map((item) => {
                    const idSlug = createSlug(item.id);
                    const isActive = idSlug === activeId;
                    const levelClass = "pl-2 font-bold text-base"; // Since we only show level 2
                    const activeClass = isActive
                        ? "text-primary border-l-4 border-primary bg-primary/10"
                        : "text-base-content/80 hover:text-primary";

                    return (
                        <a
                            key={item.id}
                            href={`#${idSlug}`}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToId(item.id);
                            }}
                            className={`block transition-all duration-200 cursor-pointer py-1 ${levelClass} ${activeClass} rounded-sm`}
                        >
                            {item.text.replace(/(\. )?\([^)]+\)/g, "")}
                        </a>
                    );
                })}
            </nav>
        </div>
    );

    return (
        <>
            <Header />

            <StatisticsHero />

            <div className="min-h-screen bg-base-100 font-[Inter] flex flex-col pt-16">
                {/* Fixed Header */}
                <header className="fixed top-0 left-0 right-0 z-40 bg-base-300 shadow-lg p-4 flex justify-center">
                    <div className="flex items-center space-x-2 text-xl font-bold text-base-content">
                        <span className="text-2xl text-primary">📈</span>
                        <span className="truncate max-w-xs md:max-w-none">
                            {reportContent[0].text}
                        </span>
                    </div>
                </header>

                <div className="flex flex-grow w-full max-w-7xl mx-auto">
                    {/* Sidebar (Independent Scroll - Lg+) */}
                    <div className="hidden lg:block">
                        <Sidebar />
                    </div>

                    {/* Main Content Area (Independent Scroll) */}
                    <main
                        ref={contentRef}
                        className="flex-grow p-8 md:p-12 overflow-y-auto custom-scrollbar-lg"
                        style={{ height: "calc(100vh - 4rem)" }}
                    >
                        <div className="max-w-4xl mx-auto">
                            {/* Mobile TOC Hint */}
                            <div className="lg:hidden text-center mb-8 p-4 bg-base-200 rounded-lg shadow-md">
                                <h2 className="text-3xl font-extrabold text-secondary mb-2">
                                    Rapport d'Analyse
                                </h2>
                                <p className="text-base-content/70 text-sm">
                                    Défilez vers le bas pour lire le rapport
                                    complet, y compris les **9 pages de
                                    références**.
                                </p>
                            </div>

                            {/* Render all content blocks */}
                            {reportContent.map((item, index) => (
                                <ContentBlock
                                    key={index}
                                    item={{ ...item, id: item.id }}
                                />
                            ))}

                            <div className="pt-20 text-center text-sm text-base-content/50">
                                --- Fin du Rapport d'Analyse Stratégique -
                                Réplication Intégrale (9 Pages) ---
                            </div>
                        </div>
                    </main>
                </div>

                {/* Custom Scrollbar Styling (required for dual independent scrolling) */}
                <style jsx="true">{`
                    /* Ensure independent scrolling is visually distinct */
                    .custom-scrollbar-lg::-webkit-scrollbar {
                        width: 8px;
                    }
                    .custom-scrollbar-lg::-webkit-scrollbar-thumb {
                        background-color: var(
                            --fallback-p,
                            #38bdf8
                        ); /* Tailwind primary blue */
                        border-radius: 4px;
                    }
                    .custom-scrollbar-lg::-webkit-scrollbar-track {
                        background-color: var(
                            --fallback-b3,
                            #d1d5db
                        ); /* Tailwind base-300 */
                    }

                    /* Target the Sidebar Scrollbar specifically */
                    .lg\\:w-72::-webkit-scrollbar-thumb,
                    .xl\\:w-80::-webkit-scrollbar-thumb {
                        background-color: var(
                            --fallback-s,
                            #fb923c
                        ); /* Tailwind secondary color */
                    }
                `}</style>
            </div>
        </>
    );
}
