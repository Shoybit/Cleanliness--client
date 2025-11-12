import React, { useEffect, useState } from "react";
import { Link, } from "react-router";
import { FaMapMarkerAlt, FaCalendarAlt, FaEye, FaTrashAlt, FaRecycle, FaLeaf } from "react-icons/fa";

const LatestCleans = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetch("https://cleanliness-server.vercel.app/letest-cleans")
      .then((res) => res.json())
      .then((data) => setIssues(data))
      .catch((err) => console.error(err));
  }, []);

  const getCategoryInformation = (category) => {
    switch (category?.toLowerCase()) {
      case 'plastic':
        return { icon: FaRecycle, color: 'bg-blue-100 text-blue-600', border: 'border-blue-200' };
      case 'garbage':
        return { icon: FaTrashAlt, color: 'bg-red-100 text-red-600', border: 'border-red-200' };
      case 'recycling':
        return { icon: FaRecycle, color: 'bg-green-100 text-green-600', border: 'border-green-200' };
      default:
        return { icon: FaTrashAlt, color: 'bg-gray-100 text-gray-600', border: 'border-gray-200' };
    }
  };

  return (
    <div className="max-w-10/12 mx-auto px-4 sm:px-6 lg:px-8 py-12">

<div className="text-center mb-12">
  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
      <FaLeaf className="w-6 h-6 text-green-600" />
    </div>
    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 sm:mt-0 dark:text-white">
      Latest Cleanup Activities
    </h1>
  </div>
  <p className="text-[16px] text-gray-600 max-w-3xl mx-auto dark:text-gray-400">
    Discover recent community efforts and ongoing cleanup initiatives in your area
  </p>
</div>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {issues.map((issue) => {
          const { icon: CategoryIcon, color, border } = getCategoryInformation(issue.category);
          
          return (
            <div
              key={issue.id || issue._id}
              className="bg-white rounded-2xl shadow-lg dark:bg-gray-800 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group flex flex-col"
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
                
                <div className={`absolute top-4 left-4 ${color} ${border} px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2 backdrop-blur-sm`}>
                  <CategoryIcon className="w-3 h-3" />
                  {issue.category || 'General'}
                </div>

              </div>

              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 dark:text-white group-hover:text-green-600 transition-colors">
                  {issue.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed flex-1 dark:text-gray-400">
                  {issue.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                    <FaMapMarkerAlt className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{issue.location || 'Location not specified'}</span>
                  </div>

                  {issue.date && (
                    <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                      <FaCalendarAlt className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">{new Date(issue.date).toLocaleDateString()}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-4 text-sm text-gray-500 ">
                    {issue.volunteers && (
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>{issue.volunteers} volunteers</span>
                      </div>
                    )}
                    {issue.views && (
                      <div className="flex items-center gap-1">
                        <FaEye className="w-3 h-3" />
                        <span>{issue.views} views</span>
                      </div>
                    )}
                  </div>
                </div>

         

                <div className="mt-auto pt-4">
                  <Link to={`issue-details/${issue._id}`}
                    // onClick={() => navigate(`/issues/${issue.id || issue._id}`)}
                    className=" btn w-full h-[45px] bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform"
                  >
                    <span>View Details</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default LatestCleans;