import Navbar from "../shared/Navbar/Navbar";
import { background } from "../PaintingCraftDetails/PaintingCraftDetails";
import { Link, useLoaderData } from "react-router-dom";

const AllArtCrafts = () => {
  const allCraft = useLoaderData();

  return (
    <div>
      <Navbar />
      <div
        className="w-full h-[200px] md:h-[400px] relative "
        style={background}
      >
        <div className="w-full font-exo text-center text-2xl md:text-3xl text-white absolute top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2">
          <p className="mb-5 font-medium"> All Painting Craft Items</p>
        </div>
      </div>
      <div className="w-[90%] md:w-[90%] lg:w-[85%] mx-auto mt-12 mb-12">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Id</th>
                <th>Craft Name</th>
                <th>Craft Category</th>
                <th>Stock Status</th>
                <th>Added By</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allCraft.map((craft, idx) => (
                <tr key={craft._id}>
                  <th>{idx + 1}</th>
                  <td>{craft.craftName}</td>
                  <td>{craft.subcategory_name}</td>
                  <td>{craft.stockStatus}</td>
                  <td>{craft.userName}</td>
                  <td>
                    <Link to={`/craft-details/${craft._id}`}>
                      <button className="btn btn-neutral">View Details</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllArtCrafts;
