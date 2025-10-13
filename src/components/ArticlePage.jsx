export default function ArticlePage() {
    return (
        <div className="min-h-screen bg-base-100">
            {/* Main content container with centered column */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                {/* Metadata Section */}
                <div className="text-center mb-6 sm:mb-8">
                    <p className="text-base-content/60 text-sm font-normal mb-3 sm:mb-4">
                        January 1, 2025
                    </p>
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-base-content mb-3 sm:mb-4">
                        Article
                    </h1>
                    <p className="text-base-content/60 text-sm font-normal">
                        Author, Founder of Namedly
                    </p>
                </div>

                {/* Image Section */}
                <div className="mb-8 sm:mb-10 lg:mb-12">
                    <img
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=400&fit=crop"
                        alt="Metal ingots"
                        className="w-full h-auto rounded-lg"
                    />
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                    {/* First subheader */}
                    <h2 className="text-xl sm:text-2xl font-bold text-base-content mb-4 sm:mb-6">
                        First subheader
                    </h2>
                    <p className="text-base-content leading-relaxed mb-6 sm:mb-8">
                        The first paragraph of an article is often an
                        introduction to the text. Sometimes it’s called the
                        “lead,” and sometimes that word is spelled “lede.” When
                        you’re writing an article—whether it’s for a blog or a
                        review site or somewhere else—it’s always a good idea to
                        begin with something interesting to hook a reader. If
                        it’s a piece of thought leadership, maybe you want to
                        start with a little anecdote, or a familiar problem. If
                        you’re putting together something for businesses, you
                        might start off with a relevant piece of data.{" "}
                    </p>

                    {/* Another subheader */}
                    <h2 className="text-xl sm:text-2xl font-bold text-base-content mb-4 sm:mb-6">
                        Another subheader to break up text
                    </h2>
                    <p className="text-base-content leading-relaxed mb-6 sm:mb-8">
                        The second paragraph of an article is sometimes called
                        the “nut graph,” which is short for “nutshell
                        paragraph.” That’s because this is usually where the
                        article gets to the heart of the matter—the main point.
                        After the first section, the reader is ready to hear
                        what’s truly at stake in this piece of writing. They’re
                        invested. They’re paying attention. If your piece is
                        long enough to have long, multi-paragraph sections, then
                        you’ll want to use this strategy throughout to make sure
                        you’re holding reader attention in a consistent way.{" "}
                    </p>

                    {/* Blockquote Section */}
                    <div className="text-center my-12 sm:my-14 lg:my-16">
                        <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-base-content leading-tight mb-6 sm:mb-8">
                            "A large, heavily bolded quote for emphasis and
                            breaking up content."
                        </blockquote>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">
                                <span className="text-primary-content text-xl">
                                    😊
                                </span>
                            </div>
                            <p className="font-bold text-base-content">
                                Full name
                            </p>
                            <p className="text-base-content">Role at company</p>
                        </div>
                    </div>

                    {/* Last subheader */}
                    <h2 className="text-xl sm:text-2xl font-bold text-base-content mb-4 sm:mb-6">
                        Last subheader, for good measure
                    </h2>
                    <p className="text-black leading-relaxed mb-12 sm:mb-14 lg:mb-16">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem.
                    </p>
                </div>

                {/* Red Section */}
                <div className="bg-primary w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 text-center">
                    <div className="text-primary-content font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight">
                        <div>tableau</div>
                        <div>d'analyse</div>
                        <div>du produit</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
