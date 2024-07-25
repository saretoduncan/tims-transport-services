import { Link, useLocation } from "react-router-dom";
type NavlinkProps = {
  linkName: string;
  linkTo: string;
  customClass: string;
  handleSideNav?: () => void;
};
const NavLinks: React.FC<NavlinkProps> = ({
  linkName,
  linkTo,
  customClass: customClass,
  handleSideNav,
}) => {
  const location = useLocation().pathname;
  const handleSideNavClick = () => {
    if (handleSideNav !== undefined) {
      handleSideNav();
    }
  };
  return (
    <Link
      className={` font-bold w-full text-shadow-sm lg:shadow-black md:w-auto md:text-lg p-2 rounded-md   lg:bg-inherit lg:p-0 lg:rounded-none ${
        linkTo === location
          ? "text-white bg-orange-500 lg:text-orange-500 "
          : "text-white bg:inherit"
      } ${customClass}`}
      to={linkTo}
      onClick={() => handleSideNavClick()}
    >
      {linkName}
    </Link>
  );
};

export default NavLinks;
