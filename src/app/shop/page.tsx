import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products, type Category } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop all",
  description: "Bags, outer layers and travel gear built for the in-between. Waxed canvas totes, packable rain shells, 36-hour bottles.",
};

const cats: (Category | "All")[] = ["All", "Bags", "Outerwear", "Gear"];

export function ShopView({ active }: { active: Category | "All" }) {
  const list = active === "All" ? products : products.filter((p) => p.category === active);
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-rust">Shop</p>
      <h1 className="font-display text-5xl sm:text-6xl mt-2">{active === "All" ? "Everything" : active}</h1>
      <div className="mt-8 flex flex-wrap gap-2">
        {cats.map((k) => (
          <Link
            key={k}
            href={k === "All" ? "/shop" : `/shop/${k.toLowerCase()}`}
            className={`rounded-full px-4 py-2 text-sm ring-1 ring-ink/15 transition-colors ${k === active ? "bg-ink text-oat" : "hover:bg-oat-deep"}`}
          >
            {k}
          </Link>
        ))}
      </div>
      <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
        {list.map((p) => (
          <ProductCard key={p.slug} p={p} />
        ))}
      </div>
    </section>
  );
}

export default function Shop() {
  return <ShopView active="All" />;
}
