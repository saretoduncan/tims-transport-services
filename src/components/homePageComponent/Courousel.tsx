import transitImg from "../../assets/transist.webp";
import quaryTrack from "../../assets/quarytrack.webp";
import highWayScannia from "../../assets/highwaytrack.webp";

import { navLinkData } from "../navigation/NavLinkData";
import PrimaryLink from "../buttons/PrimaryLink";
import { useEffect, useState } from "react";

function Courousel() {
  const [currentBg, setCurrentBg] = useState(0);

  const corouselBgImg = [transitImg, quaryTrack, highWayScannia];
  const handleNextImage = () => {
    setCurrentBg((prevImg) => (prevImg + 1) % corouselBgImg.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div
      className={`relative min-h-[40vh] md:min-h-[60vh] xl:min-h-[80vh] overflow-hidden bg-cover bg-center transform  animate-fade-in transition-all duration-1000 ease-in-out ${
        "bg-[url(" + corouselBgImg[currentBg] + ")]"
      }`}
      style={{
        backgroundImage: "url(" + "'" + corouselBgImg[currentBg] + "'" + ")",
      }}
    >
      <div className="absolute size-[100%] z-[11] bg-[#00000090] flex  items-center px-5 md:ps-10">
        <div className="space-y-4">
          <section className="text-white">
            <h1 className="capitalize text-3xl md:text-5xl xl:text-6xl 2xl:text-8xl font-bold text-shadow shadow-black">
              Tims transport services
            </h1>
            <h1 className="capitalize md:text-2xl text-shadow shadow-black font-semibold animate-text-reveal">
              Efficient on <span className="text-orange-500">wheel</span>, your{" "}
              <span className="text-orange-500">haul</span>, our{" "}
              <span className="text-orange-500">mission</span>
            </h1>
          </section>
          <section className="flex space-x-2 md:space-x-4   ">
            <PrimaryLink
              linkName="Learn More"
              linkTo={navLinkData.aboutPage.to}
              className="bg-orange-500 text-white "
            />
            <PrimaryLink
              linkName="Contact us"
              linkTo={navLinkData.contactsPage.to}
              className="bg-white text-orange-500"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Courousel;
