import Link from "next/link";
import { Search, User, ShoppingBag, ChevronDown } from "lucide-react";

const toolsAndEquipment = [
  { name: "Welders", href: "/collections/welders" },
  { name: "Storage & Organizers", href: "/collections/storage-organizers" },
  { name: "Burs & Drills", href: "/collections/burs-drills" },
  { name: "Casting Supplies", href: "/collections/casting-supplies" },
  { name: "Enameling Supplies & Equipment", href: "/collections/enameling-supplies" },
  { name: "Engraving Tools & Equipment", href: "/collections/engraving-tools" },
  { name: "Files", href: "/collections/files" },
  { name: "Flex Shafts & Rotary Tools", href: "/collections/flex-shafts" },
  { name: "Measuring & Testing", href: "/collections/measuring-testing" },
  { name: "Metal Forming", href: "/collections/metal-forming" },
  { name: "Plating Solutions, Supplies & Equipment", href: "/collections/plating-solutions" },
  { name: "Pliers & Cutters", href: "/collections/pliers-cutters" },
  { name: "Polishing & Finishing Tools", href: "/collections/polishing-finishing" },
  { name: "Safety Equipment", href: "/collections/safety-equipment" },
  { name: "Jewelry Saw Blades & Saw Frames", href: "/collections/saw-blades-frames" },
  { name: "Jewelry Soldering Supplies & Equipment", href: "/collections/soldering-supplies" },
  { name: "Stamping Tools for Jewelry", href: "/collections/stamping-tools" },
  { name: "Stone Setting Tools", href: "/collections/stone-setting-tools" },
  { name: "Benches & Accessories", href: "/collections/benches-accessories" },
  { name: "Adhesives", href: "/collections/adhesives" },
  { name: "3D Manufacturing", href: "/collections/3d-manufacturing" },
  { name: "Bead Stringing", href: "/collections/bead-stringing" },
  { name: "Gemstone Testing", href: "/collections/gemstone-testing" },
  { name: "Jewelry Cleaning", href: "/collections/jewelry-cleaning" },
  { name: "Kilns & Furnaces", href: "/collections/kilns-furnaces" },
  { name: "Lapidary Supplies", href: "/collections/lapidary-supplies" },
  { name: "Lighting & Photography", href: "/collections/lighting-photography" },
  { name: "Magnifiers & Optical Gear", href: "/collections/magnifiers-optical" },
  { name: "Mold & Model Making", href: "/collections/mold-model-making" },
  { name: "Tweezers", href: "/collections/tweezers" },
  { name: "Watch Batteries & Tools", href: "/collections/watch-batteries" },
  { name: "Wire Working & Wrapping", href: "/collections/wire-working" },
  { name: "Jewelry Production Equipment", href: "/collections/production-equipment" }
];

export default function Navbar() {
  return (
    <header className="w-full relative z-50">
      {/* Top Announcement Bar */}
      <div className="hidden md:flex justify-center md:justify-between items-center px-12 py-2 bg-brand-dark text-xs tracking-wider text-brand-silver">
        <span>Worldwide Shipping</span>
        <span>Certified Gemstones</span>
        <span>Secure Payments</span>
        <span>Lifetime Care</span>
      </div>

      {/* Main Navigation */}
      <div className="flex justify-between items-center px-6 md:px-12 py-6 bg-brand-black border-b border-brand-dark">
        
        {/* Left: Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-widest uppercase items-center">
          <Link href="/categories/jewelry" className="hover:text-brand-gold transition-colors">Jewelry</Link>
          <Link href="/categories/gemstones" className="hover:text-brand-gold transition-colors">Gemstones</Link>
          
          {/* Tools & Equipment Mega Menu */}
          <div className="relative group py-2">
            <Link href="/categories/tools" className="flex items-center gap-1 hover:text-brand-gold transition-colors">
              Tools & Equipment <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </Link>
            
            {/* Dropdown Container */}
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[500px]">
              <div className="bg-brand-black border border-brand-dark shadow-2xl p-6 relative">
                {/* Scrollable Grid */}
                <ul className="max-h-[50vh] overflow-y-auto custom-scrollbar grid grid-cols-2 gap-x-6 gap-y-4 pr-4">
                  {toolsAndEquipment.map((tool, index) => (
                    <li key={index}>
                      <Link 
                        href={tool.href} 
                        className="block text-brand-silver hover:text-brand-gold text-xs normal-case tracking-wide transition-colors"
                      >
                        {tool.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Link href="/about" className="hover:text-brand-gold transition-colors">About Us</Link>
        </nav>

        {/* Center: Logo */}
        <Link href="/" className="flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2">
          <span className="text-2xl md:text-3xl font-serif tracking-widest text-white">RIZANA</span>
          <span className="text-xs font-sans tracking-[0.4em] text-brand-gold mt-1">GEMS</span>
        </Link>

        {/* Right: Icons */}
        <div className="flex space-x-6 items-center">
          <button className="hover:text-brand-gold transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="hidden md:block hover:text-brand-gold transition-colors">
            <User size={20} strokeWidth={1.5} />
          </button>
          <button className="hover:text-brand-gold transition-colors relative">
            <ShoppingBag size={20} strokeWidth={1.5} />
            {/* Cart notification dot */}
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-gold"></span>
            </span>
          </button>
        </div>
        
      </div>
    </header>
  );
}