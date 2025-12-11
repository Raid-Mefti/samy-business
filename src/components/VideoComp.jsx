export default function VideoComp() {
    return (
        <section className="bg-base-100">
            <div className="mx-auto max-w-7xl px-4">
                <h2 className="text-[rgb(223,126,60)] text-3xl md:text-4xl font-bold mb-8 text-center">
                    Image et vidéo de l'entreprise
                </h2>

                {/* Placeholder for video */}
                <div className="relative w-full pb-[56.25%] mb-8 bg-[rgb(223,126,60)] rounded-lg shadow-2xl">
                    <span
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white px-4 py-2 rounded-md select-none"
                        style={{
                            fontSize: "clamp(100px, 20vw, 300px)", // scales between 100px and 300px based on viewport
                        }}
                    >
                        N/A
                    </span>
                </div>

                {/* Original video iframe (kept as a comment) */}
                {/*
        <div className="relative w-full pb-[56.25%] mb-8">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
            src="https://www.youtube.com/embed/KhQGo2IdA9s?si=WoOCDEPoyxrL4EtW"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        */}
            </div>
        </section>
    );
}
