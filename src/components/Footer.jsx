"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Comp7() {
    const { language } = useLanguage();

    const translations = {
        fr: {
            legal: "Informations légales",
            privacy: "Politique de confidentialité",
            terms: "Conditions générales",
            contact_title: "Nous Contacter",
            contactText: "Pour toutes demandes de sourcing et de partenariat :",
            products: "Nos Produits",
            about: "À propos de Samy Business",
            contact: "Contactez-nous",
            rights: "Tous droits réservés.",
            columns: {
                legal: "Mentions Légales",
                social: "Suivez-nous",
                products: "Produits",
                about: "L'entreprise",
            },
            contact_details: "Coordonnées",
            phone: "Téléphone",
            email: "E-mail",
        },
        en: {
            legal: "Legal Information",
            privacy: "Privacy Policy",
            terms: "Terms and Conditions",
            contact_title: "Contact Us",
            contactText: "For all sourcing and partnership requests:",
            products: "Our Products",
            about: "About Samy Business",
            contact: "Contact Us",
            rights: "All rights reserved.",
            columns: {
                legal: "Legal",
                social: "Follow Us",
                products: "Products",
                about: "Company",
            },
            contact_details: "Contact Details",
            phone: "Phone",
            email: "Email",
        },
        ar: {
            legal: "المعلومات القانونية",
            privacy: "سياسة الخصوصية",
            terms: "الشروط والأحكام",
            contact_title: "تواصل معنا",
            contactText: "لجميع طلبات التوريد والشراكات:",
            products: "منتجاتنا",
            about: "من نحن",
            contact: "اتصل بنا",
            rights: "جميع الحقوق محفوظة.",
            columns: {
                legal: "البيانات القانونية",
                social: "تابعنا",
                products: "المنتجات",
                about: "الشركة",
            },
            contact_details: "معلومات الاتصال",
            phone: "الهاتف",
            email: "البريد الإلكتروني",
        },
    };

    const t = translations[language];
    const isRTL = language === "ar";

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
                    className="text-gray-400 group-hover:text-[rgb(223,126,60)] transition-colors"
                >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
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
                    className="text-gray-400 group-hover:text-[rgb(223,126,60)] transition-colors"
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
                    className="text-gray-400 group-hover:text-[rgb(223,126,60)] transition-colors"
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
            title: t.columns.products,
            links: [
                { name: t.products, href: "/produits" },
                { name: "Zinc Oxide", href: "/zinc-oxyde" },
            ],
        },
        {
            title: t.columns.about,
            links: [
                { name: t.about, href: "/aboutus" },
                { name: t.contact, href: "/contact" },
            ],
        },
        {
            title: t.columns.legal,
            links: [
                { name: t.legal, href: "/legal" },
                { name: t.terms, href: "/legal#conditions" },
                { name: t.privacy, href: "/legal#privacy" },
            ],
        },
        {
            title: t.columns.social,
            links: socialLinks.map((link) => ({
                name: link.name,
                href: link.href,
                icon: link.icon,
            })),
        },
    ];

    return (
        <footer
            className={`bg-gray-900 text-gray-300 pt-10 pb-6 sm:pt-16 sm:pb-8 font-sans ${
                isRTL ? "text-right" : ""
            }`}
            dir={isRTL ? "rtl" : "ltr"}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* HEADER (Logo & Contact) */}
                <div
                    className={`flex flex-col lg:flex-row justify-between items-start lg:items-center pb-8 border-b border-[rgb(223,126,60)] mb-8 gap-8 ${
                        isRTL ? "lg:flex-row-reverse" : ""
                    }`}
                >
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img
                            src="/logo99.png"
                            alt="Samy Business"
                            className="w-60 sm:w-70 max-w-full"
                        />
                    </div>

                    {/* Contact Info */}
                    <div className="flex-1 max-w-2xl">
                        <h5 className="font-semibold text-white mb-4 uppercase tracking-wider text-base">
                            {t.contact_details}
                        </h5>
                        <p className="text-gray-400 mb-4 text-sm sm:text-base">
                            {t.contactText}
                        </p>
                        <div
                            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${
                                isRTL ? "sm:text-right" : ""
                            }`}
                        >
                            <div>
                                <p className="text-[rgb(223,126,60)] font-medium mb-1 text-sm sm:text-base">
                                    {t.phone}:
                                </p>
                                <div
                                    className={`space-y-1 ${
                                        isRTL ? "space-y-reverse" : ""
                                    }`}
                                >
                                    <p className="text-gray-400 text-sm sm:text-base">
                                        044-80-84-19
                                    </p>
                                    <p className="text-gray-400 text-sm sm:text-base">
                                        0540-34-28-40
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p className="text-[rgb(223,126,60)] font-medium mb-1 text-sm sm:text-base">
                                    {t.email}:
                                </p>
                                <p className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                                    contact@samybusiness.dz
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* COLUMNS */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10">
                    {linkColumns.map((col, index) => (
                        <div key={index} className="col-span-1">
                            <h5 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm sm:text-base">
                                {col.title}
                            </h5>
                            <ul className="space-y-2 sm:space-y-3">
                                {col.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        {col.title === t.columns.social ? (
                                            <a
                                                href={link.href}
                                                className="group flex items-center gap-2 hover:text-[rgb(223,126,60)] transition-colors text-gray-400 text-sm sm:text-base"
                                                aria-label={link.name}
                                            >
                                                {link.icon}
                                                <span className="group-hover:text-[rgb(223,126,60)] transition-colors">
                                                    {link.name}
                                                </span>
                                            </a>
                                        ) : (
                                            <a
                                                href={link.href}
                                                className="hover:text-[rgb(223,126,60)] transition-colors text-gray-400 text-sm sm:text-base"
                                            >
                                                {link.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* COPYRIGHT */}
                <div className="mt-8 pt-6 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
                        &copy; {new Date().getFullYear()} Samy Business.{" "}
                        {t.rights}
                    </p>

                    {/* Social Icons - Horizontal for mobile */}
                    <div
                        className={`flex items-center gap-4 ${
                            isRTL ? "flex-row-reverse" : ""
                        }`}
                    >
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                className="text-gray-400 hover:text-[rgb(223,126,60)] transition-colors"
                                aria-label={social.name}
                            >
                                <div className="w-6 h-6 sm:w-7 sm:h-7">
                                    {React.cloneElement(social.icon, {
                                        className: "w-full h-full",
                                    })}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
