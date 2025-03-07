import { useEffect, useState } from "react";
import { getFeaturedList } from "../../../services/productService";
import { toast } from "react-toastify";
import { Product } from "../../../models/product";
import { ProductCard } from "../../../components/Elements/ProductCard";

export const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getFeaturedList();
        setProducts(data);
      } catch (error: any) {
        toast.error(error.message, { closeButton: true, position: "bottom-center" });
      }
    }
    fetchProducts();
  }, []);

  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured eBooks
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
