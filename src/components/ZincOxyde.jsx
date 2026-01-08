"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const CONTENT = {
    fr: {
        title: "Oxyde de Zinc (ZnO)",
        text: "Chez Samy Business, l'oxyde de zinc incarne notre exigence industrielle. Sélectionné auprès de fournisseurs certifiés et conforme aux normes européennes, il répond aux besoins des secteurs les plus exigeants, de la transformation industrielle à la fabrication spécialisée.",
        points: [
            "Qualité industrielle certifiée",
            "Approvisionnement maîtrisé",
            "Normes européennes",
        ],
        cta: "Découvrir le produit",
    },
    en: {
        title: "Zinc Oxide (ZnO)",
        text: "At Samy Business, zinc oxide reflects our industrial standards. Carefully sourced from certified suppliers and compliant with European regulations, it is trusted by demanding industries ranging from processing to advanced manufacturing.",
        points: [
            "Certified industrial quality",
            "Controlled supply chain",
            "European standards",
        ],
        cta: "Discover the product",
    },
    ar: {
        title: "أكسيد الزنك (ZnO)",
        text: "في سامي بيزنس، يجسّد أكسيد الزنك معاييرنا الصناعية الصارمة. يتم اختياره من موردين معتمدين ووفق المعايير الأوروبية لتلبية متطلبات الصناعات الأكثر تطلبًا.",
        points: [
            "جودة صناعية معتمدة",
            "سلسلة توريد محكمة",
            "مطابقة للمعايير الأوروبية",
        ],
        cta: "اكتشاف المنتج",
    },
};

export default function ZincOxideIntro() {
    const { language } = useLanguage();
    const c = CONTENT[language] || CONTENT.fr;
    const isRTL = language === "ar";

    return (
        <section
            className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-base-100 to-base-200"
            dir={isRTL ? "rtl" : "ltr"}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Visual - Mobile: first, Desktop: first (LTR) or second (RTL) */}
                <div
                    className={`order-1 ${
                        isRTL ? "md:order-2" : "md:order-1"
                    } relative h-64 sm:h-80 md:h-[32rem] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl bg-base-300`}
                >
                    <img
                        src="/finals/oxyde_de_zinc2.png"
                        alt="Oxyde de zinc industriel de haute qualité"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>

                {/* Content - Mobile: second, Desktop: second (LTR) or first (RTL) */}
                <div
                    className={`order-2 ${
                        isRTL ? "md:order-1" : "md:order-2"
                    } space-y-6 md:space-y-8 ${
                        isRTL ? "text-right" : "text-left"
                    }`}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold md:font-extrabold tracking-tight text-base-content">
                        {c.title}
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg text-base-content/80 leading-relaxed sm:leading-relaxed">
                        {c.text}
                    </p>

                    {/* Points grid - responsive layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                        {c.points.map((p) => (
                            <div
                                key={p}
                                className="
                                    rounded-xl md:rounded-xl
                                    bg-base-100
                                    border border-base-300
                                    px-4 py-3 sm:px-5 sm:py-4
                                    text-xs sm:text-sm font-semibold
                                    text-base-content
                                    text-center
                                    shadow-sm
                                    transition-all duration-200
                                    hover:shadow-md
                                    hover:-translate-y-0.5
                                    active:scale-95
                                "
                            >
                                {p}
                            </div>
                        ))}
                    </div>

                    {/* Orange button - centered on mobile */}
                    <div
                        className={`flex ${
                            isRTL
                                ? "justify-end md:justify-start"
                                : "justify-start"
                        } md:justify-start`}
                    >
                        <Link
                            href="/zinc-oxyde"
                            className="
                                inline-flex items-center justify-center
                                rounded-full
                                bg-[rgb(223,126,60)]
                                px-6 py-3 sm:px-8 sm:py-3
                                font-semibold text-white text-sm sm:text-base
                                shadow-md
                                transition-all duration-200
                                hover:shadow-lg
                                hover:bg-[rgb(223,126,60)]/90
                                hover:scale-105
                                active:scale-95
                                w-full sm:w-auto
                                text-center
                            "
                        >
                            {c.cta}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
