import { 
  FileText,
  ShieldCheck,
  Wrench,
  CheckCircle,
  ArrowRight,
  Camera,
  Clock,
  Users,
  MapPin,
  Bell,
  TrendingUp,
  Award
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    { 
      step: "1", 
      title: "Report Issue", 
      desc: "Submit cleanliness issues with photos, location, and details through our user-friendly dashboard.", 
      icon: <FileText className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      details: ["Take photo", "Add location", "Add description"]
    },
    { 
      step: "2", 
      title: "Verification", 
      desc: "Our team of verified admins reviews and validates each report for authenticity and urgency.", 
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "from-purple-500 to-violet-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      details: ["Admin review", "Priority check", "Location verification"]
    },
    { 
      step: "3", 
      title: "Action Taken", 
      desc: "Local authorities and cleaning crews are notified and dispatched to resolve the reported issue.", 
      icon: <Wrench className="w-6 h-6" />,
      color: "from-orange-500 to-amber-400",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      details: ["Authority notified", "Cleanup scheduled", "Team dispatched"]
    },
    { 
      step: "4", 
      title: "Resolved", 
      desc: "Issue is marked as resolved with photographic evidence and community verification.", 
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-green-500 to-emerald-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      details: ["Cleanup completed", "Photo evidence", "Community feedback"]
    }
  ];


  return (
    <section className="py-12 md:py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-linear-to-r from-green-500 to-emerald-500 mb-6">
            <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From reporting to resolution - a seamless four-step process that makes community cleanup efficient and effective
          </p>
        </div>

        {/* Main Steps */}
        <div className="relative mb-12 md:mb-16">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-linear-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-green-500/10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((item, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-5 md:p-6 shadow-lg border border-gray-100 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                  
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-linear-to-r ${item.color} flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-bold text-lg md:text-xl">
                        {item.step}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`${item.bgColor} w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 ml-auto`}>
                    <div className={`bg-linear-to-r ${item.color} p-3 rounded-lg`}>
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-4">
                    {item.desc}
                  </p>

                  {/* Details List */}
                  <div className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-gray-400 to-gray-500" />
                        <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-6">
                      <div className="w-full h-0.5 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 relative">
                        <div className="absolute -right-3 -top-2">
                          <ArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-700 shadow-lg flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 dark:border-gray-700 mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Typical Resolution Timeline
          </h3>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0">
              {[
                { time: "0-1 Hour", label: "Report Submitted", color: "bg-blue-500" },
                { time: "1-4 Hours", label: "Under Review", color: "bg-purple-500" },
                { time: "4-24 Hours", label: "Action Initiated", color: "bg-orange-500" },
                { time: "24-48 Hours", label: "Issue Resolved", color: "bg-green-500" }
              ].map((item, index) => (
                <div key={index} className="relative text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-700 border-4 border-white dark:border-gray-800 shadow-lg">
                    <div className={`w-6 h-6 rounded-full ${item.color}`} />
                  </div>
                  <div className="mt-3">
                    <div className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                      {item.time}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-linear-to-r from-green-500 to-emerald-500 dark:from-green-600 dark:to-emerald-600 rounded-2xl p-6 md:p-8 shadow-xl">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Report Your First Issue?
            </h3>
            <p className="text-green-50 dark:text-green-100 mb-6 md:mb-8 text-lg">
              Join thousands of citizens making their communities cleaner every day
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-50 font-semibold px-6 md:px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                Start Reporting Now
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-6 md:px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105">
                Download Mobile App
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;