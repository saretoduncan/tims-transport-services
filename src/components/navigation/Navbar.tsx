import logo from "../../assets/logo.png";
import { navLinkData } from "./NavLinkData";
import { FaBars } from "react-icons/fa";
import NavLinks from "./Navlinks";
import PrimaryLink from "../buttons/PrimaryLink";

type navbarProps = {
  handleSidebarOpenClick: () => void;
};
const Navbar: React.FC<navbarProps> = ({ handleSidebarOpenClick }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <section className="self-center ">
          <img src={logo} alt="" className="md:size-[60px] size-[40px] " />
        </section>
        <section className=" hidden md:flex md:space-x-4 items-center">
          <NavLinks
            customClass={""}
            linkTo={navLinkData.homePage.to}
            linkName={navLinkData.homePage.label}
          />
          <NavLinks
            customClass={""}
            linkTo={navLinkData.aboutPage.to}
            linkName={navLinkData.aboutPage.label}
          />
          <NavLinks
            customClass={""}
            linkTo={navLinkData.servicesPage.to}
            linkName={navLinkData.servicesPage.label}
          />
          <NavLinks
            customClass={""}
            linkTo={navLinkData.contactsPage.to}
            linkName={navLinkData.contactsPage.label}
          />
          <PrimaryLink linkName={"Call Us Now"} className={"bg-orange-500"} linkTo="tel:+254715691186"/>
        </section>
        <section className="md:hidden">
          <button onClick={() => handleSidebarOpenClick()}>
            <FaBars className="text-orange-500 text-3xl" />
          </button>
        </section>
      </div>
    </>
  );
};

export default Navbar;
