import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const MyContribution = () => {
  const { user } = useContext(AuthContext);
  const [contributions, setContributions] = useState([]);

  const fetchContributions = async () => {
    if (!user?.email) return;
    try {
      const [conRes, issueRes] = await Promise.all([
        fetch(`http://localhost:3000/contributions?email=${user.email}`),
        fetch(`http://localhost:3000/all-api`)
      ]);

      const contributions = await conRes.json();
      const issues = await issueRes.json();

      const merged = contributions.map(c => {
        const issue = issues.find(i => i._id === c.issueId);
        return {
          ...c,
          title: issue?.title || "Unknown Issue",
          category: issue?.category || "Unknown Category"
        };
      });

      setContributions(merged);
    } catch (err) {
      console.error("Error fetching contributions:", err);
    }
  };

  useEffect(() => {
    fetchContributions();
  }, [user]);

  const downloadPDF = () => {
    if (contributions.length === 0) return;

    const doc = new jsPDF();
    doc.text("My Contribution Report", 14, 20);

    const tableColumn = ["Issue Title", "Category", "Paid Amount", "Date"];
    const tableRows = contributions.map(c => [
      c.title,
      c.category,
      `$${c.amount}`,
      new Date(c.date).toLocaleDateString()
    ]);

    autoTable(doc, {
      startY: 30,
      head: [tableColumn],
      body: tableRows,
    });

    doc.save(`contributions_${user.email}.pdf`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900">My Contributions</h1>
      <button onClick={downloadPDF}>Download Report</button>
      <p>Total Contributions: {contributions.length}</p>
    </div>
  );
};

export default MyContribution;