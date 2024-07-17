type INavLinkData= {
  [key: string]: {
    label: string;
    to: string;
  };
}

export const navLinkData: INavLinkData = {
  homePage: { label: "Home", to: "/" },
  aboutPage: { label: "About", to: "/aboutus" },
  servicesPage: { label: "Services", to: "/services" },
  contactsPage: { label: "Contact Us", to: "/contactus" },
};
