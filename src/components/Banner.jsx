import Image from "next/image";
import Link from "next/link";
import { FaUserTie, FaCode, FaMedal, FaRocket } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto rounded-2xl overflow-hidden mt-6"
style={{ background: "linear-gradient(to right, #c7d2fe 0%, #dde5ff 30%, #eef1ff 55%, #ffffff 100%)" }}>

      <div className="flex flex-col lg:flex-row items-center justify-between px-8 py-10 gap-8">

        {/* left side - text */}
        <div className="flex-1 text-center lg:text-left">

    
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <FaRocket className="text-xs" />
            
            Start Learning Today
          </div>

          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4 animate__animated animate__fadeInUp">
            Upgrade Your <br />
            <span className="text-blue-600 animate__animated animate__fadeInUp">Skills Today</span>
          </h1>

          <p className="text-gray-500 text-sm lg:text-base mb-6 max-w-md mx-auto lg:mx-0 animate__animated animate__fadeInUp">
            Learn from industry experts and build real-world projects.
            Master modern technologies and boost your career growth.
          </p>

      
          <div className="flex gap-3 justify-center lg:justify-start">
            <Link href="/all-courses">
              <button className="btn btn-primary rounded-full px-6">
                Get Started →
              </button>
            </Link>
            <Link href="/all-courses">
              <button className="btn btn-outline btn-primary rounded-full px-6">
                Browse Courses
              </button>
            </Link>
          </div>

         
          <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
            <div className="flex items-center gap-2 bg-white shadow-sm px-3 py-2 rounded-lg">
              <FaUserTie className="text-blue-500" />
              <span className="text-xs font-medium">Expert Instructors</span>
            </div>
            <div className="flex items-center gap-2 bg-white shadow-sm px-3 py-2 rounded-lg">
              <FaCode className="text-green-500" />
              <span className="text-xs font-medium">Hands-on Projects</span>
            </div>
            <div className="flex items-center gap-2 bg-white shadow-sm px-3 py-2 rounded-lg">
              <FaMedal className="text-purple-500" />
              <span className="text-xs font-medium">Certificate</span>
            </div>
          </div>

        </div>

        {/* right side image */}
       <div className="flex-1 flex items-end justify-end w-full overflow-hidden">
 <div className="flex-1 flex items-end justify-end w-full overflow-hidden">
  <Image
    src="/assets/banner9.png"
    width={600}
    height={1000}
    alt="skill learning banner"
    priority                 
    quality={85}                
    className="w-full h-auto object-contain rounded-xl object-bottom drop-shadow-xl"
  />
</div>
</div>

      </div>

    </div>
  );
};

export default Banner;