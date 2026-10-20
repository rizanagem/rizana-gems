import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowUpRight, Sparkles } from "lucide-react";

interface CollectionCard {
  id: string;
  badge: string;
  tagline: string;
  title: string;
  titleBreak: string;
  description: string;
  image: string;
  href: string;
  accentGlow: string;
  accentBorder: string;
  badgeStyle: string;
  accentText: string;
}

const collections: CollectionCard[] = [
  {
    id: "classic-elegance",
    badge: "Emerald Collection",
    tagline: "High Jewelry",
    title: "Classic",
    titleBreak: "Elegance",
    description: "Lustrous emerald pendants and handcrafted statement necklaces.",
    image: "/Classic Elegance.webp",
    href: "/categories/jewelry",
    accentGlow: "group-hover:shadow-[0_20px_50px_-10px_rgba(16,185,129,0.28)]",
    accentBorder: "group-hover:border-emerald-500/50",
    badgeStyle: "border-emerald-500/30 text-emerald-300/90 bg-emerald-950/50",
    accentText: "group-hover:text-emerald-400",
  },
  {
    id: "timeless-diamonds",
    badge: "Solitaires & Bridal",
    tagline: "Fine Diamonds",
    title: "Timeless",
    titleBreak: "Diamonds",
    description: "Exceptional brilliance cut to perfection for life's eternal moments.",
    image: "/timeless-iamonds.webp",
    href: "/categories/jewelry",
    accentGlow: "group-hover:shadow-[0_20px_50px_-10px_rgba(212,175,55,0.28)]",
    accentBorder: "group-hover:border-brand-gold/60",
    badgeStyle: "border-amber-400/30 text-amber-200/90 bg-amber-950/50",
    accentText: "group-hover:text-brand-gold",
  },
  {
    id: "royal-sapphires",
    badge: "Ceylon Heritage",
    tagline: "Rare Gemstones",
    title: "Royal",
    titleBreak: "Sapphires",
    description: "Legendary royal blue sapphires of uncompromised Ceylon lineage.",
    image: "/royal-sapphires.webp",
    href: "/categories/gemstones",
    accentGlow: "group-hover:shadow-[0_20px_50px_-10px_rgba(59,130,246,0.28)]",
    accentBorder: "group-hover:border-blue-500/50",
    badgeStyle: "border-blue-500/30 text-blue-300/90 bg-blue-950/50",
    accentText: "group-hover:text-blue-400",
  },
  {
    id: "everyday-luxury",
    badge: "Signature Bracelets",
    tagline: "Modern Accents",
    title: "Everyday",
    titleBreak: "Luxury",
    description: "Vibrant pink sapphire tennis bracelets designed for daily grace.",
    image: "/Everyday Luxury.webp",
    href: "/categories/jewelry",
    accentGlow: "group-hover:shadow-[0_20px_50px_-10px_rgba(244,114,182,0.25)]",
    accentBorder: "group-hover:border-rose-400/50",
    badgeStyle: "border-rose-400/30 text-rose-300/90 bg-rose-950/50",
    accentText: "group-hover:text-rose-400",
  },
];

export default function CategoryGrid() {
  return (
    <section className="relative w-full px-6 md:px-12 py-20 bg-brand-black border-b border-neutral-900 overflow-hidden">
      {/* Ambient background glow for luxury atmosphere */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-gold/[0.025] blur-[140px] pointer-events-none rounded-full" 
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 mb-3.5">
              <span className="w-8 h-[1px] bg-brand-gold" />
              <span className="text-brand-gold text-[11px] font-semibold uppercase tracking-[0.25em]">
                Curated Collections
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight">
              Find the <span className="italic font-serif text-brand-gold font-light">Perfect</span> Piece
            </h2>
            <p className="font-sans text-brand-silver/70 text-sm md:text-base mt-2.5 leading-relaxed">
              Explore our signature jewelry creations, where heirloom craftsmanship meets earth&apos;s rarest Ceylon gemstones.
            </p>
          </div>

          <Link 
            href="/collections" 
            className="group/btn inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-neutral-800 bg-neutral-900/70 hover:bg-white hover:text-brand-black hover:border-white text-brand-silver text-xs font-semibold uppercase tracking-widest transition-all duration-300 shrink-0 shadow-lg"
          >
            <span>View All Collections</span>
            <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* 4-Card Luxury Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {collections.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`group relative h-[470px] md:h-[510px] overflow-hidden rounded-2xl bg-neutral-950 border border-white/[0.08] flex flex-col justify-between p-6 sm:p-7 transition-all duration-700 ease-out hover:-translate-y-2 ${item.accentBorder} ${item.accentGlow}`}
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={`${item.title} ${item.titleBreak}`}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:brightness-105 z-0"
                unoptimized
              />

              {/* Shimmer light sweep on hover */}
              <div 
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/[0.12] to-transparent z-10 pointer-events-none" 
                aria-hidden="true" 
              />

              {/* Crisp Contrast Vignettes: Crystal clear jewel at top, dark gradient at bottom for readability */}
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 via-45% to-transparent z-10 pointer-events-none" />

              {/* Subtle inner card border highlight */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-brand-gold/30 transition-all duration-500 pointer-events-none z-20" />

              {/* Top Row: Floating Badge Pill & Circular Icon */}
              <div className="relative z-20 flex items-center justify-between gap-2">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] tracking-[0.18em] uppercase font-sans font-medium backdrop-blur-md border ${item.badgeStyle} transition-all duration-300 shadow-sm`}>
                  <Sparkles size={11} className="opacity-80" />
                  {item.badge}
                </span>

                <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/70 group-hover:bg-brand-gold group-hover:text-brand-black group-hover:border-brand-gold group-hover:scale-110 transition-all duration-300 shrink-0">
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </div>

              {/* Bottom Row: Text Content & CTA */}
              <div className="relative z-20">
                <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-gold/90 font-medium mb-1.5">
                  {item.tagline}
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl text-white mb-2 leading-tight tracking-tight transition-colors duration-300 group-hover:text-white">
                  {item.title}
                  <br />
                  <span className={`transition-colors duration-300 ${item.accentText}`}>
                    {item.titleBreak}
                  </span>
                </h3>

                <p className="font-sans text-brand-silver/75 text-xs leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Refined CTA Bar */}
                <div className="pt-3.5 border-t border-white/10 group-hover:border-white/20 flex items-center justify-between transition-colors">
                  <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-white/90 group-hover:text-brand-gold transition-colors">
                    Shop Now
                  </span>
                  <div className="flex items-center gap-1 text-brand-silver/60 group-hover:text-brand-gold transition-colors">
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
