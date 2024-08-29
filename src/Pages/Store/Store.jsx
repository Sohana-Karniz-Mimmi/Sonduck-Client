import FilteringNav from "./Filtering/FilteringNav";
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
    </div>
  );
};

export default Store;
