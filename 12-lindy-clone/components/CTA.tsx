import { Sparkles, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-lindy-cream py-16 md:py-24">
      <div className="container-main px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Automate with AI</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Build your<br />AI workforce.
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Start building AI employees that automate tasks, handle customer support, manage sales, and work across thousands of apps.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-lindy-purple text-white rounded-full hover:bg-primary-700 transition-colors font-medium">
              Try for free
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors font-medium">
              Get a demo
            </button>
          </div>

          {/* Trust indicator */}
          <p className="mt-8 text-sm text-gray-500">
            No credit card required. Start building in minutes.
          </p>
        </div>
      </div>
    </section>
  );
}
