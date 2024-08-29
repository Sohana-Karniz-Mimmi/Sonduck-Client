import Container from "../../../Shared/Container";

const FilteringNav = () => {
  return (
    <div>
      <Container>
        <div className=" md:flex justify-between ">
          <div className="md:flex">
            <h3 className=" mr-3 border-2 py-2 px-4 rounded-lg">Filter</h3>
            <h3 className=" mr-4 border-2 py-2 px-4 rounded-lg">
              All Products
            </h3>
            <h3 className="mr-4 border-2 py-2 px-4 rounded-lg">Bundle</h3>
            <h3 className="mr-4 border-2 py-2 px-4 rounded-lg">Single Packs</h3>
            <h3 className="mr-4 border-2 py-2 px-4 rounded-lg">After Effect</h3>
            <h3 className="border-2 py-2 px-4 rounded-lg">Premier Pro</h3>
          </div>
          <div>
            {" "}
            <h3>
              Sort by{" "}
              <span className="border-2 py-2 px-4 rounded-lg">
                Release Date
              </span>
            </h3>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FilteringNav;
