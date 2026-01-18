"use client";

import { Search, Sparkles, MessageSquare, Calendar, Mail } from "lucide-react";

const suggestions = [
  { icon: MessageSquare, text: "Customer support", color: "bg-blue-100" },
  { icon: Calendar, text: "Automated scheduling", color: "bg-purple-100" },
  { icon: Mail, text: "Email management", color: "bg-green-100" },
];

export default function Hero() {
  return (
    <section className="bg-hero pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container-main px-4 md:px-8">
        {/* Hero Text */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Meet your first AI employee
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Lindy.ai builds AI employees that automate tasks, manage your calendar, handle emails, and work across thousands of apps.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Sparkles className="w-5 h-5 text-purple-500" />
            </div>
            <input
              type="text"
              placeholder="Describe your agent's role in one sentence..."
              className="w-full py-4 pl-12 pr-4 bg-white rounded-full border border-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-400"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-lindy-purple text-white px-6 py-2 rounded-full font-medium hover:bg-primary-700 transition-colors">
              Create
            </button>
          </div>
        </div>

        {/* Suggestions */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {suggestions.map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all text-sm text-gray-600"
            >
              <div className={`p-1 rounded ${item.color}`}>
                <item.icon className="w-3 h-3 text-gray-700" />
              </div>
              {item.text}
            </button>
          ))}
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all text-sm text-gray-600">
            + Advanced mode
          </button>
        </div>

        {/* Decorative elements */}
        <div className="relative max-w-5xl mx-auto">
          {/* Floating icons for visual interest */}
          <div className="absolute -top-8 left-10 w-12 h-12 bg-red-400 rounded-2xl flex items-center justify-center shadow-lg animate-float">
            <span className="text-white text-xl">G</span>
          </div>
          <div className="absolute -top-4 right-20 w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "0.5s" }}>
            <span className="text-white text-sm">in</span>
          </div>
          <div className="absolute top-20 -left-4 w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "1s" }}>
            <span className="text-white text-xs">S</span>
          </div>
          <div className="absolute top-16 -right-4 w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
            <span className="text-white text-sm">N</span>
          </div>
        </div>
      </div>
    </section>
  );
}
