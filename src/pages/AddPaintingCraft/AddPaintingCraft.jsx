import React from "react";
import Navbar from "../shared/Navbar/Navbar";

const AddPaintingCraft = () => {
  return (
    <div>
      <Navbar />
      <div className=" min-h-screen w-[90%] md:w-[90%] lg:w-[85%] mx-auto border mt-5 p-5">
        <div className="flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold text-center">
              Add New Craft Items
            </h1>
          </div>
          <div className=" shrink-0 w-full ">
            <form className="card-body">
              {/* row 1 */}
              <div className="md:flex items-center gap-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Craft Name</span>
                  </label>
                  <input
                    type="text"
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
                    type="text"
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
                    placeholder="User Name"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              {/* row 3 */}
              <div className="md:flex items-center gap-5 w-full">
                <div className="md:flex gap-3 w-full">
                  <div className="form-control  w-full ">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Price"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control  w-full ">
                    <label className="label">
                      <span className="label-text">Rating</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Rating"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Short Description</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Short Description"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              {/* row 4 */}
              <div className="md:flex items-center gap-5 w-full">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Craft Name</span>
                  </label>
                  <select className="select select-bordered w-full ">
                    <option disabled selected>
                      Select One
                    </option>
                    <option>Landscape Painting</option>
                    <option>Portrait Drawing</option>
                    <option>Watercolour Painting</option>
                    <option>Oil Painting</option>
                    <option>Charcoal Sketching</option>
                    <option>Cartoon Drawing</option>
                  </select>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Short Description</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Short Description"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPaintingCraft;
