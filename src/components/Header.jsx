"use client";

import { useRef, useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NavBar({ transparentOnTop = false }) {
    const { language } = useLanguage();
    const isArabic = language === "ar";
    const router = useRouter();
    const sideMenuRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    /* ---------------- SCROLL STATE ---------------- */
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        const onScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        checkMobile();
        window.addEventListener("scroll", onScroll);
        window.addEventListener("resize", checkMobile);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    /* ---------------- TRANSLATIONS ---------------- */
    const translations = {
        fr: {
            about: "Oxyde de Zinc",
            products: "Produits",
            aboutus: "À propos de nous",
            contact: "Contactez-nous",
            devis: "Demander un devis",
            home: "Accueil",
        },
        en: {
            about: "Zinc Oxide",
            products: "Products",
            aboutus: "About us",
            contact: "Contact",
            devis: "Request a Quote",
            home: "Home",
        },
        ar: {
            about: "أكسيد الزنك",
            products: "المنتجات",
            aboutus: "نبذة عنا",
            contact: "اتصل بنا",
            devis: "طلب عرض سعر",
            home: "الرئيسية",
        },
    };

    const t = translations[language];

    /* ---------------- MOBILE MENU ---------------- */
    const openMenu = () => {
        setIsMenuOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto";
    };

    /* ---------------- HEADER STYLES ---------------- */
    // Mobile: Always solid background, never transparent
    // Desktop: Transparent effect only when at top (if transparentOnTop prop is true)
    const getHeaderClasses = () => {
        // Always solid background on mobile
        if (isMobile) {
            return "bg-[#1E2438] shadow-lg border-b border-white/10";
        }

        // Desktop behavior
        if (transparentOnTop && !scrolled) {
            return "bg-transparent backdrop-blur-md";
        }

        return "bg-[#1E2438] shadow-lg border-b border-white/10";
    };

    const headerClasses = `
        fixed top-0 w-full z-[60] transition-all duration-300
        ${getHeaderClasses()}
    `;

    const navFlexClass = `${
        isArabic ? "flex-row-reverse" : ""
    } justify-between`;

    return (
        <>
            <nav
                className={`flex ${navFlexClass} items-center px-4 sm:px-5 lg:px-8 xl:px-[5%] py-3 ${headerClasses}`}
            >
                {/* LOGO - Responsive scaling */}
                <Link href="/">
                    <img
                        src="/logo99.png"
                        alt="logo"
                        className="w-40 sm:w-48 md:w-52 lg:w-56 drop-shadow-md"
                    />
                </Link>

                {/* DESKTOP MENU - Unchanged except responsive text */}
                <ul
                    className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-10 py-3
                    bg-white/10 border border-white/20 backdrop-blur
                    ${isArabic ? "flex-row-reverse" : ""}`}
                >
                    <li>
                        <Link
                            href="/zinc-oxyde"
                            className="text-white text-base lg:text-lg font-semibold hover:text-[rgb(223,126,60)] transition"
                        >
                            {t.about}
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/produits"
                            className="text-white text-base lg:text-lg hover:text-[rgb(223,60)] transition"
                        >
                            {t.products}
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/aboutus"
                            className="text-white text-base lg:text-lg hover:text-[rgb(223,126,60)] transition"
                        >
                            {t.aboutus}
                        </Link>
                    </li>
                </ul>

                {/* RIGHT CONTROLS */}
                <div
                    className={`flex items-center ${
                        isArabic
                            ? "flex-row-reverse space-x-reverse"
                            : "space-x-3 sm:space-x-4"
                    }`}
                >
                    {/* DESKTOP BUTTONS - Responsive padding */}
                    <button
                        onClick={() => router.push("/devis")}
                        className="hidden lg:flex items-center px-5 lg:px-6 py-1.5 lg:py-2 font-bold rounded-full
                        bg-[rgb(223,126,60)] text-white text-sm lg:text-base
                        hover:bg-white hover:text-[rgb(223,126,60)] transition"
                    >
                        {t.devis}
                    </button>

                    <button
                        onClick={() => router.push("/contact")}
                        className="hidden lg:flex items-center px-5 lg:px-6 py-1.5 lg:py-2 rounded-full
                        border border-white/40 text-white text-sm lg:text-base
                        hover:bg-[rgb(223,126,60)] hover:border-[rgb(223,126,60)] transition"
                    >
                        {t.contact}
                    </button>

                    {/* SWITCHERS - Better mobile spacing */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <LanguageSwitcher />
                        <ThemeSwitcher />
                    </div>

                    {/* MOBILE MENU BUTTON - Improved design */}
                    <button
                        className="block md:hidden p-2"
                        onClick={openMenu}
                        aria-label="Open menu"
                    >
                        <div className="w-8 h-8 flex flex-col justify-center items-center gap-1.5">
                            <span className="w-6 h-0.5 bg-white rounded-full"></span>
                            <span className="w-6 h-0.5 bg-white rounded-full"></span>
                            <span className="w-6 h-0.5 bg-white rounded-full"></span>
                        </div>
                    </button>
                </div>

                {/* MOBILE MENU OVERLAY */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
                        onClick={closeMenu}
                    />
                )}

                {/* MOBILE MENU - Improved design with always solid background */}
                <div
                    ref={sideMenuRef}
                    className={`fixed top-0 ${
                        isArabic ? "left-0" : "right-0"
                    } w-80 max-w-[85vw] h-full flex md:hidden flex-col gap-6 pt-24 px-6 pb-8
                    bg-[#1E2438] text-white shadow-2xl z-50 transform transition-transform duration-300 ease-out
                    ${isMenuOpen ? "translate-x-0" : "translate-x-full"} ${
                        isArabic && !isMenuOpen ? "translate-x-[-100%]" : ""
                    }`}
                >
                    {/* CLOSE BUTTON - Improved */}
                    <button
                        onClick={closeMenu}
                        className={`absolute top-6 ${
                            isArabic ? "left-6" : "right-6"
                        } w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors`}
                        aria-label="Close menu"
                    >
                        <div className="w-5 h-5 relative">
                            <span className="absolute top-1/2 left-1/2 w-4 h-0.5 bg-white rounded transform -translate-x-1/2 -translate-y-1/2 rotate-45"></span>
                            <span className="absolute top-1/2 left-1/2 w-4 h-0.5 bg-white rounded transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></span>
                        </div>
                    </button>

                    {/* MOBILE MENU ITEMS - Better spacing and design */}
                    <div className="flex flex-col gap-1">
                        <Link
                            href="/"
                            onClick={closeMenu}
                            className="py-4 px-4 rounded-lg hover:bg-white/10 transition-colors text-lg font-medium border-b border-white/10"
                        >
                            {t.home}
                        </Link>

                        <Link
                            href="/zinc-oxyde"
                            onClick={closeMenu}
                            className="py-4 px-4 rounded-lg hover:bg-white/10 transition-colors text-lg font-medium border-b border-white/10"
                        >
                            {t.about}
                        </Link>

                        <Link
                            href="/produits"
                            onClick={closeMenu}
                            className="py-4 px-4 rounded-lg hover:bg-white/10 transition-colors text-lg font-medium border-b border-white/10"
                        >
                            {t.products}
                        </Link>

                        <Link
                            href="/aboutus"
                            onClick={closeMenu}
                            className="py-4 px-4 rounded-lg hover:bg-white/10 transition-colors text-lg font-medium border-b border-white/10"
                        >
                            {t.aboutus}
                        </Link>

                        <Link
                            href="/contact"
                            onClick={closeMenu}
                            className="py-4 px-4 rounded-lg hover:bg-white/10 transition-colors text-lg font-medium border-b border-white/10"
                        >
                            {t.contact}
                        </Link>
                    </div>

                    {/* MOBILE ACTION BUTTONS - Added for mobile */}
                    <div className="mt-6 flex flex-col gap-3">
                        <button
                            onClick={() => {
                                router.push("/devis");
                                closeMenu();
                            }}
                            className="w-full py-3 rounded-lg font-semibold
                            bg-[rgb(223,126,60)] text-white
                            hover:bg-[rgb(223,126,60)]/90 transition-colors shadow-md"
                        >
                            {t.devis}
                        </button>

                        <button
                            onClick={() => {
                                router.push("/contact");
                                closeMenu();
                            }}
                            className="w-full py-3 rounded-lg font-semibold
                            border border-white/40 text-white
                            hover:bg-[rgb(223,126,60)] hover:border-[rgb(223,126,60)] transition-colors"
                        >
                            {t.contact}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}
