"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductsGrid() {
    const router = useRouter();

    return (
        <div className="flex flex-col flex-wrap md:flex-row justify-center md:justify-around gap-8 max-w-7xl mx-auto bg-base-100 ">
            <div className="card bg-base-200 image-full w-full md:w-96 shadow-xl rounded-xl">
                <figure>
                    <img src="img11.png" alt="xxx" />
                </figure>
                <div className="card-body">
                    <br />
                    <h2 className="card-title text-4xl text-[rgb(223,126,60)] ">
                        L'utilisation du zinc
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
                            className="btn btn-primary bg-[rgb(223,126,60)] border-0"
                            onClick={() =>
                                window.open("/wiki/zinc-usage", "_blank")
                            }
                        >
                            plus d'infos
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
                    <h2 className="card-title text-4xl text-[rgb(223,126,60)]">
                        Statistiques
                    </h2>
                    <br />
                    <br />
                    <br />
                    <p className="text-xl">Overall stats</p>
                    <div className="card-actions justify-end">
                        <button
                            className="btn btn-primary bg-[rgb(223,126,60)] border-0"
                            onClick={() =>
                                window.open("/wiki/statistics", "_blank")
                            }
                        >
                            plus d'infos
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
                    <h2 className="card-title text-4xl text-[rgb(223,126,60)]">
                        Aspects de surface
                    </h2>
                    <br />
                    <br />
                    <br />
                    <p className="text-xl">
                        SAMY BUSINESS PROPOSE PLUSIEURS GAMMES POUR SES CLIENTS
                    </p>
                    <div className="card-actions justify-end">
                        <button
                            className="btn btn-primary bg-[rgb(223,126,60)] border-0"
                            onClick={() =>
                                window.open("/wiki/surface-aspects", "_blank")
                            }
                        >
                            plus d'infos
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
