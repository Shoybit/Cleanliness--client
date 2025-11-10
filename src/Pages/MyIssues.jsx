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
      <p>Total Issues: {issues.length}</p>
    </div>
  );
};

export default MyIssues;