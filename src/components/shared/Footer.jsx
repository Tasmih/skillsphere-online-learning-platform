import Link from "next/link";
import Image from "next/image";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#06153a] text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12">

      
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div className="space-y-3">

            <div className="flex items-center gap-2">
              <Image
                src="/assets/logo.png"
                alt="SkillSphere"
                width={40}
                height={40}
              />

              <h2 className="text-xl font-bold">
                <span className="text-blue-800">Skill</span>
                <span className="text-blue-400">Sphere</span>
              </h2>
            </div>

            <p className="text-sm text-gray-400">
              Learn modern skills with structured courses and expert instructors.
            </p>

            <div className="flex items-center gap-4 pt-3">

              <a href="#" className="hover:text-blue-500 transition">
                <FaFacebookF size={18} />
              </a>

              <a href="#" className="hover:text-sky-400 transition">
                <FaTwitter size={18} />
              </a>

              <a href="#" className="hover:text-pink-500 transition">
                <FaInstagram size={18} />
              </a>

              <a href="#" className="hover:text-blue-400 transition">
                <FaLinkedinIn size={18} />
              </a>

              <a href="#" className="hover:text-blue-300 transition">
                <FaYoutube size={18} />
              </a>

            </div>

          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Courses</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/all-courses" className="hover:text-white transition">
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="/all-courses" className="hover:text-white transition">
                  Popular
                </Link>
              </li>
              <li>
                <Link href="/all-courses" className="hover:text-white transition">
                  New Releases
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold mb-4 text-white">
              Start Learning
            </h3>

            <p className="text-sm text-gray-400 mb-4">
              Join thousands of learners today.
            </p>

            <Link
              href="/register"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition"
            >
              Get Started
            </Link>
          </div>

        </div>

      
        <div className="my-8 border-t border-white/10"></div>

      
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} SkillSphere. All rights reserved.
          </p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;