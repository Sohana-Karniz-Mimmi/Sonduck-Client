import FilteringNav from "./Filtering/FilteringNav";
import Pagination from "./Pagination";
import StoreCard from "./StoreCard";

const Store = () => {
  return (
    <div>
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
