"use client";
import { Checklist } from "@/types/product";
import Image from "next/image";

interface TData {
  features: Checklist;
  id?: string;
}
function Feature({ features }: TData) {
  const featuressection = features; // access first item
  const values = featuressection?.values || [];

  if (!featuressection || values.length === 0) return null;
  //   console.log(instructorSection);

  return (
    <div
      id={`section-${featuressection.order_idx}`}
      className=" scroll-mt-20 mt-10"
    >
      <h2 className="text-2xl font-semibold mb-4">{featuressection.name}</h2>

      <div className="grid md:grid-cols-2 rounded overflow-hidden ">
        {values.map((item, index) => (
          <div key={index} className="  bg-[#111827]  p-6 flex  gap-4 ">
            {item?.icon && (
              <Image
                className="w-9 h-9"
                src={item.icon}
                width={20}
                height={20}
                alt=""
              />
            )}

            <div>
              <p className="text-white">{item?.title}</p>
              <p className="text-[#9CA3AF] text-sm mt-2">{item?.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
