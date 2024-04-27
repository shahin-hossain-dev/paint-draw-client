import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyPaintingCraft from "../../components/MyPaintingCraft/MyPaintingCraft";

const MyPaintingCraftList = () => {
  const { user } = useContext(AuthContext);
  const [paintingCrafts, setPaintingCrafts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/my-crafts?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setPaintingCrafts(data));
  }, []);

  //   const url = `http://localhost:5000/my-crafts?email=${user?.email}`;
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const res = await fetch(url);
  //       const data = await res.json();
  //       console.log(data);
  //     };
  //     fetchData();
  //   });

  return (
    <div>
      <Navbar />
      <h2>My Painting Craft List</h2>
      <div className="w-[90%] md:w-[90%] lg:w-[85%] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {paintingCrafts.map((paintingCraft) => (
            <MyPaintingCraft
              key={paintingCraft._id}
              paintingCraft={paintingCraft}
            ></MyPaintingCraft>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPaintingCraftList;
