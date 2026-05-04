import { FaFire } from "react-icons/fa";
import CourseCard from "./CourseCard";

import Marquee from "react-fast-marquee";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const PopularCourses = async () => {
  const res = await fetch('https://skillsphere-online-learning-platform.onrender.com/courses');
  const courses = await res.json();

  const topCourses = [...courses]
    .sort((a, b) => Number(b.rating) - Number(a.rating))
    .slice(0, 3);

  return (
    <section className="py-4 md:py-6 px-2 md:px-4 bg-blue-50 rounded-xl">

   <div className="text-center mb-10">

  <h1 className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-bold text-gray-800">

    <FaFire className="text-blue-500" />
    <span>Popular Courses</span>
    <FaFire className="text-blue-500" />

  </h1>

  <p className="text-gray-500 mt-2 text-sm md:text-base">
    Top rated courses chosen by students
  </p>

</div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>


<div className="card-actions flex justify-center items-center mt-6 pt-4 pb-3 hover:bg-blue-100 rounded-lg transition-colors duration-200">
          <Link href={"/all-courses"}>
            <button className="btn btn-primary text-white hover:bg-blue-300 rounded-lg  duration-200">
              See All Courses <BsArrowRight />
            </button>
          </Link>
        </div>
    </section>
  );
};

export default PopularCourses;