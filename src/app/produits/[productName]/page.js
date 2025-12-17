"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home1 from "@/components/Home1";
import ArticlePage from "@/components/ArticlePage";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

const translations = {
    fr: {
        title: "Fiche produit",
        description:
            "Découvrez les caractéristiques techniques et applications industrielles de",
    },
    en: {
        title: "Product Details",
        description:
            "Explore the technical specifications and industrial applications of",
    },
    ar: {
        title: "صفحة المنتج",
        description: "اكتشف المواصفات الفنية والتطبيقات الصناعية لـ",
    },
};

export default function ProductPage({ params }) {
    const { language } = useLanguage();
    const t = translations[language] || translations.fr;

    // Convert slug to readable name
    const productName = params.productName
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    // Dynamic SEO
    useEffect(() => {
        document.title = `${t.title} — ${productName}`;

        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement("meta");
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = `${t.description} ${productName}.`;

        // Optional: RTL support
        document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    }, [language, productName]);

    return (
        <>
            <Header />
            <section id="article-hero">
                <Home1 />
            </section>

            <div className="site-container site-stack py-16">
                <ArticlePage productName={productName} />
            </div>

            <Footer />
        </>
    );
}
