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
      className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all shadow-lg shadow-sky-500/50 flex items-center gap-2"
    >
      📥 Télécharger Documentation PDF
    </button>
  );
}
