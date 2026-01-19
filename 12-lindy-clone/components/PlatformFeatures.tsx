import {
  Code2,
  Users,
  Shield,
  Monitor,
  Phone,
  Sparkles,
  LayoutTemplate,
  Settings,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "No-code agent builder",
    description: "Build bots easily. No coding skills required to get started.",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Users,
    title: "Centralized management",
    description: "For managing and scheduling all agents.",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Shield,
    title: "Robust access controls",
    description: "Control user access across each agent.",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Monitor,
    title: "Computer use",
    description: "AI that operates the computer for agents.",
    color: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: Phone,
    title: "Phone agent",
    description: "Make or take real AI voice calls.",
    color: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    icon: Sparkles,
    title: "Prompt to agent magic",
    description: "Build Lindys from just a prompt/description prompt.",
    color: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    icon: LayoutTemplate,
    title: "Template library",
    description: "Pre-built agents for common use cases.",
    color: "bg-teal-100",
    iconColor: "text-teal-600",
  },
];

export default function PlatformFeatures() {
  return (
    <section className="bg-lindy-cream py-16 md:py-24">
      <div className="container-main px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 mb-6">
            <Settings className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Platform</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to put AI to work<br className="hidden md:block" />
            across your entire org.
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all group"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {feature.description}
              </p>
              <button className="text-sm font-medium text-purple-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all text-sm font-medium text-gray-700">
            Explore all features
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
