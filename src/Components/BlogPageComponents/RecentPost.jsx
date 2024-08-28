import React from "react";

const RecentPost = ({ date, title }) => {
  // this data for recent blog post
  // TODO: After getting blog api, replace it to fetching data
  const recentPost = [
    {
      date: "22/06/2023",
      title: "The 10 Most Popular Title Animations in After Effects",
    },
    {
      date: "22/06/2023",
      title: "Create Cinematic Visuals in After Effects",
    },
    {
      date: "22/06/2023",
      title: "Bounce Expression",
    },
  ];
  return (
    <div>
      {/* this div for recent post card  */}
      <h2 className="text-xl font-medium text-gray-900 mt-8">Recent Post</h2>
      {recentPost.map((post, idx) => (
        <div className="border-b py-5 space-y-2">
          <p className="text-base text-gray-600">{post.date}</p>
          <h3 className="text-lg text-gray-900 font-medium">{post.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default RecentPost;
