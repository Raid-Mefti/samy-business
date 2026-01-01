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
        img: "/product_section/aluminium-en-lingots.avif",
        color: "#3B82F6",
        shortName: "Aluminium",
        category: "Métal",
    },
    {
        name: "Plomb Doux",
        img: "/product_section/plomb-doux.png",
        color: "#6B7280",
        shortName: "Plomb Doux",
        category: "Métal",
    },
    {
        name: "Oxyde de Zinc",
        img: "/product_section/oxyde de zinc.avif",
        color: "#10B981",
        shortName: "Oxyde Zinc",
        category: "Chimique",
    },
    {
        name: "Zinc SHG",
        img: "/product_section/SHG-99.995.png",
        color: "#F59E0B",
        shortName: "Zinc SHG",
        category: "Métal",
    },
    {
        name: "ZAMAK",
        img: "/product_section/lingots-du-zamak.webp",
        color: "#8B5CF6",
        shortName: "ZAMAK",
        category: "Alliage",
    },
    {
        name: "Carton",
        img: "/carton.avif",
        color: "#DC2626",
        shortName: "Carton",
        category: "Emballage",
    },
    {
        name: "Zinc Aluminé",
        img: "/product_section/zinc-aluminé.jpg",
        color: "#0891B2",
        shortName: "Zinc Aluminé",
        category: "Alliage",
    },
    {
        name: "Cuivres",
        img: "/product_section/lingot-de-cuivre.jpg",
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
    const animationFrameRef = useRef(null);
    const lastPositionRef = useRef(0);
    const isPausedRef = useRef(false);

    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);
    const [contentWidth, setContentWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    /* ----------------- Translations ----------------- */
    const t = {
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
    }[language] ?? {
        title: "Nos Produits",
        subtitle: "Un aperçu rapide de notre gamme de produits industriels.",
        cta: "Voir tout le catalogue",
        view: "Voir",
        paused: "En pause",
        stock: "En stock",
    };

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
        mq.addEventListener("change", (e) => setReducedMotion(e.matches));
        return () => mq.removeEventListener("change", () => {});
    }, []);

    useEffect(() => {
        const updateWidths = () => {
            if (!contentRef.current || !containerRef.current) return;
            setContentWidth(contentRef.current.scrollWidth / 4);
            setContainerWidth(containerRef.current.offsetWidth);
        };

        updateWidths();
        window.addEventListener("resize", updateWidths);
        return () => window.removeEventListener("resize", updateWidths);
    }, []);

    // Track the current position during animation
    useEffect(() => {
        if (reducedMotion || !contentWidth || !containerWidth) return;

        const updatePosition = () => {
            if (contentRef.current && !isPausedRef.current) {
                const transform = contentRef.current.style.transform;
                if (transform) {
                    const match = transform.match(/translateX\(([^)]+)px\)/);
                    if (match) {
                        const xValue = parseFloat(match[1]);
                        if (!isNaN(xValue)) {
                            lastPositionRef.current = xValue;
                        }
                    }
                }
            }
            animationFrameRef.current = requestAnimationFrame(updatePosition);
        };

        animationFrameRef.current = requestAnimationFrame(updatePosition);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [contentWidth, containerWidth, reducedMotion]);

    // Start animation
    useEffect(() => {
        if (!contentWidth || !containerWidth || reducedMotion) return;

        const startX = isRtl ? containerWidth : -contentWidth;
        const endX = -contentWidth - containerWidth;

        lastPositionRef.current = startX;

        controls.start({
            x: [startX, endX],
            transition: {
                duration: 65,
                ease: "linear",
                repeat: Infinity,
            },
        });
    }, [contentWidth, containerWidth, reducedMotion, isRtl, controls]);

    /* ----------------- Hover logic ----------------- */
    const pause = () => {
        if (reducedMotion) return;
        setIsHovering(true);
        isPausedRef.current = true;
        controls.stop();
    };

    const resume = () => {
        if (reducedMotion) return;
        setIsHovering(false);
        isPausedRef.current = false;

        const endX = -contentWidth - containerWidth;

        controls.start({
            x: [lastPositionRef.current, endX],
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
            className={`relative py-20 overflow-hidden ${
                isDark
                    ? "bg-base-200"
                    : "bg-gradient-to-b from-base-100 to-base-200"
            }`}
            dir={isRtl ? "rtl" : "ltr"}
        >
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 text-center mb-14">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold"
                >
                    <span className="text-[rgb(223,126,60)]">{t.title}</span>
                </motion.h2>
                <p className="mt-4 text-base-content/70 max-w-3xl mx-auto">
                    {t.subtitle}
                </p>
            </div>

            {/* Scroller */}
            <div
                ref={containerRef}
                onMouseEnter={pause}
                onMouseLeave={resume}
                className="relative w-full"
            >
                <div className="overflow-hidden">
                    <motion.div
                        ref={contentRef}
                        animate={controls}
                        className="flex gap-6 w-max"
                        style={{
                            paddingLeft: isRtl ? 0 : containerWidth + "px",
                            paddingRight: isRtl ? containerWidth + "px" : "0",
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
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Pause indicator */}
                <motion.div
                    animate={{ opacity: isHovering ? 1 : 0 }}
                    className="mt-6 flex justify-center items-center gap-2 text-xs text-base-content/50"
                >
                    <span className="w-2 h-2 bg-[rgb(223,126,60)] rounded-full animate-pulse" />
                    {t.paused}
                </motion.div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
                <Link
                    href="/produits"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[rgb(223,126,60)] text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                    {t.cta}
                    <span>{isRtl ? "←" : "→"}</span>
                </Link>
            </div>
        </section>
    );
}

/* --------------------------------------------------
   PRODUCT CARD
-------------------------------------------------- */
function ProductCard({ product, t, isMobile, isDark, isRtl }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <Link
            href={`/produits/${slugify(product.name)}`}
            className={`group relative ${
                isMobile ? "w-72 h-64" : "w-80 h-96"
            } rounded-3xl overflow-hidden border transition-all duration-500 ${
                isDark
                    ? "bg-base-300 border-base-400"
                    : "bg-white border-base-200"
            } hover:shadow-2xl`}
        >
            {/* Image */}
            <div className="relative h-2/3">
                {!loaded && (
                    <div className="absolute inset-0 bg-base-300 animate-pulse" />
                )}
                <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    onLoad={() => setLoaded(true)}
                />
            </div>

            {/* Bottom content */}
            <div className="absolute bottom-0 w-full h-1/3 bg-black/90 p-5 rounded-b-3xl flex flex-col justify-between">
                <div className="flex justify-between items-start gap-3">
                    <h3
                        className={`text-white font-bold truncate ${
                            isRtl ? "text-right" : ""
                        }`}
                    >
                        {product.name}
                    </h3>
                    <span className="text-xs text-white/80 border border-white/40 rounded-full px-3 py-1">
                        {t.view}
                    </span>
                </div>

                <div className="flex justify-between items-center text-white/80 text-sm">
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[rgb(223,126,60)] rounded-full animate-pulse" />
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
