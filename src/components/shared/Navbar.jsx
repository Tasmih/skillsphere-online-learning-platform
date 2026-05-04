"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { User } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session, isPending } = useSession();

  if (isPending) {
    return null;
  }

  const isActive = (path) => pathname === path;

  const handleLogout = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success("Logged out successfully");
            window.location.href = "/";
          },
        },
      });
    } catch (err) {
      console.log(err);
      toast.error("Logout failed");
    }
  };

  const avatarSrc =
    session?.user?.image &&
    typeof session.user.image === "string" &&
    session.user.image.startsWith("http") &&
    !session.user.image.includes("pngtree")
      ? session.user.image
      : "/assets/user.png";

  const navLinks = (
    <>
      <li>
        <Link
          href="/"
          className={isActive("/") ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/all-courses"
          className={isActive("/all-courses") ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}
        >
          Courses
        </Link>
      </li>
      <li>
        <Link
          href="/profile"
          className={isActive("/profile") ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}
        >
          My Profile
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 border-b border-b-blue-100 w-11/12 mx-auto">

      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>

        <div className="flex items-center">
         <Image
  src="/assets/logo10.png"
  alt="logo"
  width={90}
  height={90}
  className="animate-spin w-12 h-12 md:w-[90px] md:h-[90px]"
  style={{ animationDuration: "15s" }}
/>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 text-sm font-medium">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-2">
        {session?.user ? (
          <>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
              <span className="text-sm font-medium text-gray-700 hidden sm:block">
                Hello, {session.user.name}
              </span>
              <Image
                src={avatarSrc}
                alt="avatar"
                width={32}
                height={32}
                className="rounded-full object-cover ring-2 ring-blue-200"
              />
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white text-sm px-4 py-1.5 rounded-full hover:bg-red-600 transition-colors duration-200"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="flex items-center gap-1 px-4 py-1.5 rounded-full border border-blue-600 text-blue-600 text-sm hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              <User className="w-4 h-4" />
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-1.5 rounded-full bg-blue-600 text-white text-sm hover:bg-blue-700 transition-colors duration-200"
            >
              Register
            </Link>
          </>
        )}
      </div>

    </div>
  );
};

export default Navbar;