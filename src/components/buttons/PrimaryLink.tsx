import React from "react";
import { Link } from "react-router-dom";
type primaryButtonProp = {
  linkName: string;
  className: string;
  linkTo: string;
};
const PrimaryLink: React.FC<primaryButtonProp> = ({
  linkName,
  className,
  linkTo,
}) => {
  return (
    <Link to={linkTo} className={`p-2 font-semibold md:py-2 md:px-4 rounded-md ${className}`}>
      {linkName}
    </Link>
  );
};

export default PrimaryLink;
