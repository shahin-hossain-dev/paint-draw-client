import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { FaStoreAlt } from "react-icons/fa";
import { FaDollarSign, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdAccessTime } from "react-icons/md";
import moment from "moment";

const CategoryCraftCard = ({ craft }) => {
  const {
    _id,
    craftName,
    shortDescription,
    price,
    rating,
    imageURL,
    subcategory_name,
    stockStatus,
    processingTime,
  } = craft;
  return (
    <div className="card shadow-xl rounded-md  border">
      <figure>
        <img
          src={imageURL}
          alt="Craft image"
          className="hover:scale-150 duration-500"
        />
      </figure>
      <div className="card-body  p-4 " data-theme="light">
        <h2 className="card-title font-exo">{craftName}</h2>
        <p>
          {shortDescription.length < 100
            ? shortDescription
            : shortDescription.slice(0, 100)}
          ...
        </p>

        <div className="flex items-center gap-2 text-gray-500">
          <MdAccessTime className="text-text-neutral" />
          <p>{moment(processingTime).format("LLL")}</p>
        </div>

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

export default CategoryCraftCard;
