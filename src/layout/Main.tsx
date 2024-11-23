import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
// import Footer from "../components/Shared/Footer";

const Main = () => {
  return (
    <div className="px-12">
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
