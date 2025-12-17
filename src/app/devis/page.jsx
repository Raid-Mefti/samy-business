"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DevisPage() {
    const [rows, setRows] = useState([
        { type: "", designation: "", qty: "" },
    ]);

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

            <section className="py-20 bg-base-100">
                <div className="max-w-5xl mx-auto px-4 mt-20">

                    {/* Title */}
                    <h1 className="text-4xl font-extrabold text-[rgb(223,126,60)]">
                        Demande de devis
                    </h1>
                    <p className="mt-3 text-base-content/70 max-w-2xl">
                        Envoyez votre demande de produit et nous vous contacterons
                        dans les plus brefs délais.
                    </p>

                    {/* Form */}
                    <form className="mt-12 space-y-10">

                        {/* Contact info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Field label="Nom et Prénom *" required />
                            <Field label="Nom de l’entreprise *" required />

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

                            <Field label="Numéro de téléphone *" required />
                            <Field
                                label="E-mail *"
                                type="email"
                                required
                            />
                            <Field
                                label="Lieu de livraison"
                                className="md:col-span-2"
                            />
                        </div>

                        <hr className="border-base-200" />

                        {/* Product table */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">
                                Qualité et autres caractéristiques
                            </h2>

                            <div className="overflow-x-auto">
                                <table className="w-full border border-base-200 rounded-xl overflow-hidden">
                                    <thead className="bg-base-200 text-left">
                                        <tr>
                                            <th className="p-3">Type produit</th>
                                            <th className="p-3">Désignation</th>
                                            <th className="p-3">QTY</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {rows.map((row, i) => (
                                            <tr
                                                key={i}
                                                className="border-t border-base-200"
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

                            <button
                                type="button"
                                onClick={addRow}
                                className="mt-4 text-sm font-semibold text-[rgb(223,126,60)] hover:underline"
                            >
                                + Ajouter un produit
                            </button>
                        </div>

                        {/* Submit */}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="px-8 py-4 rounded-full bg-[rgb(223,126,60)] text-white font-bold hover:opacity-90 transition"
                            >
                                Envoyer la demande
                            </button>
                        </div>

                        <p className="text-sm text-base-content/60">
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
