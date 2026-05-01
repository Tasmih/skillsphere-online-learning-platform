"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      if (validate()) {
    console.log("Login Data:", formData);
    toast.success("Login successful");
  } else {
    toast.error("Please fill all fields");
  }
};

  return (
    <div className="min-h-[80vh] flex justify-center items-center bg-white px-4">

      <div className="w-full max-w-sm p-6 rounded-xl bg-blue-50 shadow-md">

        <h2 className="text-center text-2xl font-bold mb-4">
          Login your account
        </h2>

        <div className="divider my-2"></div>

        <form className="space-y-3" onSubmit={handleSubmit}>

          {/* Email */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </fieldset>

          
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="input input-bordered w-full pr-10"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />

            
            <span
              className="absolute right-2 top-4 cursor-pointer text-lg"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>

            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </fieldset>

          <button className="btn w-full bg-blue-500 text-white hover:bg-blue-600 transition">
            Login
          </button>

        </form>

        <div className="divider my-3"></div>

        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <Link href="/register" className="text-blue-500 font-medium">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;