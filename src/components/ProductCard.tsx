import Link from "next/link";
import Image from "next/image";
import { img, type Product } from "@/lib/products";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link href={`/products/${p.slug}`} className="group block">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-oat-deep">
        <Image
          src={img(p.slug, "studio")}
          alt={`${p.name}, ${p.colour}`}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <Image
          src={img(p.slug, "lifestyle")}
          alt={`${p.name} in use`}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <span className="absolute left-3 top-3 rounded-full bg-oat/90 px-2.5 py-1 text-[11px] uppercase tracking-wider">
          {p.category}
        </span>
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-medium">{p.name}</h3>
          <p className="text-sm text-ink/60">{p.tagline}</p>
        </div>
        <p className="font-medium tabular-nums">${p.price}</p>
      </div>
      <div className="mt-2 flex items-center gap-2 text-xs text-ink/60">
        <span className="h-3 w-3 rounded-full ring-1 ring-ink/20" style={{ background: p.swatch }} />
        {p.colour}
      </div>
    </Link>
  );
}
