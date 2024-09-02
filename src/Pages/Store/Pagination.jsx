import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 md:mt-12">
        <div className="mb-4 md:mb-0">
          <p className="text-sm md:text-base lg:text-lg">
            Page 2 <span>of 16</span>
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <IoIosArrowBack className="items-center mt-4 text-2xl mr-2" />
          <p className="btn text-sm md:text-base lg:text-lg">1</p>
          <p className="btn text-sm md:text-base lg:text-lg">2</p>
          <p className="btn text-sm md:text-base lg:text-lg">3</p>
          <p className="btn text-sm md:text-base lg:text-lg">4</p>
          <p className="btn text-sm md:text-base lg:text-lg">5</p>
          <p className="btn text-sm md:text-base lg:text-lg">...</p>
          <p className="btn text-sm md:text-base lg:text-lg">16</p>
          <IoIosArrowForward className="mt-4 text-2xl ml-2" />
        </div>
        <div className="mt-4 md:mt-0">
          <p className="btn text-sm md:text-base lg:text-lg">7/page</p>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
