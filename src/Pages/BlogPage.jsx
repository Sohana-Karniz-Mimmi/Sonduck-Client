import ArticleList from "../Components/BlogPageComponents/ArticleList";
import Heading from "../Components/BlogPageComponents/Heading";
import RecentPost from "../Components/BlogPageComponents/RecentPost";
import Sidebar from "../Components/BlogPageComponents/Sidebar";

const BlogPage = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-24 mb-24 px-4">
      <Heading />
      <div className="flex justify-between gap-16 flex-col-reverse lg:flex-row">
        <ArticleList />
        <Sidebar />
      </div>
      <div className="lg:hidden">
        <RecentPost />

      </div>
      <h3 className="text-6xl font-bold text-red-500">this is the test purpose code </h3>
    </div>
  );
};

export default BlogPage;
