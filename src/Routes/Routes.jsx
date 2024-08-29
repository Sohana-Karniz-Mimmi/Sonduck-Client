import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Subscription from "../Pages/Subscription/Subscription";

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
        path: "/subcription",
        element: <Subscription />,
      },
    ]
  }
]);

export default router;