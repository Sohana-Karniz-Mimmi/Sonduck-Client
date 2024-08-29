import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
// import ProductDetails from "../Pages/ProductDetails";
import Home from "../Pages/Home";
import BlogPage from "../Pages/BlogPage";
import BlogDetailsPage from "../Pages/BlogDetailsPage";
import SubscriptionPage from "../Pages/SubscriptionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/blogs",
        element: <BlogPage />,
      },
      {
        path: "/blogsDetails/:id",
        element: <BlogDetailsPage />,
        loader: ({ params }) =>
          fetch(`/blogData.json`)
            .then((response) => response.json())
            .then((data) => {
              return data.find((blog) => blog.id == params.id);
            }),
      },
      {
        path: "/subscription",
        element: <SubscriptionPage />,
      },
    ],
  },
]);

export default router;
