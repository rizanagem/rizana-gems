"use client";

import { useState, useMemo } from "react";
import AnimatedProductGrid from "@/components/AnimatedProductGrid";
import { Filter } from "lucide-react";

export default function FilteredProductGrid({ products }: { products: any[] }) {
  const [selectedBrand, setSelectedBrand] = useState("All");

  // Extract unique brands, ignoring any products that don't have a brand set
  const brands = useMemo(() => {
    const uniqueBrands = new Set<string>();
    products.forEach(p => {
      if (p.brand && p.brand.trim() !== "") {
        uniqueBrands.add(p.brand.trim());
      }
    });
    return ["All", ...Array.from(uniqueBrands).sort()];
  }, [products]);

  // Filter products based on the selected brand button
  const filteredProducts = selectedBrand === "All"
    ? products
    : products.filter(p => p.brand === selectedBrand);

  return (
    <div className="w-full">
      {/* Brand Filter Menu - Only shows up if there is at least 1 brand */}
      {brands.length > 1 && (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 pb-6 border-b border-neutral-900 gap-4">
          <div className="text-brand-silver text-xs uppercase tracking-widest flex items-center gap-2 shrink-0">
            <Filter size={14} className="text-brand-gold" /> Filter by Brand
          </div>
          
          <div className="flex gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-5 py-2 rounded-sm text-[10px] uppercase tracking-widest whitespace-nowrap transition-all border ${
                  selectedBrand === brand
                    ? "bg-brand-gold text-brand-black border-brand-gold font-bold"
                    : "bg-brand-dark text-brand-silver border-neutral-800 hover:border-brand-gold/50"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* The Product Grid */}
      <AnimatedProductGrid products={filteredProducts} />

      {/* Fallback if a filter somehow results in 0 items */}
      {filteredProducts.length === 0 && (
        <div className="text-center text-brand-silver py-12 text-sm italic">
          No products found for the selected brand.
        </div>
      )}
    </div>
  );
}