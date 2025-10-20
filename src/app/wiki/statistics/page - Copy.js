"use client";
import React, { useState, useEffect } from "react";
// Chargement de la bibliothèque Font Awesome via un script tag dans l'App component.

// Définition des éléments de navigation utilisant les classes d'icônes Font Awesome 6
const navItems = [
    // Les icônes sont maintenant des chaînes de caractères représentant des classes CSS (ex: "fa-solid fa-house")
    {
        id: "home",
        title: "Accueil",
        subtitle: "Vue d'ensemble",
        iconClass: "fa-solid fa-house",
        page: "Home",
    },
    {
        id: "synthesis",
        title: "Synthèse",
        subtitle: "Résumé exécutif",
        iconClass: "fa-solid fa-bolt",
        page: "Synthesis",
    },
    {
        id: "physico",
        title: "Physico-Chimie",
        subtitle: "Propriétés et histoire",
        iconClass: "fa-solid fa-atom",
        page: "PhysicoChem",
    },
    {
        id: "applications",
        title: "Applications",
        subtitle: "Usages industriels",
        iconClass: "fa-solid fa-gear",
        page: "Applications",
    },
    {
        id: "market",
        title: "Marché & Prix",
        subtitle: "Tendances et cotations",
        iconClass: "fa-solid fa-chart-line",
        page: "MarketPrice",
    },
    {
        id: "zno",
        title: "Oxyde de Zinc (ZnO)",
        subtitle: "Analyse du composé",
        iconClass: "fa-solid fa-flask",
        page: "ZnO",
    },
    {
        id: "algeria",
        title: "Algérie",
        subtitle: "Potentiel national",
        iconClass: "fa-solid fa-landmark-dome",
        page: "Algeria",
    },
];

/** Card component for displaying statistics. (Déplacé avant 'content') */
const StatCard = ({ title, value, iconClass, color }) => (
    <div
        className={`p-5 rounded-xl shadow-lg ${color} text-white transition duration-300 hover:shadow-xl transform hover:-translate-y-0.5`}
    >
        <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium opacity-80">{title}</h3>
            {/* Utilisation de l'icône Font Awesome */}
            <i className={`${iconClass} w-6 h-6 text-2xl`}></i>
        </div>
        <p className="text-3xl font-extrabold mt-1">{value}</p>
    </div>
);

