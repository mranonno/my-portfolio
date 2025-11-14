import { NavLink } from "react-router-dom";
import { Switch } from "../ui/switch";
import { useState } from "react";
import logoImg from "../../assets/logo/logo_anonno.png";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  console.log(isChecked);

  const getNavLinkClass = (isActive: boolean) => {
    return isActive
      ? "text-fuchsia-700 font-poppins text-lg font-medium"
      : "text-lg font-medium font-poppins hover:text-fuchsia-700 transition-color duration-500";
  };
  const navOptions = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => getNavLinkClass(isActive)}
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) => getNavLinkClass(isActive)}
        >
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/projects"}
          className={({ isActive }) => getNavLinkClass(isActive)}
        >
          PROJECTS
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/articles"}
          className={({ isActive }) => getNavLinkClass(isActive)}
        >
          ARTICLES
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 z-50 hidden md:block">
      <div className="py-4 bg-gradient-to-b from-[#FAFAFA] to-[#FAFAFA80]"></div>

      <div className="flex justify-between items-center border-2 rounded-full py-4 px-5 bg-white bg-opacity-60  backdrop-blur-md ">
        <div className="size-6">
          <img src={logoImg} alt="Logo" />
        </div>
        <div>
          <ul className="flex gap-4">{navOptions}</ul>
        </div>
        <div>
          <Switch
            checked={isChecked}
            onCheckedChange={() => setIsChecked(!isChecked)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
