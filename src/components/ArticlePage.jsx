"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export default function ArticlePage({
    productName = "Article",
    category,
    imageSrc = null,
    themeColor = null,
}) {
    const { language } = useLanguage();
    const isRTL = language === "ar";
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("overview");
    const [showMoreBenefits, setShowMoreBenefits] = useState(false);
    const [showMoreApplications, setShowMoreApplications] = useState(false);
    const contactFormRef = useRef(null);

    const slugify = (name) =>
        String(name || "")
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9\-ء-ي]/g, "");

    const slug = slugify(productName);
    // Product content database with translations
    const productData = {
        zamak: {
            image: "/product_section/lingots-du-zamak.webp",
            imageTableau: "/tableaux/tableau_zamak.jpeg",
            fr: {
                shortTitle: "Zamak 5",
                longTitle:
                    "Zamak 5 - Alliage de Précision pour Moulage Industriel",
                heroTitle: "Excellence en Moulage Sous Pression",
                intro: "Le Zamak 5 de Samy Business représente l'excellence algérienne en alliage de zinc. Grâce à notre expertise de plus de 15 ans dans les métaux non-ferreux, nous fournissons un Zamak de qualité supérieure, parfaitement adapté aux exigences des industries de précision.",
                valueProposition:
                    "Notre Zamak 5 offre une fluidité de moulage exceptionnelle, réduisant les coûts de production tout en garantissant des pièces de haute précision pour vos applications les plus exigeantes.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Composition</p>
                            <p class="font-semibold">Zn ≈95% | Al ≈4% | Cu ≈1%</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Densité</p>
                            <p class="font-semibold">6,6 – 6,7 g/cm³</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Température Fusion</p>
                            <p class="font-semibold">≈385 °C</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Résistance Traction</p>
                            <p class="font-semibold">280 – 320 MPa</p>
                        </div>
                    </div>
                    <div class="bg-base-200/40 p-4 rounded-lg">
                        <p class="text-sm text-base-content/70"><span class="font-semibold">✓ Normes européennes</span> | <span class="font-semibold">✓ Certification LME</span> | <span class="font-semibold">✓ Traçabilité garantie</span></p>
                    </div>
                </div>`,
                applications: [
                    "Pièces automobiles de précision",
                    "Connectique électrique et électronique",
                    "Composants pour équipement médical",
                    "Pièces de quincaillerie haute qualité",
                ],
                benefits: [
                    "Réduction des coûts de moulage grâce à la fluidité exceptionnelle",
                    "Finitions de surface supérieures réduisant les opérations post-traitement",
                    "Résistance accrue à la corrosion grâce au cuivre",
                ],
                samyAdvantage:
                    "Notre réseau de fournisseurs européens garantit un approvisionnement régulier et conforme. Chaque lot est analysé pour assurer pureté et constance.",
            },
            en: {
                shortTitle: "Zamak 5",
                longTitle: "Zamak 5 - Precision Alloy for Industrial Casting",
                heroTitle: "Excellence in Die Casting",
                intro: "Samy Business Zamak 5 represents Algerian excellence in zinc alloys. With over 15 years of expertise in non-ferrous metals, we provide superior quality Zamak perfectly suited for precision industry requirements.",
                valueProposition:
                    "Our Zamak 5 offers exceptional casting fluidity, reducing production costs while guaranteeing high-precision parts for your most demanding applications.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Composition</p>
                            <p class="font-semibold">Zn ≈95% | Al ≈4% | Cu ≈1%</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Density</p>
                            <p class="font-semibold">6.6 – 6.7 g/cm³</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Melting Point</p>
                            <p class="font-semibold">≈385 °C</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Tensile Strength</p>
                            <p class="font-semibold">280 – 320 MPa</p>
                        </div>
                    </div>
                    <div class="bg-base-200/40 p-4 rounded-lg">
                        <p class="text-sm text-base-content/70"><span class="font-semibold">✓ European standards</span> | <span class="font-semibold">✓ LME certified</span> | <span class="font-semibold">✓ Guaranteed traceability</span></p>
                    </div>
                </div>`,
                applications: [
                    "Precision automotive parts",
                    "Electrical and electronic connectors",
                    "Medical equipment components",
                    "High-quality hardware parts",
                ],
                benefits: [
                    "Reduced casting costs thanks to exceptional fluidity",
                    "Superior surface finishes reducing post-processing",
                    "Increased corrosion resistance with copper",
                ],
                samyAdvantage:
                    "Our European supplier network ensures regular and compliant supply. Each batch is analyzed to guarantee purity and consistency.",
            },
            ar: {
                shortTitle: "زاماك 5",
                longTitle: "زاماك 5 - سبيكة الدقة للصب الصناعي",
                heroTitle: "التميز في الصب بالقالب",
                intro: "زاماك 5 من Samy Business يمثل التميز الجزائري في سبائك الزنك. مع خبرة تزيد عن 15 سنة في المعادن غير الحديدية، نقدم زاماك عالي الجودة مناسب تماماً لمتطلبات الصناعات الدقيقة.",
                valueProposition:
                    "زاماك 5 الخاص بنا يوفر سيولة صب استثنائية، مما يخفض تكاليف الإنتاج مع ضمان قطع عالية الدقة لأكثر تطبيقاتك تطلباً.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">التركيب</p>
                            <p class="font-semibold">زنك ≈95% | ألمنيوم ≈4% | نحاس ≈1%</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">الكثافة</p>
                            <p class="font-semibold">6.6 – 6.7 جم/سم³</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">درجة الانصهار</p>
                            <p class="font-semibold">≈385 °م</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">قوة الشد</p>
                            <p class="font-semibold">280 – 320 ميجا باسكال</p>
                        </div>
                    </div>
                    <div class="bg-base-200/40 p-4 rounded-lg">
                        <p class="text-sm text-base-content/70"><span class="font-semibold">✓ معايير أوروبية</span> | <span class="font-semibold">✓ شهادة LME</span> | <span class="font-semibold">✓ إمكانية تتبع مضمونة</span></p>
                    </div>
                </div>`,
                applications: [
                    "قطع سيارات دقيقة",
                    "موصلات كهربائية وإلكترونية",
                    "مكونات المعدات الطبية",
                    "قطع أجهزة عالية الجودة",
                ],
                benefits: [
                    "تقليل تكاليف الصب بفضل السيولة الاستثنائية",
                    "تشطيبات سطحية ممتازة تقلل من عمليات ما بعد المعالجة",
                    "مقاومة متزايدة للتآكل بفضل النحاس",
                ],
                samyAdvantage:
                    "شبكة موردينا الأوروبيين تضمن توريداً منتظماً ومطابقاً. يتم تحليل كل دفعة لضمان النقاء والثبات.",
            },
        },

        "plomb-doux": {
            image: "/product_section/plomb-doux.png",
            imageTableau: "/tableaux/tableau_plombDoux.jpeg",
            fr: {
                shortTitle: "Plomb Doux Pur",
                longTitle:
                    "Plomb Doux Pur 99% - Excellence en Protection et Isolation",
                heroTitle: "La Référence Algérienne en Plomb Industriel",
                intro: "Le Plomb Doux Pur 99% de Samy Business est le choix privilégié des industriels exigeants. Avec une pureté garantie supérieure à 99%, notre plomb répond aux normes européennes les plus strictes.",
                valueProposition:
                    "Notre plomb doux offre une malléabilité exceptionnelle combinée à une densité optimale, permettant des solutions de protection sur-mesure avec un rapport performance/coût inégalé.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Pureté Garantie</p>
                            <p class="font-semibold text-lg text-[rgb(223,126,60)]">≥99%</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Densité</p>
                            <p class="font-semibold">11,34 g/cm³</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Point de Fusion</p>
                            <p class="font-semibold">327 °C</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Conductivité Électrique</p>
                            <p class="font-semibold">≈4,8 MS/m</p>
                        </div>
                    </div>
                    <div class="bg-base-200/40 p-4 rounded-lg">
                        <p class="text-sm text-base-content/70"><span class="font-semibold">✓ Traçabilité LME complète</span> | <span class="font-semibold">✓ Certificats d'analyse fournis</span> | <span class="font-semibold">✓ Respect des normes sanitaires</span></p>
                    </div>
                </div>`,
                applications: [
                    "Protection radiologique médicale et industrielle",
                    "Isolation acoustique pour studios et industries",
                    "Gaines et revêtements anti-corrosion",
                    "Plaques et feuilles pour construction",
                ],
                benefits: [
                    "Pureté garantie pour une protection optimale",
                    "Malléabilité parfaite pour des formes complexes",
                    "Stabilité chimique exceptionnelle",
                ],
                samyAdvantage:
                    "Notre processus de sélection rigoureux auprès de fournisseurs reconnus garantit un plomb de qualité constante. Chaque livraison est accompagnée de certificats d'analyse détaillés.",
            },
            en: {
                shortTitle: "Soft Lead 99%",
                longTitle:
                    "Soft Lead 99% - Excellence in Protection and Insulation",
                heroTitle: "The Algerian Reference in Industrial Lead",
                intro: "Samy Business Soft Lead 99% is the preferred choice of demanding industrial users. With guaranteed purity over 99%, our lead meets the strictest European standards.",
                valueProposition:
                    "Our soft lead offers exceptional malleability combined with optimal density, enabling customized protection solutions with an unmatched performance/cost ratio.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Guaranteed Purity</p>
                            <p class="font-semibold text-lg text-[rgb(223,126,60)]">≥99%</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Density</p>
                            <p class="font-semibold">11.34 g/cm³</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Melting Point</p>
                            <p class="font-semibold">327 °C</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Electrical Conductivity</p>
                            <p class="font-semibold">≈4.8 MS/m</p>
                        </div>
                    </div>
                    <div class="bg-base-200/40 p-4 rounded-lg">
                        <p class="text-sm text-base-content/70"><span class="font-semibold">✓ Complete LME traceability</span> | <span class="font-semibold">✓ Analysis certificates provided</span> | <span class="font-semibold">✓ Health standards compliance</span></p>
                    </div>
                </div>`,
                applications: [
                    "Medical and industrial radiological protection",
                    "Acoustic insulation for studios and industries",
                    "Sheathing and anti-corrosion coatings",
                    "Plates and sheets for construction",
                ],
                benefits: [
                    "Guaranteed purity for optimal protection",
                    "Perfect malleability for complex shapes",
                    "Exceptional chemical stability",
                ],
                samyAdvantage:
                    "Our rigorous selection process from recognized suppliers ensures constant quality lead. Each delivery includes detailed analysis certificates.",
            },
            ar: {
                shortTitle: "رصاص نقي 99%",
                longTitle: "رصاص نقي 99% - التميز في الحماية والعزل",
                heroTitle: "المرجع الجزائري في الرصاص الصناعي",
                intro: "الرصاص النقي 99% من Samy Business هو الخيار المفضل للمستخدمين الصناعيين المتطلبين. مع نقاء مضمون فوق 99٪، يلبي رصاصنا أشد المعايير الأوروبية صرامة.",
                valueProposition:
                    "رصاصنا اللين يوفر مرونة استثنائية مجتمعة مع كثافة مثالية، مما يتيح حلول حماية مخصصة مع نسبة أداء/تكلفة لا مثيل لها.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">النقاء المضمون</p>
                            <p class="font-semibold text-lg text-[rgb(223,126,60)]">≥99%</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">الكثافة</p>
                            <p class="font-semibold">11.34 جم/سم³</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">درجة الانصهار</p>
                            <p class="font-semibold">327 °م</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">التوصيل الكهربائي</p>
                            <p class="font-semibold">≈4.8 MS/m</p>
                        </div>
                    </div>
                    <div class="bg-base-200/40 p-4 rounded-lg">
                        <p class="text-sm text-base-content/70"><span class="font-semibold">✓ إمكانية تتبع LME كاملة</span> | <span class="font-semibold">✓ شهادات تحليل مقدمة</span> | <span class="font-semibold">✓ الامتثال لمعايير الصحة</span></p>
                    </div>
                </div>`,
                applications: [
                    "الحماية الإشعاعية الطبية والصناعية",
                    "عزل صوتي للاستوديوهات والصناعات",
                    "أغماد وطلاءات مضادة للتآكل",
                    "ألواح وصفائح للبناء",
                ],
                benefits: [
                    "نقاء مضمون للحماية المثلى",
                    "مرونة مثالية للأشكال المعقدة",
                    "استقرار كيميائي استثنائي",
                ],
                samyAdvantage:
                    "ضمانات عملية الاختيار الدقيقة من الموردين المعترف بهم جودة ثابتة من الرصاص. تشمل كل عملية تسليم شهادات تحليل مفصلة.",
            },
        },

        aluminium: {
            image: "/product_section/aluminium-en-lingots.avif",
            imageTableau: "/tableaux/tableau_aluminium.jpeg",
            fr: {
                shortTitle: "Aluminium Industriel",
                longTitle:
                    "Aluminium Industriel - Léger, Résistant, Polyvalent",
                heroTitle: "L'Excellence Algérienne en Aluminium",
                intro: "L'Aluminium Samy Business incarne l'excellence industrielle algérienne. Avec une pureté garantie de 99,7% et une gamme complète d'alliages, nous répondons aux besoins des secteurs les plus exigeants.",
                valueProposition:
                    "Notre aluminium offre le parfait équilibre entre légèreté et résistance, permettant des économies substantielles en énergie et en coûts de transport.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Pureté Standard</p>
                            <p class="font-semibold text-lg text-[rgb(223,126,60)]">99,7%</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Densité</p>
                            <p class="font-semibold">2,7 g/cm³</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Point de Fusion</p>
                            <p class="font-semibold">660 °C</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Conductivité Thermique</p>
                            <p class="font-semibold">237 W/m·K</p>
                        </div>
                    </div>
                    <div class="bg-base-200/40 p-4 rounded-lg">
                        <p class="text-sm text-base-content/70"><span class="font-semibold">✓ Formats : lingots, plaques, bobines</span> | <span class="font-semibold">✓ Alliages sur mesure</span> | <span class="font-semibold">✓ Traçabilité LME</span></p>
                    </div>
                </div>`,
                applications: [
                    "Industrie aéronautique et spatiale",
                    "Construction et architecture moderne",
                    "Transport automobile et ferroviaire",
                    "Emballage alimentaire et industriel",
                ],
                benefits: [
                    "Rapport résistance/poids exceptionnel",
                    "Résistance naturelle à la corrosion",
                    "Excellent recyclabilité (95% d'économie d'énergie)",
                ],
                samyAdvantage:
                    "Notre réseau logistique optimisé couvre toute l'Algérie, garantissant des délais de livraison compétitifs. Nos équipes techniques vous accompagnent dans le choix du grade adapté.",
            },
            en: {
                shortTitle: "Industrial Aluminium",
                longTitle: "Industrial Aluminium - Light, Strong, Versatile",
                heroTitle: "Algerian Excellence in Aluminium",
                intro: "Samy Business Aluminium embodies Algerian industrial excellence. With guaranteed purity of 99.7% and a complete range of alloys, we meet the needs of the most demanding sectors.",
                valueProposition:
                    "Our aluminium offers the perfect balance between lightness and strength, enabling substantial energy and transport cost savings.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Standard Purity</p>
                            <p class="font-semibold text-lg text-[rgb(223,126,60)]">99.7%</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Density</p>
                            <p class="font-semibold">2.7 g/cm³</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Melting Point</p>
                            <p class="font-semibold">660 °C</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Thermal Conductivity</p>
                            <p class="font-semibold">237 W/m·K</p>
                        </div>
                    </div>
                    <div class="bg-base-200/40 p-4 rounded-lg">
                        <p class="text-sm text-base-content/70"><span class="font-semibold">✓ Formats: ingots, plates, coils</span> | <span class="font-semibold">✓ Custom alloys</span> | <span class="font-semibold">✓ LME traceability</span></p>
                    </div>
                </div>`,
                applications: [
                    "Aerospace industry",
                    "Modern construction and architecture",
                    "Automotive and railway transport",
                    "Food and industrial packaging",
                ],
                benefits: [
                    "Exceptional strength-to-weight ratio",
                    "Natural corrosion resistance",
                    "Excellent recyclability (95% energy savings)",
                ],
                samyAdvantage:
                    "Our optimized logistics network covers all of Algeria, guaranteeing competitive delivery times. Our technical teams guide you in choosing the appropriate grade.",
            },
            ar: {
                shortTitle: "ألمنيوم صناعي",
                longTitle: "ألمنيوم صناعي - خفيف، قوي، متعدد الاستخدامات",
                heroTitle: "التميز الجزائري في الألمنيوم",
                intro: "ألمنيوم Samy Business يجسد التميز الصناعي الجزائري. مع نقاء مضمون بنسبة 99.7٪ ومجموعة كاملة من السبائك، نحن نلبي احتياجات أكثر القطاعات تطلبًا.",
                valueProposition:
                    "يقدم ألمنيومنا التوازن المثالي بين الخفة والقوة، مما يتيح توفيرًا كبيرًا في الطاقة وتكاليف النقل.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">النقاء القياسي</p>
                            <p class="font-semibold text-lg text-[rgb(223,126,60)]">99.7%</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">الكثافة</p>
                            <p class="font-semibold">2.7 جم/سم³</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">درجة الانصهار</p>
                            <p class="font-semibold">660 °م</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">التوصيل الحراري</p>
                            <p class="font-semibold">237 واط/م·ك</p>
                        </div>
                    </div>
                    <div class="bg-base-200/40 p-4 rounded-lg">
                        <p class="text-sm text-base-content/70"><span class="font-semibold">✓ الأشكال: سبائك، ألواح، لفائف</span> | <span class="font-semibold">✓ سبائك مخصصة</span> | <span class="font-semibold">✓ إمكانية تتبع LME</span></p>
                    </div>
                </div>`,
                applications: [
                    "صناعة الطيران والفضاء",
                    "البناء والعمارة الحديثة",
                    "النقل البري والسكك الحديدية",
                    "التعبئة والتغليف الصناعية والغذائية",
                ],
                benefits: [
                    "نسبة قوة إلى وزن استثنائية",
                    "مقاومة طبيعية للتآكل",
                    "قابلية ممتازة لإعادة التدوير (توفير 95٪ في الطاقة)",
                ],
                samyAdvantage:
                    "تغطي شبكتنا اللوجستية المثلى جميع أنحاء الجزائر، مما يضمن أوقات تسليم تنافسية. توجهك فرقنا الفنية في اختيار الدرجة المناسبة.",
            },
        },

        "oxyde-de-zinc": {
            image: "/product_section/oxyde de zinc.avif",
            imageTableau: "/tableaux/tableau_oxideZinc.jpeg",
            fr: {
                shortTitle: "Oxyde de Zinc",
                longTitle:
                    "Oxyde de Zinc (ZnO) - Polymère d'Excellence Industrielle",
                heroTitle: "L'Expertise Samy Business en Produits Chimiques",
                intro: "L'Oxyde de Zinc Samy Business est produit selon des standards européens, avec une pureté garantie supérieure à 99,8%. Résultat de notre expertise de plus de 15 ans dans les métaux non-ferreux.",
                valueProposition:
                    "Notre oxyde de zinc offre une granulométrie contrôlée et une réactivité optimale, améliorant les performances de vos formulations tout en réduisant vos coûts de production.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Pureté Minimum</p>
                            <p class="font-semibold text-lg text-[rgb(223,126,60)]">99,8%</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Forme</p>
                            <p class="font-semibold">Poudre ultrafine</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Granulométrie</p>
                            <p class="font-semibold">Contrôlée 0,1-5µm</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Surface Spécifique</p>
                            <p class="font-semibold">5-50 m²/g</p>
                        </div>
                    </div>
                    <div class="bg-base-200/40 p-4 rounded-lg">
                        <p class="text-sm text-base-content/70"><span class="font-semibold">✓ Certificats d'analyse complets</span> | <span class="font-semibold">✓ Traçabilité matière première</span> | <span class="font-semibold">✓ Conditionnement adapté</span></p>
                    </div>
                </div>`,
                applications: [
                    "Vulcanisation du caoutchouc et pneumatiques",
                    "Produits pharmaceutiques et cosmétiques",
                    "Céramiques techniques et verres",
                    "Peintures et revêtements protecteurs",
                ],
                benefits: [
                    "Réactivité contrôlée pour des formulations stables",
                    "Granulométrie uniforme pour une dispersion optimale",
                    "Blancheur et opacité exceptionnelles",
                ],
                samyAdvantage:
                    "Notre processus qualité inclut des analyses systématiques pour garantir la constance des lots. Nous proposons des conditionnements adaptés à vos volumes.",
            },
            en: {
                shortTitle: "Zinc Oxide",
                longTitle: "Zinc Oxide (ZnO) - Industrial Excellence Polymer",
                heroTitle: "Samy Business Chemical Products Expertise",
                intro: "Samy Business Zinc Oxide is produced according to European standards, with guaranteed purity above 99.8%. Result of our over 15 years expertise in non-ferrous metals.",
                valueProposition:
                    "Our zinc oxide offers controlled granulometry and optimal reactivity, improving your formulation performance while reducing your production costs.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Minimum Purity</p>
                            <p class="font-semibold text-lg text-[rgb(223,126,60)]">99.8%</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Form</p>
                            <p class="font-semibold">Ultrafine powder</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Granulometry</p>
                            <p class="font-semibold">Controlled 0.1-5µm</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Specific Surface</p>
                            <p class="font-semibold">5-50 m²/g</p>
                        </div>
                    </div>
                    <div class="bg-base-200/40 p-4 rounded-lg">
                        <p class="text-sm text-base-content/70"><span class="font-semibold">✓ Complete analysis certificates</span> | <span class="font-semibold">✓ Raw material traceability</span> | <span class="font-semibold">✓ Adapted packaging</span></p>
                    </div>
                </div>`,
                applications: [
                    "Rubber vulcanization and tires",
                    "Pharmaceutical and cosmetic products",
                    "Technical ceramics and glasses",
                    "Paints and protective coatings",
                ],
                benefits: [
                    "Controlled reactivity for stable formulations",
                    "Uniform granulometry for optimal dispersion",
                    "Exceptional whiteness and opacity",
                ],
                samyAdvantage:
                    "Our quality process includes systematic analyses to guarantee batch consistency. We offer packaging adapted to your volumes.",
            },
            ar: {
                shortTitle: "أكسيد الزنك",
                longTitle: "أكسيد الزنك (ZnO) - بوليمر التميز الصناعي",
                heroTitle: "خبرة Samy Business في المنتجات الكيميائية",
                intro: "يتم إنتاج أكسيد الزنك من Samy Business وفقًا للمعايير الأوروبية، مع نقاء مضمون أعلى من 99.8٪. نتيجة خبرتنا التي تزيد عن 15 عامًا في المعادن غير الحديدية.",
                valueProposition:
                    "يقدم أكسيد الزنك الخاص بنا تحجيم حبيبي مضبوط وتفاعلية مثالية، مما يحسن أداء صياغتك مع تقليل تكاليف الإنتاج.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">الحد الأدنى للنقاء</p>
                            <p class="font-semibold text-lg text-[rgb(223,126,60)]">99.8%</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">الشكل</p>
                            <p class="font-semibold">مسحوق فائق النعومة</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">تحجيم الحبيبات</p>
                            <p class="font-semibold">متحكم به 0.1-5 ميكرومتر</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">السطح النوعي</p>
                            <p class="font-semibold">5-50 م²/غ</p>
                        </div>
                    </div>
                    <div class="bg-base-200/40 p-4 rounded-lg">
                        <p class="text-sm text-base-content/70"><span class="font-semibold">✓ شهادات تحليل كاملة</span> | <span class="font-semibold">✓ إمكانية تتبع المواد الخام</span> | <span class="font-semibold">✓ تغليف مناسب</span></p>
                    </div>
                </div>`,
                applications: [
                    "المطاط وتقوية الإطارات",
                    "المنتجات الصيدلانية والتجميلية",
                    "السيراميك التقني والزجاج",
                    "الدهانات والطلاءات الواقية",
                ],
                benefits: [
                    "تفاعلية مضبوطة للصياغات المستقرة",
                    "تحجيم حبيبي موحد للتشتت الأمثل",
                    "بياض و عتامة استثنائية",
                ],
                samyAdvantage:
                    "تتضمن عملية الجودة لدينا تحليلات منهجية لضمان ثبات الدفعات. نقدم تغليفاً مناسباً لحجمك.",
            },
        },

        "zinc-shg": {
            image: "/product_section/SHG-99.995.png",
            imageTableau: "/tableaux/tableau_zincSHG99.jpeg",
            fr: {
                shortTitle: "Zinc SHG 99.995%",
                longTitle:
                    "Zinc SHG 99.995% - Pureté Extraordinaire pour Applications Critiques",
                heroTitle: "Le Zinc Industriel de Haute Précision",
                intro: "Le Zinc SHG 99.995% de Samy Business représente l'excellence absolue en matière de pureté métallique. Avec une teneur en zinc garantie à 99.995%, notre produit répond aux exigences les plus strictes.",
                valueProposition:
                    "Notre zinc SHG offre une pureté exceptionnelle qui se traduit par une meilleure performance en galvanisation, une réduction des déchets et une qualité de surface supérieure.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Pureté Garantie</p>
                            <p class="font-semibold text-lg text-[rgb(223,126,60)]">99.995%</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Densité</p>
                            <p class="font-semibold">7,14 g/cm³</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Point de Fusion</p>
                            <p class="font-semibold">419,5 °C</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Conductivité</p>
                            <p class="font-semibold">16,6 MS/m</p>
                        </div>
                    </div>
                    <div class="bg-base-200/40 p-4 rounded-lg">
                        <p class="text-sm text-base-content/70"><span class="font-semibold">✓ Grade LME SHG</span> | <span class="font-semibold">✓ Certificat de pureté</span> | <span class="font-semibold">✓ Analyse spectrale fournie</span></p>
                    </div>
                </div>`,
                applications: [
                    "Galvanisation à chaud continue",
                    "Production d'alliages de haute précision",
                    "Industrie chimique et pharmaceutique",
                    "Fabrication de batteries et accumulateurs",
                ],
                benefits: [
                    "Pureté garantie pour une galvanisation uniforme",
                    "Réduction des inclusions et défauts",
                    "Meilleure adhérence des revêtements",
                ],
                samyAdvantage:
                    "Chaque lingot est identifié et tracé, avec certificat d'analyse spectrale. Notre stock régulier garantit la disponibilité pour vos productions en continu.",
            },
            en: {
                shortTitle: "Zinc SHG 99.995%",
                longTitle:
                    "Zinc SHG 99.995% - Extraordinary Purity for Critical Applications",
                heroTitle: "High Precision Industrial Zinc",
                intro: "Samy Business Zinc SHG 99.995% represents absolute excellence in metallic purity. With guaranteed zinc content of 99.995%, our product meets the strictest requirements.",
                valueProposition:
                    "Our SHG zinc offers exceptional purity that translates into better galvanization performance, waste reduction and superior surface quality.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Guaranteed Purity</p>
                            <p class="font-semibold text-lg text-[rgb(223,126,60)]">99.995%</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Density</p>
                            <p class="font-semibold">7.14 g/cm³</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Melting Point</p>
                            <p class="font-semibold">419.5 °C</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Conductivity</p>
                            <p class="font-semibold">16.6 MS/m</p>
                        </div>
                    </div>
                    <div class="bg-base-200/40 p-4 rounded-lg">
                        <p class="text-sm text-base-content/70"><span class="font-semibold">✓ LME SHG Grade</span> | <span class="font-semibold">✓ Purity certificate</span> | <span class="font-semibold">✓ Spectral analysis provided</span></p>
                    </div>
                </div>`,
                applications: [
                    "Continuous hot-dip galvanizing",
                    "High precision alloy production",
                    "Chemical and pharmaceutical industry",
                    "Battery and accumulator manufacturing",
                ],
                benefits: [
                    "Guaranteed purity for uniform galvanization",
                    "Reduction of inclusions and defects",
                    "Better coating adhesion",
                ],
                samyAdvantage:
                    "Each ingot is identified and traced, with spectral analysis certificate. Our regular stock guarantees availability for your continuous production.",
            },
            ar: {
                shortTitle: "زنك SHG 99.995%",
                longTitle: "زنك SHG 99.995% - نقاء استثنائي للتطبيقات الحرجة",
                heroTitle: "الزنك الصناعي عالي الدقة",
                intro: "يمثل زنك SHG 99.995% من Samy Business التميز المطلق في النقاء المعدني. مع محتوى زنك مضمون بنسبة 99.995٪، يلبي منتجنا أشد المتطلبات صرامة.",
                valueProposition:
                    "يقدم زنك SHG الخاص بنا نقاء استثنائيًا يترجم إلى أداء جلفنة أفضل، وتقليل النفايات وجودة سطح فائقة.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">النقاء المضمون</p>
                            <p class="font-semibold text-lg text-[rgb(223,126,60)]">99.995%</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">الكثافة</p>
                            <p class="font-semibold">7.14 جم/سم³</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">درجة الانصهار</p>
                            <p class="font-semibold">419.5 °م</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">التوصيل</p>
                            <p class="font-semibold">16.6 MS/m</p>
                        </div>
                    </div>
                    <div class="bg-base-200/40 p-4 rounded-lg">
                        <p class="text-sm text-base-content/70"><span class="font-semibold">✓ درجة LME SHG</span> | <span class="font-semibold">✓ شهادة نقاء</span> | <span class="font-semibold">✓ تحليل طيفي مقدم</span></p>
                    </div>
                </div>`,
                applications: [
                    "الجلفنة بالغمس الساخن المستمرة",
                    "إنتاج سبائك عالية الدقة",
                    "الصناعة الكيميائية والدوائية",
                    "تصنيع البطاريات والمراكم",
                ],
                benefits: [
                    "نقاء مضمون لجلفنة موحدة",
                    "تقليل الشوائب والعيوب",
                    "التصاق أفضل للطلاءات",
                ],
                samyAdvantage:
                    "كل سبيكة يتم تحديدها وتتبعها، مع شهادة تحليل طيفي. يضمن مخزوننا المنتظم التوفر لإنتاجك المستمر.",
            },
        },

        "zinc-aluminé": {
            image: "/product_section/zinc-aluminé.jpg",
            imageTableau: "/tableaux/tableau_aluminium.jpeg",
            fr: {
                shortTitle: "Zinc Aluminé",
                longTitle: "Zinc Aluminé - Protection Supérieure des Métaux",
                heroTitle: "Innovation en Protection Anticorrosion",
                intro: "Le Zinc Aluminé Samy Business combine les meilleures propriétés du zinc et de l'aluminium pour offrir une protection anticorrosion exceptionnelle.",
                valueProposition:
                    "Notre zinc aluminé offre une protection 3 à 5 fois supérieure au zinc traditionnel, réduisant vos coûts de maintenance tout en garantissant la durabilité de vos installations.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Composition</p>
                            <p class="font-semibold">Zn 95% | Al 5%</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Température Fusion</p>
                            <p class="font-semibold">420-450 °C</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Résistance Corrosion</p>
                            <p class="font-semibold">3-5× zinc pur</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Durée Vie</p>
                            <p class="font-semibold">Jusqu'à 50 ans</p>
                        </div>
                    </div>
                    <div class="bg-base-200/40 p-4 rounded-lg">
                        <p class="text-sm text-base-content/70"><span class="font-semibold">✓ Compatible galvanisation</span> | <span class="font-semibold">✓ Résistance thermique</span> | <span class="font-semibold">✓ Faible maintenance</span></p>
                    </div>
                </div>`,
                applications: [
                    "Protection des structures offshore et maritimes",
                    "Tôles galvanisées pour construction",
                    "Équipements agricoles et routiers",
                    "Installations industrielles en milieu corrosif",
                ],
                benefits: [
                    "Résistance exceptionnelle aux environnements salins",
                    "Protection cathodique durable",
                    "Réduction des coûts de maintenance",
                ],
                samyAdvantage:
                    "Notre équipe technique vous accompagne dans l'optimisation de vos procédés de galvanisation. Nous proposons des formations sur l'utilisation optimale de nos produits.",
            },
            en: {
                shortTitle: "Zinc Aluminized",
                longTitle: "Zinc Aluminized - Superior Metal Protection",
                heroTitle: "Innovation in Anticorrosion Protection",
                intro: "Samy Business Zinc Aluminized combines the best properties of zinc and aluminum to offer exceptional anti-corrosion protection.",
                valueProposition:
                    "Our aluminized zinc offers protection 3 to 5 times superior to traditional zinc, reducing your maintenance costs while ensuring the durability of your installations.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Composition</p>
                            <p class="font-semibold">Zn 95% | Al 5%</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Melting Temperature</p>
                            <p class="font-semibold">420-450 °C</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Corrosion Resistance</p>
                            <p class="font-semibold">3-5× pure zinc</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Lifespan</p>
                            <p class="font-semibold">Up to 50 years</p>
                        </div>
                    </div>
                    <div class="bg-base-200/40 p-4 rounded-lg">
                        <p class="text-sm text-base-content/70"><span class="font-semibold">✓ Galvanization compatible</span> | <span class="font-semibold">✓ Thermal resistance</span> | <span class="font-semibold">✓ Low maintenance</span></p>
                    </div>
                </div>`,
                applications: [
                    "Offshore and maritime structure protection",
                    "Galvanized sheets for construction",
                    "Agricultural and road equipment",
                    "Industrial installations in corrosive environments",
                ],
                benefits: [
                    "Exceptional resistance to saline environments",
                    "Durable cathodic protection",
                    "Reduction of maintenance costs",
                ],
                samyAdvantage:
                    "Our technical team guides you in optimizing your galvanization processes. We offer training on optimal use of our products.",
            },
            ar: {
                shortTitle: "زنك مضاف بالألمنيوم",
                longTitle: "زنك مضاف بالألمنيوم - حماية فائقة للمعادن",
                heroTitle: "الابتكار في الحماية من التآكل",
                intro: "يجمع زنك Samy Business المضاف بالألمنيوم أفضل خصائص الزنك والألمنيوم لتقديم حماية استثنائية مضادة للتآكل.",
                valueProposition:
                    "يقدم الزنك المضاف بالألمنيوم الخاص بنا حماية تفوق الزنك التقليدي من 3 إلى 5 مرات، مما يقلل تكاليف صيانتك مع ضمان متانة منشآتك.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">التركيب</p>
                            <p class="font-semibold">زنك 95% | ألمنيوم 5%</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">درجة حرارة الانصهار</p>
                            <p class="font-semibold">420-450 °م</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">مقاومة التآكل</p>
                            <p class="font-semibold">3-5× زنك نقي</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">العمر الافتراضي</p>
                            <p class="font-semibold">حتى 50 سنة</p>
                        </div>
                    </div>
                    <div class="bg-base-200/40 p-4 rounded-lg">
                        <p class="text-sm text-base-content/70"><span class="font-semibold">✓ متوافق مع الجلفنة</span> | <span class="font-semibold">✓ مقاومة حرارية</span> | <span class="font-semibold">✓ صيانة منخفضة</span></p>
                    </div>
                </div>`,
                applications: [
                    "حماية الهياكل البحرية والبحرية",
                    "صفائح مجلفنة للبناء",
                    "معدات زراعية وطرقية",
                    "منشآت صناعية في بيئات مسببة للتآكل",
                ],
                benefits: [
                    "مقاومة استثنائية للبيئات المالحة",
                    "حماية كاثودية دائمة",
                    "تقليل تكاليف الصيانة",
                ],
                samyAdvantage:
                    "يرشدك فريقنا الفني في تحسين عمليات الجلفنة الخاصة بك. نقدم تدريبًا على الاستخدام الأمثل لمنتجاتنا.",
            },
        },

        cuivres: {
            image: "/product_section/lingot-de-cuivre.jpg",
            imageTableau: "/tableaux/tableau_cuivre.jpeg",
            fr: {
                shortTitle: "Cuivre Industriel",
                longTitle:
                    "Cuivre 99.9% - Conductivité et Durabilité Exceptionnelles",
                heroTitle: "L'Excellence en Conductivité Électrique",
                intro: "Le Cuivre Samy Business, d'une pureté garantie de 99.9%, est la référence algérienne pour les applications exigeant une conductivité électrique et thermique optimale.",
                valueProposition:
                    "Notre cuivre offre une conductivité exceptionnelle permettant des économies d'énergie substantielles, tout en garantissant une durabilité et une fiabilité supérieures.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Pureté Minimum</p>
                            <p class="font-semibold text-lg text-[rgb(223,126,60)]">99.9%</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Conductivité Électrique</p>
                            <p class="font-semibold">101% IACS</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Densité</p>
                            <p class="font-semibold">8,96 g/cm³</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Point de Fusion</p>
                            <p class="font-semibold">1084 °C</p>
                        </div>
                    </div>
                    <div class="bg-base-200/40 p-4 rounded-lg">
                        <p class="text-sm text-base-content/70"><span class="font-semibold">✓ Formats : cathodes, plaques, lingots</span> | <span class="font-semibold">✓ Traçabilité LME</span> | <span class="font-semibold">✓ Certificats métallurgiques</span></p>
                    </div>
                </div>`,
                applications: [
                    "Câblage électrique haute tension",
                    "Équipements électroniques et télécoms",
                    "Systèmes de chauffage et échangeurs",
                    "Installations industrielles et manufacturières",
                ],
                benefits: [
                    "Conductivité électrique optimale réduisant les pertes",
                    "Excellente conductivité thermique",
                    "100% recyclable sans perte de qualité",
                ],
                samyAdvantage:
                    "Notre réseau de distribution couvre toute l'Algérie, avec des stocks stratégiques garantissant la disponibilité immédiate.",
            },
            en: {
                shortTitle: "Industrial Copper",
                longTitle:
                    "Copper 99.9% - Exceptional Conductivity and Durability",
                heroTitle: "Excellence in Electrical Conductivity",
                intro: "Samy Business Copper, with guaranteed purity of 99.9%, is the Algerian reference for applications requiring optimal electrical and thermal conductivity.",
                valueProposition:
                    "Our copper offers exceptional conductivity enabling substantial energy savings, while guaranteeing superior durability and reliability.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Minimum Purity</p>
                            <p class="font-semibold text-lg text-[rgb(223,126,60)]">99.9%</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Electrical Conductivity</p>
                            <p class="font-semibold">101% IACS</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Density</p>
                            <p class="font-semibold">8.96 g/cm³</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Melting Point</p>
                            <p class="font-semibold">1084 °C</p>
                        </div>
                    </div>
                    <div class="bg-base-200/40 p-4 rounded-lg">
                        <p class="text-sm text-base-content/70"><span class="font-semibold">✓ Formats: cathodes, plates, ingots</span> | <span class="font-semibold">✓ LME traceability</span> | <span class="font-semibold">✓ Metallurgical certificates</span></p>
                    </div>
                </div>`,
                applications: [
                    "High voltage electrical wiring",
                    "Electronic and telecom equipment",
                    "Heating systems and exchangers",
                    "Industrial and manufacturing installations",
                ],
                benefits: [
                    "Optimal electrical conductivity reducing losses",
                    "Excellent thermal conductivity",
                    "100% recyclable without quality loss",
                ],
                samyAdvantage:
                    "Our distribution network covers all of Algeria, with strategic stocks guaranteeing immediate availability.",
            },
            ar: {
                shortTitle: "نحاس صناعي",
                longTitle: "نحاس 99.9% - توصيلية ومتانة استثنائية",
                heroTitle: "التميز في التوصيل الكهربائي",
                intro: "نحاس Samy Business، بنقاء مضمون 99.9٪، هو المرجع الجزائري للتطبيقات التي تتطلب توصيلية كهربائية وحرارية مثالية.",
                valueProposition:
                    "يقدم نحاسنا توصيلية استثنائية تمكن من توفير كبير في الطاقة، مع ضمان متانة وموثوقية فائقة.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">الحد الأدنى للنقاء</p>
                            <p class="font-semibold text-lg text-[rgb(223,126,60)]">99.9%</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">التوصيل الكهربائي</p>
                            <p class="font-semibold">101% IACS</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">الكثافة</p>
                            <p class="font-semibold">8.96 جم/سم³</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">درجة الانصهار</p>
                            <p class="font-semibold">1084 °م</p>
                        </div>
                    </div>
                    <div class="bg-base-200/40 p-4 rounded-lg">
                        <p class="text-sm text-base-content/70"><span class="font-semibold">✓ الأشكال: كاثودات، ألواح، سبائك</span> | <span class="font-semibold">✓ إمكانية تتبع LME</span> | <span class="font-semibold">✓ شهادات معدنية</span></p>
                    </div>
                </div>`,
                applications: [
                    "أسلاك كهربائية عالية الجهد",
                    "معدات إلكترونية واتصالات",
                    "أنظمة تدفئة ومبادلات حرارية",
                    "منشآت صناعية وتصنيعية",
                ],
                benefits: [
                    "توصيلية كهربائية مثالية تقلل الخسائر",
                    "توصيل حراري ممتاز",
                    "قابل لإعادة التدوير 100٪ دون فقدان الجودة",
                ],
                samyAdvantage:
                    "تغطي شبكة التوزيع الخاصة بنا جميع أنحاء الجزائر، مع مخزون استراتيجي يضمن التوفر الفوري.",
            },
        },

        carton: {
            image: "/product_section/carton.avif",
            imageTableau: "/tableaux/tableau_carton.jpeg",
            fr: {
                shortTitle: "Carton Industriel",
                longTitle:
                    "Carton Industriel - Solutions d'Emballage sur Mesure",
                heroTitle: "L'Expertise Samy Business en Packaging",
                intro: "Le Carton Industriel Samy Business répond aux exigences les plus strictes en matière d'emballage et de logistique. Avec notre gamme complète, nous offrons des solutions adaptées à chaque besoin.",
                valueProposition:
                    "Nos solutions carton optimisent vos coûts logistiques tout en garantissant la protection optimale de vos produits, grâce à notre expertise en résistance mécanique.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Grades Disponibles</p>
                            <p class="font-semibold">Kraft, Testliner, Fluting</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Épaisseurs</p>
                            <p class="font-semibold">Simple à triple cannelure</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Résistance Compression</p>
                            <p class="font-semibold">Jusqu'à 15 kN/m</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Grammages</p>
                            <p class="font-semibold">125-400 g/m²</p>
                        </div>
                    </div>
                    <div class="bg-base-200/40 p-4 rounded-lg">
                        <p class="text-sm text-base-content/70"><span class="font-semibold">✓ Personnalisation possible</span> | <span class="font-semibold">✓ Certification FSC</span> | <span class="font-semibold">✓ Solutions écologiques</span></p>
                    </div>
                </div>`,
                applications: [
                    "Emballage industriel et logistique",
                    "Conditionnement alimentaire et pharmaceutique",
                    "Protection de pièces techniques",
                    "Palettes et systèmes de manutention",
                ],
                benefits: [
                    "Rapport résistance/poids optimisé",
                    "Personnalisation selon vos besoins spécifiques",
                    "Adaptabilité à tous les systèmes d'emballage",
                ],
                samyAdvantage:
                    "Notre approche sur-mesure nous permet de concevoir des solutions d'emballage adaptées à vos contraintes logistiques spécifiques.",
            },
            en: {
                shortTitle: "Industrial Cardboard",
                longTitle: "Industrial Cardboard - Custom Packaging Solutions",
                heroTitle: "Samy Business Packaging Expertise",
                intro: "Samy Business Industrial Cardboard meets the strictest requirements in packaging and logistics. With our complete range, we offer solutions adapted to every need.",
                valueProposition:
                    "Our cardboard solutions optimize your logistics costs while guaranteeing optimal protection of your products, thanks to our expertise in mechanical strength.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Available Grades</p>
                            <p class="font-semibold">Kraft, Testliner, Fluting</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Thicknesses</p>
                            <p class="font-semibold">Single to triple wall</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Compression Strength</p>
                            <p class="font-semibold">Up to 15 kN/m</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">Grammage</p>
                            <p class="font-semibold">125-400 g/m²</p>
                        </div>
                    </div>
                    <div class="bg-base-200/40 p-4 rounded-lg">
                        <p class="text-sm text-base-content/70"><span class="font-semibold">✓ Customization possible</span> | <span class="font-semibold">✓ FSC certification</span> | <span class="font-semibold">✓ Ecological solutions</span></p>
                    </div>
                </div>`,
                applications: [
                    "Industrial and logistics packaging",
                    "Food and pharmaceutical packaging",
                    "Technical parts protection",
                    "Pallets and handling systems",
                ],
                benefits: [
                    "Optimized strength-to-weight ratio",
                    "Customization according to your specific needs",
                    "Adaptability to all packaging systems",
                ],
                samyAdvantage:
                    "Our tailored approach allows us to design packaging solutions adapted to your specific logistics constraints.",
            },
            ar: {
                shortTitle: "كرتون صناعي",
                longTitle: "كرتون صناعي - حلول تعبئة مخصصة",
                heroTitle: "خبرة Samy Business في التعبئة",
                intro: "يلبي الكرتون الصناعي من Samy Business أشد المتطلبات في مجال التعبئة والتغليف والخدمات اللوجستية. مع مجموعتنا الكاملة، نقدم حلولاً مكيفة لكل احتياج.",
                valueProposition:
                    "تحل حلول الكرتون الخاصة بنا تكاليفك اللوجستية مع ضمان الحماية المثلى لمنتجاتك، وذلك بفضل خبرتنا في القوة الميكانيكية.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">الدرجات المتاحة</p>
                            <p class="font-semibold">كرافت، تيستلينر، فلوتينج</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">السماكات</p>
                            <p class="font-semibold">جدار مفرد إلى ثلاثي</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">قوة الضغط</p>
                            <p class="font-semibold">حتى 15 كيلو نيوتن/م</p>
                        </div>
                        <div class="p-3 bg-base-200/60 rounded-lg">
                            <p class="text-sm font-semibold text-base-content/60">الوزن النوعي</p>
                            <p class="font-semibold">125-400 جم/م²</p>
                        </div>
                    </div>
                    <div class="bg-base-200/40 p-4 rounded-lg">
                        <p class="text-sm text-base-content/70"><span class="font-semibold">✓ إمكانية التخصيص</span> | <span class="font-semibold">✓ شهادة FSC</span> | <span class="font-semibold">✓ حلول بيئية</span></p>
                    </div>
                </div>`,
                applications: [
                    "التعبئة والتغليف الصناعية واللوجستية",
                    "التعبئة الغذائية والدوائية",
                    "حماية القطع التقنية",
                    "المنصات وأنظمة المناولة",
                ],
                benefits: [
                    "نسبة قوة إلى وزن محسنة",
                    "تخصيص وفقًا لاحتياجاتك المحددة",
                    "القدرة على التكيف مع جميع أنظمة التعبئة",
                ],
                samyAdvantage:
                    "يتيح نهجنا المخصص لنا تصميم حلول تعبئة مكيفة مع قيودك اللوجستية المحددة.",
            },
        },
    };

    // Static translations for UI elements
    const staticTranslations = {
        fr: {
            premiumProduct: "Produit Métallurgique Premium",
            ourValueProposition: "Notre Proposition de Valeur",
            productOverview: "Aperçu du Produit",
            industrialApplications: "Applications Industrielles",
            keyBenefits: "Principaux Avantages",
            keySpecifications: "Spécifications Clés",
            samyBusinessAdvantage: "L'Avantage Samy Business",
            lmeListed: "Coté LME",
            fullTraceability: "Traçabilité Complète",
            yearsExpertise: "Années d'Expertise",
            readyToOptimize:
                "Prêt à Optimiser Votre Chaîne d'Approvisionnement ?",
            expertTeam:
                "Notre équipe d'experts vous guide pour sélectionner le produit parfait pour vos besoins.",
            requestCustomizedQuote: "Demander un Devis Personnalisé",
            talkToExpert: "Parler à un Expert",
            responseWithin:
                "Réponse sous 24h ouvrables • Devis gratuit • Support technique inclus",
            samyBusiness: "Samy Business",
            expertInMetals:
                "Expert en métaux ferreux et non-ferreux depuis 2007",
            yearsOfExpertise: "Années d'Expertise",
            satisfiedClients: "Clients Satisfaits",
            certifiedSuppliers: "Fournisseurs Certifiés",
            qualityAssurance:
                "Tous les produits sont cotés LME • Conformes aux normes européennes • Traçabilité complète de la chaîne d'approvisionnement",
        },
        en: {
            premiumProduct: "Premium Metallurgical Product",
            ourValueProposition: "Our Value Proposition",
            productOverview: "Product Overview",
            industrialApplications: "Industrial Applications",
            keyBenefits: "Key Benefits",
            keySpecifications: "Key Specifications",
            samyBusinessAdvantage: "The Samy Business Advantage",
            lmeListed: "LME Listed",
            fullTraceability: "Full Traceability",
            yearsExpertise: "15+ Years Expertise",
            readyToOptimize: "Ready to Optimize Your Supply Chain?",
            expertTeam:
                "Our expert team guides you to select the perfect product for your needs.",
            requestCustomizedQuote: "Request Customized Quote",
            talkToExpert: "Talk to an Expert",
            responseWithin:
                "Response within 24 business hours • Free quote • Technical support included",
            samyBusiness: "Samy Business",
            expertInMetals:
                "Expert in ferrous and non-ferrous metals since 2007",
            yearsOfExpertise: "Years of Expertise",
            satisfiedClients: "Satisfied Clients",
            certifiedSuppliers: "Certified Suppliers",
            qualityAssurance:
                "All products are LME-listed • European standards compliant • Full supply chain traceability",
        },
        ar: {
            premiumProduct: "منتج معدني متميز",
            ourValueProposition: "اقتراح القيمة الخاص بنا",
            productOverview: "نظرة عامة على المنتج",
            industrialApplications: "التطبيقات الصناعية",
            keyBenefits: "المزايا الرئيسية",
            keySpecifications: "المواصفات الرئيسية",
            samyBusinessAdvantage: "ميزة Samy Business",
            lmeListed: "مدرج في LME",
            fullTraceability: "تتبع كامل",
            yearsExpertise: "خبرة 15+ سنة",
            readyToOptimize: "مستعد لتحسين سلسلة التوريد الخاصة بك؟",
            expertTeam:
                "يرشدك فريق الخبراء لدينا لاختيار المنتج المثالي لاحتياجاتك.",
            requestCustomizedQuote: "طلب عرض سعر مخصص",
            talkToExpert: "التحدث مع خبير",
            responseWithin:
                "الرد خلال 24 ساعة عمل • عرض سعر مجاني • دعم فني متضمن",
            samyBusiness: "Samy Business",
            expertInMetals: "خبير في المعادن الحديدية وغير الحديدية منذ 2007",
            yearsOfExpertise: "سنوات من الخبرة",
            satisfiedClients: "عملاء راضون",
            certifiedSuppliers: "موردون معتمدون",
            qualityAssurance:
                "جميع المنتجات مدرجة في بورصة LME • مطابقة للمعايير الأوروبية • تتبع كامل لسلسلة التوريد",
        },
    };

    // Get translations based on language
    const t = staticTranslations[language] || staticTranslations.en;

    // Fallback product if slug not found
    const fallback = {
        fr: {
            shortTitle: productName,
            longTitle: productName,
            heroTitle: "Produit Samy Business",
            intro: "Découvrez l'excellence industrielle Samy Business avec ce produit de qualité supérieure, conforme aux normes européennes et coté LME pour une traçabilité garantie.",
            valueProposition:
                "Notre expertise de plus de 15 ans garantit des produits de qualité constante, optimisant vos processus industriels tout en réduisant vos coûts opérationnels.",
            specsHtml: "",
            applications: [],
            benefits: [],
            samyAdvantage: "",
        },
        en: {
            shortTitle: productName,
            longTitle: productName,
            heroTitle: "Samy Business Product",
            intro: "Discover Samy Business industrial excellence with this superior quality product, compliant with European standards and LME-listed for guaranteed traceability.",
            valueProposition:
                "Our 15+ years of expertise guarantees consistent quality products, optimizing your industrial processes while reducing your operational costs.",
            specsHtml: "",
            applications: [],
            benefits: [],
            samyAdvantage: "",
        },
        ar: {
            shortTitle: productName,
            longTitle: productName,
            heroTitle: "منتج Samy Business",
            intro: "اكتشف التميز الصناعي لـ Samy Business مع هذا المنتج عالي الجودة، المطابق للمعايير الأوروبية والمدرج في بورصة LME لإمكانية تتبع مضمونة.",
            valueProposition:
                "خبرتنا التي تزيد عن 15 سنة تضمن منتجات بجودة ثابتة، مما يحسن عملياتك الصناعية مع تقليل تكاليف التشغيل.",
            specsHtml: "",
            applications: [],
            benefits: [],
            samyAdvantage: "",
        },
    };

    const data = productData[slug]
        ? productData[slug][language] || productData[slug].fr
        : fallback[language];

    const mainImage =
        imageSrc || productData[slug]?.image || "/couvertureIMG.jpg";
    // Enhanced Hero Section
    const scrollToContact = () => {
        contactFormRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <section
            className="min-h-screen bg-gradient-to-b from-base-100 to-base-200"
            dir={isRTL ? "rtl" : "ltr"}
        >
            {/* Floating Action Buttons */}
            <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
                <button
                    onClick={scrollToContact}
                    className="p-4 rounded-full bg-[rgb(223,126,60)] text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
                    title="Quick Quote"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                    </svg>
                    <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[rgb(223,126,60)] text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        {t.requestCustomizedQuote}
                    </span>
                </button>
                <a
                    href="tel:+213123456789"
                    className="p-4 rounded-full bg-green-500 text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
                    title="Call Now"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                    </svg>
                    <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-green-500 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        {language === "fr"
                            ? "Appeler Maintenant"
                            : language === "ar"
                            ? "اتصل الآن"
                            : "Call Now"}
                    </span>
                </a>
            </div>

            {/* Breadcrumb Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <nav className="flex items-center gap-2 text-sm text-base-content/60 mb-2">
                    <Link
                        href="/"
                        className="hover:text-[rgb(223,126,60)] transition-colors"
                    >
                        {language === "fr"
                            ? "Accueil"
                            : language === "ar"
                            ? "الرئيسية"
                            : "Home"}
                    </Link>
                    <span className="text-base-content/40">›</span>
                    <Link
                        href="/products"
                        className="hover:text-[rgb(223,126,60)] transition-colors"
                    >
                        {language === "fr"
                            ? "Produits"
                            : language === "ar"
                            ? "المنتجات"
                            : "Products"}
                    </Link>
                    <span className="text-base-content/40">›</span>
                    <span className="text-[rgb(223,126,60)] font-medium">
                        {data.shortTitle}
                    </span>
                </nav>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* ================= ENHANCED HERO SECTION ================= */}
                <div className="relative mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-base-200 to-base-300 p-8 md:p-12">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `radial-gradient(${
                                    isRTL ? "circle at left" : "circle at right"
                                } 30%, #df7e3c 2px, transparent 2px)`,
                                backgroundSize: "40px 40px",
                            }}
                        ></div>
                    </div>

                    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[rgb(223,126,60)]/10 text-[rgb(223,126,60)] text-sm font-semibold mb-6">
                                <div className="w-2 h-2 rounded-full bg-[rgb(223,126,60)] animate-pulse"></div>
                                {t.premiumProduct}
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
                                {data.shortTitle}
                                <span className="block text-2xl sm:text-3xl text-[rgb(223,126,60)] mt-2">
                                    {data.longTitle}
                                </span>
                            </h1>

                            <p className="text-xl text-base-content/70 mb-8 leading-relaxed">
                                {data.heroTitle}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => router.push("/devis")}
                                    className="inline-flex items-center gap-3 rounded-xl px-8 py-4 font-bold text-white bg-gradient-to-r from-[rgb(223,126,60)] to-orange-600 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                    {t.requestCustomizedQuote}
                                </button>

                                <button
                                    onClick={() =>
                                        setActiveTab("specifications")
                                    }
                                    className="inline-flex items-center gap-3 rounded-xl px-8 py-4 font-bold border-2 border-[rgb(223,126,60)] text-[rgb(223,126,60)] hover:bg-[rgb(223,126,60)]/5 transition-all duration-300"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        />
                                    </svg>
                                    {t.keySpecifications}
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={mainImage}
                                    onError={(e) => {
                                        e.currentTarget.src =
                                            "/couvertureIMG.jpg";
                                    }}
                                    alt={data.longTitle}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            </div>
                            {/* Floating specs badge */}
                            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-base-300 rounded-xl p-4 shadow-2xl border border-base-300">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-[rgb(223,126,60)]">
                                        99.9%
                                    </div>
                                    <div className="text-xs text-base-content/60">
                                        Purity
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= TABBED CONTENT ================= */}
                <div className="mb-16">
                    <div className="flex flex-wrap gap-2 mb-8 border-b border-base-300">
                        {[
                            "overview",
                            "specifications",
                            "applications",
                            "benefits",
                        ].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-3 font-medium rounded-t-lg transition-all duration-300 ${
                                    activeTab === tab
                                        ? "bg-white dark:bg-base-300 border-t border-x border-base-300 text-[rgb(223,126,60)]"
                                        : "text-base-content/60 hover:text-[rgb(223,126,60)]"
                                }`}
                            >
                                {tab === "overview" && t.productOverview}
                                {tab === "specifications" &&
                                    t.keySpecifications}
                                {tab === "applications" &&
                                    t.industrialApplications}
                                {tab === "benefits" && t.keyBenefits}
                            </button>
                        ))}
                    </div>

                    <div className="transition-all duration-300">
                        {/* Overview Tab */}
                        {activeTab === "overview" && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-[rgb(223,126,60)]/10">
                                                <svg
                                                    className="w-6 h-6 text-[rgb(223,126,60)]"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </div>
                                            {t.productOverview}
                                        </h3>
                                        <p className="text-lg leading-relaxed text-base-content/80">
                                            {data.intro}
                                        </p>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-gradient-to-br from-[rgb(223,126,60)]/5 to-transparent border border-[rgb(223,126,60)]/20">
                                        <h4 className="text-xl font-bold mb-4">
                                            {t.ourValueProposition}
                                        </h4>
                                        <p className="text-base-content/80 leading-relaxed">
                                            {data.valueProposition}
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <div className="sticky top-24">
                                        <div className="p-6 rounded-2xl bg-base-200/60 border border-base-300">
                                            <h3 className="font-bold text-xl mb-6">
                                                {t.samyBusinessAdvantage}
                                            </h3>
                                            <p className="text-base-content/70 mb-6">
                                                {data.samyAdvantage}
                                            </p>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="text-center p-4 rounded-lg bg-base-300/50">
                                                    <div className="text-2xl font-bold text-[rgb(223,126,60)]">
                                                        15+
                                                    </div>
                                                    <div className="text-sm text-base-content/60">
                                                        {t.yearsOfExpertise}
                                                    </div>
                                                </div>
                                                <div className="text-center p-4 rounded-lg bg-base-300/50">
                                                    <div className="text-2xl font-bold text-[rgb(223,126,60)]">
                                                        114
                                                    </div>
                                                    <div className="text-sm text-base-content/60">
                                                        {t.satisfiedClients}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Specifications Tab */}
                        {activeTab === "specifications" && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                <div>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: data.specsHtml,
                                        }}
                                    />
                                </div>
                                <div>
                                    <div className="p-6 rounded-2xl bg-gradient-to-br from-base-200 to-base-300 border border-base-300">
                                        <h3 className="font-bold text-xl mb-6">
                                            {language === "fr"
                                                ? "Certifications"
                                                : language === "ar"
                                                ? "الشهادات"
                                                : "Certifications"}
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-base-200">
                                                <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30">
                                                    <svg
                                                        className="w-5 h-5 text-green-600"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div className="font-semibold">
                                                        LME Certified
                                                    </div>
                                                    <div className="text-sm text-base-content/60">
                                                        London Metal Exchange
                                                        Standards
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-base-200">
                                                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
                                                    <svg
                                                        className="w-5 h-5 text-blue-600"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div className="font-semibold">
                                                        ISO 9001:2015
                                                    </div>
                                                    <div className="text-sm text-base-content/60">
                                                        Quality Management
                                                        System
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Applications Tab */}
                        {activeTab === "applications" && (
                            <div className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {data.applications
                                        .slice(
                                            0,
                                            showMoreApplications
                                                ? data.applications.length
                                                : 6
                                        )
                                        .map((app, index) => (
                                            <div
                                                key={index}
                                                className="group p-6 rounded-xl bg-gradient-to-br from-base-200 to-base-300 border border-base-300 hover:border-[rgb(223,126,60)]/50 transition-all duration-300"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="p-3 rounded-full bg-[rgb(223,126,60)]/10 group-hover:scale-110 transition-transform duration-300">
                                                        <svg
                                                            className="w-6 h-6 text-[rgb(223,126,60)]"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold mb-2">
                                                            {app}
                                                        </h4>
                                                        <p className="text-sm text-base-content/60">
                                                            {language === "fr"
                                                                ? "Solution optimisée"
                                                                : language ===
                                                                  "ar"
                                                                ? "حل مُحسن"
                                                                : "Optimized solution"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                                {data.applications.length > 6 && (
                                    <div className="text-center">
                                        <button
                                            onClick={() =>
                                                setShowMoreApplications(
                                                    !showMoreApplications
                                                )
                                            }
                                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[rgb(223,126,60)] text-[rgb(223,126,60)] hover:bg-[rgb(223,126,60)]/5 transition-all duration-300"
                                        >
                                            {showMoreApplications
                                                ? language === "fr"
                                                    ? "Voir Moins"
                                                    : language === "ar"
                                                    ? "عرض أقل"
                                                    : "Show Less"
                                                : language === "fr"
                                                ? "Voir Plus d'Applications"
                                                : language === "ar"
                                                ? "عرض المزيد من التطبيقات"
                                                : "See More Applications"}
                                            <svg
                                                className={`w-4 h-4 transition-transform duration-300 ${
                                                    showMoreApplications
                                                        ? "rotate-180"
                                                        : ""
                                                }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Benefits Tab */}
                        {activeTab === "benefits" && (
                            <div className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {data.benefits
                                        .slice(
                                            0,
                                            showMoreBenefits
                                                ? data.benefits.length
                                                : 4
                                        )
                                        .map((benefit, index) => (
                                            <div
                                                key={index}
                                                className="p-6 rounded-xl bg-gradient-to-br from-base-200 to-base-300 border border-base-300 hover:shadow-xl transition-all duration-300"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[rgb(223,126,60)]/20 to-orange-400/20 flex items-center justify-center">
                                                        <span className="text-[rgb(223,126,60)] font-bold text-lg">
                                                            {index + 1}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold mb-2 text-lg">
                                                            {benefit}
                                                        </h4>
                                                        <p className="text-base-content/60">
                                                            {language === "fr"
                                                                ? "Amélioration significative des performances"
                                                                : language ===
                                                                  "ar"
                                                                ? "تحسن كبير في الأداء"
                                                                : "Significant performance improvement"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                                {data.benefits.length > 4 && (
                                    <div className="text-center">
                                        <button
                                            onClick={() =>
                                                setShowMoreBenefits(
                                                    !showMoreBenefits
                                                )
                                            }
                                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[rgb(223,126,60)] text-[rgb(223,126,60)] hover:bg-[rgb(223,126,60)]/5 transition-all duration-300"
                                        >
                                            {showMoreBenefits
                                                ? language === "fr"
                                                    ? "Voir Moins"
                                                    : language === "ar"
                                                    ? "عرض أقل"
                                                    : "Show Less"
                                                : language === "fr"
                                                ? "Voir Plus d'Avantages"
                                                : language === "ar"
                                                ? "عرض المزيد من المزايا"
                                                : "See More Benefits"}
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* ================= VISUAL COMPARISON SECTION ================= */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">
                            {language === "fr"
                                ? "Qualité Supérieure"
                                : language === "ar"
                                ? "جودة فائقة"
                                : "Superior Quality"}
                        </h2>
                        <p className="text-base-content/60 max-w-2xl mx-auto">
                            {language === "fr"
                                ? "Comparaison des standards de qualité"
                                : language === "ar"
                                ? "مقارنة معايير الجودة"
                                : "Quality standards comparison"}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="p-8 rounded-2xl bg-gradient-to-b from-base-200 to-base-300 text-center border border-base-300">
                            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-6">
                                <svg
                                    className="w-8 h-8 text-blue-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">
                                {language === "fr"
                                    ? "Standard Industriel"
                                    : language === "ar"
                                    ? "المعيار الصناعي"
                                    : "Industry Standard"}
                            </h3>
                            <div className="space-y-3 text-base-content/70">
                                <p>95-98% Purity</p>
                                <p>Basic Certification</p>
                                <p>Limited Traceability</p>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl bg-gradient-to-b from-[rgb(223,126,60)]/10 to-base-300 text-center border-2 border-[rgb(223,126,60)] relative scale-105 z-10">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[rgb(223,126,60)] text-white text-sm font-bold">
                                {language === "fr"
                                    ? "RECOMMANDÉ"
                                    : language === "ar"
                                    ? "موصى به"
                                    : "RECOMMENDED"}
                            </div>
                            <div className="w-16 h-16 rounded-full bg-[rgb(223,126,60)]/20 flex items-center justify-center mx-auto mb-6">
                                <svg
                                    className="w-8 h-8 text-[rgb(223,126,60)]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">
                                {data.shortTitle}
                            </h3>
                            <div className="space-y-3 text-base-content/70">
                                <p className="font-semibold text-[rgb(223,126,60)]">
                                    99.9%+ Purity
                                </p>
                                <p>LME & ISO Certified</p>
                                <p>Full Traceability</p>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl bg-gradient-to-b from-base-200 to-base-300 text-center border border-base-300">
                            <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-6">
                                <svg
                                    className="w-8 h-8 text-purple-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">
                                {language === "fr"
                                    ? "Premium"
                                    : language === "ar"
                                    ? "ممتاز"
                                    : "Premium"}
                            </h3>
                            <div className="space-y-3 text-base-content/70">
                                <p>99.99% Purity</p>
                                <p>Multiple Certifications</p>
                                <p>Advanced Analytics</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= ENHANCED CTA SECTION ================= */}
                <div ref={contactFormRef} className="mt-20">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-base-300 to-base-200 p-8 md:p-12">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-[rgb(223,126,60)]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(223,126,60)]/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

                        <div className="relative text-center">
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">
                                {t.readyToOptimize}
                            </h3>

                            <p className="text-xl text-base-content/70 mb-10 max-w-2xl mx-auto">
                                {t.expertTeam}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <button
                                    onClick={() => router.push("/devis")}
                                    className="inline-flex items-center justify-center gap-4 rounded-xl px-10 py-5 font-bold text-white bg-gradient-to-r from-[rgb(223,126,60)] to-orange-600 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-lg"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                    {t.requestCustomizedQuote}
                                </button>

                                <div className="flex items-center gap-4">
                                    <div className="hidden sm:block h-12 w-px bg-base-content/20"></div>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center gap-4 rounded-xl px-10 py-5 font-bold border-2 border-[rgb(223,126,60)] text-[rgb(223,126,60)] hover:bg-[rgb(223,126,60)]/5 transition-all duration-300 text-lg"
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                            />
                                        </svg>
                                        {t.talkToExpert}
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-10 pt-8 border-t border-base-content/10">
                                <div className="flex flex-wrap justify-center gap-8">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-full bg-green-500/10">
                                            <svg
                                                className="w-5 h-5 text-green-500"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <span className="text-base-content/70">
                                            {t.responseWithin
                                                .split("•")[0]
                                                .trim()}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-full bg-blue-500/10">
                                            <svg
                                                className="w-5 h-5 text-blue-500"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <span className="text-base-content/70">
                                            {t.responseWithin
                                                .split("•")[1]
                                                .trim()}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-full bg-purple-500/10">
                                            <svg
                                                className="w-5 h-5 text-purple-500"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <span className="text-base-content/70">
                                            {t.responseWithin
                                                .split("•")[2]
                                                .trim()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
