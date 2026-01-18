"use client";

import { useState } from "react";
import {
  Headphones,
  PenTool,
  TrendingUp,
  Users,
  MessageCircle,
  Send,
  MoreHorizontal,
  Play,
} from "lucide-react";

const tabs = [
  { id: "support", label: "Support", icon: Headphones },
  { id: "sales", label: "Sales", icon: TrendingUp },
  { id: "marketing", label: "AI Marketing", icon: PenTool },
  { id: "operations", label: "Operations", icon: Users },
];

const chatMessages = [
  {
    type: "agent",
    name: "Support Agent",
    message: "Hi! I'm your Support Agent. I can help answer customer questions, resolve tickets, and provide 24/7 support.",
    time: "Just now",
  },
  {
    type: "user",
    name: "Customer",
    message: "I need help with my subscription billing.",
    time: "2 min ago",
  },
  {
    type: "agent",
    name: "Support Agent",
    message: "I'd be happy to help with your billing! I can see your current plan and recent transactions. What specific issue are you experiencing?",
    time: "1 min ago",
  },
];

export default function AgentDemo() {
  const [activeTab, setActiveTab] = useState("support");

  return (
    <section className="bg-hero py-16 md:py-24">
      <div className="container-main px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 mb-6">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">Agents</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Build, scale, and manage your entire AI<br className="hidden md:block" />
            workforce with one platform.
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-purple-100 text-purple-700 border border-purple-200"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Demo Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
            {/* Card Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Support Agent</h3>
                  <p className="text-sm text-gray-500">Handles customer inquiries 24/7</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-purple-500 text-white text-sm font-medium rounded-full hover:bg-purple-600 transition-colors">
                + Create Lindy
              </button>
            </div>

            {/* Chat Interface */}
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {/* Chat Messages */}
              <div className="p-6">
                <div className="space-y-4">
                  {chatMessages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex gap-3 ${
                        msg.type === "user" ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          msg.type === "agent"
                            ? "bg-gradient-to-br from-purple-500 to-pink-500"
                            : "bg-gray-200"
                        }`}
                      >
                        {msg.type === "agent" ? (
                          <Headphones className="w-4 h-4 text-white" />
                        ) : (
                          <span className="text-xs text-gray-600">C</span>
                        )}
                      </div>
                      <div
                        className={`flex-1 ${
                          msg.type === "user" ? "text-right" : ""
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-gray-900">
                            {msg.name}
                          </span>
                          <span className="text-xs text-gray-400">{msg.time}</span>
                        </div>
                        <div
                          className={`inline-block p-3 rounded-2xl text-sm ${
                            msg.type === "agent"
                              ? "bg-gray-100 text-gray-700"
                              : "bg-purple-500 text-white"
                          }`}
                        >
                          {msg.message}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Input */}
                <div className="mt-6 flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button className="p-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Agent Actions/Stats */}
              <div className="p-6 bg-gray-50">
                <h4 className="font-medium text-gray-900 mb-4">Agent Actions</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-sm text-gray-700">Respond to ticket</span>
                    </div>
                    <Play className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm text-gray-700">Escalate to human</span>
                    </div>
                    <Play className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <MoreHorizontal className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-sm text-gray-700">Log interaction</span>
                    </div>
                    <Play className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div className="mt-6 p-4 bg-purple-50 rounded-xl border border-purple-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-purple-900">Response Time</span>
                    <span className="text-sm font-bold text-purple-600">{"<"}30s</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-purple-900">Resolution Rate</span>
                    <span className="text-sm font-bold text-purple-600">94%</span>
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
