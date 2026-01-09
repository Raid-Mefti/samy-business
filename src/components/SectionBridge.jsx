"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

const CONTENT = {
    fr: {
        title: "Un partenaire industriel, pas seulement un fournisseur",
        text: "Des matières premières métalliques sélectionnées avec rigueur, au service d'industries qui n'acceptent aucun compromis.",
    },
    en: {
        title: "An industrial partner, not just a supplier",
        text: "Carefully selected metal raw materials, serving industries that accept no compromise.",
    },
    ar: {
        title: "شريك صناعي، وليس مجرد مورد",
        text: "مواد معدنية مختارة بدقة لخدمة الصناعات التي لا تقبل أي تنازل.",
    },
};

export default function SectionBridge() {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const c = CONTENT[language] || CONTENT.en;
    const isRtl = language === "ar";
    const isDark = theme === "dark";

    /* ---------- THEME COLORS ---------- */
    const colors = {
        background: isDark
            ? "linear-gradient(135deg, rgb(12,18,30) 0%, rgb(18,26,44) 100%)"
            : "linear-gradient(135deg, rgb(240,240,240) 0%, rgb(245,245,245) 100%)",

        title: isDark ? "rgb(240,240,240)" : "rgb(25,43,94)",
        text: isDark ? "rgb(180,180,180)" : "rgb(25,43,94)",
    };

    return (
        <section
            aria-label="Présentation de l'entreprise Samy Business"
            className="relative"
            style={{ background: colors.background }}
        >
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`max-w-6xl mx-auto px-6 text-center ${
                    isRtl ? "text-right" : "text-left"
                }`}
                dir={isRtl ? "rtl" : "ltr"}
            >
                {/* Divider */}
                <div
                    className="w-24 h-[2px] mx-auto mb-10"
                    style={{
                        background:
                            "linear-gradient(90deg, rgb(47,134,253) 0%, rgb(76,242,255) 100%)",
                        opacity: isDark ? 1 : 0.8,
                    }}
                />

                {/* Title */}
                <h2
                    className="font-extrabold tracking-tight whitespace-nowrap max-md:whitespace-normal"
                    style={{
                        color: colors.title,
                        fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                    }}
                >
                    {c.title}
                </h2>

                {/* Text */}
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.7 }}
                    className="mt-6 mx-auto max-w-xl leading-relaxed font-light"
                    style={{
                        color: colors.text,
                        fontSize: "clamp(1rem, 1.2vw, 1.15rem)",
                    }}
                >
                    {c.text}
                </motion.p>
            </motion.div>
        </section>
    );
}
