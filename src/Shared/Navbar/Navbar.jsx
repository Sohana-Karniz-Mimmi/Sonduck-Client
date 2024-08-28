import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navlinks = <>
    <NavLink>Home</NavLink>
    <NavLink>Store</NavLink>
    <NavLink to="/faqs">Faqs</NavLink>
    </>
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navlinks}
            </ul>
          </div>
          <Link to="/" className="uppercase"><span className="text-white">Sonduck</span><span className="text-primary">film</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
