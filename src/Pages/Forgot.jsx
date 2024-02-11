import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../style/Forgot.css";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

const Forgot = () => {
  const [email, setEmail] = useState();
  const navigate=useNavigate()

  const handleForgot = (e) => {
    e.preventDefault();

    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Reset Password Link Successfully Send..!!!");
        navigate("/login")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="forgotformdiv">
      <form className="forgot-form">
        <h1>Forgot Password</h1>
        <label htmlFor="">Password</label>
        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="forgot-button" onClick={handleForgot}>
          {" "}
          Reset My Password
        </button>
      </form>
    </div>
  );
};

export default Forgot;
