"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductsGrid() {
    const router = useRouter();

    return (
        <div className="site-container flex flex-col flex-wrap md:flex-row justify-center items-center md:justify-around gap-10  bg-base-100  w-[calc(100%+var(--site-padding)*2)] -mx-[var(--site-padding)] ">
            <div className="card bg-base-200 image-full shadow-xl rounded-xl flex-1 w-[300px] md:min-w-[400px] md:max-w-[450px] h-[325px]">
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
                        Samy Business vous propose plusieurs solutiions pour
                        mieux exploiter le Zinc
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

            <div className="card bg-base-200 image-full shadow-xl rounded-xl flex-1 w-[300px] md:min-w-[400px] md:max-w-[450px]  h-[325px]">
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
                    <p className="text-xl">
                        Statistiques générales de l'entreprise
                    </p>
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

            <div className="card bg-base-200 image-full shadow-xl rounded-xl flex-1 w-[300px] md:min-w-[400px] md:max-w-[450px] h-[325px]">
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
                        Samy Business propose plusieurs gammes pour ses clients
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
