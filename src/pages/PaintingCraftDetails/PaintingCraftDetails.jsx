import React, { useEffect } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import { FaDollarSign, FaStar } from "react-icons/fa6";
import coverImg from "../../assets/slider1.jpg";
import moment from "moment";

export const background = {
  backgroundImage: `linear-gradient(to right, #00000099, #00000099),url(${coverImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "top",
};
const PaintingCraftDetails = () => {
  //   enter page to view from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const craft = useLoaderData();
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
    <div>
      <Navbar />
      <div
        className="w-full h-[200px] md:h-[400px] relative"
        style={background}
      >
        <div className="w-full font-exo text-center text-2xl md:text-3xl text-white absolute top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2">
          <p className="mb-5 font-medium"> Details About</p>

          <p className=" font-semibold">{craftName}</p>
        </div>
      </div>
      {/* craft Details */}
      <div className="w-[90%] md:w-[90%] lg:w-[85%] mx-auto ">
        <div className="hero min-h-screen">
          <div className="hero-content gap-10 flex-col lg:flex-row">
            <img src={imageURL} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <div className="flex items-center mb-3">
                <FaDollarSign className="text-5xl px-0 " />
                <h3 className="text-5xl font-bold">{price}</h3>
              </div>
              <h1 className="text-4xl font-semibold">{craftName}</h1>
              <p className="py-6">{shortDescription}</p>
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">Craft Category:</h4>
                <p>{subcategory_name}</p>
              </div>
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">Stock Status:</h4>
                <p>{stockStatus}</p>
              </div>
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">Rating:</h4>
                <p>{rating.includes(".") ? rating : rating + ".0"}</p>
              </div>
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">Customization:</h4>
                <p>{customization === "yes" ? "Yes" : "No"}</p>
              </div>
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">Processing Time:</h4>
                <p>{moment(processingTime).format("LLL")}</p>
              </div>
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">Added By:</h4>
                <p>{userName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaintingCraftDetails;
