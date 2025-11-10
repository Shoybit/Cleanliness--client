import { createBrowserRouter } from "react-router";
import Navbar from "../Components/Navbar";
import MinLayout from "../Layout/MinLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import IssueDetails from "../Pages/IssueDetails";
import PrivateRoute from "./PrivateRoute";
import AllIssues from "../Pages/AllIssues";
import AddIssue from "../Pages/AddIssue";

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
        path: "/all-issues",
        element: <AllIssues></AllIssues>
      },
        {
        path: "/issue-details/:id",
        element: (
          <PrivateRoute>
            <IssueDetails></IssueDetails>
          </PrivateRoute>
        ),
      },
        {
        path: "/addissue",
        element: (
          <PrivateRoute>
            <AddIssue></AddIssue>
          </PrivateRoute>
        ),
      },
    ]
  },
]);