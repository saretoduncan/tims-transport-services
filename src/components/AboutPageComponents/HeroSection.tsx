import highWayScannia from "../../assets/highwaytrack.webp";
const HeroSection = () => {
  return (
    <div
      className={`relative h-[350px] md:h-[400px] lg:h-[600px]  overflow-hidden bg-cover bg-center 
  }`}
      style={{
        backgroundImage: "url(" + "'" + highWayScannia + "'" + ")",
      }}
    >
      {" "}
      <div
        className="size-full flex items-center  2xl:items-center px-5 md:ps-16 lg:ps-20 xl:ps-28 
       absolute bg-[#00000090]"
      >
        <section className="text-white   mt-4    ">
          <h1 className="capitalize text-2xl md:text-3xl xl:text-6xl   font-bold text-shadow shadow-black">
            About us: Efficiency at the core
          </h1>
          <h1 className="capitalize text-sm md:text-lg text-shadow shadow-black font-semibold animate-text-reveal">
            Discover the family values and expertise behind Tim's Transport
            Services.
          </h1>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
