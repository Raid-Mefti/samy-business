export default function VideoComp() {
    return (
        <section className="bg-base-100">
            <div className="mx-auto">
                <h2 className="text-3xl text-base-content md:text-4xl font-bold mb-8 text-center">
                    Image et vidéo de l'entreprise
                </h2>

                <div className="relative w-full pb-[56.25%] mb-8">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                        src="YOUR_YOUTUBE_EMBED_LINK_HERE"
                        title="Samy Business Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
