import ArticlePage from "@/components/ArticlePage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Article() {
    return (
        <>
            <Header />
            <div className="site-container site-stack">
                <ArticlePage />
            </div>
            <Footer />
        </>
    );
}
