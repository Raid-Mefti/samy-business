"use client";

import { useState } from "react";

export default function ProductsGrid() {
    const [isArticleOpen, setIsArticleOpen] = useState(false);

    return (
        <div className="flex flex-col md:flex-row justify-center md:justify-around gap-8 max-w-7xl mx-auto bg-base-100 ">
            <div className="card bg-base-200 image-full w-full md:w-96 shadow-xl rounded-xl">
                <figure>
                    <img src="img11.png" alt="xxx" />
                </figure>
                <div className="card-body">
                    <br />
                    <h2 className="card-title text-4xl ">
                        l’utilisation du zinc
                    </h2>
                    <br />
                    <br />
                    <br />
                    <p className="text-xl">
                        samy business vous propose plusieur solutiion pour mieux
                        exploiter le zinc
                    </p>
                    <div className="card-actions justify-end ">
                        <button
                            className="btn btn-primary"
                            onClick={() => setIsArticleOpen(true)}
                        >
                            plus d’infos
                        </button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-200 image-full w-full md:w-96 shadow-xl rounded-xl">
                <figure>
                    <img src="img12.jpg" alt="xxx" />
                </figure>
                <div className="card-body">
                    <br />
                    <h2 className="card-title text-4xl">Statistiques</h2>
                    <br />
                    <br />
                    <br />
                    <p className="text-xl">Overall stats</p>
                    <div className="card-actions justify-end">
                        <button
                            className="btn btn-primary"
                            onClick={() => setIsArticleOpen(true)}
                        >
                            plus d’infos
                        </button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-200 image-full w-full md:w-96 shadow-xl rounded-xl">
                <figure>
                    <img src="img13.png" alt="xxx" />
                </figure>
                <div className="card-body">
                    <br />
                    <h2 className="card-title text-4xl">ASPECTS DE SURFACE</h2>
                    <br />
                    <br />
                    <br />
                    <p className="text-xl">
                        SAMY BUSINESS PROPOSE PLUSIEURS GAMME POUR SES CLIENTS
                    </p>
                    <div className="card-actions justify-end">
                        <button
                            className="btn btn-primary"
                            onClick={() => setIsArticleOpen(true)}
                        >
                            plus d’infos
                        </button>
                    </div>
                </div>
            </div>
            {isArticleOpen && (
                <div
                    className="fixed inset-0 z-50"
                    aria-modal="true"
                    role="dialog"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60"
                        onClick={() => setIsArticleOpen(false)}
                    />

                    {/* Centered dialog with viewport padding so it clearly feels like a popup */}
                    <div className="relative h-full w-full p-4 sm:p-8 flex items-center justify-center">
                        <div className="relative w-full max-w-6xl max-h-[90vh] bg-base-100 rounded-2xl shadow-2xl overflow-hidden">
                            {/* Header with prominent close button */}
                            <div className="sticky top-0 z-10 flex items-center justify-end bg-base-100/90 backdrop-blur p-3 border-b border-base-300">
                                <button
                                    type="button"
                                    className="btn btn-error btn-sm btn-circle"
                                    aria-label="Fermer"
                                    onClick={() => setIsArticleOpen(false)}
                                >
                                    ✕
                                </button>
                            </div>
                            {/* Content area */}
                            <iframe
                                src="/article"
                                title="Article"
                                className="w-full h-[calc(90vh-52px)] border-0"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
