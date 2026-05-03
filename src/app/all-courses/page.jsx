"use client";

import CourseCard from '@/components/CourseCard';
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const AllCoursesPage = () => {

  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

  
  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])


  const filtered = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="max-w-7xl mx-auto px-4">

      <h1 className="text-2xl font-extrabold mt-6 mb-1 bg-blue-800 text-transparent bg-clip-text">
        All Courses
      </h1>
      <p className="text-blue-700 text-sm mb-4">
        Explore all available skill-based learning programs
      </p>
      <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 mb-6 w-58">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search courses..."
          className="outline-none w-full bg-transparent"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

     
      {filtered.length === 0 && (
        <p className="text-center text-gray-400 mt-10">No courses found</p>
      )}

    </div>
  );
};

export default AllCoursesPage;