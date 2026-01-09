"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";

/* --------------------------------------------------
   PRODUCTS
-------------------------------------------------- */
const PRODUCTS = [
    {
        name: "Aluminium",
        img: "/finals/aluminium.png",
        color: "#3B82F6",
        shortName: "Aluminium",
        category: "Métal",
    },
    {
        name: "Plomb Doux",
        img: "/finals/plomb.png",
        color: "#6B7280",
        shortName: "Plomb Doux",
        category: "Métal",
    },
    {
        name: "Oxyde de Zinc",
        img: "/finals/oxyde_de_zinc2.png",
        color: "#10B981",
        shortName: "Oxyde Zinc",
        category: "Chimique",
    },
    {
        name: "Zinc SHG",
        img: "/finals/zinc_hg.png",
        color: "#F59E0B",
        shortName: "Zinc SHG",
        category: "Métal",
    },
    {
        name: "ZAMAK",
        img: "/finals/zamak.png",
        color: "#8B5CF6",
        shortName: "ZAMAK",
        category: "Alliage",
    },
    {
        name: "Carton",
        img: "/finals/carton.png",
        color: "#DC2626",
        shortName: "Carton",
        category: "Emballage",
    },
    {
        name: "Zinc Aluminé",
        img: "/finals/zinc_alumine.png",
        color: "#0891B2",
        shortName: "Zinc Aluminé",
        category: "Alliage",
    },
    {
        name: "Cuivres",
        img: "/finals/cuivre.png",
        color: "#B45309",
        shortName: "Cuivres",
        category: "Métal",
    },
];

const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-");

