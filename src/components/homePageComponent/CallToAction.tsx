import business_call from "../../assets/business_call.webp";
import PrimaryLink from "../buttons/PrimaryLink";
import { navLinkData } from "../navigation/NavLinkData";
const CallToAction = () => {
  return (
    <div
      className="max-w-[1280px] mx-auto h-[200px] bg-cover bg-bottom"
      style={{
        backgroundImage: "url(" + "'" + business_call + "'" + ")",
      }}
    >
      <div className="size-full bg-[#00000090] grid p-4 xl:px-0  ">
        <div className="grid md:grid-cols-2 items-center xl:w-[1280px] xl:mx-auto">
          <div className="md:justify-self-center">
            <h5 className="text-white text-2xl  font-bold capitalize text-shadow shadow-black ">
              Efficient transport solution for you
            </h5>
            <p className="text-white text-shadow shadow-black">
              Contact us today for all your transport and logistics needs
            </p>
          </div>
          <div className="md:justify-self-center">
            <PrimaryLink
              linkName={"Contact Us Now"}
              className={"text-white bg-orange-500 rounded md:text-xl "}
              linkTo={navLinkData.contactsPage.to}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
