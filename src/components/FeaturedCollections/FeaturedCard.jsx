import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { FaDollarSign, FaStar, FaStoreAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeaturedCard = ({ craft }) => {
  const {
    _id,
    craftName,
    shortDescription,
    email,
    userName,
    price,
    rating,
    imageURL,
    subcategory_name,
    stockStatus,
    customization,
    processingTime,
  } = craft;
  return (
    <div className=" shadow-xl  border">
      <figure>
        <img src={imageURL} alt="Craft image" className="w-full" />
      </figure>
      <div className="card-body  p-4 " data-theme="light">
        <h2 className="card-title font-exo">{craftName}</h2>

        <div className="flex items-center justify-between text-gray-500">
          <div className="flex items-center gap-2">
            <BiCategoryAlt className="text-neutral" />
            <p>{subcategory_name}</p>
          </div>
          <div className="flex items-center gap-2 ">
            <FaStar className="text-[#FFA534]" />
            <p>{rating}</p>
          </div>
        </div>
        <hr className="my-3" />
        <div className="flex justify-between items-center mt-auto">
          <div className="flex items-center ">
            <FaDollarSign className="text-2xl " />
            <h3 className="text-2xl font-bold">{price}</h3>
          </div>
          <Link to={`/craft-details/${_id}`}>
            <button className="btn btn-neutral">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
