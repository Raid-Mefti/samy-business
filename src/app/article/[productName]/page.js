import ArticlePage from "@/components/ArticlePage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home1 from "@/components/Home1";

export default function Article({ params }) {
    // Convert URL parameter back to readable product name
    const productName = params.productName
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return (
        <>
            <Header />
            <section id="article-hero">
                <Home1 />
            </section>
            <div className="site-container site-stack py-16">
                <ArticlePage productName={productName} />
            </div>
            <Footer />
        </>
    );
}
