"use client";
import Image from "next/image";

interface Cta {
  clicked_url?: string;
  text?: string;
}

interface Background {
  image?: string;
}

interface JoinItem {
  background?: Background;
  top_left_icon_img?: string;
  title?: string;
  description?: string;
  cta?: Cta;
  thumbnail?: string;
}

interface Medium {
  order_idx?: number;
  name?: string;
  values?: JoinItem[];
}

interface GroupJoinProps {
  joins?: Medium;
  id?: string;
}

function GroupJoin({ joins }: GroupJoinProps) {
  const joinsection = joins;
  const values = joinsection?.values || [];

  if (!joinsection || values.length === 0) return null;

  return (
    <div id={`section-${joinsection.order_idx}`} className="mt-16">
      {/* Optional section name */}
      {/* <h2 className="text-2xl font-semibold mb-4">{joinsection.name || "Join Section"}</h2> */}

      <div>
        {values.map((item, index) => (
          <div
            key={index}
            className="bg-[#111827] p-8 flex gap-4 rounded-lg"
            style={{
              backgroundImage: `url(${item.background?.image || ""})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Left: Text content */}
            <div className="flex flex-col justify-start w-1/2">
              {item.top_left_icon_img && (
                <Image
                  src={item.top_left_icon_img}
                  width={200}
                  height={200}
                  alt="icon"
                  className="flex-shrink-0 mb-2"
                />
              )}
              <p className="text-white font-semibold text-xl">{item.title}</p>
              <p className="text-[#EDEDED] text-base mt-2">
                {item.description}
              </p>

              {item.cta?.clicked_url && item.cta?.text && (
                <a
                  href={item.cta.clicked_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-max bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
                >
                  {item.cta.text}
                </a>
              )}
            </div>

            {/* Right: Image */}
            <div className="w-1/2 flex justify-center items-center ">
              {item.thumbnail && (
                <Image
                  src={item.thumbnail}
                  alt="thumbnail"
                  width={500}
                  height={500}
                  className="h-fit w-fit rounded"
                  style={{ minHeight: 0 }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupJoin;
