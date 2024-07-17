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
      className={` font-bold w-full md:w-auto md:text-lg p-2 rounded-md   md:bg-inherit md:p-0 md:rounded-none ${
        linkTo === location
          ? "text-white bg-orange-500 md:text-orange-500 md:bg:inherit "
          : "text-black bg:inherit"
      } ${customClass}`}
      to={linkTo}
      onClick={() => handleSideNavClick()}
    >
      {linkName}
    </Link>
  );
};

export default NavLinks;
