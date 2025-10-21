"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import ArticlePage from "@/components/ArticlePage"; // inline article renderer
import { useLanguage } from "@/contexts/LanguageContext";

// Reusable component for a single product entry
const ProductItem = ({ name, iconPath, onClick }) => (
    <div className="flex items-center space-x-3 p-2">
        <Image
            src={iconPath}
            alt={name}
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
        />
        <span
            className="text-base-content font-bold cursor-pointer hover:text-primary transition-colors"
            onClick={onClick}
        >
            {name}
        </span>
    </div>
);

// --- Static Data Definitions ---

const importedProducts = [
    { name: "Aluminium", iconPath: "/img11.png" },
    { name: "Plomb Doux", iconPath: "/img11.png" },
    { name: "Oxyde de Zinc", iconPath: "/img11.png" },
    { name: "Oxyde de Zinc 2", iconPath: "/img11.png" }, // duplicate
];

const exportedProducts = [
    { name: "Zinc SHG", iconPath: "/img11.png" },
    { name: "ZAMAK", iconPath: "/img11.png" },
    { name: "Carton", iconPath: "/img11.png" },
];

const manufacturedProducts = [
    { name: "Zinc Allumié", iconPath: "/img11.png" },
    { name: "Cuivres", iconPath: "/img11.png" },
];

const getProductsByCategory = (category) => {
    if (category === "imported") return importedProducts;
    if (category === "exported") return exportedProducts;
    return manufacturedProducts;
};

export default function ProductsSection() {
    const { language } = useLanguage();

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleProductClick = (product, category, index) => {
        setSelectedProduct(product);
        setSelectedCategory(category);
        setCurrentIndex(index);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedProduct(null);
        setSelectedCategory(null);
        setCurrentIndex(0);
    };

    // Handle escape key to close popup
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === "Escape" && isPopupOpen) {
                closePopup();
            }
        };

        if (isPopupOpen) {
            document.addEventListener("keydown", handleEscapeKey);
        }

        return () => {
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, [isPopupOpen]);

    const getSectionTitle = (category) => {
        switch (category) {
            case "imported":
                return "Produits importés";
            case "exported":
                return "Produits exportés";
            case "manufactured":
                return "Produits fabriqués";
            default:
                return "";
        }
    };

    const navigateToNext = () => {
        if (!selectedCategory) return;
        const products = getProductsByCategory(selectedCategory);
        const nextIndex = (currentIndex + 1) % products.length;
        setCurrentIndex(nextIndex);
        setSelectedProduct(products[nextIndex]);
    };

    const navigateToPrevious = () => {
        if (!selectedCategory) return;
        const products = getProductsByCategory(selectedCategory);
        const prevIndex =
            currentIndex === 0 ? products.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
        setSelectedProduct(products[prevIndex]);
    };

    return (
        <>
            <section className="text-base-content bg-base-100">
                <h2 className="text-3xl font-bold mb-10 text-center text-base-content">
                    LES PRODUITS DE SAMY BUSINESS
                </h2>

                {/* Grid Layout for Product Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Column 1: Produits Importés */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 border-b border-primary pb-2 text-primary">
                            Produits importés
                        </h3>
                        <div className="space-y-3">
                            {importedProducts.map((product, index) => (
                                <ProductItem
                                    key={product.name}
                                    {...product}
                                    onClick={() =>
                                        handleProductClick(
                                            product,
                                            "imported",
                                            index
                                        )
                                    }
                                />
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Produits Exportés */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 border-b border-primary pb-2 text-primary">
                            Produits exportés
                        </h3>
                        <div className="space-y-3 text-base-content">
                            {exportedProducts.map((product, index) => (
                                <ProductItem
                                    key={product.name}
                                    {...product}
                                    onClick={() =>
                                        handleProductClick(
                                            product,
                                            "exported",
                                            index
                                        )
                                    }
                                />
                            ))}
                        </div>
                    </div>

                    {/* Column 3: Produits Fabriqués */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 border-b border-primary pb-2 text-primary">
                            Produits fabriqués
                        </h3>
                        <div className="space-y-3">
                            {manufacturedProducts.map((product, index) => (
                                <ProductItem
                                    key={product.name}
                                    {...product}
                                    onClick={() =>
                                        handleProductClick(
                                            product,
                                            "manufactured",
                                            index
                                        )
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Popup Modal */}
            {isPopupOpen && selectedProduct && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    aria-modal="true"
                    role="dialog"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60"
                        onClick={closePopup}
                    />

                    {/* Popup Box */}
                    <div
                        className="relative w-full max-w-6xl max-h-[90vh] bg-base-100 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="sticky top-0 z-10 flex items-center justify-between bg-base-100/90 backdrop-blur p-3 border-b border-base-300">
                            <div className="flex flex-col">
                                <h3 className="text-lg font-semibold text-primary">
                                    {getSectionTitle(selectedCategory)}
                                </h3>
                                <h4 className="text-sm text-base-content/70">
                                    {selectedProduct.name}
                                </h4>
                            </div>
                            <button
                                type="button"
                                className="btn btn-error btn-sm btn-circle"
                                aria-label="Fermer"
                                onClick={closePopup}
                            >
                                ✕
                            </button>
                        </div>

                        {/* Article Content */}
                        <div className="relative flex-1 overflow-auto p-4">
                            <ArticlePage
                                productName={selectedProduct.name}
                                category={selectedCategory}
                            />

                            {/* Left Arrow */}
                            <button
                                onClick={navigateToPrevious}
                                aria-label="Produit précédent"
                                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-primary text-white text-3xl font-bold w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-all duration-200 flex items-center justify-center"
                            >
                                ‹
                            </button>

                            {/* Right Arrow */}
                            <button
                                onClick={navigateToNext}
                                aria-label="Produit suivant"
                                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary text-white text-3xl font-bold w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-all duration-200 flex items-center justify-center"
                            >
                                ›
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
