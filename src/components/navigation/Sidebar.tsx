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
    <div className="mt-[10vh]">
      <div className="flex flex-col  px-2">
        <NavLinks
          customClass={""}
          linkTo={navLinkData.homePage.to}
          linkName={navLinkData.homePage.label}
          handleSideNav={handleSideNav}
        />

        <NavLinks
          customClass={"text-black"}
          linkTo={navLinkData.aboutPage.to}
          linkName={navLinkData.aboutPage.label}
          handleSideNav={handleSideNav}
        />

        <NavLinks
          customClass={"text-black"}
          linkTo={navLinkData.servicesPage.to}
          linkName={navLinkData.servicesPage.label}
          handleSideNav={handleSideNav}
        />

        <NavLinks
          customClass={"text-black"}
          linkTo={navLinkData.contactsPage.to}
          linkName={navLinkData.contactsPage.label}
          handleSideNav={handleSideNav}
        />
      </div>
    </div>
  );
};

export default Sidebar;
