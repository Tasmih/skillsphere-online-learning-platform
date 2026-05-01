import React from "react";
import { FaStar } from "react-icons/fa";
import { GiTrophy } from "react-icons/gi";
import { MdVerified } from "react-icons/md";

const TopInstructors = () => {
  return (
    <section className="py-14 px-6 bg-base-100">

      {/* Title */}
      <div className="text-center mb-10">
       <div className="flex items-center justify-center gap-2 mb-2">
     <GiTrophy className="text-4xl text-yellow-500 drop-shadow"  />
        <h2 className="text-3xl font-bold">
             Top Instructors
         </h2>
           </div>
        <p className="text-gray-500 mt-2">
          Learn from industry experts
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

        {/* Card 1 */}
        <div className="card bg-base-200 shadow-xl p-6 text-center hover:shadow-2xl transition">
          <img
            src="https://i.pravatar.cc/150?img=12"
            className="w-20 h-20 rounded-full mx-auto border-4 border-primary"
          />
          <h3 className="font-bold mt-3 flex justify-center items-center gap-1">
            John Doe <MdVerified className="text-blue-500" />
          </h3>
          <p className="text-sm text-gray-500">Full Stack Developer</p>
          <p className="flex justify-center items-center gap-1 mt-2">
            <FaStar className="text-yellow-500" /> 4.9 Rating
          </p>
          <span className="badge badge-primary mt-3">
            12K+ Students
          </span>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-200 shadow-xl p-6 text-center hover:shadow-2xl transition">
          <img
            src="https://i.pravatar.cc/150?img=32"
            className="w-20 h-20 rounded-full mx-auto border-4 border-primary"
          />
          <h3 className="font-bold mt-3 flex justify-center items-center gap-1">
            Sarah Khan <MdVerified className="text-blue-500" />
          </h3>
          <p className="text-sm text-gray-500">React Specialist</p>
          <p className="flex justify-center items-center gap-1 mt-2">
            <FaStar className="text-yellow-500" /> 4.8 Rating
          </p>
          <span className="badge badge-primary mt-3">
            10K+ Students
          </span>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-200 shadow-xl p-6 text-center hover:shadow-2xl transition">
          <img
            src="https://i.pravatar.cc/150?img=56"
            className="w-20 h-20 rounded-full mx-auto border-4 border-primary"
          />
          <h3 className="font-bold mt-3 flex justify-center items-center gap-1">
            Michael Lee <MdVerified className="text-blue-500" />
          </h3>
          <p className="text-sm text-gray-500">Data Scientist</p>
          <p className="flex justify-center items-center gap-1 mt-2">
            <FaStar className="text-yellow-500" /> 4.9 Rating
          </p>
          <span className="badge badge-primary mt-3">
            15K+ Students
          </span>
        </div>

        {/* Card 4 */}
        <div className="card bg-base-200 shadow-xl p-6 text-center hover:shadow-2xl transition">
          <img
            src="https://i.pravatar.cc/150?img=47"
            className="w-20 h-20 rounded-full mx-auto border-4 border-primary"
          />
          <h3 className="font-bold mt-3 flex justify-center items-center gap-1">
            Ayesha Rahman <MdVerified className="text-blue-500" />
          </h3>
          <p className="text-sm text-gray-500">Digital Marketer</p>
          <p className="flex justify-center items-center gap-1 mt-2">
            <FaStar className="text-yellow-500" /> 4.7 Rating
          </p>
          <span className="badge badge-primary mt-3">
            8K+ Students
          </span>
        </div>

      </div>
    </section>
  );
};

export default TopInstructors;