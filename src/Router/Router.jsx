import { createBrowserRouter } from "react-router";

// Layouts
import MinLayout from "../Layout/MinLayout";
import DashboardLayout from "../Layout/DashboardLayout";

// Public Pages
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllIssues from "../Pages/AllIssues";
import IssueDetails from "../Pages/IssueDetails";

// Dashboard Pages


// Route Guards
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

// Error
import Error from "../Components/Error";
import AddIssue from "../Pages/dashboard/overview/user/AddIssue";
import MyIssues from "../Pages/dashboard/overview/user/MyIssues";
import MyContribution from "../Pages/dashboard/overview/user/MyContribution";
import Profile from "../Pages/dashboard/overview/user/Profile";
import DashboardOverview from "../Pages/dashboard/overview/DashboardOverview";
import ManageUsers from "../Pages/dashboard/overview/admin/ManageUsers";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MinLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "all-issues", element: <AllIssues /> },
      { path: "/about",element: <About/>},
      { path: "/contact",element: <Contact/>},
      {
        path: "issue-details/:id",
        element: (
          <>
            <IssueDetails />
          </>
        ),
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout/>
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <DashboardOverview/> },

      // User routes
      { path: "add-issue", element: <AddIssue/> },
      { path: "my-issues", element: <MyIssues/> },
      { path: "my-contribution", element: <MyContribution/> },
      { path: "profile", element: <Profile/> },

      // Admin route
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers/>
          </AdminRoute>
        ),
      },
    ],
  },
]);
