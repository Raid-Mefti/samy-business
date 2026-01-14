"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";

/* --------------------------------------------------
   PRODUCTS with correct business models
   UPDATED: Oxyde de Zinc now has both fabrication and export
-------------------------------------------------- */
const PRODUCTS = [
    {
        name: "Aluminium",
        img: "/finals/aluminium.png",
        color: "#3B82F6",
        businessModel: "import",
    },
    {
        name: "Plomb",
        img: "/finals/plomb.png",
        color: "#6B7280",
        businessModel: "import",
    },
    {
        name: "Oxyde de Zinc",
        img: "/finals/oxyde_de_zinc2.png",
        color: "#10B981",
        businessModel: ["fabrication", "export"], // CHANGED: Now an array with both categories
    },
    {
        name: "Zinc",
        img: "/finals/zinc_hg.png",
        color: "#F59E0B",
        businessModel: "import",
    },
    {
        name: "ZAMAK",
        img: "/finals/zamak.png",
        color: "#8B5CF6",
        businessModel: "import",
    },
    {
        name: "Carton",
        img: "/finals/carton.png",
        color: "#DC2626",
        businessModel: "export",
    },
    {
        name: "Zinc Aluminé",
        img: "/finals/zinc_alumine.png",
        color: "#0891B2",
        businessModel: "fabrication",
    },
    {
        name: "Cuivre",
        img: "/finals/cuivre.png",
        color: "#B45309",
        businessModel: "import",
    },
];

