import React from "react";
import { FaBookOpen, FaClock } from "react-icons/fa";
import { MdTipsAndUpdates } from "react-icons/md";

const LearningTips = () => {
  return (
          <section className="py-12 px-6 bg-base-200 rounded-xl">
         <div className="flex flex-col items-center text-center mb-10">
        <MdTipsAndUpdates className="text-4xl text-primary mb-2" />
        <h2 className="text-3xl font-bold">
          Learning Tips
        </h2>
      </div>
      
    

      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* study tech */}
        <div className="card bg-base-100 shadow-xl p-6 hover:shadow-2xl transition">
          
          <div className="flex items-center gap-3 mb-3">
            <FaBookOpen className="text-2xl text-primary" />
            <h3 className="text-xl font-semibold">
              Study Techniques
            </h3>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Break your study sessions into small, manageable parts. Use active recall,
            practice tests, and regular revision to improve memory retention and understanding.
          </p>
        </div>

        {/* time manage */}
        <div className="card bg-base-100 shadow-xl p-6 hover:shadow-2xl transition">

          <div className="flex items-center gap-3 mb-3">
            <FaClock className="text-2xl text-primary" />
            <h3 className="text-xl font-semibold">
              Time Management
            </h3>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Follow the Pomodoro technique: 25 minutes of focused study followed by a 5-minute break.
            Set daily goals and prioritize important tasks first.
          </p>

        </div>

      </div>
    </section>
  );
};

export default LearningTips;