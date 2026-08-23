import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import AnimatedProductGrid from "@/components/AnimatedProductGrid";

async function getProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products: any[] = [];
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });
  return products;
}

export default async function CollectionsPage() {
  const products = await getProducts();

  return (
    <div className="w-full bg-brand-black min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Discover Our Finest Collection
          </h1>
          <p className="font-sans text-brand-silver max-w-2xl text-sm leading-relaxed mb-6">
            Exquisite jewelry, rare gemstones, and precision tools for true craftsmanship.
          </p>
          <div className="w-12 h-[1px] bg-brand-gold"></div>
        </div>

        {/* Animated Client Component */}
        <AnimatedProductGrid products={products} />

      </div>
    </div>
  );
}