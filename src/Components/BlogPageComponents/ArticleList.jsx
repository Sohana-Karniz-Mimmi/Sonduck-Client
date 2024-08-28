import React from "react";
import ArticleCard from "./ArticleCard";
import Pagination from "./Pagination";

const ArticleList = () => {
  const has = 4;
  // this is the data of blog post
  // TODO: After getting blog api, replace it to fetching data
  const data = [
    {
      title: "Make Powerful Motion Graphics in After Effects",
      postDate: "Sep 31 , 2023",
      author: "Erin Bator",
      description:
        "Consider your needs. What are your biggest financial risks? What would happen if you lost your job, got sick, or had a car accident? Once you know your biggest risks, you can start to think about what kind of Motion Graphic you need. Do your research. There are many different types of Motion Graphic available, and each one has its own pros and cons. It's important to do your research and understand the different options before you make a decision. Get quotes from multiple companies. Once you know what kind of Motion Graphic you need, get quotes from multiple companies. This will help you compare prices and coverage. Read the fine print. Before you sign any Motion Graphic policy, be sure to read the fine print. This is where you'll find information about things like deductibles, copays, and exclusions. Ask questions. If you have any questions about Motion Graphic, don't be afraid to ask your Motion Graphic agent. They should be able to answer all of your questions and help you choose the right policy for you.",
      image:
        "https://i.ytimg.com/vi/Ci3J2Fk29gk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCj6IidoVJ7LqQgp-jmykQMtBIYPg",
    },
    {
      title: "Make Powerful Motion Graphics in After Effects",
      postDate: "Sep 31 , 2023",
      author: "Erin Bator",
      description:
        "Consider your needs. What are your biggest financial risks? What would happen if you lost your job, got sick, or had a car accident? Once you know your biggest risks, you can start to think about what kind of Motion Graphic you need. Do your research. There are many different types of Motion Graphic available, and each one has its own pros and cons. It's important to do your research and understand the different options before you make a decision. Get quotes from multiple companies. Once you know what kind of Motion Graphic you need, get quotes from multiple companies. This will help you compare prices and coverage. Read the fine print. Before you sign any Motion Graphic policy, be sure to read the fine print. This is where you'll find information about things like deductibles, copays, and exclusions. Ask questions. If you have any questions about Motion Graphic, don't be afraid to ask your Motion Graphic agent. They should be able to answer all of your questions and help you choose the right policy for you.",
      image:
        "https://i.ytimg.com/vi/GUAz8Qf7sqM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCmw82f1rwlOBnzl5_NRrATkt-4Ew",
    },
  ];
  return (
    <div className="mt-16 flex-[3]">
      {data.map((article, idx) => (
        <ArticleCard
          key={idx}
          title={article.title}
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
