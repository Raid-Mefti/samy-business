"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

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
    { name: "Carton", iconPath: "/carton.avif" },
];

const manufacturedProducts = [
    { name: "Zinc Aluminé", iconPath: "/product_section/zinc-aluminé.jpg" },
    { name: "Cuivres", iconPath: "/product_section/lingot-de-cuivre.jpg" },
];

// Helper: turn product name into URL slug
const slugify = (name) =>
    String(name || "")
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-ء-ي]/g, "");

// Reusable card for a single product (bigger, grid-style)
const ProductCard = ({ name, iconPath, category }) => {
    const slug = slugify(name);
    const href = `/article/${slug}`;

    return (
        <Link
            href={href}
            className="group relative flex flex-col rounded-2xl overflow-hidden shadow-lg bg-base-100 border border-base-200 hover:border-[rgb(223,126,60)] hover:shadow-2xl transition-all duration-300"
        >
            <div className="relative w-full h-48 bg-base-200">
                <Image
                    src={iconPath}
                    alt={name}
                    fill
                    sizes="(min-width: 1024px) 300px, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                <span className="absolute bottom-3 left-4 right-4 text-sm font-semibold text-white/90 uppercase tracking-wide">
                    {category}
                </span>
            </div>

            <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-bold text-base-content group-hover:text-[rgb(223,126,60)] transition-colors">
                    {name}
                </h3>
                <p className="text-sm text-base-content/70">
                    Cliquez pour découvrir la fiche technique détaillée de ce
                    produit.
                </p>
                <span className="mt-2 inline-flex items-center text-sm font-semibold text-[rgb(223,126,60)] group-hover:translate-x-1 transition-transform">
                    Voir le produit
                    <span className="ml-1">›</span>
                </span>
            </div>
        </Link>
    );
};

const getProductsByCategory = (category) => {
    if (category === "imported") return importedProducts;
    if (category === "exported") return exportedProducts;
    return manufacturedProducts;
};

export default function ProductsSection() {
    const { language } = useLanguage();
    const isArabic = language === "ar";

    return (
        <section
            id="produits"
            className="text-base-content bg-base-100 scroll-mt-30 py-16"
            dir={isArabic ? "rtl" : "ltr"}
        >
            <div className="max-w-6xl mx-auto px-4">
                <div
                    className={`flex flex-col gap-4 mb-10 ${
                        isArabic ? "text-right" : "text-left"
                    }`}
                >
                    <h2 className="text-[rgb(223,126,60)] text-4xl md:text-5xl font-extrabold tracking-tight">
                        Les produits de Samy Business
                    </h2>
                    <p className="text-base md:text-lg text-base-content/80 max-w-2xl">
                        Une sélection de métaux et produits industriels pour vos
                        besoins en import, export et transformation. Cliquez sur
                        un produit pour découvrir sa fiche détaillée.
                    </p>
                </div>

                {/* Product grid, grouped by category but visually homogoneous */}
                <div className="space-y-10">
                    {/* Importés */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-[rgb(223,126,60)]">
                            Produits importés
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {importedProducts.map((product) => (
                                <ProductCard
                                    key={product.name}
                                    {...product}
                                    category="Importés"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Exportés */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-[rgb(223,126,60)]">
                            Produits exportés
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {exportedProducts.map((product) => (
                                <ProductCard
                                    key={product.name}
                                    {...product}
                                    category="Exportés"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Fabriqués */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-[rgb(223,126,60)]">
                            Produits fabriqués
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {manufacturedProducts.map((product) => (
                                <ProductCard
                                    key={product.name}
                                    {...product}
                                    category="Fabriqués"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
