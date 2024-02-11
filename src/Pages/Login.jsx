import React, { useState } from "react";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons"; // Import Eye and EyeSlash icons
import "../style/Login.css";
import { toast } from "react-toastify";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(userCredential);

      const user = userCredential.user;

      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("User Successfully Logged-In..!!!");

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="loginformdiv">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Login Page</h1>
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
            type={showPassword ? 'text' : 'password'}
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

        <button className="login-button">Login</button>

        <p>
          Need to Signup? <Link to="/signup">Create Account</Link>
          <br />
          <Link className="forgot" to="/forgot">
            Forgot Password?
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
