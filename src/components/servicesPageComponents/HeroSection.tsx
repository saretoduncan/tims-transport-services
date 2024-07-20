import quaryTruck from "../../assets/quarytrack.webp";
const HeroSection = () => {
  return (
    <div
      className={`relative min-h-[20vh] md:min-h-[30vh] lg:min-h-[40vh]  overflow-hidden bg-cover bg-center 
  }`}
      style={{
        backgroundImage: "url(" + "'" + quaryTruck + "'" + ")",
      }}
    >
      {" "}
      <div
        className="size-full flex items-center  2xl:items-center px-5 md:ps-16 lg:ps-20 xl:ps-28 
       absolute bg-[#00000090]"
      >
        <section className="text-white   mt-4    ">
          <h1 className="capitalize text-2xl md:text-3xl xl:text-4xl   font-bold text-shadow shadow-black">
            Services
          </h1>
          <h1 className="capitalize text-sm md:text-lg text-shadow shadow-black font-semibold animate-text-reveal">
            Our Comprehensive Transport and Logistics Solutions
          </h1>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
