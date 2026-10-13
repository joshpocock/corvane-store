import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/shop", label: "Shop all" },
  { href: "/shop/bags", label: "Bags" },
  { href: "/shop/outerwear", label: "Outerwear" },
  { href: "/shop/gear", label: "Gear" },
  { href: "/about", label: "Our story" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40">
      <div className="bg-spruce text-oat text-xs tracking-wide overflow-hidden">
        <div className="marquee flex w-max gap-12 py-2 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12 pr-12">
              <span>Free shipping over $100</span>
              <span>Two year repair guarantee on every bag</span>
              <span>Tested in real rain, not a lab</span>
              <span>30 day returns, no questions</span>
            </div>
          ))}
        </div>
      </div>
      <div className="border-b border-ink/10 bg-oat/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link href="/" aria-label="Corvane home" className="shrink-0">
            <Image src="/logo.svg" alt="Corvane" width={150} height={34} priority />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {nav.map((n) => (
              <Link key={n.label} href={n.href} className="hover:text-rust transition-colors">
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/shop"
              className="hidden sm:inline-flex rounded-full bg-ink px-4 py-2 text-sm text-oat hover:bg-spruce transition-colors"
            >
              Shop now
            </Link>
            <span className="text-sm" aria-label="Bag, 0 items">Bag (0)</span>
            <details className="md:hidden relative">
              <summary className="list-none cursor-pointer rounded-full border border-ink/20 px-3 py-1.5 text-sm">Menu</summary>
              <div className="absolute right-0 mt-2 w-48 rounded-xl bg-oat shadow-xl ring-1 ring-ink/10 p-2">
                {nav.map((n) => (
                  <Link key={n.label} href={n.href} className="block rounded-lg px-3 py-2 text-sm hover:bg-oat-deep">
                    {n.label}
                  </Link>
                ))}
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
