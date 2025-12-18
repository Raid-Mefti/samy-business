"use client";
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const languages = [
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "ar", label: "العربية", flag: "🇩🇿" },
];

export default function LanguageSwitcher() {
    const { language, toggleLanguage } = useLanguage();
    const [isRTL, setIsRTL] = useState(false);

    // Effectuer la vérification de la direction du document (dir)
    useEffect(() => {
        const updateDirection = () => {
            // Lis l'attribut 'dir' de l'élément racine du document (<html>)
            const currentDir =
                document.documentElement.getAttribute("dir") || "ltr";
            setIsRTL(currentDir === "rtl");
        };

        updateDirection(); // Définit l'état initial

        // Utilise un MutationObserver pour réagir si le parent change la direction dynamiquement
        const observer = new MutationObserver(updateDirection);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["dir"],
        });

        return () => observer.disconnect();
    }, []);

    const dropdownClass = isRTL ? "dropdown-start" : "dropdown-end";

    return (
        // Applique la classe dynamique ici
        <div className={`dropdown ${dropdownClass} z-50`}>
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-white hover:text-black"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                >
                    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" />
                    <path d="M3 12h18M12 3c2.5 2.7 3.7 5.7 3.7 9s-1.2 6.3-3.7 9M12 3c-2.5 2.7-3.7 5.7-3.7 9s1.2 6.3 3.7 9" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                // Augmentation du z-index pour s'assurer que le menu est au-dessus
                className="dropdown-content z-[100] menu p-2 shadow bg-base-100 rounded-box w-52"
                dir={isRTL ? "rtl" : "ltr"}
            >
                {languages.map((lang) => (
                    <li key={lang.code}>
                        <button
                            onClick={() => toggleLanguage(lang.code)}
                            className={`flex items-center gap-2 ${
                                language === lang.code ? "active" : ""
                            }`}
                        >
                            <span>{lang.flag}</span>
                            <span>{lang.label}</span>
                            {language === lang.code && (
                                <span className="ml-auto">✓</span>
                            )}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
