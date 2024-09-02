import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetails";
import BlogPage from "../Pages/BlogPage";
import BlogDetailsPage from "../Pages/BlogDetailsPage";
import SubscriptionPage from "../Pages/SubscriptionPage";
import Store from "../Pages/Store/Store";
import FAQs from "../Pages/FAQs";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product_details",
        element: <ProductDetails />,
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
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/faqs",
        element: <FAQs></FAQs>,
      },
    ],
  },
]);

export default router;