// --- Mock Content Data (Utilise maintenant StatCard, qui est défini ci-dessus) ---
const content = {
    Home: (
        <>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Bienvenue sur l'Analyse du Zinc
            </h2>
            <p className="text-lg text-gray-600 mb-6">
                Ce portail interactif présente l'analyse complète du **Zinc
                (Zn)**, de ses propriétés physico-chimiques à ses dynamiques de
                marché mondiales, en passant par ses applications industrielles
                et l'opportunité stratégique de l'Oxyde de Zinc (ZnO) en
                Algérie.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
                <StatCard
                    title="Point de Fusion"
                    value="419.5 °C"
                    iconClass="fa-solid fa-clock"
                    color="bg-indigo-500"
                />
                <StatCard
                    title="Galvanisation"
                    value="> 60%"
                    iconClass="fa-solid fa-gear"
                    color="bg-green-500"
                />
                <StatCard
                    title="Taux de Croissance ZnO (TCAC)"
                    value="~5.7%"
                    iconClass="fa-solid fa-chart-line"
                    color="bg-red-500"
                />
            </div>
        </>
    ),
    Synthesis: (
        <>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Synthèse Exécutive
            </h2>
            <p className="text-lg text-gray-600">
                Le zinc est le 4e métal le plus consommé au monde,
                principalement utilisé pour la **galvanisation** afin de
                prévenir la corrosion. La demande mondiale est forte, tirée par
                la construction et l'automobile, notamment en Asie-Pacifique.
                Les réserves sont géographiquement concentrées (Australie en
                tête), et le marché est surveillé par le LME et l'ILZSG,
                montrant une volatilité notable.
            </p>
        </>
    ),
    PhysicoChem: (
        <>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Fondamentaux Physico-Chimiques
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>**Symbole:** Zn, Numéro Atomique 30.</li>
                <li>
                    **Propriétés:** Métal de transition post-transition, densité
                    de 7.14 g/m³.
                </li>
                <li>
                    **Historique:** Bien que ses alliages (Laiton) soient
                    antiques, le zinc pur n'a été isolé que tardivement en
                    raison de son point d'ébullition bas (907 °C), compliquant
                    la condensation du minerai.
                </li>
            </ul>
        </>
    ),
    Applications: (
        <>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Usages et Secteurs d'Application
            </h2>
            <p className="text-lg text-gray-600 mb-4">
                Le zinc est vital dans plusieurs industries, illustré par la
                répartition suivante (estimations):
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                    **Galvanisation:** Plus de 60% de la consommation totale
                    (revêtement protecteur).
                </li>
                <li>
                    **Composés Chimiques/Oxydes:** Environ 25% (piles,
                    cosmétiques, caoutchouc).
                </li>
                <li>
                    **Alliages (Zamak, Laiton):** Utilisé pour le moulage sous
                    pression et en plomberie.
                </li>
            </ul>
        </>
    ),
    MarketPrice: (
        <>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Analyse du Marché et des Prix
            </h2>
            <p className="text-lg text-gray-600">
                Le prix du zinc est coté au **London Metal Exchange (LME)**. Le
                marché est sujet à des fluctuations influencées par l'équilibre
                entre l'offre minière, la capacité des fonderies et la demande
                industrielle. Les prévisions de l'ILZSG montrent des dynamiques
                d'offre et de demande changeantes, impactant la volatilité des
                prix.
            </p>
            <div className="mt-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded">
                <p className="font-semibold text-yellow-800">Note:</p>
                <p className="text-yellow-700">
                    Le marché a montré une hausse des prix à terme de plus de
                    18% récemment, reflétant une tension sur l'offre raffinée.
                </p>
            </div>
        </>
    ),
    ZnO: (
        <>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Oxyde de Zinc (ZnO)
            </h2>
            <p className="text-lg text-gray-600 mb-4">
                L'Oxyde de Zinc (SH 2817.00) est un composé essentiel avec des
                applications croissantes dans le caoutchouc (activateur de
                vulcanisation), les céramiques, et les cosmétiques (filtre UV).
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                    **Taille du Marché (2023):** Estimée entre $4.18 et $5.40
                    milliards USD.
                </li>
                <li>
                    **TCAC (2024-2032):** Projections entre 5.6% et 5.8%,
                    indiquant une croissance robuste.
                </li>
            </ul>
        </>
    ),
    Algeria: (
        <>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Potentiel du Zinc et de l'Oxyde de Zinc en Algérie
            </h2>
            <p className="text-lg text-gray-600 mb-4">
                L'Algérie possède un potentiel significatif dans la chaîne de
                valeur du zinc. Le projet de mine de plomb et de zinc à **Oued
                Amizour** (Bejaïa) est stratégique, visant à placer le pays
                parmi les 5 premiers producteurs mondiaux.
            </p>
            <div className="mt-4 p-4 bg-blue-100 border-l-4 border-blue-500 rounded">
                <p className="font-semibold text-blue-800">Acteurs Locaux:</p>
                <p className="text-blue-700">
                    ALZINC (Société Algérienne du ZINC et dérivés) est un acteur
                    clé dans la production locale d'oxydes et de produits
                    dérivés du zinc.
                </p>
            </div>
        </>
    ),
};

// --- Helper Components ---

