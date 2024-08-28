import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const BlogDetailsPage = () => {
  const navigate = useNavigate();


  const realtedBlogData = [
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

  const singleBlogData = [
    {
      title: "Make Powerful Motion Graphics in After Effects",
      postDate: "Sep 31 , 2023",
      author: "Erin Bator",
      description:
        "Consider your needs. What are your biggest financial risks? What would happen if you lost your job, got sick, or had a car accident? Once you know your biggest risks, you can start to think about what kind of Motion Graphic you need. Do your research. There are many different types of Motion Graphic available, and each one has its own pros and cons. It's important to do your research and understand the different options before you make a decision. Get quotes from multiple companies. Once you know what kind of Motion Graphic you need, get quotes from multiple companies. This will help you compare prices and coverage. Read the fine print. Before you sign any Motion Graphic policy, be sure to read the fine print. This is where you'll find information about things like deductibles, copays, and exclusions. Ask questions. If you have any questions about Motion Graphic, don't be afraid to ask your Motion Graphic agent. They should be able to answer all of your questions and help you choose the right policy for you.",
      image:
        "https://i.ytimg.com/vi/Ci3J2Fk29gk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCj6IidoVJ7LqQgp-jmykQMtBIYPg",
    },
  ];

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
        {singleBlogData.map(({ image, postDate, title, description }) => (
          <>
            <div  className="space-y-6">
              <img
                className="w-full rounded-2xl"
                src={image}
                alt="blog Cover"
              />
              <p className="text-gray-600 text-base">{postDate}</p>
              <h2 className="text-gray-900 text-[32px] font-semibold md:text-5xl md:font-medium">{title}</h2>
              <p className="text-gray-900 font-medium text-lg">{description}</p>
            </div>
          </>
        ))}
        <div className="mt-16">
            <h3 className="text-5xl font-semibold text-gray-900">Related products</h3>
            <div>
                 
            </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailsPage;
