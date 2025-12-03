// Comp5Option3.jsx
"use client";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Comp5Option3() {
    const { language } = useLanguage(); // Use context language

    // Slides content with FR, EN, AR
    const slidesContent = [
        {
            src: "slideshow1.jpeg",
            caption: {
                fr: "Haute pureté et performance garantie",
                en: "High purity and guaranteed performance",
                ar: "نقاء عالي وأداء مضمون",
            },
            paragraph: {
                fr: "Nos métaux sont rigoureusement sélectionnés pour garantir une pureté optimale et des performances exceptionnelles dans toutes vos applications industrielles.",
                en: "Our metals are rigorously selected to ensure optimal purity and outstanding performance across all your industrial applications.",
                ar: "يتم اختيار معادننا بعناية لضمان نقاء مثالي وأداء ممتاز في جميع تطبيقاتك الصناعية.",
            },
        },
        {
            src: "slideshow2.jpeg",
            caption: {
                fr: "Procédé industriel maîtrisé",
                en: "Controlled industrial process",
                ar: "عملية صناعية متقنة",
            },
            paragraph: {
                fr: "Chaque étape de production est surveillée pour maintenir une qualité constante et réduire les variations, assurant ainsi la fiabilité de nos produits.",
                en: "Every production step is monitored to maintain consistent quality and reduce variations, ensuring the reliability of our products.",
                ar: "يتم مراقبة كل مرحلة من الإنتاج للحفاظ على جودة ثابتة وتقليل التفاوت، مما يضمن موثوقية منتجاتنا.",
            },
        },
        {
            src: "slideshow3.jpeg",
            caption: {
                fr: "Production durable et optimisée",
                en: "Sustainable and optimized production",
                ar: "إنتاج مستدام ومحسن",
            },
            paragraph: {
                fr: "Nous optimisons nos procédés pour réduire la consommation énergétique et minimiser l'impact environnemental sans compromettre la qualité.",
                en: "We optimize our processes to reduce energy consumption and minimize environmental impact without compromising quality.",
                ar: "نقوم بتحسين عملياتنا لتقليل استهلاك الطاقة وتقليل الأثر البيئي دون المساس بالجودة.",
            },
        },
        {
            src: "slideshow4.jpeg",
            caption: {
                fr: "Contrôle qualité rigoureux",
                en: "Rigorous quality control",
                ar: "مراقبة جودة صارمة",
            },
            paragraph: {
                fr: "Chaque lot est soumis à des tests stricts pour assurer que nos standards de qualité sont respectés et que nos clients reçoivent le meilleur produit possible.",
                en: "Each batch undergoes strict testing to ensure our quality standards are met and our clients receive the best possible product.",
                ar: "يخضع كل دفعة لاختبارات صارمة لضمان تلبية معايير الجودة لدينا وتلقي عملائنا أفضل منتج ممكن.",
            },
        },
        {
            src: "slideshow5.jpeg",
            caption: {
                fr: "Innovation au cœur du processus",
                en: "Innovation at the heart of the process",
                ar: "الابتكار في صميم العملية",
            },
            paragraph: {
                fr: "Nous investissons continuellement dans la recherche et le développement pour proposer des solutions innovantes adaptées aux besoins de nos clients.",
                en: "We continuously invest in research and development to provide innovative solutions tailored to our clients’ needs.",
                ar: "نستثمر باستمرار في البحث والتطوير لتقديم حلول مبتكرة مصممة لتلبية احتياجات عملائنا.",
            },
        },
        {
            src: "slideshow6.jpeg",
            caption: {
                fr: "Excellence métallique",
                en: "Metallic excellence",
                ar: "التميز المعدني",
            },
            paragraph: {
                fr: "L’expertise et le savoir-faire de notre équipe garantissent des produits métalliques de qualité supérieure répondant aux exigences les plus strictes.",
                en: "The expertise and know-how of our team guarantee superior quality metallic products meeting the strictest requirements.",
                ar: "تضمن خبرة ومعرفة فريقنا منتجات معدنية عالية الجودة تلبي أصعب المتطلبات.",
            },
        },
    ];

    const slides = slidesContent.map((s) => ({
        src: s.src,
        caption: s.caption[language] || s.caption.fr,
        paragraph: s.paragraph[language] || s.paragraph.fr,
    }));

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
    }, []);

    const goToSlide = (index) => {
        setCurrent(index);
        startTimer();
    };

    const direction = language === "ar" ? "rtl" : "ltr";
    const textAlign = language === "ar" ? "text-right" : "text-left";

    return (
        <div className="mt-12 overflow-hidden bg-base-100" dir={direction}>
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

                        <div
                            className={`absolute bottom-8 left-8 max-w-lg rounded-xl bg-white/70 backdrop-blur-lg p-6 shadow-md border border-gray-100/50 ${textAlign}`}
                        >
                            <h2 className="text-2xl lg:text-4xl font-bold text-[rgb(223,126,60)]">
                                {slide.caption}
                            </h2>
                            <p className="mt-3 text-sm lg:text-base text-gray-800 leading-relaxed">
                                {slide.paragraph}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

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
