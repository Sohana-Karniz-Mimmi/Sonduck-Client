import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@material-tailwind/react";
import { QueryClient, QueryClientProvider,} from '@tanstack/react-query'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
          <QueryClientProvider client={new QueryClient()}>
            <RouterProvider router={router} />
            <Toaster />
          </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
