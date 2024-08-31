import Container from "../../Shared/Container";
import FilteringNav from "./Filtering/FilteringNav";
import FuturePack from "./FuturePack";
import GetBundles from "./GetBundles";
import Pagination from "./Pagination";
import StoreCard from "./StoreCard";

const Store = () => {
  return (
    <div className="mt-12">
      <Container>
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
      </Container>
    </div>
  );
};

export default Store;
