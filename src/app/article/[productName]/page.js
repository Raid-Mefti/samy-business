import ArticlePage from "@/components/ArticlePage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Article({ params }) {
    // Convert URL parameter back to readable product name
    const productName = params.productName
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return (
        <>
            <div className="site-container site-stack">
                <ArticlePage productName={productName} />
            </div>
        </>
    );
}

