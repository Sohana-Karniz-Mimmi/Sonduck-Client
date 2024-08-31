
import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import duckImg from "../../../public/NavImages/pinkDuck.png";

const Navbar = () => {
  const navLinks = (
    <>
      <Typography className="p-1 font-normal gro">
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "font-semibold underline transition-all ease-in-out duration-300 text-[#F06292]"
                : "hover:bg-transparent"
            }
          >
            HOME
          </NavLink>
      </Typography>

      <Typography className="p-1 font-normal gro">
          <NavLink
            to={"/store"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "font-semibold underline transition-all ease-in-out duration-300 text-[#F06292]"
                : "hover:bg-transparent"
            }
          >
            STORE
          </NavLink>
      </Typography>

      <Typography className="p-1 font-normal gro">
          <NavLink
            to={"/blogs"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "font-semibold underline transition-all ease-in-out duration-300 text-[#F06292]"
                : "hover:bg-transparent"
            }
          >
            TUTORIALS
          </NavLink>
      </Typography>

      <Typography className="p-1 font-normal gro">
          <NavLink
            to={"/faqs"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "font-semibold underline transition-all ease-in-out duration-300 text-[#F06292]"
                : "hover:bg-transparent"
            }
          >
            FAQs
          </NavLink>
      </Typography>

      {/* <Typography className="p-1 font-normal gro">
          <NavLink
            to={"/subscription"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "font-semibold underline transition-all ease-in-out duration-300 text-[#F06292]"
                : "hover:bg-transparent"
            }
          >
            SUBSCRIPTION
          </NavLink>
      </Typography> */}
    </>
  );
  return (
    <div>
      <div className="navbar bg-black">
        <div className="navbar-start">
          <div className="dropdown">
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
              className="menu menu-sm dropdown-content bg-orange-500 rounded-box z-[10] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a href="#">
            <img className="" src={duckImg} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{navLinks}</ul>
        </div>
        <div className="navbar-end flex items-center gap-3">
          <a className="btn btn-outline gro text-white hover:border-white hover:bg-transparent">Log In</a>
          <a className="btn gro">JOIN US</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
