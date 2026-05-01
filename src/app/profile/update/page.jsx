"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


const UpdateProfilePage = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) {
      toast.error("Name is required");
      return;
    }

    if (!form.image) {
      toast.error("Image URL is required");
      return;
    }

    console.log("Updated Data:", form);

    toast.success("Profile updated successfully");

    router.push("/profile"); 
  };

  return (
    <div className="max-w-xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6">Update Profile</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-blue-50 p-6 rounded-xl">

        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="input input-bordered w-full"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Image URL</label>
          <input
            type="text"
            name="image"
            className="input input-bordered w-full"
            onChange={handleChange}
          />
        </div>

        <button className="btn w-full bg-blue-500 text-white">
          Update Information
        </button>

      </form>

    </div>
  );
};

export default UpdateProfilePage;