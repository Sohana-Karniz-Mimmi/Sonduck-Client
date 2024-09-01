import Discover from "../../Components/SubscriptionPageComponents/Discover";
import FuturePack from "../Store/FuturePack";
import GetBundles from "../Store/GetBundles";
import AllAccessPass from "./AllAccessPass";
import Banner from "./Banners/Banner";
import FeaturedSinglePacks from "./FeaturedSinglePacks";
import MotionDuck from "./MotionDuck";
import SinglePack from "./SinglePack";
import UnlockSonDuck from "./UnlockSonDuck";

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
        {/* <SinglePackSlider /> */}
      </div>
      <div>
        <SinglePack />
      </div>
      <div>
        <GetBundles />
      </div>
      <div className="mt-12">
        <AllAccessPass />
      </div>
      <div>
        <UnlockSonDuck />
      </div>
      <div>
        <Discover />
      </div>
    </div>
  );
};

export default Home;
