import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our story",
  description: "Corvane designs weather-ready commute and travel gear for city commuters and weekend travellers. Buy one good thing, fix it when it breaks.",
};

const values = [
  ["Buy one good thing", "Not five cheap ones. Everything we make is meant to be carried for years."],
  ["Fix it, don't replace it", "Every bag has a two year repair guarantee. Send it back and we will mend it."],
  ["Test it in real weather", "Rain, heat, overhead bins and rush hour. If it fails outside, it does not ship."],
];

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-rust">Our story</p>
          <h1 className="font-display text-5xl sm:text-6xl mt-2 leading-none">Gear for the parts of the day nobody plans.</h1>
          <p className="mt-6 text-lg text-ink/70">
            A weather vane does one job: it points at what is coming. We named the brand after it because that is
            the job we want our gear to do. The rain that starts as you leave the office. The Friday flight with a
            full overhead bin. The bottle that has to last from the school run to dinner.
          </p>
          <p className="mt-4 text-lg text-ink/70">
            We make eight things. Each one solves a real annoyance, gets tested outside, and comes with a promise to
            fix it if it breaks.
          </p>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
          <Image src="/about.jpg" alt="Workshop table with waxed canvas and brass hardware" fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </section>
      <section className="bg-spruce text-oat grain">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 grid gap-10 md:grid-cols-3">
          {values.map(([t, b]) => (
            <div key={t}>
              <h2 className="font-display text-3xl">{t}</h2>
              <p className="mt-3 text-oat/75">{b}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 text-center">
        <h2 className="font-display text-4xl sm:text-5xl">Ready for whatever is next?</h2>
        <Link href="/shop" className="mt-8 inline-flex rounded-full bg-rust px-6 py-3 font-medium text-oat hover:bg-ink transition-colors">
          Shop the collection
        </Link>
      </section>
    </>
  );
}
