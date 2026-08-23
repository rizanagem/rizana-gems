"use client";

import { useState } from "react";
import { useParams } from "next/navigation"; // 1. Import useParams
import Link from "next/link";
import Image from "next/image";
import { 
  Star, Shield, Truck, RotateCcw, Heart, 
  Minus, Plus, ShoppingBag, MessageCircle, Globe, Gem, ChevronRight
} from "lucide-react";

export default function ProductPage() {
  const params = useParams(); // 2. Hook to get the URL parameter
  
  // 3. Extract and format the product name from the URL
  // If the URL is /products/emerald-ring, it becomes "Emerald Ring"
  const rawSlug = params?.slug as string || "royal-blue-sapphire";
  const formattedProductName = rawSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const [activeImage, setActiveImage] = useState("https://placehold.co/800x800/111111/444444?text=Main+Image\n800x800");
  const [quantity, setQuantity] = useState(1);
  const [selectedCarat, setSelectedCarat] = useState("2.36 ct");
  const [activeTab, setActiveTab] = useState("description");

  // Placeholder images (eventually fetched from Firebase)
  const images = [
    "https://placehold.co/800x800/111111/444444?text=Main+Image\n800x800",
    "https://placehold.co/800x800/1a1a1a/555555?text=Side+Angle\n800x800",
    "https://placehold.co/800x800/222222/666666?text=Top+View\n800x800",
    "https://placehold.co/800x800/0a0a0a/333333?text=Certificate\n800x800"
  ];

  return (
    <div className="w-full bg-brand-black min-h-screen pt-28 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-brand-silver mb-8">
          <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span>/</span>
          <Link href="/collections" className="hover:text-brand-gold transition-colors">Collection</Link>
          <span>/</span>
          {/* Dynamically display the product name here */}
          <span className="text-white">{formattedProductName}</span>
        </div>

        {/* Top Section: Gallery & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          
          {/* Left: Image Gallery */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full aspect-square bg-brand-dark rounded-sm border border-neutral-900 overflow-hidden">
              <Image src={activeImage} alt={formattedProductName} fill className="object-cover" unoptimized />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative aspect-square bg-brand-dark border rounded-sm overflow-hidden transition-all ${activeImage === img ? 'border-brand-gold' : 'border-neutral-800 hover:border-brand-silver'}`}
                >
                  <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" unoptimized />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col">
            <div className="inline-block border border-brand-gold/50 text-brand-gold text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-sm mb-6 w-max">
              Natural & Certified
            </div>
            
            {/* Dynamic Product Title */}
            <h1 className="font-serif text-4xl md:text-5xl mb-4">{formattedProductName}</h1>
            
            <div className="font-sans text-2xl text-white mb-4">$2,850.00</div>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-brand-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="font-sans text-brand-silver text-xs tracking-wide">(28 reviews)</span>
            </div>

            <p className="font-sans text-brand-silver text-sm leading-relaxed mb-8">
              A breathtaking {formattedProductName.toLowerCase()} with extraordinary brilliance. This certified piece embodies timeless elegance and enduring value.
            </p>

            {/* Quick Specs */}
            <div className="flex flex-col gap-3 font-sans text-sm mb-10">
              <div className="flex justify-between border-b border-neutral-800 pb-2"><span className="text-brand-silver">Shape</span><span className="text-white">Oval</span></div>
              <div className="flex justify-between border-b border-neutral-800 pb-2"><span className="text-brand-silver">Origin</span><span className="text-white">Sri Lanka (Ceylon)</span></div>
              <div className="flex justify-between border-b border-neutral-800 pb-2"><span className="text-brand-silver">Carat Weight</span><span className="text-white">2.36 ct</span></div>
              <div className="flex justify-between border-b border-neutral-800 pb-2"><span className="text-brand-silver">Certification</span><span className="text-white">IGI Certified</span></div>
            </div>

            {/* Carat Selector */}
            <div className="mb-8">
              <label className="block font-sans text-xs uppercase tracking-widest text-brand-silver mb-3">Select Carat Weight</label>
              <div className="flex flex-wrap gap-3">
                {['1.01 ct', '1.52 ct', '2.36 ct', '3.01 ct', '4.20 ct'].map(carat => (
                  <button 
                    key={carat}
                    onClick={() => setSelectedCarat(carat)}
                    className={`px-4 py-2 text-xs font-sans border rounded-sm transition-colors ${selectedCarat === carat ? 'border-brand-gold text-brand-gold bg-brand-gold/10' : 'border-neutral-800 text-brand-silver hover:border-brand-silver'}`}
                  >
                    {carat}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
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
              <MessageCircle size={16} /> Enquire / Book Consultation
            </button>

            {/* Trust Mini Badges */}
            <div className="grid grid-cols-3 gap-4 border-t border-neutral-900 pt-8">
              <div className="flex flex-col gap-2">
                <Shield size={20} className="text-brand-gold" strokeWidth={1.5}/>
                <span className="font-sans text-[10px] uppercase tracking-wider text-brand-silver">IGI Certified</span>
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

          </div>
        </div>

        {/* Tabs Section */}
        <div className="w-full border border-neutral-900 rounded-sm bg-brand-dark p-8 md:p-12 mb-24">
          <div className="flex overflow-x-auto gap-8 border-b border-neutral-800 mb-8 no-scrollbar">
            {['description', 'specifications', 'shipping', 'care'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 font-sans text-xs uppercase tracking-widest whitespace-nowrap transition-colors border-b-2 ${activeTab === tab ? 'border-brand-gold text-brand-gold' : 'border-transparent text-brand-silver hover:text-white'}`}
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="font-sans text-brand-silver text-sm leading-relaxed space-y-4">
              <p>This {formattedProductName} captivates with its extraordinary brilliance. Mined in the renowned gem fields, it reflects the richness of tradition and the allure of refined luxury.</p>
              <p>Perfect for bespoke jewelry or investment, this piece represents wisdom, loyalty, and nobility—treasured across cultures for centuries.</p>
              <div className="flex gap-6 pt-4">
                <div className="flex items-center gap-2"><Shield size={14} className="text-brand-gold"/> <span className="text-xs uppercase tracking-wider">Natural</span></div>
                <div className="flex items-center gap-2"><Heart size={14} className="text-brand-gold"/> <span className="text-xs uppercase tracking-wider">Heirloom</span></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 font-sans text-sm">
              <div className="flex justify-between"><span className="text-brand-silver">Species</span><span>Corundum</span></div>
              <div className="flex justify-between"><span className="text-brand-silver">Color</span><span>Royal Blue</span></div>
              <div className="flex justify-between"><span className="text-brand-silver">Clarity</span><span>Eye Clean</span></div>
              <div className="flex justify-between"><span className="text-brand-silver">Luster</span><span>Excellent</span></div>
              <div className="flex justify-between"><span className="text-brand-silver">Treatment</span><span>Heated</span></div>
              <div className="flex justify-between"><span className="text-brand-silver">Dimensions</span><span>8.65 x 6.95 mm</span></div>
            </div>
          </div>
        </div>

        {/* ... Rest of your component (Why Choose Us, You May Also Like, Footer Banner) remains identical ... */}
        
      </div>
    </div>
  );
}