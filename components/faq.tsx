"use client";

import { Section } from "@/types/product";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

interface FaqProps {
  feature: Section;
  id?: string;
}

export default function Faq({ feature }: FaqProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const { name, values = [], order_idx } = feature;
  const visibleItems = showAll ? values : values.slice(0, 5);

  useEffect(() => {
    if (values.length > 0 && values[0].id !== undefined) {
      setExpandedId(String(values[0].id));
    }
  }, [values]);

  const toggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id={`section-${order_idx}`} className="mx-auto scroll-mt-20 py-10">
      <h2 className="text-2xl mb-6 font-semibold text-gray-800">{name}</h2>

      <div className="space-y-4 divide-y divide-dashed px-3 border rounded relative">
        {visibleItems.map(({ id, question, answer }) => {
          const isOpen = expandedId === String(id);

          return (
            <div key={id} className="overflow-hidden">
              <button
                onClick={() => id !== undefined && toggle(String(id))}
                className="w-full flex items-center justify-between px-5 py-2 text-left text-gray-800 font-medium focus:outline-none"
              >
                <span className="text-base md:text-lg">{question}</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="px-5 pb-4 pt-1 text-sm text-gray-700 leading-relaxed faq-content"
                      dangerouslySetInnerHTML={{ __html: answer ?? "" }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {values.length > 5 && (
          <div className="relative">
            <div className="absolute z-50 bottom-[-15px] left-1/2 flex translate-x-[-50%] items-center gap-2 rounded-full bg-white px-4 py-1 text-sm text-gray-500 shadow-[0px_0px_17.0361px_#E7EAF7] hover:bg-gray-50 hover:text-gray-700">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-sm flex items-center justify-center gap-1 bg-white shadow-2xl px-4 py-1 rounded-full hover:bg-gray-200 transition"
              >
                <span>{showAll ? "See less" : "See all"}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    showAll ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
