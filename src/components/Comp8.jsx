// src/components/sections/ProductsSection.jsx

import Image from "next/image";

// Reusable component for a single product entry
const ProductItem = ({ name, iconPath }) => (
    <div className="flex items-center space-x-3 p-2">
        {/* Product Icon/Image */}
        <Image
            src={iconPath}
            alt={name}
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
        />
        {/* Product Name */}
        <span className="text-black font-bold font-medium">{name}</span>
    </div>
);

// --- Static Data Definitions ---

const importedProducts = [
    { name: "Aluminium", iconPath: "/icons/aluminium.svg" },
    { name: "Plomb Doux", iconPath: "/icons/lead.svg" },
    { name: "Oxyde de Zinc", iconPath: "/icons/zinc_oxide.svg" },
    { name: "Oxyde de Zinc 2", iconPath: "/icons/zinc_oxide.svg" },
];

const exportedProducts = [
    { name: "Zinc SHG", iconPath: "/icons/zinc.svg" },
    { name: "ZAMAK", iconPath: "/icons/zamak.svg" },
    { name: "Carton", iconPath: "/icons/carton.svg" },
];

const manufacturedProducts = [
    { name: "Zinc Allumié", iconPath: "/icons/zinc_alu.svg" },
    { name: "Cuivres", iconPath: "/icons/copper.svg" },
];

// --- Main Component ---

export default function Comp8() {
    return (
        <section className="container mx-auto px-4 py-16 text-black">
            <h2 className="text-3xl font-bold mb-10 text-center text-site-text">
                LES PRODUITS DE SAMY BUSINESS
            </h2>

            {/* Grid Layout for Product Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Column 1: Produits Importés */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 border-b border-brand-accent pb-2 text-brand-accent">
                        Produits importés
                    </h3>
                    <div className="space-y-3">
                        {importedProducts.map((product) => (
                            <ProductItem key={product.name} {...product} />
                        ))}
                    </div>
                </div>

                {/* Column 2: Produits Exportés */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 border-b border-brand-accent pb-2 text-brand-accent">
                        Produits exportés
                    </h3>
                    <div className="space-y-3 text-black">
                        {exportedProducts.map((product) => (
                            <ProductItem key={product.name} {...product} />
                        ))}
                    </div>
                </div>

                {/* Column 3: Produits Fabriqués */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 border-b border-brand-accent pb-2 text-brand-accent">
                        Produits fabriqués
                    </h3>
                    <div className="space-y-3">
                        {manufacturedProducts.map((product) => (
                            <ProductItem key={product.name} {...product} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
