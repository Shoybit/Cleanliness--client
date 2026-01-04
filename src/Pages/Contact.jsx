import { useState } from "react";
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Loader2, 
  User, 
  MessageSquare,
  XIcon,
  Linkedin,
  Github,
  Globe,
  Clock,
  ThumbsUp,
  Users
} from "lucide-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success message
    const successEvent = new CustomEvent('notify', {
      detail: { 
        message: 'Message sent successfully!', 
        type: 'success' 
      }
    });
    window.dispatchEvent(successEvent);
    
    setLoading(false);
    setFormData({ name: "", email: "", message: "" });
  };

const socialLinks = [

{
  label: "X",
  icon: XIcon, 
  url: "https://x.com/shoybit", 
  color: "hover:bg-black/5 dark:hover:bg-white/10",
  textColor: "text-black dark:text-white"
},
  {
    label: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/shoyaib-islam1/", 
    color: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
    textColor: "text-blue-700 dark:text-blue-300"
  },
  {
    label: "GitHub",
    icon: Github,
    url: "https://github.com/shoybit", 
    color: "hover:bg-gray-50 dark:hover:bg-gray-800",
    textColor: "text-gray-700 dark:text-gray-300"
  },
  {
    label: "Website",
    icon: Globe,
    url: "https://portfolio-sandy-psi-62.vercel.app/", 
    color: "hover:bg-green-50 dark:hover:bg-green-900/20",
    textColor: "text-green-600 dark:text-green-400"
  },
];
  const stats = [
    { icon: Clock, label: "Response Time", value: "< 24h", color: "text-blue-600 dark:text-blue-400" },
    { icon: ThumbsUp, label: "Success Rate", value: "99%", color: "text-green-600 dark:text-green-400" },
    { icon: Users, label: "Happy Clients", value: "500+", color: "text-purple-600 dark:text-purple-400" },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-10/12 mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
            <MessageSquare className="w-8 h-8 md:w-10 md:h-10 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
            Have questions or want to work together? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-10">
          
          {/* Contact Info Section */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-gray-700/50 h-full">
              <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                  <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-green-600 dark:text-green-400" />
                </div>
                <span>Contact Information</span>
              </h2>
              
              <div className="space-y-4 md:space-y-6">
                {/* Email */}
                <a 
                  href="mailto:shoyaib105@gmail.com"
                  className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 group"
                >
                  <div className="bg-green-50 dark:bg-green-900/30 p-2 md:p-3 rounded-lg shrink-0">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm md:text-base mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base truncate">shoyaib105@gmail.com</p>
                    <span className="text-green-600 dark:text-green-400 text-xs md:text-sm font-medium inline-block mt-1 group-hover:translate-x-1 transition-transform">
                      Send an email →
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href="tel:+8801743870639"
                  className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 group"
                >
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-2 md:p-3 rounded-lg shrink-0">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm md:text-base mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">+8801743870639</p>
                    <span className="text-blue-600 dark:text-blue-400 text-xs md:text-sm font-medium inline-block mt-1 group-hover:translate-x-1 transition-transform">
                      Call now →
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 group">
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-2 md:p-3 rounded-lg shrink-0">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm md:text-base mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Dhaka, Bangladesh</p>
                    <span className="text-purple-600 dark:text-purple-400 text-xs md:text-sm font-medium inline-block mt-1 group-hover:translate-x-1 transition-transform">
                      View on map →
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-gray-100 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-sm md:text-base">Connect with us</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl ${social.color} transition-all duration-200 group`}
                    >
                      <social.icon className={`w-4 h-4 md:w-5 md:h-5 mb-1 ${social.textColor} group-hover:scale-110 transition-transform`} />
                      <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-gray-700/50">
              <div className="mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Send us a Message</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      <User className="w-3 h-3 md:w-4 md:h-4 inline mr-2" />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50 dark:bg-gray-700/50 transition-all duration-200 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      <Mail className="w-3 h-3 md:w-4 md:h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50 dark:bg-gray-700/50 transition-all duration-200 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Tell us about your project, question, or feedback..."
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50 dark:bg-gray-700/50 transition-all duration-200 placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-linear-to-r from-green-600 to-emerald-500 dark:from-green-500 dark:to-emerald-400 hover:from-green-700 hover:to-emerald-600 dark:hover:from-green-600 dark:hover:to-emerald-500 text-white font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-xl shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none text-sm md:text-base"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 md:w-5 md:h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => setFormData({ name: "", email: "", message: "" })}
                    className="w-full sm:w-auto px-5 md:px-6 py-2.5 md:py-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl font-medium text-sm md:text-base transition-colors"
                  >
                    Clear Form
                  </button>
                </div>

                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-100 dark:border-gray-700">
                  By submitting this form, you agree to our privacy policy. We promise not to spam you.
                </p>
              </form>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8">
              {stats.map((stat) => (
                <div 
                  key={stat.label} 
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 text-center shadow border border-gray-100 dark:border-gray-700/50 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 dark:bg-gray-700 mb-2 md:mb-3">
                    <stat.icon className={`w-4 h-4 md:w-5 md:h-5 ${stat.color}`} />
                  </div>
                  <div className={`text-xl md:text-2xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;