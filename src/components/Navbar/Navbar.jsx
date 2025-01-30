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
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-accent font-bold" : "")}>
          <IoHomeOutline /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/brands" className={({ isActive }) => (isActive ? "text-accent font-bold" : "")}>
          <TbBrandSafari /> Brands
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/userprofile" className={({ isActive }) => (isActive ? "text-accent font-bold" : "")}>
              <FaUser /> My Profile
            </NavLink>
          </li>
          <li>
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
      <div className="navbar md:w-11/12 mx-auto flex justify-between">
        <div className="navbar-start w-full md:w-1/4">
          <img className="w-14 h-14 rounded-full cursor-pointer" src={logo} alt="Logo" onClick={() => navigate("/")} />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-xl font-bold">{links}</ul>
        </div>

        <div className="navbar-end relative">
          {user ? (
            <div className="relative">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <img
                  className="w-14 h-14 rounded-full border-2 border-blue-950 object-cover shadow-lg"
                  src={photo || user?.photoURL || ""}
                  alt="User"
                />
              </div>

              {dropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 text-center z-50"
                >
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
              <button onClick={() => navigate("/login")} className="btn bg-blue-950 text-white font-medium border border-blue-950">
                Login
              </button>
              <button onClick={() => navigate("/register")} className="btn bg-[#d85525] font-medium text-white border border-[#d85525]">
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