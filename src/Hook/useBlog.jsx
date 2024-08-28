import { useEffect, useState } from "react";

const useBlog = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch("/blogData.json")
      .then((res) => res.json())
      .then((data) => setBlogData(data));
  }, [setBlogData]);

  return blogData;
};

export default useBlog;
