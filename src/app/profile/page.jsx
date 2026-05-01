"use client";

import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  
  const user = {
    name: "John Doe",
    email: "john@gmail.com",
    image: "https://i.ibb.co/placeholder.jpg",
  };

  return (
    <div className="max-w-3xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6">My Profile</h1>

      <div className="bg-blue-50 p-6 rounded-xl shadow-md flex gap-6 items-center">

        <Image
          src={user.image}
          alt="user"
          width={100}
          height={100}
          className="rounded-full"
        />

        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>

          <Link href="/profile/update">
            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">
              Update Profile
            </button>
          </Link>
        </div>

      </div>

    </div>
  );
};

export default ProfilePage;