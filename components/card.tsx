import RightSideCard from "./slider";

function Card(data) {
  return (
    <div>
      <RightSideCard data={data} />
      <div className="flex md:w-[390px] justify-between mt-5">
        <h2 className="text-[#A3A3A3] text-sm">
          কোর্সটি সম্পর্কে বিস্তারিত জানতে
        </h2>
        <p className="flex gap-1 items-center text-sm text-[#1cab55]">
          <span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
            </svg>
          </span>
          <span className="underline">ফোন করুন (16910)</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
