"use client";

import { useRef, useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NavBar({ children }) {
    const { language } = useLanguage();
    const isArabic = language === "ar";
    const router = useRouter();
    const sideMenuRef = useRef(null);

    /* ---------------- SCROLL STATE ---------------- */
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* ---------------- TRANSLATIONS ---------------- */
    const translations = {
        fr: {
            about: "Oxyde de Zinc",
            products: "Produits",
            aboutus: "À propos de nous",
            contact: "Contactez nous",
            devis: "Demander un devis",
        },
        en: {
            about: "Zinc Oxide",
            products: "Products",
            aboutus: "About us",
            contact: "Contact",
            devis: "Request a Quote",
        },
        ar: {
            about: "أكسيد الزنك",
            products: "المنتجات",
            aboutus: "نبذة عنا",
            contact: "اتصل بنا",
            devis: "طلب عرض سعر",
        },
    };

    const t = translations[language];

    /* ---------------- MOBILE MENU ---------------- */
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

    /* ---------------- HEADER STYLES ---------------- */
    const headerClasses = `
        fixed top-0 w-full z-[60] transition-all duration-300
        ${
            scrolled
                ? "bg-[#1E2438] shadow-lg border-b border-white/10"
                : "bg-transparent backdrop-blur-md"
        }
    `;

    const navFlexClass = `${
        isArabic ? "flex-row-reverse " : ""
    }justify-between`;

    return (
        <nav
            className={`flex ${navFlexClass} items-center px-5 lg:px-8 xl:px-[5%] py-4 ${headerClasses}`}
        >
            {/* LOGO */}
            <div>
                <Link href="/">
                    <img
                        src="/logo99.png"
                        alt="logo"
                        className="w-56 drop-shadow-md"
                    />
                </Link>
            </div>

            {/* DESKTOP MENU */}
            <ul
                className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-10 py-3
                bg-white/10 border border-white/20 backdrop-blur
                ${isArabic ? "flex-row-reverse" : ""}`}
            >
                <li>
                    <Link
                        href="/zinc-oxyde"
                        className="text-white text-lg font-bold hover:text-[rgb(223,126,60)] transition"
                    >
                        {t.about}
                    </Link>
                </li>

                <li>
                    <Link
                        href="/produits"
                        className="text-white text-lg hover:text-[rgb(223,126,60)] transition"
                    >
                        {t.products}
                    </Link>
                </li>

                <li>
                    <Link
                        href="/aboutus"
                        className="text-white text-lg hover:text-[rgb(223,126,60)] transition"
                    >
                        {t.aboutus}
                    </Link>
                </li>
            </ul>

            {/* RIGHT CONTROLS */}
            <div
                className={`flex items-center ${
                    isArabic ? "flex-row-reverse space-x-reverse" : "space-x-4"
                }`}
            >
                {/* QUOTE BUTTON */}
                <button
                    onClick={() => router.push("/devis")}
                    className="hidden lg:flex items-center px-6 py-2 font-bold rounded-full
                    bg-[rgb(223,126,60)] text-white border border-[rgb(223,126,60)]
                    hover:bg-white hover:text-[rgb(223,126,60)] transition"
                >
                    {t.devis}
                </button>

                {/* CONTACT */}
                <button
                    onClick={() => router.push("/contact")}
                    className="hidden lg:flex items-center gap-2 px-6 py-2 rounded-full
                    border border-white/40 text-white
                    hover:bg-[rgb(223,126,60)] hover:border-[rgb(223,126,60)] transition"
                >
                    {t.contact}
                </button>

                <LanguageSwitcher />
                <ThemeSwitcher />

                {/* MOBILE MENU BUTTON */}
                <button className="block md:hidden" onClick={openMenu}>
                    <img
                        width="40"
                        height="40"
                        src="https://img.icons8.com/ios-filled/50/menu--v1.png"
                        alt="menu"
                    />
                </button>
            </div>

            {/* MOBILE MENU */}
            <ul
                ref={sideMenuRef}
                className={`fixed top-0 ${
                    isArabic ? "left-0" : "right-0"
                } w-72 h-full flex md:hidden flex-col gap-6 pt-24 px-6
                bg-[#1E2438] text-white shadow-2xl z-50`}
                style={{
                    transform: isArabic
                        ? "translateX(-100%)"
                        : "translateX(100%)",
                    transition: "transform 0.4s ease",
                }}
            >
                <button
                    onClick={closeMenu}
                    className={`absolute top-5 ${
                        isArabic ? "left-5" : "right-5"
                    }`}
                >
                    ✕
                </button>

                <Link href="/zinc-oxyde" onClick={closeMenu}>
                    {t.about}
                </Link>

                <Link href="/produits" onClick={closeMenu}>
                    {t.products}
                </Link>

                <Link href="/aboutus" onClick={closeMenu}>
                    {t.aboutus}
                </Link>

                <Link href="/contact" onClick={closeMenu}>
                    {t.contact}
                </Link>
            </ul>
        </nav>
    );
}
