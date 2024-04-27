import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyPaintingCraft from "../../components/MyPaintingCraft/MyPaintingCraft";
import { FaAngleDown } from "react-icons/fa";

const MyPaintingCraftList = () => {
  const { user } = useContext(AuthContext);
  const [yesItems, setYesItems] = useState([]);
  const [noItems, setNoItems] = useState([]);
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
  console.log(yesItems);
  console.log(noItems);
  const handleYesFilter = () => {
    const noCustomization = paintingCrafts.filter(
      (paintingCraft) => paintingCraft.customization === "no"
    );
    setNoItems(noCustomization);

    const yesCustomization = paintingCrafts.filter(
      (paintingCraft) => paintingCraft.customization === "yes"
    );
    setYesItems(yesCustomization);
    setPaintingCrafts(yesItems);
  };
  const handleNoFilter = () => {
    const yesCustomization = paintingCrafts.filter(
      (paintingCraft) => paintingCraft.customization === "yes"
    );
    setYesItems(yesCustomization);

    const noCustomization = paintingCrafts.filter(
      (paintingCraft) => paintingCraft.customization === "no"
    );
    setNoItems(noCustomization);
    setPaintingCrafts(noItems);
  };
  return (
    <div>
      <Navbar />
      <h2 className="text-2xl text-center mt-12 font-bold">
        My Painting Craft List
      </h2>
      <div className="flex justify-center py-6">
        <details className="dropdown">
          <summary className="m-1 btn">
            {" "}
            Customization Filter <FaAngleDown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <button onClick={handleYesFilter}>Yes</button>
            </li>
            <li>
              <button onClick={handleNoFilter}>No</button>
            </li>
          </ul>
        </details>
      </div>
      <div className="w-[90%] md:w-[90%] lg:w-[85%] mx-auto mt-12">
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
