import Image from "next/image";
import { memo } from "react";

type CardProps = {
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
};
const categoryColorMap: any = {
  women: "bg-[#FF5E84]",
  men: "bg-[#2BD9AF]",
  electronics: "bg-[#38bdf8]",
  jewelery: "bg-[#fde047]",
};

const Card = ({ title, image, price, description, category }: CardProps) => {
  const categoryStr = category?.split(/[^a-zA-Z0-9\s]/g)[0];
  return (
    <div className=" w-full flex flex-col bg-white  border border-gray-100 items-center gap-2 shadow-md  rounded-2xl  ">
      <div className="flex flex-col items-center min-h-[235px]">
        <div className="min-h-[100px]">
          <h3 className="text-sm text-black font-bold capitalize text-center my-4  px-4">
            {title}
          </h3>
        </div>
        <Image
          src={image}
          height={80}
          width={80}
          alt="product img"
          className="object-cover object-center  "
        />
      </div>
      <div
        className={`w-full h-full flex flex-col ${categoryColorMap[categoryStr]} rounded-2xl items-center gap-2 p-4 text-wrap`}
      >
        <p className="text-blue-600 font-bold">
          <span>Rs.</span>
          {price}
        </p>
        <p className="text-sm md:max-w-[300px]  font-normal lowercase  ">
          {description.slice(0, 100)}...
        </p>
      </div>
    </div>
  );
};

export default Card;
