import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../graphql/mutations/mutations.js";
import {  useMutation } from '@apollo/client/react'
const Login = () => {
  const navigate = useNavigate();
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    try {
      
      e.preventDefault();
  
      console.log("Login Data:", formData);
  
      // backend login API here
      const data=await loginUser({
        variables: {
            email: formData.email,
            password: formData.password,
          },
      })
       const token = data.loginUser.token;
      const user = data.loginUser.user;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/upload");
    } catch (error) {
      console.error(`Error logging in ${error.message}`);
      
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6">
      <div className="pt-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition"
        >
          <span className="text-2xl">←</span>

        </Link>
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-blue-400">Welcome Back</h1>
            <p className="mt-2 text-slate-400">
              Login to continue extracting text from PDFs.
            </p>
                      {error &&(<p className="bg-red-500/20 text-red-400 p-3 rounded-md mb-4">{error.message}</p>)}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-300">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg outline-none focus:border-blue-500 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-slate-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg outline-none focus:border-blue-500 text-white"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 font-semibold bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            {loading?'Login':'Submit'}
          </button>
       
        </form>

        <p className="mt-6 text-center text-slate-400">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-blue-400 hover:text-blue-300">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;