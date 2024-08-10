import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    //here will perform handle submit
    e.preventDefault();
    console.log("Form is submitted \nand the data is ->");
    console.log(formData);

    navigate("/verify");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-full max-w-md bg-cusBg p-6 rounded-lg shadow-lg">
        <div className="absolute top-0 left-0">
          <img src="/bigHero.png" alt="" className="h-44" />
        </div>
        <div className="space-y-8">
          <h1 className="ml-32 mt-8 text-2xl font-semibold text-gray-800">
            Ki Obostha?
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-center text-xl font-medium text-gray-700">
              Let Us Know You
            </h2>

            <div>
              <label
                htmlFor="name"
                className="block mt-2 text-sm font-medium text-gray-700"
              >
                Full Name:
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cusDOrange focus:border-cusLOrange text-sm dark:bg-gray-600 dark:text-gray-100"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mt-2 text-sm font-medium text-gray-700"
              >
                Email:
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cusDOrange focus:border-cusLOrange text-sm dark:bg-gray-600 dark:text-gray-100"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mt-2 text-sm font-medium text-gray-700"
              >
                Password:
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cusDOrange focus:border-cusLOrange text-sm dark:bg-gray-600 dark:text-gray-100"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
            </div>

            <p className="text-center text-cusError">Error message</p>

            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cusDOrange hover:bg-cusLOrange focus:outline-none focus:ring-2 focus:ring-cusLOrange focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              Sign Up
            </button>

            <p className="text-center text-sm text-gray-700">
              Already Have an Account?{" "}
              <Link to="/" className="text-cusOrange hover:underline">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
