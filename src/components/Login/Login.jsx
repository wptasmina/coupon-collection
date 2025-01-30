import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const { signInWithGoogle, logInWithEmail } = useContext(AuthContext);
  const emailRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    logInWithEmail(email, password)
    .then(() => {
      navigate("/"); // Navigate to home after successful login
      toast.success('Login is successfully!')
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
      });

  };

  const handleForgetRoute = () => {
    const email = emailRef.current?.value || "";
    navigate("/forgetPassword", { state: { email } });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleGooglePopUp = () => {
    signInWithGoogle()
      .then(() => {
        navigate("/"); // Navigate to home after successful Google login
        toast.success('Google Login is successfully!')
      })
      .catch((error) => {
        console.error("Google login failed:", error.message);
      });
  };

  return (
    <div className="flex justify-center items-center my-10 mx-5">
      <div className="card bg-base-100 w-full md:w-3/4 lg:w-3/6 px-2 shrink-0 shadow-xl">

        <h2 className="text-4xl my-10 font-bold text-center mb-6 text-blue-950">Login Now!</h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label text-blue-950 font-semibold">
              <span className="label-text text-lg">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered outline-none focus:outline-none"
              required
              name="email"
              ref={emailRef}
            />
          </div>

          <div className="form-control">
            <label className="label text-blue-950 font-semibold">
              <span className="label-text text-lg">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input w-full input-bordered outline-none focus:outline-none pr-10"
                required
                name="password"
              />
              <span
                className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash className="text-lg" /> : <FaEye className="text-lg" />}
              </span>
            </div>
            <label className="label">
              <Link
                onClick={handleForgetRoute}
                className="label-text-alt link link-hover text-blue-950 font-semibold text-lg"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-blue-950 text-white text-lg hover:bg-blue-900">Login</button>

          </div>
          <button
            type="button"
            onClick={handleGooglePopUp}
            className="btn flex font-bold text-gray-600 items-center border border-blue-200 mt-3"
          >
            <FaGoogle className="text-blue-900 text-xl" /> Login With Google
          </button>
          <ToastContainer />
        </form>
        <div className="flex justify-center items-center mb-4">
          <p className="my-5 font-bold text-gray-600">
            Don't have an account? <Link className="text-blue-950 link-hover" to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;