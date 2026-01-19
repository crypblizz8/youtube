"use client";

import {
  LayoutGrid,
  Zap,
  Bot,
  ArrowDown,
  ArrowUp,
  ArrowRight,
  Monitor,
  MousePointer2,
  Phone,
  Mic,
  Volume2,
  BarChart3,
  FileText,
  HeadphonesIcon,
  Sparkles,
} from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="organic-bg py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-5 h-5 bg-slate-200 rounded flex items-center justify-center">
              <LayoutGrid className="w-3 h-3 text-slate-500" />
            </div>
            <span className="uppercase tracking-widest text-[10px] font-bold text-slate-500">
              Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-lindy-dark max-w-3xl leading-tight">
            Everything you need to put AI to work across your entire org.
          </h2>
        </div>

        {/* Features Grid */}
        <div className="space-y-8">
          {/* Row 1: 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* No-code agent builder */}
            <div className="feature-card flex flex-col h-full">
              <div className="flex-grow flex items-center justify-center p-12 overflow-hidden">
                <div className="bg-white w-full max-w-sm rounded-2xl p-4 border border-slate-100 shadow-lg animate-float">
                  {/* Browser dots */}
                  <div className="flex gap-2 mb-6">
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-100" />
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-100" />
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-100" />
                    <div className="ml-auto w-8 h-2.5 rounded-full bg-orange-50" />
                  </div>

                  {/* Workflow blocks */}
                  <div className="space-y-4">
                    <div className="bg-lindy-warm rounded-xl p-3 border border-orange-100 flex items-center gap-3">
                      <div className="w-6 h-6 bg-yellow-400 rounded-md flex items-center justify-center">
                        <Zap className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-[11px] font-medium text-slate-500">
                        When this happens...
                      </span>
                    </div>

                    <div className="flex justify-center -my-1">
                      <ArrowDown className="w-4 h-4 text-yellow-400 opacity-50" />
                    </div>

                    <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 bg-blue-50 rounded-md flex items-center justify-center">
                          <Bot className="w-3 h-3 text-blue-500" />
                        </div>
                        <span className="text-[11px] font-bold text-lindy-dark">
                          AI Agent
                        </span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="w-5 h-5 bg-red-500 rounded text-white text-[8px] flex items-center justify-center font-bold">
                          G
                        </div>
                        <div className="w-5 h-5 bg-blue-500 rounded text-white text-[8px] flex items-center justify-center font-bold">
                          C
                        </div>
                        <div className="w-5 h-5 bg-green-500 rounded text-white text-[8px] flex items-center justify-center font-bold">
                          D
                        </div>
                        <span className="text-[10px] text-slate-400 font-medium">
                          + 4 apps
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-10 pt-0">
                <h3 className="text-2xl font-bold mb-2 text-lindy-dark">
                  No-code agent builder
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed">
                  Remarkably easy to use, incredibly powerful agents.
                </p>
              </div>
            </div>

            {/* Centralized Management */}
            <div className="feature-card flex flex-col h-full">
              <div className="flex-grow flex items-center justify-center relative min-h-[360px] overflow-hidden">
                <div className="absolute w-[500px] h-[500px] ring-gradient rounded-full opacity-60" />
                <div className="absolute w-[350px] h-[350px] ring-gradient rounded-full opacity-40" />
                <div className="absolute w-[200px] h-[200px] ring-gradient rounded-full opacity-20" />
                <div className="relative flex flex-col items-center gap-12">
                  <span className="text-[11px] font-bold tracking-[0.4em] text-yellow-600/40 uppercase">
                    Build
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.4em] text-yellow-600/40 uppercase">
                    Test
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.4em] text-yellow-600/40 uppercase">
                    Deploy
                  </span>
                </div>
              </div>
              <div className="p-10 pt-0">
                <h3 className="text-2xl font-bold mb-2 text-lindy-dark">
                  Centralized management
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed">
                  For training and deploying agents across your organization.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Access Controls */}
            <div className="feature-card flex flex-col h-full">
              <div className="flex-grow flex items-center justify-center p-8 min-h-[280px]">
                <div className="bg-white rounded-2xl shadow-sm w-full max-w-[200px] p-4 border border-slate-100">
                  <div className="flex justify-between items-center mb-6">
                    <div className="h-2 w-12 bg-slate-50 rounded" />
                    <div className="h-5 w-10 bg-yellow-400 rounded-lg" />
                  </div>
                  <div className="space-y-4">
                    <div className="h-10 w-full bg-slate-50/50 rounded-lg" />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-indigo-100" />
                        <div className="h-1.5 w-16 bg-slate-100 rounded" />
                      </div>
                      <div className="h-4 w-4 rounded bg-slate-100" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 pt-0">
                <h3 className="text-xl font-bold mb-2 text-lindy-dark">
                  Robust access controls
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Control agent access and edit rights precisely.
                </p>
              </div>
            </div>

            {/* Computer Use */}
            <div className="feature-card flex flex-col h-full">
              <div className="flex-grow flex items-center justify-center p-8 min-h-[280px]">
                <div className="w-full max-w-[200px] space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Monitor className="w-4 h-4 text-yellow-600/40" />
                    <span className="text-[10px] text-yellow-600/40 font-bold uppercase tracking-wider">
                      Computer Use
                    </span>
                  </div>
                  <div className="bg-white/60 h-8 w-4/5 rounded-xl border border-white" />
                  <div className="bg-white h-24 w-full rounded-2xl shadow-sm border border-slate-100 relative">
                    <MousePointer2 className="absolute bottom-3 right-6 w-5 h-5 text-slate-400 animate-float" />
                  </div>
                  <div className="bg-white/60 h-10 w-full rounded-xl border border-white" />
                </div>
              </div>
              <div className="p-8 pt-0">
                <h3 className="text-xl font-bold mb-2 text-lindy-dark">
                  Computer use
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Giving agents their own virtual machine and tools.
                </p>
              </div>
            </div>

            {/* Phone Agent */}
            <div className="feature-card flex flex-col h-full">
              <div className="flex-grow flex items-center justify-center p-8 min-h-[280px]">
                <div className="relative">
                  {/* Sound waves */}
                  <div className="absolute inset-0 flex items-center justify-center gap-1.5 opacity-20">
                    <div className="w-1 h-12 bg-yellow-400 rounded-full animate-pulse" />
                    <div className="w-1 h-20 bg-yellow-400 rounded-full" />
                    <div
                      className="w-1 h-32 bg-yellow-400 rounded-full animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <div className="w-1 h-24 bg-yellow-400 rounded-full" />
                    <div
                      className="w-1 h-16 bg-yellow-400 rounded-full animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    />
                  </div>

                  {/* Phone mockup */}
                  <div className="relative bg-white/90 backdrop-blur-md rounded-[40px] w-[150px] h-[220px] shadow-lg border border-white/50 p-6 flex flex-col items-center">
                    <div className="w-10 h-1.5 bg-slate-50 rounded-full mb-6" />
                    <div className="text-[10px] text-slate-400 font-medium mb-1">
                      00:22
                    </div>
                    <div className="text-sm font-bold text-lindy-dark mb-8">
                      Gaia
                    </div>
                    <div className="w-14 h-14 bg-lindy-warm rounded-2xl flex items-center justify-center mb-8 border border-orange-50">
                      <Phone className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div className="flex gap-6">
                      <Mic className="w-5 h-5 text-slate-300" />
                      <Volume2 className="w-5 h-5 text-slate-300" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 pt-0">
                <h3 className="text-xl font-bold mb-2 text-lindy-dark">
                  Phone agent
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  State-of-the-art AI voice agent for calling.
                </p>
              </div>
            </div>
          </div>

          {/* Row 3: 7:5 Ratio */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Prompt to agent */}
            <div className="feature-card md:col-span-7 flex flex-col h-full">
              <div className="flex-grow flex items-center justify-center p-12 min-h-[320px] bg-gradient-to-tr from-lindy-warm to-white">
                <div className="w-full max-w-md bg-white rounded-full p-2.5 pl-8 pr-2.5 shadow-md border border-slate-50 flex items-center justify-between hover:shadow-lg transition-shadow">
                  <span className="text-slate-400 text-sm font-medium">
                    Build an AI Support Agent
                  </span>
                  <button className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-sm hover:scale-105 transition-transform">
                    <ArrowUp className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
              <div className="p-10 pt-0">
                <h3 className="text-2xl font-bold mb-2 text-lindy-dark">
                  Prompt to agent magic
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed">
                  Build complex internal apps and custom agents with just a prompt.
                </p>
              </div>
            </div>

            {/* Template library */}
            <div className="feature-card md:col-span-5 flex flex-col h-full">
              <div className="flex-grow flex items-center justify-center p-10 min-h-[320px]">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-white/40 h-12 rounded-2xl border border-white/50" />
                  <div className="bg-white border border-yellow-100 shadow-sm h-12 rounded-2xl flex items-center px-4 gap-3">
                    <BarChart3 className="w-4 h-4 text-yellow-600" />
                    <span className="text-[11px] font-bold text-yellow-800">
                      Meeting Coach
                    </span>
                  </div>
                  <div className="bg-white border border-yellow-100 shadow-sm h-12 rounded-2xl flex items-center px-4 gap-3">
                    <FileText className="w-4 h-4 text-yellow-600" />
                    <span className="text-[11px] font-bold text-yellow-800">
                      Daily Digest
                    </span>
                  </div>
                  <div className="bg-white/40 h-12 rounded-2xl border border-white/50" />
                  <div className="bg-white/40 h-12 rounded-2xl border border-white/50" />
                  <div className="bg-white border border-yellow-100 shadow-sm h-12 rounded-2xl flex items-center px-4 gap-3">
                    <HeadphonesIcon className="w-4 h-4 text-yellow-600" />
                    <span className="text-[11px] font-bold text-yellow-800">
                      Support
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-10 pt-0">
                <h3 className="text-2xl font-bold mb-2 text-lindy-dark">
                  Template library
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed">
                  50+ pre-built agents for common workflows.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-16 pt-12 border-t border-slate-100 flex flex-wrap gap-8 items-center justify-center md:justify-start">
          <div className="flex items-center gap-3 bg-yellow-50 px-5 py-2.5 rounded-full border border-yellow-100">
            <Sparkles className="w-4 h-4 text-yellow-600" />
            <span className="text-sm font-bold text-yellow-800">
              Explore all 50+ templates
            </span>
          </div>
          <a
            href="#"
            className="text-lindy-dark font-extrabold flex items-center gap-2 group hover:gap-3 transition-all"
          >
            Get started with a template
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
