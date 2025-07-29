import { Data } from "@/types/product";
import Image from "next/image";
import Card from "./card";
interface TData {
  data: Data;
}
function Hero({ data }: TData) {
  const bg = "/images/uiherobg.jpeg";
  
  return (
    <div
      className="bg-cover bg-center bg-no-repeat md:px-44"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container max-w-7xl relative   px-4 md:px-0 flex flex-col md:flex-row gap-6 md:gap-12 py-6 md:py-10 min-h-[300px]">
        <div className="w-full hidden md:block  md:max-w-[650px]">
          <h1 className="text-white mb-2 text-xl font-semibold md:text-4xl">
            {data?.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2">
            <Image
              className="w-[100px] md:w-[130px]"
              src="/images/star.jpeg"
              width={200}
              height={50}
              alt="Rating"
            />
            <span className="text-white text-sm md:text-base">
              (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
            </span>
          </div>
          <div
            className="text-[#A3A3A3] mt-2 text-sm md:text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: data?.description || "" }}
          />
        </div>
        <div className="w-full md:max-w-[390px]   md:right-0 md:top-[50px] md:absolute">
          <Card data={data} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
