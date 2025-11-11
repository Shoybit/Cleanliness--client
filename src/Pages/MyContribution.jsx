import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { FaExclamationTriangle, FaCalendarAlt, FaCheck, FaDownload } from "react-icons/fa";

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
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <h1 className="text-3xl font-bold text-gray-900">
            My Contributions
          </h1>
          <p className="text-gray-600 mt-2">
            Total Contributions: {contributions.length}
          </p>
        </div>
        
        {contributions.length > 0 && (
          <div className="flex justify-center lg:justify-end">
            <button
              onClick={downloadPDF}
              className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full lg:w-auto justify-center"
            >
              <FaDownload className="w-5 h-5" />
              Download Report
            </button>
          </div>
        )}
      </div>

      {contributions.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
          <FaExclamationTriangle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No contributions yet</h3>
          <p className="text-gray-500 max-w-md mx-auto">
            You haven't made any contributions yet. Start supporting causes you care about!
          </p>
        </div>
      ) : (
        <div className="grid gap-4 mb-8">
          {contributions.map(c => (
            <div key={c._id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 pr-4">
                      {c.title}
                    </h3>
                    <span className="text-2xl font-bold text-green-600 whitespace-nowrap">
                      ${c.amount}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${(c.category)}`}>
                      {c.category}
                    </span>
                    <span className="inline-flex items-center text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                      <FaCalendarAlt className="w-4 h-4 mr-1" />
                      {new Date(c.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-end lg:justify-start">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-50 text-green-700 border border-green-200">
                    Contribution Completed
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyContribution;