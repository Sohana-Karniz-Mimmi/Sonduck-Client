import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const Pagination = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="space-x-1 lg:space-x-3 text-[#525866] font-medium">
        <button className="lg:inline-block hidden">
          {" "}
          <MdKeyboardDoubleArrowLeft />
        </button>
        <button>
          {" "}
          <MdKeyboardArrowLeft />
        </button>
        <button className="bg-[#ffffff] border border-[#E1E4EA] px-2  rounded-lg">
          {" "}
          1
        </button>
        <button className="bg-[#ffffff] border border-[#E1E4EA] px-2  rounded-lg">
          {" "}
          2
        </button>
        <button className="bg-[#ffffff] border border-[#E1E4EA] px-2  rounded-lg">
          {" "}
          3
        </button>
        <button className="bg-[#ffffff] border border-[#E1E4EA] px-2  rounded-lg">
          {" "}
          4
        </button>
        <button className="bg-[#ffffff] border border-[#E1E4EA] px-2  rounded-lg">
          {" "}
          5
        </button>
        <button className="selected bg-[#F5F7FA] px-2  rounded-lg"> 6</button>
        <button className="bg-[#ffffff] border border-[#E1E4EA] px-2  rounded-lg">
          7
        </button>
        <button className="bg-[#ffffff] border border-[#E1E4EA] px-2  rounded-lg">
          {" "}
          8
        </button>
        <button className="bg-[#ffffff] border border-[#E1E4EA] px-2  rounded-lg">
          {" "}
          ....
        </button>
        <button className="bg-[#ffffff] border border-[#E1E4EA] px-2  rounded-lg">
          {" "}
          16
        </button>
        <button>
          {" "}
          <MdKeyboardArrowRight />
        </button>
        <button className="hidden lg:inline-block">
          {" "}
          <MdKeyboardDoubleArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
