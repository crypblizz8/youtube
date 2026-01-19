import { ArrowRight, Link2 } from "lucide-react";

const integrations = [
  { name: "Notion", color: "bg-gray-900", textColor: "text-white" },
  { name: "Slack", color: "bg-purple-600", textColor: "text-white" },
  { name: "Gmail", color: "bg-red-500", textColor: "text-white" },
  { name: "Calendar", color: "bg-blue-500", textColor: "text-white" },
  { name: "HubSpot", color: "bg-orange-500", textColor: "text-white" },
  { name: "Salesforce", color: "bg-blue-600", textColor: "text-white" },
  { name: "Zendesk", color: "bg-green-500", textColor: "text-white" },
  { name: "Intercom", color: "bg-blue-400", textColor: "text-white" },
  { name: "Airtable", color: "bg-yellow-400", textColor: "text-gray-900" },
  { name: "Zapier", color: "bg-orange-400", textColor: "text-white" },
  { name: "Stripe", color: "bg-purple-500", textColor: "text-white" },
  { name: "Linear", color: "bg-indigo-600", textColor: "text-white" },
];

export default function Integrations() {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="container-main px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
            <Link2 className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Integrations</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Integrates with all your apps.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect Lindy to thousands of tools and services you already use. No complicated setup required.
          </p>
        </div>

        {/* Integration Icons Grid */}
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-3xl opacity-50"></div>
          </div>

          {/* Icons */}
          <div className="relative flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className={`w-14 h-14 md:w-16 md:h-16 ${integration.color} rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <span className={`text-xs md:text-sm font-bold ${integration.textColor}`}>
                  {integration.name.charAt(0)}
                </span>
              </div>
            ))}
          </div>

          {/* Floating decorative icons */}
          <div className="absolute top-0 left-10 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center animate-float opacity-60">
            <span className="text-blue-500 text-xs">+</span>
          </div>
          <div className="absolute bottom-0 right-10 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center animate-float opacity-60" style={{ animationDelay: "1s" }}>
            <span className="text-purple-500 text-xs">+</span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors text-sm font-medium">
            View all integrations
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
