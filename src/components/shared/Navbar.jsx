"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

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
            className="logo-animate logo-hover"
          />

          <h3 className="text-xl font-bold">
            <span className="text-blue-800">Skill</span>
            <span className="text-blue-500">Sphere</span>
          </h3>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li>
            <Link
              href="/"
              className={`transition ${
                isActive("/")
                  ? "text-blue-600 underline underline-offset-4"
                  : "hover:text-blue-600"
              }`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/all-courses"
              className={`transition ${
                isActive("/all-courses")
                  ? "text-blue-600 underline underline-offset-4"
                  : "hover:text-blue-600"
              }`}
            >
              Courses
            </Link>
          </li>

          <li>
            <Link
              href="/profile"
              className={`transition ${
                isActive("/profile")
                  ? "text-blue-600 underline underline-offset-4"
                  : "hover:text-blue-600"
              }`}
            >
              My Profile
            </Link>
          </li>
        </ul>

        {/*desktop btn */}
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

        {/* mob btn */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu className="w-6 h-6 text-gray-800" />
        </button>
      </nav>

      {/* mob menu*/}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 border-t">

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={isActive("/") ? "text-blue-600 underline" : ""}
          >
            Home
          </Link>

          <Link
            href="/all-courses"
            onClick={() => setOpen(false)}
            className={isActive("/all-courses") ? "text-blue-600 underline" : ""}
          >
            Courses
          </Link>

          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className={isActive("/profile") ? "text-blue-600 underline" : ""}
          >
            My Profile
          </Link>

          <hr />

          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="border px-3 py-1 rounded"
          >
            Login
          </Link>

          <Link
            href="/register"
            onClick={() => setOpen(false)}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Register
          </Link>

        </div>
      )}
    </div>
  );
};

export default Navbar;