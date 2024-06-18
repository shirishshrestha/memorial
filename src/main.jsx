import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Image, Video } from "./ui/pages";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/images",
    element: <Image />,
  },
  {
    path: "/videos",
    element: <Video />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
