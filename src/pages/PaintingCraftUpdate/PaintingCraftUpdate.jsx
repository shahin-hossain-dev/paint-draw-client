import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../shared/Navbar/Navbar";

const PaintingCraftUpdate = () => {
  const { user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const paintingCraft = useLoaderData();
  const {
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

  const handleUpdateCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const craftName = form.craftName.value;
    const shortDescription = form.shortDescription.value;
    const email = form.email.value;
    const userName = form.userName.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const imageURL = form.imageURL.value;
    const subcategory_name = form.craftCategory.value;
    const stockStatus = form.stockStatus.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;

    setError("");
    if (isNaN(parseInt(price))) {
      return setError("Please give number value");
    }

    const craftItem = {
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
    };

    fetch(`http://localhost:5000/craft/${_id}`);
  };
  return (
    <div>
      <Navbar />
      <div className=" min-h-screen w-[90%] md:w-[90%] lg:w-[85%] mx-auto border mt-5 px-0 md:p-5">
        <div className="flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold text-center">
              Update Craft Items
            </h1>
          </div>
          <div className=" shrink-0 w-full ">
            <form onSubmit={handleUpdateCraft} className="card-body">
              {/* row 1 */}
              <div className="md:flex items-center gap-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Craft Name</span>
                  </label>
                  <input
                    type="text"
                    name="craftName"
                    defaultValue={craftName}
                    placeholder="Craft Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Short Description</span>
                  </label>
                  <input
                    type="text"
                    name="shortDescription"
                    defaultValue={shortDescription}
                    placeholder="Short Description"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              {/* row 2 */}
              <div className="md:flex items-center gap-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">User Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={email}
                    placeholder="User Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="text"
                    name="userName"
                    defaultValue={userName}
                    placeholder="User Name"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              {/* row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 w-full">
                <div className="grid grid-cols-2 gap-3 w-full">
                  <div className="form-control  w-full ">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      type="text"
                      name="price"
                      defaultValue={price}
                      placeholder="Price"
                      className={
                        error
                          ? "input input-bordered border-red-600"
                          : "input input-bordered"
                      }
                      required
                    />
                    <p className="text-red-600">{error}</p>
                  </div>
                  <div className="form-control  w-full ">
                    <label className="label">
                      <span className="label-text">Rating</span>
                    </label>
                    <select
                      name="rating"
                      defaultValue={rating}
                      className="select select-bordered w-full "
                      required
                    >
                      <option value={"1"}>1</option>
                      <option value={"2"}>2</option>
                      <option value={"3"}>3</option>
                      <option value={"4"}>4</option>
                      <option value={"5"}>5</option>
                    </select>
                  </div>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Image URL</span>
                  </label>
                  <input
                    type="text"
                    name="imageURL"
                    defaultValue={imageURL}
                    placeholder="image URL"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              {/* row 4 */}
              <div className="md:flex items-center gap-5 w-full">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Craft Category</span>
                  </label>
                  <select
                    name="craftCategory"
                    defaultValue={subcategory_name}
                    required
                    className="select select-bordered w-full "
                  >
                    <option value={"Landscape Painting"}>
                      Landscape Painting
                    </option>
                    <option value={"Portrait Drawing"}>Portrait Drawing</option>
                    <option value={"Watercolour Painting"}>
                      Watercolour Painting
                    </option>
                    <option value={"Oil Painting"}>Oil Painting</option>
                    <option value={"Charcoal Sketching"}>
                      Charcoal Sketching
                    </option>
                    <option value={"Cartoon Drawing"}>Cartoon Drawing</option>
                  </select>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Stock Status </span>
                  </label>
                  <select
                    name="stockStatus"
                    defaultValue={stockStatus}
                    required
                    className="select select-bordered w-full "
                  >
                    <option value={"In Stock"}>In stock</option>
                    <option value={"Out Of Stock"}>Out of Stock</option>
                  </select>
                </div>
              </div>
              {/* row 4 */}
              <div className="md:flex items-center gap-5 w-full">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Customization</span>
                  </label>
                  <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="customization"
                        value={"yes"}
                        className="radio"
                        defaultChecked={customization === "yes" ? true : false}
                      />{" "}
                      <span>Yes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="customization"
                        value={"no"}
                        className="radio"
                        defaultChecked={customization === "no" ? true : false}
                      />{" "}
                      <span>No</span>
                    </div>
                  </div>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Processing Time </span>
                  </label>
                  <input
                    type="datetime-local"
                    name="processingTime"
                    placeholder="YYYY-MM-DD"
                    className="input input-bordered"
                    id=""
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Update Item"
                  className="btn btn-neutral"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaintingCraftUpdate;
