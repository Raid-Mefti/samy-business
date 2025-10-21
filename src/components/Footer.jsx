"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Comp7() {
    const { language } = useLanguage(); // ✅ use global language
    // Remove internal useState — it’s now global

    const translations = {
        fr: {
            legal: "Informations légales",
            privacy: "Politique de confidentialité",
            terms: "Conditions générales",
            contact_title: "Nous Contacter",
            contactText: "Pour toutes demandes de sourcing et de partenariat :",
            nav: "Navigation & Liens Rapides",
            products: "Nos Produits",
            about: "À propos de Samy Business",
            contact: "Contactez-nous",
            rights: "Tous droits réservés.",
            columns: {
                c1: "Liens Utiles",
                c2: "Nos Activités",
                c3: "Services & Support",
            },
        },
        en: {
            legal: "Legal Information",
            privacy: "Privacy Policy",
            terms: "Terms and Conditions",
            contact_title: "Contact Us",
            contactText: "For all sourcing and partnership requests:",
            nav: "Navigation & Quick Links",
            products: "Our Products",
            about: "About Samy Business",
            contact: "Contact Us",
            rights: "All rights reserved.",
            columns: {
                c1: "Quick Links",
                c2: "Our Activities",
                c3: "Services & Support",
            },
        },
        ar: {
            legal: "المعلومات القانونية",
            privacy: "سياسة الخصوصية",
            terms: "الشروط والأحكام",
            contact_title: "تواصل معنا",
            contactText: "لجميع طلبات التوريد والشراكات:",
            nav: "التنقل والروابط السريعة",
            products: "منتجاتنا",
            about: "من نحن",
            contact: "اتصل بنا",
            rights: "جميع الحقوق محفوظة.",
            columns: {
                c1: "روابط مفيدة",
                c2: "أنشطتنا",
                c3: "الخدمات والدعم",
            },
        },
    };

    const t = translations[language];

    const socialLinks = [
        {
            name: "LinkedIn",
            href: "#",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            ),
        },
        {
            name: "Twitter / X",
            href: "#",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-15.3 11.1 1.7.1 3.5-.1 5.4-1.2C7.2 16.5 4 11.2 4 4" />
                </svg>
            ),
        },
        {
            name: "Facebook",
            href: "#",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
            ),
        },
        {
            name: "Instagram",
            href: "#",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
            ),
        },
    ];

    const linkColumns = [
        {
            title: t.columns.c1,
            links: [
                { name: t.products, href: "/products" },
                { name: t.about, href: "/about" },
                { name: t.contact, href: "/contact" },
            ],
        },
        {
            title: t.columns.c2,
            links: [
                { name: "Sourcing Matières", href: "#" },
                { name: "Partenariats B2B", href: "#" },
                { name: "Logistique", href: "#" },
            ],
        },
        {
            title: t.columns.c3,
            links: [
                { name: "Assistance Technique", href: "#" },
                { name: "FAQ", href: "#" },
                { name: "Espace Presse", href: "#" },
            ],
        },
    ];

    return (
        <footer
            className={`bg-gray-900 text-gray-300 py-10 sm:py-16 font-sans relative ${
                language === "ar" ? "text-right" : ""
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* HEADER (Logo + Socials) */}
                <div
                    className={`flex flex-col md:flex-row justify-between items-center pb-8 border-b border-[rgb(223,126,60)] mb-8 ${
                        language === "ar" ? "md:flex-row-reverse" : ""
                    }`}
                >
                    <div
                        className={`flex items-center space-x-2 ${
                            language === "ar" ? "space-x-reverse" : ""
                        } mb-6 md:mb-0`}
                    >
                        <svg
                            className="w-6 h-6 text-[rgb(223,126,60)]"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z" />
                        </svg>
                        <span className="text-2xl font-extrabold text-white uppercase tracking-widest">
                            Samy Business
                        </span>
                    </div>

                    <div className="flex space-x-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                aria-label={link.name}
                                className="text-[rgb(223,126,60)] hover:text-white transition-colors"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* COLUMNS */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
                    {linkColumns.map((col, index) => (
                        <div key={index} className="col-span-1">
                            <h5 className="font-semibold text-white mb-4 uppercase tracking-wider text-base">
                                {col.title}
                            </h5>
                            <ul className="space-y-3">
                                {col.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.href}
                                            className="hover:[rgb(223,126,60)] transition-colors text-gray-400"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact / Legal */}
                    <div className="col-span-2 md:col-span-1">
                        <h5 className="font-semibold text-white mb-4 uppercase tracking-wider text-base">
                            {t.contact_title}
                        </h5>
                        <ul className="space-y-3">
                            <li>
                                <p className="text-gray-400">{t.contactText}</p>
                            </li>
                            <li>
                                <a
                                    href="mailto:contact@samybusiness.dz"
                                    className="text-[rgb(223,126,60)] font-medium hover:text-white transition-colors"
                                >
                                    contact@samybusiness.dz
                                </a>
                            </li>
                            <li className="pt-2">
                                <h5 className="font-semibold text-white mb-2 uppercase tracking-wider text-base">
                                    {t.legal}
                                </h5>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-[rgb(223,126,60)] transition-colors text-gray-400"
                                >
                                    {t.privacy}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-[rgb(223,126,60)] transition-colors text-gray-400"
                                >
                                    {t.terms}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* COPYRIGHT */}
                <div className="mt-16 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p className="text-gray-500 mb-3 md:mb-0">
                        &copy; {new Date().getFullYear()} Samy Business.{" "}
                        {t.rights}
                    </p>
                    <div
                        className={`flex items-center space-x-2 ${
                            language === "ar" ? "space-x-reverse" : ""
                        }`}
                    >
                        <span className="text-[rgb(223,126,60)] font-bold text-sm tracking-wider">
                            BUILDING SOLUTIONS
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
