"use client";
import "animate.css";

const TrendingCourses = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-16">

      {/* Title */}
      <h2 className="text-2xl font-bold mb-8 text-center animate__animated animate__fadeInUp">
        🔥 Trending Courses
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="bg-blue-50 p-5 rounded-xl shadow animate__animated animate__zoomIn">
          <h3 className="font-semibold text-lg">Web Development Bootcamp</h3>
          <p className="text-sm text-gray-600 mt-1">Instructor: John Doe</p>
          <p className="mt-2">⭐ 4.8</p>
        </div>

        {/* Card 2 */}
        <div className="bg-blue-50 p-5 rounded-xl shadow animate__animated animate__zoomIn animate__delay-1s">
          <h3 className="font-semibold text-lg">UI/UX Design Masterclass</h3>
          <p className="text-sm text-gray-600 mt-1">Instructor: Sarah Smith</p>
          <p className="mt-2">⭐ 4.7</p>
        </div>

        {/* Card 3 */}
        <div className="bg-blue-50 p-5 rounded-xl shadow animate__animated animate__zoomIn animate__delay-2s">
          <h3 className="font-semibold text-lg">Digital Marketing Guide</h3>
          <p className="text-sm text-gray-600 mt-1">Instructor: David Lee</p>
          <p className="mt-2">⭐ 4.9</p>
        </div>

      </div>
    </section>
  );
};

export default TrendingCourses;