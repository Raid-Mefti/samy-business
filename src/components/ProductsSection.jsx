// src/components/sections/ProductsSection.jsx

"use client";

import Image from "next/image";
import { useState } from "react";

// Reusable component for a single product entry
const ProductItem = ({ name, iconPath, onClick }) => (
    <div className="flex items-center space-x-3 p-2">
        {/* Product Icon/Image */}
        <Image
            src={iconPath}
            alt={name}
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
        />
        {/* Product Name - Now clickable */}
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
    { name: "Oxyde de Zinc 2", iconPath: "/img11.png" },
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

// --- Main Component ---

export default function ProductsSection() {
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

    const navigateToNext = () => {
        if (!selectedCategory) return;

        const products =
            selectedCategory === "imported"
                ? importedProducts
                : selectedCategory === "exported"
                ? exportedProducts
                : manufacturedProducts;

        const nextIndex = (currentIndex + 1) % products.length;
        setCurrentIndex(nextIndex);
        setSelectedProduct(products[nextIndex]);
    };

    const navigateToPrevious = () => {
        if (!selectedCategory) return;

        const products =
            selectedCategory === "imported"
                ? importedProducts
                : selectedCategory === "exported"
                ? exportedProducts
                : manufacturedProducts;

        const prevIndex =
            currentIndex === 0 ? products.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
        setSelectedProduct(products[prevIndex]);
    };

    return (
        <>
            <section className=" text-base-content bg-base-100">
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

            {/* Popup Modal - Same style as ProductsGrid with Navigation Arrows */}
            {isPopupOpen && (
                <div
                    className="fixed inset-0 z-50"
                    aria-modal="true"
                    role="dialog"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60"
                        onClick={closePopup}
                    />

                    {/* Centered dialog with viewport padding so it clearly feels like a popup */}
                    <div className="relative h-full w-full p-4 sm:p-8 flex items-center justify-center">
                        <div className="relative w-full max-w-6xl max-h-[90vh] bg-base-100 rounded-2xl shadow-2xl overflow-hidden">
                            {/* Header with prominent close button */}
                            <div className="sticky top-0 z-10 flex items-center justify-end bg-base-100/90 backdrop-blur p-3 border-b border-base-300">
                                <button
                                    type="button"
                                    className="btn btn-error btn-sm btn-circle"
                                    aria-label="Fermer"
                                    onClick={closePopup}
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Navigation Arrows - Left and Right sides */}
                            {/* Left Arrow */}
                            <button
                                type="button"
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 btn btn-ghost btn-circle bg-base-100/90 backdrop-blur shadow-lg"
                                aria-label="Produit précédent"
                                onClick={navigateToPrevious}
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>

                            {/* Right Arrow */}
                            <button
                                type="button"
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 btn btn-ghost btn-circle bg-base-100/90 backdrop-blur shadow-lg"
                                aria-label="Produit suivant"
                                onClick={navigateToNext}
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>

                            {/* Content area */}
                            <iframe
                                src="/article"
                                title="Article"
                                className="w-full h-[calc(90vh-52px)] border-0"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
