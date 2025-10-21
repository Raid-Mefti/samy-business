// src/components/Footer.tsx

import Image from "next/image";
import Link from "next/link";

// Data for social links
const socialLinks = [
  // 💡 Placeholder: You would use real icon components or SVGs here
  { name: "LinkedIn", icon: "in", href: "#" },
  { name: "Twitter", icon: "tw", href: "#" },
  { name: "Facebook", icon: "fb", href: "#" },
  { name: "Instagram", icon: "ig", href: "#" },
];

export default function Comp7() {
  // Simple language-aware text selection using document's lang
  const lang =
    typeof document !== "undefined" ? document.documentElement.lang : "fr";
  const t = {
    fr: {
      legal: "Informations légales",
      privacy: "Politique de confidentialité",
      terms: "Conditions générales",
      contacts: "Contacts:",
      contactText:
        "Nous contacter pour toutes demandes de sourcing et de partenariat.",
      nav: "Navigation:",
      products: "Nos Produits",
      about: "À propos",
      contact: "Contactez-nous",
      rights: "Tous droits réservés.",
    },
    en: {
      legal: "Legal information",
      privacy: "Privacy policy",
      terms: "Terms and conditions",
      contacts: "Contacts:",
      contactText: "Contact us for any sourcing and partnership requests.",
      nav: "Navigation:",
      products: "Our Products",
      about: "About Us",
      contact: "Contact Us",
      rights: "All rights reserved.",
    },
    ar: {
      legal: "المعلومات القانونية",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      contacts: "جهات الاتصال:",
      contactText: "تواصل معنا لطلبات التوريد والشراكات.",
      nav: "التنقل:",
      products: "منتجاتنا",
      about: "من نحن",
      contact: "اتصل بنا",
      rights: "جميع الحقوق محفوظة.",
    },
  }[lang] || {
    legal: "Informations légales",
    privacy: "Politique de confidentialité",
    terms: "Conditions générales",
    contacts: "Contacts:",
    contactText:
      "Nous contacter pour toutes demandes de sourcing et de partenariat.",
    nav: "Navigation:",
    products: "Nos Produits",
    about: "À propos",
    contact: "Contactez-nous",
    rights: "Tous droits réservés.",
  };
  return (
    // Black background with a subtle primary color top border
    <footer
      className={`bg-base-300 border-t border-base-content/20 text-base-content py-1  ${
        lang === "ar" ? "text-right" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Logo and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-base-content/20 pb-8 mb-8">
          <div
            className={`flex items-center ${
              lang === "ar" ? "space-x-reverse space-x-3" : "space-x-3"
            } mb-6 md:mb-0`}
          >
            <Image
              className="mt-4"
              src="logo.svg"
              alt="Samy Business Logo"
              width={160}
              height={40}
            />
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-label={link.name}
                // Using the brand accent color for social icons
                className="text-2xl text-primary hover:text-primary-focus transition-colors"
              >
                {/* 💡 Placeholder: Replace with actual icon component */}
                {link.icon.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Row: Info and Contact Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* Column 1: Information */}
          <div>
            <h5 className="font-semibold text-base-content mb-3">
              Samy Business:
            </h5>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-primary">
                  {t.legal}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  {t.privacy}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  {t.terms}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Contacts */}
          <div>
            <h5 className="font-semibold text-base-content mb-3">
              {t.contacts}
            </h5>
            <p>{t.contactText}</p>
            <p className="mt-2 text-primary font-medium">
              contact@samybusiness.dz
            </p>
          </div>

          {/* Column 3: Navigation Quick Links */}
          <div>
            <h5 className="font-semibold text-base-content mb-3">{t.nav}</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="hover:text-primary">
                  {t.products}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className={`text-center text-xs text-base-content/60 mt-12`}>
          &copy; {new Date().getFullYear()} Samy Business. {t.rights}
        </p>
      </div>
    </footer>
  );
}
