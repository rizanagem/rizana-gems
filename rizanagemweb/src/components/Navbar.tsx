import Link from "next/link";
import { Search, User, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full">
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
        <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-widest uppercase">
          <Link href="/categories/jewelry" className="hover:text-brand-gold transition-colors">Jewelry</Link>
          <Link href="/categories/gemstones" className="hover:text-brand-gold transition-colors">Gemstones</Link>
          <Link href="/categories/tools" className="hover:text-brand-gold transition-colors">Tools</Link>
          <Link href="/about" className="hover:text-brand-gold transition-colors">About Us</Link>
        </nav>

        {/* Center: Logo */}
        <Link href="/" className="flex flex-col items-center justify-center">
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