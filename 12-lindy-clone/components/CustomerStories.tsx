"use client";

import { useState } from "react";
import { MessageSquare, ArrowRight, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const stories = [
  {
    company: "Ankor",
    logo: "A",
    logoColor: "bg-purple-100",
    title: "How Ankor software built a 30-agent AI workforce in the yacht industry.",
    quote: "Lindy helped us 3x our team's capacity for marketing team work.",
    author: "CEO of Ankor",
    stat: "30",
    statLabel: "AI agents deployed",
  },
  {
    company: "TechFlow",
    logo: "T",
    logoColor: "bg-blue-100",
    title: "TechFlow automated 80% of customer support with Lindy agents.",
    quote: "We reduced response time from hours to seconds with AI-powered support.",
    author: "VP of Customer Success",
    stat: "80%",
    statLabel: "Support automated",
  },
  {
    company: "GrowthCo",
    logo: "G",
    logoColor: "bg-green-100",
    title: "GrowthCo scaled their sales outreach 10x without hiring.",
    quote: "Our AI sales agents book more meetings than our human team combined.",
    author: "Head of Sales",
    stat: "10x",
    statLabel: "Outreach increase",
  },
];

export default function CustomerStories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextStory = () => {
    setActiveIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-main px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
            <MessageSquare className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-700">Customer Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real businesses. Real results. Built with<br className="hidden md:block" />
            Lindy.
          </h2>
        </div>

        {/* Story Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-lindy-cream to-lindy-peach rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Company Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${stories[activeIndex].logoColor} rounded-xl flex items-center justify-center`}>
                    <span className="text-lg font-bold text-gray-700">
                      {stories[activeIndex].logo}
                    </span>
                  </div>
                  <span className="font-semibold text-gray-900">
                    {stories[activeIndex].company}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {stories[activeIndex].title}
                </h3>
                <div className="flex items-start gap-3">
                  <Quote className="w-8 h-8 text-purple-300 flex-shrink-0" />
                  <p className="text-gray-600 italic">
                    {stories[activeIndex].quote}
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  — {stories[activeIndex].author}
                </p>
                <button className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition-colors">
                  Read the full story
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Stats */}
              <div className="flex justify-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                  <div className="text-5xl md:text-6xl font-bold text-purple-600 mb-2">
                    {stories[activeIndex].stat}
                  </div>
                  <p className="text-gray-600">
                    {stories[activeIndex].statLabel}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevStory}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex gap-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? "bg-purple-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextStory}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
