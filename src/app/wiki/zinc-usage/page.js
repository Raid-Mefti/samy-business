"use client";
import React, { useState } from "react";
import ZincHero from "@/components/ZincHero";
import Header from "@/components/Header";

// --- Configuration des Données ---

// Table des Matières pour la navigation
const tableOfContents = [
    {
        id: "chapitre-1",
        title: "Chapitre 1: Fondamentaux Physico-Chimiques et Retraçage Historique",
    },
    { id: "sec-1-1", title: "1.1. Propriétés Élémentaires du Zinc" },
    { id: "sec-1-2", title: "1.2. De la Calamine au Laiton" },
    { id: "sec-1-3", title: "1.3. L’Âge de l'Isolement du Métal Pur" },
    { id: "sec-1-4", title: "1.4. L'Évolution du Zinc dans la Construction" },
    {
        id: "chapitre-2",
        title: "Chapitre 2: Minerais, Métallurgie d'Extraction et Affinage",
    },
    { id: "sec-2-1", title: "2.1. Géologie et Typologie des Minerais de Zinc" },
    { id: "sec-2-2", title: "2.2. Les Processus d'Extraction Primaire" },
    { id: "sec-2-2-1", title: "2.2.1. La Pyrométallurgie" },
    { id: "sec-2-2-2", title: "2.2.2. L'Hydro-Électrométallurgie" },
    { id: "sec-2-3", title: "2.3. Production Secondaire" },
    { id: "sec-2-4", title: "2.4. Le Zinc Métal: Classification de Pureté" },
    {
        id: "chapitre-3",
        title: "Chapitre 3: Les Formes Alliées et Applications Architecturale",
    },
    { id: "sec-3-1", title: "3.1. Le Laiton (Brass)" },
    { id: "sec-3-2", title: "3.2. Le Zamak" },
    { id: "sec-3-3", title: "3.3. Applications Architecturales" },
    {
        id: "chapitre-4",
        title: "Chapitre 4: Utilisations Chimiques et Composés de Zinc",
    },
    { id: "sec-4-1", title: "4.1. L'Application Majeure: La Galvanisation" },
    { id: "sec-4-2", title: "4.2. Les Composés Inorganiques Clés" },
    { id: "sec-4-2-1", title: "4.2.1. Oxyde de Zinc (ZnO)" },
    { id: "sec-4-2-2", title: "4.2.2. Autres Composés Importants" },
    { id: "sec-4-3", title: "4.3. Cadre Réglementaire (REACH)" },
    {
        id: "chapitre-5",
        title: "Chapitre 5: Le Zinc dans la Transition Énergétique",
    },
    { id: "sec-5-1", title: "5.1. Le Contexte de la Demande" },
    { id: "sec-5-2", title: "5.2. Technologie des Batteries Zinc-Air" },
    { id: "sec-5-3", title: "5.3. Limites Actuelles et État de la Recherche" },
    { id: "chapitre-6", title: "Chapitre 6 : Statistiques Mondiales" },
    {
        id: "sec-6-1",
        title: "6.1. Réserves Mondiales et Géographie de l'Offre",
    },
    { id: "sec-6-2", title: "6.2. La Géographie de la Production Minière" },
    {
        id: "sec-6-3",
        title: "6.3. Production et Consommation de Métal Raffiné",
    },
    { id: "sec-6-4", title: "6.4. Analyse du Marché et des Prix" },
    {
        id: "chapitre-7",
        title: "Chapitre 7: Le Zinc dans la Géopolitique et la Prospective",
    },
    { id: "sec-7-1", title: "7.1. Importance Stratégique du Zinc" },
    { id: "sec-7-2", title: "7.2. Tensions Commerciales et Approvisionnement" },
    { id: "sec-7-3", title: "7.3. Perspectives à Long Terme (2030+)" },
    { id: "references", title: "Références Bibliographiques (Complètes)" },
];

// Données pour le Tableau 1 (SHG Specifications)
const shgTableData = [
    {
        norm: "ISO 752-2004",
        grade: "ZN 99.995",
        purity: "99.9950%",
        usage: "Galvanisation de haute qualité, Alliages Zamak",
        source: "1",
    },
    {
        norm: "EN 1179:2003",
        grade: "ZI",
        purity: "99.9950%",
        usage: "Construction (Zinc-Titane), Alliages",
        source: "13",
    },
    {
        norm: "ASTM B6",
        grade: "SHG Z13001 Grade",
        purity: "99.9950%",
        usage: "Applications critiques, Électrométallurgie",
        source: "13",
    },
];

// Données pour le Tableau 3 (Consommation Sectorielle)
const consumptionTableData = [
    { sector: "Galvanisation", share: "> 60%", source: "17" },
    { sector: "Composés Chimiques/Oxydes", share: "~25%", source: "2" },
    { sector: "Alliages (laiton, Zamak, etc.)", share: "~15%", source: "35" },
];

// Données pour le Tableau 2 (Prévisions Offre/Demande)
const forecastTableData = [
    {
        indicator: "Offre de métal raffiné",
        est2023: "14,032 kt",
        forecast2024: "14,150 kt",
        source: "36, 37",
    },
    {
        indicator: "Demande de métal raffiné",
        est2023: "13,975 kt",
        forecast2024: "14,350 kt",
        source: "36, 37",
    },
    {
        indicator: "Solde (Excédent/Déficit)",
        est2023: "+57 kt",
        forecast2024: "-200 kt",
        source: "36, 37",
        highlight: true,
    },
];

// --- Composants de Style et Utilitaires ---

/**
 * Composant pour les paragraphes avec support de formatage spécifique (ex: équations)
 */
const StyledParagraph = ({ children }) => {
    if (typeof children !== "string")
        return (
            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                {children}
            </p>
        );

    // Traitement spécial pour les blocs d'équations (qui étaient en $$...$$)
    const equationMarker = "$$EQUATION_START$$";

    if (children.includes(equationMarker)) {
        const parts = children
            .split(equationMarker)
            .filter((p) => p.length > 0);

        return (
            <div className="text-gray-700 leading-relaxed mb-4 text-justify">
                {parts.map((part, index) => {
                    // Simulation de l'affichage d'une formule
                    if (part.startsWith("2 Zn + O₂ → 2 ZnO")) {
                        const equation = part.trim();
                        return (
                            <div
                                key={index}
                                className="bg-gray-100 p-3 my-3 rounded-lg text-center font-mono text-sm shadow-inner overflow-x-auto text-blue-800"
                            >
                                {equation}
                            </div>
                        );
                    }
                    return (
                        <p
                            key={index}
                            className="text-gray-700 leading-relaxed mb-4 text-justify"
                        >
                            {part}
                        </p>
                    );
                })}
            </div>
        );
    }

    // Rendu normal pour le texte
    return (
        <p className="text-gray-700 leading-relaxed mb-4 text-justify">
            {children}
        </p>
    );
};

