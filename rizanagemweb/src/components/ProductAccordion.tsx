"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface Spec {
  key: string;
  value: string;
}

interface ProductAccordionProps {
  description: string;
  specifications?: Spec[];
}

export default function ProductAccordion({ description, specifications = [] }: ProductAccordionProps) {
  // We swapped these default states!
  const [isDescOpen, setIsDescOpen] = useState(false);
  const [isSpecsOpen, setIsSpecsOpen] = useState(true);

  return (
    <div className="w-full mt-8 border-t border-neutral-800">
      
      {/* Description Accordion */}
      <div className="border-b border-neutral-800">
        <button 
          onClick={() => setIsDescOpen(!isDescOpen)}
          className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
        >
          <span className="font-serif text-lg text-white group-hover:text-brand-gold transition-colors">Description</span>
          {isDescOpen ? <Minus size={18} className="text-brand-silver" /> : <Plus size={18} className="text-brand-silver" />}
        </button>
        
        {isDescOpen && (
          <div className="pb-6 animate-in slide-in-from-top-2 fade-in duration-200">
            <p className="font-sans text-brand-silver text-sm leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>
        )}
      </div>

      {/* Specifications Accordion (Only shows if specs exist) */}
      {specifications.length > 0 && (
        <div className="border-b border-neutral-800">
          <button 
            onClick={() => setIsSpecsOpen(!isSpecsOpen)}
            className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
          >
            <span className="font-serif text-lg text-white group-hover:text-brand-gold transition-colors">Specifications & Features</span>
            {isSpecsOpen ? <Minus size={18} className="text-brand-silver" /> : <Plus size={18} className="text-brand-silver" />}
          </button>
          
          {isSpecsOpen && (
            <div className="pb-6 animate-in slide-in-from-top-2 fade-in duration-200">
              <h4 className="font-sans text-white text-sm font-semibold mb-3">Attributes</h4>
              <ul className="space-y-2">
                {specifications.map((spec, index) => (
                  <li key={index} className="flex items-start text-sm text-brand-silver">
                    <span className="mr-2 text-brand-gold">•</span>
                    <span>
                      <strong className="text-white font-medium">{spec.key}:</strong> {spec.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

    </div>
  );
}