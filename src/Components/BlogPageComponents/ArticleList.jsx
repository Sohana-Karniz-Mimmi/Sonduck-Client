import React from "react";
import ArticleCard from "./ArticleCard";
import Pagination from "./Pagination";
import useBlog from "../../Hook/useBlog";

const ArticleList = () => {
  const blogData = useBlog();
  return (
    <div className="mt-16 flex-[3]">
      {blogData?.map((article, idx) => (
        <ArticleCard
          key={idx}
          title={article.title}
          id={article.id}
          image={article.image}
          author={article.author}
          postDate={article.postDate}
          description={article.description}
        ></ArticleCard>
      ))}
      {/* TODO: give them original pagination data */}

      <Pagination></Pagination>
    </div>
  );
};

export default ArticleList;
