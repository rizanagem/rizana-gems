import Link from "next/link";
import { Gem, Palette, Headset, Lightbulb, Star } from "lucide-react";

const reviews = [
  {
    name: "Eleanor V.",
    text: "The custom engagement ring they crafted was beyond our wildest dreams. The attention to detail and craftsmanship are truly unmatched."
  },
  {
    name: "Marcus T.",
    text: "As a professional jeweler, I rely on their precision tools daily. The quality of their equipment has noticeably elevated my own workshop."
  },
  {
    name: "Sophia L.",
    text: "Incredible quality Padparadscha Sapphire! The lab certification gave me complete peace of mind, and the worldwide shipping was incredibly secure."
  },
  {
    name: "James R.",
    text: "The expert gemologist support was outstanding. They patiently walked me through the selection process and helped me find the perfect ruby within my budget."
  },
  {
    name: "Amina K.",
    text: "Stunning solid gold pieces made to last forever. I have purchased several items from Rizana Gems and the quality is consistently breathtaking."
  }
];

export default function Features() {
  return (
    <section className="w-full bg-brand-dark border-t border-neutral-900">
      {/* Crafted to Perfection - 4 Column Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="flex flex-col items-center text-center">
            <Gem className="text-brand-gold mb-4" size={28} strokeWidth={1.5} />
            <h4 className="font-serif text-white text-lg mb-2">Certified Natural Gemstones</h4>
            <p className="font-sans text-brand-silver text-xs tracking-wide leading-relaxed">
              Every gemstone is lab-certified and ethically sourced from trusted origins.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Palette className="text-brand-gold mb-4" size={28} strokeWidth={1.5} />
            <h4 className="font-serif text-white text-lg mb-2">Custom Jewelry Options</h4>
            <p className="font-sans text-brand-silver text-xs tracking-wide leading-relaxed">
              Tailor-made designs crafted to reflect your style and complement your gemstone.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Headset className="text-brand-gold mb-4" size={28} strokeWidth={1.5} />
            <h4 className="font-serif text-white text-lg mb-2">Expert Gemologist Support</h4>
            <p className="font-sans text-brand-silver text-xs tracking-wide leading-relaxed">
              Free consultation to help you find the perfect gemstone within your budget.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Lightbulb className="text-brand-gold mb-4" size={28} strokeWidth={1.5} />
            <h4 className="font-serif text-white text-lg mb-2">Practical</h4>
            <p className="font-sans text-brand-silver text-xs tracking-wide leading-relaxed">
              Our products are innovative, practically designed to make your life easier everyday.
            </p>
          </div>

        </div>
      </div>

      {/* The Rizana Experience Section */}
      <div className="w-full bg-brand-black py-20 px-6 md:px-12 text-center border-t border-neutral-900">
        <div className="max-w-4xl mx-auto">
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
            className="inline-flex items-center gap-2 text-white uppercase tracking-widest text-xs border-b border-brand-gold hover:text-brand-gold pb-1 transition-colors group mb-20"
          >
            Discover More <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>

        {/* Customer Reviews Carousel */}
        <div className="max-w-7xl mx-auto mt-4">
          <div 
            className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 text-left"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className="min-w-[300px] md:min-w-[380px] shrink-0 bg-brand-dark border border-neutral-800 p-8 rounded-sm snap-start flex flex-col justify-between hover:border-brand-gold/50 transition-colors"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-brand-gold fill-brand-gold" />
                    ))}
                  </div>
                  <p className="font-sans text-brand-silver text-sm italic leading-relaxed mb-8">
                    "{review.text}"
                  </p>
                </div>
                <div className="flex items-center gap-3 border-t border-neutral-800 pt-4">
                  <div className="w-8 h-8 rounded-full bg-brand-black flex items-center justify-center text-brand-gold font-serif text-sm border border-neutral-700">
                    {review.name.charAt(0)}
                  </div>
                  <p className="font-serif text-white tracking-wide text-sm">
                    {review.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}