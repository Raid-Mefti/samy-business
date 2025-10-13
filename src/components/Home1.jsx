export default function Home1() {
    return (
        <>
            <div className="relative h-[90vh] overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
                <img
                    className="w-full h-full object-cover"
                    src="hero.jpg"
                    alt="xxx"
                />
                <div className="absolute bottom-40 right-20 h-fit w-fit bg-base-100/80 text-base-content rounded-lg p-4">
                    <h1 className=" text-4xl font-bold">
                        la place du " slogan " <br />
                        la place du "slogan"
                        <br />
                        la place du slogan
                    </h1>
                </div>
            </div>
        </>
    );
}
