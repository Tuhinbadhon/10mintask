"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import CourseInstructor from "./courseInstructor";
import Feature from "./feature";
import GroupJoin from "./group-join";
// Import other section components if needed

function Instructor({ sectionData }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Keep all sections (don’t filter out empty names)
  const sections = sectionData || [];

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

  const handleTabClick = (index, orderId) => {
    setActiveIndex(index);
    const sectionEl = document.getElementById(`section-${orderId}`);
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Return a friendly tab label, fallback when name is empty
  const getSectionLabel = (item) => {
    if (item.name?.trim() !== "") return item.name;
    if (item.type === "features") return "Features";
    if (item.type === "instructors") return "Instructors";
  };

  useEffect(() => {
    checkScroll();
  }, [sectionData]);

  return (
    <div className="md:max-w-[710px]">
      <div className="relative cursor-pointer px-5 my-6">
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
          className="flex overflow-x-auto border-b gap-4 scrollbar-hide scroll-smooth"
        >
          {sections.map((item, index) => (
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

      {/* Render Section Components by order */}
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
        return null;
      })}
    </div>
  );
}

export default Instructor;
