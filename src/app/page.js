import Banner from "@/components/Banner";
import PopularCourses from "@/components/PopularCourses";
import Image from "next/image";

export default function Home() {
  return (
    
     <div>

      <Banner />

      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">
          Popular Courses
        </h2>

        <PopularCourses />
      </section>

    </div>

  );
}
