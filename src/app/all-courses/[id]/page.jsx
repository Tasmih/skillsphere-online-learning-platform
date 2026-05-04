import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaStar, FaClock, FaUser, FaLayerGroup, FaCheckCircle } from "react-icons/fa";
import { PiDotOutlineFill } from "react-icons/pi";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("/data.json", {
    next: { revalidate: 3600 },
  });

  const courses = await res.json();
  const course = courses.find((c) => String(c.id) === String(id));

  if (!course) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center mt-20">
        <h2 className="text-3xl font-bold text-red-500 mb-4">
          Course Not Found
        </h2>
        <Link href="/all-courses">
          <button className="btn btn-primary">All Courses</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 mb-10">

      <Image
        src={course.image}
        alt={course.title}
        width={600}
        height={400}
        className="w-full h-100 md:h-80 object-cover rounded-xl mb-6"
        unoptimized
      />

      <h1 className="text-xl md:text-2xl font-bold mb-3">{course.title}</h1>

      <div className="flex flex-wrap gap-3 mb-4">
        <div className="flex items-center gap-1 text-sm text-gray-700">
          <FaUser className="text-primary" />
          <span>{course.instructor}</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-700">
          <FaClock className="text-primary" />
          <span>{course.duration}</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-yellow-400">
          <FaStar />
          <span className="text-gray-700">{course.rating}</span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <FaLayerGroup className="text-primary" />
          <span className="badge badge-primary badge-sm">{course.level}</span>
        </div>
      </div>

      <p className="text-gray-700 text-lg md:text-2xl lg:text-3xl mb-10 leading-relaxed">
        {course.description}
      </p>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-bold">Course Curriculum</h2>
          <span className="text-sm text-gray-800">{course.curriculum.length} Lessons</span>
        </div>

        <div className="border border-base-300 rounded-2xl overflow-hidden shadow-sm">
          {course.curriculum.map((item, index) => (
            <div
              key={index}
              className={`group flex items-center gap-3 px-4 py-2 transition-colors duration-150 hover:bg-blue-800
                ${index !== course.curriculum.length - 1 ? "border-b border-base-300" : ""}
              `}
            >
              <FaCheckCircle className="text-primary group-hover:text-blue-400 text-base transition-colors duration-150" />
              <p className="text-sm md:text-base group-hover:text-white transition-colors duration-150">{item}</p>
            </div>
          ))}
        </div>

        <p className="text-sm md:text-base text-gray-600 mt-4 text-center">
          Enroll to unlock all lessons
        </p>
      </div>

      <div className="text-center">
        <button className="bg-blue-800 text-white hover:bg-blue-300 hover:text-gray-800 px-8 md:px-10 py-3 md:py-4 rounded-2xl text-base md:text-lg font-semibold shadow-md transition-all duration-200 flex items-center gap-3 mx-auto">
          Enroll Now - Start Learning
          <FaArrowRight />
        </button>
        <div className="flex items-center justify-center gap-1 text-sm md:text-base text-gray-500 mt-4">
          Lifetime access <PiDotOutlineFill /> Certificate included
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;