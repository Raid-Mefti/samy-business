"use client";

import Header from "@/components/Header";
import Home1 from "@/components/Home1";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* ------------------ TRANSLATIONS ------------------ */
const TRANSLATIONS = {
    fr: {
        title: "Nos Produits",
        subtitle:
            "Catalogue de métaux et produits industriels destinés à l'importation, l'exportation et la fabrication.",
        search: "Rechercher un produit…",
        all: "Tous",
        importation: "Importation",
        exportation: "Exportation",
        fabrication: "Fabrication",
        cta: "Voir le produit →",
        empty: "Aucun produit trouvé.",
        description:
            "Découvrez les caractéristiques techniques et applications industrielles de ce produit.",
    },
    en: {
        title: "Our Products",
        subtitle:
            "Catalog of metals and industrial products for import, export, and manufacturing.",
        search: "Search for a product…",
        all: "All",
        importation: "Import",
        exportation: "Export",
        fabrication: "Manufacturing",
        cta: "View product →",
        empty: "No products found.",
        description:
            "Discover technical specifications and industrial applications of this product.",
    },
    ar: {
        title: "منتجاتنا",
        subtitle:
            "مجموعة من المعادن والمنتجات الصناعية المخصصة للاستيراد والتصدير والتصنيع.",
        search: "ابحث عن منتج…",
        all: "الكل",
        importation: "استيراد",
        exportation: "تصدير",
        fabrication: "تصنيع",
        cta: "عرض المنتج ←",
        empty: "لا توجد منتجات.",
        description: "اكتشف الخصائص التقنية والتطبيقات الصناعية لهذا المنتج.",
    },
};

/* ------------------ UPDATED DATA WITH MULTI-CATEGORY SUPPORT ------------------ */
const PRODUCTS = [
    // Produits Importation: zinc, plomb, aluminium, cuivre, zamak
    {
        name: "Zinc",
        iconPath: "/finals/zinc_hg.png",
        category: "importation",
    },
    {
        name: "Plomb",
        iconPath: "/finals/plomb.png",
        category: "importation",
    },
    {
        name: "Aluminium",
        iconPath: "/finals/aluminium.png",
        category: "importation",
    },
    {
        name: "Cuivre",
        iconPath: "/finals/cuivre.png",
        category: "importation",
    },
    {
        name: "Zamak",
        iconPath: "/finals/zamak.png",
        category: "importation",
    },
    // Oxyde de Zinc - BELONGS TO BOTH CATEGORIES
    {
        name: "Oxyde de Zinc",
        iconPath: "/finals/oxyde_de_zinc2.png",
        category: ["fabrication", "exportation"], // Array for multiple categories
    },
    {
        name: "Carton",
        iconPath: "/finals/carton.png",
        category: "exportation",
    },
    {
        name: "Zinc Aluminé",
        iconPath: "/finals/zinc_alumine.png",
        category: "fabrication",
    },
];

const slugify = (name) =>
    String(name || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-\u00C0-\u024F]/g, "");

/* ------------------ PRODUCT CARD ------------------ */
const ProductCard = ({ name, iconPath, t, isDark }) => {
    const href = `/produits/${slugify(name)}`;

    // Colors for light/dark modes
    const cardBg = isDark ? "rgb(30, 35, 45)" : "rgb(240, 240, 240)";
    const cardBorder = isDark ? "rgb(60, 65, 75)" : "rgb(180, 180, 180)";
    const titleColor = isDark ? "rgb(240, 240, 240)" : "rgb(25, 43, 94)";
    const textColor = isDark ? "rgb(180, 180, 180)" : "rgb(180, 180, 180)";
    const gradientBlue = "linear-gradient(135deg, #2f86fd 0%, #4cf2ff 100%)";
    const gradientBlueHover =
        "linear-gradient(135deg, #3c91ff 0%, #5afaff 100%)";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
        >
            <Link
                href={href}
                className="group block rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                    backgroundColor: cardBg,
                    border: `1px solid ${cardBorder}`,
                    boxShadow: isDark
                        ? "0 10px 30px rgba(0, 0, 0, 0.3)"
                        : "0 4px 20px rgba(0, 0, 0, 0.05)",
                }}
            >
                <div className="relative w-full h-56">
                    <Image
                        src={iconPath}
                        alt={name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {isDark && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50" />
                    )}
                </div>
                <div className="p-6">
                    <h3
                        className="text-xl font-bold transition-colors duration-300"
                        style={{ color: titleColor }}
                    >
                        {name}
                    </h3>
                    <p
                        className="mt-2 text-sm transition-colors duration-300"
                        style={{ color: textColor }}
                    >
                        {t.description}
                    </p>
                    <span
                        className="inline-block mt-4 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        style={{
                            background: gradientBlue,
                            color: "white",
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                                gradientBlueHover;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = gradientBlue;
                        }}
                    >
                        {t.cta}
                    </span>
                </div>
            </Link>
        </motion.div>
    );
};

