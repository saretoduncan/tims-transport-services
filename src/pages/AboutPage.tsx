import AboutUsSection from "../components/AboutPageComponents/AboutUsSection";
import HeroSection from "../components/AboutPageComponents/HeroSection";
import OurCoresSection from "../components/AboutPageComponents/OurCoresSection";
import OurTeamSection from "../components/AboutPageComponents/OurTeamSection";
import CallToAction from "../components/homePageComponent/CallToAction";
import OurFleet from "../components/homePageComponent/OurFLeet";
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
        <OurCoresSection/>
      </section>
      <section>
        <OurTeamSection />
      </section>
      <section className="mt-4">
        <CallToAction />
      </section>
      <section>
        <OurFleet />
      </section>
    </div>
  );
}

export default AboutPage;
