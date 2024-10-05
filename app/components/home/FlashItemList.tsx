"use client";
import Card from "../shared/Card";
import { useFetchFlashSales } from "@/app/hooks/useFetchFlashSales";
import Spinner from "../shared/Spinner";
import Error from "../shared/Error";

const FlashItemList = () => {
  const { categories, loading, error } = useFetchFlashSales();
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <h1 className="text-2xl text-black font-bold px-6 py-4 ">Flash sale</h1>
      {error && <Error error={error} />}
      <div className="grid gap-4  xl:grid-cols-5 md:grid-cols-2 grid-cols-1 p-4">
        {categories.map((item: any) => {
          return (
            <Card
              title={item.title}
              image={item.image}
              price={item.price}
              description={item.description}
              key={item.id}
              category={item.category}
            />
          );
        })}
      </div>
    </>
  );
};

export default FlashItemList;
