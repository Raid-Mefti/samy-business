"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function DevisPage() {
    const { language } = useLanguage();

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

    return (
        <>
            <Header />

            <section className="py-24 bg-base-200">
                <div className="max-w-5xl mx-auto mt-20 rounded-3xl px-6 md:px-16 py-12 bg-base-100 border border-base-300 shadow-xl">
                    {/* Title */}
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-[rgb(223,126,60)]">
                            {t.pageTitle}
                        </h1>
                        <p className="mt-3 text-base-content/70 max-w-2xl mx-auto text-lg">
                            {t.pageSubtitle}
                        </p>
                    </div>

                    {/* Form */}
                    <form className="mt-12 space-y-10">
                        {/* Contact info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Field label={t.fields.name} required />
                            <Field label={t.fields.company} required />
                            <Field label={t.fields.phone} required />
                            <SelectField
                                label={t.fields.companySize}
                                required
                                options={t.companySizes}
                            />
                            <Field
                                label={t.fields.email}
                                type="email"
                                required
                            />
                            <Field
                                label={t.fields.deliveryLocation}
                                className="md:col-span-2"
                            />
                        </div>

                        <hr className="border-base-200" />

                        {/* Product table */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">
                                {t.productSectionTitle}
                            </h2>

                            <div className="overflow-x-auto rounded-xl border border-base-300">
                                <table className="w-full">
                                    <thead className="bg-base-200 text-base-content">
                                        <tr>
                                            <th className="p-3 font-semibold">
                                                {t.tableHeaders.type}
                                            </th>
                                            <th className="p-3 font-semibold">
                                                {t.tableHeaders.designation}
                                            </th>
                                            <th className="p-3 font-semibold">
                                                {t.tableHeaders.qty}
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {rows.map((row, i) => (
                                            <tr
                                                key={i}
                                                className="border-t border-base-300 hover:bg-base-200/50 transition"
                                            >
                                                <td className="p-2">
                                                    <select
                                                        className="select select-bordered w-full"
                                                        value={row.type}
                                                        onChange={(e) =>
                                                            updateRow(
                                                                i,
                                                                "type",
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        <option value="">
                                                            {t.selectProduct}
                                                        </option>
                                                        <option value="OXYDE DE ZINC">
                                                            OXYDE DE ZINC
                                                        </option>
                                                        <option value="Zamak">
                                                            Zamak
                                                        </option>
                                                        <option value="Aluminium">
                                                            Aluminium
                                                        </option>
                                                        <option value="Zinc SHG">
                                                            Zinc SHG
                                                        </option>
                                                    </select>
                                                </td>

                                                <td className="p-2">
                                                    <input
                                                        className="input input-bordered w-full"
                                                        value={row.designation}
                                                        onChange={(e) =>
                                                            updateRow(
                                                                i,
                                                                "designation",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </td>

                                                <td className="p-2">
                                                    <input
                                                        type="number"
                                                        className="input input-bordered w-full"
                                                        value={row.qty}
                                                        onChange={(e) =>
                                                            updateRow(
                                                                i,
                                                                "qty",
                                                                e.target.value
                                                            )
                                                        }
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
                            className="mt-4 text-sm font-semibold text-[rgb(223,126,60)] hover:underline hover:opacity-80"
                        >
                            + {t.addProduct}
                        </button>

                        {/* Submit */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="px-10 py-4 rounded-full bg-[rgb(223,126,60)] text-white font-bold shadow-md hover:shadow-lg hover:scale-105 transition"
                            >
                                {t.submitButton}
                            </button>
                        </div>

                        <p className="text-sm text-center text-base-content/60">
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
function Field({ label, type = "text", required, className }) {
    return (
        <div className={className}>
            <label className="block mb-1 font-medium">{label}</label>
            <input
                type={type}
                required={required}
                className="input input-bordered w-full"
            />
        </div>
    );
}

function SelectField({ label, options = [], required, className }) {
    return (
        <div className={className}>
            <label className="block mb-1 font-medium">{label}</label>
            <select
                required={required}
                className="select select-bordered w-full"
            >
                <option value="">{label}</option>
                {options.map((opt, i) => (
                    <option key={i} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
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
            company: "Nom de l’entreprise *",
            phone: "Numéro de téléphone *",
            companySize: "Taille de l’entreprise *",
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
