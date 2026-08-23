"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Star, Shield, Truck, RotateCcw, Heart, 
  Minus, Plus, ShoppingBag, MessageCircle, Globe, Gem, ChevronRight
} from "lucide-react";

export default function ProductPage() {
  const [activeImage, setActiveImage] = useState("https://placehold.co/800x800/111111/444444?text=Main+Sapphire\n800x800");
  const [quantity, setQuantity] = useState(1);
  const [selectedCarat, setSelectedCarat] = useState("2.36 ct");
  const [activeTab, setActiveTab] = useState("description");

  const images = [
    "https://placehold.co/800x800/111111/444444?text=Main+Sapphire\n800x800",
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
          <Link href="/categories/gemstones" className="hover:text-brand-gold transition-colors">Gemstones</Link>
          <span>/</span>
          <span className="text-white">Royal Blue Sapphire</span>
        </div>

        {/* Top Section: Gallery & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          
          {/* Left: Image Gallery */}
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative w-full aspect-square bg-brand-dark rounded-sm border border-neutral-900 overflow-hidden">
              <Image 
                src={activeImage} 
                alt="Product" 
                fill 
                className="object-cover"
                unoptimized
              />
            </div>
            {/* Thumbnails */}
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
            <h1 className="font-serif text-4xl md:text-5xl mb-4">Royal Blue Sapphire</h1>
            <div className="font-sans text-2xl text-white mb-4">$2,850.00</div>
            
            {/* Reviews */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-brand-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="font-sans text-brand-silver text-xs tracking-wide">(28 reviews)</span>
            </div>

            <p className="font-sans text-brand-silver text-sm leading-relaxed mb-8">
              A breathtaking natural blue sapphire with intense royal tones and exceptional brilliance. This certified gemstone embodies timeless elegance and enduring value.
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
              {/* Quantity */}
              <div className="flex items-center justify-between border border-neutral-800 rounded-sm px-4 py-3 sm:w-32">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-brand-silver hover:text-white"><Minus size={16} /></button>
                <span className="font-sans text-sm">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-brand-silver hover:text-white"><Plus size={16} /></button>
              </div>
              
              {/* Add to Cart */}
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
              <p>This Royal Blue Sapphire captivates with its velvety blue hue and extraordinary brilliance. Mined in the renowned gem fields of Sri Lanka, it reflects the richness of tradition and the allure of refined luxury.</p>
              <p>Perfect for bespoke jewelry or investment, this sapphire represents wisdom, loyalty, and nobility—treasured across cultures for centuries.</p>
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

        {/* Why Choose Us */}
        <div className="w-full bg-brand-dark/50 border border-neutral-900 rounded-sm py-16 px-6 mb-24 text-center">
          <p className="font-sans text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold mb-12">Why Choose Rizana Gems</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
            <div className="flex flex-col items-center gap-4 pt-6 md:pt-0">
              <Gem size={32} className="text-white" strokeWidth={1} />
              <h4 className="font-serif text-lg">Certified Quality</h4>
              <p className="font-sans text-brand-silver text-xs">Every gemstone is certified by leading laboratories.</p>
            </div>
            <div className="flex flex-col items-center gap-4 pt-6 md:pt-0">
              <Globe size={32} className="text-white" strokeWidth={1} />
              <h4 className="font-serif text-lg">Expert Sourcing</h4>
              <p className="font-sans text-brand-silver text-xs">Ethically sourced from the world's finest origins.</p>
            </div>
            <div className="flex flex-col items-center gap-4 pt-6 md:pt-0">
              <Truck size={32} className="text-white" strokeWidth={1} />
              <h4 className="font-serif text-lg">Worldwide Delivery</h4>
              <p className="font-sans text-brand-silver text-xs">Insured, secure shipping to your doorstep.</p>
            </div>
            <div className="flex flex-col items-center gap-4 pt-6 md:pt-0">
              <Heart size={32} className="text-white" strokeWidth={1} />
              <h4 className="font-serif text-lg">Lifetime Care</h4>
              <p className="font-sans text-brand-silver text-xs">Cleaning, inspection & care for a lifetime.</p>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mb-24">
          <div className="flex justify-between items-end mb-8">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-brand-silver">You May Also Like</h3>
            <Link href="/categories/gemstones" className="flex items-center gap-2 text-brand-gold uppercase tracking-widest text-[10px] font-semibold transition-colors">
              View All <ChevronRight size={14} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "Emerald", price: "$1,650.00", img: "https://placehold.co/600x600/064e3b/ffffff?text=Emerald\n600x600" },
              { name: "Ruby", price: "$1,450.00", img: "https://placehold.co/600x600/7f1d1d/ffffff?text=Ruby\n600x600" },
              { name: "Yellow Sapphire", price: "$1,250.00", img: "https://placehold.co/600x600/78350f/ffffff?text=Yellow+Sapphire\n600x600" },
              { name: "Blue Topaz", price: "$890.00", img: "https://placehold.co/600x600/0c4a6e/ffffff?text=Blue+Topaz\n600x600" }
            ].map((item, idx) => (
              <Link key={idx} href="#" className="group bg-brand-dark border border-neutral-900 rounded-sm p-4 hover:border-neutral-700 transition-colors">
                <div className="relative w-full aspect-square mb-4 bg-brand-black overflow-hidden">
                  <Image src={item.img} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized/>
                  <button className="absolute top-3 right-3 text-brand-silver hover:text-brand-gold z-10"><Heart size={18}/></button>
                </div>
                <h4 className="font-serif text-lg mb-1">{item.name}</h4>
                <div className="font-sans text-sm text-brand-silver">{item.price}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Banner */}
        <div className="relative w-full h-[300px] rounded-sm overflow-hidden border border-neutral-900 flex items-center p-12">
           <Image src="https://placehold.co/1200x400/0a0a0a/333333?text=Banner+Image\n1200x400" alt="Banner" fill className="object-cover opacity-50 z-0" unoptimized />
           <div className="relative z-10 max-w-lg">
             <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 leading-tight">Timeless Beauty.<br/>Trusted Forever.</h2>
             <p className="font-sans text-brand-silver text-sm mb-8">At Rizana Gems, we celebrate nature's rarest creations with integrity, craftsmanship, and a passion for perfection.</p>
             <Link href="/collections" className="inline-block border border-brand-gold text-brand-gold text-xs uppercase tracking-widest px-6 py-3 hover:bg-brand-gold hover:text-brand-black transition-colors">
               Discover Our Collection
             </Link>
           </div>
        </div>

      </div>
    </div>
  );
}