import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import { baseURL } from "../Axios/axios";

const Login = () => {
  const { setMessage } = useAuth();
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      axios
        .post(`${baseURL}/user/register`, {
          fullName: fullName,
          username: username,
          email: email,
          password: password,
          mobile: number,
        })
        .then((response) => {
          if (response.data) {
            navigate("/login");
          }
        })
        .catch((error) => {
          setMessage(error.response.data);
        });
    } else {
      setMessage("registration failed!");
    }
  };

  return (
    <div className="w-full h-screen bg-section-color pt-16">
      <div className="bg-white p-2 w-[400px] mx-auto rounded-md">
        <h2 className="text-xl mb-5">Register Account</h2>

        <div>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="fullname"
              className="block text-sm font-medium mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-400 p-[6px] mb-2 rounded-md placeholder:text-sm placeholder:font-medium outline-[1px] outline-secondary-color"
              placeholder="Enter your Full Name..."
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <label
              htmlFor="username"
              className="block text-sm font-medium mb-1"
            >
              Username
            </label>
            <input
              type="text"
              className="w-full border border-gray-400 p-[6px] mb-2 rounded-md placeholder:text-sm placeholder:font-medium outline-[1px] outline-secondary-color"
              placeholder="Enter your username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-400 p-[6px] mb-2 rounded-md placeholder:text-sm placeholder:font-medium outline-[1px] outline-secondary-color"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-400 p-[6px] mb-2 rounded-md placeholder:text-sm placeholder:font-medium outline-[1px] outline-secondary-color"
              placeholder="Enter your password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label
              htmlFor="confirmpassword"
              className="block text-sm font-medium mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-400 p-[6px] mb-2 rounded-md placeholder:text-sm placeholder:font-medium outline-[1px] outline-secondary-color"
              placeholder="Enter your confirm password..."
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label
              htmlFor="phonenumber"
              className="block text-sm font-medium mb-1"
            >
              Phone Number
            </label>
            <input
              type="number"
              className="w-full border border-gray-400 p-[6px] mb-2 rounded-md placeholder:text-sm placeholder:font-medium outline-[1px] outline-secondary-color"
              placeholder="Enter your phone number..."
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />

            <button className="bg-secondary-color text-white rounded-md w-full text-center p-[10px] my-5">
              Submit
            </button>
          </form>

          <div className="text-center text-[15px] font-medium">
            Already you have an Account? You can login in the <br />
            <Link to={"/login"} className="text-red-600 font-semibold">
              Login page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
