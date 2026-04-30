import courses from "@/data/courses"

const CourseDetailsPage = async({params}) => {
   const { id } = await params;
    const course = courses.find(
    (c) => c.id === Number(params.id)
  );
//  if there is no course
   if (!course) {
    return <p className="max-w-4xl mx-auto p-6">Course not found</p>;
  }
    return (
        <div className="max-w-4xl mx-auto p-6">
            
      <img
        src={course.image}
        alt={course.title}
        className="rounded mb-4"
      />

      <h1 className="text-2xl font-bold">
        {course.title}
      </h1>

      <p className="text-gray-600">
        Instructor: {course.instructor}
      </p>

      <p className="mt-2">⭐ {course.rating}</p>
      <p>Duration: {course.duration}</p>
      <p>Level: {course.level}</p>

      <p className="mt-4">
        {course.description}
      </p>

      <button className="mt-6 bg-green-600 text-white px-5 py-2 rounded">
        Enroll Now
      </button>
        </div>
    );
};

export default CourseDetailsPage;