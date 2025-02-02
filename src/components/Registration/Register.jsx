import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const Register = () => {
  const { signUpWithEmail } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;
    const numberPattern = /\d/;
    const specialCharPattern = /[!@#$%^&*]/;
    const minLengthPattern = /.{6,}/;

    if (!uppercasePattern.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!lowercasePattern.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!numberPattern.test(password)) {
      return "Password must contain at least one number.";
    }
    if (!specialCharPattern.test(password)) {
      return "Password must contain at least one special character (!@#$%^&*).";
    }
    if (!minLengthPattern.test(password)) {
      return "Password must be at least 6 characters long.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photoURL = form.get("photoURL");
    const email = form.get("email");
    const password = form.get("password");

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    setError("");

    try {
      await signUpWithEmail(email, password, photoURL, name);
      toast.success("SignUp successful! Redirecting to login...");
      e.target.reset();
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setError(error.message.replace("Firebase:", "").trim());
    }
  };

  return (
    <div className="flex justify-center items-center my-10 mx-5">
      <div className="card bg-base-100 w-full md:w-3/4 lg:w-3/6 shrink-0 shadow-xl">
        <h2 className="text-4xl my-10 font-bold text-center mb-2 text-blue-950">
          Register Now!
        </h2>
        <form onSubmit={handleSubmit} className="card-body pt-10 pb-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg text-blue-950 font-medium">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered outline-none focus:outline-none"
              required
              name="name"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg text-blue-950 font-medium">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered outline-none focus:outline-none"
              required
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg text-blue-950 font-medium">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered outline-none focus:outline-none"
              required
              name="photoURL"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg text-blue-950 font-medium">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input w-full input-bordered pr-10 outline-none focus:outline-none"
                required
                name="password"
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash className="text-lg" /> : <FaEye className="text-lg" />}
              </span>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn text-lg bg-blue-950 font-medium text-white hover:bg-blue-900">
              Register
            </button>
          </div>
          <ToastContainer />
        </form>
        <div className="flex flex-col px-2 justify-center items-center">
          {error && <p className="text-red-600 font-bold text-center">{error}</p>}
          <p className="mb-8 mt-3 font-bold text-gray-600">
            Already have an account?
            <Link className="text-blue-950 link-hover" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
