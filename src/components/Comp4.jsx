export default function Comp4() {
    return (
        <div className="flex flex-col md:flex-row justify-center md:justify-around gap-8 p-4 max-w-7xl mx-auto">
            <div className="card bg-base-50 image-full w-full md:w-96 shadow-xl rounded-xl">
                <figure>
                    <img
                        src="img11.png"
                        alt="xxx"
                    />
                </figure>
                <div className="card-body">
                    <br />
                    <h2 className="card-title text-4xl ">l’utilisation du zinc</h2>
                    <br />
                    <br />
                    <br />
                    <p className="text-xl">
                        samy business vous propose plusieur solutiion pour mieux exploiter le zinc 
                    </p>
                    <div className="card-actions justify-end ">
                        <button className="btn btn-primary">plus d’infos</button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-50 image-full w-full md:w-96 shadow-xl rounded-xl">
                <figure>
                    <img
                        src="img12.jpg"
                        alt="xxx"
                    />
                </figure>
                <div className="card-body">
                    <br />
                    <h2 className="card-title text-4xl">Statistiques</h2>
                    <br />
                    <br />
                    <br />
                    <p className="text-xl">
                        Overall stats
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">plus d’infos</button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-50 image-full w-full md:w-96 shadow-xl rounded-xl">
                <figure>
                    <img
                        src="img13.png"
                        alt="xxx"
                    />
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
                        <button className="btn btn-primary">plus d’infos</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
