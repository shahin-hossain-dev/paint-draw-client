import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import PaintingCrafts from "../../components/PaintingCrafts/PaintingCrafts";
import PaintingCraftCategories from "../../components/PaintingCraftCategories/PaintingCraftCategories";
import FeaturedCollections from "../../components/FeaturedCollections/FeaturedCollections";

const Home = () => {
  const [selectedMode, setSelectedMood] = useState(false);
  const [isDarkMode, setDarkMood] = useState(selectedMode);

  useEffect(() => {
    if (isDarkMode) {
      document.getElementById("home").setAttribute("data-theme", "dark");
      document.getElementById("home").classList =
        "text-white bg-[#212121] min-h-screen duration-200";
      localStorage.setItem("theme", "dark");
    } else {
      document.getElementById("home").setAttribute("data-theme", "light");
      document.getElementById("home").classList =
        "text-black bg-[#ffffff] min-h-screen duration-200";
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div id="home">
      <Navbar
        setDarkMood={setDarkMood}
        isDarkMode={isDarkMode}
        setSelectedMood={setSelectedMood}
        selectedMode={selectedMode}
      />
      <Banner />
      <div className="w-[90%] md:w-[90%] lg:w-[85%] mx-auto pb-24">
        <PaintingCrafts />
        <PaintingCraftCategories />
        <FeaturedCollections />
      </div>
    </div>
  );
};

export default Home;
