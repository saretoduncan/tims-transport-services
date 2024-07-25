import FeaturesCard from "./FeaturesCard";
import highWayScannia from "../../assets/highway_truck_sand.webp";
import transitImg from "../../assets/transist.webp";
import quaryTrack from "../../assets/quarytrack.webp";
import PrimaryLink from "../buttons/PrimaryLink";
import { navLinkData } from "../navigation/NavLinkData";
const FeaturesSection = () => {
  return (
    <div className="space-y-4 mb-4">
      <section className="w-[300px] md:w-[400px]  mx-auto">
        <h3 className="capitalize text-center text-2xl md:text-4xl font-bold text-gray-800 ">
          <span className="text-sm md:text-base text-orange-500">
            Efficient
          </span>{" "}
          <br />
          Delivering reliable transport and logistics solutions
        </h3>
      </section>
      <section className="grid px-4 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:w-[1024px] xl:mx-auto">
        <FeaturesCard
          featureCaption="Tim's Transport Services provides dependable long-hauling across Australia, ensuring safe, timely delivery over extensive distances. "
          featureImg={highWayScannia}
          featureTitle="Long Haulage"
        />
        <FeaturesCard
          featureCaption="No job is too small! Tim's Transport Services in WA offers safe, convenient, and economical short-haul trucking."
          featureImg={transitImg}
          featureTitle="Short Haulage"
        />
        <FeaturesCard
          featureCaption="Tim's Transport Services excels in mining logistics and regional transport across Australia, delivering expertise and reliability in every job"
          featureImg={quaryTrack}
          featureTitle="Mining and Reginal Transport"
        />
      </section>
      <section className="flex justify-center">
        <PrimaryLink
          linkName="Learn More"
          linkTo={navLinkData.servicesPage.to}
          className="text-white  bg-orange-500 rounded-none"
        />
      </section>
    </div>
  );
};

export default FeaturesSection;
