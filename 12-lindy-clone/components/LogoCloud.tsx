const logos = [
  { name: "Braze", className: "font-bold" },
  { name: "Amplitude", className: "font-bold" },
  { name: "Rippling", className: "font-bold" },
  { name: "Plivo", className: "font-bold" },
  { name: "YC", className: "font-bold" },
  { name: "Terracoin", className: "font-bold" },
  { name: "GC", className: "font-bold" },
  { name: "AngelList", className: "font-bold" },
  { name: "nest", className: "font-bold" },
  { name: "plateau", className: "font-bold" },
  { name: "Thread", className: "font-bold" },
  { name: "Blackbird", className: "font-bold" },
];

export default function LogoCloud() {
  return (
    <section className="bg-white py-16 border-y border-gray-100">
      <div className="container-main px-4 md:px-8">
        <p className="text-center text-gray-500 mb-10 text-sm">
          Your next hire isn&apos;t human. These teams know.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`text-gray-400 hover:text-gray-600 transition-colors ${logo.className}`}
            >
              <span className="text-lg md:text-xl">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
