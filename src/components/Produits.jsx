"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";

/* ---- PRODUCTS ---- */
const PRODUCTS = [
    { name: "Aluminium", img: "/product_section/aluminium-en-lingots.avif" },
    { name: "Plomb Doux", img: "/product_section/plomb-doux.png" },
    { name: "Oxyde de Zinc", img: "/product_section/oxyde de zinc.avif" },
    { name: "Zinc SHG", img: "/product_section/SHG-99.995.png" },
    { name: "ZAMAK", img: "/product_section/lingots-du-zamak.webp" },
    { name: "Carton", img: "/carton.avif" },
    { name: "Zinc Aluminé", img: "/product_section/zinc-aluminé.jpg" },
    { name: "Cuivres", img: "/product_section/lingot-de-cuivre.jpg" },
];

const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-");

export default function HomeProductsScroller() {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const isRtl = language === "ar";

    const items = [...PRODUCTS, ...PRODUCTS]; // duplicate for continuous scroll

    return (
        <section
            className={`py-24 overflow-hidden ${
                theme === "dark"
                    ? "bg-gray-900"
                    : "bg-gradient-to-b from-base-100 to-base-200"
            }`}
            dir={isRtl ? "rtl" : "ltr"}
        >
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-14 text-center md:text-left">
                <h2
                    className={`text-4xl md:text-5xl font-extrabold mb-4 ${
                        theme === "dark"
                            ? "text-orange-400"
                            : "text-[rgb(223,126,60)]"
                    }`}
                >
                    {language === "ar"
                        ? "منتجاتنا"
                        : language === "en"
                        ? "Our Products"
                        : "Nos Produits"}
                </h2>

                <p
                    className={`max-w-3xl mx-auto md:mx-0 ${
                        theme === "dark"
                            ? "text-gray-300"
                            : "text-base-content/70"
                    }`}
                >
                    {language === "ar"
                        ? "نظرة سريعة على مجموعة منتجاتنا الصناعية."
                        : language === "en"
                        ? "A quick overview of our industrial product range."
                        : "Un aperçu rapide de notre gamme de produits industriels."}
                </p>
            </div>

            {/* SCROLLER */}
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-8 w-max"
                    animate={{ x: isRtl ? ["-50%", "0%"] : ["0%", "-50%"] }}
                    transition={{
                        duration: 45,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {items.map((p, i) => (
                        <ProductMiniCard key={i} product={p} theme={theme} />
                    ))}
                </motion.div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
                <Link
                    href="/produits"
                    className={`inline-flex items-center justify-center px-10 py-4 rounded-full font-semibold shadow-md transition hover:shadow-lg hover:scale-105 ${
                        theme === "dark"
                            ? "bg-orange-500 text-white"
                            : "bg-[rgb(223,126,60)] text-white"
                    }`}
                >
                    {language === "ar"
                        ? "عرض جميع المنتجات"
                        : language === "en"
                        ? "View full catalog"
                        : "Voir tout le catalogue"}
                </Link>
            </div>
        </section>
    );
}

/* ---- PRODUCT CARD ---- */
function ProductMiniCard({ product, theme }) {
    const isDark = theme === "dark";

    return (
        <Link
            href={`/produits/${slugify(product.name)}`}
            className={`group relative min-w-[280px] h-[320px] rounded-3xl overflow-hidden border shadow-md transition-transform duration-500 hover:scale-105 ${
                isDark
                    ? "bg-gray-800 border-gray-700 shadow-lg"
                    : "bg-base-100 border-base-300"
            }`}
        >
            <div className="relative w-full h-full">
                <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                    className={`absolute bottom-0 w-full px-4 py-4 text-center font-semibold text-lg text-white backdrop-blur-sm ${
                        isDark
                            ? "bg-black/70" // darker for dark mode
                            : "bg-black/40" // lighter for light mode
                    }`}
                >
                    {product.name}
                </div>
            </div>
        </Link>
    );
}
