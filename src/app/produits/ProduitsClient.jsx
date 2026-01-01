"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticlePage from "@/components/ArticlePage";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
    fr: {
        title: "Fiche produit",
        description:
            "Découvrez les caractéristiques techniques et applications industrielles de",
        notFound: "Produit introuvable",
    },
    en: {
        title: "Product Details",
        description:
            "Explore the technical specifications and industrial applications of",
        notFound: "Product not found",
    },
    ar: {
        title: "صفحة المنتج",
        description: "اكتشف المواصفات الفنية والتطبيقات الصناعية لـ",
        notFound: "المنتج غير موجود",
    },
};

// List of all products
const PRODUCTS = [
    "Aluminium",
    "Plomb Doux",
    "Oxyde de Zinc",
    "Zinc SHG",
    "ZAMAK",
    "Carton",
    "Zinc Aluminé",
    "Cuivres",
];

const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-");

export default function ProduitsClient({ slug }) {
    const { language } = useLanguage();
    const t = translations[language] || translations.fr;

    // Match the slug with PRODUCTS
    const productName =
        PRODUCTS.find((p) => slugify(p) === slug.toLowerCase()) || "";

    // Dynamic SEO & RTL
    useEffect(() => {
        if (!productName) return;

        document.title = `${t.title} — ${productName}`;

        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement("meta");
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = `${t.description} ${productName}.`;

        document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    }, [language, productName, t.description, t.title]);

    return (
        <>
            <Header />
            <div className="site-container site-stack py-16">
                {productName ? (
                    <ArticlePage productName={productName} />
                ) : (
                    <p className="text-center py-20 text-base-content/70">
                        {t.notFound}
                    </p>
                )}
            </div>
            <Footer />
        </>
    );
}
