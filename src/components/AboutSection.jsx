"use client";
import React, { useState, useEffect, createContext, useContext } from "react";
// LIGNE ORIGINALE : import { useLanguage } from "@/contexts/LanguageContext";

// --- SIMULATION DU CONTEXTE DE LANGUE POUR ASSURER LA COMPILATION ---
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
    // Récupère la langue actuelle (e.g., 'fr', 'en', 'ar' ou 'fr-CA', 'ar-DZ')
    const { language: rawLanguage } = useLanguage();

    const sanitizedLanguage = rawLanguage
        ? String(rawLanguage).toLowerCase().trim().split("-")[0]
        : "fr"; // Si la langue est null/undefined, utilise 'fr'

    const [isExpanded, setIsExpanded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const translations = {
        fr: {
            title: "Samy Business EURL",
            description:
                "Samy Business EURL, fondée en 2007 à Alger par son gérant unique M. Rabah Bourrai, est spécialisée dans l’importation, la transformation et la commercialisation de produits sidérurgiques et métaux ferreux et non-ferreux.\n\nFort d’une riche expérience de plus de 15 ans, notre entreprise s’appuie sur une équipe dynamique d’une quinzaine de collaborateurs, organisée autour de départements clefs : direction générale, administration, finances, commercial/marketing, logistique et informatique.",
            additionalText:
                "La société importe et distribue divers produits métallurgiques (acier, inox, plomb, aluminium, laiton, cuivre, zinc, etc.), conformes aux normes européennes et sélectionnés auprès de fournisseurs locaux et internationaux reconnus. Tous nos produits sont cotés à la London Metal Exchange (LME).\n\nSamy Business s’est imposée comme un opérateur majeur grâce :\n- À la maîtrise technique et commerciale du secteur\n- À un vaste réseau de partenaires et fournisseurs en Europe\n- À une culture d’innovation et d’amélioration continue\n- À un engagement fort pour la satisfaction client et la qualité\n\nNotre vision : participer activement au développement économique national en offrant une valeur ajoutée locale, des services fiables et une organisation agile, orientée vers l’excellence et l’innovation.\n\nNous accompagnons nos clients industriels dans tous leurs besoins d’approvisionnement, de transformation et d’expertise technique, grâce à des solutions sur mesure et un parc de véhicules et d’outils technologiques adaptés.\n\nNos valeurs : satisfaction client, qualité, fiabilité, agilité, innovation et perfection.\n\nSamy Business, un partenaire de confiance pour tous vos projets industriels en métaux et produits sidérurgiques.",
            buttonShow: "Plus d'infos",
            buttonHide: "Moins d'infos",
            close: "Fermer",
        },
        en: {
            title: "Samy Business EURL",
            description:
                "Samy Business EURL, founded in Algiers in 2007 by its sole manager, Mr. Rabah Bourrai, specializes in the import, transformation, and commercialization of iron and steel products, as well as ferrous and non-ferrous metals.\n\nBacked by over 15 years of rich experience, our company relies on a dynamic team of about fifteen employees, organized around key departments: general management, administration, finance, commercial/marketing, logistics, and IT.",
            additionalText:
                "The company imports and distributes various metallurgical products (steel, stainless steel, lead, aluminum, brass, copper, zinc, etc.), which comply with European standards and are selected from recognized local and international suppliers. All our products are quoted on the London Metal Exchange (LME).\n\nSamy Business has established itself as a major operator thanks to:\n- Technical and commercial mastery of the sector\n- A vast network of partners and suppliers in Europe\n- A culture of innovation and continuous improvement\n- A strong commitment to customer satisfaction and quality\n\nOur vision is to actively participate in national economic development by offering local added value, reliable services, and an agile organization, oriented towards excellence and innovation.\n\nWe support our industrial clients in all their supply, transformation, and technical expertise needs, thanks to tailor-made solutions and a fleet of adapted vehicles and technological tools.\n\nOur values are: customer satisfaction, quality, reliability, agility, innovation, and perfection.\n\nSamy Business, a trusted partner for all your industrial projects in metals and steel products.",
            buttonShow: "More info",
            buttonHide: "Less info",
            close: "Close",
        },
        ar: {
            title: "سامي بيزنس (ش.ذ.م.م)",
            description:
                "شركة سامي بيزنس ذات المسؤولية المحدودة (EURL)، تأسست في الجزائر العاصمة عام 2007 على يد مسيرها الوحيد السيد رباح بوراي، وهي متخصصة في استيراد، تحويل، وتسويق المنتجات الحديدية والمعدنية الفلزية وغير الفلزية.\n\nمع خبرة غنية تفوق 15 عامًا، تعتمد شركتنا على فريق ديناميكي يضم حوالي خمسة عشر متعاونًا، منظمين حول أقسام رئيسية: الإدارة العامة، الإدارة، المالية، التجارة/التسويق، اللوجستيك، وتكنولوجيا المعلومات.",
            additionalText:
                "تستورد الشركة وتوزع منتجات معدنية متنوعة (الصلب، الفولاذ المقاوم للصدأ، الرصاص، الألومنيوم، النحاس الأصفر، النحاس، الزنك، إلخ)، المتوافقة مع المعايير الأوروبية والمختارة من موردين محليين ودوليين معترف بهم. جميع منتجاتنا مسعّرة في بورصة لندن للمعادن (LME).\n\nرسخت سامي بيزنس مكانتها كفاعل رئيسي بفضل:\n- الإتقان التقني والتجاري للقطاع\n- شبكة واسعة من الشركاء والموردين في أوروبا\n- ثقافة الابتكار والتحسين المستمر\n- والالتزام القوي برضا العملاء والجودة\n\nرؤيتنا: المشاركة بفعالية في التنمية الاقتصادية الوطنية من خلال تقديم قيمة مضافة محلية، خدمات موثوقة، وتنظيم مرن وموجه نحو التميز والابتكار.\n\nندعم عملائنا الصناعيين في جميع احتياجاتهم من التموين، التحويل، والخبرة التقنية، بفضل حلول مصممة خصيصًا وأسطول من المركبات والأدوات التكنولوجية المناسبة.\n\nقيمنا هي: رضا العملاء، الجودة، الموثوقية، المرونة، الابتكار، والكمال.\n\nسامي بيزنس، شريك موثوق لجميع مشاريعكم الصناعية في المعادن والمنتجات الحديدية.",
            buttonShow: "المزيد من المعلومات",
            buttonHide: "أقل معلومات",
            close: "إغلاق",
        },
    };

    const getTranslation = (lang) => {
        // La sélection se fait sur la langue nettoyée (code de base)
        if (translations[lang]) {
            return translations[lang];
        }
        // Si la langue nettoyée n'est toujours pas une clé valide, on utilise le français par défaut.
        return translations.fr;
    };

    const t = getTranslation(sanitizedLanguage);
    // -----------------------------------------------------------------

    const handleButtonClick = () => {
        if (isMobile) {
            setIsModalOpen(true);
        } else {
            setIsExpanded(!isExpanded);
        }
    };

    const buttonText = isMobile
        ? t.buttonShow
        : isExpanded
        ? t.buttonHide
        : t.buttonShow;

    return (
        <>
            <div
                className={`hero bg-base-100 min-h-96 mt-12 mb-12 text-base-content rounded-lg shadow-xl ${
                    sanitizedLanguage === "ar" ? "text-right" : ""
                }`}
            >
                <div
                    className={`hero-content flex-col py-8 ${
                        sanitizedLanguage === "ar"
                            ? "lg:flex-row-reverse"
                            : "lg:flex-row-reverse"
                    }`}
                >
                    {/* Placeholder for an image or logo [rgb(223,126,60)] */}
                    <div className="w-full lg:w-1/3 flex justify-center items-center p-4  ">
                        <svg
                            className="w-32 h-32  opacity-70 text-[rgb(223,126,60)]"
                            fill="none"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12 2V22"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M2 7L12 12L22 7"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M2 17L12 12L22 17"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M7 9L17 14"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <div className="flex flex-col justify-center w-full lg:w-2/3">
                        <h1 className="text-[rgb(223,126,60)] text-4xl md:text-6xl font-bold">
                            {t.title}
                        </h1>
                        <p
                            // Les deux premiers paragraphes (description) sont entièrement visibles par défaut.
                            className={`py-6 text-lg md:text-2xl leading-relaxed whitespace-pre-line`}
                        >
                            {t.description}
                        </p>

                        {/* Affiche le texte additionnel si non-mobile ET isExpanded est true */}
                        {!isMobile && isExpanded && (
                            <p className="py-6 text-xl leading-relaxed border-t border-base-200 mt-4 pt-4 whitespace-pre-line">
                                {t.additionalText}
                            </p>
                        )}
                        <button
                            className="btn btn-primary bg-[rgb(223,126,60)] border-0 mt-4 rounded-full shadow-md hover:shadow-lg transition-shadow self-start"
                            // Aligner le bouton correctement pour RTL/LTR
                            style={{
                                alignSelf:
                                    sanitizedLanguage === "ar"
                                        ? "flex-end"
                                        : "flex-start",
                            }}
                            onClick={handleButtonClick}
                        >
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal for Mobile */}
            {isModalOpen && (
                <dialog className="modal modal-open">
                    <div
                        className={`modal-box max-w-4xl rounded-lg shadow-2xl bg-base-100 ${
                            sanitizedLanguage === "ar"
                                ? "text-right"
                                : "text-left"
                        }`}
                    >
                        <h3 className="font-bold text-2xl mb-4">{t.title}</h3>
                        {/* Utilisation de whitespace-pre-line dans la modale pour le texte complet */}
                        <p className="py-4 text-lg leading-relaxed whitespace-pre-line">
                            {t.description}
                        </p>
                        <p className="py-4 text-lg leading-relaxed whitespace-pre-line">
                            {t.additionalText}
                        </p>
                        <div
                            className={`modal-action ${
                                sanitizedLanguage === "ar"
                                    ? "justify-start"
                                    : "justify-end"
                            }`}
                        >
                            <button
                                className="btn btn-primary rounded-full bg-[rgb(223,126,60)]"
                                onClick={() => setIsModalOpen(false)}
                            >
                                {t.close}
                            </button>
                        </div>
                    </div>
                </dialog>
            )}
        </>
    );
}
