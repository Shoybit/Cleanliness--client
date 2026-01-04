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

const DashboardOverview = () => {
  const [stats, setStats] = useState(null);
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔗 Backend API call (replace URL with your backend)
  useEffect(() => {
    Promise.all([
      fetch("https://your-backend-url.com/dashboard/stats").then((res) =>
        res.json()
      ),
      fetch("https://your-backend-url.com/issues?limit=5").then((res) =>
        res.json()
      ),
    ])
      .then(([statsData, issuesData]) => {
        setStats(statsData);
        setIssues(issuesData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading dashboard...</div>;
  }

  // Chart Data
  const statusData = [
    { name: "Pending", value: stats?.pending || 0 },
    { name: "Resolved", value: stats?.resolved || 0 },
  ];

  const COLORS = ["#f59e0b", "#10b981"];

  return (
    <div className="space-y-8">
      {/* ===== Overview Cards ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-gray-500">Total Issues</h3>
          <p className="text-3xl font-bold">{stats?.total}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-gray-500">Pending Issues</h3>
          <p className="text-3xl font-bold text-yellow-500">
            {stats?.pending}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-gray-500">Resolved Issues</h3>
          <p className="text-3xl font-bold text-green-500">
            {stats?.resolved}
          </p>
        </div>
      </div>

      {/* ===== Charts ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow h-80">
          <h3 className="mb-4 font-semibold">Issues by Category</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stats?.byCategory || []}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow h-80">
          <h3 className="mb-4 font-semibold">Issue Status</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {statusData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ===== Recent Issues Table ===== */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="mb-4 font-semibold">Recent Issues</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2">Title</th>
                <th>Status</th>
                <th>Category</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((issue) => (
                <tr key={issue._id} className="border-b">
                  <td className="py-2">{issue.title}</td>
                  <td>{issue.status}</td>
                  <td>{issue.category}</td>
                  <td>{issue.createdAt?.slice(0, 10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
