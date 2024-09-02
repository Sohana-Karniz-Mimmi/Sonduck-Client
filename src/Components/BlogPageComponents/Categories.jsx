import { Link } from "react-router-dom";
import useBlog from "../../Hook/useBlog";

const Cetegories = () => {
  const blogData = useBlog();
  return (
    <div>
      {/* this div for Cetegory post card  */}
      <h2 className="text-xl font-medium text-gray-900  mt-10 mb-10">
        Cetegory
      </h2>
      {blogData.map(({ category, id }) => (
        <Link
          to="/blogs"
          key={id}
          className="border-b border-t py-5 space-y-2 flex justify-between items-center"
        >
          <p className="text-base text-gray-900 font-medium">{category}</p>
          <h3 className=" text-primary">10</h3>
        </Link>
      ))}
    </div>
  );
};

export default Cetegories;
