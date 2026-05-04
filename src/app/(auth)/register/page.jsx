"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleRegister = async (data) => {
    console.log("Register Data:", data);

    const { error } = await authClient.signUp.email({
      email: data.email,
      password: data.password,
      name: data.name,
      image: data.photo,
    });

    if (error) {
      toast.error(error.message || "Register failed");
      return;
    }

    toast.success("Registration successful");
    router.push("/login");
  };

  const handleGoogleSignin = async() =>{ 
    const data = await authClient.signIn.social({
    provider: "google",
  });
console.log(data,)
  }

  return (
    <div className="min-h-[80vh] flex justify-center items-center bg-white px-4 mt-2">
      <div className="w-full max-w-sm p-6 rounded-xl bg-blue-50 shadow-md">

        <h2 className="text-center text-2xl font-bold mb-4">
          Create your account
        </h2>

        <div className="divider my-2"></div>

        <form className="space-y-3" onSubmit={handleSubmit(handleRegister)}>

        
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </fieldset>

        
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter photo URL"
              {...register("photo", { required: "Photo URL is required" })}
            />
            {errors.photo && (
              <p className="text-red-500 text-sm">{errors.photo.message}</p>
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
            Register
          </button>
        </form>

      
        <div className="divider my-3">OR</div>

    
        <button className="btn w-full bg-white border flex items-center justify-center gap-2 hover:bg-gray-100 transition" onClick={handleGoogleSignin}>
          <FcGoogle className="w-5 h-5" />
          Continue with Google
        </button>

        <p className="text-center text-sm mt-3">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 font-medium">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;