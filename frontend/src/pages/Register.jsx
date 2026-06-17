import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SIGNUP_USER } from '../graphql/mutations/mutations.js'
import { useMutation } from '@apollo/client/react'

const Register = () => {
  const navigate = useNavigate();
  const [createUser, { loading, error }] = useMutation(SIGNUP_USER)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      console.log("Register Data:", formData);

      // Later: call your backend register API here
      // Example:
      // const response = await fetch(`${api}/register`, {...})
      const data = await createUser({
        variables: {
          email: formData.email,
          password: formData.password,
          name: formData.name
        },
      })
      const name = data.createUser.name;
      alert(`Successfully registered the user ${name} fuckface!`)
      navigate("/");
    } catch (error) {
      console.error(`Error signing up ${error.message}`);
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
      </div>
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-400">Create Account</h1>
          <p className="mt-2 text-slate-400">
            Register to upload PDFs and view extraction history.
          </p>
          {error && (<p className="bg-red-500/20 text-red-400 p-3 rounded-md mb-4">{error.message}</p>)}
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-300">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg outline-none focus:border-blue-500 text-white"
            />
          </div>

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
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg outline-none focus:border-blue-500 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-slate-300">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
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
            {loading ? 'Register' : 'Submit'}
          </button>
        </form>

        <p className="mt-6 text-center text-slate-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:text-blue-300">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;