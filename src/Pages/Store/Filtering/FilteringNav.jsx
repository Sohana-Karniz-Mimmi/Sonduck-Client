const FilteringNav = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-4">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
          <h3 className="border-2 py-2 px-4 rounded-lg text-sm md:text-base lg:text-lg">
            Filter
          </h3>
          <h3 className="border-2 py-2 px-4 rounded-lg text-sm md:text-base lg:text-lg border-pink-300 text-pink-400">
            All Products
          </h3>
          <h3 className="border-2 py-2 px-4 rounded-lg text-sm md:text-base lg:text-lg">
            Bundle
          </h3>
          <h3 className="border-2 py-2 px-4 rounded-lg text-sm md:text-base lg:text-lg">
            Single Packs
          </h3>
          <h3 className="border-2 py-2 px-4 rounded-lg text-sm md:text-base lg:text-lg">
            After Effect
          </h3>
          <h3 className="border-2 py-2 px-4 rounded-lg text-sm md:text-base lg:text-lg">
            Premier Pro
          </h3>
        </div>
        <div className="flex justify-end">
          <h3 className="text-sm md:text-base lg:text-lg">
            Sort by{" "}
            <span className="border-2 py-2 px-4 rounded-lg">Release Date</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FilteringNav;
