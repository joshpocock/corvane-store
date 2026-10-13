import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { img, products } from "@/lib/products";

const tests = [
  { k: "01", title: "The rain test", body: "Every bag gets a glass of water poured on it before it ships. Waxed canvas should bead, not soak.", slug: "vane-tote" },
  { k: "02", title: "The hot car test", body: "The Holdfast spends a full summer day in a parked car. If the ice is gone by evening, it does not ship.", slug: "holdfast-bottle" },
  { k: "03", title: "The pocket test", body: "The Squall Shell has to pack into its own chest pocket, one-handed, in under thirty seconds.", slug: "squall-shell" },
];

export default function Home() {
  const bags = products.filter((p) => p.category === "Bags");
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-oat">
        <Image src="/hero.jpg" alt="Commuter in a rust rain shell carrying a spruce tote on a rainy street at dusk" fill priority sizes="100vw" className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-40 pb-20 sm:pt-56 sm:pb-28">
          <p className="text-xs uppercase tracking-[0.3em] text-oat/70">Autumn 2026 collection</p>
          <h1 className="font-display mt-4 text-[2.6rem] sm:text-7xl lg:text-8xl leading-[0.95] max-w-4xl">
            Built for the <em className="text-rust not-italic whitespace-nowrap">in-between.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-oat/80">
            Rain on the way to work. A flight on Friday. A long day with no locker. Corvane makes the bags and
            layers that handle all of it, so you stop checking the forecast.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/shop" className="rounded-full bg-rust px-6 py-3 font-medium text-oat hover:bg-oat hover:text-ink transition-colors">
              Shop the collection
            </Link>
            <Link href="/products/vane-tote" className="rounded-full border border-oat/40 px-6 py-3 font-medium hover:bg-oat/10 transition-colors">
              Meet the Vane Tote
            </Link>
          </div>
        </div>
      </section>

      {/* Promise strip */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-ink/10 text-center">
          {[
            ["36 h", "cold, Holdfast Bottle"],
            ["20,000 mm", "waterproof, Squall Shell"],
            ["38 L", "carry-on, Weekend Duffel"],
            ["2 yr", "repair guarantee"],
          ].map(([n, l]) => (
            <div key={l} className="py-8 px-2">
              <p className="font-display text-3xl sm:text-4xl text-spruce">{n}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-ink/60">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Collection */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-rust">The collection</p>
            <h2 className="font-display text-4xl sm:text-5xl mt-2">Eight things. No filler.</h2>
          </div>
          <Link href="/shop" className="hidden sm:block text-sm underline underline-offset-4 hover:text-rust">Shop all</Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
          {products.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      {/* Feature: Vane Tote */}
      <section className="bg-spruce text-oat grain">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image src={img("vane-tote", "lifestyle")} alt="Vane Tote on a commuter in the rain" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-oat/60">Best seller</p>
            <h2 className="font-display text-5xl sm:text-6xl mt-3 leading-none">The tote that shrugs off rain.</h2>
            <p className="mt-6 text-oat/80 text-lg max-w-lg">
              Waxed canvas sheds a downpour. A magnetic pocket hands you your keys before you reach the door. And it
              fits a 16 inch laptop without looking like a laptop bag.
            </p>
            <ul className="mt-8 space-y-3">
              {["Waxed canvas sheds rain", "Magnetic quick pocket", "Fits a 16 inch laptop", "Two year repair guarantee"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-rust" /> {t}
                </li>
              ))}
            </ul>
            <Link href="/products/vane-tote" className="mt-10 inline-flex rounded-full bg-oat px-6 py-3 font-medium text-ink hover:bg-rust hover:text-oat transition-colors">
              Shop the Vane Tote, $128
            </Link>
          </div>
        </div>
      </section>

      {/* Tests */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-rust">How we test</p>
        <h2 className="font-display text-4xl sm:text-5xl mt-2 max-w-2xl">Tested in real weather, not a lab.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tests.map((t) => (
            <Link key={t.k} href={`/products/${t.slug}`} className="group rounded-3xl bg-oat-deep overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image src={img(t.slug, "lifestyle")} alt={t.title} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="font-display text-rust text-2xl">{t.k}</p>
                <h3 className="text-xl font-medium mt-1">{t.title}</h3>
                <p className="mt-2 text-ink/70">{t.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bags row */}
      <section className="bg-oat-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
          <h2 className="font-display text-4xl sm:text-5xl">One bag for every kind of day.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {bags.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                  <Image src={img(p.slug, "lifestyle")} alt={p.name} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6 text-oat">
                    <p className="font-display text-2xl">{p.name}</p>
                    <p className="text-sm text-oat/80">{p.tagline}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-rust">Why Corvane</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-2">A weather vane points at what is coming.</h2>
          <p className="mt-6 text-lg text-ink/70 max-w-lg">
            So do we. We design for the parts of the day nobody plans for: the rain that starts at 5:58, the
            overhead bin that is nearly full, the bottle that has to last until dinner. Buy one good thing instead
            of five cheap ones, and send it back to us when it needs fixing.
          </p>
          <Link href="/about" className="mt-8 inline-flex text-sm underline underline-offset-4 hover:text-rust">Read our story</Link>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
          <Image src="/about.jpg" alt="Waxed canvas, brass hardware and pattern pieces on a workshop table" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-3xl bg-rust text-oat px-6 py-14 sm:px-14 grid gap-8 md:grid-cols-2 items-center">
          <h2 className="font-display text-4xl sm:text-5xl leading-none">Get the forecast, not the spam.</h2>
          <div>
            <p className="text-oat/85">One email when something new ships. 10 percent off your first order.</p>
            <div className="mt-4 flex gap-2">
              <input aria-label="Email" placeholder="you@example.com" className="flex-1 rounded-full bg-oat/15 px-5 py-3 placeholder:text-oat/60 outline-none ring-1 ring-oat/30 focus:ring-oat" />
              <span className="rounded-full bg-ink px-6 py-3 font-medium">Sign up</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
