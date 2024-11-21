import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Initialize Toast
// toast.configure();

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, photoURL, password } = formData;

    // Basic validation
    if (!name || !email || !photoURL || !password) {
      setError("All fields are required!");
      toast.error("Please fill all fields!");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address!");
      toast.error("Invalid email address!");
      return;
    }

    // Password validation (min 6 characters)
    if (password.length < 6) {
      setError("Password must be at least 6 characters long!");
      toast.error("Password must be at least 6 characters long!");
      return;
    }

    setError(""); // Clear error message

    try {
      // Simulate API call to register the user
      const response = await fetch("https://example.com/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, photoURL, password }),
      });

      if (!response.ok) {
        throw new Error("Registration failed! Please try again.");
      }

      // Registration successful
      toast.success("Registration successful!");
      navigate("/"); // Redirect to Home page
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 border rounded-lg shadow-lg bg-white">
      <h1 className="text-2xl font-bold text-center mb-6">User Registration</h1>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        {/* Photo URL */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Photo URL</label>
          <input
            type="text"
            name="photoURL"
            value={formData.photoURL}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            placeholder="Enter photo URL"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            placeholder="Enter your password"
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
