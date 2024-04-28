import React, { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import PaintingCraft from "../PaintingCraft/PaintingCraft";
const PaintingCrafts = () => {
  const [crafts, setCrafts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/crafts/some-data")
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="mt-12 md:mt-24 text-center space-y-4 md:w-1/2 mx-auto">
        <Slide delay={300} duration={1500}>
          <h2 className="text-2xl md:text-4xl font-bold font-exo">
            Popular Painting Craft
          </h2>
        </Slide>
        <Slide delay={300} duration={2000}>
          <p className="px-10">
            Each stroke a tale of passion; our masterpieces inspire awe and
            creativity.
          </p>
        </Slide>
      </div>
      {/* craft content */}
      {loading ? (
        <div className=" flex justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {crafts.map((craft) => (
            <PaintingCraft key={craft._id} craft={craft}></PaintingCraft>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaintingCrafts;
