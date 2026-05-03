import React from "react";
import { FaBookOpen, FaClock, FaLaptopCode, FaBullseye } from "react-icons/fa";
import { MdTipsAndUpdates } from "react-icons/md";

const LearningTips = () => {
  return (
    <section className="py-4 md:py-6 px-2 md:px-4 bg-blue-50 rounded-xl">

      <div className="flex flex-col items-center text-center mb-10">
        <MdTipsAndUpdates className="text-3xl md:text-4xl text-primary mb-2" />
        <h2 className="text-2xl md:text-3xl font-bold">
          Learning Tips
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">

        <div className="bg-white shadow-md rounded-xl p-5 md:p-6 hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-3">
            <FaBookOpen className="text-xl md:text-2xl text-primary" />
            <h3 className="text-lg md:text-xl font-semibold">
              Active Learning
            </h3>
          </div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Don't just read or watch tutorials. Practice daily, build small projects, and try to explain what you learn to someone else.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-5 md:p-6 hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-3">
            <FaClock className="text-xl md:text-2xl text-primary" />
            <h3 className="text-lg md:text-xl font-semibold">
              Time Management
            </h3>
          </div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Use Pomodoro technique: 25 minutes study + 5 minutes break. Set daily goals and avoid distractions while studying.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-5 md:p-6 hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-3">
            <FaLaptopCode className="text-xl md:text-2xl text-primary" />
            <h3 className="text-lg md:text-xl font-semibold">
              Practice Projects
            </h3>
          </div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Build real-world projects like portfolio websites, todo apps, or clone popular apps to improve your skills.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-5 md:p-6 hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-3">
            <FaBullseye className="text-xl md:text-2xl text-primary" />
            <h3 className="text-lg md:text-xl font-semibold">
              Focus & Consistency
            </h3>
          </div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Study a little every day instead of long sessions. Stay consistent and reduce distractions like mobile and social media.
          </p>
        </div>

      </div>
    </section>
  );
};

export default LearningTips;