import React from "react";

const PaintingCraftCategory = ({ craftCategory }) => {
  //   console.log(craftCategory);
  const { image, subcategory_name, origins, key_elements } = craftCategory;
  const handleCategoryCraft = (subCategory) => {
    console.log(subCategory);
  };
  return (
    <div onClick={() => handleCategoryCraft(subcategory_name)}>
      <div className="card  shadow-xl image-full ">
        <figure>
          <img src={image} alt="category image" />
        </figure>
        <div className="card-body space-y-3 text-white">
          <h2 className="card-title text-white text-2xl font-exo">
            Category: {subcategory_name}
          </h2>
          <span className="text-white">
            <span className="font-bold">Origin:</span> {origins}
          </span>
          <p className="text-white">
            <span className="font-bold"> Key Elements:</span> {key_elements}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaintingCraftCategory;
