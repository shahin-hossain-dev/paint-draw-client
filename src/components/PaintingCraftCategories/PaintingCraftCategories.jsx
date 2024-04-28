import React, { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import PaintingCraftCategory from "../PaintingCraftCategory/PaintingCraftCategory";

const PaintingCraftCategories = () => {
  const [craftCategories, setCraftCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/craft-categories")
      .then((res) => res.json())
      .then((data) => setCraftCategories(data));
  }, []);
  return (
    <div>
      <div className="mt-12 md:mt-24 text-center space-y-4 md:w-1/2 mx-auto">
        <Slide duration={1500}>
          <h2
            className="text-2xl md:text-4xl font-bold font-exo"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Painting Craft Categories
          </h2>
        </Slide>
        <Slide duration={2000}>
          <p className="px-10">
            Painting Craft Categories offer diverse techniques and styles for
            artists of all levels, from traditional to modern approaches.
          </p>
        </Slide>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {craftCategories.map((craftCategory) => (
          <PaintingCraftCategory
            key={craftCategory._id}
            craftCategory={craftCategory}
          ></PaintingCraftCategory>
        ))}
      </div>
    </div>
  );
};

export default PaintingCraftCategories;
