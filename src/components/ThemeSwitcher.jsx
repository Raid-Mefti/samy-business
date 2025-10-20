"use client";
import React, { useState, useEffect } from "react";
// ANCIENNE LIGNE : import { useTheme } from "@/contexts/ThemeContext";

// --- SIMULATION DU CONTEXTE DE THÈME POUR ASSURER LA COMPILATION ---
const useTheme = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        // Applique le thème à l'attribut data-theme de l'élément racine (requis par DaisyUI)
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
    };

    return { theme, toggleTheme };
};
// --- FIN DE LA SIMULATION ---

const themes = [
    { name: "light", label: "Light", icon: "☀️" },
    { name: "dark", label: "Dark", icon: "🌙" },
];

export default function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();
    // 1. État pour stocker la directionnalité du document
    const [dir, setDir] = useState("ltr");

    // 2. Détecter la directionnalité (RTL/LTR) au montage
    useEffect(() => {
        // Vérifie la direction du document HTML racine
        const documentDir =
            document.documentElement.getAttribute("dir") || "ltr";
        setDir(documentDir);
    }, []);

    // 3. Définir la classe de positionnement en fonction de la direction
    // Si RTL (Arabe), utilise dropdown-start pour ouvrir à droite (vers l'intérieur de l'écran).
    // Si LTR (Anglais/Français), utilise dropdown-end pour ouvrir à gauche (vers l'intérieur de l'écran).
    const dropdownClass = dir === "rtl" ? "dropdown-start" : "dropdown-end";

    // NOTE : Augmentation du z-index de z-[1] à z-[50] pour éviter l'occultation dans la barre de navigation.

    return (
        <div className={`dropdown ${dropdownClass} z-50`}>
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 stroke-current"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                    />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content z-[50] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
                {themes.map((themeOption) => (
                    <li key={themeOption.name}>
                        <button
                            onClick={() => toggleTheme(themeOption.name)}
                            className={`flex items-center gap-2 ${
                                theme === themeOption.name ? "active" : ""
                            }`}
                        >
                            <span>{themeOption.icon}</span>
                            <span>{themeOption.label}</span>
                            {theme === themeOption.name && (
                                <span className="ml-auto">✓</span>
                            )}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
