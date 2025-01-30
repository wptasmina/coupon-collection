import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoHomeOutline } from "react-icons/io5";
import { TbBrandSafari } from "react-icons/tb";
import { FaUser, FaSignOutAlt, FaBookReader } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logOut, photo, name } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = async () => {
    try {
      setLoading(true);
      await logOut();
      navigate("/login");
    } catch (error) {
      console.error("Log out failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const links = (
    <>
      <li className="mr-2">
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-accent font-bold" : "")}>
          <IoHomeOutline /> Home
        </NavLink>
      </li>
      <li className="mr-2">
        <NavLink to="/brands" className={({ isActive }) => (isActive ? "text-accent font-bold" : "")}>
          <TbBrandSafari /> Brands
        </NavLink>
      </li>
      {user && (
        <>
          <li className="mr-2">
            <NavLink to="/userprofile" className={({ isActive }) => (isActive ? "text-accent font-bold" : "")}>
              <FaUser /> My Profile
            </NavLink>
          </li>
          <li className="mr-2">
            <NavLink to="/coponpage" className={({ isActive }) => (isActive ? "text-accent font-bold" : "")}>
              <CiCreditCard1 /> Coupons
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "text-accent font-bold" : "")}>
          <FaBookReader /> About
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-[#b0d0fd] sticky top-0 backdrop-blur-lg z-50">
      <div className="navbar md:w-11/12 mx-auto flex justify-between items-center">
        {/* Logo and Toggle Button */}
        <div className="navbar-start flex items-center">
          <img
            className="w-14 h-14 rounded-full cursor-pointer"
            src={logo}
            alt="Logo"
            onClick={() => navigate("/")}
          />
          <button
            className="md:hidden ml-auto btn btn-ghost text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Desktop Menu */}
        <div className={`navbar-center hidden md:flex`}>
          <ul className="menu menu-horizontal text-xl font-bold">{links}</ul>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#b0d0fd] shadow-lg md:hidden">
            <ul className="menu menu-vertical text-lg p-4">{links}</ul>
          </div>
        )}

        {/* User/Buttons */}
        <div className="navbar-end relative">
          {user ? (
            <div className="relative">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <img
                  className="w-12 h-12 rounded-full border-2 border-blue-950 object-cover shadow-lg"
                  src={photo || user?.photoURL || ""}
                  alt="User"
                />
              </div>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 text-center z-50">
                  <p className="text-gray-700 font-semibold mb-2">
                    {name || user?.displayName || "User"}
                  </p>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-sm btn-outline btn-accent text-blue-950 w-full flex items-center justify-center gap-2"
                    disabled={loading}
                  >
                    {loading ? "Logging out..." : <FaSignOutAlt />} Log Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-4">
              <button
                onClick={() => navigate("/login")}
                className="btn bg-blue-950 text-white font-medium border border-blue-950"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="btn bg-[#d85525] font-medium text-white border border-[#d85525]"
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
