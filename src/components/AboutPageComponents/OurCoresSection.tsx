import miningSite from "../../assets/mining_site.webp";
import { IoIosDisc } from "react-icons/io";
import CoreValuesTitleCards from "./coreValuesCardComponents/CoreValuesTitleCards";
import CorevaluesDetailsCard from "./coreValuesCardComponents/CorevaluesDetailsCard";
import safetyIcon from "../../assets/safety_icon.svg";
import efficientIcon from "../../assets/efficiency_icon.svg";
import shakeHandsIcon from "../../assets/shake_hands.svg";
import sustainableIcon from "../../assets/sustainable_green.svg";
import certifiedIcon from "../../assets/certified_icon.svg";

const OurCoresSection = () => {
  return (
    <>
      <section
        className=" bg-cover bg-no-repeat bg-center p-6 xl:px-0 "
        style={{
          backgroundImage: "url(" + "'" + miningSite + "'" + ")",
        }}
      >
        <div className="grid gap-4 lg:grid-cols-3 xl:w-[1280px] xl:mx-auto ">
          <div className="bg-white shadow xl:w-[350px] xl:justify-self-center">
            <section>
              <CoreValuesTitleCards firstWord="Our" lastWord="Mission" />
            </section>
            <section className="p-6">
              <p className="text-orange-600 font-bold text-2xl lg:text-3xl ">
                Building a Sustainable Future Through Reliable Transport
              </p>
            </section>
          </div>

          <div className="bg-white shadow xl:w-[350px] xl:justify-self-center">
            <section>
              <CoreValuesTitleCards firstWord="Our" lastWord="Strategy" />
            </section>
            <section className="p-6">
              <ul className=" grid gap-2 ">
                <li className="flex text-gray-500  ">
                  <span className="pe-1 pt-1">
                    <IoIosDisc className="text-orange-600 " />
                  </span>
                  Building Strong Customer Relationships and Loyalty
                </li>
                <li className="flex text-gray-500  ">
                  <span className="pe-1 pt-1">
                    <IoIosDisc className="text-orange-600 " />
                  </span>
                  Investing in Fleet and Technology
                </li>
                <li className="flex text-gray-500  ">
                  <span className="pe-1 pt-1">
                    <IoIosDisc className="text-orange-600 " />
                  </span>
                  Embracing Sustainability
                </li>
                <li className="flex text-gray-500  ">
                  <span className="pe-1 pt-1">
                    <IoIosDisc className="text-orange-600 " />
                  </span>
                  Strengthening Community Relations
                </li>
                <li className="flex text-gray-500  ">
                  <span className="pe-1 pt-1">
                    <IoIosDisc className="text-orange-600 " />
                  </span>
                  Fostering Innovation
                </li>
              </ul>
            </section>
          </div>

          <div className="bg-white shadow xl:w-[350px] xl:justify-self-center">
            <section>
              <CoreValuesTitleCards firstWord="Our" lastWord="Values" />
            </section>
            <section className="p-6">
              <ul className="grid gap-2">
                <li className="flex text-gray-500  ">
                  <span className="pe-1 pt-1">
                    <IoIosDisc className="text-orange-600 " />
                  </span>
                  We are Reliable
                </li>
                <li className="flex text-gray-500  ">
                  <span className="pe-1 pt-1">
                    <IoIosDisc className="text-orange-600 " />
                  </span>
                  We Observe Safety
                </li>
                <li className="flex text-gray-500  ">
                  <span className="pe-1 pt-1">
                    <IoIosDisc className="text-orange-600 " />
                  </span>
                  We are Efficient
                </li>
                <li className="flex text-gray-500  ">
                  <span className="pe-1 pt-1">
                    <IoIosDisc className="text-orange-600 " />
                  </span>
                  We Advocate for integrity
                </li>
                <li className="flex text-gray-500  ">
                  <span className="pe-1 pt-1">
                    <IoIosDisc className="text-orange-600 " />
                  </span>
                  We prioritize sustainability.
                </li>
              </ul>
            </section>
          </div>
        </div>{" "}
      </section>
      <section className="my-6 px-6 xl:w-[1280px] xl:mx-auto xl:px-0 space-y-8">
        <section>
          <p className="text-gray-700">
            <span className="text-orange-500 font-bold capitalize">Our mission</span> at Tim’s Transport Services is to provide reliable,
            efficient, and safe tipper transport solutions for our clients. We
            are dedicated to delivering exceptional service with a focus on
            sustainability, innovation, and customer satisfaction. Through our
            commitment to excellence, we aim to be the preferred partner in bulk
            hauling and contribute positively to the communities we serve.{" "}
            <br />
            Our values outline the standards for our conduct with colleagues,
            clients, partners, authorities, and community members.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <CorevaluesDetailsCard
            iconImg={certifiedIcon}
            title="We are reliable"
            caption={
              "Delivering on time, every time with dependable service you can trust."
            }
          />
          <CorevaluesDetailsCard
            iconImg={safetyIcon}
            title="We observe safety"
            caption={
              "Prioritizing the safety of our drivers, clients, and cargo above all else."
            }
          />
          <CorevaluesDetailsCard
            iconImg={efficientIcon}
            title="We are Efficient"
            caption={
              "Maximizing productivity with state-of-the-art tipper trucks and streamlined"
            }
          />
          <CorevaluesDetailsCard
            iconImg={shakeHandsIcon}
            title="We advocate for integrity"
            caption={
              "Upholding the highest standards of honesty and transparency in all our dealings."
            }
          />
          <CorevaluesDetailsCard
            iconImg={sustainableIcon}
            title="We prioritize sustainability."
            caption={
              "Committed to eco-friendly practices and minimizing our environmental impact."
            }
          />
        </section>
      </section>
    </>
  );
};

export default OurCoresSection;
