import Link from "next/link";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

// Mock data based on the provided layout
const favoriteProducts = [
  { id: 1, name: "Timeless Halo Pendant Necklace", price: "$2,750" },
  { id: 2, name: "Sapphire Solitaire Ring", price: "$3,450" },
  { id: 3, name: "Emerald Drop Earrings", price: "$2,750" },
  { id: 4, name: "Half Eternity Band", price: "$1,950" },
  { id: 5, name: "Peach Halo Cocktail Ring", price: "$2,250" },
];

export default function CustomerFavorites() {
  return (
    <section className="w-full py-20 bg-brand-black border-t border-brand-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-serif text-3xl text-white mb-2">Customer Favorites</h2>
            <div className="w-12 h-[1px] bg-brand-gold"></div>
          </div>
          
          {/* Custom Navigation Arrows (Visual only for now, can be wired to scroll refs later) */}
          <div className="hidden md:flex gap-4">
            <button className="p-2 border border-brand-dark rounded-full hover:bg-brand-dark hover:text-brand-gold transition-colors text-brand-silver">
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 border border-brand-dark rounded-full hover:bg-brand-dark hover:text-brand-gold transition-colors text-brand-silver">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
          {favoriteProducts.map((product) => (
            <div 
              key={product.id} 
              className="snap-start min-w-[280px] md:min-w-[320px] flex-shrink-0 group cursor-pointer"
            >
              {/* Product Image Placeholder */}
              <div className="relative w-full aspect-[4/5] bg-brand-dark mb-4 overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Heart Icon */}
                <button className="absolute top-4 right-4 z-20 text-brand-silver hover:text-brand-gold transition-colors">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
                
                {/* Quick Shop Button (Appears on hover) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 w-[90%]">
                  <button className="w-full py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs uppercase tracking-widest hover:bg-brand-gold hover:border-brand-gold transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-col items-center text-center">
                <h3 className="font-serif text-lg text-white mb-1 group-hover:text-brand-gold transition-colors">
                  {product.name}
                </h3>
                <p className="font-sans text-brand-silver text-sm">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}