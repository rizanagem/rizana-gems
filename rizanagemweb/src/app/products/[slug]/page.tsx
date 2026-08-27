"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { 
  Star, Shield, Truck, RotateCcw, 
  Minus, Plus, ShoppingBag, MessageCircle
} from "lucide-react";
import ProductAccordion from "@/components/ProductAccordion"; 

export default function ProductPage() {
  const params = useParams();
  const rawSlug = params?.slug as string;

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [activeImage, setActiveImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!rawSlug) return;

    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", rawSlug);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setProduct({ id: docSnap.id, ...data });

          if (data.images && data.images.length > 0) {
            setActiveImage(data.images[0]);
          } else {
            setActiveImage("https://placehold.co/800x800/111111/444444?text=No+Image");
          }
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [rawSlug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center text-brand-gold">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-gold mb-4"></div>
        <p className="font-sans text-sm uppercase tracking-widest text-brand-silver">Loading Product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center text-white">
        <h1 className="font-serif text-4xl mb-4">Product Not Found</h1>
        <Link href="/collections" className="text-brand-gold uppercase tracking-widest text-xs border border-brand-gold px-6 py-3 hover:bg-brand-gold hover:text-black transition-colors">
          Return to Collections
        </Link>
      </div>
    );
  }

  const images = product.images && product.images.length > 0 
    ? product.images 
    : ["https://placehold.co/800x800/111111/444444?text=No+Image"];

  // Fallback to substring of ID if productCode is missing
  const displayCode = product.productCode || product.id.substring(0, 8).toUpperCase();

  return (
    <div className="w-full bg-brand-black min-h-screen pt-28 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-brand-silver mb-8">
          <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/collections/${product.category}`} className="hover:text-brand-gold transition-colors">{product.category}</Link>
          <span>/</span>
          <span className="text-white truncate max-w-[200px]">{product.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          
          <div className="flex flex-col gap-4">
            <div className="relative w-full aspect-square bg-brand-dark rounded-sm border border-neutral-900 overflow-hidden">
              <Image src={activeImage} alt={product.title} fill className="object-cover" unoptimized />
            </div>
            
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {images.map((img: string, idx: number) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative aspect-square bg-brand-dark border rounded-sm overflow-hidden transition-all ${activeImage === img ? 'border-brand-gold' : 'border-neutral-800 hover:border-brand-silver'}`}
                  >
                    <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" unoptimized />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <div className="inline-block border border-brand-gold/50 text-brand-gold text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-sm mb-6 w-max">
              Professional Grade
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl mb-3">{product.title}</h1>
            
            {/* NEW: Display the product code below title */}
            <p className="font-sans text-brand-silver/80 text-[11px] uppercase tracking-widest mb-4">
              Product Code: <span className="text-brand-gold font-mono">{displayCode}</span>
            </p>
            
            <div className="font-sans text-2xl text-white mb-4">
              ${product.price?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            
            <div className="flex items-center gap-2 mb-8">
              <div className="flex text-brand-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="font-sans text-brand-silver text-xs tracking-wide">(Premium Quality)</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center justify-between border border-neutral-800 rounded-sm px-4 py-3 sm:w-32">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-brand-silver hover:text-white"><Minus size={16} /></button>
                <span className="font-sans text-sm">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-brand-silver hover:text-white"><Plus size={16} /></button>
              </div>
              <button className="flex-1 bg-brand-gold text-brand-black flex items-center justify-center gap-2 py-3 font-sans text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-white transition-colors">
                <ShoppingBag size={16} /> Add to Cart
              </button>
            </div>

            <button className="w-full border border-neutral-800 text-white flex items-center justify-center gap-2 py-4 font-sans text-xs uppercase tracking-widest rounded-sm hover:border-brand-gold hover:text-brand-gold transition-colors mb-10">
              <MessageCircle size={16} /> Enquire / Request Bulk Pricing
            </button>

            <div className="grid grid-cols-3 gap-4 border-t border-neutral-900 pt-8">
              <div className="flex flex-col gap-2">
                <Shield size={20} className="text-brand-gold" strokeWidth={1.5}/>
                <span className="font-sans text-[10px] uppercase tracking-wider text-brand-silver">Verified Quality</span>
              </div>
              <div className="flex flex-col gap-2">
                <Truck size={20} className="text-brand-gold" strokeWidth={1.5}/>
                <span className="font-sans text-[10px] uppercase tracking-wider text-brand-silver">Worldwide Shipping</span>
              </div>
              <div className="flex flex-col gap-2">
                <RotateCcw size={20} className="text-brand-gold" strokeWidth={1.5}/>
                <span className="font-sans text-[10px] uppercase tracking-wider text-brand-silver">30-Day Returns</span>
              </div>
            </div>

            <ProductAccordion 
              description={product.description} 
              specifications={product.specifications || []} 
            />

          </div>
        </div>

      </div>
    </div>
  );
}