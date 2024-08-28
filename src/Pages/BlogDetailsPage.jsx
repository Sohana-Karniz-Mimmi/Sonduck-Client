import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import useBlog from "../Hook/useBlog";
const BlogDetailsPage = () => {
  // const [blogsData, setBlogData] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const { description, title, postDate, image } = useLoaderData();
  const blogdata = useBlog();
  console.log(blogdata);

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/"); // Fallback to home page
    }
  };

  return (
    <div className="max-w-[1200px] w-full mx-auto mt-24 px-3">
      <button
        onClick={goBack}
        className="flex justify-center items-center bg-white border border-gray-200 px-4 py-2 gap-2 rounded-md text-gray-600 font-medium"
      >
        <MdKeyboardArrowLeft /> Back
      </button>
      <section className="mt-12 mb-12">
        <div className="space-y-6">
          <img className="w-full rounded-2xl" src={image} alt="blog Cover" />
          <p className="text-gray-600 text-base">{postDate}</p>
          <h2 className="text-gray-900 text-[32px] font-semibold md:text-5xl md:font-medium">
            {title}
          </h2>
          <p className="text-gray-900 font-medium text-lg">{description}</p>
        </div>
        <div className="mt-16">
          <h3 className="text-5xl font-semibold text-gray-900">
            Related products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {blogdata
              .slice(0, 3)
              .map(({ image, title, postDate, author, id }) => (
                <Link to={`/blogsDetails/${id}`} className="w-full space-y-3">
                  <img
                    className="max-h-60 h-full rounded-2xl mb-10"
                    src={image}
                    alt=""
                  />
                  <h3 className="text-xl font-medium text-gray-900">{title}</h3>
                  <p className="text-base font-medium text-gray-600">
                    {postDate} <span>{author}</span>
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailsPage;
