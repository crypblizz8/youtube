"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-lindy-cream/80 backdrop-blur-md">
      <nav className="container-main flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-lindy-purple rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <span className="font-semibold text-xl text-gray-900">Lindy</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <button
              key={item.name}
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              {item.name}
              {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
            Login
          </button>
          <button className="btn-primary">Get a demo</button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="container-main py-4 px-4 space-y-4">
            {navigation.map((item) => (
              <button
                key={item.name}
                className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <button className="w-full text-left py-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                Login
              </button>
              <button className="w-full btn-primary">Get a demo</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
