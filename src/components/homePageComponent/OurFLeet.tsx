import front_truck from "../../assets/front-truck.webp";
import transist from "../../assets/transist.webp";
import scania from "../../assets/scania.webp";
const OurFleet = () => {
  return (
    <div className="p-6 ">
    <div className="space-y-3 xl:max-w-[1280px] mx-auto">
        <section>
        <div className="w-6 h-2 bg-orange-500"></div>
        <h3 className="text-2xl font-bold">Our Fleet</h3>
      </section>
      <section className=" grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <figure>
          <img src={transist} alt="" className=" md:size-[400px]  mx-auto" />
        </figure>
        <figure>
          <img src={scania} alt="" className=" md:size-[400px]  mx-auto" />
        </figure>
        <figure>
          <img src={front_truck} alt="" className=" md:size-[400px]  mx-auto" />
        </figure>
      </section>
    </div>
      
    </div>
  );
};

export default OurFleet;
