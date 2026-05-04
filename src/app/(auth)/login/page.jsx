"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
    console.log(data);
  };

  const handleLogicFunc = async (data) => {
    const { data: session, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
    });

    if (!error) {
      toast.success("Logged in!");
      window.location.href = "/"; 
    } else {
      toast.error(error?.message || "Login failed!");
    }
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center bg-white px-4 mt-2">
      <div className="w-full max-w-sm p-6 rounded-xl bg-blue-50 shadow-md">
        <h2 className="text-center text-2xl font-bold mb-4">
          Login your account
        </h2>

        <div className="divider my-2"></div>

        <form className="space-y-3" onSubmit={handleSubmit(handleLogicFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.message}
              </p>
            )}
          </fieldset>

          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>

            <input
              type={showPassword ? "text" : "password"}
              className="input input-bordered w-full pr-10"
              placeholder="Enter password"
              {...register("password", { required: "Password is required" })}
            />

            <span
              className="absolute right-2 top-4 cursor-pointer text-lg"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>

            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
          </fieldset>

          <button className="btn w-full bg-blue-500 text-white hover:bg-blue-600 transition">
            Login
          </button>

          <div className="divider my-3">OR</div>

          <button
            type="button"
            className="btn w-full bg-white border flex items-center justify-center gap-2 hover:bg-gray-100 transition"
            onClick={handleGoogleSignin}
          >
            <FcGoogle className="w-5 h-5" />
            Continue with Google
          </button>
        </form>

        <div className="divider my-3"></div>

        <p className="text-center text-sm">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-500 font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;