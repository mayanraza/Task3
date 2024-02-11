import React, { useState } from "react";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons"; // Import Eye and EyeSlash icons
import "../style/Signup.css";
import { toast } from "react-toastify";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(userCredential);

      const user = userCredential.user;

      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Account created Successfully..!!!");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="signupformdiv">
      <form onSubmit={handleSubmit} className="signup-form">
        <h1>SignUp Page</h1>
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="">Password</label>
        <div className="password-input">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <EyeSlashFill className="eye" onClick={togglePasswordVisibility} />
          ) : (
            <EyeFill className="eye" onClick={togglePasswordVisibility} />
          )}
        </div>

        <button className="signup-button">SignUp</button>

        <p>
          Need to Login? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
