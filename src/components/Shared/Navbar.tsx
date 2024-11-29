import { NavLink } from "react-router-dom";

const Navbar = () => {
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
    <div className="sticky top-0 z-50">
      <div className="py-4 bg-gradient-to-b from-[#FAFAFA] to-[#FAFAFA80]"></div>

      <div className="flex justify-between items-center border-2 rounded-full py-4 px-5 bg-white bg-opacity-60  backdrop-blur-md ">
        <div>Logo</div>
        <div>
          <ul className="flex gap-4">{navOptions}</ul>
        </div>
        <div>
          <label className="grid cursor-pointer place-items-center">
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
            />
            <svg
              className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
