import { NavLink } from 'react-router-dom';
import '../Navbar/Navbar.css'
import logo from '../../assets/logo.png'
// import { FaRegCircleUser } from 'react-icons/fa6';

export default function Navbar() {
  const link = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/brands">Brands</NavLink>
      <NavLink to="/profile">My-profile</NavLink>
      <NavLink to="/about">About Us</NavLink>
    </>
  );
  return (
    <header className="bg-blue-950">
      <div className="navbar px-0 w-11/12 mx-auto">
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
              className="gap-4 menu menu-sm dropdown-content bg-blue-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <img className="md:w-20 w-16 cursor-pointer" src={logo} alt="Logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-4 text-blue-100 menu menu-horizontal px-1  text-xl font-semibold">
            {link}
          </ul>
        </div>
        <div className="navbar-end">
          {/* <FaRegCircleUser className="text-blue-200 text-3xl" /> */}
          <button className="px-4 md:py-2 py-1 bg-[#218ec4] text-white md:text-xl text-md cursor-pointer font-medium rounded-md ">
            Logo
          </button>
          <button className="ml-4 px-4 md:py-2 py-1 bg-[#218ec4] text-white md:text-xl text-md cursor-pointer font-medium rounded-md ">
           Registration
          </button>
        </div>
      </div>
    </header>
  );
}
