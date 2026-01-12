"use client";

import ArticlePage from "@/components/ArticlePage";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";
import { use } from "react";

export default function ArticlePageClient({
    params,
    formattedProductName,
    translations,
}) {
    const { language } = useLanguage();
    const t = translations[language] || translations.fr;

    // Use the use() hook to unwrap the params promise
    const unwrappedParams = use(params);
    const slug = unwrappedParams?.productName || "";

    // Use the formatted name from server or fallback to client formatting
    const productName =
        formattedProductName ||
        slug
            ?.split?.("-")
            ?.map?.(
                (word) => word?.charAt?.(0)?.toUpperCase?.() + word?.slice?.(1)
            )
            ?.join?.(" ") ||
        slug;

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

            // Cleanup function for RTL
            return () => {
                document.documentElement.dir = "";
            };
        }
    }, [language, productName, t]);

    return (
        <>
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
                            {t.description.toLowerCase()} {productName || slug}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
