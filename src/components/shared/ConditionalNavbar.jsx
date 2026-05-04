"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar"; // Adjust import path if needed

export default function ConditionalNavbar() {
  const pathname = usePathname();

  // Add all paths here where you want to hide the Navbar
  const hiddenPaths = ["/login", "/register"];

  if (hiddenPaths.includes(pathname)) {
    return null;
  }

  return <Navbar />;
}