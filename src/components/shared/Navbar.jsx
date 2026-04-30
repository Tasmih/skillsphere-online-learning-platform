"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b bg-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            alt="SkillSphere logo"
            width={50}
            height={50}
            priority
          />
          <h3 className="text-xl font-bold">
            <span className="text-blue-600">Skill</span>
            <span className="text-orange-500">Sphere</span>
          </h3>
        </div>


        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/all-courses"}>Courses</Link></li>
          <li><Link href={"/profile"}>My Profile</Link></li>
        </ul>

        
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm border px-4 py-1.5 rounded-md hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="text-sm bg-orange-500 text-white px-4 py-1.5 rounded-md hover:bg-orange-600"
          >
            Register
          </Link>
        </div>

        {/* mobile  btn */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href={"/all-courses"} onClick={() => setOpen(false)}>Courses</Link>
          <Link href={"/profile"} onClick={() => setOpen(false)}>My Profile</Link>

          <Link href={"/login"} className="border px-3 py-1 rounded">
            Login
          </Link>

          <Link
            href={"/register"}
            className="bg-orange-500 text-white px-3 py-1 rounded"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;