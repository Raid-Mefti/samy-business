"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("fr");

    useEffect(() => {
        // Get language from localStorage or default to French
        const savedLanguage = localStorage.getItem("language") || "fr";
        setLanguage(savedLanguage);
        // Apply initial lang/dir on mount
        const initialDir = savedLanguage === "ar" ? "rtl" : "ltr";
        document.documentElement.setAttribute("lang", savedLanguage);
        document.documentElement.setAttribute("dir", initialDir);
    }, []);

    const toggleLanguage = (newLanguage) => {
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
        const dir = newLanguage === "ar" ? "rtl" : "ltr";
        document.documentElement.setAttribute("lang", newLanguage);
        document.documentElement.setAttribute("dir", dir);
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
