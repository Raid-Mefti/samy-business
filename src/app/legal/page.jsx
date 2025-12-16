"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function LegalPage() {
    const { language } = useLanguage();

    const translations = {
        fr: {
            title: "Informations légales et Conditions d’utilisation",
            mentionsTitle: "Mentions légales",
            conditionsTitle: "Conditions Générales d’Utilisation",
            mentions: `
**Éditeur du site**  
Samy Business EURL  
Gérant : M. Rabah Bourrai  

Siège social : CITE 108 LOGTS BT 06 A NR 01 SAID HAMDINE BIR MOURAD RAIS ALGER
Capital social : 250 000 000 DZD  
RC NR : 16/00 0977512B07
NIF : 000716097751278
NIS : 000716090133849
ARTICLE : 16098906013

Dépot : CITE FETTEL SECTION 03 GROUPE 317 NR 01 BENI MERED BLIDA
RC NR : 09/04 0977512B07
NIF : 00071609775127809004
NIS : 000716090133849004
ARTICLE : 09251303040

**Contact**  
E-mail : contact@samybusiness.dz  
Téléphone : 044-80-84-19 / 0540-34-28-40 

**Activité**  
Importation, transformation et commercialisation de produits sidérurgiques ferreux et non ferreux.  
Agrément et conformité aux normes internationales (produits cotés LME).  

**Hébergement du site**  
(Société et adresse de l’hébergeur à compléter)  

**Protection des données**  
Les informations personnelles recueillies via le site font l’objet d’un traitement respectant la confidentialité et la réglementation en vigueur.  
L’utilisateur dispose d’un droit d’accès, de modification, de rectification et de suppression de ses données conformément à la loi.  

**Propriété intellectuelle**  
L’ensemble des éléments du site (textes, logos, images, etc.) sont protégés par le droit de la propriété intellectuelle et ne peuvent être utilisés sans autorisation préalable.  

**Responsabilité**  
Samy Business s’efforce d’assurer l’exactitude des informations diffusées sur le site, mais décline toute responsabilité en cas d’erreur, d’omission ou d’indisponibilité temporaire.
      `,
            conditions: `
**1. Objet**  
Les présentes conditions générales d’utilisation (CGU) déterminent les règles relatives à l’accès et à l’utilisation du site.  

**2. Accès au site**  
Le site est accessible gratuitement à tout utilisateur disposant d’un accès Internet.  

**3. Propriété intellectuelle**  
Le site et ses contenus sont protégés par les lois en vigueur. Toute reproduction ou diffusion non autorisée est interdite.  

**4. Compte utilisateur**  
L’utilisateur s’engage à fournir des informations exactes et à préserver la confidentialité de ses identifiants.  

**5. Données personnelles**  
Les données collectées servent à la gestion du site et au respect des obligations légales.  

**6. Utilisation du site**  
Tout usage frauduleux ou malveillant est strictement interdit.  

**7. Contenus publiés**  
Tout contenu publié par l’utilisateur relève de sa seule responsabilité.  

**8. Limitation de responsabilité**  
Samy Business ne saurait être tenue responsable des erreurs, omissions ou indisponibilités du site.  

**9. Liens externes**  
Le site peut contenir des liens vers des sites tiers dont Samy Business n’est pas responsable.  

**10. Cookies et traceurs**  
Des cookies peuvent être utilisés pour améliorer la navigation.  

**11. Modification des CGU**  
Samy Business peut modifier les présentes CGU à tout moment.  

**12. Droit applicable**  
Les présentes CGU sont soumises à la législation algérienne.  

**13. Contact**  
Pour toute question : voir les coordonnées dans les mentions légales.
      `,
        },
        en: {
            title: "Legal Information and Terms of Use",
            mentionsTitle: "Legal Notice",
            conditionsTitle: "Terms and Conditions of Use",
            mentions: `
**Site Editor**  
Samy Business EURL  
Head Office: Quartier Said Hamdine, Algiers  
Share Capital: 250,000,000 DZD  
Registered with the Algiers Trade Register (No. to be completed)  
Tax ID (NIF): (to be completed)  
Manager: Mr. Rabah Bourrai  

**Contact**  
Email: (to be completed)  
Phone: (to be completed)  

**Activity**  
Import, transformation, and commercialization of ferrous and non-ferrous metallurgical products.  
Compliant with international standards (LME-listed products).  

**Hosting**  
(Hosting company and address to be completed)  

**Data Protection**  
Personal data collected through the site are processed confidentially and in compliance with applicable laws.  

**Intellectual Property**  
All site elements (texts, images, logos, etc.) are protected by intellectual property rights.  

**Liability**  
Samy Business strives for accuracy but cannot be held responsible for any errors, omissions, or unavailability.
      `,
            conditions: `
**1. Purpose**  
These Terms define the rules for access and use of the website.  

**2. Access**  
The site is free and accessible to anyone with an Internet connection.  

**3. Intellectual Property**  
All content is protected by law. Unauthorized use is prohibited.  

**4. User Account**  
Users must provide accurate information and maintain confidentiality.  

**5. Personal Data**  
Data are collected for site administration and legal compliance.  

**6. Use of the Site**  
Fraudulent or malicious use is strictly prohibited.  

**7. Published Content**  
Users are solely responsible for their published content.  

**8. Liability Limitation**  
Samy Business cannot be held liable for errors, omissions, or downtime.  

**9. External Links**  
External websites are beyond Samy Business’s responsibility.  

**10. Cookies**  
Cookies may be used to enhance navigation.  

**11. Modifications**  
Samy Business may modify these terms at any time.  

**12. Applicable Law**  
These terms are governed by Algerian law.  

**13. Contact**  
See contact details in the Legal Notice.
      `,
        },
        ar: {
            title: "المعلومات القانونية وشروط الاستخدام",
            mentionsTitle: "المعلومات القانونية",
            conditionsTitle: "شروط الاستخدام العامة",
            mentions: `
**الناشر**  
شركة سامي بزنس ذات المسؤولية المحدودة  
المقر الرئيسي: حي سعيد حمدين، الجزائر  
رأس المال: 250,000,000 دج  
مسجل في السجل التجاري بالجزائر (الرقم يضاف لاحقًا)  
الرقم الجبائي: (يضاف لاحقًا)  
المدير: السيد رابح بوراي  

**الاتصال**  
البريد الإلكتروني: (يضاف لاحقًا)  
الهاتف: (يضاف لاحقًا)  

**النشاط**  
استيراد، تحويل وتسويق المنتجات المعدنية الحديدية وغير الحديدية.  
مطابقة للمعايير الدولية (منتجات مدرجة في LME).  

**استضافة الموقع**  
(يُضاف اسم وعنوان المستضيف لاحقًا)  

**حماية البيانات**  
تُعالج المعلومات الشخصية بسرية ووفقًا للقوانين المعمول بها.  

**الملكية الفكرية**  
جميع عناصر الموقع (النصوص، الصور، الشعارات...) محمية بحقوق الملكية الفكرية.  

**المسؤولية**  
تبذل شركة سامي بزنس جهدها لضمان دقة المعلومات، لكنها لا تتحمل مسؤولية أي أخطاء أو انقطاعات.
      `,
            conditions: `
**1. الغرض**  
تحدد هذه الشروط قواعد الوصول إلى الموقع واستخدامه.  

**2. الوصول إلى الموقع**  
الموقع متاح مجانًا لأي مستخدم يملك اتصالًا بالإنترنت.  

**3. الملكية الفكرية**  
كل محتوى الموقع محمي بموجب القانون.  

**4. الحسابات**  
يجب على المستخدمين تقديم معلومات دقيقة والحفاظ على سرية بياناتهم.  

**5. البيانات الشخصية**  
تُستخدم البيانات لإدارة الموقع والامتثال للقوانين.  

**6. استخدام الموقع**  
يُحظر أي استخدام احتيالي أو ضار للموقع.  

**7. المحتوى المنشور**  
المستخدم وحده مسؤول عن أي محتوى ينشره.  

**8. حدود المسؤولية**  
لا تتحمل سامي بزنس مسؤولية الأخطاء أو التوقف المؤقت للموقع.  

**9. الروابط الخارجية**  
لا تتحمل سامي بزنس مسؤولية المواقع الخارجية.  

**10. الكوكيز**  
قد تُستخدم لتحسين تجربة التصفح.  

**11. تعديل الشروط**  
يحق للشركة تعديل الشروط في أي وقت.  

**12. القانون المعمول به**  
تخضع هذه الشروط للقانون الجزائري.  

**13. الاتصال**  
راجع المعلومات القانونية في الأعلى.
      `,
        },
    };

    const t = translations[language];
    const isRTL = language === "ar";

    return (
        <>
            <Header />

            <div
                className={`min-h-screen bg-gradient-to-b from-base-200 via-base-100 to-base-200 px-6 pb-16 pt-24 ${
                    isRTL ? "text-right" : "text-left"
                }`}
                dir={isRTL ? "rtl" : "ltr"}
            >
                <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl border border-base-300 p-12">
                    {/* Page Title */}
                    <h1 className="text-[rgb(223,126,60)] text-4xl sm:text-5xl font-extrabold mb-14 text-center tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {t.title}
                    </h1>

                    {/* Mentions légales */}
                    <section
                        id="mentions"
                        className="mb-16 scroll-mt-32 border-b border-base-300 pb-12"
                    >
                        <h2 className="text-[rgb(223,126,60)] text-2xl sm:text-3xl font-bold mb-6">
                            {t.mentionsTitle}
                        </h2>
                        <div
                            className="prose prose-neutral max-w-none text-base sm:text-lg leading-relaxed text-base-content/90 [&_strong]:text-[rgb(223,126,60)] [&_strong]:font-semibold [&_br]:my-2"
                            dangerouslySetInnerHTML={{
                                __html: t.mentions.replace(/\n/g, "<br/>"),
                            }}
                        />
                    </section>

                    {/* Conditions Générales */}
                    <section id="conditions" className="scroll-mt-32">
                        <h2 className="text-[rgb(223,126,60)] text-2xl sm:text-3xl font-bold mb-6">
                            {t.conditionsTitle}
                        </h2>
                        <div
                            className="prose prose-neutral max-w-none text-base sm:text-lg leading-relaxed text-base-content/90 [&_strong]:text-[rgb(223,126,60)] [&_strong]:font-semibold [&_br]:my-2"
                            dangerouslySetInnerHTML={{
                                __html: t.conditions.replace(/\n/g, "<br/>"),
                            }}
                        />
                    </section>
                </div>
            </div>

            <Footer />
        </>
    );
}
