import { NavLink } from "react-router-dom";

const Navbar = () => {
  const getNavLinkClass = (isActive: boolean) => {
    return isActive
      ? "text-green-500 text-lg font-medium"
      : "text-lg font-medium hover:text-green-500";
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
    <div className="flex justify-between items-center border-2 rounded-full py-2 px-1 mt-6">
      <div>Logo</div>
      <div>
        <ul className="flex gap-4">{navOptions}</ul>
      </div>
      <div>right</div>
    </div>
  );
};

export default Navbar;
