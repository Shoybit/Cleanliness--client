import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert("Message sent successfully (demo)");
      setLoading(false);
      e.target.reset();
    }, 1000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-gray-600">
            Have questions, suggestions, or feedback? Feel free to contact us.
          </p>

          <div className="text-gray-600">
            <p><strong>Email:</strong> shoyaib105@gmail.com</p>
            <p><strong>Phone:</strong> +8801743870639</p>
            <p><strong>Address:</strong> Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4"
        >
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1">Message</label>
            <textarea
              rows="4"
              required
              className="w-full border px-3 py-2 rounded"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;