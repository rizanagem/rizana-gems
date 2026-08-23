import AnimatedProductGrid from "@/components/AnimatedProductGrid"; 

export default function CollectionPage({ params }: { params: { id: string } }) {
  
  // 1. Grab the dynamic ID from the URL (e.g., "welders")
  const rawId = params.id;

  // 2. Format the URL string into a beautiful title (e.g., "Welders")
  const formattedTitle = rawId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // 3. Placeholder for your database fetch
  const dummyProducts: any[] = []; 

  return (
    <main className="min-h-screen bg-brand-black pt-24 pb-16">
      
      {/* Dynamic Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 border-b border-neutral-800 pb-8">
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
          {formattedTitle}
        </h1>
        <p className="font-sans text-brand-silver text-sm tracking-wide">
          Explore our premium selection of {formattedTitle.toLowerCase()} for professional jewelers.
        </p>
      </div>

      {/* Product Grid Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {dummyProducts.length > 0 ? (
          <AnimatedProductGrid products={dummyProducts} />
        ) : (
          <div className="py-20 flex flex-col items-center justify-center text-center border border-dashed border-neutral-800 rounded-lg">
            <p className="text-brand-silver text-lg mb-2">No products found in this category.</p>
            <p className="text-neutral-500 text-sm">Add some {formattedTitle.toLowerCase()} from your admin panel to see them here.</p>
          </div>
        )}
      </div>

    </main>
  );
}