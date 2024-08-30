import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Preloader from "../Components/preloader/Preloader";
import { useEffect, useState } from "react";
const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to hide the preloader
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    // Always show preloader initially, then check if document is ready
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, [setLoading]);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="">
          <div className="bg-black text-white">
            <Navbar></Navbar>
          </div>
          <div className="min-h-[calc(100vh-542px)] ">
            <Outlet></Outlet>
          </div>
          <div className="bg-black text-white">
            <Footer></Footer>
          </div>
        </div>
      )}
    </>
  );
};

export default MainLayout;
