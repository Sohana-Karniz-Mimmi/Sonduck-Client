import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ProductDetails from "../Pages/ProductDetails";
// import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <ProductDetails></ProductDetails>,
      },
    ]
  }
]);

export default router;