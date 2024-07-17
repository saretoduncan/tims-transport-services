import { BrowserRouter } from "react-router-dom";
import AppRoute from "./AppRoute";
import Navbar from "./components/navigation/Navbar";
import Sidebar from "./components/navigation/Sidebar";
import { useState } from "react";

function App() {
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSideBarOpen(() => !isSideBarOpen);
  };
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <BrowserRouter>
        <div className="relative grid">
          <nav className="bg-gray-100 md:h-[10vh] h-[8vh] flex items-center absolute w-full top-0 z-[100]">
            <div className=" w-full mx-6 2xl:container 2xl:mx-auto">
              <Navbar handleSidebarOpenClick={handleSidebarOpen} />
            </div>
          </nav>
          <section
            className={`min-h-[100vh] bg-gray-100 absolute w-full top-0 bottom-0 z-[90] md:hidden transform-all ease-in-out duration-500 ${
              isSideBarOpen ? "translate-y-100" : "translate-y-[-100%]"
            }`}
          >
            <Sidebar
              handleScrollUp={scrollUp}
              handleSideNavOpenClick={handleSidebarOpen}
            />
          </section>
          <section className="mt-[8vh] md:mt-[10vh] ">
            <AppRoute />
          </section>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
