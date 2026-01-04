import { 
  Target, 
  Users, 
  Eye, 
  Leaf, 
  Shield, 
  TrendingUp,
  HeartHandshake,
  Globe,
  CheckCircle,
  MapPin,
  Clock,
  Award,
  Users as UsersIcon,
  Eye as EyeIcon,
  Leaf as LeafIcon,
  ShieldCheck,
  Zap,
  HeartHandshake as HeartHandshakeIcon,
  Sparkles,
  Target as TargetIcon,
  Globe as GlobeIcon,
  Users2,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Handshake
} from "lucide-react";

const About = () => {
const values = [
  {
    icon: <Users className="w-6 h-6 md:w-7 md:h-7" />,
    title: "Community First",
    description: "Citizens play the most important role in reporting and monitoring issues. Together we build cleaner neighborhoods.",
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    iconBg: "bg-blue-100 dark:bg-blue-800/30"
  },
  {
    icon: <Eye className="w-6 h-6 md:w-7 md:h-7" />,
    title: "Transparency",
    description: "Every issue is publicly visible and trackable until resolved. No hidden processes or delays.",
    color: "from-emerald-500 to-green-400",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    iconBg: "bg-emerald-100 dark:bg-emerald-800/30"
  },
  {
    icon: <Leaf className="w-6 h-6 md:w-7 md:h-7" />,
    title: "Sustainability",
    description: "Clean environments lead to healthier, greener, and more sustainable cities for future generations.",
    color: "from-green-500 to-emerald-400",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    iconBg: "bg-green-100 dark:bg-green-800/30"
  },
  {
    icon: <ShieldCheck className="w-6 h-6 md:w-7 md:h-7" />,
    title: "Accountability",
    description: "We ensure responsible parties are held accountable through systematic tracking and reporting.",
    color: "from-purple-500 to-violet-400",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    iconBg: "bg-purple-100 dark:bg-purple-800/30"
  },
  {
    icon: <Zap className="w-6 h-6 md:w-7 md:h-7" />,
    title: "Efficiency",
    description: "Streamlined processes reduce resolution times and optimize resource allocation.",
    color: "from-orange-500 to-amber-400",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    iconBg: "bg-orange-100 dark:bg-orange-800/30"
  },
  {
    icon: <HeartHandshake className="w-6 h-6 md:w-7 md:h-7" />,
    title: "Collaboration",
    description: "Bridging the gap between citizens, local authorities, and environmental organizations.",
    color: "from-pink-500 to-rose-400",
    bgColor: "bg-pink-50 dark:bg-pink-900/20",
    iconBg: "bg-pink-100 dark:bg-pink-800/30"
  }
];

  const stats = [
    { 
      icon: <MapPin className="w-5 h-5 md:w-6 md:h-6" />, 
      label: "Cities Covered", 
      value: "50+", 
      suffix: "", 
      color: "text-blue-500 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    { 
      icon: <Users2 className="w-5 h-5 md:w-6 md:h-6" />, 
      label: "Active Users", 
      value: "10,000", 
      suffix: "+", 
      color: "text-green-500 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    { 
      icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />, 
      label: "Issues Resolved", 
      value: "25,000", 
      suffix: "+", 
      color: "text-emerald-500 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20"
    },
    { 
      icon: <Clock className="w-5 h-5 md:w-6 md:h-6" />, 
      label: "Avg. Resolution Time", 
      value: "48", 
      suffix: " hours", 
      color: "text-purple-500 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    { 
      icon: <Award className="w-5 h-5 md:w-6 md:h-6" />, 
      label: "Satisfaction Rate", 
      value: "95", 
      suffix: "%", 
      color: "text-amber-500 dark:text-amber-400",
      bgColor: "bg-amber-50 dark:bg-amber-900/20"
    },
    { 
      icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />, 
      label: "Environmental Impact", 
      value: "500", 
      suffix: " tons+", 
      description: "waste properly managed", 
      color: "text-cyan-500 dark:text-cyan-400",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20"
    }
  ];

  const milestones = [
    { year: "2020", title: "Platform Launch", description: "Started with pilot program in Dhaka" },
    { year: "2021", title: "Expansion", description: "Covered 10 major cities across Bangladesh" },
    { year: "2022", title: "Mobile App", description: "Launched iOS & Android applications" },
    { year: "2023", title: "Government Partnership", description: "Collaborated with local municipalities" },
    { year: "2024", title: "AI Integration", description: "Implemented smart issue detection" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 dark:from-green-500/5 dark:to-emerald-500/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mb-6 md:mb-8">
              <Leaf className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-4 md:mb-6">
              About <span className="text-green-600 dark:text-green-400">Cleanliness</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
              A community-driven platform empowering citizens to create cleaner,
              healthier, and more sustainable cities through transparency and collaboration.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-12 mb-16 md:mb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`${stat.bgColor} w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4`}>
                <span className={stat.color}>
                  {stat.icon}
                </span>
              </div>
              <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>
                {stat.value}<span className="text-lg md:text-xl">{stat.suffix}</span>
              </div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
              {stat.description && (
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {stat.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Mission */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="p-2 md:p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400">
                <Target className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              To empower individuals and communities to take proactive responsibility for their surroundings, 
              fostering a culture of cleanliness and environmental stewardship through innovative technology 
              and collective action.
            </p>
            <div className="space-y-4">
              {[
                "Enable real-time reporting of cleanliness issues",
                "Bridge communication gaps between citizens and authorities",
                "Promote sustainable waste management practices",
                "Build healthier, more livable urban environments"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-white to-emerald-50 dark:from-gray-800 dark:to-emerald-900/20 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl border border-emerald-100 dark:border-emerald-800/30">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="p-2 md:p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-400">
                <Globe className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Our Vision
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              To create a world where every city is clean, green, and sustainable—where citizens and 
              authorities work hand-in-hand using technology to maintain pristine public spaces for 
              generations to come.
            </p>
            <div className="space-y-4">
              {[
                "Zero tolerance for public space pollution",
                "Smart cities powered by community intelligence",
                "Global network of cleanliness champions",
                "Data-driven environmental policymaking"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Core Values - WITH ICONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Principles that guide every feature, decision, and interaction on our platform
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-5 md:p-6 shadow-lg border border-gray-100 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`${value.bgColor} w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`${value.iconBg} p-2 md:p-3 rounded-lg`}>
                  <div className={` ${value.color}`}>
                    {value.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl border border-gray-100 dark:border-gray-700">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              From a simple idea to a nationwide movement for cleaner cities
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-green-400 to-emerald-500 dark:from-green-500 dark:to-emerald-400" />
            
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative mb-8 md:mb-12 last:mb-0 ${index % 2 === 0 ? 'md:pr-1/2 md:pl-8' : 'md:pl-1/2 md:pr-8'} pl-12 md:pl-0`}
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 border-4 border-white dark:border-gray-900 z-10" />
                
                <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-5 md:p-6 shadow-lg border border-gray-100 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                      <span className="text-green-600 dark:text-green-400 font-bold text-sm">
                        {milestone.year}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 dark:from-green-600 dark:to-emerald-600 rounded-2xl md:rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
            Join the Cleanliness Movement
          </h2>
          <p className="text-green-50 dark:text-green-100 text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto">
            Together, we can transform our cities into cleaner, healthier, and more beautiful places to live.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-gray-50 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 font-semibold px-6 md:px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
              Start Reporting Issues
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-6 md:px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105">
              Learn How It Works
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;