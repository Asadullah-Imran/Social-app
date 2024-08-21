import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyCode = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]); //to store references to input fields.
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const { value } = e.target;
    const newOtp = [...otp];
    // console.log("newOtp=> ", newOtp);
    newOtp[index] = value.slice(-1); // Ensure only one digit is added
    // console.log("Newotp slice value ->", newOtp[index]);
    setOtp(newOtp);
    // console.log("otp set is ->", newOtp);

    // Move focus to the next input if the current one has a value

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(otp);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-full max-w-md m-1 p-6 bg-white rounded-lg shadow-lg">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 text-cusDOrange font-semibold"
        >
          Back
        </button>
        <form action="" onSubmit={handleSubmit}>
          <h1
            className="text-center text-2xl font-bold mb-4"
            style={{ fontSize: "36px" }}
          >
            Verify Code
          </h1>
          <p
            className="text-center text-gray-600 mb-1"
            style={{ fontSize: "14px" }}
          >
            Please enter the code we just sent to email:
          </p>
          <p
            className="text-center text-gray-600 mb-6"
            style={{ fontSize: "14px" }}
          >
            user@email.com
          </p>

          <div className="grid grid-cols-4 gap-6 justify-items-center mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cusLOrange"
                style={{ fontSize: "18px" }}
                ref={(el) => (inputRefs.current[index] = el)}
              />
            ))}
          </div>

          <p className="text-center text-gray-600" style={{ fontSize: "14px" }}>
            Didn’t receive the OTP?
            <a href="#" className="text-cusOrange ml-1">
              Resend Code
            </a>
          </p>

          <button
            type="submit"
            className="w-full py-2 mt-6 text-white bg-cusDOrange rounded-lg shadow-lg font-semibold hover:bg-cusLOrange focus:outline-none"
            style={{ fontSize: "18px" }}
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyCode;
