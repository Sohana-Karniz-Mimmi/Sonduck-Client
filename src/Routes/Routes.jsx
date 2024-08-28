import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import { element } from "prop-types";
import BlogPage from "../Pages/BlogPage";
import BlogDetailsPage from "../Pages/BlogDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <BlogPage />,
      },
      {
        path: "/blogsDetails/:id",
        element: <BlogDetailsPage/>,
        // TODO: give here single products api to fetch data
        loader: ({ params }) =>
  fetch(`/blogData.json`)
    .then((response) => response.json())
    .then((data) => {
      return data.find(blog => blog.id == params.id);
    }),
      }
    ],
  },
]);

export default router;
