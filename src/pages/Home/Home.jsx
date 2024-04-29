import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import PaintingCrafts from "../../components/PaintingCrafts/PaintingCrafts";
import PaintingCraftCategories from "../../components/PaintingCraftCategories/PaintingCraftCategories";
import FeaturedCollections from "../../components/FeaturedCollections/FeaturedCollections";
import AskQuestions from "../../components/AskQuestions/AskQuestions";

const Home = () => {
  const [selectedMode, setSelectedMood] = useState(false);
  const [isDarkMode, setDarkMood] = useState(selectedMode);

  useEffect(() => {
    if (isDarkMode) {
      document.getElementById("home").setAttribute("data-theme", "light");
      document.getElementById("home").className =
        "text-black bg-[#ffffff] min-h-screen duration-200";
      if (localStorage.getItem("theme") === "dark") {
        document.getElementById("home").setAttribute("data-theme", "dark");
        document.getElementById("home").className =
          "text-white bg-[#212121] min-h-screen duration-200";
        setSelectedMood(true);
      }
    } else if (localStorage.getItem("theme") === "dark") {
      document.getElementById("home").setAttribute("data-theme", "dark");
      document.getElementById("home").className =
        "text-white bg-[#212121] min-h-screen duration-200";
      setSelectedMood(true);
    } else if (isDarkMode) {
      document.getElementById("home").setAttribute("data-theme", "dark");
      document.getElementById("home").className =
        "text-white bg-[#212121] min-h-screen duration-200";
    } else {
      document.getElementById("home").setAttribute("data-theme", "light");
      document.getElementById("home").className =
        "text-black bg-[#ffffff] min-h-screen duration-200";
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
        <AskQuestions />
      </div>
    </div>
  );
};

export default Home;
