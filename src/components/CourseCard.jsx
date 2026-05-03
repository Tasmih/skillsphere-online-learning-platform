import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';

const CourseCard = ({ course }) => {
  return (
    <div className="card bg-base-100 border border-blue-200 rounded-xl overflow-hidden 
shadow-md hover:shadow-xl 
transition-all duration-300 
hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">

      <figure className="w-full overflow-hidden rounded-t-md">
        <img
          src={course.image}
          alt={course.title}
          width={600}
          height={400}
          className="w-full h-72 object-cover"
        />
      </figure>

      <div className="card-body p-5 flex flex-col flex-1">

        <h2 className="card-title text-lg leading-tight line-clamp-2">
          {course.title}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Instructor: {course.instructor}
        </p>

        <div className="flex items-center gap-2 mt-3">
          <h2 className="text-sm font-medium">Rating:</h2>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span className="font-medium text-sm">{course.rating}</span>
          </div>
        </div>

        <div className="card-actions justify-end mt-auto pt-4">
          <Link href={`/all-courses/${course.id}`}>
            <button className="btn btn-primary">
              View Details <BsArrowRight />
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CourseCard;