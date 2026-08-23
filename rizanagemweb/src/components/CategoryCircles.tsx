import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const categories = [
  { name: "Rings", href: "/categories/rings" },
  { name: "Necklaces", href: "/categories/necklaces" },
  { name: "Earrings", href: "/categories/earrings" },
  { name: "Bracelets", href: "/categories/bracelets" },
  { name: "Gemstones", href: "/categories/gemstones" },
  { name: "Men's Jewelry", href: "/categories/mens" },
  { name: "Wedding", href: "/categories/wedding" },
  { name: "Watches", href: "/categories/watches" },
];

export default function CategoryCircles() {
  return (
    <section className="w-full bg-brand-black py-12 border-b border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative group">
        
        <div className="flex items-center justify-start md:justify-center gap-6 md:gap-10 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((category) => (
            <Link 
              key={category.name} 
              href={category.href}
              className="flex flex-col items-center gap-3 min-w-[80px] group/item"
            >
              <div className="relative w-20 h-20 rounded-full bg-brand-dark border border-neutral-800 flex items-center justify-center group-hover/item:border-brand-gold transition-colors overflow-hidden">
                <Image 
                  src="https://placehold.co/200x200/1a1a1a/666666?text=200x200" 
                  alt={category.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <span className="font-sans text-brand-silver text-xs tracking-wide group-hover/item:text-white transition-colors">
                {category.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-brand-black to-transparent w-16 h-full pointer-events-none md:hidden flex items-center justify-end pr-2">
           <ChevronRight size={20} className="text-brand-silver" />
        </div>

      </div>
    </section>
  );
}