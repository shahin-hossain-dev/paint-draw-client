import { BiCategoryAlt } from "react-icons/bi";
import { FaStoreAlt } from "react-icons/fa";
import { FaDollarSign, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PaintingCraft = ({ craft }) => {
  const {
    _id,
    craftName,
    price,
    rating,
    imageURL,
    subcategory_name,
    stockStatus,
  } = craft;
  return (
    <div className="card shadow-xl rounded-md  ">
      <figure>
        <img
          src={imageURL}
          alt="Craft image"
          className="hover:scale-150 duration-500"
        />
      </figure>
      <div className="card-body  p-4 ">
        <h2 className="card-title font-exo">{craftName}</h2>
        <div className="flex items-center gap-2 text-gray-500">
          <FaStoreAlt className="text-text-neutral" />
          <p>{stockStatus}</p>
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

export default PaintingCraft;
