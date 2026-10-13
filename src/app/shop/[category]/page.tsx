import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShopView } from "../page";
import type { Category } from "@/lib/products";

const map: Record<string, Category> = { bags: "Bags", outerwear: "Outerwear", gear: "Gear" };
type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return Object.keys(map).map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = map[(await params).category];
  return c ? { title: c } : {};
}

export default async function CategoryPage({ params }: Props) {
  const c = map[(await params).category];
  if (!c) notFound();
  return <ShopView active={c} />;
}
