"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { RevealText, Reveal, Stagger, staggerItem, TiltCard, MaskReveal } from "@/components/site/anim";
import { products } from "@/lib/site-content";

export function ProductDetailClient({ slug }: { slug: string }) {
  const p = products.find((prod) => prod.slug === slug)!;
  return (
    <>
      <Section className="pt-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>{p.category}</Eyebrow>
            <RevealText as="h1" text={p.name} className="mt-4 font-display text-5xl font-bold md:text-7xl text-silver-bright text-glow" />
            <Reveal delay={0.2}><p className="mt-6 text-lg text-silver/90 md:text-xl">{p.tagline}</p></Reveal>
            <Reveal delay={0.3}><p className="mt-4 text-muted-foreground">{p.description}</p></Reveal>
            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-silver btn-silver-hover" data-magnet>{p.cta} <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/products" className="inline-flex items-center gap-2 rounded-full border border-border/70 px-6 py-3 text-sm text-silver hover:border-silver hover:text-silver-bright" data-magnet>See all products</Link>
              </div>
            </Reveal>
          </div>
          <MaskReveal className="glass-strong silver-border aspect-[4/3] rounded-3xl">
            <div className="relative flex h-full items-center justify-center" style={{ background: "linear-gradient(135deg, oklch(0.25 0.02 260), oklch(0.15 0.02 260))" }}>
              <p.Icon className="h-32 w-32 text-silver/60" />
              <div className="absolute inset-4 rounded-2xl border border-silver/20 animate-pulse-glow" />
            </div>
          </MaskReveal>
        </div>
      </Section>

      <Section>
        <div className="mb-10">
          <Eyebrow>Features</Eyebrow>
          <RevealText as="h2" text="Everything you'd expect. A few things you wouldn't." className="mt-4 font-display text-3xl font-bold md:text-5xl" />
        </div>
        <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {p.features.map((f) => (
            <motion.div key={f.title} variants={staggerItem}>
              <TiltCard className="glass h-full rounded-2xl p-6">
                <Sparkles className="h-5 w-5 text-silver-bright" />
                <h3 className="mt-3 font-display text-lg font-semibold text-silver-bright">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
              </TiltCard>
            </motion.div>
          ))}
        </Stagger>
      </Section>

      <Section>
        <div className="glass-strong silver-border rounded-3xl p-10">
          <Eyebrow>Benefits</Eyebrow>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {p.benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 rounded-xl bg-white/[0.02] p-4">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-silver-bright" />
                <p className="text-silver/90">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="glass-strong silver-border rounded-3xl p-12 text-center md:p-16">
          <RevealText as="h2" text={`See ${p.name} in action.`} className="mx-auto font-display text-3xl font-bold md:text-5xl text-silver-bright" />
          <Reveal delay={0.2}><p className="mx-auto mt-4 max-w-xl text-muted-foreground">30-minute personalized demo. No sales-y follow-up unless you ask.</p></Reveal>
          <div className="mt-8">
            <Link href="/contact" className="btn-silver btn-silver-hover" data-magnet>{p.cta} <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </Section>
    </>
  );
}
