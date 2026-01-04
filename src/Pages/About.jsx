const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">
      
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Cleanliness</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Cleanliness is a community-driven platform designed to help citizens
          report, track, and resolve cleanliness issues in their local areas.
        </p>
      </div>

      {/* Mission */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to empower people to take responsibility for their
            surroundings and work together with authorities to keep cities
            clean, healthy, and sustainable.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Why This Platform?</h2>
          <p className="text-gray-600">
            Traditional complaint systems are slow and inefficient. Cleanliness
            provides a transparent and digital solution where issues are visible,
            trackable, and manageable in real time.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold mb-2">Community First</h3>
          <p className="text-gray-600 text-sm">
            Citizens play the most important role in reporting and monitoring
            issues.
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold mb-2">Transparency</h3>
          <p className="text-gray-600 text-sm">
            Every issue is publicly visible and trackable until resolved.
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold mb-2">Sustainability</h3>
          <p className="text-gray-600 text-sm">
            Clean environments lead to healthier and more sustainable cities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
