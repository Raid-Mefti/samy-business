export default function Home1() {
  return (
    <>
      <div className="relative h-[90vh] overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
        <img
          className="w-full h-full object-fill"
          src="hero-section-png.png"
          alt="xxx"
        />
        <div className="absolute bottom-20 left-10 h-fit w-fit  text-base-content rounded-lg p-4">
          <h1 className=" text-3xl font-family-['Poppins'] font-bold leading-snug text-white ">
            plus qu'un importateur,
            <br />
            votre architecte en <br />
            solutions métalliques
          </h1>
          <h3>Bureau d'affaire & consulting import-export</h3>
        </div>
      </div>
    </>
  );
}
