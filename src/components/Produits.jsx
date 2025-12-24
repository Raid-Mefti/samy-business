"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

/* ---- PRODUCTS (same source of truth) ---- */
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
    const isRtl = language === "ar";

    /* duplicate list for seamless loop */
    const items = [...PRODUCTS, ...PRODUCTS];

    return (
        <section
            className="py-24 bg-gradient-to-r from-orange-50 via-white to-orange-50 overflow-hidden"
            dir={isRtl ? "rtl" : "ltr"}
        >
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4">
                    {language === "ar"
                        ? "منتجاتنا"
                        : language === "en"
                        ? "Our Products"
                        : "Nos Produits"}
                </h2>

                <p className="max-w-3xl mx-auto md:mx-0 text-gray-600">
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
                    animate={{
                        x: isRtl ? ["-50%", "0%"] : ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 45,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {items.map((p, i) => (
                        <ProductMiniCard key={i} product={p} />
                    ))}
                </motion.div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
                <Link
                    href="/produits"
                    className="inline-block px-10 py-4 rounded-full bg-orange-600 text-white font-semibold shadow-lg hover:shadow-xl transition-transform hover:scale-105"
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

/* ---- CARD ---- */
function ProductMiniCard({ product }) {
    return (
        <Link
            href={`/produits/${slugify(product.name)}`}
            className="group relative min-w-[280px] h-[320px] bg-white/60 backdrop-blur-md rounded-3xl shadow-lg overflow-hidden border border-white/20 hover:scale-105 transition-transform duration-500"
        >
            <div className="relative w-full h-full ">
                <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay product name */}
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 text-white text-center font-semibold text-lg">
                    {product.name}
                </div>
            </div>
        </Link>
    );
}
