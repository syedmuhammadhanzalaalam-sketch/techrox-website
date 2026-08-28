"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/site/Section";
import { staggerItem, TiltCard } from "@/components/site/anim";
import { products } from "@/lib/site-content";

const CARD_ACCENTS = [
  { bg: "bg-blue-600", iconBg: "bg-blue-800/50", ring: "border-blue-300/40", glow: "oklch(0.6 0.2 255 / 0.55)" },
  { bg: "bg-emerald-600", iconBg: "bg-emerald-800/50", ring: "border-emerald-300/40", glow: "oklch(0.72 0.2 150 / 0.55)" },
  { bg: "bg-amber-500", iconBg: "bg-amber-800/50", ring: "border-amber-300/40", glow: "oklch(0.78 0.18 80 / 0.55)" },
];

export function ProductsClient() {
  const [featured, ...rest] = products;

  return (
    <Section className="pt-8">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        className="flex flex-col gap-6"
      >
        <ProductCard product={featured} accent={CARD_ACCENTS[0]} featured />
        <div className="grid gap-6 sm:grid-cols-2">
          {rest.map((p, i) => (
            <ProductCard key={p.slug} product={p} accent={CARD_ACCENTS[(i + 1) % CARD_ACCENTS.length]} />
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

function ProductCard({
  product: p,
  accent,
  featured = false,
}: {
  product: (typeof products)[number];
  accent: (typeof CARD_ACCENTS)[number];
  featured?: boolean;
}) {
  const outerClass = featured
    ? "group relative h-full overflow-hidden rounded-3xl border p-10 transition-shadow duration-500 hover:shadow-[0_25px_90px_-15px_var(--accent-glow)] md:p-12"
    : "group relative h-full overflow-hidden rounded-3xl border p-8 transition-shadow duration-500 hover:shadow-[0_25px_90px_-15px_var(--accent-glow)]";

  const linkClass = featured
    ? "relative flex h-full flex-col md:flex-row md:items-center md:justify-between md:gap-10"
    : "relative flex h-full flex-col";

  const iconWrapClass = featured
    ? "grid place-items-center rounded-2xl border border-white/30 h-16 w-16"
    : "grid place-items-center rounded-2xl border border-white/30 h-14 w-14";

  const iconClass = featured ? "h-7 w-7 text-white" : "h-6 w-6 text-white";

  const titleClass = featured
    ? "font-display font-bold text-white text-4xl md:text-5xl"
    : "font-display font-bold text-white text-3xl";

  const taglineClass = featured ? "mt-3 text-white/80 text-lg" : "mt-3 text-white/80";

  const ctaClass = featured
    ? "flex items-center gap-2 text-sm font-medium text-white mt-8 md:mt-0 md:shrink-0"
    : "flex items-center gap-2 text-sm font-medium text-white mt-auto pt-8";

  return (
    <motion.div variants={staggerItem} className={featured ? "" : "h-full"}>
      <TiltCard
        style={{ ["--accent-glow" as string]: accent.glow }}
        className={outerClass + " " + accent.bg + " " + accent.ring}
      >
        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className={linkClass} data-magnet>
          <div className={featured ? "md:max-w-xl" : ""}>
            <div className="mb-6 flex items-center gap-4">
              <div className={iconWrapClass + " " + accent.iconBg}>
                <p.Icon className={iconClass} />
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-white/70">{p.category}</span>
            </div>
            <h3 className={titleClass}>{p.name}</h3>
            <p className={taglineClass}>{p.tagline}</p>
          </div>
          <div className={ctaClass}>
            Explore product <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </div>
        </a>
      </TiltCard>
    </motion.div>
  );
}