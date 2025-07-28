import { Medium } from "@/types/product";

interface Props {
  feature: Medium;
  id?: string;
}

const requirements = [
  "ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)",
  "স্মার্টফোন অথবা পিসি",
];

export default function Requirements({ feature }: Props) {
  return (
    <div className="mt-10">
      <h2 className="font-semibold text-2xl mb-3">{feature?.name}</h2>

      <div className="border p-5 rounded space-y-3 text-base">
        {requirements.map((item, index) => (
          <p key={index} className="flex items-start gap-2">
            <CheckIcon />
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
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
  );
}
