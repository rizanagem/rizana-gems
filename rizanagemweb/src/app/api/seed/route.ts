import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

const catalogData = [
  // Jewelry Category
  { category: "jewelry", name: "Timeless Halo Pendant Necklace", price: 2750, material: "Platinum", stock: 5 },
  { category: "jewelry", name: "Sapphire Solitaire Ring", price: 3450, material: "White Gold", stock: 3 },
  { category: "jewelry", name: "Emerald Drop Earrings", price: 2750, material: "Yellow Gold", stock: 2 },
  { category: "jewelry", name: "Half Eternity Band", price: 1950, material: "Platinum", stock: 10 },
  { category: "jewelry", name: "Peach Halo Cocktail Ring", price: 2250, material: "Rose Gold", stock: 4 },
  
  // Gemstones Category
  { category: "gemstones", name: "Royal Blue Sapphire", price: 2850, caratWeight: 2.36, cut: "Oval Mixed Brilliant", certification: "IGI Certified", stock: 1 },
  { category: "gemstones", name: "Emerald", price: 1650, caratWeight: 2.35, cut: "Emerald Cut", certification: "IGI Certified", stock: 1 },
  { category: "gemstones", name: "Ruby", price: 1450, caratWeight: 2.08, cut: "Oval", certification: "IGI Certified", stock: 1 },
  { category: "gemstones", name: "Yellow Sapphire", price: 1250, caratWeight: 2.31, cut: "Oval", certification: "IGI Certified", stock: 1 },
  { category: "gemstones", name: "Blue Topaz", price: 890, caratWeight: 3.12, cut: "Cushion", certification: "IGI Certified", stock: 1 },
  { category: "gemstones", name: "South Sea Pearl", price: 450, caratWeight: null, size: "11.5 mm", certification: "Certified", stock: 5 }
];

export async function GET() {
  try {
    const productsRef = collection(db, "products");
    
    for (const item of catalogData) {
      await addDoc(productsRef, item);
    }

    return NextResponse.json({ message: "Database successfully seeded!" }, { status: 200 });
  } catch (error: any) {
    console.error("Firebase Seed Error:", error);
    return NextResponse.json({ 
      error: "Failed to seed database", 
      details: error.message 
    }, { status: 500 });
  }
}