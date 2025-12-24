"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const CONTENT = {
    fr: {
        title: "Un partenaire industriel, pas seulement un fournisseur",
        text: "Des matières premières métalliques sélectionnées avec rigueur, au service d’industries qui n’acceptent aucun compromis.",
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

// const CONTENT = {
//     fr: {
//         title: "Un partenaire industriel, pas seulement un fournisseur",
//         text: "Samy Business accompagne les industries exigeantes avec des matières premières métalliques fiables, conformes et pensées pour la performance durable.",
//     },
//     en: {
//         title: "An industrial partner, not just a supplier",
//         text: "Samy Business supports demanding industries with reliable, compliant metal raw materials engineered for long-term performance.",
//     },
//     ar: {
//         title: "شريك صناعي، وليس مجرد مورد",
//         text: "ترافق سامي بيزنس الصناعات المتطلبة بمواد معدنية موثوقة ومتوافقة ومصممة للأداء المستدام.",
//     },
// };

export default function SectionBridge() {
    const { language } = useLanguage();
    const c = CONTENT[language] || CONTENT.en;
    const isRtl = language === "ar";

    return (
        <section
            className="relative py-24 bg-gradient-to-b from-transparent to-gray-200"
            aria-label="Présentation de l’entreprise Samy Business"
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
                {/* Subtle divider */}
                <div className="w-24 h-[2px] bg-[rgb(223,126,60)] mb-10 mx-auto opacity-70" />

                {/* Title */}
                <h2
                    className="
                        font-extrabold tracking-tight text-gray-900
                        text-[clamp(1.6rem,3vw,2.4rem)]
                        whitespace-nowrap
                        max-md:whitespace-normal
                    "
                >
                    {c.title}
                </h2>

                {/* Text */}
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.7 }}
                    className="
                        mt-6 mx-auto
                        max-w-xl
                        text-gray-600
                        text-[clamp(1rem,1.2vw,1.15rem)]
                        leading-relaxed
                        font-light
                    "
                >
                    {c.text}
                </motion.p>
            </motion.div>
        </section>
    );
}
