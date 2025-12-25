import AboutSection from "@/components/AboutSection";
import ProductsGrid from "@/components/ProductsGrid";
import ImageCarousel from "@/components/ImageCarousel";
import ProcessSteps from "@/components/ProcessSteps";
import VideoComp from "@/components/VideoComp";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home1 from "@/components/Home1";
import ZincOxyde from "@/components/ZincOxyde";
import Produits from "@/components/Produits";
import SectionBridge from "@/components/SectionBridge";
export default function Home() {
    return (
        <>
            <section id="top">
                <Header transparentOnTop />
                <Home1 />
            </section>

            {/* <div className="site-container site-stack"> */}
            <div className=" site-stack">
                {/* Products section directly under the hero, as requested */}
                <SectionBridge />
                <ZincOxyde />
                <Produits />
                {/* <ProcessSteps /> */}
                {/* <section id="propos" className="pt-20 px-4">
                    <AboutSection />
                </section> */}
                :{/* <VideoComp /> */}
                {/* <ImageCarousel /> */}
            </div>

            <Footer />
        </>
    );
}
