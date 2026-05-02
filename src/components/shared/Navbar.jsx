"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, User } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useSession, authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const { data: session, isLoading } = useSession();

  const isActive = (path) => pathname === path;

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      setOpen(false);
      toast.success("Logged out successfully");
    } catch (err) {
      console.log(err);
      toast.error("Logout failed");
    }
  };

  // avatar logic
  const avatarSrc =
    session?.user?.image &&
    typeof session.user.image === "string" &&
    session.user.image.startsWith("http") &&
    !session.user.image.includes("pngtree")
      ? session.user.image
      : "/assets/user.png";

  return (
    <div className="border-b bg-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* logo */}
        <div className="flex items-center gap-2">
          <Image src="/assets/logo5.png" alt="logo" width={80} height={80} />
          <h3 className="text-xl font-bold">
            <span className="text-blue-800">Skill</span>
            <span className="text-blue-500">Sphere</span>
          </h3>
        </div>

        {/* links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">

          <li>
            <Link
              href="/"
              className={`relative transition ${
                isActive("/")
                  ? "text-blue-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-600"
                  : "hover:text-blue-600"
              }`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/all-courses"
              className={`relative transition ${
                isActive("/all-courses")
                  ? "text-blue-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-600"
                  : "hover:text-blue-600"
              }`}
            >
              Courses
            </Link>
          </li>

          <li>
            <Link
              href="/profile"
              className={`relative transition ${
                isActive("/profile")
                  ? "text-blue-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-600"
                  : "hover:text-blue-600"
              }`}
            >
              My Profile
            </Link>
          </li>

        </ul>

        {/* auth */}
        <div className="hidden md:flex items-center gap-3">

          {isLoading ? (
            <span className="text-sm">Loading...</span>
          ) : session?.user ? (
            <>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">
                  Hello, {session.user.name}
                </span>

                <Image
                  src={avatarSrc}
                  alt="avatar"
                  width={38}
                  height={38}
                  className="rounded-full object-cover"
                />
              </div>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1.5 rounded-md hover:bg-red-400 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="flex items-center gap-1 px-3 py-1.5 rounded-md border border-blue-600 text-blue-600
                           hover:bg-blue-600 hover:text-white transition"
              >
                <User className="w-4 h-4" />
                Login
              </Link>

              <Link
                href="/register"
                className="px-3 py-1.5 rounded-md bg-blue-500 text-white
                           hover:bg-blue-600 transition"
              >
                Register
              </Link>
            </>
          )}

        </div>

        {/* mobile menu button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu />
        </button>

      </nav>
    </div>
  );
};

export default Navbar;