import { useTitle } from "../../hooks/useTitle";
import { Faq } from "./components/Faq";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Hero } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";

export const HomePage = () => {
  useTitle("AlgoReads | Your one stop shop for computer science learning");

  return (
    <main className="flex flex-col gap-32">
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  );
};
