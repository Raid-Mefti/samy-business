"use client";

import React, { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import Link from "next/link";
import emailjs from '@emailjs/browser';

const translations = {
    fr: {
        contact_title: "Contactez-nous",
        contact_subtitle: "Nous sommes là pour répondre à vos questions.",
        name: "Nom complet",
        company: "Nom de l'entreprise",
        company_size: "Taille de l'entreprise",
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

function Input({ label, name, type = "text", isArabic, isDark, colors }) {
    return (
        <div>
            <label className="label font-semibold">
                <span className="label-text" style={{ color: colors.label }}>
                    {label}
                </span>
            </label>
            <input
                type={type}
                name={name}
                className={`w-full transition-all duration-200 focus:outline-none ${
                    isArabic ? "text-right" : "text-left"
                }`}
                style={{
                    backgroundColor: colors.inputBg,
                    border: `1px solid ${colors.inputBorder}`,
                    color: colors.inputText,
                    borderRadius: "0.5rem",
                    padding: "0.625rem 1rem",
                    boxShadow: isDark
                        ? "0 2px 4px rgba(0,0,0,0.2)"
                        : "0 2px 4px rgba(0,0,0,0.05)",
                }}
                onFocus={(e) => {
                    e.target.style.borderColor = isDark
                        ? "rgb(76, 242, 255)"
                        : "rgb(47, 134, 253)";
                    e.target.style.boxShadow = isDark
                        ? "0 0 0 3px rgba(76, 242, 255, 0.1)"
                        : "0 0 0 3px rgba(47, 134, 253, 0.1)";
                }}
                onBlur={(e) => {
                    e.target.style.borderColor = colors.inputBorder;
                    e.target.style.boxShadow = isDark
                        ? "0 2px 4px rgba(0,0,0,0.2)"
                        : "0 2px 4px rgba(0,0,0,0.05)";
                }}
            />
        </div>
    );
}

function ContactForm() {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const t = translations[language];
    const isArabic = language === "ar";
    const isDark = theme === "dark";

    const form = useRef();
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const gradientStart = "rgb(47, 134, 253)";
    const gradientEnd = "rgb(76, 242, 255)";
    const blue = "rgb(25, 43, 94)";
    const mediumGray = "rgb(180, 180, 180)";
    const lightGray = "rgb(240, 240, 240)";
    const darkGray = "rgb(30, 35, 45)";
    const white = "rgb(255, 255, 255)";

    const gradientBlue = `linear-gradient(135deg, ${gradientStart} 0%, ${gradientEnd} 100%)`;

    const mainBg = isDark
        ? "linear-gradient(135deg, #0c121e 0%, #121a2c 100%)"
        : `linear-gradient(135deg, ${lightGray} 0%, white 100%)`;
    const cardBg = isDark ? darkGray : white;
    const cardBorder = isDark
        ? `1px solid rgba(76, 242, 255, 0.2)`
        : `1px solid rgb(180, 180, 180)`;
    const titleColor = isDark ? white : blue;
    const subtitleColor = isDark ? mediumGray : blue;
    const inputBg = isDark ? "rgb(20, 25, 35)" : white;
    const inputBorder = isDark ? "rgb(60, 65, 75)" : "rgb(180, 180, 180)";
    const inputText = isDark ? white : blue;
    const labelColor = isDark ? gradientEnd : blue;
    const selectArrowColor = isDark ? gradientEnd : blue;
    const statusBg = isDark
        ? "rgba(25, 43, 94, 0.3)"
        : "rgba(25, 43, 94, 0.05)";
    const statusBorder = isDark
        ? `1px solid rgba(76, 242, 255, 0.3)`
        : `1px solid rgb(180, 180, 180)`;
    const statusText = isDark ? mediumGray : blue;

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(t.loading);

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );
            setStatus(t.success);
            form.current.reset();
        } catch (error) {
            console.error("EmailJS error:", error);
            setStatus(t.error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row items-start gap-8 mb-24 max-w-7xl mx-auto">
            <div
                className="p-6 md:p-10 rounded-3xl shadow-xl lg:w-[70%] flex flex-col items-center w-full"
                style={{
                    backgroundColor: cardBg,
                    border: cardBorder,
                    boxShadow: isDark
                        ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                        : "0 20px 60px rgba(0, 0, 0, 0.08)",
                }}
            >
                <h1
                    className="text-4xl font-bold text-center lg:text-left w-full"
                    style={{
                        background: gradientBlue,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}
                >
                    {t.contact_title}
                </h1>

                <p
                    className="mt-2 mb-8 text-center lg:text-left w-full"
                    style={{ color: subtitleColor }}
                >
                    {t.contact_subtitle}
                </p>

                {status && (
                    <div
                        className="mb-6 p-4 rounded-xl w-full lg:w-[90%]"
                        style={{
                            backgroundColor: statusBg,
                            border: statusBorder,
                            color: statusText,
                        }}
                    >
                        {status}
                    </div>
                )}

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="space-y-5 w-full lg:w-[90%]"
                >
                    <Input
                        label={t.name}
                        name="user_name"
                        isArabic={isArabic}
                        isDark={isDark}
                        colors={{
                            inputBg,
                            inputBorder,
                            inputText,
                            label: labelColor,
                        }}
                    />
                    <Input
                        label={t.company}
                        name="company_name"
                        isArabic={isArabic}
                        isDark={isDark}
                        colors={{
                            inputBg,
                            inputBorder,
                            inputText,
                            label: labelColor,
                        }}
                    />

                    <div>
                        <label className="label font-semibold">
                            <span
                                className="label-text"
                                style={{ color: labelColor }}
                            >
                                {t.company_size}
                            </span>
                        </label>
                        <div className="relative">
                            <select
                                name="company_size"
                                className="w-full appearance-none cursor-pointer transition-all duration-200 focus:outline-none"
                                style={{
                                    backgroundColor: inputBg,
                                    border: `1px solid ${inputBorder}`,
                                    color: inputText,
                                    borderRadius: "0.5rem",
                                    padding: "0.625rem 2.5rem 0.625rem 1rem",
                                    boxShadow: isDark
                                        ? "0 2px 4px rgba(0,0,0,0.2)"
                                        : "0 2px 4px rgba(0,0,0,0.05)",
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = isDark
                                        ? "rgb(76, 242, 255)"
                                        : "rgb(47, 134, 253)";
                                    e.target.style.boxShadow = isDark
                                        ? "0 0 0 3px rgba(76, 242, 255, 0.1)"
                                        : "0 0 0 3px rgba(47, 134, 253, 0.1)";
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = inputBorder;
                                    e.target.style.boxShadow = isDark
                                        ? "0 2px 4px rgba(0,0,0,0.2)"
                                        : "0 2px 4px rgba(0,0,0,0.05)";
                                }}
                            >
                                <option value="" style={{ color: mediumGray }}>
                                    —
                                </option>
                                {t.size_options.map((opt, i) => (
                                    <option
                                        key={i}
                                        value={opt}
                                        style={{ color: inputText }}
                                    >
                                        {opt}
                                    </option>
                                ))}
                            </select>
                            <div
                                className="absolute inset-y-0 right-3 flex items-center pointer-events-none"
                                style={{ color: selectArrowColor }}
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <Input
                        label={t.phone}
                        name="phone"
                        type="tel"
                        isArabic={isArabic}
                        isDark={isDark}
                        colors={{
                            inputBg,
                            inputBorder,
                            inputText,
                            label: labelColor,
                        }}
                    />
                    <Input
                        label={t.email}
                        name="user_email"
                        type="email"
                        isArabic={isArabic}
                        isDark={isDark}
                        colors={{
                            inputBg,
                            inputBorder,
                            inputText,
                            label: labelColor,
                        }}
                    />
                    <Input
                        label={t.subject}
                        name="subject"
                        isArabic={isArabic}
                        isDark={isDark}
                        colors={{
                            inputBg,
                            inputBorder,
                            inputText,
                            label: labelColor,
                        }}
                    />

                    <div>
                        <label className="label font-semibold">
                            <span
                                className="label-text"
                                style={{ color: labelColor }}
                            >
                                {t.message}
                            </span>
                        </label>
                        <textarea
                            name="message"
                            rows="4"
                            className="w-full transition-all duration-200 focus:outline-none resize-none"
                            style={{
                                backgroundColor: inputBg,
                                border: `1px solid ${inputBorder}`,
                                color: inputText,
                                borderRadius: "0.5rem",
                                padding: "0.625rem 1rem",
                                boxShadow: isDark
                                    ? "0 2px 4px rgba(0,0,0,0.2)"
                                    : "0 2px 4px rgba(0,0,0,0.05)",
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = isDark
                                    ? "rgb(76, 242, 255)"
                                    : "rgb(47, 134, 253)";
                                e.target.style.boxShadow = isDark
                                    ? "0 0 0 3px rgba(76, 242, 255, 0.1)"
                                    : "0 0 0 3px rgba(47, 134, 253, 0.1)";
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = inputBorder;
                                e.target.style.boxShadow = isDark
                                    ? "0 2px 4px rgba(0,0,0,0.2)"
                                    : "0 2px 4px rgba(0,0,0,0.05)";
                            }}
                        />
                    </div>

                    <div className="flex justify-center pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                            style={{
                                background: gradientBlue,
                                color: white,
                                border: `1px solid ${
                                    isDark
                                        ? "rgba(255, 255, 255, 0.2)"
                                        : "rgba(255, 255, 255, 0.3)"
                                }`,
                                minWidth: "200px",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = `linear-gradient(135deg, ${gradientStart} 15deg, ${gradientEnd} 100%)`;
                                e.currentTarget.style.boxShadow = isDark
                                    ? `0 10px 25px -5px rgba(76, 242, 255, 0.25)`
                                    : `0 15px 30px -5px rgba(47, 134, 253, 0.25)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = gradientBlue;
                                e.currentTarget.style.boxShadow =
                                    "0 10px 25px -5px rgba(0, 0, 0, 0.1)";
                            }}
                        >
                            {loading ? t.loading : t.send}
                        </button>
                    </div>
                </form>
            </div>

            <div
                className="p-8 rounded-3xl shadow-lg lg:w-[30%] flex flex-col items-center text-center w-full sticky top-24"
                style={{
                    backgroundColor: cardBg,
                    border: cardBorder,
                    boxShadow: isDark
                        ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                        : "0 20px 60px rgba(0, 0, 0, 0.08)",
                }}
            >
                <h2
                    className="text-3xl font-bold mb-4"
                    style={{
                        background: gradientBlue,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}
                >
                    {t.request_quote_title}
                </h2>

                <p className="mb-6" style={{ color: subtitleColor }}>
                    {t.request_quote_text}
                </p>

                <Link
                    href="/devis"
                    className="px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full lg:w-auto text-center"
                    style={{
                        background: gradientBlue,
                        color: white,
                        border: `1px solid ${
                            isDark
                                ? "rgba(255, 255, 255, 0.2)"
                                : "rgba(255, 255, 255, 0.3)"
                        }`,
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = `linear-gradient(135deg, ${gradientStart} 15deg, ${gradientEnd} 100%)`;
                        e.currentTarget.style.boxShadow = isDark
                            ? `0 10px 25px -5px rgba(76, 242, 255, 0.25)`
                            : `0 15px 30px -5px rgba(47, 134, 253, 0.25)`;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = gradientBlue;
                        e.currentTarget.style.boxShadow =
                            "0 10px 25px -5px rgba(0, 0, 0, 0.1)";
                    }}
                >
                    {t.request_quote_btn}
                </Link>
            </div>
        </div>
    );
}

export default function ContactPage() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const lightGray = "rgb(240, 240, 240)";
    const mainBg = isDark
        ? "linear-gradient(135deg, #0c121e 0%, #121a2c 100%)"
        : `linear-gradient(135deg, ${lightGray} 0%, white 100%)`;

    return (
        <>
            <Header />
            <main
                className="pt-[120px] px-6 min-h-screen"
                style={{
                    background: mainBg,
                }}
            >
                <ContactForm />
            </main>
            <Footer />
        </>
    );
}
