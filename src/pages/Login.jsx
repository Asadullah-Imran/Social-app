import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  return (
    <div>
      <div>
        <img src="../../public/bigHero.png" alt="" />
      </div>
      <h1>Ki Obostha ?</h1>
      <h2>Let Us Know You</h2>
      <form action="">
        <div>
          <label htmlFor="">Email :</label>
          <input type="email" required />
        </div>
        <div>
          <label htmlFor="">Password :</label>
          <input type="password" required />
        </div>
        <p>Error message</p>
        <button type="submit">Sign Up</button>
        <p>
          Don&apos;t Have an Account? <Link to="/register">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
