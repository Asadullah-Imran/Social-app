import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="relative w-full  max-w-md bg-cusBg p-6 rounded-lg shadow-lg">
        <div className="absolute  top-0 left-0">
          <img src="../../public/bigHero.png" alt="" className="h-44" />
        </div>
        <div className=" space-y-16">
          <h1 className="ml-32 mt-8">Ki Obostha ?</h1>

          <form action="">
            <h2 className="text-center">Let Us Know You</h2>
            <div>
              <label
                htmlFor=""
                className="block mt-2 text-sm font-medium text-gray-700"
              >
                Full Name :
              </label>
              <input
                className="w-full mt-1 px-4 py-2 border border-transparent drop-shadow-md rounded-md focus:outline-none focus:ring-cusDOrange focus:border-cusLOrange text-sm dark:bg-gray-600 dark:text-gray-100"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor=""
                className="block mt-2 text-sm font-medium text-gray-700"
              >
                Email :
              </label>
              <input
                className="w-full mt-1 px-4 py-2 border border-transparent drop-shadow-md rounded-md focus:outline-none focus:ring-cusDOrange focus:border-cusLOrange text-sm dark:bg-gray-600 dark:text-gray-100"
                type="email"
                required
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block mt-2 text-sm font-medium text-gray-700"
              >
                Password :
              </label>
              <input
                className="w-full mt-1 px-4 py-2 border border-transparent drop-shadow-md rounded-md focus:outline-none focus:ring-cusDOrange focus:border-cusLOrange text-sm dark:bg-gray-600 dark:text-gray-100"
                type="password"
                required
              />
            </div>
            <p className="text-center">Error message</p>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cusDOrange hover:bg-cusLOrange focus:outline-none focus:ring-2 focus:ring-cusLOrange focus:ring-offset-2  focus:bg-cusDOrange dark:focus:ring-offset-gray-900  "
            >
              Sign Up
            </button>
            <p className="text-center">
              Already Have an Account? <Link to="/login">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
