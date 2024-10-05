import CategoryListById from "@/app/components/category/CategoryListById";

const page = ({ params }: any) => {
  const categoryId = params.categoryid;
  return (
    <section>
      <div className="max-container">
        <CategoryListById categoryId={categoryId} />
      </div>
    </section>
  );
};

export default page;
