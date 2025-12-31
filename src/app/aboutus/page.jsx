"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
    const { language: rawLanguage } = useLanguage();
    const lang = rawLanguage ? rawLanguage.split("-")[0] : "fr";
    const isRtl = lang === "ar";

    const t = translations[lang] || translations.fr;

    return (
        <>
            <Header />

            <main
                className="bg-base-100 text-base-content"
                dir={isRtl ? "rtl" : "ltr"}
            >
                {/* ABOUT */}
                <section className="max-w-6xl mx-auto px-6 py-24">
                    <h1 className="text-4xl md:text-6xl font-bold text-[rgb(223,126,60)] mb-10">
                        {t.about.title}
                    </h1>

                    <p className="text-lg md:text-xl leading-relaxed whitespace-pre-line opacity-90">
                        {t.about.description}
                    </p>
                </section>

                {/* SERVICES */}
                <section className="bg-base-200 py-24">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-base-content">
                            {t.services.title}
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {t.services.items.map((s, i) => (
                                <div
                                    key={i}
                                    className="bg-base-100 rounded-2xl shadow-lg p-8 border-t-4 hover:shadow-xl transition-shadow duration-300"
                                    style={{ borderColor: s.color }}
                                >
                                    <h3
                                        className="text-xl font-bold mb-4"
                                        style={{ color: s.color }}
                                    >
                                        {s.name}
                                    </h3>
                                    <p className="leading-relaxed text-base-content/80 whitespace-pre-line">
                                        {s.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* KNOWLEDGE */}
                <section className="py-24 bg-base-100">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-base-content">
                            {t.knowledge.title}
                        </h2>

                        <p className="text-center text-base-content/70 max-w-3xl mx-auto mb-14">
                            {t.knowledge.subtitle}
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {t.knowledge.items.map((k, i) => (
                                <div
                                    key={i}
                                    className="group bg-base-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                                >
                                    <img
                                        src={k.img}
                                        alt={k.title}
                                        className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="p-6">
                                        <h3
                                            className="font-bold text-xl mb-3"
                                            style={{ color: k.color }}
                                        >
                                            {k.title}
                                        </h3>
                                        <p className="text-base-content/80 mb-6">
                                            {k.text}
                                        </p>
                                        <a
                                            href={k.link}
                                            className="inline-block font-semibold hover:underline transition-colors"
                                            style={{ color: k.color }}
                                        >
                                            {t.knowledge.cta}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

/* ---------------- TRANSLATIONS ---------------- */

const translations = {
    fr: {
        about: {
            title: "Samy Business EURL",
            description:
                "Samy Business EURL est une entreprise algérienne fondée en 2007 à Alger par son gérant unique, M. Rabah Bourrai. Elle est spécialisée dans l’importation, la transformation et la commercialisation de produits sidérurgiques ainsi que de métaux ferreux et non ferreux destinés principalement aux secteurs industriels.\n\nDepuis plus de 15 ans, Samy Business accompagne des acteurs industriels nationaux à travers une offre structurée, reposant sur la maîtrise des chaînes d’approvisionnement internationales, la conformité aux normes européennes et l’indexation des produits sur la London Metal Exchange (LME). L’entreprise s’appuie sur une organisation interne solide et une équipe pluridisciplinaire couvrant la direction générale, l’administration, les finances, le commercial, la logistique et les systèmes d’information.",
        },
        services: {
            title: "Nos Services",
            items: [
                {
                    name: "Import & Distribution",
                    color: "#DF7E3C",
                    desc: "Approvisionnement international de métaux ferreux et non ferreux.\nDevis indexés LME, traçabilité ERP, contrôle qualité et distribution nationale.",
                },
                {
                    name: "Transformation & ZnO",
                    color: "#4E6BA4",
                    desc: "Accompagnement technique pour les filières caoutchouc, céramique et chimie.\nMaîtrise des procédés, qualité constante et logistique sécurisée.",
                },
                {
                    name: "Consulting Métallurgique",
                    color: "#38367F",
                    desc: "Sourcing stratégique, conformité UE, audits fournisseurs et optimisation coûts-délais pour décisions industrielles fiables.",
                },
            ],
        },
        knowledge: {
            title: "Envie d’aller plus loin ?",
            subtitle:
                "Découvrez nos ressources techniques et analyses approfondies autour du zinc et de la métallurgie.",
            cta: "Lire l’article →",
            items: [
                {
                    title: "Utilisation du Zinc",
                    text: "Applications industrielles, propriétés chimiques et enjeux de durabilité.",
                    img: "Zink-Eigenschaften.webp",
                    link: "/wiki/zinc-usage",
                    color: "#DF7E3C",
                },
                {
                    title: "Statistiques & Marché",
                    text: "Opportunités globales du ZnO et position stratégique de l’Algérie.",
                    img: "statistics.jpg",
                    link: "/wiki/statistics",
                    color: "#4E6BA4",
                },
                {
                    title: "Aspects de Surface",
                    text: "Gammes, finitions et solutions adaptées aux exigences industrielles.",
                    img: "img13.png",
                    link: "/wiki/surface-aspects",
                    color: "#38367F",
                },
            ],
        },
    },

    en: {
        about: {
            title: "Samy Business EURL",
            description:
                "Samy Business EURL is an Algerian company founded in 2007 in Algiers by its sole manager, Mr. Rabah Bourrai. It specializes in the import, processing, and commercialization of steel products as well as ferrous and non-ferrous metals, primarily serving industrial sectors.\n\nFor more than 15 years, Samy Business has supported national industrial players through a structured offering based on international supply chain expertise, compliance with European standards, and product pricing indexed to the London Metal Exchange (LME). The company relies on a solid internal organization and a multidisciplinary team covering general management, administration, finance, sales, logistics, and information systems.",
        },
        services: {
            title: "Our Services",
            items: [
                {
                    name: "Import & Distribution",
                    color: "#DF7E3C",
                    desc: "International sourcing of ferrous and non-ferrous metals.\nLME-indexed pricing, ERP traceability, quality control, and nationwide distribution.",
                },
                {
                    name: "Processing & ZnO",
                    color: "#4E6BA4",
                    desc: "Technical support for rubber, ceramics, and chemical industries.\nProcess control, consistent quality, and secured logistics.",
                },
                {
                    name: "Metallurgical Consulting",
                    color: "#38367F",
                    desc: "Strategic sourcing, EU compliance, supplier audits, and cost–lead time optimization for reliable industrial decisions.",
                },
            ],
        },
        knowledge: {
            title: "Want to know more?",
            subtitle:
                "Explore our technical resources and in-depth analyses on zinc and metallurgy.",
            cta: "Read article →",
            items: [
                {
                    title: "Zinc Usage",
                    text: "Industrial applications, chemical properties, and sustainability challenges.",
                    img: "Zink-Eigenschaften.webp",
                    link: "/wiki/zinc-usage",
                    color: "#DF7E3C",
                },
                {
                    title: "Statistics & Market",
                    text: "Global ZnO opportunities and Algeria's strategic positioning.",
                    img: "statistics.jpg",
                    link: "/wiki/statistics",
                    color: "#4E6BA4",
                },
                {
                    title: "Surface Aspects",
                    text: "Ranges, finishes, and solutions tailored to industrial requirements.",
                    img: "img13.png",
                    link: "/wiki/surface-aspects",
                    color: "#38367F",
                },
            ],
        },
    },

    ar: {
        about: {
            title: "شركة سامي بيزنس",
            description:
                "شركة سامي بيزنس ذات المسؤولية المحدودة هي شركة جزائرية تأسست سنة 2007 بالجزائر العاصمة على يد مسيرها الوحيد السيد رباح بوراي، وهي متخصصة في استيراد، تحويل وتسويق المنتجات الحديدية والمعادن الحديدية وغير الحديدية الموجهة أساسًا للقطاعات الصناعية.\n\nمنذ أكثر من 15 سنة، ترافق سامي بيزنس الفاعلين الصناعيين الوطنيين من خلال عرض منظم يرتكز على التحكم في سلاسل التموين الدولية، مطابقة المعايير الأوروبية، وتسعير المنتجات وفق بورصة لندن للمعادن (LME). وتعتمد الشركة على تنظيم داخلي متين وفريق متعدد التخصصات يشمل الإدارة العامة، الإدارة، المالية، التجارة، اللوجستيك ونظم المعلومات.",
        },
        services: {
            title: "خدماتنا",
            items: [
                {
                    name: "الاستيراد والتوزيع",
                    color: "#DF7E3C",
                    desc: "تموين دولي بالمعادن الحديدية وغير الحديدية.\nتسعير مرتبط بـ LME، تتبع ERP، مراقبة الجودة وتوزيع وطني.",
                },
                {
                    name: "التحويل و ZnO",
                    color: "#4E6BA4",
                    desc: "مرافقة تقنية لقطاعات المطاط، السيراميك والصناعة الكيميائية.\nتحكم في العمليات وجودة ثابتة ولوجستيك مؤمن.",
                },
                {
                    name: "الاستشارة المعدنية",
                    color: "#38367F",
                    desc: "اختيار الموردين، مطابقة المعايير الأوروبية، تدقيق الموردين وتحسين التكاليف والآجال لاتخاذ قرارات صناعية دقيقة.",
                },
            ],
        },
        knowledge: {
            title: "هل ترغب في معرفة المزيد؟",
            subtitle:
                "اطّلع على مواردنا التقنية وتحليلاتنا المتعمقة حول الزنك وصناعة المعادن.",
            cta: "اقرأ المقال →",
            items: [
                {
                    title: "استخدام الزنك",
                    text: "التطبيقات الصناعية، الخصائص الكيميائية وتحديات الاستدامة.",
                    img: "Zink-Eigenschaften.webp",
                    link: "/wiki/zinc-usage",
                    color: "#DF7E3C",
                },
                {
                    title: "الإحصائيات والسوق",
                    text: "فرص ZnO عالميًا والموقع الاستراتيجي للجزائر.",
                    img: "statistics.jpg",
                    link: "/wiki/statistics",
                    color: "#4E6BA4",
                },
                {
                    title: "الجوانب السطحية",
                    text: "مجالات، تشطيبات وحلول تلبي المتطلبات الصناعية.",
                    img: "img13.png",
                    link: "/wiki/surface-aspects",
                    color: "#38367F",
                },
            ],
        },
    },
};
