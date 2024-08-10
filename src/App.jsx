import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyCode from "./pages/VerifyCode";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />, // Show Login page without Layout
  },
  {
    path: "/register",
    element: <Register />, // Show Register page without Layout
  },
  {
    path: "/verify",
    element: <VerifyCode />, // Verify Code page with Layout
  },
  {
    path: "/",
    element: <Layout />, // Layout for nested routes
    children: [
      {
        path: "/home",
        element: <Home />, // Home page with Layout
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
