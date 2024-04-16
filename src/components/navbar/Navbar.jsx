import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { user, signOutproile, loading } = useContext(AuthContext);
  console.log(user);

  const handleSignOut = () => {
    // if (!error) {
    //   toast.success("User logOut Sucessfully");

    // }
    signOutproile();
  };

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

    {
      user?  <li>
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
    </li>:<div></div>
    }
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border border-green-500 p-2 rounded-md hover:bg-green-400 hover:text-black"
              : "text-center font-normal gap-6 text-[18px]"
          }
          to={"/update"}
        >
          Update Profile
        </NavLink>
      </li>
      {user ? (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border border-green-500 p-2 rounded-md hover:bg-green-400 hover:text-black"
                : "text-center font-normal gap-6 text-[18px]"
            }
            to={"/profile"}
          >
            User Profile
          </NavLink>
        </li>
      ) : (
        <div></div>
      )}
    </>
  );
  return loading ? (
    <div className="flex justify-center items-center">
      <span className="loading loading-infinity loading-lg"></span>
    </div>
  ) : (
    <div className="navbar bg-base-100 ">
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
            className="menu menu-sm dropdown-content mt-3  z-[100] p-5 space-y-4 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
            {user ? (
              <div className="md:flex  ">
                <Link>
                  {" "}
                  <button
                    onClick={handleSignOut}
                    className="btn mr-3 bg-green-400 text-white hover:outline-1 "
                  >
                    LogOut
                  </button>
                </Link>
              </div>
            ) : (
              <div className="md:flex  ">
                <Link to={"/login"}>
                  {" "}
                  <button className="btn  bg-green-400 text-white hover:outline-1 ">
                    Login
                  </button>
                </Link>
              </div>
            )}
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
        {user ? (
          <div className="flex justify-center items-center gap-2">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar tooltip tooltip-left"
              data-tip={user?.displayName || "User Name"}
            >
              <div className="w-12 rounded-full ">
                <img
                  className="w-full"
                  alt="user"
                  src={
                    user?.photoURL ||<p>user</p>
                  }
                />
              </div>
            </div>
            <div className="md:flex ">
              <Link>
                {" "}
                <button
                  onClick={handleSignOut}
                  className="btn mr-3 bg-green-400 text-white hover:outline-1 "
                >
                  LogOut
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="md:flex  ">
            <Link to={"/login"}>
              {" "}
              <button className="btn mr-3 bg-green-400 text-white hover:outline-1 ">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
