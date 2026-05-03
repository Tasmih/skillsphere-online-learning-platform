import React from "react";
import { FaStar } from "react-icons/fa";
import { GiTrophy } from "react-icons/gi";
import { MdVerified } from "react-icons/md";

const TopInstructors = () => {
  return (
    <section className="py-14 px-6 bg-blue-50 rounded-xl">

      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-2 mb-2">
          <GiTrophy className="text-4xl text-yellow-500 drop-shadow" />
          <h2 className="text-3xl font-bold">
            Top Instructors
          </h2>
        </div>
        <p className="text-gray-500 mt-2">
          Learn from industry experts
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

        <div className="card bg-white shadow-xl p-6 text-center hover:shadow-2xl transition">
          <img
            src="https://i.ibb.co.com/FqNkxpjF/linkedin-sales-solutions-p-At-A8xe-i-VM-unsplash.jpg"
            className="w-20 h-20 rounded-full mx-auto border-4 border-blue-300"
          />

          <h3 className="font-bold mt-3 flex justify-center items-center gap-1">
            John Doe <MdVerified className="text-blue-500" />
          </h3>

          <p className="text-sm text-gray-500">Full Stack Developer</p>

          <div className="flex justify-center mt-2">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              <span className="text-sm font-medium">4.9 Rating</span>
            </div>
          </div>

          <div className="mt-3 flex justify-center">
            <span className="badge badge-primary">
              12K+ Students
            </span>
          </div>
        </div>

        <div className="card bg-white shadow-xl p-6 text-center hover:shadow-2xl transition">
          <img
            src="https://i.ibb.co.com/zHtYf6TW/mccarthy-beckan-RGKd-WJOUFH0-unsplash.jpg"
            className="w-20 h-20 rounded-full mx-auto border-4 border-blue-300"
          />

          <h3 className="font-bold mt-3 flex justify-center items-center gap-1">
            Sarah Khan <MdVerified className="text-blue-500" />
          </h3>

          <p className="text-sm text-gray-500">React Specialist</p>

          <div className="flex justify-center mt-2">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              <span className="text-sm font-medium">4.8 Rating</span>
            </div>
          </div>

          <div className="mt-3 flex justify-center">
            <span className="badge badge-primary">
              10K+ Students
            </span>
          </div>
        </div>

        <div className="card bg-white shadow-xl p-6 text-center hover:shadow-2xl transition">
          <img
            src="https://i.ibb.co.com/bMgGcxQk/charlie-green-3-Jmf-ENc-L24-M-unsplash.jpg"
            className="w-20 h-20 rounded-full mx-auto border-4 border-blue-300"
          />

          <h3 className="font-bold mt-3 flex justify-center items-center gap-1">
            Michael Lee <MdVerified className="text-blue-500" />
          </h3>

          <p className="text-sm text-gray-500">Data Scientist</p>

          <div className="flex justify-center mt-2">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              <span className="text-sm font-medium">4.9 Rating</span>
            </div>
          </div>

          <div className="mt-3 flex justify-center">
            <span className="badge badge-primary">
              15K+ Students
            </span>
          </div>
        </div>

        <div className="card bg-white shadow-xl p-6 text-center hover:shadow-2xl transition">
          <img
            src="https://i.ibb.co.com/HDx65THZ/stefan-stefancik-QXev-Dflbl8-A-unsplash.jpg"
            className="w-20 h-20 rounded-full mx-auto border-4 border-blue-300"
          />

          <h3 className="font-bold mt-3 flex justify-center items-center gap-1">
            Ayesha Rahman <MdVerified className="text-blue-500" />
          </h3>

          <p className="text-sm text-gray-500">Digital Marketer</p>

          <div className="flex justify-center mt-2">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              <span className="text-sm font-medium">4.7 Rating</span>
            </div>
          </div>

          <div className="mt-3 flex justify-center">
            <span className="badge badge-primary">
              8K+ Students
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TopInstructors;