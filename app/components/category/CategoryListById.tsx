"use client";
import { Category } from "@/app/types";
import Card from "../shared/Card";
import { useFetchCategoryById } from "@/app/hooks/useFetchCategoryById";
import { extractCategory } from "../utils";
import Spinner from "../shared/Spinner";
import Error from "../shared/Error";

const CategoryListById = ({ categoryId }: { categoryId: string }) => {
  const category = extractCategory(categoryId);
  const { categories, loading, error } = useFetchCategoryById(category);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <h1 className="text-2xl text-black font-bold p-4 capitalize ">
        {category}
      </h1>
      {error && <Error error={error} />}
      <div className="grid gap-4  xl:grid-cols-5 md:grid-cols-2 grid-cols-1 p-4">
        {categories.map((item: Category) => {
          const { id, title, price, description, image, category } = item;
          return (
            <Card
              key={id}
              title={title}
              price={price}
              description={description}
              image={image}
              category={category}
            />
          );
        })}
      </div>
    </>
  );
};

export default CategoryListById;
