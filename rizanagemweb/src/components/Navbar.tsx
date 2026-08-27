"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { Search, User, ShoppingBag, ChevronDown, Menu, X } from "lucide-react";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-50">
      {/* Top Announcement Bar */}
      <div className="hidden lg:flex justify-center lg:justify-between items-center px-12 py-2 bg-brand-dark text-xs tracking-wider text-brand-silver">
        <span>Worldwide Shipping</span>
        <span>Certified Gemstones</span>
        <span>Secure Payments</span>
        <span>Lifetime Care</span>
      </div>

      {/* Main Navigation */}
      <div className="flex justify-between items-center px-6 lg:px-12 py-6 bg-brand-black border-b border-brand-dark">
        
        {/* Left: Navigation Links & Mobile Menu Toggle */}
        <div className="flex-1 flex justify-start items-center">
          {/* Mobile Hamburger Icon (Hidden on Desktop) */}
          <button 
            className="lg:hidden text-brand-silver hover:text-brand-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8 text-sm font-medium tracking-widest uppercase items-center">
            <Link href="/categories/jewelry" className="hover:text-brand-gold transition-colors">Jewelry</Link>
            <Link href="/categories/gemstones" className="hover:text-brand-gold transition-colors">Gemstones</Link>
            
            {/* Tools & Equipment Mega Menu */}
            <div className="relative group py-2">
              <Link href="/categories/tools" className="flex items-center gap-1 hover:text-brand-gold transition-colors">
                Tools & Equipment <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              
              <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[500px]">
                <div className="bg-brand-black border border-brand-dark shadow-2xl p-6 relative">
                  <ul className="max-h-[50vh] overflow-y-auto custom-scrollbar grid grid-cols-2 gap-x-6 gap-y-4 pr-4 text-left">
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
          </nav>
        </div>

        {/* Center: Image Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center justify-center px-4">
          <Image 
            src="/logo.png" 
            alt="Rizana Gems" 
            width={160} 
            height={60} 
            className="object-contain h-auto w-32 md:w-40" 
            priority 
          />
        </Link>

        {/* Right: Navigation Links & Icons */}
        <div className="flex-1 flex justify-end items-center">
          <nav className="hidden lg:flex space-x-6 xl:space-x-8 text-sm font-medium tracking-widest uppercase items-center">
            <Link href="/about" className="hover:text-brand-gold transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link>
          </nav>

          {/* Icons */}
          <div className="flex space-x-5 lg:space-x-6 items-center ml-0 lg:ml-6 xl:ml-8 lg:pl-6 xl:pl-8 lg:border-l border-neutral-800">
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
        
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-brand-black flex flex-col lg:hidden animate-in fade-in duration-200">
          <div className="flex justify-between items-center px-6 py-6 border-b border-brand-dark">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Image 
                src="/logo.png" 
                alt="Rizana Gems" 
                width={120} 
                height={45} 
                className="object-contain" 
              />
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="text-brand-silver hover:text-brand-gold transition-colors"
            >
              <X size={28} strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex flex-col p-6 space-y-8 overflow-y-auto pb-20">
            <Link href="/categories/jewelry" onClick={() => setIsMobileMenuOpen(false)} className="text-white uppercase tracking-widest text-sm hover:text-brand-gold transition-colors">
              Jewelry
            </Link>
            <Link href="/categories/gemstones" onClick={() => setIsMobileMenuOpen(false)} className="text-white uppercase tracking-widest text-sm hover:text-brand-gold transition-colors">
              Gemstones
            </Link>
            <div className="flex flex-col space-y-4">
              <Link href="/categories/tools" onClick={() => setIsMobileMenuOpen(false)} className="text-white uppercase tracking-widest text-sm hover:text-brand-gold transition-colors">
                Tools & Equipment
              </Link>
              <div className="flex flex-col space-y-3 pl-4 border-l border-brand-dark">
                {toolsAndEquipment.map((tool, index) => (
                  <Link 
                    key={index} 
                    href={tool.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-brand-silver text-xs hover:text-brand-gold transition-colors"
                  >
                    {tool.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="h-px bg-brand-dark w-full my-4"></div>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-white uppercase tracking-widest text-sm hover:text-brand-gold transition-colors">
              About Us
            </Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-white uppercase tracking-widest text-sm hover:text-brand-gold transition-colors">
              Contact Us
            </Link>
            <Link href="/account" onClick={() => setIsMobileMenuOpen(false)} className="text-white uppercase tracking-widest text-sm hover:text-brand-gold transition-colors flex items-center gap-2">
              <User size={16} /> My Account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}