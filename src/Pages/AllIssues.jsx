import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { 
  FaMapMarkerAlt, FaCalendarAlt, FaEye, FaTrashAlt, FaRecycle, 
  FaClipboardList, FaDollarSign, FaWrench 
} from "react-icons/fa";

const AllIssues = () => {
  const [issues, setIssues] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/all-api")
      .then((res) => res.json())
      .then((data) => setIssues(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredIssues = issues.filter((issue) => {
    const categoryMatch =
      selectedCategory === "" ||
      issue.category?.toLowerCase() === selectedCategory.toLowerCase();

    const statusMatch =
      selectedStatus === "" ||
      issue.status?.toLowerCase() === selectedStatus.toLowerCase();

    return categoryMatch && statusMatch;
  });

  const getCategoryInformation = (category) => {
    switch (category?.toLowerCase()) {
      case "garbage":
        return { icon: FaTrashAlt, color: "bg-red-100 text-red-600", border: "border-red-200" };
      case "road damage":
        return { icon: FaWrench, color: "bg-yellow-100 text-yellow-600", border: "border-yellow-200" };
      case "broken public property":
        return { icon: FaRecycle, color: "bg-orange-100 text-orange-600", border: "border-orange-200" };
      case "illegal construction":
        return { icon: FaRecycle, color: "bg-purple-100 text-purple-600", border: "border-purple-200" };
      default:
        return { icon: FaRecycle, color: "bg-gray-100 text-gray-600", border: "border-gray-200" };
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <FaClipboardList className="w-6 h-6 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">All Issues</h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse and filter environmental issues by category and status.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center">

        <select
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Garbage">Garbage</option>
          <option value="Road Damage">Road Damage</option>
          <option value="Broken Public Property">Broken Public Property</option>
          <option value="Illegal Construction">Illegal Construction</option>
        </select>


        <select
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
        </select>
      </div>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredIssues.length > 0 ? (
          filteredIssues.map((issue) => {
            const { icon: CategoryIcon, color, border } = getCategoryInformation(issue.category);

            return (
              <div
                key={issue._id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group flex flex-col"
              >

                <div className="relative overflow-hidden">
                  {issue.image ? (
                    <img
                      src={issue.image}
                      alt={issue.title}
                      className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="h-48 w-full bg-linear-to-br from-green-400 to-blue-500 flex items-center justify-center">
                      <FaRecycle className="w-16 h-16 text-white opacity-80" />
                    </div>
                  )}
                  <div
                    className={`absolute top-4 left-4 ${color} ${border} px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2 backdrop-blur-sm`}
                  >
                    <CategoryIcon className="w-3 h-3" />
                    {issue.category || "General"}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {issue.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed flex-1">
                    {issue.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-3 text-gray-500">
                      <FaMapMarkerAlt className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{issue.location}</span>
                    </div>

                    {issue.date && (
                      <div className="flex items-center gap-3 text-gray-500">
                        <FaCalendarAlt className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">
                          {new Date(issue.date).toLocaleDateString()}
                        </span>
                      </div>
                    )}

                    {issue.amount && (
                      <div className="flex items-center gap-3 text-gray-500">
                        <FaDollarSign className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-semibold">
                          Budget: ${issue.amount}
                        </span>
                      </div>
                    )}

                    {issue.status && (
                      <div className="flex items-center gap-3 text-gray-500">
                        <FaClipboardList className="w-4 h-4 text-purple-500" />
                        <span className="text-sm font-semibold">
                          Status: {issue.status}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="mt-auto pt-4">
                    <Link
                      to={`/issue-details/${issue._id}`}
                      className="btn w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 border-none"
                    >
                      See Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No issues found for this filter.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllIssues;
