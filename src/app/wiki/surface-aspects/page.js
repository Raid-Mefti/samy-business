"use client";
// AspectDeSurfaceZnO.jsx
import React, { useState } from "react";

// Composant pour un bloc d'application dépliable
const ApplicationSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="application-section">
      <button className="application-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span className="toggle-icon">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && <div className="application-content">{children}</div>}
    </div>
  );
};

const AspectDeSurfaceZnO = () => {
  return (
    <div className="aspect-de-surface-container">
      <h1>Aspect de Surface du ZnO : Clé de la Performance</h1>

      <p>
        L'oxyde de zinc (ZnO) est un matériau aux propriétés exceptionnelles,
        mais sa performance dans d'innombrables applications repose avant tout
        sur les caractéristiques fines de sa surface. Chez {"Sammy Business"},
        nous maîtrisons la morphologie, la taille et la surface spécifique de
        nos particules de ZnO pour garantir une réactivité, une dispersibilité
        et une efficacité optimales, adaptées à vos exigences les plus précises.
      </p>

      <section className="parametres-controle">
        <h2>Nos Paramètres de Maîtrise de l'Aspect de Surface :</h2>
        <ul>
          <li>
            <strong>Morphologie des Particules :</strong>
            <p>
              Du sphérique à l'aciculaire (en aiguille), nous contrôlons la
              forme de nos particules. Cette géométrie est cruciale pour des
              propriétés spécifiques : renforcement mécanique, fluidité, pouvoir
              couvrant, ou interactions spécifiques avec d'autres composés.
            </p>
          </li>
          <li>
            <strong>Taille des Particules (Granulométrie) :</strong>
            <p>
              La distribution granulométrique (ex: D50, D90) et la taille
              moyenne sont ajustées avec précision. De quelques microns à
              l'échelle nanométrique (ZnO nano pour des applications
              spécifiques), la taille influence directement la réactivité, la
              transparence et la dispersibilité de notre ZnO.
            </p>
          </li>
          <li>
            <strong>Surface Spécifique (BET) :</strong>
            <p>
              Mesurée par la méthode BET, la surface spécifique indique la
              surface accessible pour les réactions chimiques ou l'adsorption.
              Une surface spécifique élevée favorise la réactivité catalytique
              ou les propriétés d'absorption, tandis qu'une surface plus faible
              peut être préférée pour d'autres usages.
            </p>
          </li>
        </ul>
      </section>

      <section className="impact-applications">
        <h2>
          Impact de l'Aspect de Surface sur Vos Applications Spécifiques :
        </h2>

        <ApplicationSection title="Applications Pharmaceutiques">
          <p>
            <strong>Morphologie & Pureté :</strong> Pour les pommades, crèmes
            apaisantes ou les suppléments, la morphologie du ZnO influence la
            sensation sur la peau et l'efficacité d'absorption. Une surface
            spécifique contrôlée et une pureté inégalée garantissent une action
            thérapeutique optimale et une excellente biodisponibilité, avec une
            intégration parfaite dans les formulations galéniques.
          </p>
          <p>
            <em>Exemple :</em> Un ZnO de faible surface spécifique et de taille
            uniforme pour une meilleure intégration et une action apaisante sans
            agrégation.
          </p>
        </ApplicationSection>

        <ApplicationSection title="Applications Cosmétiques & Protection Solaire">
          <p>
            <strong>Taille Nanométrique & Transparence :</strong> Nos ZnO
            nanoparticulaires sont spécialement conçus pour offrir une
            protection UV à large spectre (UVA/UVB) sans laisser de traces
            blanches. La maîtrise de leur taille assure une transparence élevée
            sur la peau tout en maximisant l'efficacité photoprotectrice.
          </p>
          <p>
            <strong>Dispersion :</strong> Une surface traitée et une
            granulométrie contrôlée permettent une excellente dispersion dans
            les émulsions, pour des produits cosmétiques stables et esthétiques.
          </p>
        </ApplicationSection>

        <ApplicationSection title="Industrie du Caoutchouc (Vulcanisation)">
          <p>
            <strong>Réactivité & Renforcement :</strong> Le ZnO agit comme
            activateur de vulcanisation. Sa surface spécifique et sa morphologie
            influencent directement la vitesse de réaction et la réticulation du
            caoutchouc. Nos grades spécifiques améliorent la résistance à la
            traction, la dureté et la durée de vie des produits finis (pneus,
            joints, etc.).
          </p>
          <p>
            <em>Exemple :</em> Un ZnO aciculaire peut offrir un renforcement
            supplémentaire.
          </p>
        </ApplicationSection>

        <ApplicationSection title="Céramique & Verre">
          <p>
            <strong>Frittage & Propriétés Thermiques :</strong> La finesse et
            l'uniformité de la taille des particules de ZnO sont cruciales pour
            les processus de frittage, influençant la densité et les propriétés
            thermiques et électriques des céramiques. Dans les émaux et verres,
            l'aspect de surface affecte l'opacité et le point de fusion.
          </p>
        </ApplicationSection>

        <ApplicationSection title="Peintures & Revêtements">
          <p>
            <strong>Pouvoir Couvrant & Résistance UV :</strong> La taille et la
            morphologie des particules déterminent l'opacité, la brillance et la
            résistance aux UV des peintures. Nos ZnO protègent les revêtements
            contre la dégradation, améliorent la durabilité des couleurs et
            agissent comme fongicides.
          </p>
        </ApplicationSection>
      </section>

      <section className="engagement-qualite">
        <h2>Notre Engagement : Précision et Qualité Contrôlée</h2>
        <p>
          Chaque lot de notre oxyde de zinc subit des analyses rigoureuses (MEB,
          BET, diffraction laser) pour garantir que ses propriétés de surface
          correspondent précisément aux spécifications de votre application.
          Nous vous offrons la possibilité de collaborer pour développer des
          grades sur mesure, optimisés pour vos besoins uniques.
        </p>
      </section>

      {/* Les styles JSX sont laissés ici, ou peuvent être déplacés vers un fichier CSS externe */}
      <style jsx>{`
        .aspect-de-surface-container {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          max-width: 900px;
          margin: 20px auto;
          padding: 20px;
          color: #333;
        }

        h1 {
          color: #0056b3;
          text-align: center;
          margin-bottom: 30px;
        }

        h2 {
          color: #0056b3;
          border-bottom: 2px solid #eee;
          padding-bottom: 10px;
          margin-top: 40px;
          margin-bottom: 20px;
        }

        h3 {
          margin: 0;
          color: #333;
        }

        p {
          margin-bottom: 15px;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        ul li {
          background: #f9f9f9;
          margin-bottom: 10px;
          padding: 15px;
          border-left: 4px solid #007bff;
          border-radius: 4px;
        }

        ul li strong {
          color: #0056b3;
        }

        .application-section {
          margin-bottom: 15px;
          border: 1px solid #ddd;
          border-radius: 5px;
          overflow: hidden;
        }

        .application-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 15px 20px;
          background-color: #f0f0f0;
          border: none;
          cursor: pointer;
          font-size: 1.1em;
          text-align: left;
        }

        .application-header:hover {
          background-color: #e0e0e0;
        }

        .application-content {
          padding: 15px 20px;
          background-color: #fff;
          border-top: 1px solid #eee;
        }

        .toggle-icon {
          font-size: 0.8em;
          margin-left: 10px;
        }
      `}</style>
    </div>
  );
};

export default AspectDeSurfaceZnO;
