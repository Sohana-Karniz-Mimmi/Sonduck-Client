import { IoSearchOutline } from "react-icons/io5";
import RecentPost from "./RecentPost";
import Cetegories from "./Categories";

const SidebarCetegory = () => {
  return (
    <div>
      {/* this div for search input section  */}

      <div className="bg-gray-100 flex items-center gap-2 px-4 py-4 rounded-xl border border-gray-300">
        <IoSearchOutline className="text-xl font-bold" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent border-none placeholder:text-gray-400 outline-none text-gray-600 w-full"
        />
      </div>
      <div className="hidden lg:block">
        <RecentPost />
      </div>
      <Cetegories />
    </div>
  );
};

export default SidebarCetegory;
