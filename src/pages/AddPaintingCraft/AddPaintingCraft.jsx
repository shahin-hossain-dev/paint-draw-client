import React, { useContext } from "react";
import Navbar from "../shared/Navbar/Navbar";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const AddPaintingCraft = () => {
  const { user } = useContext(AuthContext);
  console.log(user.displayName);
  const handleAddCraft = (e) => {
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
    fetch("http://localhost:5000/crafts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(craftItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Craft Item Added Successfully",
            icon: "success",
          });
        }
      });
  };
  return (
    <div>
      <Navbar />
      <div className=" min-h-screen w-[90%] md:w-[90%] lg:w-[85%] mx-auto border mt-5 px-0 md:p-5">
        <div className="flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold text-center">
              Add New Craft Items
            </h1>
          </div>
          <div className=" shrink-0 w-full ">
            <form onSubmit={handleAddCraft} className="card-body">
              {/* row 1 */}
              <div className="md:flex items-center gap-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Craft Name</span>
                  </label>
                  <input
                    type="text"
                    name="craftName"
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
                    defaultValue={user?.email}
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
                    defaultValue={user?.displayName}
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
                      placeholder="Price"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control  w-full ">
                    <label className="label">
                      <span className="label-text">Rating</span>
                    </label>
                    <select
                      name="rating"
                      required
                      className="select select-bordered w-full "
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
                        defaultChecked={true}
                      />{" "}
                      <span>Yes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="customization"
                        value={"no"}
                        className="radio"
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
                  value="Add Item"
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

export default AddPaintingCraft;