// Updated slugify function with special case for Zinc SHG
const slugify = (name) => {
    // Special case for "Zinc SHG" to match your productData key
    if (name.toLowerCase() === "zinc shg") {
        return "zinc-shg";
    }

    // Default slugify logic
    return String(name || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-\u00C0-\u024F]/g, "");
};

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
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const dragStartXRef = useRef(0);

    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);
    const [contentWidth, setContentWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const [currentPosition, setCurrentPosition] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

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

    const cardBackground = "rgba(255,255,255,0.05)";

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
                import: "Import",
                export: "Export",
                fabrication: "Fabrication",
            },
            en: {
                title: "Our Products",
                subtitle: "A quick overview of our industrial product range.",
                cta: "View full catalog",
                view: "View",
                paused: "Paused",
                import: "Import",
                export: "Export",
                fabrication: "Manufacturing",
            },
            ar: {
                title: "منتجاتنا",
                subtitle: "نظرة سريعة على مجموعة منتجاتنا الصناعية.",
                cta: "عرض جميع المنتجات",
                view: "عرض",
                paused: "الإيقاف مؤقتاً",
                import: "استيراد",
                export: "تصدير",
                fabrication: "تصنيع",
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
            const singleSetWidth = contentRef.current.scrollWidth / 4;
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

        const distance = isRtl ? contentWidth : -contentWidth;

        // Start animation for both desktop and mobile
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

    /* ----------------- Touch Handling (for mobile swipe) ----------------- */
    const handleDragStart = (event, info) => {
        isDraggingRef.current = true;
        setIsDragging(true);
        startXRef.current = currentPosition;
        dragStartXRef.current = info.point.x;

        // Pause the animation when user starts dragging
        controls.stop();
        isPausedRef.current = true;
    };

    const handleDrag = (event, info) => {
        if (!isDraggingRef.current) return;

        const dragDistance = info.point.x - dragStartXRef.current;
        const newPosition = startXRef.current + dragDistance;

        // Update position
        setCurrentPosition(newPosition);
        controls.set({ x: newPosition });
    };

    const handleDragEnd = (event, info) => {
        isDraggingRef.current = false;
        setIsDragging(false);

        // Resume animation after a short delay
        setTimeout(() => {
            if (!isPausedRef.current) {
                const distance = isRtl ? contentWidth : -contentWidth;
                const targetPosition = currentPosition + distance;

                controls.start({
                    x: [currentPosition, targetPosition],
                    transition: {
                        duration: 65,
                        ease: "linear",
                        repeat: Infinity,
                    },
                });
                setCurrentPosition(targetPosition);
                isPausedRef.current = false;
            }
        }, 100);
    };

    /* --------------------------------------------------
       RENDER
    -------------------------------------------------- */
    return (
        <section
            className="relative overflow-hidden pb-12 md:pb-20"
            dir={isRtl ? "rtl" : "ltr"}
            style={{ background: backgroundColor }}
        >
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-12 md:mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-4 px-4"
                    style={{ color: textPrimary }}
                >
                    {t.title}
                </motion.h2>
                <p
                    className="text-base md:text-lg font-light max-w-3xl mx-auto px-4"
                    style={{ color: textSecondary }}
                >
                    {t.subtitle}
                </p>
            </div>

            {/* Scroller Container */}
            <div className="relative">
                <div
                    ref={containerRef}
                    onMouseEnter={pause}
                    onMouseLeave={resume}
                    className="relative w-full cursor-pointer overflow-hidden"
                >
                    <div className="overflow-visible">
                        <motion.div
                            ref={contentRef}
                            animate={controls}
                            drag="x"
                            dragConstraints={{
                                left: -contentWidth * 3,
                                right: 0,
                            }}
                            dragElastic={0.2}
                            onDragStart={handleDragStart}
                            onDrag={handleDrag}
                            onDragEnd={handleDragEnd}
                            className="flex gap-4 md:gap-6 px-4 md:px-6 touch-pan-x"
                            style={{
                                width: "max-content",
                                cursor: isDragging ? "grabbing" : "grab",
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
                </div>

                {/* Pause indicator */}
                <motion.div
                    animate={{ opacity: isHovering ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 flex justify-center items-center gap-2 text-xs px-4"
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
            <div className="mt-12 md:mt-16 text-center px-4">
                <Link
                    href="/produits"
                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-white"
                    style={{
                        background: gradientBlue,
                        border: `1px solid ${accentBorder}`,
                        boxShadow: isDark
                            ? "0 10px 25px -5px rgba(76, 242, 255, 0.15)"
                            : "0 10px 25px -5px rgba(47, 134, 253, 0.15)",
                        // Mobile touch target size
                        minWidth: isMobile ? "min(280px, 85vw)" : "auto",
                        minHeight: isMobile ? "56px" : "auto",
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
   PRODUCT CARD - Updated to handle multiple business models
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

    // Use the same image for both desktop and mobile
    const imageSrc = product.img;

    // Card dimensions optimized for mobile - more compact
    const cardWidth = isMobile ? "w-[280px]" : "w-[320px]";
    const cardHeight = isMobile ? "h-[340px]" : "h-[400px]";

    // Get business model text based on product - UPDATED to handle arrays
    const getBusinessModelText = (businessModel) => {
        // If it's an array, join them with " & "
        if (Array.isArray(businessModel)) {
            return businessModel
                .map((model) => {
                    switch (model) {
                        case "import":
                            return t.import;
                        case "export":
                            return t.export;
                        case "fabrication":
                            return t.fabrication;
                        default:
                            return model;
                    }
                })
                .join(" & ");
        }

        // Single business model (string)
        switch (businessModel) {
            case "import":
                return t.import;
            case "export":
                return t.export;
            case "fabrication":
                return t.fabrication;
            default:
                return businessModel;
        }
    };

    return (
        <Link
            href={`/produits/${slugify(product.name)}`}
            className={`group relative flex-shrink-0 ${cardWidth} ${cardHeight} rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl active:scale-95 p-2`}
            style={{
                backgroundColor: cardBackground,
                border: `1px solid ${borderColor}`,
                boxShadow: isDark
                    ? "0 15px 40px rgba(0,0,0,0.25)"
                    : "0 15px 40px rgba(0,0,0,0.08)",
            }}
        >
            {/* Image container - 70% of height */}
            <div className={`relative h-[70%] w-full`}>
                {!loaded && (
                    <div
                        className="absolute inset-0 animate-pulse rounded-t-2xl md:rounded-t-3xl"
                        style={{
                            backgroundColor: isDark
                                ? "rgba(255,255,255,0.05)"
                                : "rgb(240, 240, 240)",
                        }}
                    />
                )}
                <div className="relative w-full h-full rounded-t-xl md:rounded-t-2xl md:p-20 overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={product.name}
                        fill
                        className="rounded-t-3xl object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes={isMobile ? "280px" : "320px"}
                        priority={false}
                        onLoad={() => setLoaded(true)}
                    />
                </div>
                {isDark && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgb(25,43,94,0.3)] to-transparent rounded-t-2xl md:rounded-t-3xl" />
                )}
            </div>

            {/* Bottom info panel - 30% of height with unified padding */}
            <div
                className={`absolute bottom-2 left-2 right-2 h-[30%] p-4 md:p-5 rounded-b-2xl md:rounded-b-3xl flex flex-col justify-between`}
                style={{
                    background: isDark
                        ? "linear-gradient(135deg, rgba(25, 43, 94, 0.98) 0%, rgba(18, 26, 44, 0.98) 100%)"
                        : "linear-gradient(135deg, rgb(25, 43, 94) 0%, rgba(25, 43, 94, 0.95) 100%)",
                    borderTop: `1px solid ${
                        isDark
                            ? "rgba(255,255,255,0.1)"
                            : "rgba(255,255,255,0.2)"
                    }`,
                }}
            >
                {/* Top section: Product name with unified spacing */}
                <div className="flex flex-col h-full justify-between">
                    <h3
                        className={`text-white font-bold truncate ${
                            isRtl ? "text-right" : "text-left"
                        }`}
                        style={{
                            fontSize: isMobile ? "1.2rem" : "1.35rem",
                            lineHeight: "1.2",
                        }}
                    >
                        {product.name}
                    </h3>

                    {/* Bottom section: Business model and CTA */}
                    <div className="flex justify-between items-center pt-2 border-t border-white/10">
                        {/* Business model status - Updated for multiple models */}
                        <span className="flex items-center gap-2">
                            <span
                                className="w-2 h-2 rounded-full flex-shrink-0"
                                style={{ background: product.color }}
                            />
                            <span
                                className="text-white/80 text-xs md:text-sm truncate"
                                style={{
                                    fontSize: isMobile ? "0.75rem" : "0.875rem",
                                }}
                            >
                                {getBusinessModelText(product.businessModel)}
                            </span>
                        </span>

                        {/* View button */}
                        <span
                            className="text-white text-xs md:text-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105 flex-shrink-0 flex items-center gap-1"
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
                            <svg
                                className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform"
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
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
