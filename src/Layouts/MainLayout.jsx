import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
    return (
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
    );
};

export default MainLayout;