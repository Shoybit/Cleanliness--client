import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const MyIssues = () => {
  const { user } = useContext(AuthContext);
  const [issues, setIssues] = useState([]);

  const fetchIssues = async () => {
    if (!user?.email) return;
    try {
      const res = await fetch(`http://localhost:3000/my-issues?userEmail=${user.email}`);
      const data = await res.json();
      setIssues(Array.isArray(data) ? data : []);
    } catch {
      console.error("Failed to load issues");
    }
  };

  useEffect(() => {
    fetchIssues();
  }, [user]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-green-700">
        My Issues
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-2xl border border-gray-200 bg-white">
        <table className="w-full border-collapse">
          <thead className="bg-green-100 text-green-800">
            <tr>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Location</th>
              <th className="px-4 py-3 text-left">Amount</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {issues.length > 0 ? (
              issues.map((issue,) => (
                <tr
                  key={issue._id}
                  className={`border-b hover:bg-green-50 transition`}
                >
                  <td className="px-4 py-3 font-semibold">{issue.title}</td>
                  <td className="px-4 py-3">{issue.category}</td>
                  <td className="px-4 py-3">{issue.location}</td>
                  <td className="px-4 py-3 text-green-700 font-medium">
                    ${issue.amount || 0}
                  </td>
                  <td
                    className={`px-4 py-3 font-semibold ${
                      issue.status === "ongoing"
                        ? "text-yellow-600"
                        : "text-green-600"
                    }`}
                  >
                    {issue.status}
                  </td>
                  <td className="px-4 py-3 text-center space-x-3">
                    Actions
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No issues found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyIssues;