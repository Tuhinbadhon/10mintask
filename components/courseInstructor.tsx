"use client";
import { Section } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

interface TData {
  instructors: Section;
  id: string;
}
function CourseInstructor({ instructors }: TData) {
  const instructorSection = instructors; // access first item
  const values = instructorSection?.values || [];

  if (!instructorSection || values.length === 0) return null;
  //   console.log(instructorSection);

  return (
    <div
      id={`section-${instructorSection.order_idx}`}
      className=" scroll-mt-20"
    >
      <h2 className="text-2xl font-semibold mb-4">{instructorSection.name}</h2>

      {values.map((item, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 flex items-center gap-4 mb-4"
        >
          <Image
            src={item?.image || ""}
            alt={item?.name || "Instructor"}
            width={100}
            height={100}
            className="w-[73px] h-[73px] rounded-full border"
          />

          <div className="text-[#111827]">
            <div className="flex gap-2 items-center">
              <Link
                target="_blank"
                href={`https://10minuteschool.com/en/skills/instructors/${
                  item.slug || ""
                }`}
              >
                <h4 className="text-lg hover:text-green-500 font-semibold">
                  {item.name}
                </h4>
              </Link>
              <span className="font-bold text-gray-500">{">"}</span>
            </div>

            {item?.description && (
              <div
                className="text-sm text-gray-600"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            )}

            {item?.university && (
              <p className="text-sm text-gray-600">{item.university}</p>
            )}
            {item?.score && (
              <p className="text-sm text-gray-600">{item.score}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseInstructor;
