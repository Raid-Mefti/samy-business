"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ProductsGrid() {
    const cards = [
        {
            theme: "orange",
            title: "L'utilisation du zinc",
            text: "Des alliages antiques aux batteries modernes, ce rapport explore le parcours du zinc à travers la science, l’industrie et la durabilité — en détaillant sa chimie, ses applications clés et ses perspectives de marché.",
            img: "Zink-Eigenschaften.webp",
            link: "/wiki/zinc-usage",
        },
        {
            theme: "blue",
            title: "Statistiques",
            text: "Explorez les opportunités du ZnO dans l’industrie mondiale et le potentiel stratégique de l’Algérie au cœur de cette croissance.",
            img: "statistics.jpg",
            link: "/wiki/statistics",
        },
        {
            theme: "purple",
            title: "Aspects de surface",
            text: "Samy Business propose plusieurs gammes et finitions adaptées à chaque besoin industriel.",
            img: "img13.png",
            link: "/wiki/surface-aspects",
        },
    ];

    const themes = {
        orange: { main: "#DF7E3C", glow: "rgba(223,126,60,0.25)" },
        blue: { main: "#4E6BA4", glow: "rgba(78,107,164,0.25)" },
        purple: { main: "#38367F", glow: "rgba(56,54,127,0.25)" },
    };

    return (
        <div className="relative flex flex-col items-start bg-base-100 overflow-hidden py-28 space-y-0">
            {cards.map((card, index) => {
                const { main, glow } = themes[card.theme];
                return (
                    <AnimatedCard
                        key={index}
                        card={card}
                        color={main}
                        glow={glow}
                        offset={index * 3}
                    />
                );
            })}
        </div>
    );
}

/* ------------------------------ CARD COMPONENT ------------------------------ */

function AnimatedCard({ card, color, glow, offset }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [inView, controls]);

    const variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            style={{ marginLeft: `${offset * 2}rem` }}
            className="stair-card group relative flex items-stretch gap-8 transition-transform duration-700 ease-out hover:-translate-y- mb-8"
        >
            {/* IMAGE SECTION */}
            <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative flex-shrink-0 w-[460px] md:w-[520px] rounded-3xl overflow-hidden shadow-lg"
                style={{
                    border: `5px solid ${color}`,
                    boxShadow: `0 0 16px ${glow}`,
                }}
            >
                <div className="overflow-hidden rounded-2xl">
                    <img
                        src={card.img}
                        alt={card.title}
                        className="w-full h-[320px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
                <div className="absolute inset-0 bg-black/30 rounded-2xl pointer-events-none"></div>
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-3xl md:text-4xl font-bold bg-white/80 px-6 py-2 rounded-xl backdrop-blur-md"
                    style={{ color }}
                >
                    {card.title}
                </motion.h2>
            </motion.div>

            {/* TEXT SECTION */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 1 }}
                className="flex flex-col justify-center bg-white rounded-3xl shadow-lg px-8 py-10 backdrop-blur-sm w-full md:max-w-[600px]"
                style={{ borderLeft: `6px solid ${color}` }}
            >
                <h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{ color }}
                >
                    {card.title}
                </h2>
                <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-700">
                    {card.text}
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn border-0 text-white font-semibold px-6 py-3 rounded-xl self-start shadow-md"
                    style={{
                        backgroundColor: color,
                        boxShadow: `0 0 14px ${glow}`,
                    }}
                    onClick={() => window.open(card.link, "_blank")}
                >
                    Lire le rapport
                </motion.button>
            </motion.div>
        </motion.div>
    );
}
