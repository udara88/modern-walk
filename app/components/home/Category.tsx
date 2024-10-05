import Link from "next/link";
const Category = () => {
  return (
    <section>
      <div className="max-container mt-8 flex flex-col">
        <h1 className="text-2xl text-black font-bold px-6 py-4  capitalize">
          categories
        </h1>
        <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-4  p-4">
          <Link href={`/mens-clothing`}>
            <div className="w-full h-[250px] flex  justify-center items-center lg:text-5xl text-3xl text-white font-bold rounded-2xl  bg-[#2BD9AF] capitalize">
              men's clothing
            </div>
          </Link>
          <Link href={`/womens-clothing`}>
            <div className="w-full h-[250px] flex justify-center items-center  lg:text-5xl text-3xl text-white font-bold rounded-2xl  bg-[#FF5E84] capitalize">
              women's clothing
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Category;
