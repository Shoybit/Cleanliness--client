import { createBrowserRouter } from "react-router";
import Navbar from "../Components/Navbar";
import MinLayout from "../Layout/MinLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import IssueDetails from "../Pages/IssueDetails";
import PrivateRoute from "./PrivateRoute";
import AllIssues from "../Pages/AllIssues";
import AddIssue from "../Pages/dashboard/AddIssue";
import MyIssues from "../Pages/dashboard/MyIssues";
import MyContribution from "../Pages/MyContribution";
import Error from "../Components/Error";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardOverview from "../Pages/dashboard/overview/DashboardOverview";
import Profile from "../Pages/dashboard/overview/user/Profile";
import AdminRoute from "./AdminRoute";
import ManageUsers from "../Pages/dashboard/overview/admin/ManageUsers";

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
        {
        path: "/my-contribution",
        element: (
          <PrivateRoute>
            <MyContribution></MyContribution>
          </PrivateRoute>
        ),
      },
        {
        path: "/my-issues",
        element: (
          <PrivateRoute>
            <MyIssues></MyIssues>
          </PrivateRoute>
        ),
      },
        {
        path: "/*",
        element: <Error></Error>
      },
    ]
    
    
  },

{
  path: "/dashboard",
  element: (
    <PrivateRoute>
      <DashboardLayout />
    </PrivateRoute>
  ),
  children: [
    { index: true, element: <DashboardOverview /> },
    { path: "add-issue", element: <AddIssue /> },
    { path: "my-issues", element: <MyIssues /> },
    {
      path: "manage-users",
      element: (
        <AdminRoute>
          <ManageUsers />
        </AdminRoute>
      ),
    },
  ],
}



]);