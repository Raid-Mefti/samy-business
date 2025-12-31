"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DevisPage() {
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
                <div
                    className="
            max-w-5xl
            mx-auto
            mt-20
            rounded-3xl
            px-6 md:px-16 py-12
            bg-base-100
            border border-base-300
            shadow-xl
        "
                >
                    {/* Title */}
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-[rgb(223,126,60)]">
                            Demande de devis
                        </h1>
                        <p className="mt-3 text-base-content/70 max-w-2xl mx-auto text-lg">
                            Envoyez votre demande de produit et nous vous
                            contacterons dans les plus brefs délais.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="mt-12 space-y-10">
                        {/* Contact info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Field label="Nom et Prénom *" required />
                            <Field label="Nom de l’entreprise *" required />
                            <Field label="Numéro de téléphone *" required />

                            <SelectField
                                label="Taille de l’entreprise *"
                                required
                                options={[
                                    "Micro (1–9 employés)",
                                    "Petite (10–49 employés)",
                                    "Moyenne (50–249 employés)",
                                    "Grande (250+ employés)",
                                ]}
                            />

                            <Field label="E-mail *" type="email" required />
                            <Field
                                label="Lieu de livraison"
                                className="md:col-span-2"
                            />
                        </div>

                        <hr className="border-base-200" />

                        {/* Product table */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">
                                Quantité et autres caractéristiques
                            </h2>

                            <div className="overflow-x-auto rounded-xl border border-base-300">
                                <table className="w-full">
                                    <thead className="bg-base-200 text-base-content">
                                        <tr>
                                            <th className="p-3 font-semibold">
                                                Type produit
                                            </th>
                                            <th className="p-3 font-semibold">
                                                Désignation
                                            </th>
                                            <th className="p-3 font-semibold">
                                                QTY
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {rows.map((row, i) => (
                                            <tr
                                                key={i}
                                                className="
                        border-t border-base-300
                        hover:bg-base-200/50
                        transition
                    "
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
                                                            Choisir un produit
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
                            className="
        mt-4 text-sm font-semibold
        text-[rgb(223,126,60)]
        hover:underline
        hover:opacity-80
    "
                        >
                            + Ajouter un produit
                        </button>
                        {/* Submit */}
                        <div className="flex justify-center ">
                            <button
                                type="submit"
                                className="
        px-10 py-4
        rounded-full
        bg-[rgb(223,126,60)]
        text-white font-bold
        shadow-md
        hover:shadow-lg
        hover:scale-105
        transition
    "
                            >
                                Envoyer la demande
                            </button>
                        </div>

                        <p className="text-sm text-center text-base-content/60">
                            Les champs marqués * sont obligatoires.
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
                <option value="">Sélectionner</option>
                {options.map((opt, i) => (
                    <option key={i} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
        </div>
    );
}
