import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink text-oat mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <div className="inline-flex rounded-lg bg-oat px-3 py-2">
            <Image src="/logo.svg" alt="Corvane" width={140} height={32} />
          </div>
          <p className="font-display text-3xl max-w-md">Built for the in-between.</p>
          <p className="text-oat/60 text-sm max-w-md">
            Weather-ready bags, outer layers and travel gear for the walk to work, the Friday flight and every
            long day with no locker.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-oat/50 uppercase tracking-widest text-xs mb-3">Shop</p>
          <Link href="/shop/bags" className="block hover:text-rust">Bags</Link>
          <Link href="/shop/outerwear" className="block hover:text-rust">Outerwear</Link>
          <Link href="/shop/gear" className="block hover:text-rust">Gear</Link>
          <Link href="/shop" className="block hover:text-rust">Shop all</Link>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-oat/50 uppercase tracking-widest text-xs mb-3">Corvane</p>
          <Link href="/about" className="block hover:text-rust">Our story</Link>
          <span className="block text-oat/80">Two year repair guarantee</span>
          <span className="block text-oat/80">30 day returns</span>
        </div>
      </div>
      <div className="border-t border-oat/10">
        <p className="mx-auto max-w-7xl px-4 sm:px-6 py-6 text-xs text-oat/40">
          Corvane is a fictional brand created for a product demo. Products are concepts and are not for sale.
        </p>
      </div>
    </footer>
  );
}
