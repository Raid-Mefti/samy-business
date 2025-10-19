"use client";
import { useRef } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NavBar() {
    const { language } = useLanguage();
    const sideMenuRef = useRef();

    const translations = {
        fr: {
            about: "A propos de nous",
            products: "Produits",
            services: "services",
            contact: "Contactez nous",
            product1: "produit1",
            product2: "produit2",
            product3: "produit3",
        },
        en: {
            about: "About Us",
            products: "Products",
            services: "Services",
            contact: "Contact",
            product1: "product1",
            product2: "product2",
            product3: "product3",
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

   
    const handleLinkClick = (e) => {
        const targetId = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            
            targetElement.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start' 
            });
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
                className={`flex ${navFlexClass} items-center w-full px-5 fixed lg:px-8 xl:px-[8%] py-4 z-50 bg-base-100/30 backdrop-blur-sm`}
            >
                <div>
                    <a href="#top">
                        <img
                            src="logo2.png"
                            alt="logo"
                            className="w-48 cursor-pointer"
                        />
                    </a>
                </div>
                <ul
                    className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 ${
                        isArabic ? "flex-row-reverse" : ""
                    }`}
                >
                    <li>
                        <a
                            href="#propos"
                            onClick={handleLinkClick}
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                            {t.about}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#produits"
                            onClick={handleLinkClick}
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                            {t.products}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#services"
                            onClick={handleLinkClick}
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                            {t.services}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={handleLinkClick}
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                            {t.contact}
                        </a>
                    </li>
                </ul>
                <div
                    className={`flex ${
                        isArabic
                            ? "flex-row-reverse space-x-reverse"
                            : "space-x-4"
                    }`}
                >
                    <a
                        href="#contact"
                        onClick={handleLinkClick}
                        className={`hidden lg:flex items-center gap-3 px-10 border text-black font-bold border-gray-200 rounded-full ${
                            isArabic ? "mr-4" : "ml-4"
                        }`}
                    >
                        {t.contact}{" "}
                        <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/parakeet-line/48/mail-contact.png"
                            alt="mail-contact"
                        />
                    </a>
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
                {/* Menu latéral pour mobile */}
                <ul
                    ref={sideMenuRef}
                    className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed ${
                        isArabic ? "left-0" : "-right-64"
                    } top-0 bottom-0 w-64 z-50 h-screen bg-gray-300 transition duration-500 transform`}
                    style={{
                        transform: isArabic
                            ? "translateX(-16rem)"
                            : "translateX(16rem)",
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
                    <li>
                        <a
                            href="#propos"
                            onClick={handleLinkClick}
                            className={`text-gray-800 hover:text-blue-600 block py-2 ${
                                isArabic ? "text-right" : ""
                            }`}
                        >
                            {t.about}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#produits"
                            onClick={handleLinkClick}
                            className={`text-gray-800 hover:text-blue-600 block py-2 ${
                                isArabic ? "text-right" : ""
                            }`}
                        >
                            {t.products}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#services"
                            onClick={handleLinkClick}
                            className={`text-gray-800 hover:text-blue-600 block py-2 ${
                                isArabic ? "text-right" : ""
                            }`}
                        >
                            {t.services}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={handleLinkClick}
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