"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { RevealText, Reveal, Stagger, staggerItem, TiltCard } from "@/components/site/anim";
import { services } from "@/lib/site-content";

const CARD_ACCENTS = [
  { bg: "bg-blue-600", iconBg: "bg-blue-800/50", ring: "border-blue-300/40", glow: "oklch(0.6 0.2 255 / 0.55)" },
  { bg: "bg-emerald-600", iconBg: "bg-emerald-800/50", ring: "border-emerald-300/40", glow: "oklch(0.72 0.2 150 / 0.55)" },
  { bg: "bg-amber-500", iconBg: "bg-amber-800/50", ring: "border-amber-300/40", glow: "oklch(0.78 0.18 80 / 0.55)" },
  { bg: "bg-rose-600", iconBg: "bg-rose-800/50", ring: "border-rose-300/40", glow: "oklch(0.6 0.24 20 / 0.55)" },
  { bg: "bg-violet-600", iconBg: "bg-violet-800/50", ring: "border-violet-300/40", glow: "oklch(0.6 0.22 295 / 0.55)" },
  { bg: "bg-cyan-600", iconBg: "bg-cyan-800/50", ring: "border-cyan-300/40", glow: "oklch(0.68 0.18 210 / 0.55)" },
];

export function ServicesClient() {
  return (
    <>
      <Section className="pt-8">
        <Stagger className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => {
            const accent = CARD_ACCENTS[i % CARD_ACCENTS.length];
            return (
              <motion.div key={s.slug} variants={staggerItem}>
                <TiltCard
                  style={{ ["--accent-glow" as string]: accent.glow }}
                  className={`group h-full rounded-3xl border p-8 transition-shadow duration-500 hover:shadow-[0_25px_80px_-15px_var(--accent-glow)] ${accent.bg} ${accent.ring}`}
                >
                  <Link href={`/services/${s.slug}`} className="flex h-full flex-col" data-magnet>
                    <div className="flex items-center justify-between">
                      <div className={`grid h-14 w-14 place-items-center rounded-2xl border border-white/30 ${accent.iconBg}`}>
                        <s.Icon className="h-6 w-6 text-white" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-white/70 transition group-hover:translate-x-2 group-hover:text-white" />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-bold text-white md:text-3xl">{s.name}</h3>
                    <p className="mt-3 text-white/80">{s.tagline}</p>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {s.outcomes.map((o) => (
                        <span key={o} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs text-white">{o}</span>
                      ))}
                    </div>
                  </Link>
                </TiltCard>
              </motion.div>
            );
          })}
        </Stagger>
      </Section>
    </>
  );
}