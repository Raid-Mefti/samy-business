import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticlePageClient from "@/components/ArticlePageClient";
import { Suspense } from "react";

export async function generateStaticParams() {
    return [
        { productName: "aluminium" },
        { productName: "plomb" },
        { productName: "oxyde-de-zinc" },
        { productName: "zinc-shg" },
        { productName: "zamak" },
        { productName: "carton" },
        { productName: "zinc-alumine" },
        { productName: "cuivre" },
    ];
}

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

export default function ArticlePage({ params }) {
    const { productName } = params;

    // Convert slug to readable name on server side with null check
    const formattedProductName =
        productName
            ?.split?.("-")
            ?.map?.(
                (word) => word?.charAt?.(0)?.toUpperCase?.() + word?.slice?.(1)
            )
            ?.join?.(" ") || productName;

    return (
        <>
            <Header />
            <div className="site-stack py-16 transition-colors duration-300">
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
                                        backgroundColor:
                                            "rgba(76, 242, 255, 0.1)",
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
                    <ArticlePageClient
                        params={params}
                        formattedProductName={formattedProductName}
                        translations={translations}
                    />
                </Suspense>
            </div>
            <Footer />
        </>
    );
}
