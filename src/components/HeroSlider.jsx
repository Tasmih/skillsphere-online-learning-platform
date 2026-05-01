"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";

const HeroSlider = () => {
  return (
    <div className="w-full">

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-[70vh]"
      >

        {/* Slide 1 */}
        <SwiperSlide>
          <div className="h-[70vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center px-4">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold">
                Upgrade Your Skills Today 
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Learn modern technologies with structured courses
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="h-[70vh] flex items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-center px-4">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold">
                Learn from Industry Experts 
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Real world projects & practical learning
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="h-[70vh] flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-400 text-white text-center px-4">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold">
                Build Real Projects 
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Become job-ready with hands-on experience
              </p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

    </div>
  );
};

export default HeroSlider;