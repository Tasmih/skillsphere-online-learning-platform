import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';

const CourseCard = ({ course }) => {
  console.log(course);

  return (
    <div className="card bg-base-100 shadow-xl border rounded-xl">
      
      <figure className="relative w-full h-48 aspect-square">
        <img
          src={course.image}
          alt={course.title}
          width={600}
          height={400}
          className='object-cover rounded-xl'
        />
      </figure>

      <div className="card-body p-5 mt-1">
        
        <h2 className="card-title text-lg leading-tight line-clamp-2">
          {course.title}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Instructor: {course.instructor}
        </p>

        
       <div className="mt-3 flex flex-col gap-1">

  <div className="flex items-center gap-2">

    <h2 className="text-sm font-medium">Rating:</h2>

    <div className="flex items-center gap-1">
      <FaStar className="text-yellow-400" />
      <span className="font-medium text-sm">
        {course.rating}
      </span>

      
    </div>

  </div>
        </div>
        <div>
          
        </div>

        <div className="card-actions justify-end mt-4">
          
         <Link href={`/all-courses/${course.id}`}>  <button className="btn btn-primary">
            View Details  <BsArrowRight/>
          </button></Link>
        </div>

      </div>
    </div>
  );
};

export default CourseCard;