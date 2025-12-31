"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
    FaFileContract,
    FaShieldAlt,
    FaBook,
    FaGlobe,
    FaLock,
    FaCopyright,
    FaUserShield,
    FaGavel,
    FaBuilding,
    FaPhone,
    FaArrowUp,
    FaHome,
    FaPrint,
} from "react-icons/fa";

export default function LegalPage() {
    const { language } = useLanguage();

    const translations = {
        fr: {
            title: "Informations Légales & Conditions d'Utilisation",
            subtitle: "Transparence et confiance au cœur de nos relations",
            mentionsTitle: "Mentions Légales",
            conditionsTitle: "Conditions Générales",
            contactTitle: "Coordonnées",
            companyInfo: "Informations Société",
            navigation: "Navigation",
            goToTop: "Retour en haut",
            backToHome: "Retour à l'accueil",
            print: "Imprimer cette page",
            mentions: {
                editor: "Éditeur du site",
                company: "Samy Business EURL",
                manager: "Gérant",
                managerName: "M. Rabah Bourrai",
                headOffice: "Siège social",
                headOfficeAddress:
                    "CITE 108 LOGTS BT 06 A NR 01 SAID HAMDINE BIR MOURAD RAIS ALGER",
                capital: "Capital social",
                capitalAmount: "250 000 000 DZD",
                rc: "RC N°",
                rcNumber: "16/00 0977512B07",
                nif: "NIF",
                nifNumber: "000716097751278",
                nis: "NIS",
                nisNumber: "000716090133849",
                article: "Article",
                articleNumber: "16098906013",
                deposit: "Dépôt",
                depositAddress:
                    "CITE FETTEL SECTION 03 GROUPE 317 NR 01 BENI MERED BLIDA",
                depositRc: "RC N° Dépôt",
                depositRcNumber: "09/04 0977512B07",
                depositNif: "NIF Dépôt",
                depositNifNumber: "00071609775127809004",
                depositNis: "NIS Dépôt",
                depositNisNumber: "000716090133849004",
                depositArticle: "Article Dépôt",
                depositArticleNumber: "09251303040",
                contact: "Contact",
                email: "E-mail",
                phone: "Téléphone",
                phoneNumbers: "044-80-84-19 / 0540-34-28-40",
                activity: "Activité",
                activityDesc:
                    "Importation, transformation et commercialisation de produits sidérurgiques ferreux et non ferreux. Agrément et conformité aux normes internationales (produits cotés LME).",
                hosting: "Hébergement du site",
                hostingInfo: "(Société et adresse de l'hébergeur à compléter)",
                dataProtection: "Protection des données",
                dataProtectionDesc:
                    "Les informations personnelles recueillies via le site font l'objet d'un traitement respectant la confidentialité et la réglementation en vigueur. L'utilisateur dispose d'un droit d'accès, de modification, de rectification et de suppression de ses données.",
                ip: "Propriété intellectuelle",
                ipDesc: "L'ensemble des éléments du site (textes, logos, images, etc.) sont protégés par le droit de la propriété intellectuelle et ne peuvent être utilisés sans autorisation préalable.",
                liability: "Responsabilité",
                liabilityDesc:
                    "Samy Business s'efforce d'assurer l'exactitude des informations diffusées sur le site, mais décline toute responsabilité en cas d'erreur, d'omission ou d'indisponibilité temporaire.",
            },
            conditions: [
                {
                    title: "1. Objet",
                    desc: "Les présentes conditions générales d'utilisation (CGU) déterminent les règles relatives à l'accès et à l'utilisation du site.",
                },
                {
                    title: "2. Accès au site",
                    desc: "Le site est accessible gratuitement à tout utilisateur disposant d'un accès Internet.",
                },
                {
                    title: "3. Propriété intellectuelle",
                    desc: "Le site et ses contenus sont protégés par les lois en vigueur. Toute reproduction ou diffusion non autorisée est interdite.",
                },
                {
                    title: "4. Compte utilisateur",
                    desc: "L'utilisateur s'engage à fournir des informations exactes et à préserver la confidentialité de ses identifiants.",
                },
                {
                    title: "5. Données personnelles",
                    desc: "Les données collectées servent à la gestion du site et au respect des obligations légales.",
                },
                {
                    title: "6. Utilisation du site",
                    desc: "Tout usage frauduleux ou malveillant est strictement interdit.",
                },
                {
                    title: "7. Contenus publiés",
                    desc: "Tout contenu publié par l'utilisateur relève de sa seule responsabilité.",
                },
                {
                    title: "8. Limitation de responsabilité",
                    desc: "Samy Business ne saurait être tenue responsable des erreurs, omissions ou indisponibilités du site.",
                },
                {
                    title: "9. Liens externes",
                    desc: "Le site peut contenir des liens vers des sites tiers dont Samy Business n'est pas responsable.",
                },
                {
                    title: "10. Cookies et traceurs",
                    desc: "Des cookies peuvent être utilisés pour améliorer la navigation.",
                },
                {
                    title: "11. Modification des CGU",
                    desc: "Samy Business peut modifier les présentes CGU à tout moment.",
                },
                {
                    title: "12. Droit applicable",
                    desc: "Les présentes CGU sont soumises à la législation algérienne.",
                },
                {
                    title: "13. Contact",
                    desc: "Pour toute question : voir les coordonnées dans les mentions légales.",
                },
            ],
        },
        en: {
            title: "Legal Information & Terms of Use",
            subtitle:
                "Transparency and trust at the heart of our relationships",
            mentionsTitle: "Legal Notice",
            conditionsTitle: "Terms and Conditions",
            contactTitle: "Contact Details",
            companyInfo: "Company Information",
            navigation: "Navigation",
            goToTop: "Back to top",
            backToHome: "Back to home",
            print: "Print this page",
            mentions: {
                editor: "Site Editor",
                company: "Samy Business EURL",
                manager: "Manager",
                managerName: "Mr. Rabah Bourrai",
                headOffice: "Head Office",
                headOfficeAddress:
                    "CITE 108 LOGTS BT 06 A NR 01 SAID HAMDINE BIR MOURAD RAIS ALGER",
                capital: "Share Capital",
                capitalAmount: "250,000,000 DZD",
                rc: "RC No.",
                rcNumber: "16/00 0977512B07",
                nif: "NIF",
                nifNumber: "000716097751278",
                nis: "NIS",
                nisNumber: "000716090133849",
                article: "Article",
                articleNumber: "16098906013",
                deposit: "Deposit Office",
                depositAddress:
                    "CITE FETTEL SECTION 03 GROUPE 317 NR 01 BENI MERED BLIDA",
                depositRc: "Deposit RC No.",
                depositRcNumber: "09/04 0977512B07",
                depositNif: "Deposit NIF",
                depositNifNumber: "00071609775127809004",
                depositNis: "Deposit NIS",
                depositNisNumber: "000716090133849004",
                depositArticle: "Deposit Article",
                depositArticleNumber: "09251303040",
                contact: "Contact",
                email: "Email",
                phone: "Phone",
                phoneNumbers: "044-80-84-19 / 0540-34-28-40",
                activity: "Activity",
                activityDesc:
                    "Import, transformation and commercialization of ferrous and non-ferrous metallurgical products. Certification and compliance with international standards (LME-listed products).",
                hosting: "Hosting",
                hostingInfo: "(Hosting company and address to be completed)",
                dataProtection: "Data Protection",
                dataProtectionDesc:
                    "Personal information collected through the site is processed in accordance with confidentiality and applicable regulations. The user has the right to access, modify, correct and delete their data.",
                ip: "Intellectual Property",
                ipDesc: "All elements of the site (texts, logos, images, etc.) are protected by intellectual property law and may not be used without prior authorization.",
                liability: "Liability",
                liabilityDesc:
                    "Samy Business strives to ensure the accuracy of information published on the site, but declines any responsibility in case of error, omission or temporary unavailability.",
            },
            conditions: [
                {
                    title: "1. Purpose",
                    desc: "These Terms and Conditions (T&C) define the rules for accessing and using the website.",
                },
                {
                    title: "2. Site Access",
                    desc: "The site is freely accessible to any user with an Internet connection.",
                },
                {
                    title: "3. Intellectual Property",
                    desc: "The site and its contents are protected by applicable laws. Any unauthorized reproduction or distribution is prohibited.",
                },
                {
                    title: "4. User Account",
                    desc: "The user undertakes to provide accurate information and to preserve the confidentiality of their credentials.",
                },
                {
                    title: "5. Personal Data",
                    desc: "Collected data are used for site management and compliance with legal obligations.",
                },
                {
                    title: "6. Site Use",
                    desc: "Any fraudulent or malicious use is strictly prohibited.",
                },
                {
                    title: "7. Published Content",
                    desc: "Any content published by the user is their sole responsibility.",
                },
                {
                    title: "8. Liability Limitation",
                    desc: "Samy Business cannot be held responsible for errors, omissions or unavailability of the site.",
                },
                {
                    title: "9. External Links",
                    desc: "The site may contain links to third-party websites for which Samy Business is not responsible.",
                },
                {
                    title: "10. Cookies and Trackers",
                    desc: "Cookies may be used to enhance navigation.",
                },
                {
                    title: "11. T&C Modifications",
                    desc: "Samy Business may modify these T&C at any time.",
                },
                {
                    title: "12. Applicable Law",
                    desc: "These T&C are governed by Algerian law.",
                },
                {
                    title: "13. Contact",
                    desc: "For any questions: see contact details in the legal notice.",
                },
            ],
        },
        ar: {
            title: "المعلومات القانونية وشروط الاستخدام",
            subtitle: "الشفافية والثقة في صميم علاقاتنا",
            mentionsTitle: "المعلومات القانونية",
            conditionsTitle: "الشروط العامة",
            contactTitle: "معلومات الاتصال",
            companyInfo: "معلومات الشركة",
            navigation: "التنقل",
            goToTop: "العودة للأعلى",
            backToHome: "العودة للرئيسية",
            print: "طباعة هذه الصفحة",
            mentions: {
                editor: "ناشر الموقع",
                company: "شركة سامي بيزنس ذات المسؤولية المحدودة",
                manager: "المدير",
                managerName: "السيد رباح بوراي",
                headOffice: "المقر الرئيسي",
                headOfficeAddress:
                    "حي 108 سكنات بناية 06 أ رقم 01 سعيد حمدين بير مراد رايس الجزائر",
                capital: "رأس المال",
                capitalAmount: "250,000,000 دينار جزائري",
                rc: "رقم السجل التجاري",
                rcNumber: "16/00 0977512B07",
                nif: "الرقم الجبائي",
                nifNumber: "000716097751278",
                nis: "رقم التعريف الإحصائي",
                nisNumber: "000716090133849",
                article: "المادة",
                articleNumber: "16098906013",
                deposit: "مكتب الإيداع",
                depositAddress:
                    "حي فتال القسم 03 مجموعة 317 رقم 01 بني مراد البليدة",
                depositRc: "رقم س.ت الإيداع",
                depositRcNumber: "09/04 0977512B07",
                depositNif: "الرقم الجبائي للإيداع",
                depositNifNumber: "00071609775127809004",
                depositNis: "رقم الت.إ للإيداع",
                depositNisNumber: "000716090133849004",
                depositArticle: "مادة الإيداع",
                depositArticleNumber: "09251303040",
                contact: "الاتصال",
                email: "البريد الإلكتروني",
                phone: "الهاتف",
                phoneNumbers: "044-80-84-19 / 0540-34-28-40",
                activity: "النشاط",
                activityDesc:
                    "استيراد، تحويل وتسويق المنتجات المعدنية الحديدية وغير الحديدية. شهادة ومطابقة للمعايير الدولية (منتجات مدرجة في بورصة لندن للمعادن).",
                hosting: "استضافة الموقع",
                hostingInfo: "(يتم إكمال اسم وعنوان شركة الاستضافة)",
                dataProtection: "حماية البيانات",
                dataProtectionDesc:
                    "المعلومات الشخصية المجمعة عبر الموقع تخضع لمعالجة تحترم السرية والأنظمة المعمول بها. للمستخدم حق الوصول، التعديل، التصحيح والحذف لبياناته.",
                ip: "الملكية الفكرية",
                ipDesc: "جميع عناصر الموقع (النصوص، الشعارات، الصور، الخ) محمية بقانون الملكية الفكرية ولا يمكن استخدامها دون إذن مسبق.",
                liability: "المسؤولية",
                liabilityDesc:
                    "تبذل سامي بيزنس جهدها لضمان دقة المعلومات المنشورة على الموقع، لكنها ترفض أي مسؤولية في حالة خطأ، حذف أو عدم توفر مؤقت.",
            },
            conditions: [
                {
                    title: "1. الغرض",
                    desc: "تحدد هذه الشروط العامة للاستخدام القواعد المتعلقة بالوصول واستخدام الموقع.",
                },
                {
                    title: "2. الوصول للموقع",
                    desc: "الموقع متاح مجانًا لأي مستخدم لديه اتصال بالإنترنت.",
                },
                {
                    title: "3. الملكية الفكرية",
                    desc: "الموقع ومحتواه محمي بموجب القوانين السارية. أي نسخ أو نشر غير مصرح به ممنوع.",
                },
                {
                    title: "4. حساب المستخدم",
                    desc: "يتعهد المستخدم بتقديم معلومات دقيقة والحفاظ على سرية بيانات اعتماده.",
                },
                {
                    title: "5. البيانات الشخصية",
                    desc: "البيانات المجمعة تخدم إدارة الموقع واحترام الالتزامات القانونية.",
                },
                {
                    title: "6. استخدام الموقع",
                    desc: "أي استخدام احتيالي أو ضار ممنوع منعًا باتًا.",
                },
                {
                    title: "7. المحتوى المنشور",
                    desc: "أي محتوى ينشره المستخدم يقع تحت مسؤوليته الخاصة.",
                },
                {
                    title: "8. تحديد المسؤولية",
                    desc: "لا يمكن إلزام سامي بيزنس بمسؤولية الأخطاء، الحذف أو عدم التوفر المؤقت للموقع.",
                },
                {
                    title: "9. الروابط الخارجية",
                    desc: "قد يحتوي الموقع على روابط لمواقع خارجية لا تتحمل سامي بيزنس مسؤوليتها.",
                },
                {
                    title: "10. الكوكيز والمتعقبات",
                    desc: "يمكن استخدام الكوكيز لتحسين التصفح.",
                },
                {
                    title: "11. تعديل الشروط",
                    desc: "يمكن لسامي بيزنس تعديل هذه الشروط في أي وقت.",
                },
                {
                    title: "12. القانون المعمول به",
                    desc: "هذه الشروط تخضع للقانون الجزائري.",
                },
                {
                    title: "13. الاتصال",
                    desc: "لأي استفسار: راجع معلومات الاتصال في البيانات القانونية.",
                },
            ],
        },
    };

    const t = translations[language];
    const isRTL = language === "ar";

    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            <Header />

            <div
                className={`min-h-screen bg-base-100 pt-32 pb-16 ${
                    isRTL ? "text-right" : "text-left"
                }`}
                dir={isRTL ? "rtl" : "ltr"}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(223,126,60)] mb-4">
                            {t.title}
                        </h1>
                        <p className="text-base-content/70 text-lg sm:text-xl max-w-3xl mx-auto mb-8">
                            {t.subtitle}
                        </p>
                    </div>

                    {/* Quick Navigation - Non-sticky */}
                    <div className="bg-base-200 rounded-2xl p-6 mb-10 border border-base-300">
                        <h3 className="text-lg font-semibold text-base-content mb-4 flex items-center gap-2">
                            <FaBook className="text-[rgb(223,126,60)]" />
                            {t.navigation}
                        </h3>
                        <div
                            className={`flex flex-wrap gap-3 ${
                                isRTL ? "justify-end" : "justify-start"
                            }`}
                        >
                            <a
                                href="#mentions"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-100 hover:bg-base-300 border border-base-300 transition-colors text-sm font-medium"
                            >
                                <FaFileContract />
                                {t.mentionsTitle}
                            </a>
                            <a
                                href="#conditions"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-100 hover:bg-base-300 border border-base-300 transition-colors text-sm font-medium"
                            >
                                <FaGavel />
                                {t.conditionsTitle}
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-100 hover:bg-base-300 border border-base-300 transition-colors text-sm font-medium"
                            >
                                <FaPhone />
                                {t.contactTitle}
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Main Content */}
                        <div className="flex-1 space-y-8">
                            {/* Legal Notice Section */}
                            <section id="mentions" className="scroll-mt-32">
                                <div className="bg-base-100 rounded-2xl shadow-lg border border-base-300 p-6 sm:p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 rounded-xl bg-[rgb(223,126,60)]/10">
                                            <FaFileContract className="text-2xl text-[rgb(223,126,60)]" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-base-content">
                                            {t.mentionsTitle}
                                        </h2>
                                    </div>

                                    <div className="space-y-8">
                                        {/* Company Info */}
                                        <div className="bg-base-200 rounded-xl p-6 border border-base-300">
                                            <h3 className="text-lg font-semibold text-base-content mb-4 flex items-center gap-2">
                                                <FaBuilding className="text-[rgb(223,126,60)]" />
                                                {t.companyInfo}
                                            </h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <p className="text-sm text-base-content/60 mb-1">
                                                        {t.mentions.company}
                                                    </p>
                                                    <p className="font-medium text-base-content">
                                                        {t.mentions.managerName}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-base-content/60 mb-1">
                                                        {t.mentions.capital}
                                                    </p>
                                                    <p className="font-medium text-base-content">
                                                        {
                                                            t.mentions
                                                                .capitalAmount
                                                        }
                                                    </p>
                                                </div>
                                                <div className="sm:col-span-2">
                                                    <p className="text-sm text-base-content/60 mb-1">
                                                        {t.mentions.headOffice}
                                                    </p>
                                                    <p className="font-medium text-base-content">
                                                        {
                                                            t.mentions
                                                                .headOfficeAddress
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Contact Info */}
                                        <div
                                            id="contact"
                                            className="scroll-mt-32 bg-base-200 rounded-xl p-6 border border-base-300"
                                        >
                                            <h3 className="text-lg font-semibold text-base-content mb-4 flex items-center gap-2">
                                                <FaPhone className="text-[rgb(223,126,60)]" />
                                                {t.contactTitle}
                                            </h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <p className="text-sm text-base-content/60 mb-1">
                                                        {t.mentions.phone}
                                                    </p>
                                                    <p className="font-medium text-base-content">
                                                        {
                                                            t.mentions
                                                                .phoneNumbers
                                                        }
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-base-content/60 mb-1">
                                                        {t.mentions.email}
                                                    </p>
                                                    <p className="font-medium text-base-content">
                                                        contact@samybusiness.dz
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Activity */}
                                        <div className="bg-base-200 rounded-xl p-6 border border-base-300">
                                            <h3 className="text-lg font-semibold text-base-content mb-4 flex items-center gap-2">
                                                <FaGlobe className="text-[rgb(223,126,60)]" />
                                                {t.mentions.activity}
                                            </h3>
                                            <p className="text-base-content/80">
                                                {t.mentions.activityDesc}
                                            </p>
                                        </div>

                                        {/* Data Protection */}
                                        <div className="bg-base-200 rounded-xl p-6 border border-base-300">
                                            <h3 className="text-lg font-semibold text-base-content mb-4 flex items-center gap-2">
                                                <FaLock className="text-[rgb(223,126,60)]" />
                                                {t.mentions.dataProtection}
                                            </h3>
                                            <p className="text-base-content/80">
                                                {t.mentions.dataProtectionDesc}
                                            </p>
                                        </div>

                                        {/* Intellectual Property */}
                                        <div className="bg-base-200 rounded-xl p-6 border border-base-300">
                                            <h3 className="text-lg font-semibold text-base-content mb-4 flex items-center gap-2">
                                                <FaCopyright className="text-[rgb(223,126,60)]" />
                                                {t.mentions.ip}
                                            </h3>
                                            <p className="text-base-content/80">
                                                {t.mentions.ipDesc}
                                            </p>
                                        </div>

                                        {/* Liability */}
                                        <div className="bg-base-200 rounded-xl p-6 border border-base-300">
                                            <h3 className="text-lg font-semibold text-base-content mb-4 flex items-center gap-2">
                                                <FaUserShield className="text-[rgb(223,126,60)]" />
                                                {t.mentions.liability}
                                            </h3>
                                            <p className="text-base-content/80">
                                                {t.mentions.liabilityDesc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Terms and Conditions Section */}
                            <section id="conditions" className="scroll-mt-32">
                                <div className="bg-base-100 rounded-2xl shadow-lg border border-base-300 p-6 sm:p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 rounded-xl bg-[rgb(223,126,60)]/10">
                                            <FaShieldAlt className="text-2xl text-[rgb(223,126,60)]" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-base-content">
                                            {t.conditionsTitle}
                                        </h2>
                                    </div>

                                    <div className="space-y-6">
                                        {t.conditions.map(
                                            (condition, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-base-200 rounded-xl p-6 border border-base-300 hover:border-[rgb(223,126,60)]/30 transition-colors"
                                                >
                                                    <h4 className="text-lg font-semibold text-[rgb(223,126,60)] mb-2">
                                                        {condition.title}
                                                    </h4>
                                                    <p className="text-base-content/80">
                                                        {condition.desc}
                                                    </p>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Right Column - Sticky Navigation Card */}
                        <div className="lg:w-80">
                            <div className="sticky top-32 space-y-6">
                                {/* Quick Info Card */}
                                <div className="bg-base-100 rounded-2xl shadow-lg border border-base-300 p-6">
                                    <h3 className="text-lg font-semibold text-base-content mb-4">
                                        {t.companyInfo}
                                    </h3>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm text-base-content/60">
                                                {t.mentions.rc}
                                            </p>
                                            <p className="font-medium text-base-content">
                                                {t.mentions.rcNumber}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-base-content/60">
                                                {t.mentions.nif}
                                            </p>
                                            <p className="font-medium text-base-content">
                                                {t.mentions.nifNumber}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-base-content/60">
                                                {t.mentions.nis}
                                            </p>
                                            <p className="font-medium text-base-content">
                                                {t.mentions.nisNumber}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-base-content/60">
                                                {t.mentions.article}
                                            </p>
                                            <p className="font-medium text-base-content">
                                                {t.mentions.articleNumber}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons - Sticky Navigation */}
                                <div className="bg-base-100 rounded-2xl shadow-lg border border-base-300 p-6">
                                    <h3 className="text-lg font-semibold text-base-content mb-4">
                                        {t.navigation}
                                    </h3>
                                    <div className="space-y-3">
                                        <button
                                            onClick={() =>
                                                window.scrollTo({
                                                    top: 0,
                                                    behavior: "smooth",
                                                })
                                            }
                                            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-base-200 hover:bg-base-300 border border-base-300 transition-colors text-sm font-medium text-base-content"
                                        >
                                            <FaArrowUp />
                                            {t.goToTop}
                                        </button>
                                        <a
                                            href="/"
                                            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-base-200 hover:bg-base-300 border border-base-300 transition-colors text-sm font-medium text-base-content"
                                        >
                                            <FaHome />
                                            {t.backToHome}
                                        </a>
                                        <button
                                            onClick={handlePrint}
                                            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[rgb(223,126,60)] hover:bg-[rgb(223,126,60)]/90 text-white transition-colors text-sm font-medium"
                                        >
                                            <FaPrint />
                                            {t.print}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
