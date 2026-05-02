"use client";
import "animate.css";
import { FaStar } from "react-icons/fa";

const TrendingCourses = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-16">
      <h2 className="text-2xl font-bold mb-8 text-center animate__animated animate__fadeInUp">
        Trending Courses
      </h2>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="bg-blue-50 p-5 rounded-xl shadow animate__animated animate__zoomIn">
          <h3 className="font-semibold text-lg">Web Development Bootcamp</h3>
          <p className="text-sm text-gray-600 mt-1">Instructor: John Doe</p>

          <div className="flex items-center gap-2 mt-2">
            <FaStar className="text-yellow-500" />
            <span className="text-black">4.8</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-blue-50 p-5 rounded-xl shadow animate__animated animate__zoomIn animate__delay-1s">
          <h3 className="font-semibold text-lg">UI/UX Design Masterclass</h3>
          <p className="text-sm text-gray-600 mt-1">Instructor: Sarah Smith</p>

          <div className="flex items-center gap-2 mt-2">
            <FaStar className="text-yellow-500" />
            <span className="text-black">4.7</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-blue-50 p-5 rounded-xl shadow animate__animated animate__zoomIn animate__delay-2s">
          <h3 className="font-semibold text-lg">Digital Marketing Guide</h3>
          <p className="text-sm text-gray-600 mt-1">Instructor: David Lee</p>

          <div className="flex items-center gap-2 mt-2">
            <FaStar className="text-yellow-500" />
            <span className="text-black">4.9</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingCourses;