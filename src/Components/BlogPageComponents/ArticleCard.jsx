import { Link } from "react-router-dom";

const ArticleCard = ({ title, postDate, image, author, description,id }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center  md:justify-between gap-10 mb-16">
     <div className="flex-1  rounded-lg ">
     <img className="md:max-w-[384px] md:max-h-[240px]  border-slate-300 rounded-lg border-[7px]" src={image} alt="Article Image" />
     </div>
      <Link to={`/blogsDetails/${id}`} className="flex-[3] space-y-3">
        <h3 className="text-xl font-medium text-gray-900">{title}</h3>
        <p className="text-base text-gray-600 font-medium ">
          {postDate} . <span className="text-primary text-base font-normal pl-2">{author}</span>
        </p>
        <p className="text-lg font-normal text-gray-900">{description.slice(0,142)}...</p>
      </Link>
    </div>
  );
};

export default ArticleCard;
