"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home1 from "@/components/Home1";
import ArticlePage from "@/components/ArticlePage";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, Suspense } from "react";
import { use } from "react"; // Import the use hook

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

// Client component wrapper
function ProductPageContent({ params }) {
    const { language } = useLanguage();
    const t = translations[language] || translations.fr;

    // Use the use() hook to unwrap the params promise
    const unwrappedParams = use(params);

    // Convert slug to readable name
    const productName = unwrappedParams.productName
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
            <div className="site-container site-stack py-16">
                <ArticlePage productName={productName} />
            </div>
            <Footer />
        </>
    );
}

// Main component with Suspense
export default function ProductPage({ params }) {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[rgb(223,126,60)]"></div>
                </div>
            }
        >
            <ProductPageContent params={params} />
        </Suspense>
    );
}
