import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full bg-brand-black min-h-screen pt-32 pb-24 px-6 md:px-12 text-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-brand-silver hover:text-brand-gold text-xs uppercase tracking-widest mb-12 transition-colors"
        >
          <ChevronLeft size={14} /> Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4">Our Heritage</p>
          <h1 className="font-serif text-4xl md:text-6xl mb-6">The Story of Rizana Gems</h1>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto"></div>
        </div>

        {/* Content Body */}
        <div className="space-y-8 font-sans text-brand-silver text-sm md:text-base leading-relaxed">
          <p>
            Rooted in a deep passion for the earth's most rare and treasured creations, <strong className="text-white">Rizana Gems</strong> has established a legacy of uncompromising excellence. We specialize in sourcing and hand-crafting fine jewelry and certified gemstones that transcend generations.
          </p>
          
          <h3 className="font-serif text-2xl text-white pt-4">Uncompromising Quality & Craftsmanship</h3>
          <p>
            Every piece in our collection tells a unique story. From ethically sourced diamonds and vivid royal sapphires to precision master-crafted jeweler tools, we hold ourselves to the highest standards of luxury and authenticity.
          </p>

          <h3 className="font-serif text-2xl text-white pt-4">Our Promise to You</h3>
          <p>
            We believe that fine jewelry is more than an accessory—it is an heirloom of your most cherished life milestones. Backed by worldwide insured shipping, certified authenticity, and lifetime care, we ensure your investment remains brilliant forever.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center border-t border-neutral-900 pt-12">
          <p className="font-serif text-xl mb-6">Discover our latest masterpieces.</p>
          <Link 
            href="/collections" 
            className="inline-block px-8 py-4 bg-brand-gold text-brand-black font-sans text-xs uppercase tracking-widest rounded-sm hover:bg-white transition-colors"
          >
            Explore Collections
          </Link>
        </div>

      </div>
    </div>
  );
}