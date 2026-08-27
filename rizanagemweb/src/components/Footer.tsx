import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-black border-t border-brand-dark pt-20 pb-10 px-6 md:px-12 text-brand-silver">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="flex flex-col">
          <Link href="/" className="flex flex-col items-start mb-6">
            <span className="text-2xl font-serif tracking-widest text-white">RIZANA</span>
            <span className="text-xs font-sans tracking-[0.4em] text-brand-gold mt-1">GEMS</span>
          </Link>
          <p className="text-sm leading-relaxed mb-6">
            Fine jewelry, rare gemstones, and precision tools—curated with excellence worldwide.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-gold transition-colors"><FaFacebook size={18} /></a>
            <a href="#" className="hover:text-brand-gold transition-colors"><FaInstagram size={18} /></a>
            <a href="#" className="hover:text-brand-gold transition-colors"><FaTwitter size={18} /></a>
            <a href="#" className="hover:text-brand-gold transition-colors"><FaYoutube size={18} /></a>
          </div>
        </div>

        {/* Shop Navigation */}
        <div className="flex flex-col">
          <h4 className="text-white uppercase tracking-widest text-xs font-semibold mb-6">Shop</h4>
          <div className="flex flex-col gap-3 text-sm">
            {/* UPDATED: Changed from /jewelry/... to /collections/... to match your dynamic routes */}
            <Link href="/collections/rings" className="hover:text-brand-gold transition-colors">Rings</Link>
            <Link href="/collections/necklaces" className="hover:text-brand-gold transition-colors">Necklaces</Link>
            <Link href="/collections/earrings" className="hover:text-brand-gold transition-colors">Earrings</Link>
            <Link href="/collections/gemstones" className="hover:text-brand-gold transition-colors">Gemstones</Link>
            <Link href="/collections" className="hover:text-brand-gold transition-colors">Tools</Link>
          </div>
        </div>

        {/* Customer Care */}
        <div className="flex flex-col">
          <h4 className="text-white uppercase tracking-widest text-xs font-semibold mb-6">Customer Care</h4>
          <div className="flex flex-col gap-3 text-sm">
            <Link href="/shipping" className="hover:text-brand-gold transition-colors">Shipping & Delivery</Link>
            <Link href="/returns" className="hover:text-brand-gold transition-colors">Returns & Exchanges</Link>
            <Link href="/faq" className="hover:text-brand-gold transition-colors">FAQs</Link>
            <Link href="/care-guide" className="hover:text-brand-gold transition-colors">Care Guide</Link>
            <Link href="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col">
          <h4 className="text-white uppercase tracking-widest text-xs font-semibold mb-6">Stay Connected</h4>
          <p className="text-sm mb-4">Get 10% off your first order when you subscribe to our newsletter.</p>
          <form className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent border-b border-neutral-700 py-2 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors"
              required
            />
            <button 
              type="submit" 
              className="text-left text-xs uppercase tracking-widest font-semibold text-brand-gold hover:text-white transition-colors mt-2"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
        <p>© 2026 Rizana Gems. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}