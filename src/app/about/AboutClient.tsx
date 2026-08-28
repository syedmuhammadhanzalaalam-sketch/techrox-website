"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { RevealText, Reveal, Stagger, staggerItem, TiltCard, MaskReveal } from "@/components/site/anim";
import { values, timeline, team } from "@/lib/site-content";
import Image from "next/image";

const CARD_ACCENTS = [
  { bg: "bg-emerald-600", ring: "border-emerald-300/40", glow: "oklch(0.72 0.2 150 / 0.55)", solid: "#059669" },
  { bg: "bg-amber-500", ring: "border-amber-300/40", glow: "oklch(0.78 0.18 80 / 0.55)", solid: "#f59e0b" },
  { bg: "bg-sky-600", ring: "border-sky-300/40", glow: "oklch(0.65 0.2 230 / 0.55)", solid: "#0284c7" },
  { bg: "bg-rose-600", ring: "border-rose-300/40", glow: "oklch(0.6 0.24 20 / 0.55)", solid: "#e11d48" },
  { bg: "bg-violet-600", ring: "border-violet-300/40", glow: "oklch(0.6 0.22 295 / 0.55)", solid: "#7c3aed" },
  { bg: "bg-cyan-600", ring: "border-cyan-300/40", glow: "oklch(0.68 0.18 210 / 0.55)", solid: "#0891b2" },
  { bg: "bg-fuchsia-600", ring: "border-fuchsia-300/40", glow: "oklch(0.6 0.24 330 / 0.55)", solid: "#c026d3" },
];

export function AboutClient() {
  return (
    <>

<Section className="pt-8">
        <div className="mb-12">
          <Eyebrow>The team</Eyebrow>
          <RevealText as="h2" text="Serious people with functioning senses of humor." className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl" />
        </div>
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {team.map((p) => (
    <motion.div key={p.name} variants={staggerItem} className="h-full">
      <TiltCard className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass silver-border">
        <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden">
          <img
            src={p.photo}
            alt={p.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-lg font-semibold text-silver-bright">{p.name}</h3>
          <p className="text-xs uppercase tracking-[0.2em] text-silver-dim">{p.role}</p>
          <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">{p.bio}</p>
        </div>
      </TiltCard>
    </motion.div>
  ))}
</Stagger>
      </Section>
      <Section>
        <div className="grid gap-12 md:grid-cols-2">
        <TiltCard className="rounded-3xl border border-rose-300/40 bg-gradient-to-br from-rose-600 to-rose-800 p-10 shadow-[0_20px_80px_-20px_oklch(0.6_0.24_20/0.5)]">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-white">
              <span className="h-1 w-1 rounded-full bg-white animate-pulse-glow" />
              Mission
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">Make ambitious teams ship faster than they thought they could.</h2>
            <p className="mt-4 text-white/80">If it can be automated, augmented, or accelerated with taste — we&apos;ll help you do it, and hand back the keys.</p>
          </TiltCard>
          <TiltCard className="rounded-3xl border border-cyan-300/40 bg-gradient-to-br from-cyan-600 to-cyan-800 p-10 shadow-[0_20px_80px_-20px_oklch(0.65_0.18_210/0.5)]">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-white">
              <span className="h-1 w-1 rounded-full bg-white animate-pulse-glow" />
              Vision
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">Software should feel like a superpower — not a to-do list.</h2>
            <p className="mt-4 text-white/80">We&apos;re building toward a world where every knowledge worker has an AI teammate, and every business runs on rails.</p>
          </TiltCard>
        </div>
      </Section>

      <Section>
        <div className="mb-12">
          <Eyebrow>Our values</Eyebrow>
          <RevealText as="h2" text="Four things we hire, review, and fire on." className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl" />
        </div>
        <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => {
            const accent = CARD_ACCENTS[i % CARD_ACCENTS.length];
            return (
              <motion.div key={v.title} variants={staggerItem}>
                <TiltCard
                  style={{ ["--accent-glow" as string]: accent.glow }}
                  className={`h-full rounded-2xl border p-6 transition-shadow duration-500 hover:shadow-[0_20px_70px_-15px_var(--accent-glow)] ${accent.bg} ${accent.ring}`}
                >
                  <v.Icon className="h-6 w-6 text-white" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{v.body}</p>
                </TiltCard>
              </motion.div>
            );
          })}
        </Stagger>
      </Section>

      <Section>
        <div className="mb-16">
          <Eyebrow>Timeline</Eyebrow>
          <RevealText as="h2" text="Milestones we're a little proud of." className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl" />
        </div>
        <div className="relative">
        <div aria-hidden className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-silver via-silver/40 to-transparent md:left-5" />
          <div className="flex flex-col gap-12">
            {timeline.map((t, i) => {
              const accent = CARD_ACCENTS[i % CARD_ACCENTS.length];
              return (
                <Reveal key={`${t.year}-${t.title}`} delay={i * 0.05}>
                  <div className="relative flex items-center gap-6 pl-10 md:pl-14">
                    <div className="absolute left-3 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 md:left-5">
                      <div
                        className="dot-blink h-4 w-4 rounded-full bg-white"
                        style={{
                          border: `2.5px solid ${accent.solid}`,
                          boxShadow: `0 0 0 4px ${accent.solid}22, 0 2px 8px rgba(0,0,0,0.4)`,
                        }}
                      />
                    </div>
                    <div
                      style={{ ["--accent-glow" as string]: accent.glow }}
                      className={`w-full rounded-2xl border p-6 shadow-[0_15px_50px_-15px_var(--accent-glow)] ${accent.bg} ${accent.ring}`}
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">{t.year}</span>
                      <h3 className="mt-2 font-display text-2xl font-bold text-white">{t.title}</h3>
                      <p className="mt-2 text-sm text-white/80">{t.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      <Section>
        <TiltCard className="relative overflow-hidden rounded-3xl border border-red-300/40 bg-gradient-to-br from-red-900 to-red-950 p-12 text-center shadow-[0_20px_90px_-15px_oklch(0.3_0.15_20/0.6)] md:p-20">
          <div className="relative text-center">
            <RevealText as="h2" text="Want to work with — or at — TechRox?" className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight md:text-7xl text-white" />
            <Reveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-xl text-white/80">
                We&apos;re always looking for people who care about craft as much as we do — as clients, or as teammates.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-silver btn-silver-hover text-lg px-8 py-4" data-magnet>
                  Get a Free Quote <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/careers" className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-white px-8 py-4 text-lg font-semibold text-black hover:bg-white/90" data-magnet>
                  See open roles
                </Link>
              </div>
            </Reveal>
          </div>
        </TiltCard>
      </Section>
    </>
  );
}
