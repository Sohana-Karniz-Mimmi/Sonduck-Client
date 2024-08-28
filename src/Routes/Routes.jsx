import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
// import ProductDetails from "../Pages/ProductDetails";
import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/product_details",
        element: <ProductDetails/>
      },
    ]
  }
]);

export default router;