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

            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

            {/* CONTENT - Center aligned on mobile, top-left on desktop */}
            <div
                className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 min-h-screen flex flex-col justify-center md:justify-start md:pt-12 lg:pt-20"
                dir={isRtl ? "rtl" : "ltr"}
            >
                {/* TEXT CONTENT - Centered on mobile, left-aligned on desktop */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`w-full md:max-w-[65ch] ${
                        isRtl ? "md:text-right md:ml-auto" : "md:text-left"
                    } text-center md:text-left`}
                >
                    {/* Logo/Brand Mark - Mobile only */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.7 }}
                        className="mb-8 md:hidden flex justify-center"
                    >
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-400/10 border border-white/20 backdrop-blur-sm flex items-center justify-center">
                            <span
                                className="text-4xl font-bold"
                                style={{
                                    background:
                                        "linear-gradient(135deg, rgb(47, 134, 253) 0%, rgb(76, 242, 255) 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                SB
                            </span>
                        </div>
                    </motion.div>

                    {/* Main Slogan - Better mobile typography */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="font-extrabold leading-tight"
                        style={{
                            fontSize: "clamp(2.5rem, 8vw, 4rem)",
                            color: "white",
                            textShadow: "0 4px 12px rgba(0, 0, 0, 0.6)",
                        }}
                    >
                        <div
                            dangerouslySetInnerHTML={{ __html: t.slogan }}
                            className="space-y-2 md:space-y-0"
                        />
                    </motion.div>

                    {/* Subtitle - Improved mobile styling */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-6 md:mt-8 font-semibold tracking-wide"
                        style={{
                            fontSize: "clamp(1.125rem, 4vw, 1.75rem)",
                            color: "rgba(255, 255, 255, 0.95)",
                            textShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
                        }}
                    >
                        <span
                            dangerouslySetInnerHTML={{ __html: t.subtitle }}
                            className="inline-block md:block"
                        />
                    </motion.p>

                    {/* Decorative line - Mobile centered, desktop aligned */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            delay: 0.7,
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                        className={`h-1 mt-6 md:mt-8 ${
                            isRtl ? "md:ml-auto" : "md:mr-auto"
                        } mx-auto md:mx-0`}
                        style={{
                            width: "80px",
                            background:
                                "linear-gradient(90deg, rgb(47, 134, 253) 0%, rgb(76, 242, 255) 100%)",
                            transformOrigin: isRtl ? "right" : "left",
                        }}
                    />
                </motion.div>

                {/* CTA - Better mobile positioning */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className={`mt-12 md:mt-auto mb-16 md:mb-24 ${
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
                                          "0 0 40px rgba(47, 134, 253, 0.9)",
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
                            px-10 py-4 md:px-14 md:py-6
                            rounded-full font-bold
                            text-base md:text-xl
                            text-white
                            shadow-2xl shadow-blue-900/50
                            hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/70
                            active:scale-95
                            transition-all duration-300
                            w-full sm:w-auto
                            flex items-center justify-center gap-3
                        "
                    >
                        {/* Arrow icon for better UX */}
                        <svg
                            className={`w-5 h-5 ${isRtl ? "rotate-180" : ""}`}
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
                        <span>{t.cta}</span>

                        {/* Mobile hint */}
                        <span className="absolute -bottom-8 text-xs opacity-70 md:hidden">
                            {isRtl ? "انقر هنا" : "Tap to start"}
                        </span>
                    </motion.button>

                    {/* Additional info - Mobile only */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="mt-10 md:hidden text-center"
                    >
                        <div className="inline-flex items-center gap-4 px-4 py-3 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse" />
                                <span className="text-sm font-medium text-white/90">
                                    15+ ans d'expérience
                                </span>
                            </div>
                            <div className="h-4 w-px bg-white/30" />
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse" />
                                <span className="text-sm font-medium text-white/90">
                                    100+ clients
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator - Mobile only */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 md:hidden"
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-xs text-white/60 animate-pulse">
                            Scroll
                        </span>
                        <svg
                            className="w-6 h-6 text-white/60 animate-bounce"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
