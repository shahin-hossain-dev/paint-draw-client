import React, { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import FeaturedCard from "./FeaturedCard";

const FeaturedCollections = () => {
  const [crafts, setCrafts] = useState([]);

  useEffect(() => {
    fetch("https://b9a10-server-side-shahin-hossain-dev.vercel.app/crafts")
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data);
      });
  }, []);
  return (
    <div className="mt-24">
      <h2 className="text-3xl md:text-5xl text-center font-bold font-exo">
        Featured Collections
      </h2>

      <div className="grid grid-col-1 md:grid-cols-2 gap-6 mt-12">
        {crafts.slice(0, 2).map((craft) => (
          <FeaturedCard key={craft._id} craft={craft}></FeaturedCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCollections;
