"use client";
import { useRef, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "next/navigation";

export default function NavBar({ children }) {
    const { language } = useLanguage();
    const sideMenuRef = useRef();
    const router = useRouter();

    const translations = {
        fr: {
            about: "Oxyde de Zinc",
            products: "Produits",
            services: "Services",
            contact: "Contactez nous",
            devis: "Demander un devis",
        },
        en: {
            about: "Zinc Oxide",
            products: "Products",
            services: "Services",
            contact: "Contact",
            devis: "Request a Quote",
        },
        ar: {
            about: "أكسيد الزنك",
            products: "المنتجات",
            services: "الخدمات",
            contact: "اتصل بنا",
            devis: "طلب عرض سعر",
        },
    };
    const t = translations[language];
    const isArabic = language === "ar";

    const openMenu = () => {
        if (!sideMenuRef.current) return;
        sideMenuRef.current.style.transform = "translateX(0)";
    };

    const closeMenu = () => {
        if (!sideMenuRef.current) return;
        sideMenuRef.current.style.transform = isArabic
            ? "translateX(-100%)"
            : "translateX(100%)";
    };

    const handleLinkClick = (e, hash) => {
        e.preventDefault();
        if (window.location.pathname !== "/") {
            router.push(`/${hash}`);
        } else {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
        setTimeout(() => closeMenu(), 300);
    };

    const navFlexClass = `${
        isArabic ? "flex-row-reverse " : ""
    }justify-between`;

    return (
        <nav
            className={`flex ${navFlexClass} items-center w-full px-5 fixed lg:px-8 xl:px-[5%] py-4 z-[60] bg-[#38367F] text-white border-b border-[#4E6BA4] shadow-lg`}
        >
            {/* Logo */}
            <div>
                <a href="/" onClick={(e) => handleLinkClick(e, "#top")}>
                    <img
                        src="/logo2.png"
                        alt="logo"
                        className="w-48 cursor-pointer"
                    />
                </a>
            </div>

            {/* Desktop Menu */}
            <ul
                className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/10 border border-white/20 backdrop-blur ${
                    isArabic ? "flex-row-reverse" : ""
                }`}
            >
                <li>
                    <a
                        href="/zinc-oxyde"
                        onClick={(e) => {
                            e.preventDefault();
                            router.push("/zinc-oxyde");
                        }}
                        className="text-white/90 hover:text-[rgb(223,126,60)] transition"
                    >
                        {t.about}
                    </a>
                </li>

                <a
                    href="/produits"
                    onClick={(e) => {
                        e.preventDefault();
                        router.push("/produits");
                    }}
                    className="text-white/90 hover:text-[rgb(223,126,60)] transition"
                >
                    {t.products}
                </a>

                {/* Services — now a direct button */}
                <li>
                    <a
                        href="/#services"
                        onClick={(e) => handleLinkClick(e, "#services")}
                        className="text-white/90 hover:text-[rgb(223,126,60)] transition"
                    >
                        {t.services}
                    </a>
                </li>
            </ul>

            {/* Right Section */}
            <div
                className={`flex ${
                    isArabic ? "flex-row-reverse space-x-reverse" : "space-x-4"
                }`}
            >
                {/* Devis button */}
                <button
                    onClick={() => router.push("/devis")}
                    className={`cursor-pointer hidden lg:flex items-center px-6 font-bold rounded-full border border-[rgb(223,126,60)] bg-[rgb(223,126,60)] text-white hover:bg-white hover:text-[rgb(223,126,60)] transition ${
                        isArabic ? "mr-2" : "ml-2"
                    }`}
                >
                    {t.devis}
                </button>
                <button
                    onClick={() => router.push("/contact")}
                    className={`cursor-pointer hidden lg:flex items-center gap-3 px-6 font-bold rounded-full border border-white/60 bg-transparent text-white hover:bg-white hover:text-[rgb(223,126,60)] transition ${
                        isArabic ? "mr-4" : "ml-4"
                    }`}
                >
                    {t.contact}
                    <img
                        width="28"
                        height="28"
                        src="https://img.icons8.com/parakeet-line/48/mail-contact.png"
                        alt="mail-contact"
                    />
                </button>

                <LanguageSwitcher />
                <ThemeSwitcher />
                {children}
                <button
                    className={`cursor-pointer block md:hidden ${
                        isArabic ? "mr-3" : "ml-3"
                    }`}
                    onClick={openMenu}
                >
                    <img
                        width="50"
                        height="50"
                        src="https://img.icons8.com/ios-filled/50/list.png"
                        alt="list"
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <ul
                ref={sideMenuRef}
                className={`fixed top-0 ${
                    isArabic ? "left-0" : "right-0"
                } w-72 sm:w-80 flex md:hidden flex-col items-stretch gap-4 pt-24 pb-6 px-6 bg-[#38367F] text-white border-[rgb(223,126,60)] border-l-2 shadow-2xl z-50`}
                style={{
                    transform: isArabic
                        ? "translateX(-100%)"
                        : "translateX(100%)",
                    transition: "transform 0.4s ease-out",
                }}
            >
                <div
                    className={`absolute ${
                        isArabic ? "left-5" : "right-5"
                    } top-5`}
                    onClick={closeMenu}
                >
                    <img
                        className="cursor-pointer"
                        width="40"
                        height="40"
                        src="https://img.icons8.com/ios/50/close-window--v1.png"
                        alt="close-window--v1"
                    />
                </div>

                <li className="rounded-2xl w-full text-center px-4 border border-[rgb(223,126,60)] bg-white/95 text-gray-900 shadow-sm">
                    <a
                        href="/zinc-oxyde"
                        onClick={(e) => {
                            e.preventDefault();
                            router.push("/zinc-oxyde");
                            closeMenu();
                        }}
                        className={`text-gray-800 hover:text-[rgb(223,126,60)] block py-4 ${
                            isArabic ? "text-right" : "text-left"
                        }`}
                    >
                        {t.about}
                    </a>
                </li>

                <a
                    href="/produits"
                    onClick={(e) => {
                        e.preventDefault();
                        router.push("/produits");
                        closeMenu();
                    }}
                    className={`text-gray-800 hover:text-[rgb(223,126,60)] block py-4 ${
                        isArabic ? "text-right" : "text-left"
                    }`}
                >
                    {t.products}
                </a>

                <li className="rounded-2xl w-full text-center px-4 border border-[rgb(223,126,60)] bg-white/95 text-gray-900 shadow-sm">
                    <a
                        href="/#services"
                        onClick={(e) => handleLinkClick(e, "#services")}
                        className={`text-gray-800 hover:text-[rgb(223,126,60)] block py-4 ${
                            isArabic ? "text-right" : "text-left"
                        }`}
                    >
                        {t.services}
                    </a>
                </li>

                <li className="rounded-2xl w-full text-center px-4 border border-[rgb(223,126,60)] bg-white/95 text-gray-900 shadow-sm">
                    <a
                        href="/contact"
                        onClick={(e) => {
                            e.preventDefault();
                            router.push("/contact");
                            closeMenu();
                        }}
                        className={`text-gray-800 hover:text-[rgb(223,126,60)] block py-4 ${
                            isArabic ? "text-right" : "text-left"
                        }`}
                    >
                        {t.contact}
                    </a>
                </li>
            </ul>
        </nav>
    );
}
