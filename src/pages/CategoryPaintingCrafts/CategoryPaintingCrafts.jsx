import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import { useLoaderData, useParams } from "react-router-dom";
import CategoryCraftCard from "../../components/CategoryCraftCard/CategoryCraftCard";

const CategoryPaintingCrafts = () => {
  // specific category data loader
  const categoryCrafts = useLoaderData();
  console.log(categoryCrafts);

  return (
    <div>
      <Navbar />

      <div className="w-[90%] md:w-[90%] lg:w-[85%] mx-auto ">
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {categoryCrafts.map((craft) => (
            <CategoryCraftCard
              key={craft._id}
              craft={craft}
            ></CategoryCraftCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPaintingCrafts;