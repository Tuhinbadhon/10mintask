"use client";
import { Medium } from "@/types/product";
import Image from "next/image";

interface Props {
  feature: Medium;
  id?: string;
}

export default function FeatureExplanations({ feature }: Props) {
  const values = feature?.values || [];

  if (!feature || values.length === 0) return null;

  return (
    <div id={`section-${feature.order_idx}`} className=" scroll-mt-20 mt-12">
      <div className="font-semibold text-2xl">{feature?.name}</div>

      <div className="mt-5 border p-3 rounded divide-y divide-dashed">
        {values.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start  gap-5 py-5"
          >
            {/* Left: Title + Custom Icon Checklist */}
            <div className="flex-1">
              <div className="  mb-2">{item.title}</div>
              <div className="space-y-2  text-gray-700">
                {item.checklist?.map((check, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="mt-[2px] text-[#6294F8] flex-shrink-0"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      {typeof check === "string" ? check : check?.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="max-w-[350px] ">
              <Image
                src={item.file_url || "/images/uiherobg.jpeg"}
                alt={item.title || "Feature image"}
                width={120}
                height={120}
                className="rounded-lg object-contain w-[250px] h-[200px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
