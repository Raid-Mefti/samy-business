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
    return (
        // Black background with a subtle primary color top border
        <footer className="bg-black border-t border-brand-primary/20 text-gray-400 py-1">
            <div className="container mx-auto px-4">
                {/* Top Row: Logo and Social Links */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-8 mb-8">
                    <div className="flex items-center space-x-3 mb-6 md:mb-0">
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
                                className="text-2xl text-brand-accent hover:text-brand-primary transition-colors"
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
                        <h5 className="font-semibold text-site-text mb-3">
                            Samy Business:
                        </h5>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-brand-accent"
                                >
                                    Informations légales
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-brand-accent"
                                >
                                    Politique de confidentialité
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-brand-accent"
                                >
                                    Conditions générales
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Contacts */}
                    <div>
                        <h5 className="font-semibold text-site-text mb-3">
                            Contacts:
                        </h5>
                        <p>
                            Nous contacter pour toutes demandes de sourcing et
                            de partenariat.
                        </p>
                        <p className="mt-2 text-brand-accent font-medium">
                            contact@samybusiness.com
                        </p>
                    </div>

                    {/* Column 3: Navigation Quick Links */}
                    <div>
                        <h5 className="font-semibold text-site-text mb-3">
                            Navigation:
                        </h5>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/products"
                                    className="hover:text-brand-accent"
                                >
                                    Nos Produits
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-brand-accent"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-brand-accent"
                                >
                                    Contactez-nous
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="text-center text-xs text-gray-600 mt-12">
                    &copy; {new Date().getFullYear()} Samy Business. Tous droits
                    réservés.
                </p>
            </div>
        </footer>
    );
}
