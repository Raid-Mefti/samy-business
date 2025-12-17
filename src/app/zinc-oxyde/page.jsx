import DocumentationView from "./components/DocumentationView";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
    title: "Documentation Oxyde de Zinc | Samy Business",
    description:
        "Documentation technique et stratégique complète sur l'oxyde de zinc",
};

export default function ZincOxidePage() {
    return (
        <>
            <Header />

            <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <DocumentationView />
            </main>
            <Footer />
        </>
    );
}
