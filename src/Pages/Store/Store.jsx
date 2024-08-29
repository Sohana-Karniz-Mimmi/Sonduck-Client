import FilteringNav from "./Filtering/FilteringNav";
import FuturePack from "./FuturePack";
import GetBundles from "./GetBundles";
import Pagination from "./Pagination";
import StoreCard from "./StoreCard";

const Store = () => {
  return (
    <div className="mt-12">
      <FilteringNav />
      <div>
        <StoreCard />
      </div>
      <div>
        <Pagination />
      </div>
      <div>
        <FuturePack />
      </div>
      <div>
        <GetBundles />
      </div>
    </div>
  );
};

export default Store;
