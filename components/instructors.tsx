/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Data } from "@/types/product";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import About from "./aboutType";
import CourseContent from "./contentPreview";
import FeatureExplanations from "./Course-Exclusive-Feature";
import CourseInstructor from "./courseInstructor";
import Faq from "./faq";
import Feature from "./feature";
import FreeItemCard from "./free-items";
import GroupJoin from "./group-join";
import Payment from "./payment";
import Pointers from "./pointers";
import Requirements from "./requirment";

interface InstructorProps {
  sectionData: Data;
  id?: string;
}
function Instructor({ sectionData }: InstructorProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Keep all sections (don’t filter out empty names)
  const sections = sectionData?.sections || [];
  const tabSections = sections.filter((item) => {
    const hasName = item.name?.trim() !== "";
    const hasValues = Array.isArray(item.values)
      ? item.values.length > 0
      : true;

    // Always include free_items regardless of values
    if (item.type === "free_items" && hasName) return true;

    return hasName && hasValues;
  });

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  const handleTabClick = (index: any, orderId: any) => {
    setActiveIndex(index);
    const sectionEl = document.getElementById(`section-${orderId}`);
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Return a friendly tab label, fallback when name is empty
  const getSectionLabel = (item: any) => {
    if (item.name?.trim() !== "") return item.name;
    if (item.type === "features") return "Features";
    if (item.type === "instructors") return "Instructors";
    if (item.type === "pointers") return "Instructors";
    if (item.type === "about") return "Instructors";
    if (item.type === "feature_explanations") return "FeatureExplanations";
    if (item.type === "free_items") return "FreeItemCard";
    if (item.type === "testimonials") return "TestimonialsSlider";
    if (item.type === "requirements") return "Requirements";
    if (item.type === "how_to_pay") return "Payment";
    if (item.type === "faq") return "Faq";
  };

  useEffect(() => {
    checkScroll();
  }, [sectionData]);

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 md:px-0">
      <div className="w-[720px] ">
        <div className="sticky top-[0px] z-20 bg-white px-5 py-4">
          {/* Left arrow */}
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`absolute cursor-pointer -left-6 top-1/2 -translate-y-1/2 z-10 bg-[#0000004d] text-white rounded-full p-1 transition-opacity ${
              canScrollLeft ? "opacity-100" : "opacity-30 pointer-events-none"
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Scrollable Section Tabs */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto border-b md:pl-10 gap-4 scrollbar-hide scroll-smooth"
          >
            {tabSections.map((item, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index, item.order_idx)}
                className={`whitespace-nowrap cursor-pointer text-base py-2 ${
                  activeIndex === index
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-[#525252]"
                }`}
              >
                {getSectionLabel(item)}
              </button>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`absolute cursor-pointer -right-5 top-1/2 -translate-y-1/2 z-10 bg-[#0000004d] text-white rounded-full p-1 transition-opacity ${
              canScrollRight ? "opacity-100" : "opacity-30 pointer-events-none"
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {sections.map((item) => {
          if (item.type === "instructors") {
            return (
              <CourseInstructor
                key={item.order_idx}
                id={`section-${item.order_idx}`}
                instructors={item}
              />
            );
          }
          if (item.type === "features") {
            return (
              <Feature
                key={item.order_idx}
                id={`section-${item.order_idx}`}
                features={item}
              />
            );
          }
          if (item.type === "group_join_engagement") {
            return (
              <GroupJoin
                key={item.order_idx}
                id={`section-${item.order_idx}`}
                joins={item}
              />
            );
          }
          if (item.type === "pointers") {
            return (
              <Pointers
                key={item.order_idx}
                id={`section-${item.order_idx}`}
                pointers={item}
              />
            );
          }
          if (item.type === "content_preview") {
            return <CourseContent key={item.order_idx} />;
          }
          if (item.type === "about") {
            return (
              <About
                key={item.order_idx}
                id={`section-${item.order_idx}`}
                about={item}
              />
            );
          }
          if (item.type === "feature_explanations") {
            return (
              <FeatureExplanations
                key={item.order_idx}
                id={`section-${item.order_idx}`}
                feature={item}
              />
            );
          }
          if (item.type === "free_items") {
            return (
              <FreeItemCard
                key={item.order_idx}
                id={`section-${item.order_idx}`}
                feature={item}
              />
            );
          }

          if (item.type === "requirements") {
            return <Requirements key={item.order_idx} feature={item} />;
          }
          if (item.type === "how_to_pay") {
            return <Payment key={item.order_idx} />;
          }

          if (item.type === "faq") {
            return (
              <Faq
                key={item.order_idx}
                id={`section-${item.order_idx}`}
                feature={item}
              />
            );
          }
          return null;
        })}
      </div>
      <div className="w-1/3"></div>
    </div>
  );
}

export default Instructor;
