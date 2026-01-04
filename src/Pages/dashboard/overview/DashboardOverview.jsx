import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import DashboardSkeleton from "../../../Components/dashboard/DashboardSkeleton";

const DashboardOverview = () => {
  const [stats, setStats] = useState(null);
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:3000/dashboard/stats").then(res => res.json()),
      fetch("http://localhost:3000/all-api").then(res => res.json()),
    ])
      .then(([statsData, issuesData]) => {
        setStats(statsData);
        setIssues(issuesData.slice(0, 5));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <DashboardSkeleton />;
  }

  // Safe chart data
  const barData = stats?.byCategory?.length
    ? stats.byCategory
    : [];

  const pieData = [
    { name: "Pending", value: stats?.pending || 0 },
    { name: "Resolved", value: stats?.resolved || 0 },
  ];

  const COLORS = ["#f59e0b", "#10b981"];

  return (
    <div className="space-y-4 p-3 sm:p-4 md:p-6">
      {/* Overview Cards - Mobile Responsive */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-4 sm:p-5 md:p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="min-w-0">
              <h3 className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium truncate">Total Issues</h3>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2 dark:text-white truncate">{stats?.total || 0}</p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 ml-2 sm:ml-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-4 sm:p-5 md:p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="min-w-0">
              <h3 className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium truncate">Pending Issues</h3>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2 text-yellow-600 dark:text-yellow-500 truncate">{stats?.pending || 0}</p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center flex-shrink-0 ml-2 sm:ml-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-4 sm:p-5 md:p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 xs:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between">
            <div className="min-w-0">
              <h3 className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium truncate">Resolved Issues</h3>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2 text-green-600 dark:text-green-500 truncate">{stats?.resolved || 0}</p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 ml-2 sm:ml-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Charts - Mobile Responsive */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Bar Chart */}
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-4 sm:p-5 md:p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 space-y-2 sm:space-y-0">
            <h3 className="font-semibold text-base sm:text-lg dark:text-white">Issues by Category</h3>
            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Total: {stats?.total || 0}
            </span>
          </div>
          <div className="h-56 sm:h-64 md:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={barData} 
                margin={{ 
                  top: 10, 
                  right: 0, 
                  left: -15, 
                  bottom: 40 
                }}
              >
                <XAxis 
                  dataKey="category" 
                  angle={-45} 
                  textAnchor="end" 
                  height={60}
                  tick={{ fontSize: 10 }}
                  interval={0}
                />
                <YAxis 
                  tick={{ fontSize: 10 }} 
                  width={25}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    fontSize: '12px',
                    padding: '8px'
                  }}
                />
                <Bar 
                  dataKey="count" 
                  fill="#3b82f6" 
                  radius={[4, 4, 0, 0]}
                  animationDuration={1500}
                  barSize={30}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-4 sm:p-5 md:p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 space-y-2 sm:space-y-0">
            <h3 className="font-semibold text-base sm:text-lg dark:text-white">Issue Status</h3>
            <div className="flex flex-wrap gap-2 sm:gap-4">
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Pending</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Resolved</span>
              </div>
            </div>
          </div>
          <div className="h-56 sm:h-64 md:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  innerRadius={30}
                  label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {pieData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index]} strokeWidth={1} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [value, 'Count']}
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    fontSize: '12px',
                    padding: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Issues - Mobile Responsive */}
      <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-4 sm:p-5 md:p-6 border-b border-gray-100 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
            <div>
              <h3 className="font-semibold text-base sm:text-lg dark:text-white">Recent Issues</h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">Latest 5 reported issues</p>
            </div>
            <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Showing {issues.length} issues
            </div>
          </div>
        </div>
        <div className="overflow-x-auto -mx-2 sm:mx-0">
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-100 dark:divide-gray-700">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-700/50">
                    <th className="py-3 px-3 sm:px-4 md:px-6 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">Title</th>
                    <th className="py-3 px-3 sm:px-4 md:px-6 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider hidden sm:table-cell">Status</th>
                    <th className="py-3 px-3 sm:px-4 md:px-6 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">Category</th>
                    <th className="py-3 px-3 sm:px-4 md:px-6 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider hidden xs:table-cell">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {issues.map(issue => (
                    <tr key={issue._id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                      <td className="py-3 px-3 sm:px-4 md:px-6">
                        <div className="flex items-center">
                          <div className="ml-0">
                            <div className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate max-w-[150px] sm:max-w-xs">
                              {issue.title}
                            </div>
                            <div className="sm:hidden mt-1">
                              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                                issue.status === 'pending' 
                                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                                  : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                              }`}>
                                {issue.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3 sm:px-4 md:px-6 whitespace-nowrap hidden sm:table-cell">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          issue.status === 'pending' 
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                            : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        }`}>
                          {issue.status}
                        </span>
                      </td>
                      <td className="py-3 px-3 sm:px-4 md:px-6 whitespace-nowrap text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                        <span className="inline-block px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800">
                          {issue.category}
                        </span>
                      </td>
                      <td className="py-3 px-3 sm:px-4 md:px-6 whitespace-nowrap text-xs sm:text-sm text-gray-600 dark:text-gray-300 hidden xs:table-cell">
                        {issue.created_at?.slice(0, 10)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {issues.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400 text-sm">No issues found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardOverview;