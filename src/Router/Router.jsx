import { createBrowserRouter } from "react-router";
import Navbar from "../Components/Navbar";
import MinLayout from "../Layout/MinLayout";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MinLayout></MinLayout>,
    children: [
        {
        index: true,
        element: <Home></Home>
        },
    ]
  },
]);