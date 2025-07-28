"use client";
import { Medium } from "@/types/product";
import Image from "next/image";

interface Props {
  feature: Medium;
  id?: string;
}
export default function FreeItemCard({ feature }: Props) {
  return (
    <div id={`section-${feature.order_idx}`} className="mt-10">
      <h2 className="text-xl font-semibold mb-4">{feature?.name}</h2>

      <div
        className="rounded-xl p-5 flex flex-col md:flex-row justify-between items-center text-white shadow-lg"
        style={{
          backgroundImage:
            "url('https://cdn.10minuteschool.com/images/banner_background_1731401239364.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="p-5 flex rounded-xl w-full h-full z-[1] border-2 border-white/40 bg-white/10 backdrop-blur-sm">
          {/* Text Side */}
          <div className="flex-1 text-white">
            <h3 className="text-xl font-semibold mb-3">
              ঘরে বসে IELTS প্রস্তুতি (Hardcopy Book)
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>360 পৃষ্ঠা</li>
              <li>প্রিমিয়াম হার্ডকপি</li>
              <li>ফ্রি ডেলিভারি</li>
              <li>৪ কর্মদিবসের মধ্যে সারাদেশে ডেলিভারি</li>
            </ul>
          </div>

          {/* Image Side */}
          <div className="mt-5 md:mt-0 md:ml-10 flex-shrink-0">
            <Image
              src="https://cdn.10minuteschool.com/images/catalog/media/Book_Image_1731924602665.png?w=120&h=150"
              alt="Hardcopy Book"
              width={120}
              height={150}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
