"use client";
import { useRef } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "next/navigation";

export default function NavBar() {
    const { language } = useLanguage();
    const sideMenuRef = useRef();
    const router = useRouter();

    const translations = {
        fr: {
            about: "A propos de nous",
            products: "Produits",
            services: "Services",
            contact: "Contactez nous",
            product1: "Produit 1",
            product2: "Produit 2",
            product3: "Produit 3",
        },
        en: {
            about: "About Us",
            products: "Products",
            services: "Services",
            contact: "Contact",
            product1: "Product 1",
            product2: "Product 2",
            product3: "Product 3",
        },
        ar: {
            about: "من نحن",
            products: "المنتجات",
            services: "الخدمات",
            contact: "اتصل بنا",
            product1: "المنتج 1",
            product2: "المنتج 2",
            product3: "المنتج 3",
        },
    };

    const t = translations[language];

    const openMenu = () => {
        sideMenuRef.current.style.transform =
            language === "ar" ? "translateX(16rem)" : "translateX(-16rem)";
    };

    const closeMenu = () => {
        sideMenuRef.current.style.transform =
            language === "ar" ? "translateX(-16rem)" : "translateX(16rem)";
    };

    const handleLinkClick = (e, hash) => {
        e.preventDefault();

        // Always redirect to homepage first
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

        setTimeout(() => {
            closeMenu();
        }, 300);
    };

    const isArabic = language === "ar";
    const navFlexClass = `${
        isArabic ? "flex-row-reverse " : ""
    }justify-between`;

    return (
        <>
            <nav
                className={`flex ${navFlexClass} shadow-md shadow-gray-300/40 border-b-2 border-[rgb(223,126,60)]
 items-center w-full px-5 fixed lg:px-8 xl:px-[5%] py-4 z-50 bg-base-100/30 backdrop-blur-sm`}
            >
                <div>
                    <a href="/" onClick={(e) => handleLinkClick(e, "#top")}>
                        <img
                            src="logo2.png"
                            alt="logo"
                            className="w-48 cursor-pointer"
                        />
                    </a>
                </div>
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
                    <li>
                        <a
                            href="/#services"
                            onClick={(e) => handleLinkClick(e, "#services")}
                            className="text-gray-700 hover:text-[rgb(223,126,60)] transition"
                        >
                            {t.services}
                        </a>
                    </li>
                    {/* <li>
                        <a
                            href="/#contact"
                            onClick={(e) => handleLinkClick(e, "#contact")}
                            className="text-gray-700 hover:text-[rgb(223,126,60)] transition"
                        >
                            {t.contact}
                        </a>
                    </li> */}
                </ul>
                <div
                    className={`flex ${
                        isArabic
                            ? "flex-row-reverse space-x-reverse"
                            : "space-x-4"
                    }`}
                >
                    <button
                        onClick={() => router.push("/contact")}
                        className={`hidden lg:flex items-center gap-3 px-10 border bg-white text-black font-bold border-[rgb(223,126,60)] rounded-full ${
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
                    className={`absolute left-auto flex md:hidden flex-col items-end gap-4 pt-20 pb-5 px-5  ${
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
                    <li className="border-blue-600 border-1 rounded-2xl w-full text-center px-4">
                        <a
                            href="/#services"
                            onClick={(e) => handleLinkClick(e, "#services")}
                            className={`text-gray-800 hover:text-blue-600 block py-2 ${
                                isArabic ? "text-right" : ""
                            }`}
                        >
                            {t.services}
                        </a>
                    </li>
                    <li className="border-blue-600 border-1 rounded-2xl w-full text-center px-4">
                        <a
                            href="/#contact"
                            onClick={(e) => handleLinkClick(e, "#contact")}
                            className={`text-gray-800 hover:text-blue-600 block py-2 ${
                                isArabic ? "text-right" : ""
                            }`}
                        >
                            {t.contact}
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
