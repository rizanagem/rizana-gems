"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Heart } from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function AnimatedProductGrid({ products }: { products: any[] }) {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => {
        // Grab the first image from the array, or fall back to empty string
        const productImage = product.images && product.images.length > 0 ? product.images[0] : "";

        return (
          <motion.div variants={item} key={product.id} className="h-full">
            
            <Link href={`/collections/${product.id}`} className="group cursor-pointer flex flex-col h-full">
              {/* Product Image */}
              <div className="relative w-full aspect-[4/5] bg-brand-dark mb-4 overflow-hidden rounded-sm flex items-center justify-center">
                {productImage ? (
                  <img 
                    src={productImage} 
                    alt={product.title || product.name} 
                    className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110" 
                  />
                ) : (
                  <span className="text-brand-silver text-[10px] uppercase tracking-widest">[ No Image ]</span>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 z-20 text-[10px] uppercase tracking-widest text-brand-silver bg-brand-black/50 px-2 py-1 backdrop-blur-sm">
                  {product.category}
                </span>

                <button className="absolute top-4 right-4 z-20 text-brand-silver hover:text-brand-gold transition-colors">
                  <Heart size={18} strokeWidth={1.5} />
                </button>
              </div>

              {/* Product Details */}
              <div className="flex flex-col items-center text-center mt-auto">
                <h3 className="font-serif text-lg text-white mb-1 group-hover:text-brand-gold transition-colors">
                  {product.title || product.name}
                </h3>
                <p className="font-sans text-brand-silver text-sm">
                  ${product.price?.toLocaleString()}
                </p>
              </div>
            </Link>

          </motion.div>
        );
      })}
    </motion.div>
  );
}