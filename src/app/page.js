"use client";

import { useTheme } from "@/contexts/ThemeContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home1 from "@/components/Home1";
import ZincOxyde from "@/components/ZincOxyde";
import Produits from "@/components/Produits";
import SectionBridge from "@/components/SectionBridge";

export default function Home() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    // Clean color scheme
    const backgroundColor = isDark ? "rgb(15, 23, 42)" : "rgb(248, 250, 252)"; // Much softer gray/blue
    const borderColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)"; // Very subtle borders

    return (
        <>
            <section id="top" className="relative">
                <Header transparentOnTop />
                <Home1 />
            </section>

            <div
                className="h-4 w-full"
                style={{
                    background: isDark
                        ? "linear-gradient(to bottom, transparent, rgb(15, 23, 42))"
                        : "linear-gradient(to bottom, transparent, rgb(248, 250, 252))",
                }}
            />

            <div
                className="site-stack"
                style={{
                    backgroundColor: backgroundColor,
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
            </div>

            <Footer />
        </>
    );
}
