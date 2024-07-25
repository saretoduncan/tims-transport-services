import logo from "../../assets/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navLinkData } from "../navigation/NavLinkData";
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

const FooterComponent = () => {
  return (
    <div className="bg-gray-800 py-6 px-4 rounded shadow-black shadow mt-4 text-gray-100">
      <div className="grid  gap-4 md:grid-cols-2  xl:w-[1240px] xl:mx-auto ">
        <section className="flex gap-2 flex-col md:flex-col-reverse">
          <Link to={navLinkData.homePage.to}>
            <img
              src={logo}
              alt="logo"
              className="size-[150px] justify-self-center bg-gray-100 rounded-full"
            />
          </Link>

          <article className="font-bold text-sm">
            <Link to={navLinkData.homePage.to} className="text-orange-500 ">
              Tim’s Transport Services
            </Link>{" "}
            offers efficient bulk hauling of sand, gravel, grains, and mulch
            across Western Australia, including mine sites and remote areas,
            with reliable interstate freight delivery.
          </article>
        </section>
        <section className="grid gap-2">
          <section className="gap-2 md:justify-self-end  grid lg:grid-cols-2">
            <section>
              <h3 className="text-xl text-orange-500 font-bold">Quick Links</h3>
              <div className="gap-2 flex flex-col font-bold">
                <Link
                  to={navLinkData.aboutPage.to}
                  className="hover:text-orange-600 hover:text-xl transition-all"
                >
                  About us
                </Link>
                <Link
                  to={navLinkData.servicesPage.to}
                  className="hover:text-orange-600 hover:text-xl transition-all"
                >
                  Services
                </Link>
                <Link
                  to={navLinkData.contactsPage.to}
                  className="hover:text-orange-600 hover:text-xl transition-all"
                >
                  contacts
                </Link>
              </div>
            </section>
            <section className="">
              <h3 className="text-xl text-orange-500 font-bold">Address</h3>
              <ul className="gap-2 grid text-sm">
                <li className="flex items-center space-x-2 font-bold">
                  <FaLocationDot className="text-orange-500" />{" "}
                  <p>Alexander heights, perth.</p>
                </li>
                <li className="flex items-center space-x-2 font-bold">
                  <MdAlternateEmail className="text-orange-500" />{" "}
                  <p>Info@timstransportservices.com</p>
                </li>
                <li className="flex items-center space-x-2 font-bold">
                  <FaPhoneAlt className="text-orange-500" />{" "}
                  <p>+61 416 595 734</p>
                </li>
              </ul>
            </section>
          </section>
          <section className="self-end justify-self-end">
            <ul className="flex gap-4">
              <li>
                <a
                  href="https://www.facebook.com/chepsiror.arapboit"
                  className="text-3xl text-orange-600 hover:text-4xl"
                >
                  <FaSquareFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/chepsiror_boit"
                  className="text-3xl text-orange-600 hover:text-4xl"
                >
                  <BiLogoInstagramAlt />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@millionaire6754"
                  className="text-3xl text-orange-600 hover:text-4xl"
                >
                  <AiFillTikTok />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/timothy-boit-672a2396"
                  className="text-3xl text-orange-600 hover:text-4xl"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </section>
        </section>
      </div>
      <div className="w-full h-2 bg-orange-500 my-2 xl:w-[1240px] xl:mx-auto">
        {" "}
      </div>
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
