import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { baseURL } from "../Axios/axios";

const Register = () => {
  const { setMessage } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginBody = { email, password };

    axios
      .post(`${baseURL}/user/login`, loginBody, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.user) {
          localStorage.setItem("loginUser", JSON.stringify(res.data.user));
          navigate("/");
          window.location.reload();
        }
      })
      .catch((error) => {
        setMessage(error.response.data);
      });
  };

  return (
    <div className="w-[400px] mx-auto mt-16">
      <h2 className="text-xl mb-5">Account Login</h2>

      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full border border-gray-400 p-2 mb-2 rounded-md placeholder:text-sm placeholder:font-medium outline-[1px] outline-secondary-color"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="on"
          />
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full border border-gray-400 p-2 mb-2 rounded-md placeholder:text-sm placeholder:font-medium outline-[1px] outline-secondary-color"
            placeholder="Enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-secondary-color text-white rounded-md w-full text-center p-[10px] my-5 font-medium">
            Login
          </button>
        </form>

        <span className="text-center text-[15px] font-medium block">
          Don't have an account?
        </span>
        <Link
          to={"/register"}
          className="border border-secondary-color hover:bg-secondary-color text-black hover:text-white block p-[10px] text-center rounded-md mt-5 font-medium"
        >
          Create your Account
        </Link>
      </div>
    </div>
  );
};

export default Register;
