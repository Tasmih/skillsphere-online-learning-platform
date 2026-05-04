import Marquee from "react-fast-marquee";
import { FaUserGraduate, FaBookOpen, FaChalkboardTeacher, FaTrophy, FaStar } from "react-icons/fa";

const courses = [
  { icon: <FaUserGraduate className="text-blue-500" />, text: "10,000+ Students Enrolled" },
  { icon: <FaBookOpen className="text-indigo-500" />, text: "50+ Courses Available" },
  { icon: <FaChalkboardTeacher className="text-purple-500" />, text: "20+ Expert Instructors" },
  { icon: <FaTrophy className="text-yellow-500" />, text: "#1 Learning Platform" },
  { icon: <FaStar className="text-green-500" />, text: "500+ Success Stories" },
];

const CourseMarquee = () => {
  return (
    <div
      className="my-4 mt-6 w-11/12 mx-auto rounded-2xl overflow-hidden py-2 sm:py-3 md:py-4"
      style={{
        background:
          "linear-gradient(to right, #ffffff 0%, #f1f5ff 25%, #c7d2fe 50%, #f1f5ff 75%, #ffffff 100%)",
      }}
    >
      <div className="flex items-center">
        <Marquee
          speed={30}
          pauseOnHover={true}
          gradient={false}
        >
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex items-center gap-2 mx-3 sm:mx-6 md:mx-8 
                         bg-white/60 px-3 sm:px-4 py-1.5 sm:py-2 
                         rounded-full shadow-sm backdrop-blur-sm"
            >
              <span className="text-sm sm:text-base">
                {course.icon}
              </span>
              <span className="text-xs sm:text-sm md:text-base font-medium text-gray-700 whitespace-nowrap">
                {course.text}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default CourseMarquee;