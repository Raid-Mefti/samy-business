"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export default function DevisPage() {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const t = TRANSLATIONS[language]; // current translations

    const [rows, setRows] = useState([{ type: "", designation: "", qty: "" }]);

    const addRow = () => {
        setRows([...rows, { type: "", designation: "", qty: "" }]);
    };

    const updateRow = (index, field, value) => {
        const updated = [...rows];
        updated[index][field] = value;
        setRows(updated);
    };

    // Color scheme
    const gradientStart = "rgb(47, 134, 253)"; // #2f86fd
    const gradientEnd = "rgb(76, 242, 255)"; // #4cf2ff
    const blue = "rgb(25, 43, 94)"; // #192b5e
    const mediumGray = "rgb(180, 180, 180)";
    const lightGray = "rgb(240, 240, 240)";
    const darkGray = "rgb(30, 35, 45)";
    const white = "rgb(255, 255, 255)";

    const gradientBlue = `linear-gradient(135deg, ${gradientStart} 0%, ${gradientEnd} 100%)`;

    // Theme-based colors
    const pageBg = isDark
        ? "linear-gradient(135deg, #0c121e 0%, #121a2c 100%)"
        : `linear-gradient(135deg, ${lightGray} 0%, white 100%)`;
    const cardBg = isDark ? darkGray : white;
    const cardBorder = isDark
        ? `1px solid rgba(76, 242, 255, 0.2)`
        : `1px solid rgb(180, 180, 180)`;
    const textPrimary = isDark ? white : blue;
    const textSecondary = isDark ? mediumGray : blue;
    const inputBg = isDark ? "rgb(20, 25, 35)" : white;
    const inputBorder = isDark ? "rgb(60, 65, 75)" : "rgb(180, 180, 180)";
    const inputText = isDark ? white : blue;
    const tableHeaderBg = isDark
        ? "rgba(25, 43, 94, 0.3)"
        : "rgba(25, 43, 94, 0.05)";
    const tableHeaderText = isDark ? gradientEnd : blue;
    const tableRowHover = isDark
        ? "rgba(76, 242, 255, 0.05)"
        : "rgba(25, 43, 94, 0.02)";
    const borderColor = isDark
        ? "rgba(76, 242, 255, 0.1)"
        : "rgba(25, 43, 94, 0.1)";
    const selectArrowColor = isDark ? gradientEnd : blue;

    return (
        <>
            <Header />

            <section
                className="py-24 min-h-screen"
                style={{
                    background: pageBg,
                }}
            >
                <div
                    className="max-w-5xl mx-auto mt-20 rounded-3xl px-6 md:px-16 py-12 shadow-2xl"
                    style={{
                        backgroundColor: cardBg,
                        border: cardBorder,
                        boxShadow: isDark
                            ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                            : "0 20px 60px rgba(0, 0, 0, 0.08)",
                    }}
                >
                    {/* Title */}
                    <div className="text-center">
                        <h1
                            className="text-4xl font-extrabold"
                            style={{
                                background: gradientBlue,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            {t.pageTitle}
                        </h1>
                        <p
                            className="mt-3 max-w-2xl mx-auto text-lg"
                            style={{ color: textSecondary }}
                        >
                            {t.pageSubtitle}
                        </p>
                    </div>

                    {/* Form */}
                    <form className="mt-12 space-y-10">
                        {/* Contact info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Field
                                label={t.fields.name}
                                required
                                isDark={isDark}
                                colors={{ inputBg, inputBorder, inputText }}
                            />
                            <Field
                                label={t.fields.company}
                                required
                                isDark={isDark}
                                colors={{ inputBg, inputBorder, inputText }}
                            />
                            <Field
                                label={t.fields.phone}
                                required
                                isDark={isDark}
                                colors={{ inputBg, inputBorder, inputText }}
                            />
                            <SelectField
                                label={t.fields.companySize}
                                required
                                options={t.companySizes}
                                isDark={isDark}
                                colors={{
                                    inputBg,
                                    inputBorder,
                                    inputText,
                                    selectArrowColor,
                                }}
                            />
                            <Field
                                label={t.fields.email}
                                type="email"
                                required
                                isDark={isDark}
                                colors={{ inputBg, inputBorder, inputText }}
                            />
                            <Field
                                label={t.fields.deliveryLocation}
                                className="md:col-span-2"
                                isDark={isDark}
                                colors={{ inputBg, inputBorder, inputText }}
                            />
                        </div>

                        <hr style={{ borderColor: borderColor }} />

                        {/* Product table */}
                        <div>
                            <h2
                                className="text-2xl font-bold mb-4"
                                style={{ color: textPrimary }}
                            >
                                {t.productSectionTitle}
                            </h2>

                            <div
                                className="overflow-x-auto rounded-xl"
                                style={{
                                    border: `1px solid ${
                                        isDark
                                            ? "rgb(60, 65, 75)"
                                            : "rgb(180, 180, 180)"
                                    }`,
                                }}
                            >
                                <table className="w-full">
                                    <thead>
                                        <tr
                                            style={{
                                                backgroundColor: tableHeaderBg,
                                            }}
                                        >
                                            <th
                                                className="p-3 font-semibold text-left"
                                                style={{
                                                    color: tableHeaderText,
                                                }}
                                            >
                                                {t.tableHeaders.type}
                                            </th>
                                            <th
                                                className="p-3 font-semibold text-left"
                                                style={{
                                                    color: tableHeaderText,
                                                }}
                                            >
                                                {t.tableHeaders.designation}
                                            </th>
                                            <th
                                                className="p-3 font-semibold text-left"
                                                style={{
                                                    color: tableHeaderText,
                                                }}
                                            >
                                                {t.tableHeaders.qty}
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {rows.map((row, i) => (
                                            <tr
                                                key={i}
                                                className="border-t transition-all duration-200"
                                                style={{
                                                    borderTop: `1px solid ${borderColor}`,
                                                    backgroundColor:
                                                        "transparent",
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.backgroundColor =
                                                        tableRowHover;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.backgroundColor =
                                                        "transparent";
                                                }}
                                            >
                                                <td className="p-2">
                                                    <div className="relative">
                                                        <select
                                                            className="w-full px-3 py-2 appearance-none cursor-pointer"
                                                            value={row.type}
                                                            onChange={(e) =>
                                                                updateRow(
                                                                    i,
                                                                    "type",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            style={{
                                                                backgroundColor:
                                                                    inputBg,
                                                                border: `1px solid ${inputBorder}`,
                                                                color: inputText,
                                                                borderRadius:
                                                                    "0.5rem",
                                                                paddingRight:
                                                                    "2.5rem",
                                                            }}
                                                        >
                                                            <option
                                                                value=""
                                                                style={{
                                                                    color: mediumGray,
                                                                }}
                                                            >
                                                                {
                                                                    t.selectProduct
                                                                }
                                                            </option>
                                                            <option
                                                                value="OXYDE DE ZINC"
                                                                style={{
                                                                    color: inputText,
                                                                }}
                                                            >
                                                                OXYDE DE ZINC
                                                            </option>
                                                            <option
                                                                value="Zamak"
                                                                style={{
                                                                    color: inputText,
                                                                }}
                                                            >
                                                                Zamak
                                                            </option>
                                                            <option
                                                                value="Aluminium"
                                                                style={{
                                                                    color: inputText,
                                                                }}
                                                            >
                                                                Aluminium
                                                            </option>
                                                            <option
                                                                value="Zinc SHG"
                                                                style={{
                                                                    color: inputText,
                                                                }}
                                                            >
                                                                Zinc SHG
                                                            </option>
                                                        </select>
                                                        <div
                                                            className="absolute inset-y-0 right-3 flex items-center pointer-events-none"
                                                            style={{
                                                                color: selectArrowColor,
                                                            }}
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
                                                                    strokeWidth={
                                                                        2
                                                                    }
                                                                    d="M19 9l-7 7-7-7"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="p-2">
                                                    <input
                                                        className="w-full px-3 py-2"
                                                        value={row.designation}
                                                        onChange={(e) =>
                                                            updateRow(
                                                                i,
                                                                "designation",
                                                                e.target.value
                                                            )
                                                        }
                                                        style={{
                                                            backgroundColor:
                                                                inputBg,
                                                            border: `1px solid ${inputBorder}`,
                                                            color: inputText,
                                                            borderRadius:
                                                                "0.5rem",
                                                        }}
                                                    />
                                                </td>

                                                <td className="p-2">
                                                    <input
                                                        type="number"
                                                        className="w-full px-3 py-2"
                                                        value={row.qty}
                                                        onChange={(e) =>
                                                            updateRow(
                                                                i,
                                                                "qty",
                                                                e.target.value
                                                            )
                                                        }
                                                        style={{
                                                            backgroundColor:
                                                                inputBg,
                                                            border: `1px solid ${inputBorder}`,
                                                            color: inputText,
                                                            borderRadius:
                                                                "0.5rem",
                                                        }}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={addRow}
                            className="mt-4 text-sm font-semibold hover:opacity-80 transition-all duration-300 flex items-center gap-2 group"
                            style={{ color: gradientEnd }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform =
                                    "translateY(-1px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform =
                                    "translateY(0)";
                            }}
                        >
                            <div
                                className="w-6 h-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                                style={{
                                    background: `linear-gradient(135deg, rgba(47, 134, 253, 0.1) 0%, rgba(76, 242, 255, 0.1) 100%)`,
                                    border: `1px solid ${gradientEnd}`,
                                }}
                            >
                                <span className="text-sm">+</span>
                            </div>
                            {t.addProduct}
                        </button>

                        {/* Submit */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
                                    e.currentTarget.style.background = `linear-gradient(135deg, ${gradientStart}15deg, ${gradientEnd} 100%)`;
                                    e.currentTarget.style.boxShadow = isDark
                                        ? `0 10px 25px -5px rgba(76, 242, 255, 0.25)`
                                        : `0 15px 30px -5px rgba(47, 134, 253, 0.25)`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background =
                                        gradientBlue;
                                    e.currentTarget.style.boxShadow =
                                        "0 10px 25px -5px rgba(0, 0, 0, 0.1)";
                                }}
                            >
                                {t.submitButton}
                            </button>
                        </div>

                        <p
                            className="text-sm text-center"
                            style={{ color: mediumGray }}
                        >
                            {t.requiredNote}
                        </p>
                    </form>
                </div>
            </section>

            <Footer />
        </>
    );
}

/* ---------- Reusable components ---------- */
function Field({ label, type = "text", required, className, isDark, colors }) {
    return (
        <div className={className}>
            <label
                className="block mb-1 font-medium"
                style={{ color: isDark ? colors.inputText : "rgb(25, 43, 94)" }}
            >
                {label}
            </label>
            <input
                type={type}
                required={required}
                className="w-full transition-all duration-200 focus:outline-none"
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

function SelectField({
    label,
    options = [],
    required,
    className,
    isDark,
    colors,
}) {
    return (
        <div className={className}>
            <label
                className="block mb-1 font-medium"
                style={{ color: isDark ? colors.inputText : "rgb(25, 43, 94)" }}
            >
                {label}
            </label>
            <div className="relative">
                <select
                    required={required}
                    className="w-full appearance-none cursor-pointer transition-all duration-200 focus:outline-none"
                    style={{
                        backgroundColor: colors.inputBg,
                        border: `1px solid ${colors.inputBorder}`,
                        color: colors.inputText,
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
                        e.target.style.borderColor = colors.inputBorder;
                        e.target.style.boxShadow = isDark
                            ? "0 2px 4px rgba(0,0,0,0.2)"
                            : "0 2px 4px rgba(0,0,0,0.05)";
                    }}
                >
                    <option value="" style={{ color: "rgb(180, 180, 180)" }}>
                        {label}
                    </option>
                    {options.map((opt, i) => (
                        <option
                            key={i}
                            value={opt}
                            style={{ color: colors.inputText }}
                        >
                            {opt}
                        </option>
                    ))}
                </select>
                <div
                    className="absolute inset-y-0 right-3 flex items-center pointer-events-none"
                    style={{ color: colors.selectArrowColor }}
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
    );
}

/* ---------- Translations ---------- */
const TRANSLATIONS = {
    fr: {
        pageTitle: "Demande de devis",
        pageSubtitle:
            "Envoyez votre demande de produit et nous vous contacterons dans les plus brefs délais.",
        fields: {
            name: "Nom et Prénom *",
            company: "Nom de l'entreprise *",
            phone: "Numéro de téléphone *",
            companySize: "Taille de l'entreprise *",
            email: "E-mail *",
            deliveryLocation: "Lieu de livraison",
        },
        companySizes: [
            "Micro (1–9 employés)",
            "Petite (10–49 employés)",
            "Moyenne (50–249 employés)",
            "Grande (250+ employés)",
        ],
        productSectionTitle: "Quantité et autres caractéristiques",
        tableHeaders: {
            type: "Type produit",
            designation: "Désignation",
            qty: "QTY",
        },
        selectProduct: "Choisir un produit",
        addProduct: "Ajouter un produit",
        submitButton: "Envoyer la demande",
        requiredNote: "Les champs marqués * sont obligatoires.",
    },
    en: {
        pageTitle: "Request a Quote",
        pageSubtitle:
            "Send your product request and we will contact you as soon as possible.",
        fields: {
            name: "Full Name *",
            company: "Company Name *",
            phone: "Phone Number *",
            companySize: "Company Size *",
            email: "E-mail *",
            deliveryLocation: "Delivery Location",
        },
        companySizes: [
            "Micro (1–9 employees)",
            "Small (10–49 employees)",
            "Medium (50–249 employees)",
            "Large (250+ employees)",
        ],
        productSectionTitle: "Quantity and other characteristics",
        tableHeaders: {
            type: "Product Type",
            designation: "Designation",
            qty: "QTY",
        },
        selectProduct: "Select a product",
        addProduct: "Add a product",
        submitButton: "Send Request",
        requiredNote: "Fields marked * are required.",
    },
    ar: {
        pageTitle: "طلب عرض سعر",
        pageSubtitle: "أرسل طلب منتجك وسنتواصل معك في أقرب وقت ممكن.",
        fields: {
            name: "الاسم الكامل *",
            company: "اسم الشركة *",
            phone: "رقم الهاتف *",
            companySize: "حجم الشركة *",
            email: "البريد الإلكتروني *",
            deliveryLocation: "مكان التسليم",
        },
        companySizes: [
            "صغيرة جدًا (1–9 موظفين)",
            "صغيرة (10–49 موظفين)",
            "متوسطة (50–249 موظفين)",
            "كبيرة (250+ موظف)",
        ],
        productSectionTitle: "الكمية وخصائص أخرى",
        tableHeaders: {
            type: "نوع المنتج",
            designation: "التسمية",
            qty: "الكمية",
        },
        selectProduct: "اختر منتجًا",
        addProduct: "أضف منتجًا",
        submitButton: "إرسال الطلب",
        requiredNote: "الحقول المميزة بـ * إلزامية.",
    },
};
