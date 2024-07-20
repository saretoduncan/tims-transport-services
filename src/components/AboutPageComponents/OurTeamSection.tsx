import boit from "../../assets/boit.webp";
import rebecca from "../../assets/rebecca_boit.webp";
import jackcline from "../../assets/jackline_jeruto.webp";
import sareto from "../../assets/managertrack.webp";
import TeamComponent from "./TeamComponent";
const OurTeamSection = () => {
  return (
    <div className="p-6 bg-gray-100">
        <div className="xl:max-w-[1280px] xl:mx-auto">

      
      <section >
        <div className="h-2 w-6 bg-orange-500"></div>
        <h3 className="text-2xl font-bold ">Meet Our Team</h3>
      </section>

      <section className="grid py-6 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        <TeamComponent imgSrc={boit} name="Timothy K. Boit" title="Founder" />
        <TeamComponent
          imgSrc={rebecca}
          name="Rebecca C. Boit"
          title="Director"
        />
        <TeamComponent
          imgSrc={jackcline}
          name="Jackline Jeruto"
          title="Office Administrator"
        />
        <TeamComponent
          imgSrc={sareto}
          name="Isaac K. Sareto"
          title="Driver Manager"
        />
      </section>
    </div>  </div>
  );
};

export default OurTeamSection;
