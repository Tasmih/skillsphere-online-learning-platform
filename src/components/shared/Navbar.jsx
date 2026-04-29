"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        
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
          <li>
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/courses" className="hover:text-blue-600 transition">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-blue-600 transition">
              My Profile
            </Link>
          </li>
        </ul>

        
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm border px-4 py-1.5 rounded-md hover:bg-gray-100 transition"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="text-sm bg-orange-500 text-white px-4 py-1.5 rounded-md hover:bg-orange-600 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* for mobile  */}
        <button className="md:hidden">
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

      </nav>
    </header>
  );
};

export default Navbar;