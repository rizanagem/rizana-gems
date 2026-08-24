"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

export default function FeaturedTools() {
  const [tools, setTools] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchRandomTools = async () => {
      try {
        const q = query(collection(db, "products"), where("mainCategory", "==", "Tools & Equipment"));
        const snapshot = await getDocs(q);
        const fetchedTools = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        const shuffled = fetchedTools.sort(() => 0.5 - Math.random());
        
        setTools(shuffled.slice(0, 6));
      } catch (error) {
        console.error("Error fetching tools:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomTools();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 350; 
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  if (!loading && tools.length === 0) return null;

  return (
    <section className="w-full bg-brand-black py-20 border-b border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-serif text-3xl text-white">Featured Tools & Equipment</h2>
          <div className="flex gap-2">
            <button 
              onClick={() => scroll("left")} 
              className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-brand-silver hover:text-white hover:border-brand-gold transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll("right")} 
              className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-brand-silver hover:text-white hover:border-brand-gold transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex gap-6 overflow-hidden">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="min-w-[280px] md:min-w-[320px] aspect-[4/5] bg-brand-dark/50 animate-pulse rounded-sm border border-neutral-900"></div>
            ))}
          </div>
        ) : (
          <div 
            ref={scrollContainerRef} 
            className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {tools.map((tool) => {
              const productImage = tool.images && tool.images.length > 0 ? tool.images[0] : "";

              return (
                <Link 
                  href={`/products/${tool.id}`} 
                  key={tool.id} 
                  className="min-w-[280px] md:min-w-[320px] group cursor-pointer flex flex-col snap-start"
                >
                  <div className="relative w-full aspect-[4/5] bg-brand-dark mb-4 overflow-hidden rounded-sm border border-neutral-900">
                    {productImage ? (
                      <Image 
                        src={productImage} 
                        alt={tool.title}
                        fill
                        className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-brand-silver text-[10px] uppercase tracking-widest">[ No Image ]</span>
                      </div>
                    )}
                    
                    <button className="absolute top-4 right-4 z-20 text-brand-silver hover:text-brand-gold transition-colors">
                      <Heart size={18} strokeWidth={1.5} />
                    </button>
                  </div>

                  <div className="flex flex-col items-center text-center mt-auto">
                    <h3 className="font-serif text-lg text-white mb-1 group-hover:text-brand-gold transition-colors">
                      {tool.title}
                    </h3>
                    <p className="font-sans text-brand-silver text-sm">
                      ${tool.price?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}