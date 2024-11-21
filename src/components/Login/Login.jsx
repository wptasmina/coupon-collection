
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Example: Simulating login logic
    if (email === "test@example.com" && password === "password123") {
      console.log("User logged in successfully!");
      navigate("/home"); // Navigate to the desired route
    } else {
      setError("Invalid email or password");
    }
  };

  const handleGoogleLogin = () => {
    // Simulate Google authentication
    console.log("User authenticated with Google");
    navigate("/home"); // Navigate to the desired route
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4">
            <Link to="/forget-password" className="text-blue-500 text-sm">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="text-center my-4">
          <span className="text-gray-600">Don't have an account? </span>
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </div>
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mt-4"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
