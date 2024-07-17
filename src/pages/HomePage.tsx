import Courousel from "../components/homePageComponent/Courousel";
import FeaturesSection from "../components/homePageComponent/FeaturesSection";

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
      </div>
    </>
  );
}

export default HomePage;
