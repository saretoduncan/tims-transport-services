import workWithImg from "../../assets/why_choose_us.webp";
import managerTruck from "../../assets/managertrack.webp";
import scaniaTruck from "../../assets/scania.webp";
import { FaCube } from "react-icons/fa";
import PrimaryLink from "../buttons/PrimaryLink";
import { navLinkData } from "../navigation/NavLinkData";
const WhyChooseUs = () => {
  return (
    <>
      <section className="bg-gray-100 py-16 px-4 2xl:px-0 ">
        <div className="grid space-y-2 md:space-y-0 md:grid-cols-2 gap-4 xl:w-[1280px] mx-auto">
          <div className="grid  space-y-4">
            <section className="space-y-2">
              <section>
                <h4 className="text-3xl font-bold xl:text-4xl">
                  Why Choose Us
                </h4>
              </section>
              <section>
                <p>
                  At tim’s transport services, we offer reliable and efficient
                  transport and logistic solutions. With our modern fleet and
                  experienced driver, we ensure the safe and timely delivery of
                  your goods.
                </p>
              </section>
            </section>

            <section className="grid space-y-4 xl:grid-cols-2 xl:space-y-0 xl:gap-4">
              <section>
                <h6 className=" font-bold">Reliable</h6>
                <p>
                  With our extensive expensive experience in servicing mine
                  sites and remote areas, you can trust us to handle your
                  logistics requirements with professionalism and care.
                </p>
              </section>
              <section>
                <h6 className="font-bold">Efficience</h6>
                <p>
                  Our modern fleet of prime movers and side tipper trailers
                  ensures efficient transportation of your goods.
                </p>
              </section>
            </section>
          </div>
          <div
            className="bg-cover h-[300px] rounded self-center"
            style={{
              backgroundImage: "url(" + "'" + workWithImg + "'" + ")",
            }}
          ></div>
        </div>
      </section>
      <section className="bg-white py-16 px-4 xl:px-0 ">
        <div className="grid space-y-2 md:space-y-0 md:grid-cols-2 gap-4 xl:w-[1280px] mx-auto">
          <div
            className="bg-cover bg-center bg-no-repeat h-[300px] rounded self-center"
            style={{
              backgroundImage: "url(" + "'" + managerTruck + "'" + ")",
            }}
          ></div>
          <div className="grid  space-y-4 md:self-center">
            <section className="space-y-2">
              <section>
                <h4 className="text-2xl font-bold xl:text-4xl ">
                  <span>
                    <FaCube />
                  </span>
                  Experties and Modern Fleet for Efficient Haulage
                </h4>
              </section>
              <section>
                <p>
                  At Tim's Transport Services, we take pride in our team's
                  expertise and our modern fleet of prime movers. With a range
                  of vehicles rated from 130 to 170 tonnes, we ensure the safe
                  and timely delivery of your goods
                </p>
              </section>
            </section>
            <section>
              <PrimaryLink
                linkName="Learn More"
                linkTo={navLinkData.aboutPage.to}
                className="bg-white border border-orange-500 rounded-none"
              />
            </section>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16 px-4 xl:px-0 ">
        <div className="grid space-y-2 md:space-y-0 md:grid-cols-2 gap-4 xl:w-[1280px] mx-auto">
          <div className="grid  space-y-4 md:self-center">
            <section className="space-y-2">
              <section>
                <h4 className="text-2xl font-bold capitalize xl:text-4xl">
                  Delivering quality transport solutions for your needs
                </h4>
              </section>
              <section>
                <p>
                  With a proven track record of successful projects and
                  satisfied customers, Tim’s Transport services is the reliable
                  choice for all your needs
                </p>
              </section>
            </section>
            <section className="grid space-y-4 md:grid-cols-2 md:space-y-0 md:gap-2 xl:gap-4">
              <section>
                <h6 className="text-3xl font-bold text-orange-500">90%</h6>
                <p>
                  completed projects:
                  <span className="text-orange-500 font-bold">300+</span>
                </p>
              </section>
              <section>
                <h6 className="text-3xl font-bold text-orange-500">95%</h6>
                <p>Customer satisfaction rates: Excellent.</p>
              </section>
            </section>
          </div>{" "}
          <div
            className="bg-cover bg-center md:bg-bottom bg-no-repeat h-[300px] rounded self-center"
            style={{
              backgroundImage: "url(" + "'" + scaniaTruck + "'" + ")",
            }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
