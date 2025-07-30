"use client";

import Hero from "@/components/hero";
import Instructor from "@/components/instructors";
import { useProductData } from "@/hooks/useProductData";

export default function Page() {
  const { data, error, isLoading } = useProductData();

  if (isLoading) return <p>Loading...</p>;
  if (error || !data?.data) return <p>Failed to load course data.</p>;

  const courseData = data?.data;

  return (
    <div className=" mx-auto">
      <Hero data={courseData} />
      <div className="">
        <Instructor sectionData={courseData} />
      </div>
    </div>
  );
}
