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
            <section id="top">
                <Header />
                <Home1 />
            </section>

            <div className="site-container site-stack">
                <section id="propos" className="py-20 px-4">
                    <AboutSection />
                </section>

                <ProductsGrid />

                <VideoComp />
                <ImageCarousel />

                <section id="services" className="py-20 px-4">
                    <ProcessSteps />
                </section>
                <ProductsSection />
            </div>

            <section id="contact" className="py-20 px-4">
                <Footer />
            </section>
        </>
    );
}
