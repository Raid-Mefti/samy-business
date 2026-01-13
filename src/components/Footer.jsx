"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

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

    // Your color scheme
    const gradientStart = "rgb(47, 134, 253)"; // #2f86fd
    const gradientEnd = "rgb(76, 242, 255)"; // #4cf2ff
    const blue = "rgb(25, 43, 94)"; // #192b5e
    const mediumGray = "rgb(180, 180, 180)";
    const lightGray = "rgb(240, 240, 240)";
    const white = "rgb(255, 255, 255)";
    const darkGray = "rgb(30, 30, 30)";

    const gradientBlue = `linear-gradient(135deg, ${gradientStart} 0%, ${gradientEnd} 100%)`;

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
                    className="group-hover:text-white transition-colors"
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
                    className="group-hover:text-white transition-colors"
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
                    className="group-hover:text-white transition-colors"
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
            className={`pt-10 pb-6 sm:pt-16 sm:pb-8 font-sans ${
                isRTL ? "text-right" : ""
            }`}
            dir={isRTL ? "rtl" : "ltr"}
            style={{
                background: `linear-gradient(135deg, ${blue} 0%, rgb(15, 25, 50) 100%)`,
                color: mediumGray,
            }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* HEADER (Logo & Contact) */}
                <div
                    className={`flex flex-col lg:flex-row justify-between items-start lg:items-center pb-8 mb-8 gap-8 ${
                        isRTL ? "lg:flex-row-reverse" : ""
                    }`}
                    style={{
                        borderBottom: `2px solid ${gradientStart}`,
                    }}
                >
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <img
                                src="/finals/logos/logo3.png"
                                alt="Samy Business"
                                className="w-60 sm:w-70 max-w-full filter brightness-0 invert cursor-pointer"
                            />
                        </Link>
                    </div>

                    {/* Contact Info */}
                    <div className="flex-1 max-w-2xl">
                        <h5
                            className="font-semibold mb-4 uppercase tracking-wider text-base"
                            style={{
                                color: white,
                                background: gradientBlue,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            {t.contact_details}
                        </h5>
                        <p
                            className="mb-4 text-sm sm:text-base"
                            style={{ color: mediumGray }}
                        >
                            {t.contactText}
                        </p>
                        <div
                            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${
                                isRTL ? "sm:text-right" : ""
                            }`}
                        >
                            <div>
                                <p
                                    className="font-medium mb-1 text-sm sm:text-base"
                                    style={{
                                        color: gradientEnd,
                                        fontWeight: "600",
                                    }}
                                >
                                    {t.phone}:
                                </p>
                                <div
                                    className={`space-y-1 ${
                                        isRTL ? "space-y-reverse" : ""
                                    }`}
                                >
                                    <p
                                        className="text-sm sm:text-base hover:text-white transition-colors cursor-pointer"
                                        style={{ color: lightGray }}
                                    >
                                        044-80-84-19
                                    </p>
                                    <p
                                        className="text-sm sm:text-base hover:text-white transition-colors cursor-pointer"
                                        style={{ color: lightGray }}
                                    >
                                        0540-34-28-40
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p
                                    className="font-medium mb-1 text-sm sm:text-base"
                                    style={{
                                        color: gradientEnd,
                                        fontWeight: "600",
                                    }}
                                >
                                    {t.email}:
                                </p>
                                <p
                                    className="hover:text-white transition-colors cursor-pointer text-sm sm:text-base"
                                    style={{ color: lightGray }}
                                >
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
                            <h5
                                className="font-semibold mb-4 uppercase tracking-wider text-sm sm:text-base"
                                style={{
                                    color: white,
                                    background: gradientBlue,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                {col.title}
                            </h5>
                            <ul className="space-y-2 sm:space-y-3">
                                {col.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        {col.title === t.columns.social ? (
                                            <a
                                                href={link.href}
                                                className="group flex items-center gap-2 hover:text-white transition-colors text-sm sm:text-base"
                                                aria-label={link.name}
                                                style={{ color: mediumGray }}
                                            >
                                                <div
                                                    className="group-hover:scale-110 transition-transform duration-300"
                                                    style={{
                                                        color: mediumGray,
                                                    }}
                                                >
                                                    {link.icon}
                                                </div>
                                                <span
                                                    className="group-hover:text-white transition-colors"
                                                    style={{
                                                        color: mediumGray,
                                                    }}
                                                >
                                                    {link.name}
                                                </span>
                                            </a>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className="hover:text-white transition-colors text-sm sm:text-base block py-1"
                                                style={{
                                                    color: lightGray,
                                                    borderBottom:
                                                        "1px solid transparent",
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.color =
                                                        white;
                                                    e.currentTarget.style.borderBottomColor =
                                                        gradientEnd;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.color =
                                                        lightGray;
                                                    e.currentTarget.style.borderBottomColor =
                                                        "transparent";
                                                }}
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* COPYRIGHT */}
                <div
                    className="mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
                    style={{
                        borderTop: `1px solid rgba(76, 242, 255, 0.2)`,
                    }}
                >
                    <p
                        className="text-xs sm:text-sm text-center sm:text-left"
                        style={{ color: mediumGray }}
                    >
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
                                className="group transition-all duration-300 hover:scale-110"
                                aria-label={social.name}
                            >
                                <div
                                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-lg"
                                    style={{
                                        background: "rgba(76, 242, 255, 0.1)",
                                        border: "1px solid rgba(76, 242, 255, 0.3)",
                                    }}
                                >
                                    {React.cloneElement(social.icon, {
                                        className:
                                            "w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300",
                                        style: {
                                            color: lightGray,
                                        },
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
