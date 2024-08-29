import React from "react";
import useBlog from "../../Hook/useBlog";
import { Link } from "react-router-dom";

const RecentPost = () => {
  // this data for recent blog post
  // TODO: After getting blog api, replace it to fetching data
  const blog = useBlog() 
  return (
    <div>
      {/* this div for recent post card  */}
      <h2 className="text-xl font-medium text-gray-900 mt-8">Recent Post</h2>
      {blog.slice(0,3).map(({title, postDate,id}) => (
        <Link to={`/blogsDetails/${id}`} key={id} className="border-b py-5 space-y-2">
          <p className="text-base text-gray-600">{postDate}</p>
          <h3 className="text-lg text-gray-900 font-medium">{title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default RecentPost;
