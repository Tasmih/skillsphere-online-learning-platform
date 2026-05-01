import Image from "next/image";
import React from "react";


const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen w-11/12 mx-auto rounded-xl">

      <div className="hero-content flex-col lg:flex-row-reverse">

        {/* Image */}
        <Image
          src={"/assets/banner.jpg"}
          height={450}
          width={450}
          alt="skill learning banner"
          className="rounded-xl"
        />

        {/* Text */}
        <div>
          <h1 className="text-5xl font-bold text-center md:text-left">
            Upgrade Your Skills Today 
          </h1>

          <p className="py-6 text-center md:text-left text-gray-600">
            Learn from industry experts and build real-world projects.
            Master modern technologies and boost your career growth.
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="btn btn-primary">
              Get Started
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;