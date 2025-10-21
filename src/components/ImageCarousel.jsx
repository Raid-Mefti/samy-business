"use client";
import { useState, useEffect } from "react";

export default function Comp5() {
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

    const goToSlide = (index) => {
        setCurrent(index);
    };

    return (
        <div className="mt-12 overflow-hidden bg-base-100">
            <div className="relative w-full h-[60vh] lg:h-[70vh] rounded-3xl overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                            index === current ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <img
                            src={slide.src}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-start p-8">
                            <div className="text-white max-w-lg">
                                <h2 className="text-2xl lg:text-4xl font-bold drop-shadow-lg">
                                    {slide.caption}
                                </h2>
                                <p className="mt-2 text-sm lg:text-base opacity-90">
                                    Découvrez nos procédés métallurgiques
                                    alliant précision, durabilité et innovation.
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex w-full justify-center gap-2 py-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`btn btn-primary btn-sm md:btn-md transition-transform ${
                            current === index ? "scale-110" : "opacity-80"
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
