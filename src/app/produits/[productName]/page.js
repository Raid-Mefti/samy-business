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
        notFound: "Produit introuvable.",
    },
    en: {
        title: "Product Details",
        description:
            "Explore the technical specifications and industrial applications of",
        notFound: "Product not found.",
    },
    ar: {
        title: "صفحة المنتج",
        description: "اكتشف المواصفات الفنية والتطبيقات الصناعية لـ",
        notFound: "المنتج غير موجود.",
    },
};

// Client component wrapper
function ProductPageContent({ params }) {
    const { language } = useLanguage();
    const t = translations[language] || translations.fr;

    // Use the use() hook to unwrap the params promise
    const unwrappedParams = use(params);
    const slug = unwrappedParams.productName; // This should be "zinc-alumine" from your URL

    // Convert slug to readable name
    const productName = slug
        ?.split("-")
        ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        ?.join(" ");

    // Dynamic SEO
    useEffect(() => {
        if (productName) {
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
        }
    }, [language, productName, t]);

    return (
        <>
            <Header />
            <div className="site-stack py-16 transition-colors duration-300">
                {productName ? (
                    <ArticlePage
                        productSlug={slug} // ← Pass the unwrapped slug
                        productName={productName}
                    />
                ) : (
                    <div className="min-h-[60vh] flex items-center justify-center">
                        <div
                            className="text-center p-8 rounded-xl transition-colors duration-300"
                            style={{
                                backgroundColor: "rgba(240, 240, 240, 0.5)",
                                border: "1px solid rgb(180, 180, 180)",
                            }}
                        >
                            <div
                                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full"
                                style={{
                                    backgroundColor: "rgba(47, 134, 253, 0.1)",
                                }}
                            >
                                <svg
                                    className="w-8 h-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    style={{ color: "rgb(47, 134, 253)" }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                            <p
                                className="text-lg font-semibold mb-2 transition-colors duration-300"
                                style={{ color: "rgb(25, 43, 94)" }}
                            >
                                {t.notFound}
                            </p>
                            <p
                                className="text-sm transition-colors duration-300"
                                style={{ color: "rgb(180, 180, 180)" }}
                            >
                                {t.description.toLowerCase()}{" "}
                                {productName || slug}
                            </p>
                        </div>
                    </div>
                )}
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
                <div
                    className="min-h-screen flex flex-col items-center justify-center transition-colors duration-300"
                    style={{
                        backgroundColor: "rgb(240, 240, 240)",
                    }}
                >
                    <div className="relative">
                        {/* Main Spinner */}
                        <div
                            className="animate-spin rounded-full h-16 w-16 border-4"
                            style={{
                                borderColor: "rgb(47, 134, 253)",
                                borderTopColor: "rgb(76, 242, 255)",
                            }}
                        ></div>

                        {/* Pulse effect */}
                        <div
                            className="absolute inset-0 rounded-full animate-ping"
                            style={{
                                backgroundColor: "rgba(76, 242, 255, 0.1)",
                            }}
                        ></div>

                        {/* Samy Logo in center */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div
                                className="w-6 h-6 rounded-full"
                                style={{
                                    background:
                                        "linear-gradient(135deg, rgb(47, 134, 253) 0%, rgb(76, 242, 255) 100%)",
                                }}
                            ></div>
                        </div>
                    </div>

                    <p
                        className="mt-4 text-sm font-medium transition-colors duration-300"
                        style={{ color: "rgb(180, 180, 180)" }}
                    >
                        Chargement du produit...
                    </p>
                </div>
            }
        >
            <ProductPageContent params={params} />
        </Suspense>
    );
}
