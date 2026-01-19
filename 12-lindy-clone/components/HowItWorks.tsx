import { PenTool, Link2, Zap, ArrowRight, Check } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: PenTool,
    title: "Describe your agent",
    description: "Tell us what you want your agent to do. Use plain English to define your agent's role and responsibilities.",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    number: "2",
    icon: Link2,
    title: "Connect your apps",
    description: "Pick and authenticate the integrations you need. Lindy supports thousands of tools out of the box.",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    number: "3",
    icon: Zap,
    title: "Let AI do the work",
    description: "Your agent will start working to serve your users and complete tasks without any human intervention.",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
];

const features = [
  "Works automatically, 24/7",
  "Gets smarter over time",
  "Escalates when needed",
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-main px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-700">Step-by-step: John Demo</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How it works.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0">
                  <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                </div>
              )}

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative z-10">
                <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center mb-4`}>
                  <step.icon className={`w-6 h-6 ${step.iconColor}`} />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-purple-500 bg-purple-50 px-2 py-1 rounded">
                    Step {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Demo visualization */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-lindy-cream to-lindy-peach rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 rounded-full mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-green-700">Active</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Automated email triaging
                </h3>
                <p className="text-gray-600 mb-6">
                  Your Lindy reads and categorizes incoming emails, drafts responses, and escalates important messages.
                </p>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
                      <div className="w-8 h-8 bg-purple-200 rounded-lg"></div>
                      <div className="flex-1">
                        <div className="h-2 bg-purple-200 rounded w-3/4 mb-1"></div>
                        <div className="h-2 bg-purple-100 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 rounded w-2/3 mb-1"></div>
                        <div className="h-2 bg-gray-100 rounded w-1/3"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 rounded w-1/2 mb-1"></div>
                        <div className="h-2 bg-gray-100 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating notification */}
                <div className="absolute -right-4 top-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-xs font-medium text-gray-700">Reply sent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