/* ------------------ MAIN PAGE ------------------ */
export default function ProduitsPage() {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const t = TRANSLATIONS[language] || TRANSLATIONS.fr;
    const isArabic = language === "ar";
    const isDark = theme === "dark";

    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProducts = useMemo(() => {
        return PRODUCTS.filter((p) => {
            // Handle both single category (string) and multiple categories (array)
            const matchCat =
                activeCategory === "all" ||
                (Array.isArray(p.category)
                    ? p.category.includes(activeCategory)
                    : p.category === activeCategory);
            const matchSearch = p.name
                .toLowerCase()
                .includes(search.toLowerCase());
            return matchCat && matchSearch;
        });
    }, [search, activeCategory]);

    // Colors for light/dark modes
    const pageBg = isDark ? "rgb(12, 18, 30)" : "rgb(240, 240, 240)";
    const titleColor = isDark ? "rgb(240, 240, 240)" : "rgb(25, 43, 94)";
    const subtitleColor = isDark ? "rgb(180, 180, 180)" : "rgb(180, 180, 180)";
    const searchBg = isDark ? "rgb(30, 35, 45)" : "white";
    const searchBorder = isDark ? "rgb(60, 65, 75)" : "rgb(180, 180, 180)";
    const searchText = isDark ? "rgb(240, 240, 240)" : "rgb(25, 43, 94)";
    const placeholderColor = isDark
        ? "rgb(100, 110, 120)"
        : "rgb(150, 150, 150)";
    const filterInactiveBg = isDark ? "rgb(30, 35, 45)" : "white";
    const filterInactiveText = isDark
        ? "rgb(180, 180, 180)"
        : "rgb(180, 180, 180)";
    const gradientBlue = "linear-gradient(135deg, #2f86fd 0%, #4cf2ff 100%)";
    const gradientBlueHover =
        "linear-gradient(135deg, #3c91ff 0%, #5afaff 100%)";

    return (
        <>
            <Header />
            <section
                className="py-16 min-h-screen transition-colors duration-300"
                dir={isArabic ? "rtl" : "ltr"}
                style={{
                    backgroundColor: pageBg,
                }}
            >
                <div className="h-28"></div>
                <div className="max-w-7xl mx-auto px-4">
                    {/* Title */}
                    <h1
                        className="text-5xl font-extrabold transition-colors duration-300"
                        style={{ color: titleColor }}
                    >
                        {t.title}
                    </h1>

                    {/* Subtitle */}
                    <p
                        className="mt-3 max-w-2xl transition-colors duration-300"
                        style={{ color: subtitleColor }}
                    >
                        {t.subtitle}
                    </p>

                    {/* Search and Filter Section */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-10 mb-8">
                        {/* Search Input */}
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder={t.search}
                            className="px-4 py-3 rounded-lg text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all duration-300"
                            style={{
                                backgroundColor: searchBg,
                                border: `1px solid ${searchBorder}`,
                                color: searchText,
                                boxShadow: isDark
                                    ? "0 2px 4px rgba(0,0,0,0.3)"
                                    : "0 2px 4px rgba(0,0,0,0.05)",
                                "--tw-ring-color": isDark
                                    ? "rgba(76, 242, 255, 0.5)"
                                    : "rgba(47, 134, 253, 0.5)",
                            }}
                        />

                        {/* Category Filters */}
                        <div className="flex gap-2 flex-wrap">
                            {[
                                "all",
                                "importation",
                                "exportation",
                                "fabrication",
                            ].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 ${
                                        activeCategory === cat
                                            ? "text-white shadow-lg"
                                            : "bg-white text-gray-600 hover:text-blue-500"
                                    }`}
                                    style={
                                        activeCategory === cat
                                            ? {
                                                  background: gradientBlue,
                                                  border: "1px solid rgba(255, 255, 255, 0.3)",
                                              }
                                            : {
                                                  backgroundColor:
                                                      filterInactiveBg,
                                                  border: `1px solid ${filterInactiveText}`,
                                                  color: filterInactiveText,
                                              }
                                    }
                                    onMouseEnter={(e) => {
                                        if (activeCategory === cat) {
                                            e.currentTarget.style.background =
                                                gradientBlueHover;
                                        } else {
                                            e.currentTarget.style.borderColor =
                                                isDark
                                                    ? "rgb(76, 242, 255)"
                                                    : "rgb(47, 134, 253)";
                                            e.currentTarget.style.color = isDark
                                                ? "rgb(76, 242, 255)"
                                                : "rgb(47, 134, 253)";
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (activeCategory === cat) {
                                            e.currentTarget.style.background =
                                                gradientBlue;
                                        } else {
                                            e.currentTarget.style.borderColor =
                                                filterInactiveText;
                                            e.currentTarget.style.color =
                                                filterInactiveText;
                                        }
                                    }}
                                >
                                    {cat === "all" ? t.all : t[cat]}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.length === 0 && (
                            <p
                                className="col-span-full text-center py-10 transition-colors duration-300"
                                style={{ color: subtitleColor }}
                            >
                                {t.empty}
                            </p>
                        )}
                        {filteredProducts.map((p, index) => (
                            <ProductCard
                                key={`${p.name}-${p.category}-${index}`}
                                {...p}
                                t={t}
                                isDark={isDark}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
