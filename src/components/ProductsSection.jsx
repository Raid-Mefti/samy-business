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

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedProduct(null);
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
                            {importedProducts.map((product) => (
                                <ProductItem
                                    key={product.name}
                                    {...product}
                                    onClick={() => handleProductClick(product)}
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
                            {exportedProducts.map((product) => (
                                <ProductItem
                                    key={product.name}
                                    {...product}
                                    onClick={() => handleProductClick(product)}
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
                            {manufacturedProducts.map((product) => (
                                <ProductItem
                                    key={product.name}
                                    {...product}
                                    onClick={() => handleProductClick(product)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Popup Modal - Same style as ProductsGrid */}
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
