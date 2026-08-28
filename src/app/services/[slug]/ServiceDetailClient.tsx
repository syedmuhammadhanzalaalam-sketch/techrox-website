"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { RevealText, Reveal, Stagger, staggerItem } from "@/components/site/anim";
import { services } from "@/lib/site-content";

const CHIP_POSITIONS = [
  { cls: "left-6 top-8", x: 12, y: 12 },
  { cls: "right-6 top-14", x: 88, y: 18 },
  { cls: "left-8 bottom-10", x: 14, y: 88 },
  { cls: "right-8 bottom-16", x: 86, y: 82 },
];

export function ServiceDetailClient({ slug }: { slug: string }) {
  const s = services.find((svc) => svc.slug === slug)!;
  const chips = s.stack.slice(0, 4);

  return (
    <Section className="pt-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow>Service</Eyebrow>
          <RevealText as="h1" text={s.name} className="mt-4 font-display text-5xl font-bold md:text-7xl text-silver-bright glow-text" />
          <Reveal delay={0.2}><p className="mt-6 text-lg text-silver/90 md:text-xl">{s.tagline}</p></Reveal>
          <Reveal delay={0.3}><p className="mt-4 max-w-xl text-muted-foreground">{s.description}</p></Reveal>

          <Stagger className="mt-6 flex flex-wrap gap-2">
            {s.outcomes.map((o) => (
              <motion.span
                key={o}
                variants={staggerItem}
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-300"
              >
                <Check className="h-3.5 w-3.5" /> {o}
              </motion.span>
            ))}
          </Stagger>

          <Reveal delay={0.5}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-silver btn-silver-hover" data-magnet>
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-border/70 px-6 py-3 text-sm text-silver hover:border-silver hover:text-silver-bright" data-magnet>
                See all services
              </Link>
            </div>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-silver/20"
          style={{ background: "radial-gradient(circle at 50% 40%, oklch(0.28 0.03 260), oklch(0.1 0.02 260) 70%)" }}
        >
          {/* dot-grid texture */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(oklch(0.9 0.01 260 / 0.4) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />

          {/* pulse-connection lines from each badge to the center */}
          <svg
            aria-hidden
            viewBox="0 0 100 75"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            {CHIP_POSITIONS.slice(0, chips.length).map((pos, i) => (
              <line
                key={i}
                x1={pos.x}
                y1={pos.y * 0.75}
                x2="50"
                y2="37.5"
                stroke="oklch(0.85 0.01 260 / 0.7)"
                strokeWidth="0.4"
                strokeDasharray="2 6"
                vectorEffect="non-scaling-stroke"
                className="pulse-line"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            ))}
          </svg>

          {/* pulsing glow behind the icon */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-silver/20 blur-[80px] animate-pulse-glow"
          />

          {/* slow rotating orbit rings */}
          <motion.div
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-silver/25"
          />
          <motion.div
            aria-hidden
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-silver/20"
          />

          {/* the icon itself */}
          {/* the icon itself */}
<motion.div
  initial={{ opacity: 0, scale: 0.7 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl silver-border shadow-[0_0_60px_oklch(0.9_0.01_260/0.35)]"
>
  <s.Icon className="h-14 w-14 shrink-0 translate-y-[3px] text-silver-bright" />
</motion.div>

          {/* floating tech-stack chips */}
          {chips.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 0.6 + i * 0.15 },
                y: { duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 + i * 0.15 },
              }}
              className={`glass absolute z-10 rounded-full px-3 py-1.5 text-xs text-silver/90 ${CHIP_POSITIONS[i].cls}`}
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {s.subServices && s.subServices.length > 0 && (
        <div className="mt-16">
          <Reveal delay={0.2}>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-silver-dim">What's included</p>
          </Reveal>
          <Stagger className="flex flex-wrap gap-3">
            {s.subServices.map((sub) => (
              <motion.span
                key={sub}
                variants={staggerItem}
                className="glass rounded-full border border-silver/20 px-4 py-2 text-sm text-silver-bright"
              >
                {sub}
              </motion.span>
            ))}
          </Stagger>
        </div>
      )}
    </Section>
  );
}