import Link from "next/link";
import { Gem, RotateCcw, Truck, Sparkles } from "lucide-react";

export default function Features() {
  return (
    <section className="w-full bg-brand-dark border-t border-neutral-900">
      {/* Crafted to Perfection - 4 Column Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="flex flex-col items-center text-center">
            <Gem className="text-brand-gold mb-4" size={28} strokeWidth={1.5} />
            <h4 className="font-serif text-white text-lg mb-2">100% Solid Gold & Platinum</h4>
            <p className="font-sans text-brand-silver text-xs tracking-wide">Made to Last Forever</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <RotateCcw className="text-brand-gold mb-4" size={28} strokeWidth={1.5} />
            <h4 className="font-serif text-white text-lg mb-2">30 Day Hassle-Free Returns</h4>
            <p className="font-sans text-brand-silver text-xs tracking-wide">Fast & Free Delivery</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Truck className="text-brand-gold mb-4" size={28} strokeWidth={1.5} />
            <h4 className="font-serif text-white text-lg mb-2">Free Shipping Worldwide</h4>
            <p className="font-sans text-brand-silver text-xs tracking-wide">Insured & Secure</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Sparkles className="text-brand-gold mb-4" size={28} strokeWidth={1.5} />
            <h4 className="font-serif text-white text-lg mb-2">Lifetime Care</h4>
            <p className="font-sans text-brand-silver text-xs tracking-wide">Lifetime Cleaning & Care</p>
          </div>

        </div>
      </div>

      {/* The Rizana Experience Section */}
      <div className="w-full bg-brand-black py-20 px-6 md:px-12 text-center border-t border-neutral-900">
        <p className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4">The Rizana Experience</p>
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
          Crafted with Passion.<br />
          <span className="text-brand-silver">Worn with Pride.</span>
        </h2>
        <p className="font-sans text-brand-silver max-w-2xl mx-auto text-sm leading-relaxed mb-8">
          We believe fine jewelry is more than an accessory—it's a celebration of life's most cherished moments.
        </p>
        <Link 
          href="/about" 
          className="inline-flex items-center gap-2 text-white uppercase tracking-widest text-xs border-b border-brand-gold hover:text-brand-gold pb-1 transition-colors group"
        >
          Discover More <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}