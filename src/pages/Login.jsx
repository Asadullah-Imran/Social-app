import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    //here will perform handle submit
    e.preventDefault();
    console.log("Form is submitted \nand the data is ->");
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-full max-w-md bg-cusBg p-6 rounded-lg shadow-lg">
        <div className="absolute top-0 left-0">
          <img src="../../public/bigHero.png" alt="" className="h-44" />
        </div>
        <div className="space-y-8">
          <h1 className="ml-32 mt-8 text-2xl font-semibold text-gray-800">
            Ki Obostha ?
          </h1>

          <form action="" onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-center text-xl font-medium text-gray-700">
              Welcome Back
            </h2>
            <div>
              <label
                htmlFor="email"
                className="block mt-2 text-sm font-medium text-gray-700"
              >
                Email :
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cusDOrange focus:border-cusLOrange text-sm dark:bg-gray-600 dark:text-gray-100"
                required
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="username"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mt-2 text-sm font-medium text-gray-700"
              >
                Password :
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cusDOrange focus:border-cusLOrange text-sm dark:bg-gray-600 dark:text-gray-100"
                required
                value={formData.password}
                onChange={handleInputChange}
                autoComplete="current-password"
              />
            </div>
            <p className="text-center text-cusError">Error message</p>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cusDOrange hover:bg-cusLOrange focus:outline-none focus:ring-2 focus:ring-cusLOrange focus:ring-offset-2 focus:bg-cusDOrange dark:focus:ring-offset-gray-900"
            >
              Sign In
            </button>
            <p className="text-center mt-4">
              Don&apos;t Have an Account?{" "}
              <Link to="/register" className="text-cusOrange">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
