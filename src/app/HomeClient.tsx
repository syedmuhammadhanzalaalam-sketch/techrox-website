"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Section, Eyebrow } from "@/components/site/Section";
import { RevealText, Reveal, Stagger, staggerItem, Counter, TiltCard } from "@/components/site/anim";
import { services, products, stats } from "@/lib/site-content";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export function HomeClient() {
  return (
    <>
      <Hero />
      <ProductsPreview />
      <StatsSection />
      <LatestInsights />
      <FinalCTA />
    </>
  );
}

const CARD_ACCENTS = [
  { bg: "bg-violet-600", iconBg: "bg-violet-800/50", ring: "border-violet-400/40", glow: "oklch(0.62 0.25 300 / 0.55)" },
  { bg: "bg-sky-600", iconBg: "bg-sky-800/50", ring: "border-sky-400/40", glow: "oklch(0.68 0.22 230 / 0.55)" },
  { bg: "bg-emerald-600", iconBg: "bg-emerald-800/50", ring: "border-emerald-400/40", glow: "oklch(0.72 0.23 150 / 0.55)" },
  { bg: "bg-amber-500", iconBg: "bg-amber-800/50", ring: "border-amber-400/40", glow: "oklch(0.78 0.2 80 / 0.55)" },
  { bg: "bg-rose-600", iconBg: "bg-rose-800/50", ring: "border-rose-400/40", glow: "oklch(0.66 0.26 20 / 0.55)" },
  { bg: "bg-cyan-600", iconBg: "bg-cyan-800/50", ring: "border-cyan-400/40", glow: "oklch(0.7 0.19 200 / 0.55)" },
];

function Hero() {
  const center = (services.length - 1) / 2;

  return (
    <section className="relative -mt-32 flex min-h-screen flex-col items-center pt-32 pb-20 text-center">
      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 flex justify-center"
        >
          <Eyebrow>TechRox · IT Solutions Company · Est. 2025</Eyebrow>
        </motion.div>

        <RevealText
          as="h1"
          text="POWERING NEXT-GEN TECHNOLOGY"
          className="mx-auto max-w-3xl font-display text-5xl font-bold leading-[1.15] tracking-tight text-silver-bright md:text-6xl lg:text-7xl glow-text"
          delay={0.3}
        />
      </div>

      {/* Fanned service cards — the "what we do" showcase */}
      <div className="relative mt-16 flex w-full max-w-none flex-nowrap items-end justify-center px-6">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[120px] animate-pulse-glow"
        />
        {services.map((s, i) => {
          const offset = i - center;
          const rotate = offset * 3.5;
          const lift = Math.abs(offset) * 14;
          const accent = CARD_ACCENTS[i % CARD_ACCENTS.length];
          return (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 50, rotate: rotate * 1.6 }}
              animate={{ opacity: 1, rotate, y: [lift, lift - 8, lift] }}
              transition={{
                opacity: { duration: 0.6, delay: 1.1 + i * 0.08 },
                rotate: { duration: 0.7, delay: 1.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 3.2 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: 1.1 + i * 0.08 },
              }}
              whileHover={{ y: lift - 24, rotate: 0, scale: 1.1, zIndex: 50 }}
              style={{ zIndex: 10 - Math.abs(offset) }}
              className="relative -ml-3 first:ml-0 sm:-ml-6 lg:-ml-9 xl:-ml-12"
            >
              <Link
                href={`/services/${s.slug}`}
                style={{ ["--accent-glow" as string]: accent.glow }}
                className={`block w-32 rounded-xl border p-3 text-left shadow-[0_20px_60px_-15px_rgba(0,0,0,0.75)] transition-shadow duration-300 hover:shadow-[0_30px_90px_-10px_var(--accent-glow)] sm:w-48 sm:rounded-2xl sm:p-5 lg:w-64 lg:p-7 xl:w-72 xl:p-8 ${accent.bg} ${accent.ring}`}
                data-magnet
              >
                <div className={`grid h-8 w-8 place-items-center rounded-lg border border-white/30 sm:h-11 sm:w-11 sm:rounded-xl lg:h-14 lg:w-14 ${accent.iconBg}`}>
                  <s.Icon className="h-4 w-4 text-white sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                </div>
                <h3 className="mt-2 font-display text-xs font-semibold text-white sm:mt-3 sm:text-base lg:mt-5 lg:text-lg">
                  {s.name}
                </h3>
                <p className="mt-1 hidden text-xs leading-snug text-white/80 line-clamp-2 sm:block sm:text-sm">
                  {s.tagline}
                </p>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.9 }}
        className="relative mt-16 flex flex-wrap items-center justify-center gap-4"
      >
        <Link
          href="/services"
          className="btn-silver btn-silver-hover group text-lg px-9 py-4"
          data-magnet
        >
          Explore our services
          <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.3 }}
        className="mt-16 w-full overflow-hidden"
      >
        <p className="mb-4 text-center text-xs uppercase tracking-[0.3em] text-silver-dim">Trusted by ambitious teams</p>
        <div className="relative overflow-hidden">
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {[...Array(2)].flatMap((_, i) =>
              ["Northline", "Lumen Analytics", "Kite Health", "Nova Retail", "GreenGrid", "Vertex Learn", "Halo Studio", "Orbit CRM"].map((n) => (
                <span key={`${i}-${n}`} className="silver-text font-display text-2xl font-semibold opacity-70">
                  {n}
                </span>
              )),
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ProductsPreview() {
  return (
    <Section>
      <div className="mb-16">
        <Eyebrow>Our Products</Eyebrow>
        <RevealText as="h2" text="Software we built because someone had to." className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl" />
      </div>
      <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => {
          const accent = CARD_ACCENTS[i % CARD_ACCENTS.length];
          return (
            <motion.div key={p.slug} variants={staggerItem}>
              <TiltCard
                style={{ ["--accent-glow" as string]: accent.glow }}
                className={`group relative overflow-hidden rounded-3xl border p-8 transition-shadow duration-500 hover:shadow-[0_30px_90px_-15px_var(--accent-glow)] ${accent.bg} ${accent.ring}`}
              >
                <div className="relative">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.3em] text-white/70">{p.category}</span>
                    <div className={`grid h-14 w-14 place-items-center rounded-2xl border border-white/30 ${accent.iconBg}`}>
                      <p.Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-white">{p.name}</h3>
                  <p className="mt-3 max-w-md text-white/80">{p.tagline}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-silver btn-silver-hover text-sm"
                      data-magnet
                    >
                      See details <ArrowRight className="h-4 w-4" />
                    </a>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm text-white hover:border-white hover:text-white" data-magnet>
                      Book a demo
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </Stagger>
    </Section>
  );
}

function StatsSection() {
  return (
    <Section className="border-y border-border/60 bg-white/[0.02]">
      <div className="mb-12 text-center">
        <Eyebrow>By the numbers</Eyebrow>
        <RevealText as="h2" text="Achievements the marketing team didn't invent." className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl" />
      </div>
      <Stagger className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s, i) => {
          const accent = CARD_ACCENTS[i % CARD_ACCENTS.length];
          return (
            <motion.div
              key={s.label}
              variants={staggerItem}
              style={{ ["--accent-glow" as string]: accent.glow }}
              className={`rounded-2xl border p-8 text-center transition-shadow duration-500 hover:shadow-[0_20px_70px_-15px_var(--accent-glow)] ${accent.bg} ${accent.ring}`}
            >
              <Counter to={s.value} suffix={s.suffix} className="font-display text-5xl font-bold text-white md:text-6xl" />
              <p className="mt-3 text-sm text-white/80">{s.label}</p>
            </motion.div>
          );
        })}
      </Stagger>
    </Section>
  );
}

