import Hero from "@/components/Hero";
import CategoryCircles from "@/components/CategoryCircles";
import CategoryGrid from "@/components/CategoryGrid";
import CustomerFavorites from "@/components/CustomerFavorites";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-black">
      <Hero />
      <CategoryCircles />
      <CategoryGrid />
      <CustomerFavorites />
      <Features />
    </div>
  );
}