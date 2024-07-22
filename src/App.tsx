import { BrowserRouter } from "react-router-dom";
import AppRoute from "./AppRoute";
import Navbar from "./components/navigation/Navbar";
import Sidebar from "./components/navigation/Sidebar";
import { useEffect, useState } from "react";
import FooterComponent from "./components/footer/FooterComponent";

function App() {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const [isNavFull, setNavFull] = useState(false);

  const handleSidebarOpen = () => {
    setSideBarOpen(() => !isSideBarOpen);
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setNavFull(() => true) : setNavFull(() => false);
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <div className="relative flex flex-col justify-between min-h-[100vh]">
          <section>
            <nav
              className={`${
                isNavFull
                  ? "bg-gray-100 top-0"
                  : "bg-transparent md:top-4"
              } transition-all duration-300 ease-in-out bg-gray-100 md:min-h-[10vh] min-h-[8vh] flex items-center fixed w-full top-0 z-[100]`}
            >
              <div className=" rounded w-full md:w-[85vw] mx-auto bg-transparent px-2 2xl:container 2xl:mx-auto">
                <Navbar handleSidebarOpenClick={handleSidebarOpen} isFullNav={isNavFull}/>
              </div>
            </nav>
            <section
              className={`min-h-[100vh] bg-gray-100 fixed w-full top-0 bottom-0 z-[90] lg:hidden transform-all ease-in-out duration-500 ${
                isSideBarOpen ? "translate-y-100" : "translate-y-[-100%]"
              }`}
            >
              <Sidebar
                handleScrollUp={scrollUp}
                handleSideNavOpenClick={handleSidebarOpen}
              />
            </section>
            <main className="mt-[0]  md:mt-[0] ">
              <AppRoute />
            </main>
          </section>
          <footer>
            <FooterComponent />
          </footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
