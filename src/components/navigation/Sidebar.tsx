import PrimaryLink from "../buttons/PrimaryLink";
import { navLinkData } from "./NavLinkData";
import NavLinks from "./Navlinks";
type sideNavProps = {
  handleScrollUp: () => void;
  handleSideNavOpenClick: () => void;
};
const Sidebar: React.FC<sideNavProps> = ({
  handleScrollUp,
  handleSideNavOpenClick,
}) => {
  const handleSideNav = () => {
    handleSideNavOpenClick();
    handleScrollUp();
  };
  return (
    <div className="md:w-[85vw] min-h-[100vh] px-2 md:mx-auto flex flex-col justify-between">
      <div className="mt-[12vh]  ">
        <div className="flex flex-col  ">
          <NavLinks
            customClass={""}
            linkTo={navLinkData.homePage.to}
            linkName={navLinkData.homePage.label}
            handleSideNav={handleSideNav}
          />

          <NavLinks
            customClass={""}
            linkTo={navLinkData.aboutPage.to}
            linkName={navLinkData.aboutPage.label}
            handleSideNav={handleSideNav}
          />

          <NavLinks
            customClass={""}
            linkTo={navLinkData.servicesPage.to}
            linkName={navLinkData.servicesPage.label}
            handleSideNav={handleSideNav}
          />

          <NavLinks
            customClass={""}
            linkTo={navLinkData.contactsPage.to}
            linkName={navLinkData.contactsPage.label}
            handleSideNav={handleSideNav}
          />
        </div>
      </div>{" "}
      <PrimaryLink
        linkName={"Call Us Now"}
        className={
          "bg-orange-500 text-white w-full text-center mb-4 "
        }
        linkTo="tel:+254715691186"
      />
    </div>
  );
};

export default Sidebar;
