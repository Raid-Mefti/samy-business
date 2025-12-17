import AboutSection from "@/components/AboutSection";
import ProductsGrid from "@/components/ProductsGrid";
import ImageCarousel from "@/components/ImageCarousel";
import ProcessSteps from "@/components/ProcessSteps";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home1 from "@/components/Home1";
import VideoComp from "@/components/VideoComp";
import Services from "@/components/Services";
import ZincOxyde from "@/components/ZincOxyde";
export default function Home() {
    return (
        <>
            <section id="top">
                <Header />
                <Home1 />
            </section>

            <div className="site-container site-stack">
                {/* Products section directly under the hero, as requested */}
                <ZincOxyde />
                <ProcessSteps />

                <section id="propos" className="pt-20 px-4">
                    <AboutSection />
                </section>

                <ProductsGrid />
                <Services />

                <VideoComp />
                <ImageCarousel />
            </div>

            <Footer />
        </>
    );
}
