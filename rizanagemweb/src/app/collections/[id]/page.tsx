import AnimatedProductGrid from "@/components/AnimatedProductGrid";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CollectionPage({ params }: PageProps) {
  // Await params to comply with Next.js dynamic routing requirements
  const resolvedParams = await params;
  const rawId = resolvedParams.id || "";

  // Format the URL string into a clean, readable title (e.g., "welders" -> "Welders")
  const formattedTitle = rawId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Placeholder array - later you can fetch items matching this category from Firebase
  const dummyProducts: any[] = []; 

  return (
    <main className="min-h-screen bg-brand-black pt-28 pb-24 text-white">
      
      {/* Category Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 border-b border-neutral-800 pb-8">
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
          {formattedTitle}
        </h1>
        <p className="font-sans text-brand-silver text-sm tracking-wide">
          Explore our professional selection of {formattedTitle.toLowerCase()} for master jewelers.
        </p>
      </div>

      {/* Product Grid Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {dummyProducts.length > 0 ? (
          <AnimatedProductGrid products={dummyProducts} />
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