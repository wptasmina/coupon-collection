import { useState } from "react";
import { FaGithub, FaTwitter, FaSun, FaMoon, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import profilePic from "../assets/profile.jpg"; // Add a profile picture
import { FaSquareXTwitter } from "react-icons/fa6";

const AboutPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"} min-h-screen p-6 transition-all`}>
      {/* Dark Mode Toggle */}
      <div className="flex justify-end mb-4">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full shadow-md bg-indigo-600 text-white"
        >
          {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
        </button>
      </div>

      {/* Hero Section */}
      <div className="text-center">
        <img src={profilePic} alt="Tasmina" className="w-32 h-32 object-cover mx-auto rounded-full shadow-md" />
        <h1 className="text-4xl font-extrabold mt-4">Tasmina</h1>
        <p className="text-lg text-indigo-600 font-semibold">Software Developer | Frontend Enthusiast</p>
      </div>

      {/* About Me */}
      <div className="mt-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-600">About Me</h2>
        <p className="mt-2 pl-4 leading-relaxed">
          I’m a passionate software developer who loves building impactful web and mobile applications.
          I specialize in **React, Tailwind CSS, and Node.js, Express.js**, and I'm always eager to learn new technologies.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-600">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          {["JavaScript", "React", "Tailwind CSS", "Node.js", "MongoDB", "Git & GitHub"].map((skill, index) => (
            <div key={index} className="bg-white p-3 shadow-md rounded-lg text-center text-indigo-600 font-semibold">
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="mt-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-600">Projects</h2>
        <ul className="mt-4 space-y-3">
          <li className="bg-white p-4 shadow-md rounded-lg">📌 Task Tracker Web App</li>
          <li className="bg-white p-4 shadow-md rounded-lg">📌 E-commerce Platform</li>
          <li className="bg-white p-4 shadow-md rounded-lg">📌 Fitness Tracker Mobile App</li>
        </ul>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-6 mt-8">
        <Link to="https://github.com/wptasmina" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl text-gray-500 hover:text-blue-600 transition-all" />
        </Link>
        <Link to="https://twitter.com/wptasmina" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter className="text-3xl text-gray-500 hover:text-blue-600 transition-all" />
        </Link>
        <Link to="https://facebook.com/wptasmina" target="_blank" rel="noopener noreferrer">
        <FaFacebook  className="text-3xl text-gray-500 hover:text-blue-600 transition-all" />
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
