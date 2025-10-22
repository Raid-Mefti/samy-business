"use client";

import React, { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useLanguage } from "@/contexts/LanguageContext";

// ==========================================================
// --- TRANSLATIONS ---
// ==========================================================
const translations = {
    fr: {
        contact_title: "Contactez-nous",
        contact_subtitle: "Nous sommes là pour répondre à vos questions.",
        contact_name: "Nom complet",
        contact_email: "Adresse e-mail",
        contact_subject: "Sujet",
        contact_message: "Votre message",
        contact_send: "Envoyer le message",
        contact_success:
            "Message envoyé avec succès ! Nous vous répondrons bientôt.",
        contact_error:
            "Échec de l'envoi. Veuillez vérifier votre connexion ou réessayer plus tard.",
        contact_key_error:
            "Erreur de configuration : Veuillez remplacer vos clés EmailJS.",
        contact_loading: "Envoi en cours...",
    },
    en: {
        contact_title: "Contact Us",
        contact_subtitle: "We are here to answer your questions.",
        contact_name: "Full Name",
        contact_email: "Email Address",
        contact_subject: "Subject",
        contact_message: "Your Message",
        contact_send: "Send Message",
        contact_success:
            "Message sent successfully! We will get back to you soon.",
        contact_error:
            "Failed to send message. Please check your connection or try again later.",
        contact_key_error:
            "Configuration Error: Please replace your EmailJS keys.",
        contact_loading: "Sending...",
    },
    ar: {
        contact_title: "اتصل بنا",
        contact_subtitle: "نحن هنا للإجابة على أسئلتكم.",
        contact_name: "الاسم الكامل",
        contact_email: "البريد الإلكتروني",
        contact_subject: "الموضوع",
        contact_message: "رسالتك",
        contact_send: "إرسال الرسالة",
        contact_success: "تم إرسال الرسالة بنجاح! سنرد عليك قريباً.",
        contact_error:
            "فشل الإرسال. يرجى التحقق من اتصالك والمحاولة مرة أخرى لاحقاً.",
        contact_key_error:
            "خطأ في الإعداد: الرجاء استبدال مفاتيح EmailJS الخاصة بك.",
        contact_loading: "جاري الإرسال...",
    },
};

// ==========================================================
// --- MOCK EMAILJS (for dev) ---
// ==========================================================
const emailjs = {
    send: (serviceID, templateID, form, userID) => {
        return new Promise((resolve, reject) => {
            console.log(`EmailJS Simulation: Sending message...`);
            setTimeout(() => {
                if (Math.random() < 0.9) resolve({ text: "OK" });
                else reject({ text: "Error" });
            }, 1500);
        });
    },
};

// ==========================================================
// --- CONTACT FORM COMPONENT ---
// ==========================================================
function ContactForm() {
    const { language } = useLanguage();
    const t = translations[language];
    const isArabic = language === "ar";

    const form = useRef();
    const [status, setStatus] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
    const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
    const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY" ||
            EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
            EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID"
        ) {
            setStatus(t.contact_key_error);
            return;
        }

        setIsLoading(true);
        setStatus(t.contact_loading);

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                form.current,
                EMAILJS_PUBLIC_KEY
            );
            setStatus(t.contact_success);
            form.current.reset();
        } catch (err) {
            console.error(err);
            setStatus(t.contact_error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className={`p-5 min-h-screen bg-base-200 ${
                isArabic ? "text-right" : "text-left"
            }`}
        >
            <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-2xl">
                <h1 className="text-4xl font-bold mb-2 text-[rgb(223,126,60)]">
                    {t.contact_title}
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    {t.contact_subtitle}
                </p>

                {status && (
                    <div
                        className={`p-4 mb-4 rounded-lg font-medium ${
                            status === t.contact_success
                                ? "bg-green-100 text-green-800"
                                : status === t.contact_error ||
                                  status.includes("Erreur de configuration")
                                ? "bg-red-100 text-red-800"
                                : "bg-blue-100 text-blue-800"
                        } ${isArabic ? "text-right" : "text-left"}`}
                    >
                        {status}
                    </div>
                )}

                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">
                                {t.contact_name}
                            </span>
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            placeholder={t.contact_name}
                            required
                            className={`input input-bordered w-full rounded-lg ${
                                isArabic ? "text-right" : "text-left"
                            }`}
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">
                                {t.contact_email}
                            </span>
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            placeholder={t.contact_email}
                            required
                            className={`input input-bordered w-full rounded-lg ${
                                isArabic ? "text-right" : "text-left"
                            }`}
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">
                                {t.contact_subject}
                            </span>
                        </label>
                        <input
                            type="text"
                            name="subject"
                            placeholder={t.contact_subject}
                            required
                            className={`input input-bordered w-full rounded-lg ${
                                isArabic ? "text-right" : "text-left"
                            }`}
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">
                                {t.contact_message}
                            </span>
                        </label>
                        <textarea
                            name="message"
                            placeholder={t.contact_message}
                            required
                            rows="4"
                            className={`textarea textarea-bordered w-full rounded-lg ${
                                isArabic ? "text-right" : "text-left"
                            }`}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="btn btn-primary rounded-full px-10 text-white shadow-lg w-full md:w-auto bg-[rgb(223,126,60)] border-[rgb(223,126,60)]"
                    >
                        {isLoading ? (
                            <svg
                                className="animate-spin h-5 w-5 mr-3"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                        ) : (
                            t.contact_send
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default function ContactPage() {
    return (
        <>
            <Header />
            <div className="min-h-screen pt-[120px]">
                <ContactForm />
            </div>
            <Footer />
        </>
    );
}
