import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
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
          <label htmlFor="">Full Name :</label>
          <input type="text" required />
        </div>
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
          Already Have an Account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
