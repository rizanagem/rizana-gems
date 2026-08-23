import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function CategoryGrid() {
  return (
    <section className="w-full px-6 md:px-12 py-16 bg-brand-black border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <h2 className="font-serif text-3xl md:text-4xl text-white">Find the Perfect Piece</h2>
          <Link href="/collections" className="flex items-center gap-2 text-brand-silver hover:text-brand-gold uppercase tracking-widest text-xs font-semibold transition-colors pb-1">
            View All Collections <ChevronRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          
          {/* Card 1 */}
          <Link href="/categories/jewelry" className="group relative h-[450px] overflow-hidden rounded-md bg-neutral-900 flex flex-col justify-end p-8">
            <Image src="/Classic Elegance.webp" alt="Category 1" fill className="object-cover transition-transform duration-700 group-hover:scale-105 z-0" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark to-emerald-900/30 transition-transform duration-700 group-hover:scale-105 z-10"></div>
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500 z-10"></div>
            <div className="relative z-20">
              <h3 className="font-serif text-3xl text-white mb-4 leading-tight">Classic<br />Elegance</h3>
              <div className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-widest">Shop Now <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /></div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/categories/jewelry" className="group relative h-[450px] overflow-hidden rounded-md bg-neutral-900 flex flex-col justify-end p-8">
            <Image src="https://placehold.co/800x1000/1a1a1a/666666?text=Category+Card\n800+x+1000" alt="Category 2" fill className="object-cover transition-transform duration-700 group-hover:scale-105 z-0" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark to-neutral-600/30 transition-transform duration-700 group-hover:scale-105 z-10"></div>
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500 z-10"></div>
            <div className="relative z-20">
              <h3 className="font-serif text-3xl text-white mb-4 leading-tight">Timeless<br />Diamonds</h3>
              <div className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-widest">Shop Now <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /></div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/categories/gemstones" className="group relative h-[450px] overflow-hidden rounded-md bg-neutral-900 flex flex-col justify-end p-8">
            <Image src="https://placehold.co/800x1000/1a1a1a/666666?text=Category+Card\n800+x+1000" alt="Category 3" fill className="object-cover transition-transform duration-700 group-hover:scale-105 z-0" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark to-blue-900/40 transition-transform duration-700 group-hover:scale-105 z-10"></div>
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500 z-10"></div>
            <div className="relative z-20">
              <h3 className="font-serif text-3xl text-white mb-4 leading-tight">Royal<br />Sapphires</h3>
              <div className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-widest">Shop Now <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /></div>
            </div>
          </Link>

          {/* Card 4 */}
          <Link href="/categories/jewelry" className="group relative h-[450px] overflow-hidden rounded-md bg-neutral-900 flex flex-col justify-end p-8">
            <Image src="/Everyday Luxury.webp" alt="Category 4" fill className="object-cover transition-transform duration-700 group-hover:scale-105 z-0" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark to-rose-900/30 transition-transform duration-700 group-hover:scale-105 z-10"></div>
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500 z-10"></div>
            <div className="relative z-20">
              <h3 className="font-serif text-3xl text-white mb-4 leading-tight">Everyday<br />Luxury</h3>
              <div className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-widest">Shop Now <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /></div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}