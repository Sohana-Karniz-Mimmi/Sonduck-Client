import AccessPassSec from "../../Components/SubscriptionPageComponents/AccessPassSec";
import Discover from "../../Components/SubscriptionPageComponents/Discover";
import Features from "../../Components/SubscriptionPageComponents/Features";
import SinglePackSlider from "../../Components/SubscriptionPageComponents/SinglePackSlider";
import FuturePack from "../Store/FuturePack";
import GetBundles from "../Store/GetBundles";
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
        <AccessPassSec />
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
