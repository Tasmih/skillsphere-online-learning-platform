import Banner from "@/components/Banner";
import LearningTips from "@/components/LearningTips";
import PopularCourses from "@/components/PopularCourses";
import TopInstructors from "@/components/TopInstructors";
import TrendingCourses from "@/components/TrendingCourses";
import Image from "next/image";

export default function Home() {
  return (
    
     <div>


      <Banner />

<section className="p-6 space-y-12">
  <PopularCourses />
</section>
<section className="p-6 space-y-12">
 <TrendingCourses />
</section>

<section className="p-6 space-y-12">
  <LearningTips />
</section>

<section className="p-6 space-y-12">
  <TopInstructors />
</section>

    </div>

  );
}
