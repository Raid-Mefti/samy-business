export default function VideoComp() {
    return (
        <section className="bg-base-100">
            <div className="mx-auto">
                <h2 className="text-3xl text-base-content md:text-4xl font-bold mb-8 text-center">
                    Image et vidéo de l'entreprise
                </h2>

                {/* This div correctly sets up the 16:9 aspect ratio for responsiveness */}
                <div className="relative w-full pb-[56.25%] mb-8">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                        src="https://www.youtube.com/embed/KhQGo2IdA9s?si=WoOCDEPoyxrL4EtW"
                        title="YouTube video player"
                        frameBorder="0" // Corrected casing
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" // Corrected casing
                        allowFullScreen // Corrected casing
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
