"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

/* ---- PRODUCTS ---- */
const PRODUCTS = [
    {
        name: "Aluminium",
        img: "/product_section/aluminium-en-lingots.avif",
        color: "#3B82F6",
    },
    {
        name: "Plomb Doux",
        img: "/product_section/plomb-doux.png",
        color: "#6B7280",
    },
    {
        name: "Oxyde de Zinc",
        img: "/product_section/oxyde de zinc.avif",
        color: "#10B981",
    },
    {
        name: "Zinc SHG",
        img: "/product_section/SHG-99.995.png",
        color: "#F59E0B",
    },
    {
        name: "ZAMAK",
        img: "/product_section/lingots-du-zamak.webp",
        color: "#8B5CF6",
    },
    { name: "Carton", img: "/carton.avif", color: "#DC2626" },
    {
        name: "Zinc Aluminé",
        img: "/product_section/zinc-aluminé.jpg",
        color: "#0891B2",
    },
    {
        name: "Cuivres",
        img: "/product_section/lingot-de-cuivre.jpg",
        color: "#B45309",
    },
];

const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-");

export default function HomeProductsScroller() {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const isRtl = language === "ar";
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Create extended array for seamless scroll - triple for smooth edge-to-edge
    const extendedProducts = [...PRODUCTS, ...PRODUCTS, ...PRODUCTS];

    // Translations
    const translations = {
        fr: {
            title: "Nos Produits",
            subtitle:
                "Un aperçu rapide de notre gamme de produits industriels.",
            cta: "Voir tout le catalogue",
            viewProduct: "Voir le produit",
        },
        en: {
            title: "Our Products",
            subtitle: "A quick overview of our industrial product range.",
            cta: "View full catalog",
            viewProduct: "View product",
        },
        ar: {
            title: "منتجاتنا",
            subtitle: "نظرة سريعة على مجموعة منتجاتنا الصناعية.",
            cta: "عرض جميع المنتجات",
            viewProduct: "عرض المنتج",
        },
    };

    const t = translations[language] || translations.fr;

    // Calculate animation values based on content width
    const [contentWidth, setContentWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const updateWidths = () => {
            if (contentRef.current && containerRef.current) {
                const contentWidth = contentRef.current.scrollWidth / 3; // Since we tripled the array
                const containerWidth = containerRef.current.offsetWidth;
                setContentWidth(contentWidth);
                setContainerWidth(containerWidth);
            }
        };

        updateWidths();
        window.addEventListener("resize", updateWidths);
        return () => window.removeEventListener("resize", updateWidths);
    }, []);

    // Calculate animation distance to ensure cards appear from left edge and disappear at right edge
    const travelDistance = contentWidth - containerWidth;

    return (
        <section
            className={`relative py-16 md:py-24 overflow-hidden ${
                theme === "dark"
                    ? "bg-base-200"
                    : "bg-gradient-to-b from-base-100 to-base-200"
            }`}
            dir={isRtl ? "rtl" : "ltr"}
        >
            {/* Background gradient accents */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-[rgb(223,126,60)]/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
                            theme === "dark"
                                ? "text-white"
                                : "text-base-content"
                        }`}
                    >
                        <span className="text-[rgb(223,126,60)]">
                            {t.title}
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`text-base sm:text-lg max-w-3xl mx-auto ${
                            theme === "dark"
                                ? "text-base-content/70"
                                : "text-base-content/70"
                        }`}
                    >
                        {t.subtitle}
                    </motion.p>
                </div>

                {/* SCROLLER CONTAINER */}
                <div className="relative" ref={containerRef}>
                    {/* Gradient overlays for smooth fade-in/out at edges */}
                    <div
                        className={`absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r ${
                            theme === "dark" ? "from-base-200" : "from-base-100"
                        } to-transparent z-20 pointer-events-none ${
                            isRtl ? "right-0 left-auto bg-gradient-to-l" : ""
                        }`}
                    ></div>
                    <div
                        className={`absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l ${
                            theme === "dark" ? "from-base-200" : "from-base-100"
                        } to-transparent z-20 pointer-events-none ${
                            isRtl ? "left-0 right-auto bg-gradient-to-r" : ""
                        }`}
                    ></div>

                    {/* SCROLLER */}
                    <div className="relative w-full overflow-hidden">
                        <motion.div
                            className="flex gap-4 md:gap-8 w-max"
                            ref={contentRef}
                            animate={{
                                x: isRtl
                                    ? [0, -travelDistance]
                                    : [0, -travelDistance],
                            }}
                            transition={{
                                duration: 45,
                                ease: "linear",
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                        >
                            {extendedProducts.map((product, index) => (
                                <ProductMiniCard
                                    key={`${product.name}-${index}`}
                                    product={product}
                                    theme={theme}
                                    language={language}
                                    t={t}
                                    isMobile={isMobile}
                                />
                            ))}
                        </motion.div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="flex justify-center mt-6">
                        <div
                            className={`h-1 w-24 rounded-full ${
                                theme === "dark"
                                    ? "bg-base-content/30"
                                    : "bg-base-content/20"
                            }`}
                        >
                            <motion.div
                                className="h-full w-1/3 bg-[rgb(223,126,60)] rounded-full"
                                animate={{ x: ["0%", "200%"] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 md:mt-16 text-center"
                >
                    <Link
                        href="/produits"
                        className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold 
                        bg-[rgb(223,126,60)] text-white shadow-lg hover:shadow-xl hover:scale-105 
                        transition-all duration-300 hover:bg-[rgb(223,126,60)]/90 active:scale-95"
                    >
                        <span>{t.cta}</span>
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className={isRtl ? "rotate-180" : ""}
                        >
                            {isRtl ? "←" : "→"}
                        </motion.span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

/* ---- PRODUCT CARD ---- */
function ProductMiniCard({ product, theme, language, t, isMobile }) {
    const isDark = theme === "dark";
    const isRtl = language === "ar";

    return (
        <div className="relative">
            <Link
                href={`/produits/${slugify(product.name)}`}
                className={`group block ${
                    isMobile ? "w-64 h-56" : "min-w-[280px] h-[320px]"
                } rounded-2xl md:rounded-3xl overflow-hidden border-2 shadow-lg transition-all duration-500 hover:shadow-2xl ${
                    isDark
                        ? "bg-base-300 border-base-400"
                        : "bg-base-100 border-base-300"
                }`}
            >
                {/* Image Container */}
                <div className="relative w-full h-3/4 overflow-hidden">
                    <Image
                        src={product.img}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 256px, 280px"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        priority={false}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                    {/* Color accent */}
                    <div
                        className="absolute top-4 right-4 w-3 h-3 rounded-full"
                        style={{ backgroundColor: product.color }}
                    />
                </div>

                {/* Content */}
                <div
                    className={`absolute bottom-0 w-full p-4 md:p-6 ${
                        isDark ? "bg-black/80" : "bg-black/70"
                    } backdrop-blur-sm`}
                >
                    <div className="flex items-center justify-between">
                        <h3
                            className={`text-lg md:text-xl font-bold text-white line-clamp-1 ${
                                isRtl ? "text-right" : "text-left"
                            }`}
                        >
                            {product.name}
                        </h3>
                        <span className="text-white/70 text-sm font-medium px-3 py-1 rounded-full border border-white/30">
                            {t.viewProduct}
                        </span>
                    </div>

                    {/* Price/Stock indicator */}
                    <div className="mt-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-white/70 text-sm">
                            {language === "ar"
                                ? "متوفر"
                                : language === "en"
                                ? "In Stock"
                                : "En Stock"}
                        </span>
                    </div>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[rgb(223,126,60)] rounded-2xl md:rounded-3xl transition-colors duration-500 pointer-events-none" />
            </Link>
        </div>
    );
}
