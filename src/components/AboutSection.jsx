"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
    const { language } = useLanguage();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const translations = {
        fr: {
            title: "About samy business!",
            description:
                "Basée à Alger et créée en 2007, Samy Business est une EURL (Entreprise Unipersonnelle à Responsabilité Limitée) algérienne spécialisée dans l'importation de produits sidérurgiques, ferreux et non-ferreux, destinés à la transformation et à la fabrication. Dirigée par son gérant unique, M. Rabah BOURRAI, l'entreprise a vu son chiffre d'affaires augmenter de manière significative ces dernières années, atteignant 1 977 000 KDA en 2022. Avec une équipe d'une quinzaine d'employés, Samy Business se positionne comme un acteur clé du marché local, misant sur la qualité, la fiabilité et l'innovation pour satisfaire ses clients.",
            additionalText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            buttonShow: "Plus d'infos",
            buttonHide: "Moins d'infos",
            close: "Fermer",
        },
        en: {
            title: "About Samy Business!",
            description:
                "Based in Algiers and founded in 2007, Samy Business is an Algerian EURL (Single-Person Limited Liability Company) specialized in importing ferrous and non-ferrous steel products for transformation and manufacturing. Led by its sole manager, Mr. Rabah BOURRAI, the company has seen its turnover increase significantly in recent years, reaching 1,977,000 KDA in 2022. With a team of about fifteen employees, Samy Business positions itself as a key player in the local market, relying on quality, reliability and innovation to satisfy its customers.",
            additionalText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            buttonShow: "More info",
            buttonHide: "Less info",
            close: "Close",
        },
        ar: {
            title: "حول سامي بيزنس!",
            description:
                "تقع في الجزائر العاصمة وتأسست في 2007، سامي بيزنس هي شركة ذات مسؤولية محدودة جزائرية متخصصة في استيراد المنتجات الفلزية الحديدية وغير الحديدية الموجهة للتحويل والتصنيع. تحت إدارة مسيرها الوحيد السيد رباح بوراي، شهدت الشركة نموًا ملحوظًا في رقم أعمالها خلال السنوات الأخيرة، حيث بلغ 1,977,000 دج سنة 2022. ومع فريق يضم حوالي خمسة عشر موظفًا، تتموضع سامي بيزنس كفاعل أساسي في السوق المحلية، معتمدة على الجودة والموثوقية والابتكار لإرضاء عملائها.",
            additionalText:
                "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسسينغ إيليت. سيد دو إيوسمود تيمبور إينسيديدونت أوت لابور إت دولور ماجنا أليكوا. أوت إنيم أد مينيم فينيام، كويس نوستريد إكسيرسيتاتيون أولامكو لابوريس نيسي أوت أليكوب إكس إيا كومودو كونسيكوات. دويس أوتي إيرور دولور إن ريبريهينديريت إن فولوبتات فيليت إسسي سيليوم دولور إيو فوجيات نولا بارياتور.",
            buttonShow: "المزيد من المعلومات",
            buttonHide: "أقل معلومات",
            close: "إغلاق",
        },
    };

    const t = translations[language];

    const handleButtonClick = () => {
        if (isMobile) {
            setIsModalOpen(true);
        } else {
            setIsExpanded(!isExpanded);
        }
    };

    const buttonText = isMobile
        ? t.buttonShow
        : isExpanded
        ? t.buttonHide
        : t.buttonShow;

    return (
        <>
            <div
                className={`hero bg-base-100 min-h-96 mt-12 mb-12 text-base-content rounded-lg shadow-xl ${
                    language === "ar" ? "text-right" : ""
                }`}
            >
                <div
                    className={`hero-content flex-col py-8 ${
                        language === "ar" ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                >
                    <div className="flex flex-col justify-center items-center w-full">
                        <h1 className="text-4xl md:text-6xl font-bold">{t.title}</h1>
                        <p
                            className={`py-6 text-lg md:text-2xl line-clamp-5 md:line-clamp-none leading-relaxed`}
                        >
                            {t.description}
                        </p>
                        {!isMobile && isExpanded && (
                            <p className="py-6 text-2xl leading-relaxed">{t.additionalText}</p>
                        )}
                        <button
                            className="btn btn-primary mt-4 rounded-full shadow-md hover:shadow-lg transition-shadow"
                            onClick={handleButtonClick}
                        >
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <dialog className="modal modal-open">
                    <div className="modal-box max-w-4xl rounded-lg shadow-2xl bg-base-100">
                        <h3 className="font-bold text-2xl mb-4">{t.title}</h3>
                        <p className="py-4 text-lg leading-relaxed">{t.description}</p>
                        <p className="py-4 text-lg leading-relaxed">{t.additionalText}</p>
                        <div className="modal-action">
                            <button
                                className="btn btn-primary rounded-full"
                                onClick={() => setIsModalOpen(false)}
                            >
                                {t.close}
                            </button>
                        </div>
                    </div>
                </dialog>
            )}
        </>
    );
}