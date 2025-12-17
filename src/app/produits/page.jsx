"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Home1 from "@/components/Home1";
import { useLanguage } from "@/contexts/LanguageContext";
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

const slugify = (name) =>
    String(name || "")
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-ء-ي]/g, "");

/* ------------------ PRODUCT ROW ------------------ */

const ProductRow = ({ name, iconPath, category, t }) => {
    const href = `/article/${slugify(name)}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
        >
            <Link
                href={href}
                className="group flex flex-col md:flex-row rounded-3xl overflow-hidden bg-base-100 border border-base-200 shadow-md hover:shadow-xl transition"
            >
                <div className="relative w-full md:w-96 h-64">
                    <Image
                        src={iconPath}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-col justify-between p-8 flex-1">
                    <div>
                        <h3 className="text-3xl font-extrabold">{name}</h3>
                        <p className="mt-2 text-base-content/70 max-w-xl">
                            {t.description}
                        </p>
                    </div>

                    <span className="mt-6 inline-block px-6 py-3 rounded-full bg-[rgb(223,126,60)] text-white font-semibold w-fit">
                        {t.cta}
                    </span>
                </div>
            </Link>
        </motion.div>
    );
};

/* ------------------ PAGE ------------------ */

export default function ProduitsClient() {
    const { language } = useLanguage();
    const t = TRANSLATIONS[language];
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
            <Home1 />

            <section
                className="py-16 bg-base-100"
                dir={isArabic ? "rtl" : "ltr"}
            >
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-5xl font-extrabold text-[rgb(223,126,60)]">
                        {t.title}
                    </h1>
                    <p className="mt-3 max-w-2xl text-base-content/70">
                        {t.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-10 mb-12">
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder={t.search}
                            className="px-4 py-2 border rounded-lg"
                        />
                    </div>

                    <div className="space-y-8">
                        {filteredProducts.length === 0 && <p>{t.empty}</p>}
                        {filteredProducts.map((p) => (
                            <ProductRow key={p.name} {...p} t={t} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
