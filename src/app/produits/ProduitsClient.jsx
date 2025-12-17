// app/produits/page.jsx
import Header from "@/components/Header";
import Home1 from "@/components/Home1";
import { useLanguage } from "@/contexts/LanguageContext";
import ProductsList from "./ProductsList"; // assuming your products component is separate

export const metadata = {
    title: {
        default: "Nos Produits – Samy Business",
        template: "%s | Samy Business",
    },
    description:
        "Découvrez notre catalogue complet de métaux et produits industriels pour l'import, l'export et la transformation.",
    openGraph: {
        title: "Nos Produits – Samy Business",
        description:
            "Découvrez notre catalogue complet de métaux et produits industriels pour l'import, l'export et la transformation.",
        url: "https://samybusiness.dz/produits",
        siteName: "Samy Business",
        locale: "fr_FR",
        type: "website",
    },
    alternates: {
        canonical: "https://samybusiness.dz/produits",
        languages: {
            fr: "/produits",
            en: "/en/produits",
            ar: "/ar/produits",
        },
    },
};

export default function ProduitsPage() {
    const { language } = useLanguage();
    const isArabic = language === "ar";

    return (
        <>
            <Header />
            <section id="article-hero">
                <Home1 />
            </section>
            <ProductsList language={language} isArabic={isArabic} />
        </>
    );
}