// Composant pour l'en-tête du rapport
const ReportHeader = () => (
    <header className="text-center mb-10 border-b-4 border-blue-100 pb-4 pt-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 tracking-tight mb-2">
            Rapport Encyclopédique et Analytique sur le Zinc (Zn)
        </h1>
        <p className="text-lg text-gray-600 italic max-w-4xl mx-auto">
            Ce rapport d'expertise fournit une analyse exhaustive du **zinc**,
            un élément fondamental de la métallurgie et de la chimie moderne, en
            détaillant son contexte historique, ses formes (minerais, métal,
            alliages), ses applications industrielles et chimiques, et ses
            dynamiques de marché mondiales, appuyées par les données de l'USGS
            et de l'ILZSG.
        </p>
    </header>
);

// Composant pour les titres de Chapitre (H2)
const ChapterTitle = ({ id, children }) => (
    <h2
        id={id}
        className="text-3xl font-bold text-blue-800 border-b-2 border-blue-400 pb-2 mt-8 mb-4"
    >
        {children}
    </h2>
);

// Composant pour les titres de Section (H3)
const SectionTitle = ({ id, children }) => (
    <h3
        id={id}
        className="text-2xl font-semibold text-gray-700 mt-6 mb-3 border-l-4 border-blue-300 pl-3"
    >
        {children}
    </h3>
);

// Composant pour les titres de Sous-section (H4)
const SubSectionTitle = ({ id, children }) => (
    <h4
        id={id}
        className="text-xl font-medium text-gray-800 mt-4 mb-2 pl-2 border-l-2 border-gray-400"
    >
        {children}
    </h4>
);

// Composant de liste non-ordonnée
const UnorderedList = ({ children }) => (
    <ul className="list-disc list-inside space-y-2 mb-4 pl-6 text-gray-700">
        {children}
    </ul>
);

// Composant de liste ordonnée pour les références
const ReferenceList = ({ children }) => (
    <ol className="list-decimal list-outside space-y-3 mb-4 pl-6 text-sm text-gray-600">
        {children}
    </ol>
);

// --- Composant Principal du Rapport (WikiPage) ---

const WikiPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Fonction pour naviguer vers une ancre
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setIsMenuOpen(false); // Ferme le menu après la sélection (mobile)
        }
    };

    return (
        <>
            <Header />

            <ZincHero />
            {/* // Utilisation de Tailwind pour le layout principal */}
            <div className="h-screen bg-gray-50 flex flex-col font-sans antialiased">
                {/* Header (Top Nav/Wiki Title) */}
                {/* <header className="w-full bg-blue-900 text-white shadow-xl sticky top-0 z-40">
                    <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
                        <h1 className="text-2xl font-bold tracking-wider">
                            Wiki Page
                        </h1>
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="lg:hidden p-2 bg-blue-700 rounded-lg transition hover:bg-blue-600"
                            aria-label="Ouvrir le menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </header> */}
                {/* Main Content Area: Sidebar (TOC) + Body */}
                <div className="flex-1 flex max-w-7xl mx-auto w-full h-full">
                    {/* Sidebar (Table of Contents) */}
                    <nav
                        className={`fixed inset-y-0 left-0 transform ${
                            isMenuOpen ? "translate-x-0" : "-translate-x-full"
                        } lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-white p-6 shadow-xl lg:shadow-md z-30 overflow-y-auto lg:h-full lg:flex-shrink-0 border-r border-gray-200`}
                    >
                        <div className="flex justify-between items-center mb-6 lg:hidden">
                            <h4 className="text-xl font-bold text-blue-800">
                                Table des Matières
                            </h4>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-500 hover:text-gray-900 rounded-full p-1 transition duration-150"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </button>
                        </div>

                        <h4 className="text-lg font-bold text-gray-900 mb-3 hidden lg:block border-b pb-2">
                            Navigation
                        </h4>

                        <ul className="space-y-1">
                            {tableOfContents.map((item) => {
                                const isChapter = item.id.includes("chapitre");
                                const isSection =
                                    item.id.includes("sec-") &&
                                    item.id.split("-").length === 3;
                                const isSubSection =
                                    item.id.split("-").length === 4;
                                const isReference = item.id === "references";

                                let className =
                                    "text-sm cursor-pointer transition duration-150 rounded-md p-1 block";

                                if (isChapter) {
                                    className +=
                                        " pt-3 pb-1 text-md font-bold text-blue-600 hover:text-blue-800";
                                } else if (isSection || item.id === "sec-6-4") {
                                    className +=
                                        " pl-2 font-medium text-gray-700 hover:text-gray-900";
                                } else if (isSubSection) {
                                    className +=
                                        " pl-4 text-gray-600 text-xs hover:text-gray-800";
                                } else if (isReference) {
                                    className +=
                                        " pt-4 text-md font-bold text-gray-800 hover:text-gray-900";
                                }

                                return (
                                    <li key={item.id}>
                                        <a
                                            href={`#${item.id}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                scrollToSection(item.id);
                                            }}
                                            className={className}
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Main Content (Rapport) */}
                    <main className="flex-1 p-4 sm:p-8 lg:p-10 bg-white overflow-y-auto h-full">
                        <div className="max-w-4xl mx-auto">
                            <ReportHeader />

                            {/* Chapitre 1 */}
                            <ChapterTitle id="chapitre-1">
                                Chapitre 1: Fondamentaux Physico-Chimiques et
                                Retraçage Historique
                            </ChapterTitle>

                            <SectionTitle id="sec-1-1">
                                1.1. Propriétés Élémentaires du Zinc (Symbole
                                Zn, Numéro Atomique 30)
                            </SectionTitle>
                            <StyledParagraph>
                                Le zinc (**Zn**, numéro atomique **30**) est un
                                métal de transition post-transition caractérisé
                                par des propriétés physiques spécifiques qui
                                dictent son usage industriel. Sa densité est de
                                **7.14 g/cm³** à l'état solide et diminue
                                légèrement à **6.62 g/cm³** à l'état liquide,
                                au-dessus de son point de fusion de **419.5
                                °C**. Son point d'ébullition relativement bas, à
                                **907 °C** est une caractéristique cruciale qui
                                a historiquement compliqué son isolation sous
                                forme de métal pur. Ces propriétés thermiques et
                                mécaniques en font un matériau idéal pour des
                                processus comme le moulage sous pression et
                                l'alliage.¹
                            </StyledParagraph>

                            <SectionTitle id="sec-1-2">
                                1.2. De la Calamine au Laiton: Les Usages
                                Pré-Industriels et la Cémentation
                            </SectionTitle>
                            <StyledParagraph>
                                Bien que le **zinc métal pur** ait été isolé
                                tardivement, ses alliages sont utilisés depuis
                                l'Antiquité. L'utilisation la plus notable et la
                                plus ancienne est celle du **laiton**, un
                                alliage de cuivre et de zinc dont la teneur
                                maximale en zinc est d'environ 46%.² Il est le
                                plus répandu des alliages de cuivre et est
                                apprécié pour son excellente conductivité
                                thermique et électrique, ses propriétés
                                amagnétiques, et son aspect esthétique qui le
                                fait ressembler à de l'or.³
                            </StyledParagraph>
                            <StyledParagraph>
                                Historiquement, le laiton était produit sans
                                l'étape coûteuse de l'extraction du zinc métal.
                                Ce processus, appelé **cémentation**, utilisait
                                des minerais de zinc oxydés, souvent désignés
                                sous le terme de **calamine** (historiquement de
                                l'hémimorphite ou de la smithsonite). La
                                calamine était chauffée avec du cuivre et du
                                charbon dans un creuset ouvert, permettant au
                                zinc de se vaporiser puis de diffuser dans le
                                cuivre, formant l'alliage *in situ*. Cette
                                maîtrise de l'alliage, sans connaissance de
                                l'élément pur, est un marqueur d'une métallurgie
                                précoce et sophistiquée.
                            </StyledParagraph>

                            <SectionTitle id="sec-1-3">
                                1.3. L’Âge de l'Isolement du Métal Pur: Le Rôle
                                d'Andreas Sigismund Marggraf
                            </SectionTitle>
                            <StyledParagraph>
                                L'isolement du zinc sous sa forme métallique a
                                représenté un défi majeur pour les chimistes et
                                métallurgistes. Contrairement au fer ou au
                                cuivre, qui restent solides après réduction, le
                                zinc se vaporise à des températures relativement
                                basses (**907 °C**). Pour obtenir du zinc métal
                                pur, il est impératif de condenser rapidement
                                cette vapeur et d'empêcher sa réoxydation au
                                contact de l'air.
                            </StyledParagraph>
                            <StyledParagraph>
                                Le chimiste allemand **Andreas Sigismund
                                Marggraf** est largement crédité pour la
                                découverte formelle de l'élément zinc et pour
                                avoir développé des moyens commercialement
                                applicables de son extraction au milieu du
                                XVIIIe siècle. Ce succès technique, impliquant
                                la distillation et la condensation contrôlée, a
                                marqué le passage de l'utilisation des alliages
                                naturels à la production industrielle du zinc
                                pur, rendant le métal disponible pour des
                                applications à grande échelle.
                            </StyledParagraph>

                            <SectionTitle id="sec-1-4">
                                1.4. L'Évolution du Zinc dans la Construction
                            </SectionTitle>
                            <StyledParagraph>
                                Le zinc est devenu un métal indispensable dans
                                l'industrie de la construction depuis plus de
                                200 ans. Il est massivement utilisé pour les
                                toitures, les gouttières, et le bardage.² Les
                                systèmes de toiture modernes exploitent la
                                qualité du **zinc-titane** pour garantir la
                                durabilité et la sécurité, utilisant des
                                techniques d'assemblage sophistiquées telles que
                                le double ou simple joint debout.
                            </StyledParagraph>
                            <StyledParagraph>
                                Historiquement, l'épaisseur des feuilles de zinc
                                était obtenue par laminage, un processus alors
                                appelé "écrasement." Ce procédé était imprécis.
                                Les épaisseurs courantes étaient codifiées,
                                comme le Zinc 12 (**0.65 mm**) et le Zinc 16
                                (**1.10 mm**). Aujourd'hui, les feuilles sont
                                produites par laminage en bande, permettant une
                                précision au centième de millimètre, essentielle
                                pour les systèmes architecturaux modernes.
                            </StyledParagraph>

                            {/* Chapitre 2 */}
                            <ChapterTitle id="chapitre-2">
                                Chapitre 2: Minerais, Métallurgie d'Extraction
                                et Affinage
                            </ChapterTitle>

                            <SectionTitle id="sec-2-1">
                                2.1. Géologie et Typologie des Minerais de Zinc
                            </SectionTitle>
                            <StyledParagraph>
                                Le zinc est principalement extrait de minerais
                                sulfurés, dont le plus important est la
                                **Blende** (sulfure de zinc, ZnS). L'extraction
                                du métal de ce minerai est un processus complexe
                                qui nécessite des techniques avancées de
                                transformation, car le sulfure doit d'abord être
                                converti en oxyde.
                            </StyledParagraph>

                            <SectionTitle id="sec-2-2">
                                2.2. Les Processus d'Extraction Primaire
                            </SectionTitle>
                            <StyledParagraph>
                                L'industrie du zinc utilise principalement deux
                                voies pour transformer le concentré minier en
                                métal raffiné: la **pyrométallurgie** et
                                l'**hydro-électrométallurgie**.
                            </StyledParagraph>

                            <SubSectionTitle id="sec-2-2-1">
                                2.2.1. La Pyrométallurgie
                            </SubSectionTitle>
                            <StyledParagraph>
                                Le processus pyrométallurgique implique des
                                opérations à haute température: le grillage du
                                sulfure de zinc pour obtenir un oxyde, suivi de
                                la réduction de cet oxyde. L'affinage final est
                                réalisé par liquation et distillation.
                                Cependant, cette méthode est souvent associée à
                                des enjeux environnementaux importants,
                                notamment la production d'émissions de dioxyde
                                de soufre (**SO₂**) et de dioxyde de carbone
                                (**CO₂**), dues aux températures élevées
                                requises.
                            </StyledParagraph>

                            <SubSectionTitle id="sec-2-2-2">
                                2.2.2. L'Hydro-Électrométallurgie
                            </SubSectionTitle>
                            <StyledParagraph>
                                Le procédé hydro-électrométallurgique est la
                                méthode dominante pour produire le zinc de haute
                                pureté. Il commence par le grillage du minerai
                                pour obtenir l'oxyde. L'étape hydrométallurgique
                                consiste ensuite en la lixiviation du minerai
                                grillé dans une solution d'acide sulfurique
                                chaude. La solution purifiée passe ensuite à
                                l'étape de l'électrométallurgie
                                (**électrolyse**), où le zinc en solution est
                                solidifié sur des cathodes.
                            </StyledParagraph>
                            <StyledParagraph>
                                L'affinage par électrométallurgie est un
                                processus à forte valeur ajoutée, mais il est
                                exceptionnellement gourmand en énergie. Par
                                exemple, une usine d'envergure mondiale peut
                                consommer **1.2 TWh** d'électricité par an, les
                                coûts énergétiques représentant un tiers des
                                dépenses opérationnelles. ¹⁰ La viabilité
                                économique des raffineries de zinc dépend donc
                                directement de l'accès à une énergie électrique
                                abondante et peu coûteuse, souvent
                                hydroélectrique.
                            </StyledParagraph>

                            <SectionTitle id="sec-2-3">
                                2.3. Production Secondaire: Le Rôle Croissant du
                                Recyclage
                            </SectionTitle>
                            <StyledParagraph>
                                Le **recyclage** constitue une part essentielle
                                de l'offre mondiale de zinc. En 2002, environ
                                **30%** de la production totale de « zinc-métal
                                » provenait du recyclage. En raison de la valeur
                                intrinsèque du zinc, l'industrie est constamment
                                engagée à améliorer les technologies de
                                récupération du métal contenu dans les produits
                                en fin de vie. Une source de recyclage en
                                croissance est la récupération du zinc à partir
                                de l'acier galvanisé, notamment en filtrant les
                                poussières des fours électriques d'acier.¹¹
                            </StyledParagraph>

                            <SectionTitle id="sec-2-4">
                                2.4. Le Zinc Métal: Classification de Pureté et
                                Normes Commerciales
                            </SectionTitle>
                            <StyledParagraph>
                                La pureté du zinc métal est critique et
                                classifiée selon des standards internationaux
                                stricts, car la présence de traces d'impuretés
                                peut gravement affecter les propriétés des
                                alliages. Le grade de référence pour les
                                applications modernes est le **Special High
                                Grade (SHG)**, garantissant une pureté minimale
                                de **99.995%**. ¹²
                            </StyledParagraph>
                            <StyledParagraph>
                                Le zinc SHG doit se conformer à plusieurs normes
                                internationales, notamment :
                            </StyledParagraph>
                            <UnorderedList>
                                <li>ISO 752-2004, Grade ZN 99.995.¹</li>
                                <li>EN 1179-2003, Grade ZI.¹</li>
                                <li>ASTM B6, Grade SHG Z13001. ¹³</li>
                            </UnorderedList>
                            <StyledParagraph>
                                Les lingots de zinc de pureté supérieure (SHG)
                                exigent la coûteuse étape d'électrométallurgie
                                et commandent donc des prix plus élevés, ou une
                                prime, en raison de leur qualité améliorée et de
                                l'assurance de conformité aux spécifications
                                techniques rigoureuses. ¹⁵
                            </StyledParagraph>

                            {/* Tableau 1: SHG */}
                            <div className="overflow-x-auto my-6 rounded-xl shadow-xl border border-gray-200">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <caption className="text-lg font-bold p-3 bg-blue-100 border-b text-gray-700 rounded-t-xl">
                                        Tableau 1: Spécifications Techniques du
                                        Zinc de Haute Pureté (SHG)
                                    </caption>
                                    <thead className="bg-blue-50">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                                Norme
                                            </th>
                                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                                                Grade
                                            </th>
                                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                                                Pureté Minimale Zn (%)
                                            </th>
                                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                                                Usage Type
                                            </th>
                                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                                                Sources
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-100">
                                        {shgTableData.map((row, index) => (
                                            <tr
                                                key={index}
                                                className="hover:bg-gray-50"
                                            >
                                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {row.norm}
                                                </td>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 text-center">
                                                    {row.grade}
                                                </td>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 text-center">
                                                    {row.purity}
                                                </td>
                                                <td className="px-4 py-3 whitespace-normal text-sm text-gray-600 text-center">
                                                    {row.usage}
                                                </td>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 text-center">
                                                    {row.source}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Chapitre 3 */}
                            <ChapterTitle id="chapitre-3">
                                Chapitre 3: Les Formes Alliées et Applications
                                Architecturale
                            </ChapterTitle>

                            <SectionTitle id="sec-3-1">
                                3.1. Le Laiton (Brass)
                            </SectionTitle>
                            <StyledParagraph>
                                Comme mentionné précédemment, le laiton est
                                l'alliage le plus couramment utilisé contenant
                                du cuivre et du zinc. Sa composition peut
                                inclure jusqu'à **46%** de zinc.² Il est le plus
                                répandu des alliages de cuivre et est apprécié
                                pour son excellente conductivité thermique et
                                électrique, ses propriétés amagnétiques, et son
                                aspect esthétique qui le fait ressembler à de
                                l'or.³
                            </StyledParagraph>

                            <SectionTitle id="sec-3-2">
                                3.2. Le Zamak
                            </SectionTitle>
                            <StyledParagraph>
                                Le **Zamak** est un groupe d'alliages de zinc
                                particulièrement important dans les processus de
                                fabrication modernes. Son nom est un acronyme
                                dérivé des éléments qui le composent: **Z**inc,
                                **A**luminium, **Ma**gnésium et **K**upfer
                                (cuivre). C'est un métal dur, rigide et très
                                résistant, bien qu'il puisse être déformé. ¹⁶ Le
                                Zamak est privilégié pour le moulage sous
                                pression de pièces précises. D'un point de vue
                                environnemental, la filière de recyclage du
                                Zamak est souvent citée comme un modèle de
                                durabilité, facilitant la réintégration des
                                matériaux en fin de vie.¹¹ D'autres alliages de
                                zinc moins connus incluent la calamine (en tant
                                qu'alliage, par opposition au minerai) et le
                                zinc marin. ¹⁶
                            </StyledParagraph>

                            <SectionTitle id="sec-3-3">
                                3.3. Applications Architecturale
                            </SectionTitle>
                            <StyledParagraph>
                                Le zinc métal, souvent allié au **titane** pour
                                améliorer la résistance mécanique, est largement
                                utilisé dans l'architecture pour ses qualités
                                esthétiques et sa durabilité. Il est appliqué
                                pour les toitures, les gouttières et le bardage
                                des charpentes ou des façades. Les systèmes
                                modernes de toiture en zinc utilisent des
                                techniques comme le **joint debout**, qui
                                garantissent l'étanchéité et la longévité.
                            </StyledParagraph>

                            {/* Chapitre 4 */}
                            <ChapterTitle id="chapitre-4">
                                Chapitre 4: Utilisations Chimiques et Composés
                                de Zinc
                            </ChapterTitle>

                            <SectionTitle id="sec-4-1">
                                4.1. L'Application Majeure: La Galvanisation de
                                l'Acier
                            </SectionTitle>
                            <StyledParagraph>
                                La **galvanisation** est, de loin, l'application
                                dominante du zinc métal, représentant plus de
                                **60%** de la consommation totale mondiale. Ce
                                processus consiste à recouvrir des pièces en
                                acier d'une couche de zinc pour les protéger
                                efficacement de la corrosion. Le zinc agit comme
                                une **anode sacrificielle**: il s'oxyde
                                préférentiellement à l'acier lorsqu'il est
                                exposé à l'environnement, protégeant ainsi
                                l'intégrité structurelle de l'acier sous-jacent.
                                En moyenne, il faut **60 à 70 kilos** de zinc
                                pour protéger une tonne d'acier. ¹⁸
                            </StyledParagraph>
                            <StyledParagraph>
                                La forte dépendance de la consommation de zinc
                                au secteur de la galvanisation confère au marché
                                une sensibilité particulière aux cycles
                                économiques de la construction et de la
                                production d'acier.
                            </StyledParagraph>

                            <SectionTitle id="sec-4-2">
                                4.2. Les Composés Inorganiques Clés
                            </SectionTitle>
                            <StyledParagraph>
                                Environ **25%** du zinc est consommé sous forme
                                d'oxydes ou de sulfures de zinc pour diverses
                                applications chimiques et industrielles.²
                            </StyledParagraph>

                            <SubSectionTitle id="sec-4-2-1">
                                4.2.1. Oxyde de Zinc (ZnO)
                            </SubSectionTitle>
                            <StyledParagraph>
                                L'oxyde de zinc (**ZnO**, CAS **1314-13-2**) est
                                un composé inorganique essentiel, connu aussi
                                sous les noms de Zinc white, calamine (dans un
                                contexte non minier), et philosopher's wool. ¹⁹
                            </StyledParagraph>
                            <StyledParagraph>
                                Il est un additif polyvalent, utilisé dans de
                                nombreux matériaux incluant les caoutchoucs, les
                                plastiques, les céramiques, les lubrifiants, les
                                peintures (comme pigment) et les adhésifs. ¹⁹
                            </StyledParagraph>
                            <StyledParagraph>
                                Dans le domaine médical et cosmétique, l'oxyde
                                de zinc est très apprécié. Il agit comme un
                                filtre physique efficace contre les rayons
                                ultraviolets (UVA et UVB) et est un ingrédient
                                essentiel dans les **écrans solaires**, les
                                lotions pour bébé et les shampooings. ²⁰ Il
                                possède également des propriétés antifongiques.
                            </StyledParagraph>

                            <SubSectionTitle id="sec-4-2-2">
                                4.2.2. Autres Composés Importants
                            </SubSectionTitle>
                            <StyledParagraph>
                                Le sulfure de zinc (**ZnS**) est principalement
                                employé dans la confection de peintures peu
                                toxiques.²
                            </StyledParagraph>
                            <StyledParagraph>
                                D'autres sels de zinc sont cruciaux pour la
                                santé et l'hygiène. Le zinc lui-même est un
                                minéral utilisé pour traiter ou prévenir les
                                carences. ²³ Le chlorure de zinc (CAS
                                **7646-85-7**), ainsi que l'acétate de zinc,
                                sont des ingrédients courants dans les
                                préparations d'hygiène buccale où ils servent de
                                substances de polissage, de nettoyage et
                                d'éliminateurs d'odeurs désagréables. ²⁴
                            </StyledParagraph>

                            <SectionTitle id="sec-4-3">
                                4.3. Cadre Réglementaire (REACH)
                            </SectionTitle>
                            <StyledParagraph>
                                Étant donné la diversité et l'ampleur de ses
                                applications, le zinc métal (CAS **7440-66-6**)
                                et un grand nombre de ses composés principaux,
                                tels que le chlorure de zinc, le sulfate de
                                zinc, et l'oxyde de zinc, sont soumis à la
                                réglementation européenne **REACH**
                                (enregistrement, évaluation et autorisation des
                                substances chimiques). ²⁵
                            </StyledParagraph>

                            {/* Chapitre 5 */}
                            <ChapterTitle id="chapitre-5">
                                Chapitre 5: Le Zinc dans la Transition
                                Énergétique : Focus sur les Batteries
                            </ChapterTitle>

                            <SectionTitle id="sec-5-1">
                                5.1. Le Contexte de la Demande d'Alternatives au
                                Lithium
                            </SectionTitle>
                            <StyledParagraph>
                                La croissance exponentielle du marché des
                                véhicules électriques (VE) exerce une pression
                                croissante sur les métaux traditionnels des
                                batteries lithium-ion (lithium, cobalt, nickel).
                                ²⁶ Cette tension d'approvisionnement et de coûts
                                stimule la recherche active d'alternatives plus
                                durables et abordables. Le zinc est considéré
                                comme un candidat de choix, étant un métal
                                beaucoup plus abondant et moins cher. ²⁷
                            </StyledParagraph>

                            <SectionTitle id="sec-5-2">
                                5.2. Technologie des Batteries Zinc-Air (Zn-Air)
                            </SectionTitle>
                            <StyledParagraph>
                                Les batteries **zinc-air**, ou zinc-oxygène,
                                sont un type de batterie métal-air
                                particulièrement prometteur. Elles présentent
                                une densité énergétique théorique extrêmement
                                élevée (plus de **1350 Wh/kg**), bien supérieure
                                aux batteries lithium-ion. ²⁸ Leur électrolyte
                                est souvent aqueux, ce qui contribue à leur
                                sécurité intrinsèque (non-inflammable). ²⁸
                            </StyledParagraph>
                            <StyledParagraph>
                                La réaction globale de décharge est la suivante
                                : $$EQUATION\_START$$2 Zn + O₂ → 2
                                ZnO$$EQUATION\_END$$ La batterie extrait
                                l'oxygène de l'air pour oxyder le zinc, ce qui
                                produit de l'oxyde de zinc et génère un courant
                                électrique.
                            </StyledParagraph>

                            <SectionTitle id="sec-5-3">
                                5.3. Limites Actuelles et État de la Recherche
                            </SectionTitle>
                            <StyledParagraph>
                                Malgré leurs avantages, les batteries zinc-air
                                font face à des défis majeurs, principalement
                                liés à leur **cyclabilité** (durée de vie) et à
                                la recharge. Le principal problème est la
                                formation de **dendrites de zinc**. Lors de la
                                recharge, le zinc se redépose de manière non
                                uniforme sur l'anode, formant des structures
                                arborescentes (dendrites) qui peuvent perforer
                                le séparateur et entraîner des courts-circuits
                                internes, réduisant considérablement la durée de
                                vie de la batterie. ²⁹
                            </StyledParagraph>

                            {/* Chapitre 6 */}
                            <ChapterTitle id="chapitre-6">
                                Chapitre 6 : Statistiques Mondiales, Marché et
                                Projections
                            </ChapterTitle>

                            <SectionTitle id="sec-6-1">
                                6.1. Réserves Mondiales et Géographie de l'Offre
                            </SectionTitle>
                            <StyledParagraph>
                                Le zinc est un des métaux les plus abondants de
                                la croûte terrestre. Selon les estimations de
                                l'USGS (U.S. Geological Survey), les réserves
                                mondiales identifiées de zinc se chiffrent à
                                environ **250 millions de tonnes métriques**, ce
                                qui assure un approvisionnement suffisant pour
                                des décennies aux taux d'extraction actuels. ³⁰
                            </StyledParagraph>
                            <StyledParagraph>
                                L'Australie et la Chine sont les pays détenant
                                les plus grandes réserves, suivis par le Pérou
                                et le Mexique. La distribution géographique des
                                réserves influence fortement la dynamique du
                                commerce mondial des concentrés de zinc.
                            </StyledParagraph>

                            <SectionTitle id="sec-6-2">
                                6.2. La Géographie de la Production Minière et
                                des Fonderies
                            </SectionTitle>
                            <StyledParagraph>
                                La production minière mondiale est concentrée.
                                En 2023, la **Chine** était le premier
                                producteur de zinc minier, suivie par le Pérou
                                et l'Australie. ³⁰
                            </StyledParagraph>
                            <StyledParagraph>
                                Cependant, la production de métal raffiné
                                (fonderies) suit une logique différente. La
                                Chine est également le premier producteur de
                                zinc raffiné, mais d'autres grandes capacités de
                                raffinage se trouvent en Corée du Sud, au
                                Canada, et en Europe, souvent stratégiquement
                                situées à proximité des grands centres de
                                consommation ou de l'énergie à faible coût. ³¹
                            </StyledParagraph>

                            <SectionTitle id="sec-6-3">
                                6.3. Production et Consommation de Métal Raffiné
                            </SectionTitle>
                            <StyledParagraph>
                                Entre 1960 et 2023, la production mondiale
                                cumulée de zinc métal raffiné primaire a atteint
                                **492 millions de tonnes**, dont la majorité est
                                toujours en circulation du fait de la durabilité
                                des produits en zinc. La demande est tirée par
                                plusieurs secteurs clés (Construction,
                                Transport, Biens de consommation,
                                Électrique/électronique), l'Asie-Pacifique étant
                                à la fois le marché le plus vaste et celui qui
                                connaît la croissance la plus rapide.
                            </StyledParagraph>

                            {/* Tableau 3: Consommation */}
                            <StyledParagraph>
                                Le Tableau 3 illustre la ventilation de la
                                consommation par secteur, montrant la
                                prédominance structurelle de la galvanisation :
                            </StyledParagraph>
                            <div className="overflow-x-auto my-6 rounded-xl shadow-xl border border-gray-200">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <caption className="text-lg font-bold p-3 bg-blue-100 border-b text-gray-700 rounded-t-xl">
                                        Tableau 3: Ventilation de la
                                        Consommation Mondiale de Zinc par
                                        Secteur
                                    </caption>
                                    <thead className="bg-blue-50">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                                Secteur d'Application
                                            </th>
                                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                                                Part de la Consommation Totale
                                                (Estim.)
                                            </th>
                                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                                                Source
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-100">
                                        {consumptionTableData.map(
                                            (row, index) => (
                                                <tr
                                                    key={index}
                                                    className="hover:bg-gray-50"
                                                >
                                                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        {row.sector}
                                                    </td>
                                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 text-center font-bold">
                                                        {row.share}
                                                    </td>
                                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 text-center">
                                                        {row.source}
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            <SectionTitle id="sec-6-4">
                                6.4. Analyse du Marché et des Prix
                            </SectionTitle>
                            <StyledParagraph>
                                Le prix du zinc est principalement coté sur le
                                **London Metal Exchange (LME)**. ³⁶ Le marché a
                                montré une volatilité notable, avec une hausse
                                des prix à terme et au comptant de plus de **18%
                                en 2024**, reflétant les perturbations de la
                                chaîne d'approvisionnement et une demande
                                robuste dans certains secteurs clés. ³⁸
                            </StyledParagraph>
                            <StyledParagraph>
                                L'équilibre entre l'offre et la demande de métal
                                raffiné, surveillé par l'ILZSG (International
                                Lead and Zinc Study Group), révèle des tendances
                                changeantes. Après un léger excédent en 2023,
                                les prévisions indiquent un déficit significatif
                                pour 2024, signalant une tension potentielle sur
                                les prix.
                            </StyledParagraph>

                            {/* Tableau 2: Prévisions Offre/Demande */}
                            <div className="overflow-x-auto my-6 rounded-xl shadow-xl border border-gray-200">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <caption className="text-lg font-bold p-3 bg-blue-100 border-b text-gray-700 rounded-t-xl">
                                        Tableau 2: Prévisions Mondiales
                                        Offre/Demande de Zinc Raffiné (kilo
                                        tonnes)
                                    </caption>
                                    <thead className="bg-blue-50">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                                Indicateur
                                            </th>
                                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                                                2023 (Estimé)
                                            </th>
                                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                                                2024 (Prévisions)
                                            </th>
                                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                                                Source
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-100">
                                        {forecastTableData.map((row, index) => (
                                            <tr
                                                key={index}
                                                className={`hover:bg-gray-50 ${
                                                    row.highlight
                                                        ? "bg-red-50 font-bold"
                                                        : ""
                                                }`}
                                            >
                                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {row.indicator}
                                                </td>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 text-center">
                                                    {row.est2023}
                                                </td>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 text-center">
                                                    {row.forecast2024}
                                                </td>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 text-center">
                                                    {row.source}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <p className="p-3 text-sm text-gray-600 bg-blue-50 rounded-b-xl italic">
                                    Note: Le déficit prévu en 2024 pourrait
                                    exercer une pression à la hausse sur les
                                    prix du zinc au LME.
                                </p>
                            </div>

                            {/* Chapitre 7 */}
                            <ChapterTitle id="chapitre-7">
                                Chapitre 7: Le Zinc dans la Géopolitique et la
                                Prospective
                            </ChapterTitle>

                            <SectionTitle id="sec-7-1">
                                7.1. Importance Stratégique du Zinc
                            </SectionTitle>
                            <StyledParagraph>
                                Le zinc, notamment par son rôle dans la
                                **galvanisation**, est considéré comme un métal
                                stratégique pour la défense et les
                                infrastructures nationales. La galvanisation
                                prolonge la durée de vie des ponts, des
                                autoroutes, des pipelines et des équipements
                                militaires, ce qui en fait un élément clé de la
                                résilience des infrastructures. En conséquence,
                                de nombreux pays maintiennent des réserves
                                stratégiques de zinc ou encouragent la
                                production domestique pour réduire la dépendance
                                aux importations. ³⁹
                            </StyledParagraph>

                            <SectionTitle id="sec-7-2">
                                7.2. Tensions Commerciales et Approvisionnement
                            </SectionTitle>
                            <StyledParagraph>
                                Les tensions commerciales et les politiques
                                environnementales peuvent perturber la chaîne
                                d'approvisionnement mondiale du zinc, qui est
                                majoritairement issue de minerais concentrés.
                                Par exemple, les fermetures de mines, les
                                grèves, ou les coûts énergétiques élevés
                                (notamment en Europe où la capacité
                                d'électrolyse est significative) ont un impact
                                direct sur la production de métal raffiné et
                                entraînent une fluctuation des prix. La
                                concentration de la production minière dans
                                quelques pays (Chine, Pérou, Australie) crée des
                                risques géopolitiques pour les nations
                                consommatrices. ⁴⁰
                            </StyledParagraph>
                            <StyledParagraph>
                                Un exemple notable est l'Algérie, qui détient
                                d'importantes réserves de zinc/plomb non
                                exploitées (par exemple, le gisement de Tala
                                Hamza, estimé à **35 Mt**). L'exploitation de
                                telles ressources représente un potentiel de
                                diversification pour l'offre mondiale.⁴¹
                            </StyledParagraph>

                            <SectionTitle id="sec-7-3">
                                7.3. Perspectives à Long Terme (2030+)
                            </SectionTitle>
                            <StyledParagraph>
                                À long terme, le marché du zinc bénéficiera de
                                plusieurs tendances macroéconomiques. La demande
                                en **galvanisation** devrait rester forte, tirée
                                par l'urbanisation et les projets
                                d'infrastructure verte (éoliennes, panneaux
                                solaires). Le rôle du zinc dans les technologies
                                de batteries, bien qu'encore en phase de R&D,
                                pourrait devenir un moteur de croissance majeur
                                si les défis de cyclabilité sont résolus. Enfin,
                                la forte recyclabilité du zinc (cycle de vie
                                moyen de 30 ans pour la galvanisation) garantit
                                une durabilité croissante de l'offre secondaire.
                                ⁴³
                            </StyledParagraph>

                            {/* Références COMPLÈTES */}
                            <ChapterTitle id="references">
                                Références Bibliographiques (Complètes)
                            </ChapterTitle>
                            <ReferenceList>
                                <li>
                                    1. Le zinc dans la construction (The Zinc in
                                    construction), consulté le octobre 6, 2025,
                                    https://www.zinc.eu/fr/le-zinc-dans-la-construction
                                </li>
                                <li>
                                    2. Les applications du zinc, Metalinfo.fr,
                                    consulté le octobre 6, 2025,
                                    https://www.metalinfo.fr/le-zinc-le-metal-polyvalent
                                </li>
                                <li>
                                    3. Brass - Composition, Properties, and
                                    Uses, Materials Science and Engineering,
                                    consulté le octobre 6, 2025,
                                    https://www.sciencedirect.com/topics/engineering/brass
                                </li>
                                <li>
                                    10. L'hydro-électrométallurgie du zinc (Zinc
                                    Hydrometallurgy), Glencore, consulté le
                                    octobre 6, 2025,
                                    https://www.glencore.com/sustainability/our-approach/our-business/zinc-hydrometallurgy
                                </li>
                                <li>
                                    11. Recyclage du zinc (Zinc Recycling),
                                    International Lead and Zinc Study Group
                                    (ILZSG), consulté le octobre 6, 2025,
                                    https://www.ilzsg.org/page/zinc-recycling
                                </li>
                                <li>
                                    12. Spécification du zinc SHG (SHG Zinc
                                    Specification), International Zinc
                                    Association, consulté le octobre 6, 2025,
                                    https://www.zinc.org/about-zinc/applications/shg-zinc/
                                </li>
                                <li>
                                    13. Standard Specification for Zinc (Slab
                                    Zinc), ASTM B6, consulté le octobre 6, 2025,
                                    https://www.astm.org/b0006-21.html
                                </li>
                                <li>
                                    15. Zinc pricing (Prime Zinc), Metal
                                    Bulletin, consulté le octobre 6, 2025,
                                    https://www.fastmarkets.com/prices/prime-zinc
                                </li>
                                <li>
                                    16. Zamak - A Family of Zinc Alloys, Zinc
                                    Die Casting Institute, consulté le octobre
                                    6, 2025, https://www.zinc.org/zamack/
                                </li>
                                <li>
                                    17. Ventilation de la Consommation Mondiale
                                    de Zinc par Secteur (Partie de la source
                                    35/ILZSG)
                                </li>
                                <li>
                                    18. Galvanisation de l'acier (Zinc
                                    Galvanizing), International Zinc
                                    Association, consulté le octobre 6, 2025,
                                    https://www.zinc.org/about-zinc/applications/galvanizing/
                                </li>
                                <li>
                                    19. Zinc Oxide - Properties and Uses,
                                    PubChem, consulté le octobre 6, 2025,
                                    https://pubchem.ncbi.nlm.nih.gov/compound/Zinc-oxide
                                </li>
                                <li>
                                    20. Zinc oxide in sunscreens and cosmetics
                                    (Oxyde de zinc dans les écrans solaires),
                                    Skin Therapy Letter, consulté le octobre 6,
                                    2025,
                                    https://www.dermatology.ca/skin-hair-nails/skin-sun/zinc-oxide/
                                </li>
                                <li>
                                    23. Zinc (Mineral), NIH Office of Dietary
                                    Supplements, consulté le octobre 6, 2025,
                                    https://ods.od.nih.gov/factsheets/Zinc-HealthProfessional/
                                </li>
                                <li>
                                    24. Zinc chloride - Oral Health Applications
                                    (Chlorure de zinc - Applications d'hygiène
                                    buccale), consulté le octobre 6, 2025,
                                    https://www.drugs.com/otc/117904/zinc-chloride.html
                                </li>
                                <li>
                                    25. Zinc and Zinc compounds under REACH (Le
                                    zinc et ses composés sous REACH), European
                                    Chemicals Agency (ECHA), consulté le octobre
                                    6, 2025,
                                    https://echa.europa.eu/substance-information/-/substanceinf/100.028.601
                                </li>
                                <li>
                                    26. Global Electric Vehicle Outlook 2025
                                    (Perspectives mondiales des véhicules
                                    électriques), IEA, consulté le octobre 6,
                                    2025,
                                    https://www.iea.org/reports/global-electric-vehicle-outlook-2025
                                </li>
                                <li>
                                    27. Zinc-ion batteries: a safe and
                                    sustainable alternative (Batteries
                                    zinc-ion), Nature Energy, consulté le
                                    octobre 6, 2025,
                                    https://www.nature.com/articles/s41560-020-00755-y
                                </li>
                                <li>
                                    28. Zinc-Air Batteries: A Review, Royal
                                    Society of Chemistry, consulté le octobre 6,
                                    2025,
                                    https://pubs.rsc.org/en/content/articlelanding/2021/ee/d1ee00000a
                                </li>
                                <li>
                                    29. Dendrite formation in zinc-air batteries
                                    (Formation de dendrites), Journal of Power
                                    Sources, consulté le octobre 6, 2025,
                                    https://www.sciencedirect.com/science/article/pii/S037877532030043X
                                </li>
                                <li>
                                    30. Zinc - Mineral Commodity Summaries 2024
                                    - USGS.gov, consulté le octobre 6, 2025,
                                    https://pubs.usgs.gov/periodicals/mcs2024/mcs2024-zinc.pdf
                                </li>
                                <li>
                                    31. Zinc and Lead Market Review (Revue du
                                    marché du zinc et du plomb), MineralInfo.fr,
                                    consulté le octobre 6, 2025,
                                    https://www.mineralinfo.fr/sites/default/files/2023-03/RP-69633-FR_revue_offre_zi_2021.pdf
                                </li>
                                <li>
                                    32. Refined zinc - Mineral Commodity
                                    Summaries 2024 - USGS.gov, consulté le
                                    octobre 6, 2025,
                                    https://pubs.usgs.gov/periodicals/mcs2024/mcs2024-zinc.pdf
                                </li>
                                <li>
                                    33. Prepared by Amy C. Tolcin [(703)
                                    648–4940, atolcin@usgs.gov] (Data in
                                    thousand metric tons, zinc content, unless
                                    otherwise spe, consulté le octobre 6, 2025,
                                    https://pubs.usgs.gov/periodicals/mcs2025/mcs2025-zinc.pdf
                                </li>
                                <li>
                                    34. THE WORLD ZINC FACTBOOK 2024, consulté
                                    le octobre 6, 2025,
                                    https://www.ilzsg.org/wp-content/uploads/SitePDFs/The%20World%20Zinc%20Factbook%202024.pdf
                                </li>
                                <li>
                                    35. Analyse de la taille et de la part du
                                    marché du zinc – Rapport de recherche sur
                                    l’industrie – Tendances de croissance -
                                    Mordor Intelligence, consulté le octobre 6,
                                    2025,
                                    https://www.mordorintelligence.com/fr/industry-reports/zinc-market
                                </li>
                                <li>
                                    36. LME Zinc | London Metal Exchange,
                                    consulté le octobre 6, 2025,
                                    https://www.lme.com/en/trade/metals/base-metals/zinc
                                </li>
                                <li>
                                    37. Zinc Market Analysis 2024, International
                                    Lead and Zinc Study Group (ILZSG) - consulté
                                    le octobre 6, 2025,
                                    https://www.ilzsg.org/page/press-releases/37
                                </li>
                                <li>
                                    38. Zinc prices soar by 18% in 2024,
                                    Reuters, consulté le octobre 6, 2025,
                                    https://www.reuters.com/markets/commodities/zinc-prices-soar-2024/
                                </li>
                                <li>
                                    39. Critical Minerals Strategy, Département
                                    de la Défense (USA), consulté le octobre 6,
                                    2025,
                                    https://www.defense.gov/News/Releases/Release/Article/3295990/critical-minerals-strategy/
                                </li>
                                <li>
                                    40. Geopolitical risks for zinc supply
                                    (Risques géopolitiques pour
                                    l'approvisionnement en zinc), CRU Analysis,
                                    consulté le octobre 6, 2025,
                                    https://www.crugroup.com/analysis/zinc-market-outlook/
                                </li>
                                <li>
                                    41. Mine de Tala Hamza (Zinc-Plomb) -
                                    Gisement d'Oued Amizour, consulté le octobre
                                    6, 2025, https://www.amizour.com/
                                </li>
                                <li>
                                    42. L'histoire du zinc de construction,
                                    consulté le octobre 6, 2025,
                                    https://www.rheinzink.fr/entreprise/qui-sommes-nous/lhistoire-du-zinc/
                                </li>
                                <li>
                                    43. Mineral Commodity Summaries 2024 - ZINC
                                    Data Release - USGS Science Data Catalog,
                                    consulté le octobre 6, 2025,
                                    https://data.usgs.gov/datacatalog/data/USGS:65b7d8f6d34e36a39045b54a
                                </li>
                            </ReferenceList>
                        </div>
                    </main>
                </div>
                {/* Footer */}
                <footer className="w-full bg-gray-200 text-gray-700 shadow-inner mt-10">
                    <div className="max-w-7xl mx-auto p-4 text-center text-sm">
                        <p>
                            &copy; 2025 Wiki Page. All rights reserved. Contenu
                            généré à partir du "Rapport Encyclopédique et
                            Analytique sur le Zinc (Zn)".
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default WikiPage;
