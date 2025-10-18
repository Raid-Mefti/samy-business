import React from "react";

// Liste des titres pour la navigation latérale
const headings = [
    { id: "chapitre-1", title: "Chapitre 1: Fondamentaux Physico-Chimiques" },
    { id: "sec-1-1", title: "1.1. Propriétés Élémentaires du Zinc" },
    { id: "sec-1-2", title: "1.2. De la Calamine au Laiton: La Cémentation" },
    { id: "sec-1-3", title: "1.3. L'Âge de l'Isolement du Métal Pur" },
    { id: "sec-1-4", title: "1.4. L'Évolution dans la Construction" },
    { id: "chapitre-2", title: "Chapitre 2: Minerais, Métallurgie & Affinage" },
    { id: "sec-2-1", title: "2.1. Géologie et Typologie des Minerais" },
    { id: "sec-2-2", title: "2.2. Les Processus d'Extraction Primaire" },
    { id: "sec-2-2-1", title: "2.2.1. La Pyrométallurgie" },
    { id: "sec-2-2-2", title: "2.2.2. L'Hydro-Électrométallurgie" },
    { id: "sec-2-3", title: "2.3. Production Secondaire: Recyclage" },
    { id: "sec-2-4", title: "2.4. Classification de Pureté et Normes" },
    {
        id: "chapitre-3",
        title: "Chapitre 3: Les Formes Alliées et Applications",
    },
    { id: "sec-3-1", title: "3.1. Le Laiton (Brass)" },
    { id: "sec-3-2", title: "3.2. Le Zamak" },
    { id: "sec-3-3", title: "3.3. Applications Architecturales" },
    {
        id: "chapitre-4",
        title: "Chapitre 4: Utilisations Chimiques et Composés",
    },
    { id: "sec-4-1", title: "4.1. La Galvanisation de l'Acier" },
    { id: "sec-4-2", title: "4.2. Les Composés Inorganiques Clés" },
    { id: "sec-4-2-1", title: "4.2.1. Oxyde de Zinc (ZnO)" },
    { id: "sec-4-2-2", title: "4.2.2. Autres Composés Importants" },
    { id: "sec-4-3", title: "4.3. Cadre Réglementaire (REACH)" },
    {
        id: "chapitre-5",
        title: "Chapitre 5: Zinc dans la Transition Énergétique",
    },
    { id: "sec-5-1", title: "5.1. Contexte des Alternatives au Lithium" },
    { id: "sec-5-2", title: "5.2. Technologie des Batteries Zinc-Air" },
    { id: "sec-5-3", title: "5.3. Limites Actuelles et État de la Recherche" },
    {
        id: "chapitre-6",
        title: "Chapitre 6: Statistiques Mondiales et Projections",
    },
    { id: "sec-6-1", title: "6.1. Réserves Mondiales et Géographie" },
    { id: "sec-6-2", title: "6.2. Géographie de la Production Minière" },
    { id: "sec-6-3", title: "6.3. Production et Consommation de Métal" },
    { id: "sec-6-4", title: "6.4. Analyse du Marché et des Prix" },
];

// Helper component for displaying technical values cleanly
const TechValue = ({ value, unit }) => (
    <span className="font-mono bg-gray-100 px-1 rounded text-sm text-gray-700">
        {value} <span className="italic text-xs">{unit}</span>
    </span>
);

const WikiPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            {/* Header Area */}
            <header className="bg-white shadow-md py-4 px-6 lg:px-12 sticky top-0 z-10 border-b border-gray-200">
                <h1 className="text-3xl font-extrabold text-blue-800 tracking-tight">
                    Wiki: Rapport Encyclopédique sur le Zinc (Zn)
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                    Analyse exhaustive des dynamiques de marché et des
                    applications
                </p>
            </header>

            {/* Main Content Area: Sidebar + Article */}
            <div className="flex flex-1 max-w-7xl mx-auto w-full">
                {/* Sidebar / Table of Contents */}
                <aside className="hidden lg:block w-72 flex-shrink-0 border-r border-gray-200 bg-white py-8 sticky top-[5.5rem] h-[calc(100vh-5.5rem)] overflow-y-auto">
                    <h3 className="text-lg font-semibold text-gray-700 px-6 mb-4">
                        Table des Matières
                    </h3>
                    <nav>
                        {headings.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`block py-1.5 px-6 text-sm hover:bg-blue-50 transition duration-150 ${
                                    item.id.includes("chapitre")
                                        ? "font-bold text-blue-700 mt-2"
                                        : item.id.includes("sec-") &&
                                          item.id.length === 6
                                        ? "ml-4 text-gray-700"
                                        : "ml-8 text-gray-500"
                                }`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </nav>
                </aside>

                {/* Main Article Content */}
                <main className="flex-1 p-6 lg:p-12 bg-white">
                    <div className="max-w-4xl mx-auto space-y-8 text-gray-800">
                        <p className="text-xl italic text-gray-600 border-l-4 border-blue-500 pl-4 py-2">
                            Ce rapport d'expertise fournit une analyse
                            exhaustive du zinc, un élément fondamental de la
                            métallurgie et de la chimie moderne, en détaillant
                            son contexte historique, ses formes (minerais,
                            métal, alliages), ses applications industrielles et
                            chimiques, et ses dynamiques de marché mondiales,
                            appuyées par les données de l'USGS et de l'ILZSG.
                        </p>

                        {/* Chapter 1 */}
                        <h2
                            id="chapitre-1"
                            className="text-4xl font-bold pt-4 text-blue-800 border-b pb-2"
                        >
                            Chapitre 1: Fondamentaux Physico-Chimiques et
                            Retraçage Historique
                        </h2>

                        <h3
                            id="sec-1-1"
                            className="text-2xl font-semibold mt-6 text-gray-700"
                        >
                            1.1. Propriétés Élémentaires du Zinc (Symbole Zn,
                            Numéro Atomique 30)
                        </h3>
                        <p>
                            Le zinc (Zn, numéro atomique 30) est un métal de
                            transition post-transition caractérisé par des
                            propriétés physiques spécifiques qui dictent son
                            usage industriel. Sa densité est de{" "}
                            <TechValue value="7.14" unit="g/cm³" />
                            à l'état solide et diminue légèrement à{" "}
                            <TechValue value="6.62" unit="g/cm³" /> à l'état
                            liquide, au-dessus de son point de fusion de{" "}
                            <TechValue value="419.5" unit="°C" />. Son point
                            d'ébullition relativement bas, à{" "}
                            <TechValue value="907" unit="°C" /> est une
                            caractéristique cruciale qui a historiquement
                            compliqué son isolation sous forme de métal pur. Ces
                            propriétés thermiques et mécaniques en font un
                            matériau idéal pour des processus comme le moulage
                            sous pression et l'alliage.
                            <sup className="text-blue-500">[1]</sup>
                        </p>

                        <h3
                            id="sec-1-2"
                            className="text-2xl font-semibold mt-6 text-gray-700"
                        >
                            1.2. De la Calamine au Laiton: Les Usages
                            Pré-Industriels et la Cémentation
                        </h3>
                        <p>
                            Bien que le zinc métal pur ait été isolé
                            tardivement, ses alliages sont utilisés depuis
                            l'Antiquité. L'utilisation la plus notable et la
                            plus ancienne est celle du laiton, un alliage de
                            cuivre et de zinc dont la teneur maximale en zinc
                            est d'environ <TechValue value="46" unit="%" />.
                            <sup className="text-blue-500">[2]</sup> Le laiton
                            est le plus répandu des alliages de cuivre et est
                            apprécié pour son excellente conductivité thermique
                            et électrique, ses propriétés amagnétiques, et son
                            aspect esthétique qui le fait ressembler à de l'or.
                            <sup className="text-blue-500">[3]</sup>
                        </p>
                        <p>
                            Historiquement, le laiton était produit sans l'étape
                            coûteuse de l'extraction du zinc métal. Ce
                            processus, appelé cémentation, utilisait des
                            minerais de zinc oxydés, souvent désignés sous le
                            terme de calamine (historiquement de l'hémimorphite
                            ou de la smithsonite). La calamine était chauffée
                            avec du cuivre et du charbon dans un creuset ouvert,
                            permettant au zinc de se vaporiser puis de diffuser
                            dans le cuivre, formant l'alliage *in situ*. Cette
                            maîtrise de l'alliage, sans connaissance de
                            l'élément pur, est un marqueur d'une métallurgie
                            précoce et sophistiquée.
                        </p>

                        <h3
                            id="sec-1-3"
                            className="text-2xl font-semibold mt-6 text-gray-700"
                        >
                            1.3. L'Âge de l'Isolement du Métal Pur: Le Rôle
                            d'Andreas Sigismund Marggraf
                        </h3>
                        <p>
                            L'isolement du zinc sous sa forme métallique a
                            représenté un défi majeur pour les chimistes et
                            métallurgistes. Contrairement au fer ou au cuivre,
                            qui restent solides après réduction, le zinc se
                            vaporise à des températures relativement basses (
                            <TechValue value="907" unit="°C" />
                            ). Pour obtenir du zinc métal pur, il est impératif
                            de condenser rapidement cette vapeur et d'empêcher
                            sa réoxydation au contact de l'air.
                        </p>
                        <p>
                            Le chimiste allemand Andreas Sigismund Marggraf est
                            largement crédité pour la découverte formelle de
                            l'élément zinc et pour avoir développé des moyens
                            commercialement applicables de son extraction au
                            milieu du XVIIIe siècle. Ce succès technique,
                            impliquant la distillation et la condensation
                            contrôlée, a marqué le passage de l'utilisation des
                            alliages naturels à la production industrielle du
                            zinc pur, rendant le métal disponible pour des
                            applications à grande échelle.
                        </p>

                        <h3
                            id="sec-1-4"
                            className="text-2xl font-semibold mt-6 text-gray-700"
                        >
                            1.4. L'Évolution du Zinc dans la Construction
                        </h3>
                        <p>
                            Le zinc est devenu un métal indispensable dans
                            l'industrie de la construction depuis plus de 200
                            ans. Il est massivement utilisé pour les toitures,
                            les gouttières, et le bardage.
                            <sup className="text-blue-500">[2]</sup> Les
                            systèmes de toiture modernes exploitent la qualité
                            du zinc-titane pour garantir la durabilité et la
                            sécurité, utilisant des techniques d'assemblage
                            sophistiquées telles que le double ou simple joint
                            debout.
                        </p>
                        <p>
                            Historiquement, l'épaisseur des feuilles de zinc
                            était obtenue par laminage, un processus alors
                            appelé "écrasement." Ce procédé était imprécis. Les
                            épaisseurs courantes étaient codifiées, comme le
                            Zinc 12 (<TechValue value="0.65" unit="mm" />) et le
                            Zinc 16 (<TechValue value="1.10" unit="mm" />
                            ). Aujourd'hui, les feuilles sont produites par
                            laminage en bande, permettant une précision au
                            centième de millimètre, essentielle pour les
                            systèmes architecturaux modernes.
                        </p>

                        {/* Chapter 2 */}
                        <h2
                            id="chapitre-2"
                            className="text-4xl font-bold pt-4 text-blue-800 border-b pb-2"
                        >
                            Chapitre 2: Minerais, Métallurgie d'Extraction et
                            Affinage
                        </h2>

                        <h3
                            id="sec-2-1"
                            className="text-2xl font-semibold mt-6 text-gray-700"
                        >
                            2.1. Géologie et Typologie des Minerais de Zinc
                        </h3>
                        <p>
                            Le zinc est principalement extrait de minerais
                            sulfurés, dont le plus important est la **Blende**
                            (sulfure de zinc, <TechValue value="ZnS" unit="" />
                            ). L'extraction du métal de ce minerai est un
                            processus complexe qui nécessite des techniques
                            avancées de transformation, car le sulfure doit
                            d'abord être converti en oxyde.
                        </p>

                        <h3
                            id="sec-2-2"
                            className="text-2xl font-semibold mt-6 text-gray-700"
                        >
                            2.2. Les Processus d'Extraction Primaire
                        </h3>
                        <p>
                            L'industrie du zinc utilise principalement deux
                            voies pour transformer le concentré minier en métal
                            raffiné: la pyrométallurgie et
                            l'hydro-électrométallurgie.
                        </p>

                        <h4
                            id="sec-2-2-1"
                            className="text-xl font-semibold mt-4 text-gray-600 ml-4"
                        >
                            2.2.1. La Pyrométallurgie
                        </h4>
                        <p className="ml-4">
                            Le processus pyrométallurgique implique des
                            opérations à haute température: le grillage du
                            sulfure de zinc pour obtenir un oxyde, suivi de la
                            réduction de cet oxyde. L'affinage final est réalisé
                            par liquation et distillation. Cependant, cette
                            méthode est souvent associée à des enjeux
                            environnementaux importants, notamment la production
                            d'émissions de dioxyde de soufre et de dioxyde de
                            carbone, dues aux températures élevées requises, ce
                            qui incite l'industrie à rechercher des solutions
                            plus propres.
                        </p>

                        <h4
                            id="sec-2-2-2"
                            className="text-xl font-semibold mt-4 text-gray-600 ml-4"
                        >
                            2.2.2. L'Hydro-Électrométallurgie
                        </h4>
                        <p className="ml-4">
                            Le procédé hydro-électrométallurgique est la méthode
                            dominante pour produire le zinc de haute pureté. Il
                            commence par le grillage du minerai pour obtenir
                            l'oxyde. L'étape hydrométallurgique consiste ensuite
                            en la lixiviation du minerai grillé dans une
                            solution d'acide sulfurique chaude, permettant de
                            dissoudre le zinc ainsi que d'autres métaux comme le
                            cadmium, le cuivre et le cobalt.
                            <sup className="text-blue-500">[10]</sup> La
                            solution purifiée passe ensuite à l'étape de
                            l'électrométallurgie (électrolyse), où le zinc en
                            solution est solidifié sur des cathodes.
                        </p>
                        <p className="ml-4">
                            L'affinage par électrométallurgie est un processus à
                            forte valeur ajoutée, mais il est exceptionnellement
                            gourmand en énergie. Par exemple, une usine
                            d'envergure mondiale peut consommer{" "}
                            <TechValue value="1.2" unit="TWh" /> d'électricité
                            par an, les coûts énergétiques représentant un tiers
                            des dépenses opérationnelles.
                            <sup className="text-blue-500">[10]</sup> La
                            viabilité économique des raffineries de zinc dépend
                            donc directement de l'accès à une énergie électrique
                            abondante et peu coûteuse, souvent hydroélectrique.
                        </p>

                        <h3
                            id="sec-2-3"
                            className="text-2xl font-semibold mt-6 text-gray-700"
                        >
                            2.3. Production Secondaire: Le Rôle Croissant du
                            Recyclage
                        </h3>
                        <p>
                            Le recyclage constitue une part essentielle de
                            l'offre mondiale de zinc. En 2002, environ{" "}
                            <TechValue value="30" unit="%" />
                            de la production totale de « zinc-métal » provenait
                            du recyclage. En raison de la valeur intrinsèque du
                            zinc, l'industrie est constamment engagée à
                            améliorer les technologies de récupération du métal
                            contenu dans les produits en fin de vie. Une source
                            de recyclage en croissance est la récupération du
                            zinc à partir de l'acier galvanisé, notamment en
                            filtrant les poussières des fours électriques
                            d'acier.<sup className="text-blue-500">[11]</sup>
                        </p>

                        <h3
                            id="sec-2-4"
                            className="text-2xl font-semibold mt-6 text-gray-700"
                        >
                            2.4. Le Zinc Métal: Classification de Pureté et
                            Normes Commerciales
                        </h3>
                        <p>
                            La pureté du zinc métal est critique et classifiée
                            selon des standards internationaux stricts, car la
                            présence de traces d'impuretés peut gravement
                            affecter les propriétés des alliages.
                        </p>
                        <p className="font-semibold mt-3">
                            Classification et Spécifications
                        </p>
                        <p>
                            Le grade de référence pour les applications modernes
                            est le **Special High Grade (SHG)**, garantissant
                            une pureté minimale de{" "}
                            <TechValue value="99.995" unit="%" />.
                            <sup className="text-blue-500">[12]</sup> Ce niveau
                            de pureté est requis pour des alliages de moulage
                            comme le Zamak et la galvanisation de haute
                            performance.
                        </p>
                        <p>
                            Le zinc SHG doit se conformer à plusieurs normes
                            internationales, notamment :
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>
                                ISO 752-2004, Grade ZN{" "}
                                <TechValue value="99.995" unit="" />.
                                <sup className="text-blue-500">[1]</sup>
                            </li>
                            <li>
                                EN 1179-2003, Grade ZI.
                                <sup className="text-blue-500">[1]</sup>
                            </li>
                            <li>
                                ASTM B6-SHG Z13001 Grade.
                                <sup className="text-blue-500">[13]</sup>
                            </li>
                        </ul>
                        <p>
                            Le Tableau 1 résume les spécifications de ces
                            classifications:
                        </p>

                        {/* Table 1 */}
                        <div className="overflow-x-auto my-6 shadow-lg rounded-lg border border-gray-200">
                            <table className="min-w-full divide-y divide-gray-200">
                                <caption className="text-lg font-bold p-3 bg-gray-100 border-b">
                                    Tableau 1: Spécifications Techniques du Zinc
                                    de Haute Pureté (SHG)
                                </caption>
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Norme
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Grade
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Pureté Minimale Zn (%)
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Usage Type
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Sources
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            ISO 752-2004
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            ZN 99.995
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            99.9950
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            Galvanisation de haute qualité,
                                            Alliages Zamak
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            1
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            EN 1179:2003
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            ZI
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            99.9950
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            Construction (Zinc-Titane), Alliages
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            13
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            ASTM B6
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            SHG Z13001 Grade
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            99.9950
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            Applications critiques,
                                            Électrométallurgie
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            13
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Chapter 3 */}
                        <h2
                            id="chapitre-3"
                            className="text-4xl font-bold pt-4 text-blue-800 border-b pb-2"
                        >
                            Chapitre 3: Les Formes Alliées et Applications
                            Architecturale
                        </h2>

                        <h3
                            id="sec-3-1"
                            className="text-2xl font-semibold mt-6 text-gray-700"
                        >
                            3.1. Le Laiton (Brass)
                        </h3>
                        <p>
                            Le laiton est l'alliage le plus couramment utilisé
                            contenant du cuivre et du zinc. Sa composition peut
                            inclure jusqu'à <TechValue value="46" unit="%" /> de
                            zinc.<sup className="text-blue-500">[2]</sup> Il est
                            omniprésent dans les applications nécessitant une
                            bonne conductivité et une résistance à la corrosion,
                            ainsi que dans les objets décoratifs imitant l'or.
                            <sup className="text-blue-500">[3]</sup>
                        </p>

                        <h3
                            id="sec-3-2"
                            className="text-2xl font-semibold mt-6 text-gray-700"
                        >
                            3.2. Le Zamak
                        </h3>
                        <p>
                            Le **Zamak** est un groupe d'alliages de zinc
                            particulièrement important dans les processus de
                            fabrication modernes. Son nom est un acronyme dérivé
                            des éléments qui le composent: **Z**inc,
                            **A**luminium, **Ma**gnésium et **K**upfer (cuivre).
                            C'est un métal dur, rigide et très résistant, bien
                            qu'il puisse être déformé.
                            <sup className="text-blue-500">[16]</sup> Le Zamak
                            est privilégié pour le moulage sous pression de
                            pièces précises. D'un point de vue environnemental,
                            la filière de recyclage du Zamak est souvent citée
                            comme un modèle de durabilité, facilitant la
                            réintégration des matériaux en fin de vie. D'autres
                            alliages de zinc moins connus incluent la calamine
                            (en tant qu'alliage, par opposition au minerai) et
                            le zinc marin.
                            <sup className="text-blue-500">[16]</sup>
                        </p>

                        <h3
                            id="sec-3-3"
                            className="text-2xl font-semibold mt-6 text-gray-700"
                        >
                            3.3. Applications Architecturales
                        </h3>
                        <p>
                            Le zinc métal, souvent allié au titane pour
                            améliorer la résistance mécanique, est largement
                            utilisé dans l'architecture pour ses qualités
                            esthétiques et sa durabilité. Il est appliqué pour
                            les toitures, les gouttières et le bardage des
                            charpentes ou des façades. Les systèmes modernes de
                            toiture en zinc utilisent des techniques comme le
                            joint debout, qui garantissent l'étanchéité et la
                            longévité.
                        </p>

                        {/* Chapter 4 */}
                        <h2
                            id="chapitre-4"
                            className="text-4xl font-bold pt-4 text-blue-800 border-b pb-2"
                        >
                            Chapitre 4: Utilisations Chimiques et Composés de
                            Zinc
                        </h2>

                        <h3
                            id="sec-4-1"
                            className="text-2xl font-semibold mt-6 text-gray-700"
                        >
                            4.1. L'Application Majeure: La Galvanisation de
                            l'Acier
                        </h3>
                        <p>
                            La **galvanisation** est, de loin, l'application
                            dominante du zinc métal, représentant plus de{" "}
                            <TechValue value="60" unit="%" />
                            de la consommation totale mondiale. Ce processus
                            consiste à recouvrir des pièces en acier d'une
                            couche de zinc pour les protéger efficacement de la
                            corrosion. Le zinc agit comme une anode
                            sacrificielle: il s'oxyde préférentiellement à
                            l'acier lorsqu'il est exposé à l'environnement,
                            protégeant ainsi l'intégrité structurelle de l'acier
                            sous-jacent. En moyenne, il faut{" "}
                            <TechValue value="60" unit="" /> à{" "}
                            <TechValue value="70" unit="kilos" /> de zinc pour
                            protéger une tonne d'acier.
                            <sup className="text-blue-500">[18]</sup>
                        </p>
                        <p>
                            La forte dépendance de la consommation de zinc au
                            secteur de la galvanisation confère au marché une
                            sensibilité particulière aux cycles économiques de
                            la construction et de la production d'acier.
                        </p>

                        <h3
                            id="sec-4-2"
                            className="text-2xl font-semibold mt-6 text-gray-700"
                        >
                            4.2. Les Composés Inorganiques Clés
                        </h3>
                        <p>
                            Environ <TechValue value="25" unit="%" /> du zinc
                            est consommé sous forme d'oxydes ou de sulfures de
                            zinc pour diverses applications chimiques et
                            industrielles.
                            <sup className="text-blue-500">[2]</sup>
                        </p>

                        <h4
                            id="sec-4-2-1"
                            className="text-xl font-semibold mt-4 text-gray-600 ml-4"
                        >
                            4.2.1. Oxyde de Zinc (
                            <TechValue value="ZnO" unit="" />)
                        </h4>
                        <p className="ml-4">
                            L'oxyde de zinc (<TechValue value="ZnO" unit="" />,
                            CAS 1314-13-2) est un composé inorganique essentiel,
                            connu aussi sous les noms de Zinc white, calamine
                            (dans un contexte non minier), et philosopher's
                            wool.<sup className="text-blue-500">[19]</sup>
                            Il est un additif polyvalent, utilisé dans de
                            nombreux matériaux incluant les caoutchoucs, les
                            plastiques, les céramiques, les lubrifiants, les
                            peintures (comme pigment) et les adhésifs.
                            <sup className="text-blue-500">[19]</sup>
                        </p>
                        <p className="ml-4">
                            Dans le domaine médical et cosmétique, l'oxyde de
                            zinc est très apprécié. Il agit comme un filtre
                            physique efficace contre les rayons ultraviolets
                            (UVA et UVB) et est un ingrédient essentiel dans les
                            écrans solaires, les lotions pour bébé et les
                            shampooings.
                            <sup className="text-blue-500">[20]</sup> Il possède
                            également des propriétés antifongiques.
                            <sup className="text-blue-500">[20]</sup>
                        </p>

                        <h4
                            id="sec-4-2-2"
                            className="text-xl font-semibold mt-4 text-gray-600 ml-4"
                        >
                            4.2.2. Autres Composés Importants
                        </h4>
                        <p className="ml-4">
                            Le sulfure de zinc (
                            <TechValue value="ZnS" unit="" />) est
                            principalement employé dans la confection de
                            peintures peu toxiques.
                            <sup className="text-blue-500">[2]</sup> D'autres
                            sels de zinc sont cruciaux pour la santé et
                            l'hygiène. Le zinc lui-même est un minéral utilisé
                            pour traiter ou prévenir les carences.
                            <sup className="text-blue-500">[23]</sup> Le
                            chlorure de zinc (CAS 7646-85-7), ainsi que
                            l'acétate de zinc, sont des ingrédients courants
                            dans les préparations d'hygiène buccale où ils
                            servent de substances de polissage, de nettoyage et
                            d'éliminateurs d'odeurs désagréables.
                            <sup className="text-blue-500">[24]</sup>
                        </p>

                        <h3
                            id="sec-4-3"
                            className="text-2xl font-semibold mt-6 text-gray-700"
                        >
                            4.3. Cadre Réglementaire (REACH)
                        </h3>
                        <p>
                            Étant donné la diversité et l'ampleur de ses
                            applications, le zinc métal (CAS 7440-66-6) et un
                            grand nombre de ses composés principaux, tels que le
                            chlorure de zinc, le sulfate de zinc, et l'oxyde de
                            zinc, sont soumis à la réglementation européenne
                            **REACH** (enregistrement, évaluation et
                            autorisation des substances chimiques). Cette
                            réglementation impose l'enregistrement des
                            substances produites ou importées en quantité
                            supérieure à une tonne par an.
                            <sup className="text-blue-500">[25]</sup>
                        </p>

                        {/* Chapter 5 */}
                        <h2
                            id="chapitre-5"
                            className="text-4xl font-bold pt-4 text-blue-800 border-b pb-2"
                        >
                            Chapitre 5: Le Zinc dans la Transition Énergétique :
                            Focus sur les Batteries
                        </h2>

                        <h3
                            id="sec-5-1"
                            className="text-2xl font-semibold mt-6 text-gray-700"
                        >
                            5.1. Le Contexte de la Demande d'Alternatives au
                            Lithium
                        </h3>
                        <p>
                            La croissance exponentielle du marché des véhicules
                            électriques (VE), avec des ventes mondiales prévues
                            à plus de <TechValue value="13" unit="millions" />{" "}
                            d'unités d'ici <TechValue value="2025" unit="" />,
                            <sup className="text-blue-500">[26]</sup> exerce une
                            pression croissante sur les métaux traditionnels des
                            batteries lithium-ion (lithium, cobalt, nickel).
                            Cette tension d'approvisionnement et de coûts
                            stimule la recherche active d'alternatives plus
                            durables et abordables. Le zinc est considéré comme
                            un candidat de choix, étant un métal beaucoup plus
                            abondant et moins cher que le lithium.
                            <sup className="text-blue-500">[28]</sup>
                        </p>

                        <h3
                            id="sec-5-2"
                            className="text-2xl font-semibold mt-6 text-gray-700"
                        >
                            5.2. Technologie des Batteries Zinc-Air (
                            <TechValue value="Zn-Air" unit="" />)
                        </h3>
                        <p>
                            La technologie des batteries zinc-air est l'une des
                            rares à pouvoir potentiellement répondre au cahier
                            des charges exigeant des VE: faible coût, haute
                            énergie massique, sécurité accrue et recyclabilité.
                            <sup className="text-blue-500">[29]</sup>
                        </p>
                        <p className="font-semibold mt-3">
                            Avantages Stratégiques
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>
                                Les batteries zinc-air offrent une densité
                                énergétique élevée, essentielle pour prolonger
                                l'autonomie des véhicules électriques.
                                <sup className="text-blue-500">[30]</sup>
                            </li>
                            <li>
                                Leur faible coût est assuré par l'abondance du
                                zinc.
                            </li>
                            <li>
                                Elles utilisent des matériaux non toxiques et
                                sont intrinsèquement plus sûres que les
                                batteries lithium-ion car elles fonctionnent en
                                milieu aqueux.
                                <sup className="text-blue-500">[29]</sup>
                            </li>
                        </ul>
                        <p className="font-semibold mt-3">
                            Fonctionnement Électrochimique
                        </p>
                        <p>
                            Le mécanisme de base des batteries zinc-air repose
                            sur une réaction électrochimique unique impliquant
                            l'oxygène atmosphérique.
                            <sup className="text-blue-500">[30]</sup> Le zinc
                            sert d'anode, subissant une oxydation, tandis que
                            l'oxygène sert de cathode, subissant une réduction.
                            <sup className="text-blue-500">[28]</sup> La forme
                            primaire (non rechargeable) est déjà largement
                            utilisée (prothèses auditives), affichant des
                            capacités massiques très élevées (
                            <TechValue value=">440" unit="Wh/kg" />
                            ).<sup className="text-blue-500">[29]</sup>
                        </p>

                        <h3
                            id="sec-5-3"
                            className="text-2xl font-semibold mt-6 text-gray-700"
                        >
                            5.3. Limites Actuelles et État de la Recherche
                        </h3>
                        <p>
                            Malgré ces avantages prometteurs, la version
                            rechargeable de la batterie zinc-air n'a pas encore
                            atteint le stade de la commercialisation de masse en
                            raison de défis techniques importants.
                            <sup className="text-blue-500">[29]</sup> Sa durée
                            de vie est actuellement limitée, souvent à{" "}
                            <TechValue value="100" unit="" /> à{" "}
                            <TechValue value="200" unit="cycles" />.
                        </p>
                        <p className="font-semibold mt-3">
                            Les deux principaux verrous technologiques sont :
                        </p>
                        <ol className="list-decimal list-inside space-y-1 ml-4">
                            <li>
                                La formation de dendrites de zinc: Pendant la
                                phase de recharge, le zinc a tendance à former
                                des structures ramifiées (dendrites) qui peuvent
                                croître et court-circuiter la batterie, limitant
                                sa durée de vie.
                            </li>
                            <li>
                                La stabilité de l'électrode à air: La
                                performance est limitée par la carbonatation de
                                l'électrolyte liquide par réaction avec le
                                dioxyde de carbone (
                                <TechValue value="CO₂" unit="" />) présent dans
                                l'air ambiant.
                                <sup className="text-blue-500">[29]</sup>
                            </li>
                        </ol>
                        <p>
                            Si ces verrous sont levés, le rôle du zinc pourrait
                            se transformer radicalement, passant d'un pilier de
                            la protection anticorrosion à un métal de puissance
                            énergétique.
                        </p>

                        {/* Chapter 6 */}
                        <h2
                            id="chapitre-6"
                            className="text-4xl font-bold pt-4 text-blue-800 border-b pb-2"
                        >
                            Chapitre 6 : Statistiques Mondiales, Marché et
                            Projections
                        </h2>

                        <h3
                            id="sec-6-1"
                            className="text-2xl font-semibold mt-6 text-gray-700"
                        >
                            6.1. Réserves Mondiales et Géographie de l'Offre
                        </h3>
                        <p>
                            En <TechValue value="2021" unit="" />, les
                            ressources mondiales totales de zinc étaient
                            estimées à <TechValue value="1.9" unit="Gt" />.
                            <sup className="text-blue-500">[31]</sup> Quant aux
                            réserves mondiales confirmées, l'USGS les évaluait à{" "}
                            <TechValue value="251" unit="Mt" />.
                            <sup className="text-blue-500">[31]</sup> L'offre
                            est géographiquement concentrée, l'Australie
                            détenant la plus grande part des réserves mondiales,
                            soit <TechValue value="27" unit="%" /> du total.
                            <sup className="text-blue-500">[31]</sup> D'autres
                            pays clés incluant la Chine, le Kazakhstan, le
                            Pérou, la Russie et les États-Unis contribuent
                            également aux réserves.
                            <sup className="text-blue-500">[32]</sup>
                        </p>

                        <h3
                            id="sec-6-2"
                            className="text-2xl font-semibold mt-6 text-gray-700"
                        >
                            6.2. La Géographie de la Production Minière et des
                            Fonderies
                        </h3>
                        <p>
                            *(Cette section était incomplète dans l'extrait de
                            texte fourni, se concentrant sur la production
                            mondiale et la géographie des fonderies.)*
                        </p>

                        <h3
                            id="sec-6-3"
                            className="text-2xl font-semibold mt-6 text-gray-700"
                        >
                            6.3. Production et Consommation de Métal Raffiné
                        </h3>
                        <p>
                            Entre <TechValue value="1960" unit="" /> et{" "}
                            <TechValue value="2023" unit="" />, la production
                            mondiale cumulée de zinc métal raffiné primaire a
                            atteint
                            <TechValue value="492" unit="millions" /> de tonnes,
                            dont la majorité est toujours en circulation du fait
                            de la durabilité des produits en zinc.
                            <sup className="text-blue-500">[34]</sup> La demande
                            est tirée par plusieurs secteurs clés (Construction,
                            Transport, Biens de consommation,
                            Électrique/électronique),
                            <sup className="text-blue-500">[35]</sup>{" "}
                            l'Asie-Pacifique étant à la fois le marché le plus
                            vaste et celui qui connaît la croissance la plus
                            rapide.<sup className="text-blue-500">[35]</sup>
                        </p>

                        {/* Table 3 */}
                        <div className="overflow-x-auto my-6 shadow-lg rounded-lg border border-gray-200">
                            <table className="min-w-full divide-y divide-gray-200">
                                <caption className="text-lg font-bold p-3 bg-gray-100 border-b">
                                    Tableau 3: Ventilation de la Consommation
                                    Mondiale de Zinc par Secteur
                                </caption>
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Secteur d'Application
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Part de la Consommation Totale
                                            (Estim.)
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Source
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            Galvanisation
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            &gt;{" "}
                                            <TechValue value="60" unit="%" />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            17
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            Composés Chimiques/Oxydes
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            ~<TechValue value="25" unit="%" />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            2
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            Alliages (Zamak, Laiton)
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            Données significatives
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            3
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3
                            id="sec-6-4"
                            className="text-2xl font-semibold mt-6 text-gray-700"
                        >
                            6.4. Analyse du Marché et des Prix
                        </h3>
                        <p>
                            Le prix du zinc est principalement coté sur le
                            London Metal Exchange (LME).
                            <sup className="text-blue-500">[36]</sup> La
                            prévision d'un déficit de{" "}
                            <TechValue value="164,000" unit="tonnes" /> en{" "}
                            <TechValue value="2024" unit="" /> est un indicateur
                            critique de tension sur le marché.
                            <sup className="text-blue-500">[33]</sup> Ce déficit
                            est attribué non pas à un épuisement des réserves
                            (qui restent abondantes,{" "}
                            <TechValue value="251" unit="Mt" />)
                            <sup className="text-blue-500">[31]</sup>, mais à
                            une disponibilité limitée des concentrés.
                            <sup className="text-blue-500">[33]</sup> Ce goulot
                            d'étranglement de l'offre minière est le moteur
                            principal de la dynamique haussière des prix. De
                            plus, les inventaires mondiaux de métaux, en
                            particulier en Chine, sont historiquement bas,
                            <sup className="text-blue-500">[39]</sup> ce qui
                            amplifie la sensibilité du marché aux chocs d'offre.
                        </p>

                        <p className="pt-8 text-sm text-gray-500 italic">
                            *Note: Les références bibliographiques (superscripts
                            comme <TechValue value="[1]" unit="" />,{" "}
                            <TechValue value="[2]" unit="" />, etc.) sont
                            conservées pour l'intégrité du rapport mais les
                            listes complètes de sources ne sont pas reproduites
                            ici.*
                        </p>
                    </div>
                </main>
            </div>

            {/* Footer Area */}
            <footer className="bg-gray-200 py-4 mt-8">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center text-sm text-gray-600">
                    <p>
                        &copy; 2025 Samy Business - Wiki Data Extraction. All
                        rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default WikiPage;
