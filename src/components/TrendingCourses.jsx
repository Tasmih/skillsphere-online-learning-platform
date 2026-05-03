import { FaStar } from "react-icons/fa";

const TrendingCourses = () => {
  return (
    <section className="py-4 md:py-6 px-2 md:px-4 bg-blue-50 rounded-xl">

      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-black">
         Trending Courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-white border border-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">

          <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            Bestseller
          </span>

          <h3 className="font-semibold text-lg mt-3">
            Full Stack Web Development
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Instructor: John Doe
          </p>

          <div className="flex items-center gap-1 mt-3">
            <FaStar className="text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">4.8</span>
            <span className="text-xs text-gray-400">(2.3k reviews)</span>
          </div>

        </div>

        <div className="bg-white border border-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">

          <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            Trending
          </span>

          <h3 className="font-semibold text-lg mt-3">
            UI/UX Design Masterclass
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Instructor: Sarah Smith
          </p>

          <div className="flex items-center gap-1 mt-3">
            <FaStar className="text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">4.7</span>
            <span className="text-xs text-gray-400">(1.8k reviews)</span>
          </div>

        </div>

        <div className="bg-white border border-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">

          <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            Hot 
          </span>

          <h3 className="font-semibold text-lg mt-3">
            Digital Marketing Mastery
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Instructor: David Lee
          </p>

          <div className="flex items-center gap-1 mt-3">
            <FaStar className="text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">4.9</span>
            <span className="text-xs text-gray-400">(3.1k reviews)</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TrendingCourses;