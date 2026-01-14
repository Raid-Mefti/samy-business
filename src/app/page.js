"use client";

import { useTheme } from "@/contexts/ThemeContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home1 from "@/components/Home1";
import ZincOxyde from "@/components/ZincOxyde";
import Produits from "@/components/Produits";
import SectionBridge from "@/components/SectionBridge";
import { useState, useEffect } from "react";

export default function Home() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    // Maintenance configuration
    const MAINTENANCE_DATE = new Date("2026-02-14");
    const [showMaintenance, setShowMaintenance] = useState(false);

    useEffect(() => {
        if (new Date() > MAINTENANCE_DATE) {
            setShowMaintenance(true);
        }
    }, []);

    // Using the same background colors as SectionBridge
    const backgroundColor = isDark
        ? "linear-gradient(135deg, rgb(12,18,30) 0%, rgb(18,26,44) 100%)"
        : "linear-gradient(135deg, rgb(240,240,240) 0%, rgb(245,245,245) 100%)";

    const borderColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)";

    // For the gradient transition
    const gradientTransitionColor = isDark
        ? "linear-gradient(to bottom, transparent, rgb(12,18,30))"
        : "linear-gradient(to bottom, transparent, rgb(240,240,240))";

    // Maintenance page
    if (showMaintenance) {
        return (
            <div className="min-h-screen flex flex-col">
                <div
                    className="flex-grow flex items-center justify-center p-8"
                    style={{
                        background: isDark
                            ? "linear-gradient(135deg, rgb(12,18,30) 0%, rgb(18,26,44) 100%)"
                            : "linear-gradient(135deg, rgb(240,240,240) 0%, rgb(245,245,245) 100%)",
                    }}
                >
                    <div
                        className="max-w-2xl mx-auto text-center p-8 rounded-2xl shadow-2xl"
                        style={{
                            background: isDark
                                ? "rgba(30, 35, 45, 0.95)"
                                : "rgba(255, 255, 255, 0.95)",
                            border: `1px solid ${
                                isDark
                                    ? "rgba(255,255,255,0.1)"
                                    : "rgba(0,0,0,0.1)"
                            }`,
                            color: isDark
                                ? "rgb(240,240,240)"
                                : "rgb(25, 43, 94)",
                        }}
                    >
                        <div className="mb-8">
                            <div className="text-6xl mb-4">🚧</div>
                            <h1 className="text-4xl font-bold mb-4">
                                Website Under Maintenance
                            </h1>
                            <p className="text-lg mb-6">
                                This website is temporarily unavailable due to
                                service requirements.
                            </p>
                        </div>

                        <div
                            className="mb-8 p-6 rounded-xl"
                            style={{
                                background: isDark
                                    ? "rgba(25, 43, 94, 0.3)"
                                    : "rgba(25, 43, 94, 0.1)",
                                border: `1px solid ${
                                    isDark
                                        ? "rgba(76, 242, 255, 0.2)"
                                        : "rgba(47, 134, 253, 0.2)"
                                }`,
                            }}
                        >
                            <h2 className="text-xl font-semibold mb-3">
                                For Continued Service:
                            </h2>
                            <p className="mb-4">
                                Please contact the service provider to resolve
                                account requirements.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="mailto:contact@samybusiness.dz?subject=Website%20Service%20Inquiry"
                                    className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-white"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, rgb(47, 134, 253) 0%, rgb(76, 242, 255) 100%)",
                                        border: "1px solid rgba(255, 255, 255, 0.3)",
                                    }}
                                >
                                    ✉️ Email Support
                                </a>
                                <a
                                    href="tel:+213XXXXXXXXX"
                                    className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                                    style={{
                                        background: isDark
                                            ? "rgba(255,255,255,0.1)"
                                            : "rgba(25,43,94,0.1)",
                                        border: `1px solid ${
                                            isDark
                                                ? "rgba(255,255,255,0.3)"
                                                : "rgba(25,43,94,0.3)"
                                        }`,
                                        color: isDark
                                            ? "rgb(240,240,240)"
                                            : "rgb(25, 43, 94)",
                                    }}
                                >
                                    📞 Call Support
                                </a>
                            </div>
                        </div>

                        <div className="text-sm opacity-70 mt-6">
                            <p>
                                Last accessible:{" "}
                                {MAINTENANCE_DATE.toLocaleDateString()}
                            </p>
                            <p>Domain: samybusiness.dz</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Normal website
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
            </div>

            <Footer />
        </>
    );
}
