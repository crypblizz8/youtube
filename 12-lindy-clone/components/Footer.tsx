import { Command } from "lucide-react";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6">
      {/* CTA Section */}
      <div className="py-20 border-t border-gray-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h4 className="text-2xl font-bold mb-2 text-lindy-dark">
              Ready to automate?
            </h4>
            <p className="text-gray-500">
              Start building your AI workforce today.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="px-8 py-3 bg-lindy-dark text-white rounded-full font-medium hover:bg-gray-800 transition-all"
            >
              Get Started
            </a>
            <a
              href="#"
              className="px-8 py-3 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-all text-lindy-dark"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-10 border-t border-gray-50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-2">
              <Command className="w-5 h-5 text-lindy-blue" />
              <span className="font-bold text-lg text-lindy-dark">Lindy</span>
            </a>
            <span className="text-sm text-gray-400">
              © {new Date().getFullYear()} Lindy. All rights reserved.
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-lindy-dark transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-lindy-dark transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-lindy-dark transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
