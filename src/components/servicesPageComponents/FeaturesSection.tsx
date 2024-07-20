import { SiNike } from "react-icons/si";
import transitTruck from "../../assets/transist.webp";
import civilTruck from "../../assets/civiltracks.webp";

import highWayScannia from "../../assets/highwaytrack.webp";
const FeaturesSection = () => {
  return (
    <>
      <section className="bg-gray-100 py-16 px-4 2xl:px-0 ">
        <div className="grid space-y-2 md:space-y-0 md:grid-cols-2 gap-4 xl:w-[1280px] mx-auto">
          <div className="grid  space-y-2">
            <section className="space-y-2 ">
              <div className="h-2 w-6 bg-orange-500"></div>
              <section>
                <h4 className="text-3xl font-bold xl:text-4xl">Bulk Haulage</h4>
              </section>
              <section className="">
                <p>
                  We transport materials such as sand, gravel, grains, and mulch
                  to construction sites and other locations.
                </p>
              </section>
            </section>
            <section className="">
              <h6 className=" font-bold capitalize">Key features</h6>
              <ul className=" list-inside">
                <li className="flex">
                  <span>
                    <SiNike className="text-orange-500 text-lg" />
                  </span>{" "}
                  Reliable, timely deliveries
                </li>
                <li className="flex">
                  <span>
                    <SiNike className="text-orange-500 text-lg" />
                  </span>{" "}
                  Modern, well-maintained fleet
                </li>
                <li className="flex">
                  <span>
                    <SiNike className="text-orange-500 text-lg" />
                  </span>{" "}
                  Experienced, professional drivers
                </li>
                <li className="flex">
                  <span>
                    <SiNike className="text-orange-500 text-lg" />
                  </span>{" "}
                  Customized logistics solutions
                </li>
                <li className="flex">
                  <span>
                    <SiNike className="text-orange-500 text-lg" />
                  </span>{" "}
                  Extensive coverage across Western Australia
                </li>
              </ul>
            </section>
          </div>
          <div
            className="bg-cover h-[300px] rounded self-center"
            style={{
              backgroundImage: "url(" + "'" + highWayScannia + "'" + ")",
            }}
          ></div>
        </div>
      </section>
      <section className="bg-white py-16 px-4 xl:px-0 ">
        <div className="grid space-y-2 md:space-y-0 md:grid-cols-2 gap-4 xl:w-[1280px] mx-auto">
          <div
            className="bg-cover bg-center bg-no-repeat h-[300px] rounded self-center"
            style={{
              backgroundImage: "url(" + "'" + transitTruck + "'" + ")",
            }}
          ></div>
          <div className="grid  space-y-4 md:self-center">
            <section className="space-y-2">
              <section>
                <div className="h-2 w-6 bg-orange-500"></div>
                <h4 className="text-2xl font-bold xl:text-4xl ">
                  Reliable Haulage Solutions for Mine Sites and Remote Areas
                </h4>
              </section>
              <section>
                <p>
                  We specialize in meeting the haulage needs of mine sites and
                  remote areas with professionalism and care. Our experienced
                  team ensures safe and timely deliveries, using a modern fleet
                  of prime movers and side tipper trailers. We understand the
                  unique challenges of operating in remote locations and are
                  committed to providing customized logistics solutions tailored
                  to each client's needs. Whether transporting sand, gravel,
                  grains, or mulch, we prioritize safety, reliability, and
                  efficiency in every job. Serving Western Australia and beyond,
                  we pride ourselves on our ability to handle the most demanding
                  logistics requirements with expertise and dedication.
                </p>
              </section>
            </section>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16 px-4 xl:px-6 ">
        <div className="grid space-y-2 md:space-y-0 md:grid-cols-2 gap-4 xl:w-[1280px] mx-auto">
          <div className="grid  space-y-4 md:self-center">
            <section className="space-y-2">
              <section>
                <div className="h-2 w-6 bg-orange-500"></div>
                <h4 className="text-2xl font-bold capitalize xl:text-4xl">
                  Comprehensive Civil Project Solutions
                </h4>
              </section>
              <section>
                <p>
                  Tim’s Transport Services provides comprehensive solutions for
                  civil projects. Our offerings include:
                </p>{" "}
                <ul className=" list-inside">
                  <li className="flex">
                    <span>
                      <SiNike className="text-orange-500 text-lg" />
                    </span>{" "}
                    Road Construction: Building new roads with precision and
                    efficiency.
                  </li>
                  <li className="flex">
                    <span>
                      <SiNike className="text-orange-500 text-lg" />
                    </span>{" "}
                    Road Maintenance: Ensuring roads are safe and
                    well-maintained.
                  </li>
                  <li className="flex">
                    <span>
                      <SiNike className="text-orange-500 text-lg" />
                    </span>{" "}
                    Civil and Bulk Haulage: Transporting materials necessary for
                    civil engineering projects.
                  </li>
                </ul>
                <p>
                  Our experienced team and modern fleet ensure that all civil
                  services are carried out to the highest standards, meeting the
                  unique needs of each project.
                </p>
              </section>
            </section>
          </div>{" "}
          <div
            className="bg-cover bg-center md:bg-bottom bg-no-repeat h-[300px] rounded self-center"
            style={{
              backgroundImage: "url(" + "'" + civilTruck + "'" + ")",
            }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
