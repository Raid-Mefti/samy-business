import AboutSection from "@/components/AboutSection";
import ProductsGrid from "@/components/ProductsGrid";
import ImageCarousel from "@/components/ImageCarousel";
import ProcessSteps from "@/components/ProcessSteps";
import Footer from "@/components/Footer";
import ProductsSection from "@/components/ProductsSection";
import Header from "@/components/Header";
import Home1 from "@/components/Home1";
import VideoComp from "@/components/VideoComp";

export default function Home() {
    return (
        <>
            <Header />
            <Home1 />
            <div className="site-container site-stack">
                <AboutSection />
                <ProductsGrid />
                <VideoComp />
                <ImageCarousel />
                <ProcessSteps />
                <ProductsSection />
            </div>
            <Footer />
        </>
    );
}
