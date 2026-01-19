import {
  Building2,
  Shield,
  Cpu,
  Users,
  BarChart3,
  Lock,
  ArrowRight,
  Check,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Centralized management",
    description: "Manage all your agents from one dashboard",
  },
  {
    icon: Cpu,
    title: "Built-in memory",
    description: "Build AI agents on scale, maintained memory management",
  },
  {
    icon: Shield,
    title: "Enterprise reliability",
    description: "SOC 2 Type II compliant with 99.9% uptime SLA",
  },
  {
    icon: BarChart3,
    title: "Model agnostic",
    description: "Choose any LLM provider or bring your own models",
  },
];

const scaleFeatures = [
  "Unlimited agents",
  "Custom integrations",
  "Dedicated support",
  "SLA guarantees",
];

export default function Enterprise() {
  return (
    <section className="bg-enterprise py-16 md:py-24">
      <div className="container-main px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
            <Building2 className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">Enterprise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The only AI-native automation platform<br className="hidden md:block" />
            built for enterprise.
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-3xl p-8 md:p-12 border border-purple-500/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/20 rounded-full mb-4">
                  <Zap className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-medium text-purple-300">Scale</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to scale<br />with AI Agents?
                </h3>
                <ul className="space-y-3 mb-6">
                  {scaleFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors text-sm font-medium">
                  Get a demo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="relative">
                {/* Decorative visualization */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="grid grid-cols-3 gap-3">
                    {[...Array(9)].map((_, index) => (
                      <div
                        key={index}
                        className={`h-16 rounded-lg ${
                          index % 3 === 0 ? "bg-purple-500/30" : "bg-white/10"
                        }`}
                      ></div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-gray-400">All agents active</span>
                    </div>
                    <span className="text-xs text-gray-400">50+ running</span>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -right-4 -top-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-3 shadow-lg">
                  <Lock className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
