"use client";

import {
  ArrowUp,
  Layout,
  Headphones,
  PhoneCall,
  UserPlus,
  Mic,
  Linkedin,
} from "lucide-react";

const suggestions = [
  { icon: Layout, text: "Personal website", color: "text-blue-500" },
  { icon: Headphones, text: "Customer Support", color: "text-purple-500" },
  { icon: PhoneCall, text: "Outbound Sales Calls", color: "text-green-500" },
  { icon: UserPlus, text: "Lead gen", color: "text-orange-500" },
  { icon: Mic, text: "Meeting Recorder", color: "text-indigo-500" },
  { icon: Linkedin, text: "LinkedIn outreach", color: "text-blue-700" },
];

export default function Hero() {
  return (
    <section className="bg-hero pt-48 pb-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-lindy-dark">
          Meet your first AI employee
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Lindy is the simplest way for businesses to create, manage, and share
          agents. Now with just a prompt.
        </p>

        {/* Prompt Input */}
        <div className="relative max-w-2xl mx-auto mb-10 group">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-100 to-blue-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />

          <div className="relative bg-white p-6 rounded-2xl border border-gray-100 shadow-xl">
            <div className="flex items-center justify-between gap-4">
              <input
                type="text"
                placeholder="How can I help? Describe your agent and I'll build it."
                className="w-full bg-transparent outline-none text-lg placeholder-gray-400 text-lindy-dark"
              />
              <button className="flex-shrink-0 p-3 bg-blue-100 text-lindy-blue rounded-xl hover:bg-lindy-blue hover:text-white transition-all">
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Suggestion Tags */}
        <div className="flex flex-wrap justify-center gap-3">
          {suggestions.map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-100 shadow-sm text-sm text-gray-600 hover:border-blue-200 hover:bg-blue-50 transition-all"
            >
              <item.icon className={`w-4 h-4 ${item.color}`} />
              {item.text}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
