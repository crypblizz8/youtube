"use client";

import { useState } from "react";
import { ChevronDown, Menu, X, Command } from "lucide-react";

const navigation = [
  { name: "Product", hasDropdown: true },
  { name: "Solutions", hasDropdown: true },
  { name: "Enterprise", hasDropdown: false },
  { name: "Pricing", hasDropdown: false },
  { name: "Resources", hasDropdown: true },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md border-b border-orange-50/50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <div className="flex items-center gap-12">
          <a href="#" className="flex items-center gap-2">
            <Command className="w-6 h-6 text-lindy-blue" />
            <span className="font-bold text-2xl tracking-tight text-lindy-dark">Lindy</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                className="flex items-center gap-1 text-gray-600 font-medium hover:text-lindy-dark transition-colors"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#"
            className="px-4 py-2 text-gray-700 font-medium hover:text-lindy-dark transition-colors"
          >
            Log in
          </a>
          <a
            href="#"
            className="px-6 py-2.5 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-all"
          >
            Talk to sales
          </a>
          <a href="#" className="btn-primary">
            Try for free
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-lindy-dark" />
          ) : (
            <Menu className="w-6 h-6 text-lindy-dark" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto py-4 px-6 space-y-4">
            {navigation.map((item) => (
              <button
                key={item.name}
                className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-lindy-dark transition-colors font-medium"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <a
                href="#"
                className="block w-full py-2 text-gray-600 hover:text-lindy-dark transition-colors font-medium"
              >
                Log in
              </a>
              <a href="#" className="block w-full btn-secondary text-center">
                Talk to sales
              </a>
              <a href="#" className="block w-full btn-primary text-center">
                Try for free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
