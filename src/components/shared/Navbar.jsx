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
            src="/assets/logo3.png"
            alt="SkillSphere logo"
            width={70}
            height={70}
            priority
          />

          <h3 className="text-xl font-bold">
            <span className="text-blue-800">Skill</span>
            <span className="text-blue-500">Sphere</span>
          </h3>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/all-courses" className="hover:text-blue-600 transition">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-blue-600 transition">
              My Profile
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">

          <Link
            href="/login"
            className="text-sm text-white bg-blue-800 px-4 py-1.5 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="text-sm text-white bg-blue-500 px-4 py-1.5 rounded-md hover:bg-blue-400 transition"
          >
            Register
          </Link>

        </div>

        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu className="w-6 h-6 text-gray-800" />
        </button>

      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 border-t">

          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href="/all-courses" onClick={() => setOpen(false)}>
            Courses
          </Link>

          <Link href="/profile" onClick={() => setOpen(false)}>
            My Profile
          </Link>

          <hr />

          <Link
            href="/login"
            className="border px-3 py-1 rounded"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>

          <Link
            href="/register"
            className="bg-blue-500 text-white px-3 py-1 rounded"
            onClick={() => setOpen(false)}
          >
            Register
          </Link>

        </div>
      )}

    </div>
  );
};

export default Navbar;