function FinalCTA() {
  return (
    <Section>
      <TiltCard className="relative overflow-hidden rounded-3xl border border-red-300/50 bg-gradient-to-br from-red-600 to-rose-800 p-12 shadow-[0_20px_90px_-15px_oklch(0.55_0.22_25/0.6)] md:p-20">
        <div className="relative text-center">
        <RevealText as="h2" text="Ready to ship something extraordinary?" className="mx-auto max-w-5xl font-display text-5xl font-bold tracking-tight md:text-7xl text-white" />
          <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-white/80">
              Tell us what you&apos;re building. We&apos;ll send back a plan in 48 hours, honestly priced, with a real team behind it.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-silver btn-silver-hover text-lg px-8 py-4" data-magnet>
                Get a Free Quote <ArrowRight className="h-5 w-5" />
              </a>
              <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-border/70 px-6 py-3 text-sm text-silver hover:border-silver hover:text-silver-bright" data-magnet>
                Explore services
              </Link>
            </div>
          </Reveal>
        </div>
      </TiltCard>
    </Section>
  );
}
function LatestInsights() {
  return (
    <Section className="border-t border-border/60 bg-white/[0.01]">
      <div className="mx-auto max-w-4xl text-center">
        <Eyebrow>Latest Insights</Eyebrow>
        <RevealText
          as="h2"
          text="Fresh perspectives on AI, automation, and engineering."
          className="mx-auto mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl"
        />
        <div className="mt-8 flex justify-center">
          <a
            href="/blog/post-2026-09-18.html"
            className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left transition hover:border-violet-500/50 hover:bg-white/[0.08]"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-silver-dim">Today's Daily Post</p>
              <p className="mt-1 font-display text-lg font-semibold text-white group-hover:text-violet-400">
                AI, Automation & Modern Web Guide →
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-silver-dim transition-transform group-hover:translate-x-1 group-hover:text-white" />
          </a>
        </div>
      </div>
    </Section>
  );
}
