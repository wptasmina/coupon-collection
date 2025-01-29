import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const UserProfile = () => {
  const { user, photo, name, loading, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [updateName, setUpdateName] = useState(name);
  const [updatePhoto, setUpdatePhoto] = useState(photo);
  useEffect(() => {
    setUpdateName(name);
  }, [name]);
  useEffect(() => {
    setUpdatePhoto(photo);
  }, [photo]);
  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }
  const handleUpdateRoute = () => {
    navigate("/updateProfile");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-11/12 mx-auto h-64 bg-blue-500 flex items-center justify-center text-white">
        <h1 className="text-xl md:text-4xl font-bold">
          Welcome, {updateName || user?.displayName || "User"}!
        </h1>
      </div>

      <div className="mt-8 bg-white shadow-lg rounded-lg w-11/12 mx-auto  md:w-1/2 py-2 ">
        <div className="flex items-center flex-col space-x-6">
          <img
            src={
              updatePhoto ||
              user?.photoURL ||
              photo ||
              "https://via.placeholder.com/150"
            }
            alt="User Avatar"
            className="w-32 h-32 rounded-full shadow-md"
          />
          <div>
            <h2 className="text-2xl text-center my-2 font-bold">
              {user?.displayName}
            </h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold">Update Your Profile</h3>
          <button
            onClick={handleUpdateRoute}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 my-5"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
