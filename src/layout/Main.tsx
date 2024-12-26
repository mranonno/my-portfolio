import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

const Main = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
