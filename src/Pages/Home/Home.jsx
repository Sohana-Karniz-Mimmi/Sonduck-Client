import FuturePack from "../Store/FuturePack";
import Banner from "./Banners/Banner";
import FeaturedSinglePacks from "./FeaturedSinglePacks";
import MotionDuck from "./MotionDuck";
import SinglePack from "./SinglePack";

const Home = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div>
        <MotionDuck />
      </div>
      <div>
        <FuturePack />
      </div>
      <div>
        <FeaturedSinglePacks />
      </div>
      <div>
        <SinglePack />
      </div>
    </div>
  );
};

export default Home;
