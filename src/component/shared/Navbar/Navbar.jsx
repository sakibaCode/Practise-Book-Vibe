import { NavLink } from "react-router";

const Navbar = () => {

  const linkClass = ({ isActive }) =>
    `font-medium px-3 py-1 rounded-md transition ${
      isActive
        ? "text-green-500 border border-green-500"
        : "hover:text-green-500"
    }`;

  const links = (
    <>
      <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
      <li><NavLink to="/books" className={linkClass}>Listed Books</NavLink></li>
      <li><NavLink to="/vgsdfgh" className={linkClass}>Page to Read</NavLink></li>
    </>
  );

  return (
    <nav className="bg-base-100 shadow-sm mb-6">
      <div className="navbar max-w-6xl mx-auto px-4">

        {/* LEFT */}
        <div className="navbar-start">
          
          {/* Mobile menu */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52 space-y-1"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <a className="text-lg sm:text-xl font-bold ml-1">
            Book Vibe
          </a>
        </div>

        {/* CENTER (desktop only) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">
            {links}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-2">
          <button className="btn btn-success btn-sm sm:btn-md text-white">
            Sign In
          </button>
          <button className="btn btn-accent btn-sm sm:btn-md text-white">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;