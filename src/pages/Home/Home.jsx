import Navbar from "../shared/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import PaintingCrafts from "../../components/PaintingCrafts/PaintingCrafts";
import PaintingCraftCategories from "../../components/PaintingCraftCategories/PaintingCraftCategories";
import FeaturedCollections from "../../components/FeaturedCollections/FeaturedCollections";
import AskQuestions from "../../components/AskQuestions/AskQuestions";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
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
