import CourseCard from "./CourseCard";


const PopularCourses =async () => {
    const res = await fetch ('http://localhost:3000/data.json')
    const  courses =await res.json()
    console.log(courses,"courses")


  const topCourses = [...courses]
    .sort((a, b) => Number(b.rating) - Number(a.rating))
    .slice(0, 3);

  return (
   <div>
    <h1 className="text-2xl font-bold my-5">Popular Courses</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {topCourses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  </div>

    
  );
};

export default PopularCourses;