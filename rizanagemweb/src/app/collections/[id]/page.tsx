import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase"; 
import AnimatedProductGrid from "@/components/AnimatedProductGrid";

// ✨ THESE TWO LINES FORCE NEXT.JS TO ALWAYS FETCH FRESH DATA FROM FIREBASE
export const dynamic = "force-dynamic";
export const revalidate = 0;

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CollectionPage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawId = resolvedParams.id || "";

  const formattedTitle = rawId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Fetch products from Firebase where product.category == rawId
  let products: any[] = [];
  try {
    const q = query(collection(db, "products"), where("category", "==", rawId));
    const querySnapshot = await getDocs(q);
    products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <main className="min-h-screen bg-brand-black pt-28 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 border-b border-neutral-800 pb-8">
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
          {formattedTitle}
        </h1>
        <p className="font-sans text-brand-silver text-sm tracking-wide">
          Explore our professional selection of {formattedTitle.toLowerCase()} for master jewelers.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {products.length > 0 ? (
          <AnimatedProductGrid products={products} />
        ) : (
          <div className="py-20 flex flex-col items-center justify-center text-center border border-dashed border-neutral-800 rounded-lg bg-brand-dark/30">
            <p className="text-brand-silver text-lg mb-2">No products found in this category yet.</p>
            <p className="text-neutral-500 text-sm">Add items for {formattedTitle} from your admin panel to showcase them here.</p>
          </div>
        )}
      </div>
    </main>
  );
}