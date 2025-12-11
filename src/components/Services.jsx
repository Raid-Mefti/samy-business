"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

// Utility to detect large screens
const useIsLg = () => {
    const [isLg, setIsLg] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 1024px)");
        const update = () => setIsLg(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);
    return isLg;
};

export default function ServicesSection() {
    const { language: rawLanguage } = useLanguage();
    const lang = rawLanguage ? rawLanguage.split("-")[0] : "fr";
    const isRtl = lang === "ar";

    const translations = {
        fr: {
            title: "Nos Services",
            services: [
                {
                    theme: "orange",
                    name: "Import-Export et Distribution",
                    desc: `Portefeuille de produits métalliques (acier, inox, zinc, zamak, aluminium, cuivre, laiton, plomb) conformes aux normes européennes et référencés LME. 
Réseau de plus de 20 fournisseurs internationaux et 110 clients en Algérie. 
Processus complet : devis indexés LME, transit/dédouanement, contrôle qualité, traçabilité ERP et distribution nationale.`,
                    img: "services/transportation-import-export.jpg",
                },
                {
                    theme: "blue",
                    name: "Transformation et Process ZnO",
                    desc: `Accompagnement de bout en bout : sélection matière zinc, exigences qualité (pureté, COA), cadrage procédés et logistique d'approvisionnement 
pour les filières caoutchouc, céramique et chimie. 
Analyses techniques, ERP intégré et plan d'amélioration continue pour assurer constance qualité et délais maîtrisés.`,
                    img: "services/production-chain.jpg",
                },
                {
                    theme: "purple",
                    name: "Consulting et Stratégie Métallurgique",
                    desc: `Expertise opérationnelle sur les métaux ferreux et non ferreux : sourcing multi-pays, conformité normes UE, traçabilité LME et optimisation coûts-délais. 
Conseil en sélection produits, audits fournisseurs, contrôles qualité COA/COC, structuration logistique et intégration ERP pour décisions rapides et fiabilisées.`,
                    img: "services/consulting.jpg",
                },
            ],
        },
        en: {
            title: "Our Services",
            services: [
                {
                    theme: "orange",
                    name: "Import-Export & Distribution",
                    desc: `Portfolio of metallic products (steel, stainless steel, zinc, zamak, aluminum, copper, brass, lead) compliant with EU standards and LME-referenced. 
A network of over 20 international suppliers and 110 active clients in Algeria. 
End-to-end process: LME-indexed quotations, transit/customs, quality control, ERP traceability, and national distribution.`,
                    img: "services/transportation-import-export.jpg",
                },
                {
                    theme: "blue",
                    name: "Processing & ZnO Expertise",
                    desc: `End-to-end support: zinc material selection, purity control (COA), process design and supply logistics for rubber, ceramic, and chemical sectors. 
Backed by analytical testing, ERP integration, and continuous improvement plans ensuring consistent quality and reliable lead times.`,
                    img: "services/production-chain.jpg",
                },
                {
                    theme: "purple",
                    name: "Consulting & Metallurgical Strategy",
                    desc: `Operational expertise in ferrous and non-ferrous metals: multi-country sourcing, EU compliance, LME traceability, and cost-time optimization. 
Product selection advice, supplier audits, COA/COC quality checks, logistics structuring, and ERP integration for data-driven decisions.`,
                    img: "services/consulting.jpg",
                },
            ],
        },
        ar: {
            title: "خدماتنا",
            services: [
                {
                    theme: "orange",
                    name: "الاستيراد والتوزيع",
                    desc: `محفظة تشمل منتجات معدنية (الصلب، الفولاذ المقاوم للصدأ، الزنك، الزاماك، الألومنيوم، النحاس، النحاس الأصفر، الرصاص) مطابقة للمعايير الأوروبية ومُدرجة في LME.
شبكة تضم أكثر من 20 موردًا دوليًا و110 عميلًا في الجزائر.
عملية شاملة: عروض أسعار مرتبطة بـLME، العبور والتخليص الجمركي، مراقبة الجودة، تتبع ERP والتوزيع الوطني.`,
                    img: "services/transportation-import-export.jpg",
                },
                {
                    theme: "blue",
                    name: "التحويل ومعالجة ZnO",
                    desc: `مرافقة شاملة: اختيار مادة الزنك، مراقبة النقاء (COA)، ضبط العمليات، ولوجستيات التوريد لقطاعات المطاط، السيراميك والكيمياء.
تحاليل تقنية، نظام ERP متكامل وخطة تحسين مستمر لضمان جودة ثابتة ومواعيد دقيقة.`,
                    img: "services/production-chain.jpg",
                },
                {
                    theme: "purple",
                    name: "الاستشارات والإستراتيجية المعدنية",
                    desc: `خبرة تشغيلية في المعادن الحديدية وغير الحديدية: مصادر متعددة الدول، مطابقة للمعايير الأوروبية، تتبع LME وتحسين التكاليف والمواعيد.
استشارات لاختيار المنتجات، تدقيق الموردين، فحوصات جودة COA/COC، تنظيم الخدمات اللوجستية ودمج ERP لاتخاذ قرارات سريعة وموثوقة.`,
                    img: "services/consulting.jpg",
                },
            ],
        },
    };

    const t = translations[lang] || translations.fr;
    const themes = {
        orange: { main: "#DF7E3C", glow: "rgba(223,126,60,0.25)" },
        blue: { main: "#4E6BA4", glow: "rgba(78,107,164,0.25)" },
        purple: { main: "#38367F", glow: "rgba(56,54,127,0.25)" },
    };

    return (
        <div
            id="services"
            className=" bg-amber-300 relative flex flex-col items-center lg:items-start bg-base-100 overflow-hidden pb-28 space-y-0"
            dir={isRtl ? "rtl" : "ltr"}
        >
            <h1 className="text-center w-full text-[rgb(223,126,60)] text-4xl md:text-6xl font-bold mb-16">
                {t.title}
            </h1>

            {t.services.map((service, index) => {
                const { main, glow } = themes[service.theme];
                return (
                    <MirroredCard
                        key={index}
                        service={service}
                        color={main}
                        glow={glow}
                        index={index}
                        isRtl={isRtl}
                    />
                );
            })}
        </div>
    );
}

