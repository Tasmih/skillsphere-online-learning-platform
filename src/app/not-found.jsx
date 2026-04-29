import Link from "next/link";
import React from "react";
import { Home } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 px-6">
      <div className="text-center max-w-md">

        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-blue-700 tracking-widest drop-shadow-md">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-blue-700/80 mt-3 text-base md:text-lg">
          Oops! The page you are looking for doesn’t exist or may have been moved.
        </p>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="flex items-center gap-2 px-7 py-3 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            Home
          </Link>
        </div>

        {/* Decoration */}
        <div className="mt-10">
          <div className="w-24 h-1 mx-auto bg-blue-500 rounded-full blur-sm opacity-60"></div>
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;