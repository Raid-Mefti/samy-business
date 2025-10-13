"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const languages = [
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "en", label: "English", flag: "🇺🇸" },
];

export default function LanguageSwitcher() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <div className="dropdown dropdown-end">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
            >
                <img
                    className="w-6 h-6 filter brightness-0 dark:invert"
                    src="terre.png"
                    alt="Language selector"
                />
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
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