function MirroredCard({ service, color, glow, index, isRtl }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const controls = useAnimation();
    const isLg = useIsLg();

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [inView, controls]);

    const variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
        },
    };

    // ONLY CHANGE: Added *2 multiplier to match ProductsGrid
    const calculateStaggerOffset = () => {
        if (!isLg) return {};

        const offsetValue = index * 3; // 3rem per step

        // SAME as before, just with *2 multiplier
        return isRtl
            ? { marginLeft: `${offsetValue * 2}rem` } // Arabic: starts from LEFT (with *2)
            : { marginRight: `${offsetValue * 2}rem` }; // FR/EN: starts from RIGHT (with *2)
    };

    const textAlignClass = isRtl ? "text-right" : "text-left";

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            style={calculateStaggerOffset()}
            className={`stair-card group relative flex flex-col lg:flex-row items-center lg:items-stretch gap-8 transition-transform duration-700 ease-out mb-8 w-full max-w-sm sm:max-w-xl lg:max-w-7xl px-4 mx-auto`}
        >
            {/* TEXT BLOCK - ALWAYS ON LEFT */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 1 }}
                className={`flex flex-col justify-center bg-white rounded-3xl shadow-lg px-8 py-10 backdrop-blur-sm w-full lg:max-w-[600px] ${textAlignClass}`}
                style={{ borderRight: `6px solid ${color}` }}
            >
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 whitespace-pre-line">
                    {service.desc}
                </p>
            </motion.div>

            {/* IMAGE BLOCK - ALWAYS ON RIGHT */}
            <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative flex-shrink-0 w-full lg:w-[460px] h-[320px] rounded-3xl overflow-hidden shadow-lg"
                style={{
                    border: `5px solid ${color}`,
                    boxShadow: `0 0 16px ${glow}`,
                }}
            >
                <div className="overflow-hidden rounded-2xl h-full">
                    <img
                        src={service.img}
                        alt={service.name}
                        className="w-full h-full object-cover rounded-2xl transition-all duration-700 group-hover:scale-105"
                    />
                </div>
                <div className="absolute inset-0 bg-black/25 rounded-2xl pointer-events-none" />

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-3xl md:text-4xl font-bold bg-white/80 px-6 py-2 rounded-xl backdrop-blur-md"
                    style={{ color }}
                >
                    {service.name}
                </motion.h2>
            </motion.div>
        </motion.div>
    );
}
