"use client";
import { Medium } from "@/types/product";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface Props {
  about: Medium;
  id?: string;
}

export default function About({ about }: Props) {
  const values = about?.values || [];

  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!about || values.length === 0) return null;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id={`section-${about.order_idx}`} className="mt-16">
      <div className="font-semibold text-2xl">{about?.name}</div>

      <div className="mt-5 divide-y divide-dashed border p-3  rounded">
        {values.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="group">
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left px-4 py-3 hover:bg-gray-50 transition"
              >
                <div
                  className="text-md font-medium"
                  dangerouslySetInnerHTML={{ __html: item?.title || "" }}
                />
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Accordion Body */}
              <div
                className={`overflow-hidden transition-all duration-300 px-4 ${
                  isOpen ? "max-h-[1000px] py-3" : "max-h-0"
                }`}
              >
                <div
                  className="text-sm text-gray-700 space-y-2 [&>ul>li]:list-disc [&>ul>li]:ml-5 [&>p]:mb-2"
                  dangerouslySetInnerHTML={{ __html: item?.description || "" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
