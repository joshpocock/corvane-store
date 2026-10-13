import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { getProduct, img, products } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProduct((await params).slug);
  if (!p) return {};
  return {
    title: `${p.name}, ${p.colour}`,
    description: `${p.tagline} ${p.description}`,
    openGraph: { title: `${p.name} | Corvane`, description: p.tagline, images: [img(p.slug, "studio")] },
  };
}

export default async function ProductPage({ params }: Props) {
  const p = getProduct((await params).slug);
  if (!p) notFound();
  const related = products.filter((x) => x.slug !== p.slug && x.category === p.category).concat(products.filter((x) => x.category !== p.category)).slice(0, 4);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    image: [img(p.slug, "studio"), img(p.slug, "lifestyle")],
    brand: { "@type": "Brand", name: "Corvane" },
    color: p.colour,
    offers: { "@type": "Offer", price: p.price, priceCurrency: "USD", availability: "https://schema.org/InStock" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-oat-deep">
            <Image src={img(p.slug, "studio")} alt={`${p.name}, ${p.colour}`} fill priority sizes="(min-width:1024px) 30vw, 100vw" className="object-cover" />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-oat-deep">
            <Image src={img(p.slug, "lifestyle")} alt={`${p.name} in use`} fill sizes="(min-width:1024px) 30vw, 100vw" className="object-cover" />
          </div>
        </div>

        <div className="lg:sticky lg:top-28 self-start">
          <nav className="text-xs text-ink/50">
            <Link href="/shop" className="hover:text-rust">Shop</Link> / <Link href={`/shop/${p.category.toLowerCase()}`} className="hover:text-rust">{p.category}</Link>
          </nav>
          <h1 className="font-display text-5xl mt-3">{p.name}</h1>
          <p className="mt-2 text-xl text-ink/70">{p.tagline}</p>
          <p className="mt-6 text-3xl font-medium tabular-nums">${p.price}</p>

          <div className="mt-6 flex items-center gap-3 text-sm">
            <span className="h-6 w-6 rounded-full ring-2 ring-offset-2 ring-offset-oat ring-ink" style={{ background: p.swatch }} />
            {p.colour}
          </div>

          <p className="mt-6 text-ink/80 leading-relaxed">{p.description}</p>

          <ul className="mt-6 space-y-2.5">
            {p.points.map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
                {t}
              </li>
            ))}
          </ul>

          <button type="button" className="mt-8 w-full rounded-full bg-ink py-4 font-medium text-oat hover:bg-spruce transition-colors">
            Add to bag, ${p.price}
          </button>
          <p className="mt-3 text-center text-xs text-ink/50">Free shipping over $100. 30 day returns. Two year repair guarantee.</p>

          <div className="mt-8 rounded-2xl bg-spruce text-oat p-5">
            <p className="text-xs uppercase tracking-widest text-oat/60">The proof</p>
            <p className="font-display text-xl mt-1">{p.proof}</p>
          </div>

          <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/10 text-sm">
            {p.specs.map(([k, v]) => (
              <div key={k} className="flex justify-between py-3">
                <dt className="text-ink/60">{k}</dt>
                <dd className="font-medium text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-16">
        <h2 className="font-display text-4xl">Pairs well with</h2>
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
          {related.map((r) => (
            <ProductCard key={r.slug} p={r} />
          ))}
        </div>
      </section>
    </>
  );
}
