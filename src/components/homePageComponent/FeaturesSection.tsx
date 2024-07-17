import FeaturesCard from "./FeaturesCard";
import highWayScannia from "../../assets/highwaytrack.webp";
import civilTruck from "../../assets/civiltracks.webp";
import quaryTrack from "../../assets/quarytrack.webp";
import PrimaryLink from "../buttons/PrimaryLink";
import { navLinkData } from "../navigation/NavLinkData";
const FeaturesSection = () => {
  return (
    <div className="space-y-4 mb-4">
      <section className="w-[300px] md:w-[400px]  mx-auto">
        <h3 className="capitalize text-center text-2xl md:text-4xl font-bold ">
          <span className="text-sm md:text-base text-orange-500">
            Efficient
          </span>{" "}
          <br />
          Delivering reliable transport and logistics solutions
        </h3>
      </section>
      <section className="grid px-4 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:w-[1024px] xl:mx-auto">
        <FeaturesCard
          featureCaption="we transport material such as sand, gravel, grains, and mulch to construction sites and locations."
          featureImg={highWayScannia}
          featureTitle="Bulk Haulage"
        />
        <FeaturesCard
          featureCaption="we specialize in meeting the haulage  needs of mine sites and remote areas with professionalism and care."
          featureImg={quaryTrack}
          featureTitle="mine site services"
        />
        <FeaturesCard
          featureCaption="we offer a range of solutions for civil projects, including road construction, road maintenance, and bulk haulage."
          featureImg={civilTruck}
          featureTitle="civil services"
        />
      </section>
      <section className="flex justify-center">
        <PrimaryLink linkName="Learn More" linkTo={navLinkData.servicesPage.to} className="text-white  bg-orange-500 rounded-none" />
      </section>
    </div>
  );
};

export default FeaturesSection;
