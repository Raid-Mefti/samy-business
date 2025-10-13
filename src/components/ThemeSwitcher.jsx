"use client";

import { useTheme } from "@/contexts/ThemeContext";

const themes = [
    { name: "light", label: "Light", icon: "☀️" },
    { name: "dark", label: "Dark", icon: "🌙" },
];

export default function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="dropdown dropdown-end">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 stroke-current"
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
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
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
