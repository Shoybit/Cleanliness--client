import { 
  MessageSquare,
  BarChart3,
  ShieldCheck,
  Globe,
  Users,
  Eye,
  Clock,
  Award,
  TrendingUp,
  Bell,
  MapPin,
  CheckCircle
} from "lucide-react";
import React from "react";

const Features = () => {
  const features = [
    { 
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Community Reporting", 
      desc: "Report cleanliness issues easily with photos and location. Empower citizens to be the eyes of their community.",
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    { 
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-time Tracking", 
      desc: "Track issue status transparently with live updates. Know exactly where your reports stand.",
      color: "from-emerald-500 to-green-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20"
    },
    { 
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Verified Admins", 
      desc: "Verified admins ensure trust and accountability. Every report is reviewed by authorized personnel.",
      color: "from-purple-500 to-violet-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    { 
      icon: <Globe className="w-8 h-8" />,
      title: "Cleaner Cities", 
      desc: "Together we build cleaner, healthier communities. Join the movement for sustainable urban living.",
      color: "from-green-500 to-teal-400",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    { 
      icon: <Users className="w-8 h-8" />,
      title: "Community Power", 
      desc: "Join thousands of active citizens working together. Your voice matters in creating positive change.",
      color: "from-orange-500 to-amber-400",
      bgColor: "bg-orange-50 dark:bg-orange-900/20"
    },
    { 
      icon: <Eye className="w-8 h-8" />,
      title: "Transparency", 
      desc: "Full visibility into the resolution process. No hidden statuses or delays in communication.",
      color: "from-cyan-500 to-blue-400",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20"
    },
    { 
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Resolution", 
      desc: "Average resolution time of 48 hours. Efficient workflow ensures timely action on every report.",
      color: "from-pink-500 to-rose-400",
      bgColor: "bg-pink-50 dark:bg-pink-900/20"
    },
    { 
      icon: <Award className="w-8 h-8" />,
      title: "Impact Recognition", 
      desc: "Get recognized for your contributions. Earn badges and rewards for active participation.",
      color: "from-yellow-500 to-amber-400",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20"
    }
  ];

  const stats = [
    { value: "95%", label: "User Satisfaction", icon: "😊" },
    { value: "48h", label: "Avg. Resolution Time", icon: "⚡" },
    { value: "10K+", label: "Active Users", icon: "👥" },
    { value: "25K+", label: "Issues Resolved", icon: "✅" }
  ];

  return (
    <section className="py-12 md:py-20 bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-linear-to-r from-green-500 to-emerald-500 mb-6">
            <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            Why Choose Cleanliness?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how our platform transforms community engagement into real environmental impact
          </p>
        </div>

        {/* Stats Banner */}
        <div className="mb-12 md:mb-16">
          <div className="bg-linear-to-r from-green-500/10 to-emerald-500/10 dark:from-green-500/5 dark:to-emerald-500/5 rounded-2xl p-6 md:p-8 border border-green-100 dark:border-green-800/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {features.slice(0, 4).map((feature, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-5 md:p-6 shadow-lg border border-gray-100 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`${feature.bgColor} w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`bg-linear-to-r ${feature.color} p-2 md:p-3 rounded-lg`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Extended Features Section */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-12">
            More Amazing Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.slice(4).map((feature, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border border-gray-100 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
              >
                <div className={`${feature.bgColor} w-10 h-10 rounded-lg flex items-center justify-center mb-4`}>
                  <div className={`bg-linear-to-r ${feature.color} p-2 rounded`}>
                    <div className="text-white">
                      {React.cloneElement(feature.icon, { className: "w-5 h-5" })}
                    </div>
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;