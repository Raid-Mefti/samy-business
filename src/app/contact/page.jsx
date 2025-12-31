"use client";

import React, { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
/* ==========================================================
   TRANSLATIONS
========================================================== */
const translations = {
    fr: {
        contact_title: "Contactez-nous",
        contact_subtitle: "Nous sommes là pour répondre à vos questions.",
        name: "Nom complet",
        company: "Nom de l’entreprise",
        company_size: "Taille de l’entreprise",
        phone: "Numéro de téléphone",
        email: "Adresse e-mail",
        subject: "Sujet",
        message: "Votre message",
        send: "Envoyer le message",
        loading: "Envoi en cours...",
        success: "Message envoyé avec succès ! Nous vous répondrons bientôt.",
        error: "Échec de l'envoi. Veuillez vérifier votre connexion ou réessayer.",
        size_options: [
            "Micro (1–9 employés)",
            "Petite (10–49 employés)",
            "Moyenne (50–249 employés)",
            "Grande (250+ employés)",
        ],
        request_quote_title: "Vous souhaitez un devis ?",
        request_quote_text:
            "Cliquez sur le bouton ci-dessous pour envoyer votre demande de devis et obtenir une réponse rapide.",
        request_quote_btn: "Demander un devis",
    },
    en: {
        contact_title: "Contact Us",
        contact_subtitle: "We are here to answer your questions.",
        name: "Full Name",
        company: "Company Name",
        company_size: "Company Size",
        phone: "Phone Number",
        email: "Email Address",
        subject: "Subject",
        message: "Your Message",
        send: "Send Message",
        loading: "Sending...",
        success: "Message sent successfully! We will get back to you soon.",
        error: "Failed to send message. Please try again later.",
        size_options: [
            "Micro (1–9 employees)",
            "Small (10–49 employees)",
            "Medium (50–249 employees)",
            "Large (250+ employees)",
        ],
        request_quote_title: "Want a Quote?",
        request_quote_text:
            "Click the button below to request a quote and get a fast response.",
        request_quote_btn: "Request a Quote",
    },
    ar: {
        contact_title: "اتصل بنا",
        contact_subtitle: "نحن هنا للإجابة على أسئلتكم.",
        name: "الاسم الكامل",
        company: "اسم الشركة",
        company_size: "حجم الشركة",
        phone: "رقم الهاتف",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "رسالتك",
        send: "إرسال الرسالة",
        loading: "جاري الإرسال...",
        success: "تم إرسال الرسالة بنجاح! سنرد عليك قريباً.",
        error: "فشل الإرسال. يرجى المحاولة مرة أخرى.",
        size_options: [
            "صغيرة جداً (1–9)",
            "صغيرة (10–49)",
            "متوسطة (50–249)",
            "كبيرة (250+)",
        ],
        request_quote_title: "هل ترغب في الحصول على عرض سعر؟",
        request_quote_text:
            "انقر على الزر أدناه لإرسال طلب عرض سعر والحصول على رد سريع.",
        request_quote_btn: "طلب عرض سعر",
    },
};

/* ==========================================================
   CONTACT FORM
========================================================== */
function ContactForm() {
    const { language } = useLanguage();
    const t = translations[language];
    const isArabic = language === "ar";

    const form = useRef();
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(t.loading);

        setTimeout(() => {
            setStatus(t.success);
            form.current.reset();
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="flex flex-col md:flex-row items-center gap-8 mb-24">
            {/* Left: Contact form */}
            <div className="bg-base-100 border border-base-300 p-6 md:p-10 rounded-3xl shadow-xl md:w-[70%] md:ml-20 flex flex-col items-center">
                <h1 className="text-4xl font-bold text-[rgb(223,126,60)] text-center md:text-left">
                    {t.contact_title}
                </h1>

                <p className="text-base-content/70 mt-2 mb-8 text-center md:text-left">
                    {t.contact_subtitle}
                </p>

                {status && (
                    <div className="mb-6 p-4 rounded-xl bg-base-200 border border-base-300 text-base-content font-medium w-full md:w-[90%]">
                        {status}
                    </div>
                )}

                <form
                    ref={form}
                    onSubmit={handleSubmit}
                    className="space-y-5 w-full md:w-[90%]"
                >
                    <Input
                        label={t.name}
                        name="user_name"
                        isArabic={isArabic}
                    />
                    <Input
                        label={t.company}
                        name="company_name"
                        isArabic={isArabic}
                    />

                    <div>
                        <label className="label font-semibold">
                            <span className="label-text">{t.company_size}</span>
                        </label>
                        <select
                            name="company_size"
                            required
                            className="select select-bordered w-full bg-base-100"
                        >
                            <option value="">—</option>
                            {t.size_options.map((opt, i) => (
                                <option key={i} value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                    </div>

                    <Input
                        label={t.phone}
                        name="phone"
                        type="tel"
                        isArabic={isArabic}
                    />
                    <Input
                        label={t.email}
                        name="user_email"
                        type="email"
                        isArabic={isArabic}
                    />
                    <Input
                        label={t.subject}
                        name="subject"
                        isArabic={isArabic}
                    />

                    <div>
                        <label className="label font-semibold">
                            <span className="label-text">{t.message}</span>
                        </label>
                        <textarea
                            name="message"
                            rows="4"
                            required
                            className="textarea textarea-bordered w-full bg-base-100"
                        />
                    </div>

                    <div className="flex justify-center pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-10 py-4 rounded-full bg-[rgb(223,126,60)] text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"
                        >
                            {loading ? t.loading : t.send}
                        </button>
                    </div>
                </form>
            </div>

            {/* Right: Quote CTA */}
            <div className="bg-base-100 border border-base-300 p-8 rounded-3xl shadow-lg md:w-[30%] flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold text-[rgb(223,126,60)] mb-4">
                    {t.request_quote_title}
                </h2>

                <p className="text-base-content/70 mb-6">
                    {t.request_quote_text}
                </p>

                <Link
                    href="/devis"
                    className="px-8 py-3 rounded-full bg-[rgb(223,126,60)] text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition w-full md:w-auto"
                >
                    {t.request_quote_btn}
                </Link>
            </div>
        </div>
    );
}

/* ==========================================================
   INPUT COMPONENT
========================================================== */
function Input({ label, name, type = "text", isArabic }) {
    return (
        <div>
            <label className="label font-semibold">
                <span className="label-text">{label}</span>
            </label>
            <input
                type={type}
                name={name}
                required
                className={`input input-bordered w-full bg-base-100 ${
                    isArabic ? "text-right" : "text-left"
                }`}
            />
        </div>
    );
}
/* ==========================================================
   PAGE
========================================================== */
export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="pt-[120px] px-6 bg-base-200 min-h-screen">
                <ContactForm />
            </main>
            <Footer />
        </>
    );
}
