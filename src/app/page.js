"use client";

import { useTheme } from "@/contexts/ThemeContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home1 from "@/components/Home1";
import ZincOxyde from "@/components/ZincOxyde";
import Produits from "@/components/Produits";
import ProduitsTemporaire from "@/components/Produitstemporaire";
import SectionBridge from "@/components/SectionBridge";

export default function Home() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    // Using the same background colors as SectionBridge
    const backgroundColor = isDark
        ? "linear-gradient(135deg, rgb(12,18,30) 0%, rgb(18,26,44) 100%)"
        : "linear-gradient(135deg, rgb(240,240,240) 0%, rgb(245,245,245) 100%)";

    const borderColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)";

    // For the gradient transition
    const gradientTransitionColor = isDark
        ? "linear-gradient(to bottom, transparent, rgb(12,18,30))"
        : "linear-gradient(to bottom, transparent, rgb(240,240,240))";

    return (
        <>
            <section id="top" className="relative">
                <Header transparentOnTop />
                <Home1 />
            </section>

            <div
                className="h-4 w-full"
                style={{
                    background: gradientTransitionColor,
                }}
            />

            <div
                className="site-stack"
                style={{
                    background: backgroundColor,
                }}
            >
                <SectionBridge />

                <div className="relative">
                    <div
                        className="h-[0.5px] w-full"
                        style={{
                            backgroundColor: borderColor,
                        }}
                    />
                </div>

                <ZincOxyde />

                <div className="relative">
                    <div
                        className="h-[0.5px] w-full"
                        style={{
                            backgroundColor: borderColor,
                        }}
                    />
                </div>

                <Produits />
                <ProduitsTemporaire />
            </div>

            <Footer />
        </>
    );
}
