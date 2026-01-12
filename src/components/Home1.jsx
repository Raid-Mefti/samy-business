"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const translations = {
    fr: {
        slogan: "Excellence<br />industrielle<br />sans frontières",
        subtitle: "Bureau d'affaires &<br />consulting import-export",
        cta: "Demander un devis",
    },
    en: {
        slogan: "Industrial<br />excellence<br />without borders",
        subtitle: "Business office &<br />import-export consulting",
        cta: "Request a quote",
    },
    ar: {
        slogan: "تميز<br />صناعي<br />بلا حدود",
        subtitle: "مكتب أعمال واستشارات<br />في الاستيراد والتصدير",
        cta: "طلب عرض سعر",
    },
};

export default function Home1() {
    const { language } = useLanguage();
    const t = translations[language] || translations.en;
    const isRtl = language === "ar";
    const router = useRouter();

    /* ---------- CTA pulse after 3s ---------- */
    const [pulse, setPulse] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setPulse(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* PARALLAX BACKGROUND */}
            <motion.img
                src="/finals/HeroVisual.png"
                alt="Industrial background"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ y: [-20, 20] }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "linear",
                }}
            />

            {/* Subtle overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

            {/* CONTENT - Simplified and focused */}
            <div
                className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 min-h-screen flex flex-col justify-center md:pt-32 pt-24" // Added pt-24 (96px) for mobile, md:pt-32 (128px) for desktop
                dir={isRtl ? "rtl" : "ltr"}
            >
                {/* TEXT CONTENT - Clean and focused */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`w-full ${
                        isRtl ? "md:text-right md:ml-auto" : "md:text-left"
                    } text-center md:text-left`}
                >
                    {/* Main Slogan - Clean and bold */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="font-extrabold leading-[1.1]"
                        style={{
                            fontSize: "clamp(2.75rem, 9vw, 5rem)",
                            color: "white",
                            textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                        }}
                    >
                        <div
                            dangerouslySetInnerHTML={{ __html: t.slogan }}
                            className="space-y-1 md:space-y-0"
                        />
                    </motion.div>

                    {/* Subtitle - Simple and clear with better color */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mt-4 md:mt-6 font-medium"
                        style={{
                            fontSize: "clamp(1.125rem, 4vw, 1.5rem)",
                            color: "rgba(255, 255, 255, 0.95)", // Increased opacity from 0.9 to 0.95
                            textShadow: "0 1px 4px rgba(0, 0, 0, 0.4)", // Added subtle shadow
                        }}
                    >
                        <span
                            dangerouslySetInnerHTML={{ __html: t.subtitle }}
                            className="inline-block md:block"
                        />
                    </motion.p>
                </motion.div>

                {/* CTA - Clean and prominent */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className={`mt-8 md:mt-12 ${
                        isRtl ? "text-left" : "text-center md:text-left"
                    }`}
                >
                    <motion.button
                        onClick={() => router.push("/devis")}
                        animate={
                            pulse
                                ? {
                                      boxShadow: [
                                          "0 0 0 rgba(47, 134, 253, 0)",
                                          "0 0 30px rgba(47, 134, 253, 0.8)",
                                          "0 0 0 rgba(47, 134, 253, 0)",
                                      ],
                                  }
                                : {}
                        }
                        transition={{ duration: 1.2 }}
                        style={{
                            background:
                                "linear-gradient(135deg, rgb(47, 134, 253) 0%, rgb(76, 242, 255) 100%)",
                            border: "2px solid rgba(255, 255, 255, 0.3)",
                        }}
                        className="
                            relative
                            px-8 py-4 md:px-12 md:py-5
                            rounded-full font-bold
                            text-lg md:text-xl
                            text-white
                            shadow-xl
                            hover:scale-105
                            active:scale-95
                            transition-all duration-300
                            w-full sm:w-auto
                        "
                    >
                        <span className="flex items-center justify-center gap-2">
                            {t.cta}
                            <svg
                                className={`w-5 h-5 ${
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
                        </span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
