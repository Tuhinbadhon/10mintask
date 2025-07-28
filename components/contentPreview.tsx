"use client";

import { Section } from "@/types/product";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, FileText, Lock, PlayCircle } from "lucide-react";
import { useState } from "react";

const coreSections = [
  {
    id: 1,
    type: "core",
    name: "Introduction",
    subtitle: "",
    title: "Introduction",
    isOpenByDefault: true,
    items: [
      { type: "video", title: "IELTS: Introduction", isFree: true },
      { type: "video", title: "IELTS: Overview", isFree: true },
      { type: "video", title: "How to Prepare for IELTS?", isFree: true },
      { type: "video", title: "Making a Daily Routine", isFree: true },
      {
        type: "video",
        title: "Different Sentence Structures to Improve Writing",
        isFree: false,
      },
      { type: "pdf", title: "IELTS General Facts" },
      { type: "pdf", title: "IELTS Vocabulary" },
    ],
  },
  {
    id: 2,
    type: "core",
    name: "IELTS Course by Munzereen Shahid | Exclusive Support Group",
    subtitle: "",
    title: "IELTS Course by Munzereen Shahid | Exclusive Support Group",
    isOpenByDefault: false,
    items: [],
  },
  {
    id: 3,
    type: "core",
    name: "Academic Reading",
    subtitle: "",
    title: "Academic Reading",
    isOpenByDefault: false,
    items: [],
  },
  {
    id: 4,
    type: "core",
    name: "Academic Reading Mock Test",
    subtitle: "",
    title: "Academic Reading Mock Test",
    isOpenByDefault: false,
    items: [],
  },
  {
    id: 5,
    type: "core",
    name: "Listening",
    subtitle: "",
    title: "Listening",
    isOpenByDefault: false,
    items: [],
  },
];

const extraSections = [
  {
    id: 6,
    type: "extra",
    name: "Listening Mock Test",
    subtitle: "",
    title: "Listening Mock Test",
    isOpenByDefault: false,
    items: [],
  },
  {
    id: 7,
    type: "extra",
    name: "Academic Writing",
    subtitle: "",
    title: "Academic Writing",
    isOpenByDefault: false,
    items: [],
  },
  {
    id: 8,
    type: "extra",
    name: "Speaking",
    subtitle: "",
    title: "Speaking",
    isOpenByDefault: false,
    items: [],
  },
  {
    id: 9,
    type: "extra",
    name: "General Training Reading",
    subtitle: "",
    title: "General Training Reading",
    isOpenByDefault: false,
    items: [],
  },
];

const ContentSection = ({ section }: { section: Section }) => {
  const [open, setOpen] = useState(section.isOpenByDefault || false);

  return (
    <div className="border-b border-dashed">
      <button
        className="w-full text-left font-semibold py-3 px-4 flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <span>{section.title}</span>
        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && section.items && section.items.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden px-4 pb-4"
          >
            {section.items.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center py-2 text-sm text-gray-800"
              >
                <div className="flex items-center space-x-2">
                  {item.type === "video" ? (
                    item.isFree ? (
                      <PlayCircle className="text-green-500 w-5 h-5" />
                    ) : (
                      <Lock className="text-gray-400 w-5 h-5" />
                    )
                  ) : (
                    <FileText className="text-gray-500 w-5 h-5" />
                  )}
                  <span
                    className={item.isFree === false ? "text-gray-500" : ""}
                  >
                    Video: {item.title}
                  </span>
                </div>
                {item.isFree && (
                  <span className="text-green-600 text-xs">ফ্রি দেখুন</span>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function CourseContent() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div>
      <div className=" scroll-mt-20  mt-6 bg-white">
        <div className=" font-semibold text-2xl">Content preview</div>

        <div className="mt-4 p-3 border rounded">
          {coreSections.map((section, idx) => (
            <ContentSection key={idx} section={section} />
          ))}

          <AnimatePresence>
            {showAll &&
              extraSections.map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ContentSection section={section} />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="relative">
        <div className="absolute z-50 bottom-[-15px] left-1/2 flex translate-x-[-50%] items-center gap-2 rounded-full bg-white px-4 py-1 text-sm text-gray-500 shadow-[0px_0px_17.0361px_#E7EAF7] hover:bg-gray-50 hover:text-gray-700">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm  items-center justify-center gap-1 bg-white shadow-2xl  px-4 py-1 rounded-4xl hover:bg-gray-200 transition"
          >
            <div className="flex items-center gap-1">
              {showAll ? "কম দেখুন" : "সকল কন্টেন্ট"}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
