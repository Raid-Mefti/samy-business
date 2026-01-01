"use client";

import Header from "@/components/Header";
import Home1 from "@/components/Home1";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* ------------------ TRANSLATIONS ------------------ */
const TRANSLATIONS = {
    fr: {
        title: "Nos Produits",
        subtitle:
            "Catalogue de métaux et produits industriels destinés à l’import, l’export et la transformation.",
        search: "Rechercher un produit…",
        all: "Tous",
        imported: "Importés",
        exported: "Exportés",
        manufactured: "Fabriqués",
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
        imported: "Imported",
        exported: "Exported",
        manufactured: "Manufactured",
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
        imported: "مستوردة",
        exported: "مصدرة",
        manufactured: "مصنّعة",
        cta: "عرض المنتج ←",
        empty: "لا توجد منتجات.",
        description: "اكتشف الخصائص التقنية والتطبيقات الصناعية لهذا المنتج.",
    },
};

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

const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-");

/* ------------------ PRODUCT CARD ------------------ */
const ProductCard = ({ name, iconPath, t }) => {
    const href = `/produits/${slugify(name)}`;
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
        >
            <Link
                href={href}
                className="group block rounded-2xl bg-base-200 border border-base-300 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-[rgb(223,126,60)]"
            >
                <div className="relative w-full h-56">
                    <Image
                        src={iconPath}
                        alt={name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-base-content">
                        {name}
                    </h3>
                    <p className="mt-2 text-sm text-base-content/70">
                        {t.description}
                    </p>
                    <span className="inline-block mt-4 px-5 py-2 rounded-full bg-[rgb(223,126,60)] text-white text-sm font-semibold hover:bg-[rgb(223,126,60)]/90 transition-colors">
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
    const t = TRANSLATIONS[language] || TRANSLATIONS.fr;
    const isArabic = language === "ar";

    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProducts = useMemo(() => {
        return PRODUCTS.filter((p) => {
            const matchCat =
                activeCategory === "all" || p.category === activeCategory;
            const matchSearch = p.name
                .toLowerCase()
                .includes(search.toLowerCase());
            return matchCat && matchSearch;
        });
    }, [search, activeCategory]);

    return (
        <>
            <Header />
            <section id="article-hero">
                <Home1 />
            </section>

            <section
                className="py-16 bg-base-100 min-h-screen"
                dir={isArabic ? "rtl" : "ltr"}
            >
                <div className="h-28"></div>
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-5xl font-extrabold text-[rgb(223,126,60)]">
                        {t.title}
                    </h1>
                    <p className="mt-3 max-w-2xl text-base-content/70">
                        {t.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-10 mb-8">
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder={t.search}
                            className="px-4 py-3 border border-base-300 rounded-lg bg-base-200 text-base-content placeholder:text-base-content/50 focus:outline-none focus:ring-2 focus:ring-[rgb(223,126,60)] focus:border-transparent"
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
                                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                                        activeCategory === cat
                                            ? "bg-[rgb(223,126,60)] text-white border-[rgb(223,126,60)]"
                                            : "bg-base-200 border-base-300 text-base-content hover:border-[rgb(223,126,60)] hover:text-[rgb(223,126,60)]"
                                    }`}
                                >
                                    {cat === "all" ? t.all : t[cat]}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.length === 0 && (
                            <p className="text-base-content/70 col-span-full text-center py-10">
                                {t.empty}
                            </p>
                        )}
                        {filteredProducts.map((p) => (
                            <ProductCard key={p.name} {...p} t={t} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
