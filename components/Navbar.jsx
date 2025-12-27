"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="container h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="text-xl font-semibold text-eco-dark tracking-wide">
          ECO<span className="text-eco-base">-FIBER</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-7 text-sm font-medium text-text-secondary">
          {[
            ["About", "#about"],
            ["Innovation", "#innovation"],
            ["Inventor", "#inventor"],
            ["Jute", "#jute"],
            ["Product", "#product"],
            ["Gallery", "#gallery"],
            ["Contact", "#contact"],
          ].map(([label, link]) => (
            <a
              key={label}
              href={link}
              className="pb-1 border-b-2 border-transparent hover:border-eco-base hover:text-eco-dark transition-all duration-300"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
