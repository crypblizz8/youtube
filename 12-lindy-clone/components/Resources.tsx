import { GraduationCap, Book, Users, Calendar, ArrowRight } from "lucide-react";

const resources = [
  {
    icon: GraduationCap,
    title: "Courses",
    description: "Learn the fundamentals of Lindy",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Book,
    title: "Documentation",
    description: "Technical guides and API reference",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Users,
    title: "Community",
    description: "Join our Discord community",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Calendar,
    title: "Agent Workshops",
    description: "Live training sessions with experts",
    color: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

export default function Resources() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container-main px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Become an AI agent expert.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to master AI automation and build powerful agents.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all group cursor-pointer"
            >
              <div className={`w-12 h-12 ${resource.color} rounded-xl flex items-center justify-center mb-4`}>
                <resource.icon className={`w-6 h-6 ${resource.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {resource.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {resource.description}
              </p>
              <div className="flex items-center gap-1 text-sm font-medium text-purple-600 group-hover:gap-2 transition-all">
                Explore
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
