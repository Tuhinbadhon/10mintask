import { Medium } from "@/types/product";

interface props {
  pointers: Medium;
  id?: string;
}
export default function Pointers({ pointers }: props) {
  const values = pointers?.values || [];
  if (!pointers || values.length === 0) return null;
  return (
    <div id={`section-${pointers.order_idx}`} className="mt-16">
      <div className="font-semibold text-2xl">{pointers?.name}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 border p-5 rounded mt-5 gap-4">
        {values.map((item, index) => (
          <div key={index}>
            <h2 className="flex gap-2">
              <p>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="mr-1 mt-[2px] text-[#6294F8]"
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
              </p>
              {item?.text}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
