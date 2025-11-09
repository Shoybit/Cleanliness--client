import { createBrowserRouter } from "react-router";
import Navbar from "../Components/Navbar";
import MinLayout from "../Layout/MinLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import IssueDetails from "../Pages/IssueDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MinLayout></MinLayout>,
    children: [
        {
        index: true,
        element: <Home></Home>
        },
        {
        path: "/login",
        element: <Login></Login>,
      },
         {
        path: "/register",
        element: <Register></Register>
      },
        {
        path: "/issue-details/:id",
        element: (
          <PrivateRoute>
            <IssueDetails></IssueDetails>
          </PrivateRoute>
        ),
      },
    ]
  },
]);