/** Main content rendering area. */
const MainContent = ({ activePage }) => (
    <main className="flex-1 p-6 md:p-10 bg-gray-50 overflow-y-auto">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl min-h-full">
            {content[activePage] || (
                <p className="text-gray-500">Contenu non trouvé.</p>
            )}
        </div>
    </main>
);

/** Sidebar Navigation Component. */
const Sidebar = ({ activePage, setActivePage, isOpen, setIsOpen }) => {
    // Icônes de contrôle de la barre latérale (Menu et X) gérées via Font Awesome
    const MenuIcon = () => <i className="fa-solid fa-bars w-6 h-6"></i>;
    const CloseIcon = () => <i className="fa-solid fa-xmark w-6 h-6"></i>;
    const BookOpenIcon = () => (
        <i className="fa-solid fa-book-open w-6 h-6 mr-2"></i>
    );

    return (
        <div
            className={`fixed inset-y-0 left-0 transform ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-gray-900 shadow-2xl z-50 rounded-r-2xl md:rounded-r-none`}
        >
            <div className="p-6">
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-xl font-extrabold text-teal-400 flex items-center">
                        <BookOpenIcon /> Zinc Explorer
                    </h1>
                    <button
                        className="text-gray-300 md:hidden hover:text-white"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close menu"
                    >
                        <CloseIcon />
                    </button>
                </div>

                <nav className="space-y-3">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            onClick={() => {
                                setActivePage(item.page);
                                setIsOpen(false);
                            }}
                            className={`
                flex items-center p-3 rounded-xl cursor-pointer transition duration-200 
                ${
                    activePage === item.page
                        ? "bg-teal-600 text-white shadow-md"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }
              `}
                        >
                            {/* Affichage de l'icône Font Awesome */}
                            <i
                                className={`${item.iconClass} w-5 h-5 mr-3 flex-shrink-0 text-lg`}
                            ></i>

                            <div className="flex flex-col items-start leading-tight">
                                <span className="font-semibold text-base">
                                    {item.title}
                                </span>
                                {/* Sous-titre avec indentation (ml-3) et style subtil */}
                                <span
                                    className={`text-xs ml-3 italic ${
                                        activePage === item.page
                                            ? "text-teal-200"
                                            : "text-gray-400"
                                    }`}
                                >
                                    {item.subtitle}
                                </span>
                            </div>
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
};

/** Main Application Component. */
const App = () => {
    const [activePage, setActivePage] = useState("Home");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Set the initial active page based on the current list
    useEffect(() => {
        // Ensure 'Home' or the first item is selected initially
        if (!navItems.find((item) => item.page === activePage)) {
            setActivePage(navItems[0].page);
        }
    }, []);

    // Injection du CDN de Font Awesome pour les icônes.
    useEffect(() => {
        // 1. Ajouter le lien CSS pour Font Awesome
        if (!document.querySelector('link[href*="font-awesome"]')) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href =
                "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";
            document.head.appendChild(link);
        }
    }, []);

    return (
        <div className="flex h-screen overflow-hidden font-sans antialiased">
            {/* Sidebar for navigation */}
            <Sidebar
                activePage={activePage}
                setActivePage={setActivePage}
                isOpen={isSidebarOpen}
                setIsOpen={setIsSidebarOpen}
            />

            {/* Main Container */}
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Header/Mobile Toggle */}
                <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200 shadow-sm md:hidden">
                    <h2 className="text-xl font-bold text-teal-600">
                        {navItems.find((item) => item.page === activePage)
                            ?.title || "Zinc Analysis"}
                    </h2>
                    <button
                        className="text-gray-600 hover:text-teal-600 p-2 rounded-lg"
                        onClick={() => setIsSidebarOpen(true)}
                        aria-label="Open menu"
                    >
                        {/* Icône de Menu Font Awesome */}
                        <i className="fa-solid fa-bars w-6 h-6"></i>
                    </button>
                </header>

                {/* Content Area */}
                <MainContent activePage={activePage} />
            </div>
        </div>
    );
};

export default App;
