"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import Link from "next/link";
import { useEffect } from "react";

export default function ArticlePage({
    productSlug,
    productName = "Article",
    category,
    imageSrc = null,
    themeColor = null,
}) {
    const slug = productSlug;

    const { language } = useLanguage();
    const { theme } = useTheme();
    const isRTL = language === "ar";
    const router = useRouter();

    const [activeTab, setActiveTab] = useState("overview");
    const [showMoreBenefits, setShowMoreBenefits] = useState(false);
    const [showMoreApplications, setShowMoreApplications] = useState(false);

    const contactFormRef = useRef(null);
    useEffect(() => {
        console.log("Slug from URL:", slug);
        console.log("Available product keys:", Object.keys(productData));
        console.log("Is zinc-aluminé in data?", "zinc-aluminé" in productData);
    }, [slug]);

    // Define color schemes for light and dark modes
    const colorSchemes = {
        light: {
            background: "#ffffff",
            cardBackground: "#f8f9fa",
            textPrimary: "#1a1a1a",
            textSecondary: "#666666",
            gradientStart: "#2f86fd", // blue
            gradientEnd: "#4cf2ff", // cyan
            primary: "#2f86fd",
            blue: "#192b5e", // rgb(25,43,94)
            white: "#ffffff",
            lightGray: "#f5f5f5",
            mediumGray: "#b4b4b4", // rgb(180,180,180)
            border: "#e0e0e0",
        },
        dark: {
            background: "#0a0a0a",
            cardBackground: "#1a1a1a",
            textPrimary: "#ffffff",
            textSecondary: "#aaaaaa",
            gradientStart: "#4cf2ff", // cyan
            gradientEnd: "#2f86fd", // blue
            primary: "#4cf2ff",
            blue: "#ffffff", // Light text in dark mode
            white: "#1a1a1a",
            lightGray: "#2a2a2a",
            mediumGray: "#666666", // Darker gray for dark mode
            border: "#333333",
        },
    };

    // Set currentColors based on theme
    const currentColors = colorSchemes[theme] || colorSchemes.light;

    // Helper function to update specs HTML colors based on theme
    const getSpecsHtmlWithTheme = (html) => {
        if (!html) return "";

        // Replace color: rgb(25,43,94) with theme-based blue color
        const htmlWithBlue = html.replace(
            /style="color: rgb\(25,43,94\);"/g,
            `style="color: ${currentColors.blue};"`
        );

        // Replace color: white with theme-based textPrimary color
        const htmlWithWhite = htmlWithBlue.replace(
            /style="color: white;"/g,
            `style="color: ${currentColors.textPrimary};"`
        );

        // Replace background colors for dark mode
        const htmlWithBackground = htmlWithWhite.replace(
            /bg-gray-100 dark:bg-gray-800/g,
            theme === "dark" ? "bg-gray-800" : "bg-gray-100"
        );

        return htmlWithBackground;
    };

    // Complete product data based on PDFs with professional marketing content
    const productData = {
        // ===== ZAMAK =====
        zamak: {
            image: "/finals/zamak.png",
            imageTableau: "/tableaux/tableau_zamak.jpeg",
            fr: {
                shortTitle: "Zamak 5",
                longTitle: "Alliage Zinc-Aluminium de Haute Précision",
                heroTitle:
                    "Excellence Métallurgique pour l'Industrie 4.0 Algérienne",
                intro: "Avec plus de 15 ans d'expertise dans l'import-export de métaux non-ferreux, Samy Business fournit du Zamak 5 certifié LME, l'alliage idéal pour le moulage sous pression de précision. Notre partenariat avec des fonderies européennes leaders garantit une qualité constante et des propriétés mécaniques supérieures pour vos projets les plus exigeants.",
                valueProposition:
                    "Notre Zamak 5 réduit vos coûts de production jusqu'à 35% grâce à une fluidité exceptionnelle qui minimise les rebuts. Chaque lot est tracé depuis la fonderie européenne jusqu'à votre usine, avec des certificats d'analyse garantissant conformité LME et résistance mécanique optimale.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Composition Principale</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">Zn 95.5% | Al 4% | Cu 0.25%</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Norme EN 12844</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Résistance Mécanique</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">320-340 MPa</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Traction</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Densité</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">6.7 g/cm³</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Poids Léger</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Forme</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">Lingots 25kg</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Emballage Industriel</p>
                        </div>
                    </div>
                </div>`,
                applications: [
                    {
                        title: "Automobile",
                        description:
                            "Pièces de carrosserie, poignées, éléments décoratifs",
                        icon: "🚗",
                    },
                    {
                        title: "Quincaillerie",
                        description:
                            "Fermetures, serrures, accessoires de bâtiment",
                        icon: "🔩",
                    },
                    {
                        title: "Électronique",
                        description:
                            "Boîtiers, connecteurs, dissipateurs thermiques",
                        icon: "🔌",
                    },
                    {
                        title: "Sanitaire",
                        description: "Robinetterie, accessoires salle de bain",
                        icon: "🚿",
                    },
                ],
                benefits: [
                    "Fluidité exceptionnelle pour moulage complexe",
                    "Finition de surface supérieure sans usinage",
                    "Résistance à la corrosion améliorée",
                    "Recyclabilité totale (économie circulaire)",
                ],
                samyAdvantage:
                    "Notre Zamak 5 provient exclusivement de fonderies certifiées ISO 9001 et auditées LME. Samy Business assure non seulement la fourniture, mais aussi un support technique avec nos ingénieurs métallurgistes pour optimiser vos paramètres de moulage.",
                marketData: {
                    growth: "Croissance de 22% dans le secteur automobile algérien",
                    clients: "Approvisionnement garanti avec stock tampon",
                    supply: "Fonderies allemandes et italiennes premium",
                },
            },
            en: {
                shortTitle: "Zamak 5",
                longTitle: "Zinc-Aluminium High Precision Alloy",
                heroTitle: "Metallurgical Excellence for Algerian Industry 4.0",
                intro: "With over 15 years of expertise in non-ferrous metals import-export, Samy Business supplies LME-certified Zamak 5, the ideal alloy for precision die casting. Our partnership with leading European foundries guarantees consistent quality and superior mechanical properties for your most demanding projects.",
                valueProposition:
                    "Our Zamak 5 reduces your production costs by up to 35% thanks to exceptional fluidity that minimizes rejects. Each batch is traceable from European foundry to your factory, with analysis certificates guaranteeing LME compliance and optimal mechanical strength.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Main Composition</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">Zn 95.5% | Al 4% | Cu 0.25%</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">EN 12844 Standard</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Mechanical Strength</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">320-340 MPa</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Tensile</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Density</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">6.7 g/cm³</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Light Weight</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Form</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">25kg Ingots</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Industrial Packaging</p>
                        </div>
                    </div>
                </div>`,
                applications: [
                    {
                        title: "Automotive",
                        description: "Body parts, handles, decorative elements",
                        icon: "🚗",
                    },
                    {
                        title: "Hardware",
                        description: "Closures, locks, building accessories",
                        icon: "🔩",
                    },
                    {
                        title: "Electronics",
                        description: "Housings, connectors, heat sinks",
                        icon: "🔌",
                    },
                    {
                        title: "Sanitary",
                        description: "Faucets, bathroom accessories",
                        icon: "🚿",
                    },
                ],
                benefits: [
                    "Exceptional fluidity for complex molding",
                    "Superior surface finish without machining",
                    "Enhanced corrosion resistance",
                    "Total recyclability (circular economy)",
                ],
                samyAdvantage:
                    "Our Zamak 5 comes exclusively from ISO 9001 certified and LME-audited foundries. Samy Business ensures not only supply, but also technical support with our metallurgical engineers to optimize your molding parameters.",
                marketData: {
                    growth: "22% growth in Algerian automotive sector",
                    clients: "Guaranteed supply with buffer stock",
                    supply: "Premium German and Italian foundries",
                },
            },
            ar: {
                shortTitle: "زاماك 5",
                longTitle: "سبيكة زنك-ألومنيوم عالية الدقة",
                heroTitle: "تميز معدني للصناعة الجزائرية 4.0",
                intro: "بخبرة تزيد عن 15 سنة في استيراد وتصدير المعادن غير الحديدية، توفر Samy Business زاماك 5 معتمد LME، السبيكة المثالية للصب الدقيق تحت الضغط. شراكتنا مع مصاهر أوروبية رائدة تضمن جودة ثابتة وخصائص ميكانيكية فائقة لمشاريعك الأكثر تطلبًا.",
                valueProposition:
                    "زاماك 5 الخاص بنا يقلل تكاليف إنتاجك بنسبة تصل إلى 35% بفضل سيولة استثنائية تقلل النفايات. كل دفعة قابلة للتتبع من المسبك الأوروبي إلى مصنعك، مع شهادات تحليل تضمن مطابقة LME ومتانة ميكانيكية مثالية.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">التركيبة الرئيسية</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">زنك 95.5% | ألومنيوم 4% | نحاس 0.25%</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">معيار EN 12844</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">المتانة الميكانيكية</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">320-340 ميجا باسكال</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">شد</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">الكثافة</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">6.7 جم/سم³</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">وزن خفيف</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">الشكل</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">قوالب 25 كجم</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">تغليف صناعي</p>
                        </div>
                    </div>
                </div>`,
                applications: [
                    {
                        title: "سيارات",
                        description: "أجزاء هيكل، مقابض، عناصر زخرفية",
                        icon: "🚗",
                    },
                    {
                        title: "أجهزة",
                        description: "أقفال، مغاليق، ملحقات بناء",
                        icon: "🔩",
                    },
                    {
                        title: "إلكترونيات",
                        description: "علب، موصلات، مشتتات حرارية",
                        icon: "🔌",
                    },
                    {
                        title: "صحيات",
                        description: "حنفيات، ملحقات حمام",
                        icon: "🚿",
                    },
                ],
                benefits: [
                    "سيولة استثنائية للصب المعقد",
                    "تشطيب سطح فائق بدون تشغيل",
                    "مقاومة تآكل محسنة",
                    "قابلية إعادة تدوير كاملة (اقتصاد دائري)",
                ],
                samyAdvantage:
                    "زاماك 5 الخاص بنا يأتي حصريًا من مصاهر معتمدة ISO 9001 ومراجعة LME. تضمن Samy Business ليس فقط التوريد، بل أيضًا دعمًا فنيًا مع مهندسينا المعدنيين لتحسين معاملات صبك.",
                marketData: {
                    growth: "نمو 22% في قطاع السيارات الجزائري",
                    clients: "تزويد مضمون مع مخزون احتياطي",
                    supply: "مصاهر ألمانية وإيطالية متميزة",
                },
            },
        },

        // ===== PLOMB =====
        plomb: {
            image: "/finals/plomb.png",
            imageTableau: "/tableaux/tableau_plomb.jpeg",
            fr: {
                shortTitle: "Plomb Doux",
                longTitle:
                    "Plomb Pur 99.99% - Performance Industrielle Certifiée",
                heroTitle: "Plomb de Haute Pureté pour l'Industrie Algérienne",
                intro: "Samy Business commercialise du plomb doux pur à 99.99%, certifié LME Grade A, essentiel pour les industries de batteries, protection radiologique et construction. Notre chaîne d'approvisionnement sécurisée garantit une pureté constante et une traçabilité complète.",
                valueProposition:
                    "Notre plomb 99.99% offre une malléabilité exceptionnelle et une résistance chimique supérieure, réduisant vos coûts de transformation de 25% tout en garantissant une conformité totale aux normes industrielles internationales.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Pureté</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">99.99% Pb</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">LME Grade A</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Densité</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">11.34 g/cm³</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Haute densité</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Forme</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">Lingots 25kg</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Plaques standard</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Point de Fusion</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">327.5°C</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Basse température</p>
                        </div>
                    </div>
                </div>`,
                applications: [
                    {
                        title: "Batteries",
                        description:
                            "Plaques pour batteries automobiles et industrielles",
                        icon: "🔋",
                    },
                    {
                        title: "Protection Radiologique",
                        description: "Panneaux anti-rayons X et gamma",
                        icon: "🛡️",
                    },
                    {
                        title: "Construction",
                        description: "Étanchéité toitures et fondations",
                        icon: "🏗️",
                    },
                    {
                        title: "Industrie Chimique",
                        description: "Réservoirs et revêtements résistants",
                        icon: "⚗️",
                    },
                ],
                benefits: [
                    "Excellente malléabilité et ductilité",
                    "Résistance exceptionnelle à la corrosion",
                    "Absorption optimale des radiations",
                    "Recyclabilité infinie sans perte de qualité",
                ],
                samyAdvantage:
                    "Notre plomb est tracé depuis la mine européenne jusqu'à votre site, avec certificats LME à chaque étape. Samy Business dispose d'un stock stratégique pour garantir une livraison sous 72h à travers tout le territoire algérien.",
                marketData: {
                    growth: "Demande croissante de 18% dans le secteur des batteries",
                    clients: "Stock permanent 500T pour livraison immédiate",
                    supply: "Mines européennes certifiées ISO 14001",
                },
            },
            en: {
                shortTitle: "Soft Lead",
                longTitle:
                    "99.99% Pure Lead - Certified Industrial Performance",
                heroTitle: "High Purity Lead for Algerian Industry",
                intro: "Samy Business markets 99.99% pure soft lead, LME Grade A certified, essential for battery industries, radiological protection and construction. Our secured supply chain guarantees consistent purity and complete traceability.",
                valueProposition:
                    "Our 99.99% lead offers exceptional malleability and superior chemical resistance, reducing your processing costs by 25% while guaranteeing total compliance with international industrial standards.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Purity</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">99.99% Pb</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">LME Grade A</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Density</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">11.34 g/cm³</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">High density</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Form</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">25kg Ingots</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Standard plates</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Melting Point</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">327.5°C</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Low temperature</p>
                        </div>
                    </div>
                </div>`,
                applications: [
                    {
                        title: "Batteries",
                        description:
                            "Plates for automotive and industrial batteries",
                        icon: "🔋",
                    },
                    {
                        title: "Radiological Protection",
                        description: "Anti-X-ray and gamma panels",
                        icon: "🛡️",
                    },
                    {
                        title: "Construction",
                        description: "Roof and foundation waterproofing",
                        icon: "🏗️",
                    },
                    {
                        title: "Chemical Industry",
                        description: "Resistant tanks and coatings",
                        icon: "⚗️",
                    },
                ],
                benefits: [
                    "Excellent malleability and ductility",
                    "Exceptional corrosion resistance",
                    "Optimal radiation absorption",
                    "Infinite recyclability without quality loss",
                ],
                samyAdvantage:
                    "Our lead is traceable from European mine to your site, with LME certificates at each stage. Samy Business maintains strategic stock to guarantee delivery within 72h across all Algerian territory.",
                marketData: {
                    growth: "Growing 18% demand in battery sector",
                    clients: "Permanent 500T stock for immediate delivery",
                    supply: "ISO 14001 certified European mines",
                },
            },
            ar: {
                shortTitle: "رصاص ناعم",
                longTitle: "رصاص نقي 99.99% - أداء صناعي معتمد",
                heroTitle: "رصاص عالي النقاوة للصناعة الجزائرية",
                intro: "تتاجر Samy Business برصاص ناعم نقي 99.99%، معتمد LME درجة A، أساسي لصناعات البطاريات، الحماية الإشعاعية والبناء. سلسلة توريدنا المؤمنة تضمن نقاوة ثابتة وإمكانية تتبع كاملة.",
                valueProposition:
                    "رصاصنا 99.99% يوفر ليونة استثنائية ومقاومة كيميائية فائقة، يقلل تكاليف معالجتك بنسبة 25% مع ضمان مطابقة تامة للمعايير الصناعية الدولية.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">النقاوة</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">99.99% رصاص</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">LME درجة A</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">الكثافة</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">11.34 جم/سم³</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">كثافة عالية</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">الشكل</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">قوالب 25 كجم</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">ألواح قياسية</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">نقطة الانصهار</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">327.5°م</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">درجة حرارة منخفضة</p>
                        </div>
                    </div>
                </div>`,
                applications: [
                    {
                        title: "بطاريات",
                        description: "ألواح لبطاريات سيارات وصناعية",
                        icon: "🔋",
                    },
                    {
                        title: "حماية إشعاعية",
                        description: "ألواح مضادة لأشعة X وغمّا",
                        icon: "🛡️",
                    },
                    {
                        title: "بناء",
                        description: "عزل أسقف وأساسات",
                        icon: "🏗️",
                    },
                    {
                        title: "صناعة كيميائية",
                        description: "خزانات وطلاءات مقاومة",
                        icon: "⚗️",
                    },
                ],
                benefits: [
                    "ليونة وطراوة ممتازة",
                    "مقاومة تآكل استثنائية",
                    "امتصاص إشعاع مثالي",
                    "قابلية إعادة تدوير لانهائية بدون فقدان جودة",
                ],
                samyAdvantage:
                    "رصاصنا قابل للتتبع من المنجم الأوروبي إلى موقعك، بشهادات LME في كل مرحلة. تمتلك Samy Business مخزونًا استراتيجيًا لضمان التسليم خلال 72 ساعة عبر كل التراب الجزائري.",
                marketData: {
                    growth: "طلب متزايد بنسبة 18% في قطاع البطاريات",
                    clients: "مخزون دائم 500 طن للتسليم الفوري",
                    supply: "مناجم أوروبية معتمدة ISO 14001",
                },
            },
        },

        // ===== ALUMINIUM =====
        aluminium: {
            image: "/finals/aluminum.png",
            imageTableau: "/tableaux/tableau_aluminium.jpeg",
            fr: {
                shortTitle: "Aluminium",
                longTitle: "Aluminium en Lingots - Léger, Résistant, Durable",
                heroTitle:
                    "Solution Aluminium Premium pour l'Industrie Algérienne",
                intro: "Samy Business fournit de l'aluminium en lingots certifié LME, métal stratégique pour la transition vers des industries plus légères et durables. Nos alliages répondent aux exigences des secteurs aéronautique, automobile et construction.",
                valueProposition:
                    "Notre aluminium réduit le poids de vos structures jusqu'à 60% tout en maintenant une résistance mécanique exceptionnelle. Chaque lot est analysé pour garantir des propriétés constantes et une recyclabilité totale.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Pureté</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">99.7% Al min</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">LME Primary</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Densité</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">2.7 g/cm³</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Poids Léger</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Conductivité</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">37 MS/m</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Électrique/Thermique</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Forme</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">Lingots 25kg</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">T-Bar standard</p>
                        </div>
                    </div>
                </div>`,
                applications: [
                    {
                        title: "Construction",
                        description: "Façades, structures légères, fenêtres",
                        icon: "🏢",
                    },
                    {
                        title: "Transport",
                        description:
                            "Pièces automobiles, aéronautiques, ferroviaires",
                        icon: "✈️",
                    },
                    {
                        title: "Emballage",
                        description:
                            "Canettes, feuilles, emballages alimentaires",
                        icon: "📦",
                    },
                    {
                        title: "Énergie",
                        description:
                            "Câbles électriques, dissipateurs, panneaux solaires",
                        icon: "⚡",
                    },
                ],
                benefits: [
                    "Rapport résistance/poids exceptionnel",
                    "Résistance naturelle à la corrosion",
                    "Conductivité thermique et électrique supérieure",
                    "Recyclable à l'infini sans perte de propriétés",
                ],
                samyAdvantage:
                    "Notre aluminium provient de producteurs européens utilisant l'énergie hydroélectrique, réduisant son empreinte carbone de 75%. Samy Business offre une analyse spectrométrique gratuite pour chaque commande supérieure à 5 tonnes.",
                marketData: {
                    growth: "Marché en croissance de 15% annuellement",
                    clients: "Livraison J+3 sur tout le territoire",
                    supply: "Producteurs nordiques certifiés ASI",
                },
            },
            en: {
                shortTitle: "Aluminium",
                longTitle: "Aluminium Ingots - Light, Strong, Durable",
                heroTitle: "Premium Aluminium Solution for Algerian Industry",
                intro: "Samy Business supplies LME-certified aluminium ingots, strategic metal for the transition to lighter and more sustainable industries. Our alloys meet the requirements of aerospace, automotive and construction sectors.",
                valueProposition:
                    "Our aluminium reduces your structures' weight by up to 60% while maintaining exceptional mechanical strength. Each batch is analyzed to guarantee consistent properties and total recyclability.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Purity</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">99.7% Al min</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">LME Primary</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Density</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">2.7 g/cm³</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Light Weight</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Conductivity</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">37 MS/m</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Electrical/Thermal</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Form</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">25kg Ingots</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">T-Bar standard</p>
                        </div>
                    </div>
                </div>`,
                applications: [
                    {
                        title: "Construction",
                        description: "Facades, light structures, windows",
                        icon: "🏢",
                    },
                    {
                        title: "Transport",
                        description: "Automotive, aerospace, railway parts",
                        icon: "✈️",
                    },
                    {
                        title: "Packaging",
                        description: "Cans, foils, food packaging",
                        icon: "📦",
                    },
                    {
                        title: "Energy",
                        description:
                            "Electrical cables, heat sinks, solar panels",
                        icon: "⚡",
                    },
                ],
                benefits: [
                    "Exceptional strength-to-weight ratio",
                    "Natural corrosion resistance",
                    "Superior thermal and electrical conductivity",
                    "Infinitely recyclable without property loss",
                ],
                samyAdvantage:
                    "Our aluminium comes from European producers using hydroelectric power, reducing its carbon footprint by 75%. Samy Business offers free spectrometric analysis for each order above 5 tons.",
                marketData: {
                    growth: "Market growing 15% annually",
                    clients: "Delivery D+3 across all territory",
                    supply: "ASI certified Nordic producers",
                },
            },
            ar: {
                shortTitle: "ألومنيوم",
                longTitle: "ألومنيوم في قوالب - خفيف، متين، مستدام",
                heroTitle: "حل ألومنيوم متميز للصناعة الجزائرية",
                intro: "توفر Samy Business قوالب ألومنيوم معتمدة LME، معدن استراتيجي للانتقال نحو صناعات أخف وزناً وأكثر استدامة. سبائكنا تلبي متطلبات قطاعات الطيران، السيارات والبناء.",
                valueProposition:
                    "ألومنيومنا يقلل وزن هياكلك بنسبة تصل إلى 60% مع الحفاظ على متانة ميكانيكية استثنائية. كل دفعة تحلل لضمان خصائص ثابتة وقابلية إعادة تدوير كاملة.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">النقاوة</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">99.7% ألومنيوم كحد أدنى</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">LME ابتدائي</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">الكثافة</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">2.7 جم/سم³</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">وزن خفيف</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">التوصيلية</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">37 ميجا سيمنز/م</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">كهربائية/حرارية</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">الشكل</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">قوالب 25 كجم</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">T-Bar قياسي</p>
                        </div>
                    </div>
                </div>`,
                applications: [
                    {
                        title: "بناء",
                        description: "واجهات، هياكل خفيفة، نوافذ",
                        icon: "🏢",
                    },
                    {
                        title: "نقل",
                        description: "أجزاء سيارات، طيران، سكك حديدية",
                        icon: "✈️",
                    },
                    {
                        title: "تغليف",
                        description: "علب، رقائق، تغليف غذائي",
                        icon: "📦",
                    },
                    {
                        title: "طاقة",
                        description:
                            "كابلات كهربائية، مشتتات حرارية، ألواح شمسية",
                        icon: "⚡",
                    },
                ],
                benefits: [
                    "نسبة متانة/وزن استثنائية",
                    "مقاومة تآكل طبيعية",
                    "توصيل حراري وكهربائي فائق",
                    "قابل لإعادة التدوير لانهائيًا دون فقدان خصائص",
                ],
                samyAdvantage:
                    "ألومنيومنا يأتي من منتجين أوروبيين يستخدمون الطاقة الكهرومائية، مما يقلل بصمته الكربونية بنسبة 75%. تقدم Samy Business تحليلًا طيفيًا مجانيًا لكل طلب يفوق 5 أطنان.",
                marketData: {
                    growth: "سوق ينمو بنسبة 15% سنويًا",
                    clients: "تسليم خلال 3 أيام عبر كل التراب",
                    supply: "منتجون إسكندنافيون معتمدون ASI",
                },
            },
        },

        // ===== CUIVRE =====
        cuivre: {
            image: "/finals/cuivre.png",
            imageTableau: "/tableaux/tableau_cuivre.jpeg",
            fr: {
                shortTitle: "Cuivre",
                longTitle: "Cuivre Cathode Grade A - Conductivité Maximale",
                heroTitle:
                    "Cuivre Électrolytique Premium pour l'Électrification Algérienne",
                intro: "Samy Business importe du cuivre cathode Grade A certifié LME, métal essentiel pour l'infrastructure électrique, les énergies renouvelables et l'industrie 4.0. Notre cuivre garantit une conductivité minimale de 100% IACS.",
                valueProposition:
                    "Notre cuivre Grade A offre la conductivité électrique la plus élevée du marché, réduisant les pertes énergétiques de vos installations de 30%. Chaque cathode est inspectée visuellement et analysée spectrométriquement.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Pureté</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">99.99% Cu min</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">LME Grade A</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Conductivité</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">101% IACS</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Référence Internationale</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Forme</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">Cathodes 125kg</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Plaques Standard</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Résistance</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">210 MPa</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Traction</p>
                        </div>
                    </div>
                </div>`,
                applications: [
                    {
                        title: "Énergie",
                        description:
                            "Câbles haute tension, transformateurs, générateurs",
                        icon: "⚡",
                    },
                    {
                        title: "Construction",
                        description:
                            "Tuyauteries, toitures, éléments architecturaux",
                        icon: "🏗️",
                    },
                    {
                        title: "Électronique",
                        description:
                            "Circuits imprimés, composants, connecteurs",
                        icon: "💻",
                    },
                    {
                        title: "Renouvelables",
                        description:
                            "Panneaux solaires, éoliennes, infrastructures vertes",
                        icon: "🌱",
                    },
                ],
                benefits: [
                    "Conductivité électrique et thermique maximale",
                    "Résistance exceptionnelle à la corrosion",
                    "Propriétés antimicrobiennes naturelles",
                    "Recyclable à l'infini sans dégradation",
                ],
                samyAdvantage:
                    "Notre cuivre provient de raffineurs européens certifiés CDA 110. Samy Business offre une garantie de conductivité avec remboursement si inférieure à 100% IACS, et un support technique pour optimiser vos spécifications.",
                marketData: {
                    growth: "Demande multipliée par 3 dans le secteur solaire",
                    clients: "Stock de 200 tonnes disponibles immédiatement",
                    supply: "Raffineurs chiliens et européens premium",
                },
            },
            en: {
                shortTitle: "Copper",
                longTitle: "Copper Cathode Grade A - Maximum Conductivity",
                heroTitle:
                    "Premium Electrolytic Copper for Algerian Electrification",
                intro: "Samy Business imports LME-certified Grade A copper cathode, essential metal for electrical infrastructure, renewable energies and industry 4.0. Our copper guarantees minimum conductivity of 100% IACS.",
                valueProposition:
                    "Our Grade A copper offers the highest electrical conductivity on the market, reducing energy losses in your installations by 30%. Each cathode is visually inspected and spectrometrically analyzed.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Purity</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">99.99% Cu min</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">LME Grade A</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Conductivity</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">101% IACS</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">International Reference</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Form</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">125kg Cathodes</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Standard Plates</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Strength</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">210 MPa</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Tensile</p>
                        </div>
                    </div>
                </div>`,
                applications: [
                    {
                        title: "Energy",
                        description:
                            "High voltage cables, transformers, generators",
                        icon: "⚡",
                    },
                    {
                        title: "Construction",
                        description: "Piping, roofing, architectural elements",
                        icon: "🏗️",
                    },
                    {
                        title: "Electronics",
                        description: "Printed circuits, components, connectors",
                        icon: "💻",
                    },
                    {
                        title: "Renewables",
                        description:
                            "Solar panels, wind turbines, green infrastructure",
                        icon: "🌱",
                    },
                ],
                benefits: [
                    "Maximum electrical and thermal conductivity",
                    "Exceptional corrosion resistance",
                    "Natural antimicrobial properties",
                    "Infinitely recyclable without degradation",
                ],
                samyAdvantage:
                    "Our copper comes from European refiners certified CDA 110. Samy Business offers conductivity guarantee with refund if below 100% IACS, and technical support to optimize your specifications.",
                marketData: {
                    growth: "Demand multiplied by 3 in solar sector",
                    clients: "200 ton stock available immediately",
                    supply: "Premium Chilean and European refiners",
                },
            },
            ar: {
                shortTitle: "نحاس",
                longTitle: "نحاس مهبط درجة A - توصيلية قصوى",
                heroTitle: "نحاس كهربائي متميز للكهربة الجزائرية",
                intro: "تستورد Samy Business نحاس مهبط درجة A معتمد LME، معدن أساسي للبنية التحتية الكهربائية، الطاقات المتجددة والصناعة 4.0. نحاسنا يضمن توصيلية دنيا 100% IACS.",
                valueProposition:
                    "نحاسنا درجة A يوفر أعلى توصيلية كهربائية في السوق، يقلل خسائر الطاقة في منشآتك بنسبة 30%. كل مهبط يفحص بصريًا ويحلل طيفيًا.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">النقاوة</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">99.99% نحاس كحد أدنى</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">LME درجة A</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">التوصيلية</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">101% IACS</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">مرجع دولي</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">الشكل</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">مهبط 125 كجم</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">ألواح قياسية</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">المتانة</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">210 ميجا باسكال</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">شد</p>
                        </div>
                    </div>
                </div>`,
                applications: [
                    {
                        title: "طاقة",
                        description: "كابلات جهد عال، محولات، مولدات",
                        icon: "⚡",
                    },
                    {
                        title: "بناء",
                        description: "أنابيب، أسقف، عناصر معمارية",
                        icon: "🏗️",
                    },
                    {
                        title: "إلكترونيات",
                        description: "دوائر مطبوعة، مكونات، موصلات",
                        icon: "💻",
                    },
                    {
                        title: "متجددة",
                        description:
                            "ألواح شمسية، توربينات رياح، بنية تحتية خضراء",
                        icon: "🌱",
                    },
                ],
                benefits: [
                    "توصيلية كهربائية وحرارية قصوى",
                    "مقاومة تآكل استثنائية",
                    "خصائص مضادة للميكروبات طبيعية",
                    "قابل لإعادة التدوير لانهائيًا دون تدهور",
                ],
                samyAdvantage:
                    "نحاسنا يأتي من مصافي أوروبية معتمدة CDA 110. تقدم Samy Business ضمان توصيلية مع استرداد إذا كانت أقل من 100% IACS، ودعم فني لتحسين مواصفاتك.",
                marketData: {
                    growth: "طلب تضاعف 3 مرات في القطاع الشمسي",
                    clients: "مخزون 200 طن متاح فورًا",
                    supply: "مصافي تشيلية وأوروبية متميزة",
                },
            },
        },

        // ===== ZINC =====
        zinc: {
            image: "/finals/zinc_hg.png",
            imageTableau: "/tableaux/tableau_zinc.jpeg",
            fr: {
                shortTitle: "Zinc SHG",
                longTitle: "Zinc 99.995% - Excellence en Galvanisation",
                heroTitle: "Zinc Haute Pureté pour Protection Anticorrosion",
                intro: "Samy Business fournit du zinc SHG (Special High Grade) à 99.995% de pureté, standard LME, essentiel pour la galvanisation à chaud et la protection durable des structures en acier en Algérie. Chaque lot garantit une adhérence parfaite et une durée de vie prolongée.",
                valueProposition:
                    "Notre zinc 99.995% optimise vos processus de galvanisation avec une pureté constante, réduisant les défauts de surface de 40% et garantissant une protection anticorrosion pour plus de 50 ans en environnements agressifs.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Pureté</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">99.995% Zn min</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">LME SHG</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Densité</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">7.14 g/cm³</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Poids Standard</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Forme</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">Lingots 25kg</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Ingots Standard</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Point de Fusion</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">419.5°C</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Idéal galvanisation</p>
                        </div>
                    </div>
                </div>`,
                applications: [
                    {
                        title: "Construction",
                        description:
                            "Structures en acier, ponts, bâtiments industriels",
                        icon: "🌉",
                    },
                    {
                        title: "Automobile",
                        description:
                            "Carrosseries, pièces sous châssis, éléments",
                        icon: "🚘",
                    },
                    {
                        title: "Infrastructures",
                        description:
                            "Pylônes électriques, barrières autoroutières",
                        icon: "⚡",
                    },
                    {
                        title: "Marine",
                        description:
                            "Structures portuaires, équipements côtiers",
                        icon: "🚢",
                    },
                ],
                benefits: [
                    "Protection cathodique exceptionnelle",
                    "Durée de vie prolongée jusqu'à 100 ans",
                    "Adhérence parfaite sur acier",
                    "Recyclable sans limite ni perte d'efficacité",
                ],
                samyAdvantage:
                    "Notre zinc SHG est exclusivement produit par des fonderies certifiées ISO 14001 avec bilan carbone vérifié. Samy Business offre un audit gratuit de vos lignes de galvanisation pour optimiser consommation et qualité.",
                marketData: {
                    growth: "Secteur construction en croissance de 25%",
                    clients: "Capacité livraison 1000T/mois garantie",
                    supply: "Fonderies européennes leaders mondiaux",
                },
            },
            en: {
                shortTitle: "Zinc SHG",
                longTitle: "Zinc 99.995% - Galvanization Excellence",
                heroTitle: "High Purity Zinc for Anticorrosion Protection",
                intro: "Samy Business supplies SHG (Special High Grade) zinc at 99.995% purity, LME standard, essential for hot-dip galvanizing and durable protection of steel structures in Algeria. Each batch guarantees perfect adhesion and extended lifespan.",
                valueProposition:
                    "Our 99.995% zinc optimizes your galvanization processes with consistent purity, reducing surface defects by 40% and guaranteeing anticorrosion protection for over 50 years in aggressive environments.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Purity</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">99.995% Zn min</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">LME SHG</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Density</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">7.14 g/cm³</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Standard Weight</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Form</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">25kg Ingots</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Standard Ingots</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Melting Point</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">419.5°C</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Ideal galvanization</p>
                        </div>
                    </div>
                </div>`,
                applications: [
                    {
                        title: "Construction",
                        description:
                            "Steel structures, bridges, industrial buildings",
                        icon: "🌉",
                    },
                    {
                        title: "Automotive",
                        description: "Bodyworks, under-chassis parts, elements",
                        icon: "🚘",
                    },
                    {
                        title: "Infrastructure",
                        description: "Electrical pylons, highway barriers",
                        icon: "⚡",
                    },
                    {
                        title: "Marine",
                        description: "Port structures, coastal equipment",
                        icon: "🚢",
                    },
                ],
                benefits: [
                    "Exceptional cathodic protection",
                    "Extended lifespan up to 100 years",
                    "Perfect adhesion on steel",
                    "Recyclable without limit or efficiency loss",
                ],
                samyAdvantage:
                    "Our SHG zinc is exclusively produced by ISO 14001 certified foundries with verified carbon footprint. Samy Business offers free audit of your galvanization lines to optimize consumption and quality.",
                marketData: {
                    growth: "Construction sector growing 25%",
                    clients: "1000T/month delivery capacity guaranteed",
                    supply: "European foundries world leaders",
                },
            },
            ar: {
                shortTitle: "زنك SHG",
                longTitle: "زنك 99.995% - تميز في التغليف بالزنك",
                heroTitle: "زنك عالي النقاوة للحماية من التآكل",
                intro: "توفر Samy Business زنك SHG (درجة خاصة عالية) بنقاوة 99.995%، معيار LME، أساسي للتغليف بالزنك الساخن والحماية المستدامة للهياكل الفولاذية في الجزائر. كل دفعة تضمن التصاقًا مثاليًا وعمرًا ممتدًا.",
                valueProposition:
                    "زنكنا 99.995% يحسن عمليات تغليفك بالزنك بنقاوة ثابتة، يقلل عيوب السطح بنسبة 40% ويضمن حماية من التآكل لأكثر من 50 سنة في بيئات عدوانية.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">النقاوة</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">99.995% زنك كحد أدنى</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">LME SHG</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">الكثافة</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">7.14 جم/سم³</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">وزن قياسي</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">الشكل</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">قوالب 25 كجم</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">قوالب قياسية</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">نقطة الانصهار</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">419.5°م</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">مثالي للتغليف بالزنك</p>
                        </div>
                    </div>
                </div>`,
                applications: [
                    {
                        title: "بناء",
                        description: "هياكل فولاذية، جسور، مباني صناعية",
                        icon: "🌉",
                    },
                    {
                        title: "سيارات",
                        description: "هياكل، أجزاء تحت الهيكل، عناصر",
                        icon: "🚘",
                    },
                    {
                        title: "بنية تحتية",
                        description: "أبراج كهرباء، حواجز طرق سريعة",
                        icon: "⚡",
                    },
                    {
                        title: "بحري",
                        description: "هياكل موانئ، معدات ساحلية",
                        icon: "🚢",
                    },
                ],
                benefits: [
                    "حماية كاثودية استثنائية",
                    "عمر ممتد حتى 100 سنة",
                    "التصاق مثالي على الفولاذ",
                    "قابل لإعادة التدوير بدون حدود أو فقدان كفاءة",
                ],
                samyAdvantage:
                    "زنكنا SHG ينتج حصريًا بواسطة مصاهر معتمدة ISO 14001 مع بصمة كربونية موثقة. تقدم Samy Business تدقيقًا مجانيًا لخطوط التغليف بالزنك الخاصة بك لتحسين الاستهلاك والجودة.",
                marketData: {
                    growth: "قطاع البناء ينمو بنسبة 25%",
                    clients: "قدرة تسليم 1000 طن/شهر مضمونة",
                    supply: "مصاهر أوروبية قادة عالميون",
                },
            },
        },

        // ===== OXYDE DE ZINC =====
        "oxyde-de-zinc": {
            image: "/finals/oxyde_de_zinc.png",
            imageTableau: "/tableaux/tableau_oxyde_zinc.jpeg",
            fr: {
                shortTitle: "Oxyde de Zinc",
                longTitle: "Zinc Oxide 99.7% - Polyvalence Industrielle",
                heroTitle:
                    "Solution Complète en Oxyde de Zinc pour Divers Secteurs",
                intro: "Samy Business produit et commercialise de l'oxyde de zinc de haute pureté (99.7%), matière première essentielle pour les industries du caoutchouc, des cosmétiques, pharmaceutique et céramique. Notre usine utilise la méthode française indirecte pour une qualité supérieure.",
                valueProposition:
                    "Notre oxyde de zinc améliore la durabilité de vos produits jusqu'à 200% grâce à ses propriétés activatrices exceptionnelles. Particulièrement efficace dans les formulations de pneus et produits élastomères.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Pureté</p>
                            <p class="font-bold text-lg" style="color: white;">99.7% ZnO min</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Grade Industriel</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Surface Spécifique</p>
                            <p class="font-bold text-lg" style="color: white;">10-15 m²/g</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Haute Réactivité</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Forme</p>
                            <p class="font-bold text-lg" style="color:white;">Poudre Fine</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Sac 25kg</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Couleur</p>
                            <p class="font-bold text-lg" style="color: white;">Blanc Pur</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Indice Blanc élevé</p>
                        </div>
                    </div>
                </div>`,
                applications: [
                    {
                        title: "Caoutchouc",
                        description:
                            "Pneus, joints, bandes transporteuses, élastomères",
                        icon: "🛞",
                    },
                    {
                        title: "Cosmétiques",
                        description:
                            "Crèmes solaires, lotions, produits de soin",
                        icon: "🧴",
                    },
                    {
                        title: "Céramique",
                        description: "Émaux, glaçures, pigments",
                        icon: "🏺",
                    },
                    {
                        title: "Agriculture",
                        description: "Engrais, suppléments nutritionnels",
                        icon: "🌾",
                    },
                ],
                benefits: [
                    "Activateur exceptionnel pour vulcanisation",
                    "Propriétés antibactériennes naturelles",
                    "Haute opacité et pouvoir couvrant",
                    "Stabilité thermique excellente",
                ],
                samyAdvantage:
                    "Notre oxyde de zinc est produit localement avec contrôle qualité rigoureux, réduisant les délais de livraison de 60% et garantissant une disponibilité permanente. Support technique pour formulation inclus.",
                marketData: {
                    growth: "Marché en expansion de 18% annuellement",
                    clients: "Production locale = livraison sous 48h",
                    supply: "Production propre certifiée ISO 9001",
                },
            },
            en: {
                shortTitle: "Zinc Oxide",
                longTitle: "Zinc Oxide 99.7% - Industrial Versatility",
                heroTitle: "Complete Zinc Oxide Solution for Various Sectors",
                intro: "Samy Business produces and markets high purity zinc oxide (99.7%), essential raw material for rubber, cosmetics, pharmaceutical and ceramic industries. Our plant uses the French indirect method for superior quality.",
                valueProposition:
                    "Our zinc oxide improves your products' durability by up to 200% thanks to its exceptional activating properties. Particularly effective in tire and elastomer formulations.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Purity</p>
                            <p class="font-bold text-lg" style="color: white;">99.7% ZnO min</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Industrial Grade</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Specific Surface</p>
                            <p class="font-bold text-lg" style="color: white;">10-15 m²/g</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">High Reactivity</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Form</p>
                            <p class="font-bold text-lg" style="color:white;">Fine Powder</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">25kg Bag</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Color</p>
                            <p class="font-bold text-lg" style="color: white;">Pure White</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">High Whiteness Index</p>
                        </div>
                    </div>
                </div>`,
                applications: [
                    {
                        title: "Rubber",
                        description: "Tires, seals, conveyor belts, elastomers",
                        icon: "🛞",
                    },
                    {
                        title: "Cosmetics",
                        description: "Sunscreens, lotions, care products",
                        icon: "🧴",
                    },
                    {
                        title: "Ceramics",
                        description: "Glazes, enamels, pigments",
                        icon: "🏺",
                    },
                    {
                        title: "Agriculture",
                        description: "Fertilizers, nutritional supplements",
                        icon: "🌾",
                    },
                ],
                benefits: [
                    "Exceptional activator for vulcanization",
                    "Natural antibacterial properties",
                    "High opacity and covering power",
                    "Excellent thermal stability",
                ],
                samyAdvantage:
                    "Our zinc oxide is produced locally with rigorous quality control, reducing delivery times by 60% and guaranteeing permanent availability. Technical support for formulation included.",
                marketData: {
                    growth: "Market expanding 18% annually",
                    clients: "Local production = delivery within 48h",
                    supply: "Own production certified ISO 9001",
                },
            },
            ar: {
                shortTitle: "أكسيد الزنك",
                longTitle: "أكسيد الزنك 99.7% - تنوع صناعي",
                heroTitle: "حل كامل لأكسيد الزنك لمختلف القطاعات",
                intro: "تنتج وتتاجر Samy Business بأكسيد زنك عالي النقاوة (99.7%)، مادة خام أساسية لصناعات المطاط، مستحضرات التجميل، الأدوية والسيراميك. مصنعنا يستخدم الطريقة الفرنسية غير المباشرة لجودة فائقة.",
                valueProposition:
                    "أكسيد الزنك الخاص بنا يحسن متانة منتجاتك بنسبة تصل إلى 200% بفضل خصائصه المنشطة الاستثنائية. فعال بشكل خاص في تركيبات الإطارات والمطاط الصناعي.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">النقاوة</p>
                            <p class="font-bold text-lg" style="color: white;">99.7% أكسيد زنك كحد أدنى</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">درجة صناعية</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">السطح النوعي</p>
                            <p class="font-bold text-lg" style="color: white;">10-15 م²/جم</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">تفاعلية عالية</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">الشكل</p>
                            <p class="font-bold text-lg" style="color:white;">مسحوق ناعم</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">كيس 25 كجم</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">اللون</p>
                            <p class="font-bold text-lg" style="color: white;">أبيض نقي</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">مؤشر بياض عال</p>
                        </div>
                    </div>
                </div>`,
                applications: [
                    {
                        title: "مطاط",
                        description: "إطارات، جوانات، أحزمة ناقلة، مطاط صناعي",
                        icon: "🛞",
                    },
                    {
                        title: "مستحضرات تجميل",
                        description: "واقيات شمس، مرطبات، منتجات عناية",
                        icon: "🧴",
                    },
                    {
                        title: "سيراميك",
                        description: "أصباغ، طلاءات، تزجيج",
                        icon: "🏺",
                    },
                    {
                        title: "زراعة",
                        description: "أسمدة، مكملات غذائية",
                        icon: "🌾",
                    },
                ],
                benefits: [
                    "منشط استثنائي للتشريب",
                    "خصائص مضادة للبكتيريا طبيعية",
                    "عتامة عالية وقوة تغطية",
                    "استقرار حراري ممتاز",
                ],
                samyAdvantage:
                    "أكسيد الزنك الخاص بنا ينتج محليًا مع مراقبة جودة صارمة، يقلل أوقات التسليم بنسبة 60% ويضمن توفرًا دائمًا. دعم فني للتركيبة مشمول.",
                marketData: {
                    growth: "سوق يتوسع بنسبة 18% سنويًا",
                    clients: "إنتاج محلي = تسليم خلال 48 ساعة",
                    supply: "إنتاج خاص معتمد ISO 9001",
                },
            },
        },

        // ===== CARTON (Fil Machine) =====
        carton: {
            image: "/finals/carton.png",
            imageTableau: "/tableaux/tableau_carton.jpeg",
            fr: {
                shortTitle: "Carton",
                longTitle:
                    "Carton d'Emballage Industriel - Solution Écologique",
                heroTitle:
                    "Cartons de Haute Qualité pour Emballage Métallurgique",
                intro: "Samy Business propose une gamme complète de cartons d'emballage écologiques certifiés FSC, spécialement conçus pour l'emballage et la protection des produits métallurgiques. Nos solutions d'emballage garantissent une protection optimale pendant le transport et le stockage de vos métaux.",
                valueProposition:
                    "Nos cartons réduisent vos coûts d'emballage de 30% grâce à une conception optimisée et des matériaux recyclés. Chaque carton est testé pour résister aux conditions de transport les plus exigeantes tout en respectant les normes environnementales.",
                specsHtml: `<div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
                <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                    <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Types</p>
                    <p class="font-bold text-lg" style="color: rgb(25,43,94);">Simple/Bristol/Double</p>
                    <p class="text-xs mt-1" style="color: rgb(180,180,180);">Cartons standards</p>
                </div>
                <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                    <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Épaisseur</p>
                    <p class="font-bold text-lg" style="color: rgb(25,43,94);">2mm - 5mm</p>
                    <p class="text-xs mt-1" style="color: rgb(180,180,180);">Selon besoin</p>
                </div>
                <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                    <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Certification</p>
                    <p class="font-bold text-lg" style="color: rgb(25,43,94);">FSC 100%</p>
                    <p class="text-xs mt-1" style="color: rgb(180,180,180);">Écologique</p>
                </div>
                <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                    <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Tailles</p>
                    <p class="font-bold text-lg" style="color: rgb(25,43,94);">Sur mesure</p>
                    <p class="text-xs mt-1" style="color: rgb(180,180,180);">Standard & personnalisé</p>
                </div>
            </div>
        </div>`,
                applications: [
                    {
                        title: "Emballage Métallurgique",
                        description:
                            "Conditionnement de lingots, barres et produits métalliques",
                        icon: "📦",
                    },
                    {
                        title: "Protection Transport",
                        description:
                            "Protection des produits pendant le transport",
                        icon: "🚚",
                    },
                    {
                        title: "Stockage Industriel",
                        description: "Organisation et protection en entrepôt",
                        icon: "🏭",
                    },
                    {
                        title: "Exportation",
                        description: "Emballage pour l'export international",
                        icon: "✈️",
                    },
                ],
                benefits: [
                    "Résistance optimale aux charges lourdes",
                    "100% recyclable et écologique",
                    "Réduction des coûts d'emballage",
                    "Adaptable à tous formats de produits",
                ],
                samyAdvantage:
                    "Nos cartons sont produits localement avec des matériaux 100% recyclés certifiés FSC. Samy Business offre un service de conception sur mesure pour adapter l'emballage à vos produits spécifiques.",
                marketData: {
                    growth: "Demande croissante dans l'industrie exportatrice",
                    clients: "Production sur mesure en 72h",
                    supply: "Fournisseurs locaux certifiés FSC",
                },
            },
            en: {
                shortTitle: "Cardboard",
                longTitle:
                    "Industrial Packaging Cardboard - Ecological Solution",
                heroTitle: "High Quality Cardboard for Metallurgical Packaging",
                intro: "Samy Business offers a complete range of FSC-certified ecological packaging cardboard, specially designed for packaging and protecting metallurgical products. Our packaging solutions guarantee optimal protection during transport and storage of your metals.",
                valueProposition:
                    "Our cardboard reduces your packaging costs by 30% thanks to optimized design and recycled materials. Each box is tested to withstand the most demanding transport conditions while respecting environmental standards.",
                specsHtml: `<div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
                <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                    <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Types</p>
                    <p class="font-bold text-lg" style="color: rgb(25,43,94);">Simple/Bristol/Double</p>
                    <p class="text-xs mt-1" style="color: rgb(180,180,180);">Standard cardboards</p>
                </div>
                <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                    <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Thickness</p>
                    <p class="font-bold text-lg" style="color: rgb(25,43,94);">2mm - 5mm</p>
                    <p class="text-xs mt-1" style="color: rgb(180,180,180);">As needed</p>
                </div>
                <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                    <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Certification</p>
                    <p class="font-bold text-lg" style="color: rgb(25,43,94);">FSC 100%</p>
                    <p class="text-xs mt-1" style="color: rgb(180,180,180);">Ecological</p>
                </div>
                <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                    <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Sizes</p>
                    <p class="font-bold text-lg" style="color: rgb(25,43,94);">Custom</p>
                    <p class="text-xs mt-1" style="color: rgb(180,180,180);">Standard & custom</p>
                </div>
            </div>
        </div>`,
                applications: [
                    {
                        title: "Metallurgical Packaging",
                        description:
                            "Packaging of ingots, bars and metal products",
                        icon: "📦",
                    },
                    {
                        title: "Transport Protection",
                        description: "Product protection during transport",
                        icon: "🚚",
                    },
                    {
                        title: "Industrial Storage",
                        description: "Organization and protection in warehouse",
                        icon: "🏭",
                    },
                    {
                        title: "Export",
                        description: "Packaging for international export",
                        icon: "✈️",
                    },
                ],
                benefits: [
                    "Optimal resistance to heavy loads",
                    "100% recyclable and ecological",
                    "Reduction of packaging costs",
                    "Adaptable to all product formats",
                ],
                samyAdvantage:
                    "Our cardboard is produced locally with 100% recycled FSC-certified materials. Samy Business offers a custom design service to adapt the packaging to your specific products.",
                marketData: {
                    growth: "Growing demand in export industry",
                    clients: "Custom production within 72h",
                    supply: "Local FSC-certified suppliers",
                },
            },
            ar: {
                shortTitle: "كرتون",
                longTitle: "كرتون تغليف صناعي - حل بيئي",
                heroTitle: "كرتون عالي الجودة لتغليف المنتجات المعدنية",
                intro: "تقدم Samy Business مجموعة كاملة من الكرتون البيئي المعتمد FSC، مصمم خصيصًا لتغليف وحماية المنتجات المعدنية. حلول التغليف الخاصة بنا تضمن حماية مثالية خلال نقل وتخزين معادنك.",
                valueProposition:
                    "كرتوننا يقلل تكاليف تغليفك بنسبة 30% بفضل تصميم محسن ومواد معاد تدويرها. كل صندوق يختبر لتحمل ظروف النقل الأكثر تطلبًا مع احترام المعايير البيئية.",
                specsHtml: `<div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
                <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                    <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">الأنواع</p>
                    <p class="font-bold text-lg" style="color: rgb(25,43,94);">بسيط/بريستول/مزدوج</p>
                    <p class="text-xs mt-1" style="color: rgb(180,180,180);">كرتون قياسي</p>
                </div>
                <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                    <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">السماكة</p>
                    <p class="font-bold text-lg" style="color: rgb(25,43,94);">2مم - 5مم</p>
                    <p class="text-xs mt-1" style="color: rgb(180,180,180);">حسب الحاجة</p>
                </div>
                <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                    <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">الشهادة</p>
                    <p class="font-bold text-lg" style="color: rgb(25,43,94);">FSC 100%</p>
                    <p class="text-xs mt-1" style="color: rgb(180,180,180);">بيئي</p>
                </div>
                <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                    <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">الأحجام</p>
                    <p class="font-bold text-lg" style="color: rgb(25,43,94);">مقاس مخصص</p>
                    <p class="text-xs mt-1" style="color: rgb(180,180,180);">قياسي ومخصص</p>
                </div>
            </div>
        </div>`,
                applications: [
                    {
                        title: "تغليف معدني",
                        description: "تغليف قوالب، قضبان ومنتجات معدنية",
                        icon: "📦",
                    },
                    {
                        title: "حماية نقل",
                        description: "حماية المنتجات أثناء النقل",
                        icon: "🚚",
                    },
                    {
                        title: "تخزين صناعي",
                        description: "تنظيم وحماية في المستودع",
                        icon: "🏭",
                    },
                    {
                        title: "تصدير",
                        description: "تغليف للتصدير الدولي",
                        icon: "✈️",
                    },
                ],
                benefits: [
                    "مقاومة مثالية للأحمال الثقيلة",
                    "100% قابل لإعادة التدوير وبيئي",
                    "تقليل تكاليف التغليف",
                    "قابل للتكيف مع كل أشكال المنتجات",
                ],
                samyAdvantage:
                    "كرتوننا ينتج محليًا بمواد معاد تدويرها 100% معتمدة FSC. تقدم Samy Business خدمة تصميم مخصصة لتكييف التغليف مع منتجاتك الخاصة.",
                marketData: {
                    growth: "طلب متزايد في الصناعة المصدرة",
                    clients: "إنتاج مخصص خلال 72 ساعة",
                    supply: "موردون محليون معتمدون FSC",
                },
            },
        },
        // ===== ZINC ALUMINÉ =====
        "zinc-alumine": {
            image: "/finals/zinc_alumine.png",
            imageTableau: "/tableaux/tableau_zinc_alumine.jpeg",
            fr: {
                shortTitle: "Zinc Aluminé",
                longTitle: "Zinc-Aluminium Alliage - Protection Supérieure",
                heroTitle:
                    "Solution Innovante Zinc-Aluminium pour Applications Critiques",
                intro: "Samy Business développe et commercialise l'alliage zinc-aluminium, offrant une protection anticorrosion exceptionnellement supérieure au zinc pur. Particulièrement adapté aux environnements marins et industriels agressifs en Algérie.",
                valueProposition:
                    "Notre alliage zinc-aluminium offre une durée de vie 3 fois supérieure au zinc traditionnel, avec une résistance accrue aux chocs thermiques et une meilleure adhérence sur acier. Protection garantie 75 ans en milieu marin.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Composition</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">Zn 95% | Al 5%</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Alliage Spécial</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Durée de Vie</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">75+ ans</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Milieu Marin</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Forme</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">Lingots 25kg</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Poudre Option</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Résistance Choc</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">Excellente</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Thermique/Mécanique</p>
                        </div>
                    </div>
                </div>`,
                applications: [
                    {
                        title: "Offshore",
                        description:
                            "Plates-formes pétrolières, équipements marins",
                        icon: "🛢️",
                    },
                    {
                        title: "Infrastructures",
                        description:
                            "Ponts côtiers, ports, installations côtières",
                        icon: "⚓",
                    },
                    {
                        title: "Énergie",
                        description:
                            "Éoliennes offshore, infrastructures énergétiques",
                        icon: "🌊",
                    },
                    {
                        title: "Industrie Lourde",
                        description:
                            "Usines chimiques, raffineries, sidérurgie",
                        icon: "🏭",
                    },
                ],
                benefits: [
                    "Protection 3x supérieure au zinc pur",
                    "Résistance exceptionnelle aux UV et sel",
                    "Auto-cicatrisation des micro-rayures",
                    "Compatibilité avec peintures industrielles",
                ],
                samyAdvantage:
                    "Notre alliage zinc-aluminium est développé en partenariat avec le centre de recherche métallurgique d'Alger. Samy Business offre une formation gratuite sur les techniques d'application et une garantie de performance écrite.",
                marketData: {
                    growth: "Nouveau marché à fort potentiel",
                    clients: "Solutions sur mesure disponibles",
                    supply: "Production exclusive partenariat recherche",
                },
            },
            en: {
                shortTitle: "Zinc Aluminized",
                longTitle: "Zinc-Aluminium Alloy - Superior Protection",
                heroTitle:
                    "Innovative Zinc-Aluminium Solution for Critical Applications",
                intro: "Samy Business develops and markets zinc-aluminium alloy, offering exceptionally superior anticorrosion protection compared to pure zinc. Particularly suitable for marine and aggressive industrial environments in Algeria.",
                valueProposition:
                    "Our zinc-aluminium alloy offers 3 times longer lifespan than traditional zinc, with increased resistance to thermal shocks and better adhesion on steel. Protection guaranteed 75 years in marine environment.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Composition</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">Zn 95% | Al 5%</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Special Alloy</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Lifespan</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">75+ years</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Marine Environment</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Form</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">25kg Ingots</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Powder Option</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">Shock Resistance</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">Excellent</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">Thermal/Mechanical</p>
                        </div>
                    </div>
                </div>`,
                applications: [
                    {
                        title: "Offshore",
                        description: "Oil platforms, marine equipment",
                        icon: "🛢️",
                    },
                    {
                        title: "Infrastructure",
                        description:
                            "Coastal bridges, ports, coastal installations",
                        icon: "⚓",
                    },
                    {
                        title: "Energy",
                        description:
                            "Offshore wind turbines, energy infrastructure",
                        icon: "🌊",
                    },
                    {
                        title: "Heavy Industry",
                        description:
                            "Chemical plants, refineries, steel industry",
                        icon: "🏭",
                    },
                ],
                benefits: [
                    "Protection 3x superior to pure zinc",
                    "Exceptional resistance to UV and salt",
                    "Self-healing of micro-scratches",
                    "Compatibility with industrial paints",
                ],
                samyAdvantage:
                    "Our zinc-aluminium alloy is developed in partnership with Algiers metallurgical research center. Samy Business offers free training on application techniques and written performance guarantee.",
                marketData: {
                    growth: "New market with high potential",
                    clients: "Custom solutions available",
                    supply: "Exclusive production research partnership",
                },
            },
            ar: {
                shortTitle: "زنك مألومني",
                longTitle: "سبيكة زنك-ألومنيوم - حماية فائقة",
                heroTitle: "حل زنك-ألومنيوم مبتكر للتطبيقات الحرجة",
                intro: "تطور وتتاجر Samy Business بسبيكة زنك-ألومنيوم، تقدم حماية من التآكل فائقة الاستثنائية مقارنة بالزنك النقي. مناسبة خاصة للبيئات البحرية والصناعية العدوانية في الجزائر.",
                valueProposition:
                    "سبيكة الزنك-ألومنيوم الخاصة بنا تقدم عمرًا أطول 3 مرات من الزنك التقليدي، مع مقاومة متزايدة للصدمات الحرارية والتلصق أفضل على الفولاذ. حماية مضمونة 75 سنة في بيئة بحرية.",
                specsHtml: `<div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">التركيبة</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">زنك 95% | ألومنيوم 5%</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">سبيكة خاصة</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">العمر الافتراضي</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">75+ سنة</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">بيئة بحرية</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">الشكل</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">قوالب 25 كجم</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">خيار مسحوق</p>
                        </div>
                        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" style="border: 1px solid rgb(180,180,180);">
                            <p class="text-sm font-semibold mb-1" style="color: rgb(180,180,180);">مقاومة الصدمات</p>
                            <p class="font-bold text-lg" style="color: rgb(25,43,94);">ممتازة</p>
                            <p class="text-xs mt-1" style="color: rgb(180,180,180);">حرارية/ميكانيكية</p>
                        </div>
                    </div>
                </div>`,
                applications: [
                    {
                        title: "بعيد عن الشاطئ",
                        description: "منصات نفط، معدات بحرية",
                        icon: "🛢️",
                    },
                    {
                        title: "بنية تحتية",
                        description: "جسور ساحلية، موانئ، منشآت ساحلية",
                        icon: "⚓",
                    },
                    {
                        title: "طاقة",
                        description: "توربينات رياح بحرية، بنية تحتية طاقوية",
                        icon: "🌊",
                    },
                    {
                        title: "صناعة ثقيلة",
                        description: "مصانع كيميائية، مصافي، صناعة فولاذ",
                        icon: "🏭",
                    },
                ],
                benefits: [
                    "حماية أفضل 3 مرات من الزنك النقي",
                    "مقاومة استثنائية للأشعة فوق البنفسجية والملح",
                    "شفاء ذاتي للخدوش الدقيقة",
                    "توافق مع دهانات صناعية",
                ],
                samyAdvantage:
                    "سبيكة الزنك-ألومنيوم الخاصة بنا تطورت بشراكة مع مركز البحث المعدني بالجزائر. تقدم Samy Business تدريبًا مجانيًا على تقنيات التطبيق وضمان أداء مكتوب.",
                marketData: {
                    growth: "سوق جديد بإمكانيات عالية",
                    clients: "حلول مخصصة متاحة",
                    supply: "إنتاج حصري شراكة بحث",
                },
            },
        },
    };

    // Static translations with professional marketing language
    const staticTranslations = {
        fr: {
            premiumProduct: "Produit Métallurgique Premium",
            ourValueProposition: "Notre Proposition de Valeur Exclusive",
            productOverview: "Vue d'Ensemble du Produit",
            industrialApplications: "Applications Industrielles",
            keyBenefits: "Avantages Concurrentiels",
            keySpecifications: "Caractéristiques Techniques",
            samyBusinessAdvantage: "L'Avantage Samy Business",
            companyExpertise: "15+ Années d'Expertise",
            marketPresence: "Positionnement Marché",
            qualityCertifications: "Certifications & Garanties",
            lmeListed: "Coté LME",
            fullTraceability: "Traçabilité Complète",
            yearsExpertise: "Années d'Expertise",
            readyToOptimize:
                "Prêt à Optimiser Votre Chaîne d'Approvisionnement ?",
            expertTeam:
                "Notre équipe d'experts vous accompagne pour sélectionner la solution métallurgique optimale, avec analyse technique gratuite de vos besoins spécifiques.",
            requestCustomizedQuote: "Demander un Devis Personnalisé",
            talkToExpert: "Consulter un Expert",
            responseWithin:
                "Réponse sous 24h • Analyse technique gratuite • Support permanent",
            samyBusiness: "Samy Business",
            expertInMetals:
                "Leader en métaux ferreux et non-ferreux depuis 2007",
            yearsOfExpertise: "Années d'Expertise",
            satisfiedClients: "Clients Satisfaits",
            certifiedSuppliers: "Fournisseurs Certifiés",
            qualityAssurance:
                "Tous les produits cotés LME • Normes européennes certifiées • Traçabilité blockchain",
            learnMore: "En Savoir Plus",
            contactUs: "Nous Contacter",
            downloadSpecs: "Télécharger Fiche Technique",
            viewAllProducts: "Voir Tous les Produits",
            technicalSupport: "Support Technique Expert",
            logisticsNetwork: "Réseau Logistique National",
            digitalTransformation: "Transformation Numérique Avancée",
            qualityManagement: "Système Qualité ISO 9001:2015",
            standardSupplier: "Fournisseur Standard",
            standardSupplierFeatures:
                "• Certifications basiques\n• Traçabilité limitée\n• Support technique standard\n• Délais variables\n• Qualité inconstante",
            samyFeatures:
                "• LME & ISO 9001 Certified\n• Traçabilité blockchain complète\n• Support experts local/étranger\n• Livraison garantie J+3\n• Analyse technique gratuite",
            futureVision: "Vision 2025 - Industrie 4.0",
            futureFeatures:
                "• Digitalisation avancée\n• IA pour analyse qualité\n• Supply chain 4.0\n• Durabilité optimisée\n• Innovation continue",
            viewAllApplications: "Voir toutes les applications →",
            viewAllBenefits: "Voir tous les avantages →",
            optimizedSolution: "Solution Optimisée",
            significantImprovement:
                "Amélioration significative des performances",
            traceabilityExplained:
                "Traçabilité blockchain de la mine à votre usine",
            whyChoose: "Pourquoi Choisir Samy Business ?",
            whyChooseSubtitle:
                "Notre différentiel qualité au service de votre compétitivité industrielle",
            performanceComparison: "Comparatif de Performance",
            guaranteedDelivery: "Livraison Garantie",
            technicalAnalysis: "Analyse Technique",
            qualityDifference: "Différentiel Qualité",
        },
        en: {
            premiumProduct: "Premium Metallurgical Product",
            ourValueProposition: "Our Exclusive Value Proposition",
            productOverview: "Product Overview",
            industrialApplications: "Industrial Applications",
            keyBenefits: "Competitive Advantages",
            keySpecifications: "Technical Specifications",
            samyBusinessAdvantage: "The Samy Business Advantage",
            companyExpertise: "15+ Years Expertise",
            marketPresence: "Market Positioning",
            qualityCertifications: "Certifications & Guarantees",
            lmeListed: "LME Listed",
            fullTraceability: "Full Traceability",
            yearsExpertise: "Years of Expertise",
            readyToOptimize: "Ready to Optimize Your Supply Chain?",
            expertTeam:
                "Our expert team guides you to select the optimal metallurgical solution, with free technical analysis of your specific needs.",
            requestCustomizedQuote: "Request Customized Quote",
            talkToExpert: "Consult an Expert",
            responseWithin:
                "Response within 24h • Free technical analysis • Permanent support",
            samyBusiness: "Samy Business",
            expertInMetals:
                "Leader in ferrous and non-ferrous metals since 2007",
            yearsOfExpertise: "Years of Expertise",
            satisfiedClients: "Satisfied Clients",
            certifiedSuppliers: "Certified Suppliers",
            qualityAssurance:
                "All products LME-listed • Certified European standards • Blockchain traceability",
            learnMore: "Learn More",
            contactUs: "Contact Us",
            downloadSpecs: "Download Datasheet",
            viewAllProducts: "View All Products",
            technicalSupport: "Expert Technical Support",
            logisticsNetwork: "National Logistics Network",
            digitalTransformation: "Advanced Digital Transformation",
            qualityManagement: "ISO 9001:2015 Quality System",
            standardSupplier: "Standard Supplier",
            standardSupplierFeatures:
                "• Basic certifications\n• Limited traceability\n• Standard technical support\n• Variable deadlines\n• Inconsistent quality",
            samyFeatures:
                "• LME & ISO 9001 Certified\n• Complete blockchain traceability\n• Local/foreign expert support\n• Guaranteed delivery D+3\n• Free technical analysis",
            futureVision: "Vision 2025 - Industry 4.0",
            futureFeatures:
                "• Advanced digitalization\n• AI for quality analysis\n• Supply chain 4.0\n• Optimized sustainability\n• Continuous innovation",
            viewAllApplications: "View all applications →",
            viewAllBenefits: "View all benefits →",
            optimizedSolution: "Optimized Solution",
            significantImprovement: "Significant performance improvement",
            traceabilityExplained:
                "Blockchain traceability from mine to your factory",
            whyChoose: "Why Choose Samy Business?",
            whyChooseSubtitle:
                "Our quality differential at the service of your industrial competitiveness",
            performanceComparison: "Performance Comparison",
            guaranteedDelivery: "Guaranteed Delivery",
            technicalAnalysis: "Technical Analysis",
            qualityDifference: "Quality Differential",
        },
        ar: {
            premiumProduct: "منتج معدني متميز",
            ourValueProposition: "اقتراح القيمة الحصري الخاص بنا",
            productOverview: "نظرة عامة على المنتج",
            industrialApplications: "التطبيقات الصناعية",
            keyBenefits: "مزايا تنافسية",
            keySpecifications: "المواصفات التقنية",
            samyBusinessAdvantage: "ميزة Samy Business",
            companyExpertise: "خبرة 15+ سنة",
            marketPresence: "توجه في السوق",
            qualityCertifications: "شهادات وضمانات",
            lmeListed: "مدرج في LME",
            fullTraceability: "تتبع كامل",
            yearsExpertise: "سنوات الخبرة",
            readyToOptimize: "مستعد لتحسين سلسلة التوريد الخاصة بك؟",
            expertTeam:
                "يرشدك فريق الخبراء لدينا لاختيار الحل المعدني الأمثل، مع تحليل فني مجاني لاحتياجاتك الخاصة.",
            requestCustomizedQuote: "طلب عرض سعر مخصص",
            talkToExpert: "استشارة خبير",
            responseWithin: "الرد خلال 24 ساعة • تحليل فني مجاني • دعم دائم",
            samyBusiness: "Samy Business",
            expertInMetals: "قائد في المعادن الحديدية وغير الحديدية منذ 2007",
            yearsOfExpertise: "سنوات الخبرة",
            satisfiedClients: "عملاء راضون",
            certifiedSuppliers: "موردون معتمدون",
            qualityAssurance:
                "جميع المنتجات مدرجة في LME • معايير أوروبية معتمدة • تتبع بلوكشين",
            learnMore: "المزيد من المعلومات",
            contactUs: "اتصل بنا",
            downloadSpecs: "تحميل ورقة البيانات",
            viewAllProducts: "عرض جميع المنتجات",
            technicalSupport: "دعم فني خبير",
            logisticsNetwork: "شبكة لوجستية وطنية",
            digitalTransformation: "تحول رقمي متقدم",
            qualityManagement: "نظام جودة ISO 9001:2015",
            standardSupplier: "مورد قياسي",
            standardSupplierFeatures:
                "• شهادات أساسية\n• تتبع محدود\n• دعم فني قياسي\n• مواعيد متغيرة\n• جودة غير ثابتة",
            samyFeatures:
                "• معتمد LME & ISO 9001\n• تتبع بلوكشين كامل\n• دعم خبراء محليين/أجانب\n• تسليم مضمون خلال 3 أيام\n• تحليل فني مجاني",
            futureVision: "رؤية 2025 - صناعة 4.0",
            futureFeatures:
                "• رقمنة متقدمة\n• ذكاء اصطناعي لتحليل الجودة\n• سلسلة توريد 4.0\n• استدامة محسنة\n• ابتكار مستمر",
            viewAllApplications: "عرض جميع التطبيقات →",
            viewAllBenefits: "عرض جميع المزايا →",
            optimizedSolution: "حل محسن",
            significantImprovement: "تحسين كبير في الأداء",
            traceabilityExplained: "تتبع بلوكشين من المنجم إلى مصنعك",
            whyChoose: "لماذا تختار Samy Business؟",
            whyChooseSubtitle:
                "فارق الجودة الخاص بنا في خدمة تنافسيتك الصناعية",
            performanceComparison: "مقارنة الأداء",
            guaranteedDelivery: "تسليم مضمون",
            technicalAnalysis: "تحليل فني",
            qualityDifference: "فارق الجودة",
        },
    };

    // Get translations
    const t = staticTranslations[language] || staticTranslations.en;

    // Determine available content
    const getAvailableTabs = (productData) => {
        const tabs = ["overview"];

        if (productData?.specsHtml?.trim() !== "") {
            tabs.push("specifications");
        }

        if (productData?.applications?.length > 0) {
            tabs.push("applications");
        }

        if (productData?.benefits?.length > 0) {
            tabs.push("benefits");
        }

        return tabs;
    };

    // Fallback with generic title
    const fallback = {
        fr: {
            shortTitle: productName,
            longTitle: `Solution Métallurgique sur Mesure`,
            heroTitle: "Produit Samy Business",
            intro: "Découvrez l'excellence industrielle Samy Business avec ce produit de qualité supérieure, conforme aux normes européennes et coté LME pour une traçabilité garantie.",
            valueProposition:
                "Notre expertise de plus de 15 ans garantit des produits de qualité constante, optimisant vos processus industriels tout en réduisant vos coûts opérationnels.",
            specsHtml: "",
            applications: [],
            benefits: [],
            samyAdvantage: "",
            marketData: {},
        },
        en: {
            shortTitle: productName,
            longTitle: `Custom Metallurgical Solution`,
            heroTitle: "Samy Business Product",
            intro: "Discover Samy Business industrial excellence with this superior quality product, compliant with European standards and LME-listed for guaranteed traceability.",
            valueProposition:
                "Our 15+ years of expertise guarantees consistent quality products, optimizing your industrial processes while reducing your operational costs.",
            specsHtml: "",
            applications: [],
            benefits: [],
            samyAdvantage: "",
            marketData: {},
        },
        ar: {
            shortTitle: productName,
            longTitle: `حل معدني مخصص`,
            heroTitle: "منتج Samy Business",
            intro: "اكتشف التميز الصناعي لـ Samy Business مع هذا المنتج عالي الجودة، المطابق للمعايير الأوروبية والمدرج في بورصة LME لإمكانية تتبع مضمونة.",
            valueProposition:
                "خبرتنا التي تزيد عن 15 سنة تضمن منتجات بجودة ثابتة، مما يحسن عملياتك الصناعية مع تقليل تكاليف التشغيل.",
            specsHtml: "",
            applications: [],
            benefits: [],
            samyAdvantage: "",
            marketData: {},
        },
    };

    const data = productData[slug]
        ? productData[slug][language] || productData[slug].fr
        : fallback[language];

    // Display titles
    const displayShortTitle = data.shortTitle || productName;
    const displayLongTitle = data.longTitle || displayShortTitle;

    // Image loading
    const mainImage = (() => {
        if (imageSrc) return imageSrc;
        if (productData[slug]?.image) return productData[slug].image;
        return "/couvertureIMG.jpg";
    })();

    const availableTabs = getAvailableTabs(data);
    const scrollToContact = () => {
        contactFormRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const renderFeatures = (featuresText) => {
        return featuresText.split("\n").map((feature, index) => (
            <p key={index} style={{ color: currentColors.mediumGray }}>
                {feature.trim()}
            </p>
        ));
    };

    return (
        <section
            className="min-h-screen w-full transition-colors duration-300"
            dir={isRTL ? "rtl" : "ltr"}
            style={{
                backgroundColor: currentColors.background,
                color: currentColors.textPrimary,
            }}
        >
            {/* Floating Action Buttons - Mobile Optimized */}
            <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3 sm:right-6 sm:bottom-6">
                <button
                    onClick={scrollToContact}
                    className="p-3 sm:p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
                    title={t.requestCustomizedQuote}
                    style={{
                        background: `linear-gradient(135deg, ${currentColors.gradientStart} 0%, ${currentColors.gradientEnd} 100%)`,
                        color: "white",
                    }}
                >
                    <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
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
                    <span
                        className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{
                            background: `linear-gradient(135deg, ${currentColors.gradientStart} 0%, ${currentColors.gradientEnd} 100%)`,
                        }}
                    >
                        {t.requestCustomizedQuote}
                    </span>
                </button>
                <a
                    href="tel:+213123456789"
                    className="p-3 sm:p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
                    title={
                        language === "fr"
                            ? "Appeler"
                            : language === "ar"
                            ? "اتصال"
                            : "Call"
                    }
                    style={{
                        backgroundColor: currentColors.primary,
                        color: "white",
                    }}
                >
                    <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
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
                    <span
                        className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ backgroundColor: currentColors.primary }}
                    >
                        {language === "fr"
                            ? "Appeler"
                            : language === "ar"
                            ? "اتصال"
                            : "Call"}
                    </span>
                </a>
            </div>

            {/* Breadcrumb Navigation */}
            <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
                <div className="max-w-7xl mx-auto">
                    <nav
                        className="flex items-center gap-2 text-sm mb-2"
                        style={{ color: currentColors.mediumGray }}
                    >
                        <Link
                            href="/"
                            className="hover:opacity-70 transition-opacity"
                            style={{ color: currentColors.blue }}
                        >
                            {language === "fr"
                                ? "Accueil"
                                : language === "ar"
                                ? "الرئيسية"
                                : "Home"}
                        </Link>
                        <span className="opacity-40">›</span>
                        <Link
                            href="/products"
                            className="hover:opacity-70 transition-opacity"
                            style={{ color: currentColors.blue }}
                        >
                            {language === "fr"
                                ? "Produits"
                                : language === "ar"
                                ? "المنتجات"
                                : "Products"}
                        </Link>
                        <span className="opacity-40">›</span>
                        <span
                            className="font-medium"
                            style={{ color: currentColors.gradientStart }}
                        >
                            {displayShortTitle}
                        </span>
                    </nav>
                </div>
            </div>

            <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-7xl mx-auto">
                    {/* Enhanced Hero Section */}
                    <div
                        className="relative mb-12 sm:mb-16 overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 transition-colors duration-300"
                        style={{
                            backgroundColor: currentColors.cardBackground,
                            border: `1px solid ${currentColors.border}`,
                        }}
                    >
                        <div className="absolute inset-0 opacity-5">
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `radial-gradient(${
                                        isRTL
                                            ? "circle at left"
                                            : "circle at right"
                                    } 30%, ${
                                        currentColors.gradientEnd
                                    } 2px, transparent 2px)`,
                                    backgroundSize: "40px 40px",
                                }}
                            ></div>
                        </div>

                        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                            <div>
                                <div
                                    className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6"
                                    style={{
                                        backgroundColor:
                                            theme === "dark"
                                                ? "rgba(76, 242, 255, 0.15)"
                                                : "rgba(76, 242, 255, 0.1)",
                                        color: currentColors.gradientStart,
                                        border: `1px solid ${
                                            theme === "dark"
                                                ? "rgba(76, 242, 255, 0.3)"
                                                : "rgba(76, 242, 255, 0.3)"
                                        }`,
                                    }}
                                >
                                    <div
                                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse"
                                        style={{
                                            backgroundColor:
                                                currentColors.gradientStart,
                                        }}
                                    ></div>
                                    {t.premiumProduct}
                                </div>

                                <h1
                                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 sm:mb-4 leading-tight"
                                    style={{ color: currentColors.blue }}
                                >
                                    {displayShortTitle}
                                    {displayLongTitle &&
                                        displayLongTitle !==
                                            displayShortTitle && (
                                            <span
                                                className="block text-lg sm:text-xl md:text-2xl mt-1 sm:mt-2"
                                                style={{
                                                    color: currentColors.gradientStart,
                                                }}
                                            >
                                                {displayLongTitle}
                                            </span>
                                        )}
                                </h1>

                                <p
                                    className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed"
                                    style={{
                                        color: currentColors.mediumGray,
                                    }}
                                >
                                    {data.heroTitle}
                                </p>

                                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                                    <button
                                        onClick={() => router.push("/devis")}
                                        className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl px-6 sm:px-8 py-3 sm:py-4 font-bold text-white shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-sm sm:text-base"
                                        style={{
                                            background: `linear-gradient(135deg, ${currentColors.gradientStart} 0%, ${currentColors.gradientEnd} 100%)`,
                                            border: "1px solid rgba(255, 255, 255, 0.3)",
                                        }}
                                    >
                                        <svg
                                            className="w-4 h-4 sm:w-5 sm:h-5"
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

                                    {availableTabs.includes(
                                        "specifications"
                                    ) && (
                                        <button
                                            onClick={() =>
                                                setActiveTab("specifications")
                                            }
                                            className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl px-6 sm:px-8 py-3 sm:py-4 font-bold transition-all duration-300 text-sm sm:text-base"
                                            style={{
                                                border: `2px solid ${currentColors.gradientStart}`,
                                                color: currentColors.gradientStart,
                                                backgroundColor:
                                                    theme === "dark"
                                                        ? "rgba(47, 134, 253, 0.1)"
                                                        : "rgba(47, 134, 253, 0.05)",
                                            }}
                                        >
                                            <svg
                                                className="w-4 h-4 sm:w-5 sm:h-5"
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
                                    )}
                                </div>

                                {/* Company Stats - Mobile Optimized */}
                                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                                    {[
                                        {
                                            value: "15+",
                                            label: t.yearsOfExpertise,
                                        },
                                        {
                                            value: "114",
                                            label: t.satisfiedClients,
                                        },
                                        {
                                            value: "31",
                                            label: t.certifiedSuppliers,
                                        },
                                    ].map((stat, index) => (
                                        <div
                                            key={index}
                                            className="text-center p-2 sm:p-4 rounded-lg transition-colors duration-300"
                                            style={{
                                                backgroundColor:
                                                    theme === "dark"
                                                        ? "rgba(150, 150, 150, 0.1)"
                                                        : "rgba(180, 180, 180, 0.1)",
                                            }}
                                        >
                                            <div
                                                className="text-lg sm:text-xl md:text-2xl font-bold"
                                                style={{
                                                    color: currentColors.gradientStart,
                                                }}
                                            >
                                                {stat.value}
                                            </div>
                                            <div
                                                className="text-xs sm:text-sm"
                                                style={{
                                                    color: currentColors.mediumGray,
                                                }}
                                            >
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative mt-8 lg:mt-0">
                                <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                                    <img
                                        src={mainImage}
                                        onError={(e) => {
                                            e.currentTarget.src =
                                                "/couvertureIMG.jpg";
                                        }}
                                        alt={displayLongTitle}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Floating quality badge */}
                                <div
                                    className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 rounded-lg sm:rounded-xl p-3 sm:p-6 shadow-xl sm:shadow-2xl transition-colors duration-300"
                                    style={{
                                        backgroundColor: currentColors.white,
                                        border: `1px solid ${currentColors.border}`,
                                    }}
                                >
                                    <div className="text-center">
                                        <div
                                            className="text-lg sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-1"
                                            style={{
                                                color: currentColors.gradientStart,
                                            }}
                                        >
                                            LME
                                        </div>
                                        <div
                                            className="text-xs"
                                            style={{
                                                color: currentColors.mediumGray,
                                            }}
                                        >
                                            {t.lmeListed}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dynamic Content Section - Mobile Responsive */}
                    {availableTabs.length > 1 ? (
                        <div className="mb-12 sm:mb-16">
                            {/* Tab Navigation - Mobile Scrollable */}
                            <div className="overflow-x-auto pb-2 mb-6 sm:mb-8">
                                <div
                                    className="flex gap-1 sm:gap-2 min-w-max border-b"
                                    style={{
                                        borderColor: currentColors.border,
                                    }}
                                >
                                    {availableTabs.map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`px-4 sm:px-6 py-2 sm:py-3 font-medium rounded-t-lg transition-all duration-300 whitespace-nowrap text-sm sm:text-base ${
                                                activeTab === tab
                                                    ? "text-white"
                                                    : "hover:opacity-70"
                                            }`}
                                            style={
                                                activeTab === tab
                                                    ? {
                                                          backgroundColor:
                                                              currentColors.gradientStart,
                                                          borderTop: `1px solid ${currentColors.border}`,
                                                          borderLeft: `1px solid ${currentColors.border}`,
                                                          borderRight: `1px solid ${currentColors.border}`,
                                                      }
                                                    : {
                                                          color: currentColors.mediumGray,
                                                      }
                                            }
                                        >
                                            {tab === "overview" &&
                                                t.productOverview}
                                            {tab === "specifications" &&
                                                t.keySpecifications}
                                            {tab === "applications" &&
                                                t.industrialApplications}
                                            {tab === "benefits" &&
                                                t.keyBenefits}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="transition-all duration-300">
                                {/* Overview Tab - Mobile Optimized */}
                                {activeTab === "overview" && (
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                                        <div className="space-y-6 sm:space-y-8">
                                            <div>
                                                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                                                    <div
                                                        className="p-1.5 sm:p-2 rounded-lg"
                                                        style={{
                                                            backgroundColor:
                                                                theme === "dark"
                                                                    ? "rgba(76, 242, 255, 0.15)"
                                                                    : "rgba(76, 242, 255, 0.1)",
                                                        }}
                                                    >
                                                        <svg
                                                            className="w-5 h-5 sm:w-6 sm:h-6"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            style={{
                                                                color: currentColors.gradientStart,
                                                            }}
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
                                                <p
                                                    className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6"
                                                    style={{
                                                        color: currentColors.textPrimary,
                                                    }}
                                                >
                                                    {data.intro}
                                                </p>
                                            </div>

                                            {data.valueProposition && (
                                                <div
                                                    className="p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-colors duration-300"
                                                    style={{
                                                        background:
                                                            theme === "dark"
                                                                ? "linear-gradient(135deg, rgba(76, 242, 255, 0.1) 0%, transparent 100%)"
                                                                : "linear-gradient(135deg, rgba(76, 242, 255, 0.05) 0%, transparent 100%)",
                                                        border: `1px solid ${
                                                            theme === "dark"
                                                                ? "rgba(76, 242, 255, 0.3)"
                                                                : "rgba(76, 242, 255, 0.2)"
                                                        }`,
                                                    }}
                                                >
                                                    <h4
                                                        className="text-lg sm:text-xl font-bold mb-3 sm:mb-4"
                                                        style={{
                                                            color: currentColors.textPrimary,
                                                        }}
                                                    >
                                                        {t.ourValueProposition}
                                                    </h4>
                                                    <p
                                                        className="leading-relaxed"
                                                        style={{
                                                            color: currentColors.textPrimary,
                                                        }}
                                                    >
                                                        {data.valueProposition}
                                                    </p>
                                                </div>
                                            )}

                                            {/* Quick Applications Preview */}
                                            {availableTabs.includes(
                                                "applications"
                                            ) &&
                                                data.applications.length >
                                                    0 && (
                                                    <div>
                                                        <h4
                                                            className="text-lg sm:text-xl font-bold mb-4 sm:mb-6"
                                                            style={{
                                                                color: currentColors.textPrimary,
                                                            }}
                                                        >
                                                            {
                                                                t.industrialApplications
                                                            }
                                                        </h4>
                                                        <div className="grid grid-cols-1 gap-3 sm:gap-4">
                                                            {data.applications
                                                                .slice(0, 3)
                                                                .map(
                                                                    (
                                                                        app,
                                                                        index
                                                                    ) => (
                                                                        <div
                                                                            key={
                                                                                index
                                                                            }
                                                                            className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg transition-colors duration-300"
                                                                            style={{
                                                                                backgroundColor:
                                                                                    theme ===
                                                                                    "dark"
                                                                                        ? "rgba(150, 150, 150, 0.1)"
                                                                                        : "rgba(180, 180, 180, 0.1)",
                                                                            }}
                                                                        >
                                                                            <div className="text-2xl sm:text-3xl">
                                                                                {
                                                                                    app.icon
                                                                                }
                                                                            </div>
                                                                            <div>
                                                                                <div
                                                                                    className="font-semibold text-base sm:text-lg"
                                                                                    style={{
                                                                                        color: currentColors.textPrimary,
                                                                                    }}
                                                                                >
                                                                                    {
                                                                                        app.title
                                                                                    }
                                                                                </div>
                                                                                <div
                                                                                    className="text-xs sm:text-sm mt-0.5"
                                                                                    style={{
                                                                                        color: currentColors.mediumGray,
                                                                                    }}
                                                                                >
                                                                                    {
                                                                                        app.description
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                )}
                                                        </div>
                                                        {data.applications
                                                            .length > 3 && (
                                                            <button
                                                                onClick={() =>
                                                                    setActiveTab(
                                                                        "applications"
                                                                    )
                                                                }
                                                                className="mt-3 sm:mt-4 text-sm font-semibold"
                                                                style={{
                                                                    color: currentColors.gradientStart,
                                                                }}
                                                            >
                                                                {
                                                                    t.viewAllApplications
                                                                }
                                                            </button>
                                                        )}
                                                    </div>
                                                )}
                                        </div>

                                        <div>
                                            <div className="lg:sticky lg:top-24 space-y-6 sm:space-y-8">
                                                <div
                                                    className="p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-colors duration-300"
                                                    style={{
                                                        backgroundColor:
                                                            currentColors.cardBackground,
                                                        border: `1px solid ${currentColors.border}`,
                                                    }}
                                                >
                                                    <h3
                                                        className="font-bold text-lg sm:text-xl mb-4 sm:mb-6"
                                                        style={{
                                                            color: currentColors.textPrimary,
                                                        }}
                                                    >
                                                        {
                                                            t.samyBusinessAdvantage
                                                        }
                                                    </h3>
                                                    <p
                                                        className="mb-4 sm:mb-6 text-sm sm:text-base"
                                                        style={{
                                                            color: currentColors.mediumGray,
                                                        }}
                                                    >
                                                        {data.samyAdvantage ||
                                                            t.expertTeam}
                                                    </p>

                                                    <div className="space-y-3 sm:space-y-4">
                                                        {[
                                                            {
                                                                title: t.logisticsNetwork,
                                                                icon: "🚚",
                                                            },
                                                            {
                                                                title: t.technicalSupport,
                                                                icon: "👨‍💼",
                                                            },
                                                            {
                                                                title: t.qualityManagement,
                                                                icon: "🏆",
                                                            },
                                                        ].map((item, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex items-center gap-3 p-3 rounded-lg transition-colors duration-300"
                                                                style={{
                                                                    backgroundColor:
                                                                        theme ===
                                                                        "dark"
                                                                            ? "rgba(76, 242, 255, 0.15)"
                                                                            : "rgba(76, 242, 255, 0.1)",
                                                                }}
                                                            >
                                                                <div className="text-lg sm:text-xl">
                                                                    {item.icon}
                                                                </div>
                                                                <span
                                                                    className="text-sm sm:text-base"
                                                                    style={{
                                                                        color: currentColors.textPrimary,
                                                                    }}
                                                                >
                                                                    {item.title}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Market Data */}
                                                {data.marketData && (
                                                    <div
                                                        className="p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-colors duration-300"
                                                        style={{
                                                            backgroundColor:
                                                                theme === "dark"
                                                                    ? "rgba(25, 43, 94, 0.1)"
                                                                    : "rgba(25, 43, 94, 0.05)",
                                                            border: `1px solid ${
                                                                theme === "dark"
                                                                    ? "rgba(25, 43, 94, 0.3)"
                                                                    : "rgba(25, 43, 94, 0.2)"
                                                            }`,
                                                        }}
                                                    >
                                                        <h4
                                                            className="font-bold text-base sm:text-lg mb-3 sm:mb-4"
                                                            style={{
                                                                color: currentColors.textPrimary,
                                                            }}
                                                        >
                                                            {t.marketPresence}
                                                        </h4>
                                                        <div className="space-y-2 sm:space-y-3">
                                                            {data.marketData
                                                                .growth && (
                                                                <div className="flex items-center gap-2 sm:gap-3">
                                                                    <div
                                                                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                                                                        style={{
                                                                            backgroundColor:
                                                                                currentColors.gradientStart,
                                                                        }}
                                                                    ></div>
                                                                    <span
                                                                        className="text-xs sm:text-sm"
                                                                        style={{
                                                                            color: currentColors.mediumGray,
                                                                        }}
                                                                    >
                                                                        {
                                                                            data
                                                                                .marketData
                                                                                .growth
                                                                        }
                                                                    </span>
                                                                </div>
                                                            )}
                                                            {data.marketData
                                                                .clients && (
                                                                <div className="flex items-center gap-2 sm:gap-3">
                                                                    <div
                                                                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                                                                        style={{
                                                                            backgroundColor:
                                                                                currentColors.gradientStart,
                                                                        }}
                                                                    ></div>
                                                                    <span
                                                                        className="text-xs sm:text-sm"
                                                                        style={{
                                                                            color: currentColors.mediumGray,
                                                                        }}
                                                                    >
                                                                        {
                                                                            data
                                                                                .marketData
                                                                                .clients
                                                                        }
                                                                    </span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Specifications Tab */}
                                {activeTab === "specifications" && (
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                                        <div>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: getSpecsHtmlWithTheme(
                                                        data.specsHtml
                                                    ),
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <div
                                                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl mb-6 sm:mb-8 transition-colors duration-300"
                                                style={{
                                                    background:
                                                        theme === "dark"
                                                            ? `linear-gradient(135deg, ${currentColors.cardBackground} 0%, ${currentColors.background} 100%)`
                                                            : `linear-gradient(135deg, ${currentColors.cardBackground} 0%, ${currentColors.lightGray} 100%)`,
                                                    border: `1px solid ${currentColors.border}`,
                                                }}
                                            >
                                                <h3
                                                    className="font-bold text-lg sm:text-xl mb-4 sm:mb-6"
                                                    style={{
                                                        color: currentColors.textPrimary,
                                                    }}
                                                >
                                                    {t.qualityCertifications}
                                                </h3>
                                                <div className="space-y-3 sm:space-y-4">
                                                    {[
                                                        {
                                                            title: t.lmeListed,
                                                            description:
                                                                "London Metal Exchange Standards",
                                                            icon: "🏦",
                                                        },
                                                        {
                                                            title: "ISO 9001:2015",
                                                            description:
                                                                t.qualityManagement,
                                                            icon: "📋",
                                                        },
                                                        {
                                                            title: t.fullTraceability,
                                                            description:
                                                                t.traceabilityExplained,
                                                            icon: "🔍",
                                                        },
                                                    ].map((cert, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex items-center gap-3 p-3 sm:p-4 rounded-lg transition-colors duration-300"
                                                            style={{
                                                                backgroundColor:
                                                                    theme ===
                                                                    "dark"
                                                                        ? currentColors.background
                                                                        : currentColors.white,
                                                                border: `1px solid ${currentColors.border}`,
                                                            }}
                                                        >
                                                            <div className="text-xl sm:text-2xl">
                                                                {cert.icon}
                                                            </div>
                                                            <div>
                                                                <div
                                                                    className="font-semibold text-sm sm:text-base"
                                                                    style={{
                                                                        color: currentColors.textPrimary,
                                                                    }}
                                                                >
                                                                    {cert.title}
                                                                </div>
                                                                <div
                                                                    className="text-xs sm:text-sm"
                                                                    style={{
                                                                        color: currentColors.mediumGray,
                                                                    }}
                                                                >
                                                                    {
                                                                        cert.description
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Applications Tab */}
                                {activeTab === "applications" && (
                                    <div className="space-y-6 sm:space-y-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                            {data.applications
                                                .slice(
                                                    0,
                                                    showMoreApplications
                                                        ? data.applications
                                                              .length
                                                        : 6
                                                )
                                                .map((app, index) => (
                                                    <div
                                                        key={index}
                                                        className="group p-4 sm:p-6 rounded-xl transition-all duration-300 hover:shadow-xl"
                                                        style={{
                                                            background:
                                                                theme === "dark"
                                                                    ? `linear-gradient(135deg, ${currentColors.cardBackground} 0%, ${currentColors.background} 100%)`
                                                                    : `linear-gradient(135deg, ${currentColors.cardBackground} 0%, ${currentColors.lightGray} 100%)`,
                                                            border: `1px solid ${currentColors.border}`,
                                                        }}
                                                    >
                                                        <div className="flex flex-col h-full">
                                                            <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">
                                                                {app.icon}
                                                            </div>
                                                            <h4
                                                                className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg"
                                                                style={{
                                                                    color: currentColors.textPrimary,
                                                                }}
                                                            >
                                                                {app.title}
                                                            </h4>
                                                            <p
                                                                className="text-xs sm:text-sm flex-grow"
                                                                style={{
                                                                    color: currentColors.mediumGray,
                                                                }}
                                                            >
                                                                {
                                                                    app.description
                                                                }
                                                            </p>
                                                            <div
                                                                className="mt-3 sm:mt-4 pt-3 sm:pt-4"
                                                                style={{
                                                                    borderTop: `1px solid ${
                                                                        theme ===
                                                                        "dark"
                                                                            ? "rgba(150, 150, 150, 0.3)"
                                                                            : "rgba(180, 180, 180, 0.3)"
                                                                    }`,
                                                                }}
                                                            >
                                                                <div className="flex items-center gap-2">
                                                                    <svg
                                                                        className="w-3 h-3 sm:w-4 sm:h-4"
                                                                        fill="currentColor"
                                                                        viewBox="0 0 20 20"
                                                                        style={{
                                                                            color: currentColors.gradientStart,
                                                                        }}
                                                                    >
                                                                        <path
                                                                            fillRule="evenodd"
                                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                            clipRule="evenodd"
                                                                        />
                                                                    </svg>
                                                                    <span
                                                                        className="text-xs font-semibold"
                                                                        style={{
                                                                            color: currentColors.gradientStart,
                                                                        }}
                                                                    >
                                                                        {
                                                                            t.optimizedSolution
                                                                        }
                                                                    </span>
                                                                </div>
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
                                                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base"
                                                    style={{
                                                        border: `2px solid ${currentColors.gradientStart}`,
                                                        color: currentColors.gradientStart,
                                                        backgroundColor:
                                                            theme === "dark"
                                                                ? "rgba(47, 134, 253, 0.1)"
                                                                : "rgba(47, 134, 253, 0.05)",
                                                    }}
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
                                                        className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 ${
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
                                    <div className="space-y-6 sm:space-y-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
                                                        className="p-4 sm:p-6 rounded-xl hover:shadow-xl transition-all duration-300"
                                                        style={{
                                                            background:
                                                                theme === "dark"
                                                                    ? `linear-gradient(135deg, ${currentColors.cardBackground} 0%, ${currentColors.background} 100%)`
                                                                    : `linear-gradient(135deg, ${currentColors.cardBackground} 0%, ${currentColors.lightGray} 100%)`,
                                                            border: `1px solid ${currentColors.border}`,
                                                        }}
                                                    >
                                                        <div className="flex items-start gap-3 sm:gap-4">
                                                            <div
                                                                className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
                                                                style={{
                                                                    background:
                                                                        theme ===
                                                                        "dark"
                                                                            ? `linear-gradient(135deg, rgba(76, 242, 255, 0.3) 0%, rgba(47, 134, 253, 0.3) 100%)`
                                                                            : `linear-gradient(135deg, rgba(76, 242, 255, 0.2) 0%, rgba(47, 134, 253, 0.2) 100%)`,
                                                                }}
                                                            >
                                                                <span
                                                                    className="font-bold text-base sm:text-lg"
                                                                    style={{
                                                                        color: currentColors.gradientStart,
                                                                    }}
                                                                >
                                                                    {index + 1}
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <h4
                                                                    className="font-semibold mb-1 sm:mb-2 text-base sm:text-lg"
                                                                    style={{
                                                                        color: currentColors.textPrimary,
                                                                    }}
                                                                >
                                                                    {benefit}
                                                                </h4>
                                                                <p
                                                                    className="text-xs sm:text-sm"
                                                                    style={{
                                                                        color: currentColors.mediumGray,
                                                                    }}
                                                                >
                                                                    {
                                                                        t.significantImprovement
                                                                    }
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
                                                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base"
                                                    style={{
                                                        border: `2px solid ${currentColors.gradientStart}`,
                                                        color: currentColors.gradientStart,
                                                        backgroundColor:
                                                            theme === "dark"
                                                                ? "rgba(47, 134, 253, 0.1)"
                                                                : "rgba(47, 134, 253, 0.05)",
                                                    }}
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
                    ) : (
                        /* Single-column layout for simple products */
                        <div className="mb-12 sm:mb-16">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                                <div className="space-y-6 sm:space-y-8">
                                    <div>
                                        <h3
                                            className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6"
                                            style={{
                                                color: currentColors.textPrimary,
                                            }}
                                        >
                                            {t.productOverview}
                                        </h3>
                                        <p
                                            className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6"
                                            style={{
                                                color: currentColors.textPrimary,
                                            }}
                                        >
                                            {data.intro}
                                        </p>
                                    </div>

                                    {data.valueProposition && (
                                        <div
                                            className="p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-colors duration-300"
                                            style={{
                                                background:
                                                    theme === "dark"
                                                        ? "linear-gradient(135deg, rgba(76, 242, 255, 0.1) 0%, transparent 100%)"
                                                        : "linear-gradient(135deg, rgba(76, 242, 255, 0.05) 0%, transparent 100%)",
                                                border: `1px solid ${
                                                    theme === "dark"
                                                        ? "rgba(76, 242, 255, 0.3)"
                                                        : "rgba(76, 242, 255, 0.2)"
                                                }`,
                                            }}
                                        >
                                            <h4
                                                className="text-lg sm:text-xl font-bold mb-3 sm:mb-4"
                                                style={{
                                                    color: currentColors.textPrimary,
                                                }}
                                            >
                                                {t.ourValueProposition}
                                            </h4>
                                            <p
                                                className="leading-relaxed"
                                                style={{
                                                    color: currentColors.textPrimary,
                                                }}
                                            >
                                                {data.valueProposition}
                                            </p>
                                        </div>
                                    )}

                                    {/* Specifications for simple products */}
                                    {data.specsHtml &&
                                        data.specsHtml.trim() !== "" && (
                                            <div>
                                                <h4
                                                    className="text-lg sm:text-xl font-bold mb-4 sm:mb-6"
                                                    style={{
                                                        color: currentColors.textPrimary,
                                                    }}
                                                >
                                                    {t.keySpecifications}
                                                </h4>
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: getSpecsHtmlWithTheme(
                                                            data.specsHtml
                                                        ),
                                                    }}
                                                />
                                            </div>
                                        )}

                                    {/* Applications for simple products */}
                                    {data.applications &&
                                        data.applications.length > 0 && (
                                            <div>
                                                <h4
                                                    className="text-lg sm:text-xl font-bold mb-4 sm:mb-6"
                                                    style={{
                                                        color: currentColors.textPrimary,
                                                    }}
                                                >
                                                    {t.industrialApplications}
                                                </h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                                                    {data.applications.map(
                                                        (app, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg transition-colors duration-300"
                                                                style={{
                                                                    backgroundColor:
                                                                        theme ===
                                                                        "dark"
                                                                            ? "rgba(150, 150, 150, 0.1)"
                                                                            : "rgba(180, 180, 180, 0.1)",
                                                                }}
                                                            >
                                                                <div className="text-xl sm:text-2xl">
                                                                    {app.icon}
                                                                </div>
                                                                <div>
                                                                    <div
                                                                        className="font-semibold text-base sm:text-lg"
                                                                        style={{
                                                                            color: currentColors.textPrimary,
                                                                        }}
                                                                    >
                                                                        {
                                                                            app.title
                                                                        }
                                                                    </div>
                                                                    <div
                                                                        className="text-xs sm:text-sm mt-0.5"
                                                                        style={{
                                                                            color: currentColors.mediumGray,
                                                                        }}
                                                                    >
                                                                        {
                                                                            app.description
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                </div>

                                <div>
                                    <div className="lg:sticky lg:top-24">
                                        <div
                                            className="p-4 sm:p-6 rounded-xl sm:rounded-2xl mb-6 sm:mb-8 transition-colors duration-300"
                                            style={{
                                                backgroundColor:
                                                    currentColors.cardBackground,
                                                border: `1px solid ${currentColors.border}`,
                                            }}
                                        >
                                            <h3
                                                className="font-bold text-lg sm:text-xl mb-4 sm:mb-6"
                                                style={{
                                                    color: currentColors.textPrimary,
                                                }}
                                            >
                                                {t.samyBusinessAdvantage}
                                            </h3>
                                            <p
                                                className="mb-4 sm:mb-6 text-sm sm:text-base"
                                                style={{
                                                    color: currentColors.mediumGray,
                                                }}
                                            >
                                                {data.samyAdvantage ||
                                                    t.expertTeam}
                                            </p>

                                            <div className="space-y-3 sm:space-y-4">
                                                {[
                                                    {
                                                        title: `${t.lmeListed} - London Metal Exchange Standards`,
                                                        icon: "🏦",
                                                    },
                                                    {
                                                        title: `${t.fullTraceability} - ${t.traceabilityExplained}`,
                                                        icon: "🔍",
                                                    },
                                                    {
                                                        title: `${t.technicalAnalysis} - ${t.guaranteedDelivery}`,
                                                        icon: "⚡",
                                                    },
                                                ].map((item, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center gap-3 p-3 rounded-lg transition-colors duration-300"
                                                        style={{
                                                            backgroundColor:
                                                                theme === "dark"
                                                                    ? "rgba(76, 242, 255, 0.15)"
                                                                    : "rgba(76, 242, 255, 0.1)",
                                                        }}
                                                    >
                                                        <div className="text-lg sm:text-xl">
                                                            {item.icon}
                                                        </div>
                                                        <span
                                                            className="text-xs sm:text-sm font-semibold"
                                                            style={{
                                                                color: currentColors.textPrimary,
                                                            }}
                                                        >
                                                            {item.title}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Visual Comparison Section - Mobile Responsive */}
                    <div className="mb-12 sm:mb-16">
                        <div className="text-center mb-8 sm:mb-12">
                            <h2
                                className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4"
                                style={{ color: currentColors.textPrimary }}
                            >
                                {t.whyChoose}
                            </h2>
                            <p
                                className="max-w-2xl mx-auto text-sm sm:text-base"
                                style={{ color: currentColors.mediumGray }}
                            >
                                {t.whyChooseSubtitle}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                            {/* Standard Supplier */}
                            <div
                                className="p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl text-center h-full transition-colors duration-300"
                                style={{
                                    background:
                                        theme === "dark"
                                            ? `linear-gradient(to bottom, ${currentColors.cardBackground}, ${currentColors.background})`
                                            : `linear-gradient(to bottom, ${currentColors.cardBackground}, ${currentColors.lightGray})`,
                                    border: `1px solid ${currentColors.border}`,
                                }}
                            >
                                <div
                                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                                    style={{
                                        backgroundColor:
                                            theme === "dark"
                                                ? "rgba(150, 150, 150, 0.2)"
                                                : "rgba(180, 180, 180, 0.2)",
                                    }}
                                >
                                    <svg
                                        className="w-6 h-6 sm:w-8 sm:h-8"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        style={{
                                            color: currentColors.mediumGray,
                                        }}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-lg sm:text-xl font-bold mb-3 sm:mb-4"
                                    style={{ color: currentColors.textPrimary }}
                                >
                                    {t.standardSupplier}
                                </h3>
                                <div className="space-y-2 sm:space-y-3 text-left">
                                    {renderFeatures(t.standardSupplierFeatures)}
                                </div>
                            </div>

                            {/* Samy Business - Highlighted */}
                            <div
                                className="p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl text-center relative scale-[1.02] sm:scale-105 z-10 h-full transition-colors duration-300"
                                style={{
                                    background:
                                        theme === "dark"
                                            ? "linear-gradient(135deg, rgba(76, 242, 255, 0.15) 0%, rgba(47, 134, 253, 0.15) 100%)"
                                            : "linear-gradient(135deg, rgba(76, 242, 255, 0.1) 0%, rgba(47, 134, 253, 0.1) 100%)",
                                    border: `2px solid ${currentColors.gradientStart}`,
                                }}
                            >
                                <div
                                    className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 px-3 py-1 sm:px-4 sm:py-1 rounded-full text-white text-xs sm:text-sm font-bold"
                                    style={{
                                        backgroundColor:
                                            currentColors.gradientStart,
                                    }}
                                >
                                    {language === "fr"
                                        ? "SAMY BUSINESS"
                                        : language === "ar"
                                        ? "سامي بيزنس"
                                        : "SAMY BUSINESS"}
                                </div>
                                <div
                                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                                    style={{
                                        backgroundColor:
                                            theme === "dark"
                                                ? "rgba(76, 242, 255, 0.3)"
                                                : "rgba(76, 242, 255, 0.2)",
                                    }}
                                >
                                    <svg
                                        className="w-6 h-6 sm:w-8 sm:h-8"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        style={{
                                            color: currentColors.gradientStart,
                                        }}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-lg sm:text-xl font-bold mb-3 sm:mb-4"
                                    style={{ color: currentColors.textPrimary }}
                                >
                                    {displayShortTitle}
                                </h3>
                                <div className="space-y-2 sm:space-y-3 text-left">
                                    {renderFeatures(t.samyFeatures)}
                                </div>
                            </div>

                            {/* Future Vision */}
                            <div
                                className="p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl text-center h-full transition-colors duration-300"
                                style={{
                                    background:
                                        theme === "dark"
                                            ? `linear-gradient(to bottom, ${currentColors.cardBackground}, ${currentColors.background})`
                                            : `linear-gradient(to bottom, ${currentColors.cardBackground}, ${currentColors.lightGray})`,
                                    border: `1px solid ${currentColors.border}`,
                                }}
                            >
                                <div
                                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                                    style={{
                                        backgroundColor:
                                            theme === "dark"
                                                ? "rgba(47, 134, 253, 0.3)"
                                                : "rgba(47, 134, 253, 0.2)",
                                    }}
                                >
                                    <svg
                                        className="w-6 h-6 sm:w-8 sm:h-8"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        style={{
                                            color: currentColors.gradientStart,
                                        }}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-lg sm:text-xl font-bold mb-3 sm:mb-4"
                                    style={{ color: currentColors.textPrimary }}
                                >
                                    {t.futureVision}
                                </h3>
                                <div className="space-y-2 sm:space-y-3 text-left">
                                    {renderFeatures(t.futureFeatures)}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced CTA Section - Mobile Responsive */}
                    <div ref={contactFormRef} className="mt-12 sm:mt-20">
                        <div
                            className="relative overflow-hidden rounded-xl sm:rounded-3xl p-6 sm:p-8 md:p-12 transition-colors duration-300"
                            style={{
                                background:
                                    theme === "dark"
                                        ? `linear-gradient(135deg, ${currentColors.cardBackground} 0%, ${currentColors.background} 100%)`
                                        : `linear-gradient(135deg, ${currentColors.cardBackground} 0%, ${currentColors.lightGray} 100%)`,
                                border: `1px solid ${currentColors.border}`,
                            }}
                        >
                            <div
                                className="absolute top-0 left-0 w-32 h-32 sm:w-64 sm:h-64 rounded-full -translate-x-1/2 -translate-y-1/2"
                                style={{
                                    backgroundColor:
                                        theme === "dark"
                                            ? "rgba(76, 242, 255, 0.15)"
                                            : "rgba(76, 242, 255, 0.1)",
                                }}
                            ></div>
                            <div
                                className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 rounded-full translate-x-1/3 translate-y-1/3"
                                style={{
                                    backgroundColor:
                                        theme === "dark"
                                            ? "rgba(47, 134, 253, 0.15)"
                                            : "rgba(47, 134, 253, 0.1)",
                                }}
                            ></div>

                            <div className="relative text-center">
                                <h3
                                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6"
                                    style={{ color: currentColors.textPrimary }}
                                >
                                    {t.readyToOptimize}
                                </h3>

                                <p
                                    className="text-base sm:text-lg mb-6 sm:mb-10 max-w-2xl mx-auto"
                                    style={{
                                        color: currentColors.mediumGray,
                                    }}
                                >
                                    {t.expertTeam}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                                    <button
                                        onClick={() => router.push("/devis")}
                                        className="inline-flex items-center justify-center gap-3 sm:gap-4 rounded-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 font-bold text-white shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-sm sm:text-base md:text-lg w-full sm:w-auto"
                                        style={{
                                            background: `linear-gradient(135deg, ${currentColors.gradientStart} 0%, ${currentColors.gradientEnd} 100%)`,
                                            border: "1px solid rgba(255, 255, 255, 0.3)",
                                        }}
                                    >
                                        <svg
                                            className="w-5 h-5 sm:w-6 sm:h-6"
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

                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div
                                            className="hidden sm:block h-8 sm:h-12 w-px"
                                            style={{
                                                backgroundColor:
                                                    theme === "dark"
                                                        ? "rgba(150, 150, 150, 0.2)"
                                                        : "rgba(180, 180, 180, 0.2)",
                                            }}
                                        ></div>
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center justify-center gap-3 sm:gap-4 rounded-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 font-bold transition-all duration-300 text-sm sm:text-base md:text-lg w-full sm:w-auto"
                                            style={{
                                                border: `2px solid ${currentColors.gradientStart}`,
                                                color: currentColors.gradientStart,
                                                backgroundColor:
                                                    theme === "dark"
                                                        ? "rgba(47, 134, 253, 0.1)"
                                                        : "rgba(47, 134, 253, 0.05)",
                                            }}
                                        >
                                            <svg
                                                className="w-5 h-5 sm:w-6 sm:h-6"
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

                                <div
                                    className="mt-6 sm:mt-10 pt-6 sm:pt-8"
                                    style={{
                                        borderTop: `1px solid ${
                                            theme === "dark"
                                                ? "rgba(150, 150, 150, 0.2)"
                                                : "rgba(180, 180, 180, 0.2)"
                                        }`,
                                    }}
                                >
                                    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8">
                                        {t.responseWithin
                                            .split("•")
                                            .map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-2 sm:gap-3"
                                                >
                                                    <div
                                                        className="p-1.5 sm:p-2 rounded-full"
                                                        style={{
                                                            backgroundColor:
                                                                theme === "dark"
                                                                    ? "rgba(76, 242, 255, 0.15)"
                                                                    : "rgba(76, 242, 255, 0.2)",
                                                        }}
                                                    >
                                                        <svg
                                                            className="w-3 h-3 sm:w-4 sm:h-5"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            style={{
                                                                color: currentColors.gradientStart,
                                                            }}
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <span
                                                        className="text-xs sm:text-sm"
                                                        style={{
                                                            color: currentColors.mediumGray,
                                                        }}
                                                    >
                                                        {item.trim()}
                                                    </span>
                                                </div>
                                            ))}
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
