import CourseCard from '@/components/CourseCard';
import React from 'react';

const AllCoursesPage =async () => {
    const res = await fetch ('http://localhost:3000/data.json')
    const  courses =await res.json()
    console.log(courses,"courses")
    return (
        <div>
           <h1 className="text-4xl font-extrabold text-center mt-6 mb-2 bg-blue-800 text-transparent bg-clip-text">
  All Courses
</h1>
 <p className="text-gray-500 mt-2 text-center mb-6">
    Explore all available skill-based learning programs
  </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        </div>
    );
};

export default AllCoursesPage;