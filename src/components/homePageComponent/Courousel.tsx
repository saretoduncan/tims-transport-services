import { Link } from "react-router-dom";
import transitImg from "../../assets/transist.webp";

import { navLinkData } from "../navigation/NavLinkData";

function Courousel() {
  return (
    <div
      className="relative min-h-[40vh]  xl:min-h-[80vh] overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${transitImg})`,
      }}
    >
      <div className="absolute size-[100%] z-[11] bg-[#00000090] flex flex-col space-y-6 justify-center px-5 md:ps-10">
        <section className="text-white">
          <h1 className="capitalize text-3xl md:text-5xl font-bold text-shadow shadow-black">
            Tims transport services
          </h1>
          <h1 className="capitalize md:text-2xl text-shadow shadow-black animate-text-reveal">
            Efficient on <span className="text-orange-500">wheel</span>, your{" "}
            <span className="text-orange-500">haul</span>, our{" "}
            <span className="text-orange-500">mission</span>
          </h1>
        </section>
        <section className="flex space-x-6 ">
          <Link
            to={navLinkData.aboutPage.to}
            className="bg-orange-500 capitalize text-white p-2 rounded-md text-lg font-semibold py-2 px-4"
          >
            Learn more
          </Link>
          <Link
            to={navLinkData.aboutPage.to}
            className="capitalize bg-white text-orange-500 py-2 px-4 rounded-md text-lg font-semibold"
          >
            Contact us
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Courousel;
