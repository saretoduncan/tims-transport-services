import Courousel from "../components/homePageComponent/Courousel";
import FeaturesSection from "../components/homePageComponent/FeaturesSection";
import WhyChooseUs from "../components/homePageComponent/WhyChooseUs";

function HomePage() {
  return (
    <>
      <div className="space-y-4">
        <section className="">
          <Courousel />
        </section>
        <section>
          <FeaturesSection />
        </section>
        <section>
          <WhyChooseUs/>
        </section>
      </div>
    </>
  );
}

export default HomePage;
