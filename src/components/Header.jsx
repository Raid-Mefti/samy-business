"use client";

import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
    const { language } = useLanguage();

    const translations = {
        fr: {
            about: "À propos de nous",
            products: "Produits",
            services: "Services",
            contact: "Contact",
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

    return (
        <div
            className={`sticky top-0 z-1 w-full backdrop-blur-sm navbar bg-base-100/30 dow-lg ${
                language === "ar" ? "flex-row-reverse" : ""
            }`}
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-primary btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    ></ul>
                </div>
                <a>
                    <img
                        className="ml-4 sm:ml-6 lg:ml-8 h-24"
                        src="logo2.png"
                        alt="Samy"
                    />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="ml-10 menu menu-horizontal px-1 text-base-content text-2xl gap-10">
                    <li>
                        <a>{t.about}</a>
                    </li>
                    <li>
                        <details>
                            <summary>{t.products}</summary>
                            <ul className="p-2 bg-base-200">
                                <li>
                                    <a>{t.product1}</a>
                                </li>
                                <li>
                                    <a>{t.product2}</a>
                                </li>
                                <li>
                                    <a>{t.product3}</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <a>{t.services}</a>
                    </li>
                    <li>
                        <a>{t.contact}</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end mr-4 sm:mr-6 lg:mr-8 ">
                <LanguageSwitcher />
                <ThemeSwitcher />
            </div>
        </div>
    );
}
