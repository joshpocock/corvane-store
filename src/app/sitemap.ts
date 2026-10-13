import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

const base = "https://corvane-store.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/shop",
    "/shop/bags",
    "/shop/outerwear",
    "/shop/gear",
    "/about",
    ...products.map((p) => `/products/${p.slug}`),
  ].map((path) => ({ url: `${base}${path}` }));
}
