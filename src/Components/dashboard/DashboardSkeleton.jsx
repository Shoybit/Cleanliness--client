const DashboardSkeleton = () => {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-28 bg-gray-200 rounded-lg" />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-80 bg-gray-200 rounded-lg" />
        <div className="h-80 bg-gray-200 rounded-lg" />
      </div>

      {/* Table */}
      <div className="h-60 bg-gray-200 rounded-lg" />
    </div>
  );
};

export default DashboardSkeleton;
