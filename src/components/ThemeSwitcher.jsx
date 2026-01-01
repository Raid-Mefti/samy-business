"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

// Changed order: light first, then dark
const themes = [
    { name: "light", label: "Light", icon: "☀️" },
    { name: "dark", label: "Dark", icon: "🌙" },
];

export default function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();
    const { language } = useLanguage();

    const dropdownClass = language === "ar" ? "dropdown-start" : "dropdown-end";

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
                    className="w-8 h-8 stroke-current text-white hover:text-black"
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
                className={`dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 ${
                    language === "ar" ? "text-right" : "text-left"
                }`}
            >
                {themes.map((themeOption) => (
                    <li key={themeOption.name}>
                        <button
                            onClick={() => toggleTheme(themeOption.name)}
                            className={`flex items-center justify-between gap-2 w-full px-2 py-1 rounded hover:bg-base-200 ${
                                theme === themeOption.name ? "font-bold" : ""
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <span>{themeOption.icon}</span>
                                <span>{themeOption.label}</span>
                            </div>
                            {theme === themeOption.name && <span>✓</span>}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