/* --------------------------------------------------
   MAIN COMPONENT
-------------------------------------------------- */
export default function HomeProductsScroller() {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const isRtl = language === "ar";
    const isDark = theme === "dark";

    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const controls = useAnimation();
    const lastPositionRef = useRef(0);
    const isPausedRef = useRef(false);

    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);
    const [contentWidth, setContentWidth] = useState(0); // Width of ONE set of products
    const [containerWidth, setContainerWidth] = useState(0);

    // Theme-based colors
    const gradientBlue =
        "linear-gradient(135deg, rgb(47, 134, 253) 0%, rgb(76, 242, 255) 100%)";
    const gradientBlueHover =
        "linear-gradient(135deg, rgb(60, 145, 255) 0%, rgb(90, 250, 255) 100%)";
    const darkBlue = "rgb(25,43,94)";

    // Backgrounds
    const backgroundColor = isDark
        ? "linear-gradient(135deg, rgb(12,18,30) 0%, rgb(18,26,44) 100%)"
        : "linear-gradient(135deg, rgb(240, 240, 240) 0%, rgb(245, 245, 245) 100%)";

    const cardBackground = isDark ? "rgba(255,255,255,0.05)" : "white";
    const elevatedCardBackground = isDark ? "rgba(255,255,255,0.08)" : "white";

    // Text colors
    const textPrimary = isDark ? "rgb(240,240,240)" : "rgb(25, 43, 94)";
    const textSecondary = isDark ? "rgb(180,180,180)" : "rgb(25, 43, 94)";

    // Borders & dividers
    const borderColor = isDark ? "rgba(255,255,255,0.1)" : "rgb(180, 180, 180)";
    const accentBorder = isDark
        ? "rgba(76,242,255,0.3)"
        : "rgba(255,255,255,0.3)";

    /* ----------------- Translations ----------------- */
    const t =
        {
            fr: {
                title: "Nos Produits",
                subtitle:
                    "Un aperçu rapide de notre gamme de produits industriels.",
                cta: "Voir tout le catalogue",
                view: "Voir",
                paused: "En pause",
                stock: "En stock",
            },
            en: {
                title: "Our Products",
                subtitle: "A quick overview of our industrial product range.",
                cta: "View full catalog",
                view: "View",
                paused: "Paused",
                stock: "In stock",
            },
            ar: {
                title: "منتجاتنا",
                subtitle: "نظرة سريعة على مجموعة منتجاتنا الصناعية.",
                cta: "عرض جميع المنتجات",
                view: "عرض",
                paused: "الإيقاف مؤقتاً",
                stock: "متوفر",
            },
        }[language] ?? t.fr;

    /* ----------------- Effects ----------------- */
    useEffect(() => {
        const resize = () => setIsMobile(window.innerWidth < 768);
        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(mq.matches);
        const handler = (e) => setReducedMotion(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    useEffect(() => {
        const updateWidths = () => {
            if (!contentRef.current || !containerRef.current) return;
            const singleSetWidth = contentRef.current.scrollWidth / 4; // 4 copies
            setContentWidth(singleSetWidth);
            setContainerWidth(containerRef.current.offsetWidth);
        };

        updateWidths();
        window.addEventListener("resize", updateWidths);
        return () => window.removeEventListener("resize", updateWidths);
    }, []);

    /* ----------------- Animation Setup ----------------- */
    useEffect(() => {
        if (reducedMotion || !contentWidth || !containerWidth) return;

        // LTR: scroll left  → start at 0, go to -contentWidth
        // RTL: scroll right → start at 0, go to +contentWidth
        const distance = isRtl ? contentWidth : -contentWidth;

        controls.start({
            x: [0, distance],
            transition: {
                duration: 65,
                ease: "linear",
                repeat: Infinity,
            },
        });

        lastPositionRef.current = 0;
    }, [contentWidth, containerWidth, reducedMotion, isRtl, controls]);

    /* ----------------- Hover Pause/Resume ----------------- */
    const pause = () => {
        if (reducedMotion) return;
        setIsHovering(true);
        isPausedRef.current = true;
        controls.stop();

        // Capture current position
        if (contentRef.current) {
            const transform =
                contentRef.current.style.transform || "translateX(0px)";
            const match = transform.match(/translateX\(([^)]+)px\)/);
            if (match) {
                lastPositionRef.current = parseFloat(match[1]);
            }
        }
    };

    const resume = () => {
        if (reducedMotion) return;
        setIsHovering(false);
        isPausedRef.current = false;

        const distance = isRtl ? contentWidth : -contentWidth;

        controls.start({
            x: [lastPositionRef.current, lastPositionRef.current + distance],
            transition: {
                duration: 65,
                ease: "linear",
                repeat: Infinity,
            },
        });
    };

    /* --------------------------------------------------
       RENDER
    -------------------------------------------------- */
    return (
        <section
            className="relative overflow-hidden"
            dir={isRtl ? "rtl" : "ltr"}
            style={{ background: backgroundColor }}
        >
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 text-center mb-14">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold"
                    style={{ color: textPrimary }}
                >
                    {t.title}
                </motion.h2>
                <p
                    className="mt-4 max-w-3xl mx-auto text-lg font-light"
                    style={{ color: textSecondary }}
                >
                    {t.subtitle}
                </p>
            </div>

            {/* Scroller */}
            <div
                ref={containerRef}
                onMouseEnter={pause}
                onMouseLeave={resume}
                className="relative w-full cursor-pointer"
            >
                <div className="overflow-hidden">
                    <motion.div
                        ref={contentRef}
                        animate={controls}
                        className="flex gap-6"
                        style={{
                            width: "max-content",
                        }}
                    >
                        {[
                            ...PRODUCTS,
                            ...PRODUCTS,
                            ...PRODUCTS,
                            ...PRODUCTS,
                        ].map((p, i) => (
                            <ProductCard
                                key={`${p.name}-${i}`}
                                product={p}
                                t={t}
                                isMobile={isMobile}
                                isDark={isDark}
                                isRtl={isRtl}
                                cardBackground={cardBackground}
                                borderColor={borderColor}
                                gradientBlue={gradientBlue}
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Pause indicator */}
                <motion.div
                    animate={{ opacity: isHovering ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 flex justify-center items-center gap-2 text-xs"
                    style={{ color: textPrimary }}
                >
                    <span
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ background: gradientBlue }}
                    />
                    {t.paused}
                </motion.div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
                <Link
                    href="/products"
                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-white"
                    style={{
                        background: gradientBlue,
                        border: `1px solid ${accentBorder}`,
                        boxShadow: isDark
                            ? "0 10px 25px -5px rgba(76, 242, 255, 0.15)"
                            : "0 10px 25px -5px rgba(47, 134, 253, 0.15)",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = gradientBlueHover;
                        e.currentTarget.style.boxShadow = isDark
                            ? "0 20px 40px -10px rgba(76, 242, 255, 0.25)"
                            : "0 20px 40px -10px rgba(47, 134, 253, 0.25)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = gradientBlue;
                        e.currentTarget.style.boxShadow = isDark
                            ? "0 10px 25px -5px rgba(76, 242, 255, 0.15)"
                            : "0 10px 25px -5px rgba(47, 134, 253, 0.15)";
                    }}
                >
                    {t.cta}
                    <svg
                        className={`w-4 h-4 transform group-hover:translate-x-1 transition-transform ${
                            isRtl ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                </Link>
            </div>
        </section>
    );
}

/* --------------------------------------------------
   PRODUCT CARD
-------------------------------------------------- */
function ProductCard({
    product,
    t,
    isMobile,
    isDark,
    isRtl,
    cardBackground,
    borderColor,
    gradientBlue,
}) {
    const [loaded, setLoaded] = useState(false);

    return (
        <Link
            href={`/produits/${slugify(product.name)}`}
            className={`group relative flex-shrink-0 ${
                isMobile ? "w-72 h-64" : "w-80 h-96"
            } rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl`}
            style={{
                backgroundColor: cardBackground,
                border: `1px solid ${borderColor}`,
                boxShadow: isDark
                    ? "0 20px 60px rgba(0,0,0,0.3)"
                    : "0 20px 60px rgba(0,0,0,0.08)",
            }}
        >
            {/* Image container with dark mode overlay */}
            <div className="relative h-2/3">
                {!loaded && (
                    <div
                        className="absolute inset-0 animate-pulse"
                        style={{
                            backgroundColor: isDark
                                ? "rgba(255,255,255,0.05)"
                                : "rgb(240, 240, 240)",
                        }}
                    />
                )}
                <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    onLoad={() => setLoaded(true)}
                />
                {isDark && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgb(25,43,94,0.3)] to-transparent" />
                )}
            </div>

            {/* Bottom info panel - Dark mode adjusted */}
            <div
                className="absolute bottom-0 w-full h-1/3 p-5 rounded-b-3xl flex flex-col justify-between"
                style={{
                    background: isDark
                        ? "linear-gradient(135deg, rgba(25, 43, 94, 0.9) 0%, rgba(18, 26, 44, 0.95) 100%)"
                        : "linear-gradient(135deg, rgb(25, 43, 94) 0%, rgba(25, 43, 94, 0.9) 100%)",
                    borderTop: `1px solid ${
                        isDark
                            ? "rgba(255,255,255,0.1)"
                            : "rgba(255,255,255,0.2)"
                    }`,
                }}
            >
                <div className="flex justify-between items-start gap-3">
                    <h3
                        className={`text-white font-bold truncate ${
                            isRtl ? "text-right" : ""
                        }`}
                    >
                        {product.name}
                    </h3>
                    <span
                        className="text-xs text-white/90 rounded-full px-3 py-1 transition-all duration-300 group-hover:bg-white/20"
                        style={{
                            border: `1px solid ${
                                isDark
                                    ? "rgba(255, 255, 255, 0.4)"
                                    : "rgba(255, 255, 255, 0.4)"
                            }`,
                            background: isDark
                                ? "rgba(255, 255, 255, 0.15)"
                                : "rgba(255, 255, 255, 0.1)",
                        }}
                    >
                        {t.view}
                    </span>
                </div>

                <div className="flex justify-between items-center text-white/80 text-sm">
                    <span className="flex items-center gap-2">
                        <span
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ background: gradientBlue }}
                        />
                        {t.stock}
                    </span>
                    <span className="flex items-center gap-2">
                        <span
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: product.color }}
                        />
                        {product.shortName}
                    </span>
                </div>
            </div>
        </Link>
    );
}
