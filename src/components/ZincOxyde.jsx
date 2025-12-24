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
        <section className="">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Visual */}
                <div className="relative h-[28rem] md:h-[32rem] rounded-3xl overflow-hidden shadow-lg">
                    <img
                        src="Zinc_fragment_sublimed_and_1cm3_cube.jpg"
                        alt="Oxyde de zinc industriel de haute qualité"
                        className="w-full h-full object-cover scale-105"
                    />
                </div>

                {/* Content */}
                <div className="space-y-6 md:space-y-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
                        {c.title}
                    </h2>

                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        {c.text}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {c.points.map((p) => (
                            <li
                                key={p}
                                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold shadow-md hover:shadow-xl transition hover:scale-105 text-center"
                            >
                                {p}
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="/zinc-oxyde"
                        className="inline-flex items-center rounded-full bg-orange-600 px-8 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition hover:scale-105"
                    >
                        {c.cta}
                    </Link>
                </div>
            </div>
        </section>
    );
}
