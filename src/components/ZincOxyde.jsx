"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const CONTENT = {
    fr: {
        title: "Oxyde de Zinc (ZnO)",
        text: "Chez Samy Business, l’oxyde de zinc incarne notre exigence industrielle. Sélectionné auprès de fournisseurs certifiés et conforme aux normes européennes, il répond aux besoins des secteurs les plus exigeants, de la transformation industrielle à la fabrication spécialisée.",
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

    return (
        <section className="py-24">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                {/* Visual */}
                <div className="relative h-96 rounded-3xl overflow-hidden bg-base-200">
                    <img
                        src="/images/zinc-oxide-industrial.jpg"
                        alt="Oxyde de zinc industriel de haute qualité"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        {c.title}
                    </h2>

                    <p className="text-lg text-base-content/80 leading-relaxed max-w-xl">
                        {c.text}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {c.points.map((p) => (
                            <li
                                key={p}
                                className="rounded-xl bg-base-200/60 px-5 py-4 text-sm font-semibold"
                            >
                                {p}
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="/zinc-oxyde"
                        className="inline-flex items-center rounded-full bg-[rgb(223,126,60)] px-8 py-4 text-white font-semibold transition hover:opacity-90"
                    >
                        {c.cta}
                    </Link>
                </div>
            </div>
        </section>
    );
}
