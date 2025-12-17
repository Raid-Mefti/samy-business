"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Home1 from "@/components/Home1";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

/* ------------------ DATA ------------------ */

const PRODUCTS = [
    {
        name: "Aluminium",
        iconPath: "/product_section/aluminium-en-lingots.avif",
        category: "imported",
    },
    {
        name: "Plomb Doux",
        iconPath: "/product_section/plomb-doux.png",
        category: "imported",
    },
    {
        name: "Oxyde de Zinc",
        iconPath: "/product_section/oxyde de zinc.avif",
        category: "imported",
    },

    {
        name: "Zinc SHG",
        iconPath: "/product_section/SHG-99.995.png",
        category: "exported",
    },
    {
        name: "ZAMAK",
        iconPath: "/product_section/lingots-du-zamak.webp",
        category: "exported",
    },
    { name: "Carton", iconPath: "/carton.avif", category: "exported" },

    {
        name: "Zinc Aluminé",
        iconPath: "/product_section/zinc-aluminé.jpg",
        category: "manufactured",
    },
    {
        name: "Cuivres",
        iconPath: "/product_section/lingot-de-cuivre.jpg",
        category: "manufactured",
    },
];

const CATEGORY_LABELS = {
    imported: "Importés",
    exported: "Exportés",
    manufactured: "Fabriqués",
};

/* ------------------ HELPERS ------------------ */

const slugify = (name) =>
    String(name || "")
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-ء-ي]/g, "");

/* ------------------ PRODUCT ROW ------------------ */

const ProductRow = ({ name, iconPath, category }) => {
    const href = `/article/${slugify(name)}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
        >
            <Link
                href={href}
                className="group flex flex-col md:flex-row rounded-3xl overflow-hidden bg-base-100 border border-base-200 shadow-md hover:shadow-xl transition-all duration-300"
            >
                <div className="relative w-full md:w-80 h-56 md:h-auto">
                    <Image
                        src={iconPath}
                        alt={name}
                        fill
                        sizes="(min-width: 768px) 320px, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-black/60 text-white">
                        {CATEGORY_LABELS[category]}
                    </span>
                </div>

                <div className="flex flex-col justify-between p-6 flex-1">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-extrabold text-base-content">
                            {name}
                        </h3>
                        <p className="text-base text-base-content/70 max-w-xl">
                            Découvrez les caractéristiques techniques et
                            applications industrielles de ce produit.
                        </p>
                    </div>

                    <span className="mt-6 inline-flex items-center justify-center w-full md:w-fit px-6 py-3 rounded-full text-sm font-semibold text-white bg-[rgb(223,126,60)] transition-all duration-300 group-hover:translate-x-1">
                        Voir le produit →
                    </span>
                </div>
            </Link>
        </motion.div>
    );
};

/* ------------------ PAGE ------------------ */

export default function ProduitsPage() {
    const { language } = useLanguage();
    const isArabic = language === "ar";

    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProducts = useMemo(() => {
        return PRODUCTS.filter((p) => {
            const matchesCategory =
                activeCategory === "all" || p.category === activeCategory;
            const matchesSearch = p.name
                .toLowerCase()
                .includes(search.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [search, activeCategory]);

    return (
        <>
            <Header />

            <section id="article-hero">
                <Home1 />
            </section>

            <section
                className="bg-base-100 py-16"
                dir={isArabic ? "rtl" : "ltr"}
            >
                <div className="max-w-6xl mx-auto px-4">
                    {/* Filters */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-10">
                        <input
                            type="text"
                            placeholder="Rechercher un produit…"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full sm:max-w-sm px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[rgb(223,126,60)]"
                        />

                        <div className="flex gap-2 flex-wrap">
                            {[
                                "all",
                                "imported",
                                "exported",
                                "manufactured",
                            ].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                                        activeCategory === cat
                                            ? "bg-[rgb(223,126,60)] text-white border-[rgb(223,126,60)]"
                                            : "bg-white border-gray-300 text-gray-700 hover:border-[rgb(223,126,60)]"
                                    }`}
                                >
                                    {cat === "all"
                                        ? "Tous"
                                        : CATEGORY_LABELS[cat]}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Products */}
                    <div className="space-y-6">
                        {filteredProducts.length === 0 && (
                            <p className="text-gray-500">
                                Aucun produit trouvé.
                            </p>
                        )}

                        {filteredProducts.map((product) => (
                            <ProductRow key={product.name} {...product} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
