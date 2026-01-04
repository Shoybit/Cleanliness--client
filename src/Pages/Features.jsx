const Features = () => {
  const features = [
    { icon: "🧹", title: "Community Reporting", desc: "Report cleanliness issues easily." },
    { icon: "📊", title: "Real-time Tracking", desc: "Track issue status transparently." },
    { icon: "✅", title: "Admin Verification", desc: "Verified admins ensure trust." },
    { icon: "🌍", title: "Cleaner Cities", desc: "Together we build cleaner communities." },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-10/12 mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Cleanliness?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
