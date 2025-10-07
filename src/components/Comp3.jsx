export default function Comp3() {
    return (
        <div className="hero bg-white h-96 mt-20 mb-20 text-black">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="logo2.png"
                    className="max-w-sm rounded-lg "
                />
                <div>
                    <h1 className="text-5xl font-bold">About samy business!</h1>
                    <p className="py-6 text-xl">
                        Basée à Alger et créée en 2007, Samy Business est une
                        EURL (Entreprise Unipersonnelle à Responsabilité
                        Limitée) algérienne spécialisée dans l'importation de
                        produits sidérurgiques, ferreux et non-ferreux, destinés
                        à la transformation et à la fabrication. Dirigée par son
                        gérant unique, M. Rabah BOURRAI, l'entreprise a vu son
                        chiffre d'affaires augmenter de manière significative
                        ces dernières années, atteignant 1 977 000 KDA en 2022.
                        Avec une équipe d'une quinzaine d'employés, Samy
                        Business se positionne comme un acteur clé du marché
                        local, misant sur la qualité, la fiabilité et
                        l'innovation pour satisfaire ses clients.
                    </p>
                    <button className="btn btn-info ">learn more</button>
                </div>
            </div>
        </div>
    );
}
