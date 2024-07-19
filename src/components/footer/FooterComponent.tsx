import logo from "../../assets/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navLinkData } from "../navigation/NavLinkData";

const FooterComponent = () => {
  return (
    <div className="bg-gray-200 py-6 px-4 rounded shadow-black shadow mt-4 ">
      <div className="grid  space-y-4 md:grid-cols-2 md:space-y-0 xl:w-[1240px] xl:mx-auto ">
        <section className="flex space-y-2 flex-col md:flex-col-reverse">
          <Link to={navLinkData.homePage.to}>
            <img
              src={logo}
              alt="logo"
              className="size-[150px] justify-self-center"
            />
          </Link>

          <article className="font-bold text-sm">
            <Link to={navLinkData.homePage.to} className="text-orange-500 ">Tim’s Transport Services</Link>{" "}
            offers efficient bulk hauling of sand, gravel, grains, and mulch
            across Western Australia, including mine sites and remote areas,
            with reliable interstate freight delivery.
          </article>
        </section>
        <section className="space-y-2 md:justify-self-end lg:justify-self-star lg:grid lg:grid-cols-2">
          <section>
            <h3 className="text-xl text-orange-500 font-bold">Quick Links</h3>
            <div className="space-y-1 flex flex-col font-bold">
              <Link to={navLinkData.aboutPage.to}>About us</Link>
              <Link to={navLinkData.servicesPage.to}>Services</Link>
              <Link to={navLinkData.contactsPage.to}>contacts</Link>
            </div>
          </section>
          <section className="">
            <h3 className="text-xl text-orange-500 font-bold">Address</h3>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center space-x-2 font-bold">
                <FaLocationDot /> <p>Alexander heights, perth.</p>
              </li>
              <li className="flex items-center space-x-2 font-bold">
                <MdAlternateEmail /> <p>Info@timstransportservices.com</p>
              </li>
              <li className="flex items-center space-x-2 font-bold">
                <FaPhoneAlt /> <p>+64 416 595 734</p>
              </li>
            </ul>
          </section>
        </section>
      </div>
      <div className="w-full h-2 bg-orange-500 my-2 xl:w-[1240px] xl:mx-auto"> </div>
      <section className="xl:w-[1240px] xl:mx-auto">
        <small className="font-bold">
          &copy; 2024 TIMS TRANSPORT SERVICES.{" "}
          <span className="text-orange-500 ">All rights reserved</span>{" "}
        </small>
      </section>
    </div>
  );
};

export default FooterComponent;
