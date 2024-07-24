import quaryTrack from "../../assets/quarytrack.webp";
import transitTruck from "../../assets/transist.webp";
import civilTruck from "../../assets/civiltracks.webp";

import highWayScannia from "../../assets/highway_truck_sand.webp";
const FeaturesSection = () => {
  return (
    <>
      <section className="bg-gray-100 py-16 px-4 2xl:px-0 ">
        <div className="grid space-y-2 md:space-y-0 md:grid-cols-2 gap-4 xl:w-[1280px] mx-auto">
          <div className="grid  space-y-2">
            <section className="space-y-2 ">
              <div className="h-2 w-6 bg-orange-500"></div>
              <section>
                <h4 className="text-3xl font-bold xl:text-4xl">Long Haulage</h4>
              </section>
              <section className="">
                <p>
                  Tim's Transport Services offers reliable long-haul trucking
                  across all cities of Australia, providing exceptional service
                  with a focus on safety and timeliness. Our experienced team
                  ensures that your shipments are delivered securely and on
                  schedule, no matter the distance. We handle extensive routes
                  with the utmost care, leveraging our state-of-the-art
                  equipment and logistics expertise to meet your transportation
                  needs. Whether you’re moving goods across cities or regions,
                  you can count on us for efficient and effective long-haul
                  solutions. Trust Tim's Transport Services to deliver your
                  freight reliably and punctually every time.
                </p>
              </section>
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
                  Short Haulage
                </h4>
              </section>
              <section>
                <p>
                  No job is too small for us! At Tim's Transport Services, based
                  in Western Australia, we specialize in short-haul trucking
                  that is safe, convenient, and cost-effective. Our team is
                  dedicated to handling all your short-haul needs with the
                  highest standards of safety and efficiency. Whether you have a
                  single delivery or require multiple trips, we ensure that
                  every job is completed promptly and within budget. With Tim's
                  Transport Services, you can count on reliable transportation
                  solutions that meet your specific requirements. Trust us to
                  deliver your goods safely and economically across Western
                  Australia.
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
                  Mining and Reginal Transport
                </h4>
              </section>
              <section>
                <p>
                  Tim's Transport Services excels in mining logistics and
                  regional transport across Australia, providing top-tier
                  expertise and reliability for every job. We specialize in
                  transporting essential materials such as sand, gravel, and
                  mulch, ensuring that your projects are supplied with the
                  highest quality resources. Our dedicated team manages complex
                  logistics with precision, catering to both mining operations
                  and regional needs with unmatched efficiency. Whether you
                  require bulk material delivery or intricate regional
                  transport, Tim's Transport Services is your trusted partner
                  for dependable solutions that meet all your mining and
                  material transport needs throughout Australia.
                </p>{" "}
              </section>
            </section>
          </div>{" "}
          <div
            className="bg-cover bg-center md:bg-bottom bg-no-repeat h-[300px] rounded self-center"
            style={{
              backgroundImage: "url(" + "'" + quaryTrack + "'" + ")",
            }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
