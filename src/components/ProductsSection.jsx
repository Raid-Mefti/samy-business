"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import ArticlePage from "@/components/ArticlePage";
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
            className="text-base-content font-bold cursor-pointer hover:text-[rgb(223,126,60)] transition-colors"
            onClick={onClick}
        >
            {name}
        </span>
    </div>
);

// --- Static Data Definitions ---
const importedProducts = [
    {
        name: "Aluminium",
        iconPath: "/product_section/aluminium-en-lingots.avif",
    },
    { name: "Plomb Doux", iconPath: "/product_section/plomb-doux.png" },
    { name: "Oxyde de Zinc", iconPath: "/product_section/oxyde de zinc.avif" },
];

const exportedProducts = [
    { name: "Zinc SHG", iconPath: "/product_section/SHG-99.995.png" },
    { name: "ZAMAK", iconPath: "/product_section/lingots-du-zamak.webp" },
    { name: "Carton", iconPath: "/img11.png" },
];

const manufacturedProducts = [
    { name: "Zinc Aluminé", iconPath: "/product_section/zinc-aluminé.jpg" },
    { name: "Cuivres", iconPath: "/product_section/lingot-de-cuivre.jpg" },
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

    // Escape key closes popup
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === "Escape" && isPopupOpen) {
                closePopup();
            }
        };

        if (isPopupOpen) document.addEventListener("keydown", handleEscapeKey);
        return () => document.removeEventListener("keydown", handleEscapeKey);
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
            <section
                id="produits"
                className="text-base-content bg-base-100 scroll-mt-30"
            >
                <h2 className="text-[rgb(223,126,60)] text-4xl font-bold mb-10 text-center pb-4">
                    Les produits de Samy Business
                </h2>

                {/* Product Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Importés */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-[rgb(223,126,60)] text-[rgb(223,126,60)]">
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

                    {/* Exportés */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-[rgb(223,126,60)] text-[rgb(223,126,60)]">
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

                    {/* Fabriqués */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-[rgb(223,126,60)] text-[rgb(223,126,60)]">
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
                        className="mt-20 relative w-full max-w-6xl max-h-[90vh] bg-base-100 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="sticky py-6 top-0 z-10 flex items-center justify-between bg-base-100/90 backdrop-blur p-3 border-b border-base-300">
                            <h3 className="mx-auto text-4xl font-semibold text-[rgb(223,126,60)]">
                                {getSectionTitle(selectedCategory)}
                            </h3>
                            <div className="absolute top-0 bottom-0 right-10 flex items-center">
                                <button
                                    type="button"
                                    className="btn btn-error btn-sm btn-circle bg-[rgb(223,126,60)] text-white z-20"
                                    aria-label="Fermer"
                                    onClick={closePopup}
                                >
                                    ✕
                                </button>
                            </div>
                        </div>

                        {/* Product Image */}

                        {/* Article Content */}
                        <div className=" relative flex-1 overflow-auto p-4">
                            <ArticlePage
                                productName={selectedProduct.name}
                                imageSrc={selectedProduct.iconPath} // ✅ pass the image path here
                                category={selectedCategory}
                            />
                        </div>

                        {/* Arrows */}
                        <button
                            onClick={navigateToPrevious}
                            aria-label="Produit précédent"
                            className="fixed top-1/2 transform -translate-y-1/2 text-white bg-[rgb(223,126,60)] text-3xl font-bold w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-all duration-200 flex items-center justify-center z-50"
                            style={{ left: "calc((100vw - 72rem)/2 + 1rem)" }}
                        >
                            ‹
                        </button>
                        <button
                            onClick={navigateToNext}
                            aria-label="Produit suivant"
                            className="fixed top-1/2 transform -translate-y-1/2 text-white bg-[rgb(223,126,60)] text-3xl font-bold w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-all duration-200 flex items-center justify-center z-50"
                            style={{ right: "calc((100vw - 72rem)/2 + 1rem)" }}
                        >
                            ›
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
