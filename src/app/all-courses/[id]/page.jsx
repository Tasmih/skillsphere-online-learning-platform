

import { FaArrowRight, FaStar } from "react-icons/fa";


  const CourseDetailsPage = async ({ params }) => {
  const { id } = await params; 

  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });

  const courses = await res.json();

  const course = courses.find((c) => c.id === Number(id));

 if (!course) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center mt-20">
        <h2 className="text-3xl font-bold text-red-500 mb-4">
          Course Not Found
        </h2>

        <a href={"/all-courses"}>
          <button className="btn btn-primary">
            All Courses
          </button>
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src={course.image} alt={course.title} />

      <h1 className="text-2xl font-bold">{course.title}</h1>
      <p>Instructor: {course.instructor}</p>
      <p><span className="text-yellow-300"><FaStar/>
       </span>  {course.rating}</p>
       <p className="text-lg">{course.duration}</p>
         <span className="badge badge-primary">{course.level}</span>
            
    
      <p>{course.description}</p>
      {/* Course Curriculum - Static List */}
            <div className="mb-10">
                <h2 className="text-xl font-semibold mb-5">Course Curriculum</h2>
                
                <div className="space-y-3">
                    {[
                        "Introduction and Course Overview",
                        "Setting up your development environment",
                        "Understanding the basic concepts",
                        "Building your first small project",
                        "Working with real data and examples",
                        "Advanced features and techniques",
                        "Best practices and common mistakes",
                        "Final project development",
                        "Testing, debugging and deployment",
                        "Getting your certificate"

                    ].map((item, index) => (
                        <div key={index} className="flex gap-4 bg-base-200 p-4 rounded-xl">
                            <div className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                                {index + 1}
                            </div>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>

     <div className="text-center mt-10">
                <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-md transition-all duration-200 flex items-center gap-3 mx-auto">
                    Enroll Now - Start Learning
                    <span className="text-xl"><FaArrowRight /></span>
                </button>
                <p className="text-sm text-gray-500 mt-4">
                    Lifetime access • Certificate included
                </p>
            </div>
        </div>
    
  );
};

export default CourseDetailsPage;