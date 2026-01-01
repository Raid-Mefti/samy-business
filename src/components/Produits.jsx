"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";

/* ---- PRODUCTS ---- */
const PRODUCTS = [
    {
        name: "Aluminium",
        img: "/product_section/aluminium-en-lingots.avif",
        color: "#3B82F6",
        shortName: "Aluminium",
    },
    {
        name: "Plomb Doux",
        img: "/product_section/plomb-doux.png",
        color: "#6B7280",
        shortName: "Plomb Doux",
    },
    {
        name: "Oxyde de Zinc",
        img: "/product_section/oxyde de zinc.avif",
        color: "#10B981",
        shortName: "Oxyde Zinc",
    },
    {
        name: "Zinc SHG",
        img: "/product_section/SHG-99.995.png",
        color: "#F59E0B",
        shortName: "Zinc SHG",
    },
    {
        name: "ZAMAK",
        img: "/product_section/lingots-du-zamak.webp",
        color: "#8B5CF6",
        shortName: "ZAMAK",
    },
    {
        name: "Carton",
        img: "/carton.avif",
        color: "#DC2626",
        shortName: "Carton",
    },
    {
        name: "Zinc Aluminé",
        img: "/product_section/zinc-aluminé.jpg",
        color: "#0891B2",
        shortName: "Zinc Aluminé",
    },
    {
        name: "Cuivres",
        img: "/product_section/lingot-de-cuivre.jpg",
        color: "#B45309",
        shortName: "Cuivres",
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
    const controls = useAnimation();
    const [isHovering, setIsHovering] = useState(false);
    const currentPositionRef = useRef(0);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Create extended array for seamless scroll - quadruple for full width coverage
    const extendedProducts = [
        ...PRODUCTS,
        ...PRODUCTS,
        ...PRODUCTS,
        ...PRODUCTS,
    ];

    // Translations
    const translations = {
        fr: {
            title: "Nos Produits",
            subtitle:
                "Un aperçu rapide de notre gamme de produits industriels.",
            cta: "Voir tout le catalogue",
            viewProduct: "Voir",
        },
        en: {
            title: "Our Products",
            subtitle: "A quick overview of our industrial product range.",
            cta: "View full catalog",
            viewProduct: "View",
        },
        ar: {
            title: "منتجاتنا",
            subtitle: "نظرة سريعة على مجموعة منتجاتنا الصناعية.",
            cta: "عرض جميع المنتجات",
            viewProduct: "عرض",
        },
    };

    const t = translations[language] || translations.fr;

    // Calculate animation values
    const [contentWidth, setContentWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const updateWidths = () => {
            if (contentRef.current && containerRef.current) {
                const contentWidth = contentRef.current.scrollWidth / 4; // Since we quadrupled the array
                const containerWidth = containerRef.current.offsetWidth;
                setContentWidth(contentWidth);
                setContainerWidth(containerWidth);
            }
        };

        updateWidths();
        window.addEventListener("resize", updateWidths);
        return () => window.removeEventListener("resize", updateWidths);
    }, []);

    // Calculate total distance to travel (from right edge to left edge)
    const travelDistance = contentWidth + containerWidth; // Full width coverage

    // Start the animation when widths are calculated
    useEffect(() => {
        if (contentWidth > 0 && containerWidth > 0) {
            currentPositionRef.current = isRtl ? containerWidth : -contentWidth;
            controls.start({
                x: [currentPositionRef.current, -travelDistance],
                transition: {
                    duration: 60,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                },
            });
        }
    }, [contentWidth, containerWidth, travelDistance, isRtl, controls]);

    // Handle hover to pause animation
    const handleMouseEnter = () => {
        setIsHovering(true);
        controls.stop(); // This actually pauses the animation

        // Get the current transform value from the DOM
        if (contentRef.current) {
            const transform = contentRef.current.style.transform;
            if (transform) {
                // Extract the x value from translateX() or translate3d()
                const match =
                    transform.match(/translateX\(([^)]+)\)/) ||
                    transform.match(/translate3d\(([^,]+)/);
                if (match) {
                    const xValue = parseFloat(match[1]);
                    if (!isNaN(xValue)) {
                        currentPositionRef.current = xValue;
                    }
                }
            }
        }
    };

    const handleMouseLeave = () => {
        setIsHovering(false);

        // Restart animation from current position
        controls.start({
            x: [currentPositionRef.current, -travelDistance],
            transition: {
                duration: 60,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
            },
        });
    };

    return (
        <section
            className={`relative py-16 md:py-24 overflow-hidden w-screen ${
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

            <div className="relative z-10">
                {/* Header - now centered with proper margins */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-16">
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

                {/* SCROLLER CONTAINER - FULL WIDTH */}
                <div
                    className="relative w-full"
                    ref={containerRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Gradient overlays for smooth fade-in/out at edges */}
                    <div
                        className={`absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r ${
                            theme === "dark" ? "from-base-200" : "from-base-100"
                        } to-transparent z-20 pointer-events-none ${
                            isRtl ? "right-0 left-auto bg-gradient-to-l" : ""
                        }`}
                    ></div>
                    <div
                        className={`absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l ${
                            theme === "dark" ? "from-base-200" : "from-base-100"
                        } to-transparent z-20 pointer-events-none ${
                            isRtl ? "left-0 right-auto bg-gradient-to-r" : ""
                        }`}
                    ></div>

                    {/* SCROLLER - FULL WIDTH */}
                    <div className="relative w-full overflow-hidden">
                        <motion.div
                            className="flex gap-4 md:gap-8 w-max"
                            ref={contentRef}
                            animate={controls}
                            style={{
                                paddingLeft: isRtl
                                    ? "0"
                                    : containerWidth + "px",
                                paddingRight: isRtl
                                    ? containerWidth + "px"
                                    : "0",
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

                    {/* Scroll indicator with pause state */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center mt-6">
                        <div className="flex flex-col items-center gap-3">
                            <div
                                className={`h-1 w-24 rounded-full ${
                                    theme === "dark"
                                        ? "bg-base-content/30"
                                        : "bg-base-content/20"
                                }`}
                            >
                                <motion.div
                                    className="h-full w-1/3 bg-[rgb(223,126,60)] rounded-full"
                                    animate={{
                                        x: isHovering ? "0%" : ["0%", "200%"],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                            </div>
                            {isHovering && (
                                <div className="text-xs text-base-content/50 flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-[rgb(223,126,60)] animate-pulse"></span>
                                    <span>
                                        {language === "ar"
                                            ? "الإيقاف مؤقتاً"
                                            : language === "en"
                                            ? "Paused"
                                            : "En pause"}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16 text-center"
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

    // Define consistent dimensions
    const cardWidth = isMobile ? "w-72" : "w-80";
    const cardHeight = isMobile ? "h-64" : "h-96";

    return (
        <div className="relative overflow-hidden">
            <Link
                href={`/produits/${slugify(product.name)}`}
                className={`group block ${cardWidth} ${cardHeight} rounded-2xl md:rounded-3xl overflow-hidden border-2 shadow-lg transition-all duration-500 hover:shadow-2xl ${
                    isDark
                        ? "bg-base-300 border-base-400"
                        : "bg-base-100 border-base-300"
                }`}
            >
                {/* Image Container - Fixed height */}
                <div className="relative w-full h-2/3 overflow-hidden">
                    <Image
                        src={product.img}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 288px, 320px"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        priority={false}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                    {/* Color accent - Consistent positioning */}
                    <div
                        className="absolute top-4 right-4 w-3 h-3 rounded-full shadow-md"
                        style={{ backgroundColor: product.color }}
                    />
                </div>

                {/* Content Container */}
                <div
                    className={`bottom-0 w-full h-1/3 p-4 md:p-6 flex flex-col justify-between  ${
                        isDark ? "bg-black/90" : "bg-black/85"
                    } backdrop-blur-sm`}
                >
                    {/* Title and button row */}
                    <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                            <h3
                                className={`text-lg md:text-xl font-bold text-white truncate ${
                                    isRtl ? "text-right" : "text-left"
                                }`}
                                title={product.name}
                            >
                                {product.name}
                            </h3>
                        </div>
                        <span
                            className={`flex-shrink-0 text-white/80 text-xs md:text-sm font-medium px-2 md:px-3 py-1 rounded-full border border-white/30 whitespace-nowrap ${
                                isRtl ? "mr-2" : "ml-2"
                            }`}
                        >
                            {t.viewProduct}
                        </span>
                    </div>

                    {/* Stock indicator  */}
                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-white/70 text-sm whitespace-nowrap">
                                {language === "ar"
                                    ? "متوفر"
                                    : language === "en"
                                    ? "In Stock"
                                    : "En Stock"}
                            </span>
                        </div>

                        {/* Material type indicator */}
                        <div className="flex items-center gap-1">
                            <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: product.color }}
                            />
                            <span className="text-white/60 text-xs font-medium capitalize">
                                {product.shortName}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Hover effect border  */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[rgb(223,126,60)]  rounded-2xl md:rounded-3xl transition-colors duration-500 pointer-events-none" />
            </Link>
        </div>
    );
}
