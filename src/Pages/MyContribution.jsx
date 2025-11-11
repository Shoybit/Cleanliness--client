import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const MyContribution = () => {
  const { user } = useContext(AuthContext);
  const [contributions, setContributions] = useState([]);

  const fetchContributions = async () => {
    if (!user?.email) return;
    try {
      const res = await fetch(`http://localhost:3000/contributions?email=${user.email}`);
      const data = await res.json();
      setContributions(data);
    } catch (err) {
      console.error("Error fetching contributions:", err);
    }
  };

  useEffect(() => {
    fetchContributions();
  }, [user]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900">My Contributions</h1>
      <p>Total Contributions: {contributions.length}</p>
    </div>
  );
};

export default MyContribution;