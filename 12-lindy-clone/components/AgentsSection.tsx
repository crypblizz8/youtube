"use client";

import { useState } from "react";
import {
  Bot,
  Headphones,
  TrendingUp,
  Megaphone,
  Cog,
  PauseCircle,
  ShieldCheck,
  ArrowRight,
  ArrowDown,
  Mail,
  Search,
  Edit3,
  CheckCircle,
  Inbox,
  Database,
  BarChart2,
  FileText,
  Palette,
  Rocket,
} from "lucide-react";

const tabs = [
  {
    id: "support",
    label: "Support",
    icon: Headphones,
    description: "Handle tickets autonomously.",
    activeColor: "text-lindy-blue",
    bgColor: "bg-purple-50",
    agent: {
      name: "Support Agent",
      tagline: "Resolve tickets in real time across chat, calls and email.",
      icon: ShieldCheck,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    workflow: [
      { icon: Inbox, text: "Receive support ticket", color: "text-purple-500" },
      { icon: Database, text: "Search knowledge base", color: "text-blue-500" },
      { icon: Bot, text: "Write response", color: "text-indigo-500" },
      { icon: CheckCircle, text: "Resolve ticket", color: "text-green-500" },
    ],
  },
  {
    id: "sales",
    label: "Sales",
    icon: TrendingUp,
    description: "Convert more leads.",
    activeColor: "text-green-500",
    bgColor: "bg-green-50",
    agent: {
      name: "Sales Agent",
      tagline: "Qualify leads and schedule demos automatically.",
      icon: TrendingUp,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    workflow: [
      { icon: Inbox, text: "Receive inbound lead", color: "text-green-500" },
      { icon: Search, text: "Research company", color: "text-blue-500" },
      { icon: Edit3, text: "Personalize outreach", color: "text-purple-500" },
      { icon: CheckCircle, text: "Schedule demo", color: "text-green-500" },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: Megaphone,
    description: "Accelerate campaign execution.",
    activeColor: "text-orange-500",
    bgColor: "bg-blue-50/30",
    agent: {
      name: "Creative Agent",
      tagline: "Create on brand marketing campaigns with just a prompt.",
      icon: Rocket,
      iconBg: "bg-blue-100",
      iconColor: "text-lindy-blue",
    },
    workflow: [
      { icon: Search, text: "Research competitors", color: "text-blue-500" },
      { icon: BarChart2, text: "Analyze market", color: "text-blue-500" },
      { icon: FileText, text: "Generate campaign brief", color: "text-blue-500" },
      { icon: Palette, text: "Create ad and video assets", color: "text-purple-500" },
    ],
  },
  {
    id: "operations",
    label: "Operations",
    icon: Cog,
    description: "Turn documents into insights.",
    activeColor: "text-indigo-500",
    bgColor: "bg-indigo-50",
    agent: {
      name: "Operations Agent",
      tagline: "Process complex documents into structured data.",
      icon: Cog,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    workflow: [
      { icon: Inbox, text: "Receive documents", color: "text-indigo-500" },
      { icon: Search, text: "Extract key information", color: "text-blue-500" },
      { icon: Database, text: "Update systems", color: "text-purple-500" },
      { icon: CheckCircle, text: "Generate report", color: "text-green-500" },
    ],
  },
];

const chatMessages = [
  { role: "ai", text: "Hi! How can I help?" },
  { role: "user", text: "What's your return policy?" },
  { role: "ai", text: "You can return your items within 30 days!" },
];

export default function AgentsSection() {
  const [activeTab, setActiveTab] = useState("support");
  const currentTab = tabs.find((tab) => tab.id === activeTab)!;

  return (
    <section className="max-w-7xl mx-auto px-6 pb-24 md:pb-40">
      {/* Section Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-lg shadow-sm mb-6">
          <Bot className="w-4 h-4 text-lindy-blue" />
          <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Agents
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold max-w-2xl leading-tight text-lindy-dark">
          Build, scale, and manage your entire AI workforce with one platform.
        </h2>
      </div>

      {/* Showcase Card */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl overflow-hidden">
        {/* Tab Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-100">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-start p-6 text-left transition-all hover:bg-gray-50 ${
                index < tabs.length - 1 ? "border-r border-gray-100" : ""
              } ${activeTab === tab.id ? "bg-white" : "bg-gray-50/50"}`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <div className="flex items-center gap-2">
                  <tab.icon
                    className={`w-5 h-5 ${
                      activeTab === tab.id ? tab.activeColor : "text-gray-400"
                    }`}
                  />
                  <span
                    className={`font-bold text-sm uppercase tracking-wide ${
                      activeTab === tab.id ? "text-lindy-dark" : "text-gray-500"
                    }`}
                  >
                    {tab.label}
                  </span>
                </div>
                {activeTab === tab.id && (
                  <PauseCircle className="w-5 h-5 text-gray-300" />
                )}
              </div>
              <p className="text-xs text-gray-500">{tab.description}</p>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-8 md:p-12 bg-[#F8F9FF]">
          {/* Agent Header */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-8 mb-12">
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 ${currentTab.agent.iconBg} rounded-xl flex items-center justify-center`}
              >
                <currentTab.agent.icon
                  className={`w-6 h-6 ${currentTab.agent.iconColor}`}
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-lindy-dark">
                  {currentTab.agent.name}
                </h3>
                <p className="text-gray-600">{currentTab.agent.tagline}</p>
              </div>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-lindy-blue text-white rounded-xl font-medium hover:bg-lindy-blue-hover transition-all shadow-lg shadow-blue-500/20"
            >
              Try for free
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Workflow Diagram */}
            <div className="bg-white/40 rounded-2xl p-8 border border-white/60">
              <div className="flex flex-col gap-4">
                {currentTab.workflow.map((step, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 w-fit">
                      <div className={`${step.color} bg-opacity-10 p-2 rounded-lg`}>
                        <step.icon className={`w-4 h-4 ${step.color}`} />
                      </div>
                      <span className="font-medium text-lindy-dark">
                        {step.text}
                      </span>
                    </div>
                    {index < currentTab.workflow.length - 1 && (
                      <div className="flex justify-start pl-12 py-2">
                        <ArrowDown className="w-5 h-5 text-gray-300" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Chat UI Mockup */}
            <div className="relative bg-white/40 rounded-2xl p-8 border border-white/60 flex items-center justify-center overflow-hidden">
              <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Chat Header */}
                <div className="bg-indigo-600 p-4 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot className="w-5 h-5" />
                    <span className="font-medium text-sm tracking-wide uppercase">
                      {currentTab.agent.name}
                    </span>
                  </div>
                  <div className="w-4 h-0.5 bg-white/50 rounded" />
                </div>

                {/* Chat Messages */}
                <div className="p-6 space-y-4 min-h-[240px] bg-gray-50">
                  {chatMessages.map((msg, index) =>
                    msg.role === "ai" ? (
                      <div key={index} className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center text-indigo-600">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div className="chat-bubble-ai p-3 rounded-2xl rounded-tl-none text-sm">
                          {msg.text}
                        </div>
                      </div>
                    ) : (
                      <div key={index} className="flex gap-2 justify-end">
                        <div className="bg-indigo-600 text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm">
                          {msg.text}
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-gray-100 bg-white">
                  <div className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-lg">
                    <span className="text-xs text-gray-400">Ask</span>
                    <ArrowRight className="w-4 h-4 text-gray-300" />
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
