import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center bg-brand-black overflow-hidden border-b border-neutral-900">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Overlay to keep text readable */}
        {/* 1. Changed via-brand-black/80 to via-brand-black/40 */}
<div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-brand-black/40 to-transparent z-10" />
        
{/* 2. Changed opacity-60 to opacity-90 (or remove opacity-60 completely for full brightness) */}
<video 
  autoPlay 
  loop 
  muted 
  playsInline 
  className="w-full h-full object-cover opacity-90"
>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl">
          <p className="font-sans text-brand-silver uppercase tracking-[0.2em] text-xs font-semibold mb-6">
            Timeless Beauty. Crafted with Passion.
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
            Rarest Gems.<br />
            <span className="text-brand-silver">Finest Craftsmanship.</span>
          </h1>
          <p className="font-sans text-brand-silver text-base md:text-lg mb-10 max-w-lg leading-relaxed">
            Explore our high-end jewelry collection in fine gold & rare metals.
          </p>
          
          <Link 
            href="/collections" 
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-gold text-brand-black font-sans text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-white transition-all group"
          >
            Explore Collections
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      
    </section>
  );
}