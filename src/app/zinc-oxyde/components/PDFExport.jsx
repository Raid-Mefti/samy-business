"use client";

export default function PDFExport() {
    const handlePDFExport = async () => {
        try {
            const response = await fetch("/api/generate-pdf", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: "Documentation Oxyde de Zinc" }),
            });

            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = "Documentation_Oxyde_Zinc_2025.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        } catch (error) {
            console.error("Erreur export PDF:", error);
        }
    };

    return (
        <button
            onClick={handlePDFExport}
            className="flex items-center gap-2 px-8 py-4 bg-sky-500 hover:bg-sky-600 
                 text-white font-bold text-base rounded-3xl shadow-sm 
                 transition-colors duration-300 active:scale-95"
        >
            📥 Télécharger PDF
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs font-semibold text-white/90">
                2025
            </span>
        </button>
    );
}
