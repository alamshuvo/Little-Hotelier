import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border border-green-500 p-2 hover:bg-green-400 hover:text-black rounded-md "
              : "text-center font-normal gap-6 text-[18px]"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border border-green-500 p-2 rounded-md hover:bg-green-400 hover:text-black"
              : "text-center font-normal gap-6 text-[18px]"
          }
          to={"/about"}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border border-green-500 p-2 rounded-md hover:bg-green-400 hover:text-black"
              : "text-center font-normal gap-6 text-[18px]"
          }
          to={"/contact"}
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3  z-[1] p-5 space-y-4 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
            <div className="flex  ">
              <Link to={"/login"}>
                {" "}
                <button className="btn mr-3 bg-green-400 text-white hover:outline-1 ">
                  Login
                </button>
              </Link>
              <Link to={"/register"}>
                <button className="btn hover:bg-blue-300 hover:text-white">
                  Register
                </button>
              </Link>
            </div>
          </ul>
        </div>
        <Link to={"/"}>
          {" "}
          <button className="btn  btn-ghost md:text-xl flex ">
            Little
            <span className="text-green-500 font-black md:text-3xl">
              Hotelier
            </span>
          </button>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex items-center justify-center">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="md:flex  navbar-end">
        <div className="md:flex hidden ">
          <Link to={"/login"}>
            {" "}
            <button className="btn mr-3 bg-green-400 text-white hover:outline-1 ">
              Login
            </button>
          </Link>
          <Link to={"/register"}>
            <button className="btn hover:bg-blue-300 hover:text-white">
              Register
            </button>
          </Link>
        </div>
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;