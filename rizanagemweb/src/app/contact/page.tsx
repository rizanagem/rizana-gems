"use client";

import Link from "next/link";
import { ChevronLeft, Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full bg-brand-black min-h-screen pt-32 pb-24 px-6 md:px-12 text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-brand-silver hover:text-brand-gold text-xs uppercase tracking-widest mb-12 transition-colors"
        >
          <ChevronLeft size={14} /> Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4">Get in Touch</p>
          <h1 className="font-serif text-4xl md:text-6xl mb-6">Contact Our Concierge</h1>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mb-6"></div>
          <p className="font-sans text-brand-silver max-w-xl mx-auto text-sm leading-relaxed">
            Whether you are inquiring about a custom jewelry commission, certified gemstone availability, or professional jeweler tools, our team is here to assist you.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Contact Information */}
          <div className="space-y-8 bg-brand-dark p-8 md:p-12 rounded-sm border border-neutral-900">
            <h3 className="font-serif text-2xl text-white mb-6">Direct Inquiries</h3>
            
            <div className="flex items-start gap-4">
              <MapPin className="text-brand-gold shrink-0 mt-1" size={20} strokeWidth={1.5} />
              <div>
                <h4 className="font-serif text-white text-base mb-1">Showroom</h4>
                <p className="font-sans text-brand-silver text-xs leading-relaxed">
                  209, Sea Street<br />
                  Colombo 11, Colombo<br />
                  Sri Lanka, 01100
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-brand-gold shrink-0 mt-1" size={20} strokeWidth={1.5} />
              <div>
                <h4 className="font-serif text-white text-base mb-1">Email Us</h4>
                <p className="font-sans text-brand-silver text-xs leading-relaxed">
                  <a href="mailto:rizanagems@gmail.com" className="hover:text-brand-gold transition-colors">
                    rizanagems@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-brand-gold shrink-0 mt-1" size={20} strokeWidth={1.5} />
              <div>
                <h4 className="font-serif text-white text-base mb-1">Call Us</h4>
                <p className="font-sans text-brand-silver text-xs leading-relaxed">
                  <a href="tel:0112422927" className="hover:text-brand-gold transition-colors">
                    0112 422 927
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-brand-gold shrink-0 mt-1" size={20} strokeWidth={1.5} />
              <div>
                <h4 className="font-serif text-white text-base mb-1">Hours of Operation</h4>
                <p className="font-sans text-brand-silver text-xs leading-relaxed">
                  Monday – Saturday: 9:00 AM – 6:00 PM (IST)<br />
                  Sunday: By Appointment Only
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="bg-neutral-900/50 p-8 md:p-12 rounded-sm border border-neutral-800">
            <h3 className="font-serif text-2xl text-white mb-6">Send a Message</h3>
            
            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for your message. Our concierge will contact you shortly."); }} className="space-y-6">
              <div>
                <label className="block font-sans text-xs uppercase tracking-widest text-brand-silver mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Enter your full name" 
                  className="w-full bg-brand-black border border-neutral-800 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-gold transition-colors"
                />
              </div>

              <div>
                <label className="block font-sans text-xs uppercase tracking-widest text-brand-silver mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email address" 
                  className="w-full bg-brand-black border border-neutral-800 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-gold transition-colors"
                />
              </div>

              <div>
                <label className="block font-sans text-xs uppercase tracking-widest text-brand-silver mb-2">Subject / Inquiry Type</label>
                <select className="w-full bg-brand-black border border-neutral-800 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-gold transition-colors">
                  <option>Custom Jewelry Commission</option>
                  <option>Gemstone Certification & Details</option>
                  <option>Jeweler Tools Order</option>
                  <option>General Support</option>
                </select>
              </div>

              <div>
                <label className="block font-sans text-xs uppercase tracking-widest text-brand-silver mb-2">Message</label>
                <textarea 
                  rows={4} 
                  required
                  placeholder="Tell us about your requirements..." 
                  className="w-full bg-brand-black border border-neutral-800 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-gold transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-brand-gold text-brand-black font-sans text-xs uppercase tracking-widest rounded-sm hover:bg-white transition-colors font-medium"
              >
                Send Inquiry
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}