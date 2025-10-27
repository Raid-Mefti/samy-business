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
    const [openDropdown, setOpenDropdown] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState(false);

    const translations = {
        fr: {
            about: "A propos de nous",
            products: "Produits",
            services: "Services",
            contact: "Contactez nous",
            consulting: "Conseil",
            sales: "Vente",
        },
        en: {
            about: "About Us",
            products: "Products",
            services: "Services",
            contact: "Contact",
            consulting: "Consulting",
            sales: "Sales",
        },
        ar: {
            about: "من نحن",
            products: "المنتجات",
            services: "الخدمات",
            contact: "اتصل بنا",
            consulting: "استشارات",
            sales: "مبيعات",
        },
    };

    const t = translations[language];

    const openMenu = () => {
        if (!sideMenuRef.current) return;
        sideMenuRef.current.style.transform =
            language === "ar" ? "translateX(16rem)" : "translateX(-16rem)";
    };

    const closeMenu = () => {
        if (!sideMenuRef.current) return;
        sideMenuRef.current.style.transform =
            language === "ar" ? "translateX(-16rem)" : "translateX(16rem)";
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

    const isArabic = language === "ar";
    const navFlexClass = `${
        isArabic ? "flex-row-reverse " : ""
    }justify-between`;

    return (
        <nav
            className={`flex ${navFlexClass} shadow-md shadow-gray-300/40 border-b-2 border-[rgb(223,126,60)]
 items-center w-full px-5 fixed lg:px-8 xl:px-[5%] py-4 z-50 bg-base-100/30 backdrop-blur-sm`}
        >
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
                className={`border-1 border-[rgb(223,126,60)] hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 ${
                    isArabic ? "flex-row-reverse" : ""
                }`}
            >
                <li>
                    <a
                        href="/#propos"
                        onClick={(e) => handleLinkClick(e, "#propos")}
                        className="text-gray-700 hover:text-[rgb(223,126,60)] transition"
                    >
                        {t.about}
                    </a>
                </li>

                <li>
                    <a
                        href="/#produits"
                        onClick={(e) => handleLinkClick(e, "#produits")}
                        className="text-gray-700 hover:text-[rgb(223,126,60)] transition"
                    >
                        {t.products}
                    </a>
                </li>

                {/* Services Dropdown: parent <li> controls hover state — menu sits flush under button */}
                <li
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(true)}
                    onMouseLeave={() => setOpenDropdown(false)}
                    aria-haspopup="true"
                    aria-expanded={openDropdown}
                >
                    <button
                        type="button"
                        className="inline-flex items-center gap-1 text-gray-700 hover:text-[rgb(223,126,60)] transition px-2 py-1"
                    >
                        {t.services}
                        <svg
                            className={`w-4 h-4 transition-transform ${
                                openDropdown ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {/* IMPORTANT: top-full and mt-0 -> flush placement (no gap) */}
                    {openDropdown && (
                        <ul
                            className={`absolute top-full mt-0 ${
                                isArabic ? "right-0" : "left-0"
                            } w-48 bg-white shadow-md rounded-lg border border-gray-200 z-50`}
                            role="menu"
                        >
                            <li>
                                <a
                                    href="/#consulting"
                                    onClick={(e) =>
                                        handleLinkClick(e, "#consulting")
                                    }
                                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                                    role="menuitem"
                                >
                                    {t.consulting}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#sales"
                                    onClick={(e) =>
                                        handleLinkClick(e, "#sales")
                                    }
                                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                                    role="menuitem"
                                >
                                    {t.sales}
                                </a>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>

            {/* Right Section */}
            <div
                className={`flex ${
                    isArabic ? "flex-row-reverse space-x-reverse" : "space-x-4"
                }`}
            >
                <button
                    onClick={() => router.push("/contact")}
                    className={`cursor-pointer hidden lg:flex items-center gap-3 px-10 border hover:text-[rgb(223,126,60)] bg-white text-black font-bold border-[rgb(223,126,60)] rounded-full ${
                        isArabic ? "mr-4" : "ml-4"
                    }`}
                >
                    {t.contact}
                    <img
                        width="48"
                        height="48"
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
                className={`absolute left-auto flex md:hidden flex-col items-end gap-4 pt-20 pb-5 px-5 ${
                    isArabic ? "left-0" : "-right-64"
                } top-0 z-50 bg-blue-100 transition duration-500 transform`}
                style={{
                    transform: isArabic
                        ? "translateX(100%)"
                        : "translateX(100%)",
                }}
            >
                <div
                    className={`absolute ${
                        isArabic ? "left-6" : "right-6"
                    } top-6`}
                    onClick={closeMenu}
                >
                    <img
                        className="cursor-pointer"
                        width="50"
                        height="50"
                        src="https://img.icons8.com/ios/50/close-window--v1.png"
                        alt="close-window--v1"
                    />
                </div>

                <li className="border-blue-600 border-1 rounded-2xl w-full text-center px-4">
                    <a
                        href="/#propos"
                        onClick={(e) => handleLinkClick(e, "#propos")}
                        className={`text-gray-800 hover:text-blue-600 block py-2 ${
                            isArabic ? "text-right" : ""
                        }`}
                    >
                        {t.about}
                    </a>
                </li>

                <li className="border-blue-600 border-1 rounded-2xl w-full text-center px-4">
                    <a
                        href="/#produits"
                        onClick={(e) => handleLinkClick(e, "#produits")}
                        className={`text-gray-800 hover:text-blue-600 block py-2 ${
                            isArabic ? "text-right" : ""
                        }`}
                    >
                        {t.products}
                    </a>
                </li>

                {/* Mobile Dropdown */}
                <li className="border-blue-600 border-1 rounded-2xl w-full text-center px-4">
                    <button
                        onClick={() => setMobileDropdown(!mobileDropdown)}
                        className={`w-full text-gray-800 hover:text-blue-600 py-2 flex justify-between items-center ${
                            isArabic ? "flex-row-reverse" : ""
                        }`}
                    >
                        {t.services}
                        <span>{mobileDropdown ? "▲" : "▼"}</span>
                    </button>
                    {mobileDropdown && (
                        <ul className="pl-4">
                            <li>
                                <a
                                    href="/#consulting"
                                    onClick={(e) =>
                                        handleLinkClick(e, "#consulting")
                                    }
                                    className="block py-2 text-gray-700 hover:text-blue-600"
                                >
                                    {t.consulting}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#sales"
                                    onClick={(e) =>
                                        handleLinkClick(e, "#sales")
                                    }
                                    className="block py-2 text-gray-700 hover:text-blue-600"
                                >
                                    {t.sales}
                                </a>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
}
