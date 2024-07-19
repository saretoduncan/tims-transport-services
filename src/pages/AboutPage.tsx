import AboutUsSection from "../components/AboutPageComponents/AboutUsSection";
import HeroSection from "../components/AboutPageComponents/HeroSection";
import OurTeamSection from "../components/AboutPageComponents/OurTeamSection";

function AboutPage() {
  return (
    <div>
      <section>
        <HeroSection />
      </section>

      <section>
        <AboutUsSection />
      </section>
      <section>
        <OurTeamSection/>
      </section>
    </div>
  );
}

export default AboutPage;
