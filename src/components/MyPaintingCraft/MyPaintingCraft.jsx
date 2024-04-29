import React from "react";
import { FaEdit, FaRegTrashAlt, FaStoreAlt } from "react-icons/fa";
import { FaDollarSign, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyPaintingCraft = ({ paintingCraft, setFilterItems, filterItems }) => {
  //   console.log(paintingCraft);
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
  } = paintingCraft;

  const handleDeleteCraft = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://b9a10-server-side-shahin-hossain-dev.vercel.app/craft/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Craft Item Deleted Successfully",
                icon: "success",
              });
              const remaining = filterItems.filter(
                (craftItems) => craftItems._id !== _id
              );
              setFilterItems(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="grid grid-cols-3 bg-base-100 shadow-xl rounded-lg">
        <img
          src={imageURL}
          className="object-cover h-full col-span-1 rounded-l-lg"
          alt="Movie"
        />

        <div className="card-body p-3 col-span-2">
          <h2 className="card-title">{craftName}</h2>
          <div className="flex items-center ">
            <FaDollarSign className="text-2xl " />
            <h3 className="text-2xl font-bold">{price}</h3>
          </div>
          <div className="flex items-center gap-2 ">
            <FaStar className="text-[#FFA534]" />
            <p>{rating}</p>
          </div>
          <div className="flex items-center gap-2 ">
            <FaEdit className="" />
            <p>{customization === "yes" ? "Yes" : "No"}</p>
          </div>
          <div className="flex items-center gap-2 ">
            <FaStoreAlt className="" />
            <p>{stockStatus}</p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/update-painting-craft/${_id}`}>
              <button className="btn btn-warning">
                <span className="flex items-center gap-2 ">
                  <FaEdit className="" />
                  <span>Update</span>
                </span>
              </button>
            </Link>
            <button
              onClick={() => handleDeleteCraft(_id)}
              className="btn btn-error"
            >
              <span className="flex items-center gap-2 ">
                <FaRegTrashAlt className="" />
                <span>Delete</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPaintingCraft;
