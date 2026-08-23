import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import AnimatedProductGrid from "@/components/AnimatedProductGrid";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

async function getCategoryProducts(categorySlug: string) {
  // Capitalize or format the slug to match your Firestore category field (e.g., "jewelry" -> "Jewelry")
  const formattedCategory = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);
  
  try {
    const q = query(collection(db, "products"), where("category", "==", formattedCategory));
    const querySnapshot = await getDocs(q);
    const products: any[] = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    return { products, categoryName: formattedCategory };
  } catch (error) {
    console.error("Error fetching category products:", error);
    return { products: [], categoryName: formattedCategory };
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { products, categoryName } = await getCategoryProducts(resolvedParams.slug);

  return (
    <div className="w-full bg-brand-black min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button */}
        <Link 
          href="/collections" 
          className="inline-flex items-center gap-2 text-brand-silver hover:text-brand-gold text-xs uppercase tracking-widest mb-8 transition-colors"
        >
          <ChevronLeft size={14} /> Back to All Collections
        </Link>

        {/* Page Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4 capitalize">
            {categoryName} Collection
          </h1>
          <p className="font-sans text-brand-silver max-w-2xl text-sm leading-relaxed mb-6">
            Explore our handpicked selection of premium {categoryName.toLowerCase()}, crafted with uncompromising detail and timeless elegance.
          </p>
          <div className="w-12 h-[1px] bg-brand-gold"></div>
        </div>

        {/* Product Grid or Empty State */}
        {products.length > 0 ? (
          <AnimatedProductGrid products={products} />
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="font-serif text-white text-xl mb-2">No items found in this category yet.</p>
            <p className="font-sans text-brand-silver text-xs tracking-wide mb-6">Add products to this category from your admin dashboard.</p>
            <Link 
              href="/admin" 
              className="px-6 py-3 bg-brand-gold text-brand-black font-sans text-xs uppercase tracking-widest rounded-sm hover:bg-white transition-colors"
            >
              Go to Admin Panel
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}