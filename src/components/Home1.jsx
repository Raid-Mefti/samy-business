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

            {/* CONTENT - Positioned top-left */}
            <div
                className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-12 md:pt-20 min-h-screen flex flex-col"
                dir={isRtl ? "rtl" : "ltr"}
            >
                {/* TEXT CONTENT - Top-left aligned */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`max-w-[65ch] mt-8 md:mt-16 ${
                        isRtl ? "text-right ml-auto" : "text-left"
                    }`}
                >
                    {/* Main Slogan - Stacked vertically */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="font-extrabold tracking-tight leading-[0.9]"
                        style={{
                            fontSize: "min(7.5vw, 60px)",
                            color: "rgb(25, 43, 94)",
                            textShadow: "2px 2px 6px rgba(255, 255, 255, 0.8)",
                        }}
                    >
                        <div
                            dangerouslySetInnerHTML={{ __html: t.slogan }}
                            className="[&>br]:hidden md:[&>br]:block"
                        />
                    </motion.div>

                    {/* Subtitle - Stacked on mobile, single line on desktop */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-6 md:mt-8 font-semibold tracking-wide"
                        style={{
                            fontSize: "min(4vw, 26px)",
                            color: "rgb(25,43,94)", // solid blue
                            borderLeft: isRtl
                                ? "none"
                                : "4px solid rgb(47,134,253)",
                            borderRight: isRtl
                                ? "4px solid rgb(47,134,253)"
                                : "none",
                            paddingLeft: isRtl ? 0 : "14px",
                            paddingRight: isRtl ? "14px" : 0,
                        }}
                    >
                        <span
                            dangerouslySetInnerHTML={{ __html: t.subtitle }}
                            className="[&>br]:hidden md:[&>br]:block"
                        />
                    </motion.p>
                </motion.div>

                {/* CTA - Positioned at bottom-left (under text) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className={`mt-auto pb-16 md:pb-24 ${
                        isRtl ? "text-left" : ""
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
                            px-12 py-5 md:px-14 md:py-6
                            rounded-full font-extrabold
                            text-lg md:text-xl
                            text-white
                            shadow-2xl shadow-blue-900/50
                            hover:scale-105 hover:shadow-2xl hover:shadow-blue-500
                            active:scale-95
                            transition-all duration-300
                        "
                    >
                        {t.cta}
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
