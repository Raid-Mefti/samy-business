"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const translations = {
    fr: {
        line1: "Plus qu'un importateur,",
        line2: "votre architecte en solution métallique",
        subtitle: "Bureau d’affaires & consulting import-export",
        cta: "Demander un devis",
    },
    en: {
        line1: "More than an importer,",
        line2: "your architect in metal solutions",
        subtitle: "Business office & import-export consulting",
        cta: "Request a quote",
    },
    ar: {
        line1: "أكثر من مجرد مستورد",
        line2: "مهندس حلولك المعدنية",
        subtitle: "مكتب أعمال واستشارات في الاستيراد والتصدير",
        cta: "طلب عرض سعر",
    },
};

const LineBreak = (text) => text.replace(/,/g, ",<br />");

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
        <section className="relative min-h-screen flex items-end overflow-hidden">
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

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" /> */}

            {/* CONTENT */}
            <div
                className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 md:pb-24 pt-20"
                dir={isRtl ? "rtl" : "ltr"}
            >
                <div
                    className={`w-full flex flex-col md:flex-row items-end justify-between gap-14 ${
                        isRtl ? "md:flex-row-reverse" : ""
                    }`}
                >
                    {/* TEXT */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`max-w-[70ch] ${
                            isRtl ? "text-right" : "text-left"
                        }`}
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="font-extrabold tracking-tight text-white drop-shadow-2xl"
                            style={{
                                fontSize: "min(8vw, 56px)",
                                lineHeight: 1.1,
                            }}
                            dangerouslySetInnerHTML={{
                                __html: LineBreak(t.line1),
                            }}
                        />

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="font-extrabold tracking-tight text-[rgb(238,128,56)] drop-shadow-2xl mt-2"
                            style={{
                                fontSize: "min(8vw, 56px)",
                                lineHeight: 1.1,
                            }}
                            dangerouslySetInnerHTML={{
                                __html: LineBreak(t.line2),
                            }}
                        />

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="mt-4 text-gray-200/90 italic tracking-wide"
                            style={{
                                fontSize: "min(3.5vw, 22px)",
                                textShadow: "0 0 8px rgba(0,0,0,0.4)",
                            }}
                        >
                            {t.subtitle}
                        </motion.p>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className={`w-full md:w-auto flex ${
                            isRtl ? "justify-start" : "justify-end"
                        } md:self-end`}
                    >
                        <motion.button
                            onClick={() => router.push("/devis")}
                            animate={
                                pulse
                                    ? {
                                          boxShadow: [
                                              "0 0 0 rgba(223,126,60,0)",
                                              "0 0 30px rgba(223,126,60,0.8)",
                                              "0 0 0 rgba(223,126,60,0)",
                                          ],
                                      }
                                    : {}
                            }
                            transition={{ duration: 1.2 }}
                            className="
                                px-12 py-5 md:px-14 md:py-6
                                rounded-full font-extrabold
                                text-lg md:text-xl
                                bg-[rgb(223,126,60)] text-white
                                shadow-xl shadow-black/40
                                hover:bg-white hover:text-[rgb(223,126,60)]
                                transition-all duration-300
                            "
                        >
                            {t.cta}
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
