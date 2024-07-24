const AboutUsSection = () => {
  return (
    <div className="py-6 px-6 space-y-4 lg:container lg:mx-auto xl:w-[1280px]">
      <div>
        <div className="h-2 w-6 bg-orange-500"></div>
        <h3 className="capitalize font-bold  text-4xl ">Who are we</h3>
      </div>

      <article className="text-gray-700">
        Tim’s Transport Services is a family-owned Australian bulk hauling
        company committed to providing efficient and high-quality transport and
        logistics solutions. With years of experience in servicing mine sites
        and remote areas across Western Australia, we excel in transporting a
        wide range of materials. Our specialties include hauling sand, gravel,
        grains, and mulch to construction sites and various other destinations.
        Our extensive expertise ensures that we can meet the unique demands of
        each project, no matter the location or complexity. In addition to our
        robust operations within Western Australia, our reliable heavy bulk
        haulage services also extend to interstate freight delivery, allowing us
        to offer comprehensive transport solutions across the country. At Tim’s
        Transport Services, we pride ourselves on our dedication to customer
        satisfaction, safety, and reliability, making us a trusted partner for
        all your bulk hauling needs.
      </article>
      <div className="bg-orange-500 h-2"></div>
    </div>
  );
};

export default AboutUsSection;
