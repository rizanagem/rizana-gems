import Hero from "@/components/Hero";
import CategoryCircles from "@/components/CategoryCircles";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedTools from "@/components/FeaturedTools"; // <-- Imported new component
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-black">
      <Hero />
      <CategoryCircles />
      <CategoryGrid />
      <FeaturedTools /> {/* <-- Using the new component */}
      <Features />
    </div>
  );
}