// Comp5Option3.jsx
"use client";
import { useState, useEffect, useRef } from "react";

export default function Comp5Option3() {
    const slides = [
        {
            src: "slideshow1.jpeg",
            caption: "Haute pureté et performance garantie",
        },
        { src: "slideshow2.jpeg", caption: "Procédé industriel maîtrisé" },
        { src: "slideshow3.jpeg", caption: "Production durable et optimisée" },
        { src: "slideshow4.jpeg", caption: "Contrôle qualité rigoureux" },
        { src: "slideshow5.jpeg", caption: "Innovation au cœur du processus" },
        { src: "slideshow6.jpeg", caption: "Excellence métallique" },
    ];

    const [current, setCurrent] = useState(0);
    const intervalRef = useRef(null);
    const SLIDE_DURATION = 10000;

    const startTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrent((p) => (p + 1) % slides.length);
        }, SLIDE_DURATION);
    };

    useEffect(() => {
        startTimer();
        return () => clearInterval(intervalRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const goToSlide = (index) => {
        setCurrent(index);
        startTimer();
    };

    return (
        <div className="mt-12 overflow-hidden bg-base-100">
            <div className="relative w-full h-[60vh] lg:h-[70vh] rounded-3xl overflow-hidden">
                {slides.map((slide, i) => (
                    <div
                        key={i}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            i === current
                                ? "opacity-100 z-20"
                                : "opacity-0 z-10"
                        }`}
                    >
                        <img
                            src={slide.src}
                            alt={slide.caption}
                            className="w-full h-full object-cover transform scale-105 transition-transform duration-[10000ms]"
                        />

                        {/* Light card text box */}
                        <div className="absolute bottom-8 left-8 max-w-lg rounded-xl bg-white/70 backdrop-blur-lg p-6 shadow-md border border-gray-100/50">
                            <h2 className="text-2xl lg:text-4xl font-bold text-[rgb(223,126,60)]">
                                {slide.caption}
                            </h2>
                            <p className="mt-3 text-sm lg:text-base text-gray-800 leading-relaxed">
                                Découvrez nos procédés métallurgiques alliant
                                précision, durabilité et innovation — au service
                                de l’excellence.
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="flex w-full justify-center gap-3 py-4">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            current === idx
                                ? "bg-[rgb(223,126,60)] scale-125 shadow-md"
                                : "bg-black/40 hover:bg-[rgb(223,126,60)]/70"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
