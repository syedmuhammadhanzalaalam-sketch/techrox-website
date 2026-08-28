"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { RevealText, Reveal, TiltCard } from "@/components/site/anim";
import { faqs } from "@/lib/site-content";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

export function ContactClient() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const company = data.get("company") as string;
    const budget = data.get("budget") as string;
    const message = data.get("message") as string;

    const lines = [
      `Hi TechRox, I'd like a free quote.`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      budget ? `Budget: ${budget}` : null,
      ``,
      `What I'm building: ${message}`,
    ].filter(Boolean);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <>
      <Section className="pt-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <TiltCard className="glass-strong silver-border rounded-3xl p-8 md:p-10">
            {sent ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
              <div className="silver-text font-display text-3xl font-bold">Message sent.</div>
              <p className="mt-3 max-w-sm text-muted-foreground">
                Thanks — a real human will reply within 48 hours.
              </p>
            </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" id="name" type="text" required />
                  <Field label="Work email" id="email" type="email" required />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Company" id="company" type="text" />
                  <Field label="Budget range" id="budget" type="text" placeholder="e.g. $10k–$50k" />
                </div>
                <label className="grid gap-2 text-sm text-silver/90" htmlFor="message">
                  What are you building?
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="rounded-xl border border-border/70 bg-white/[0.02] p-4 text-foreground outline-none transition focus:border-silver/60"
                    placeholder="A sentence or two is plenty to start."
                  />
                </label>
                <button type="submit" className="btn-silver btn-silver-hover mt-2 w-fit text-sm" data-magnet>
                  Get a Free Quote <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </TiltCard>

          <div className="flex flex-col gap-6">
            <TiltCard className="glass rounded-3xl p-8">
              <h3 className="font-display text-xl font-semibold text-silver-bright">Reach us directly</h3>
              <div className="mt-6 flex flex-col gap-4 text-sm">
                <a href="mailto:techrox01@gmail.com" className="flex items-center gap-3 text-silver/90 hover:text-silver-bright">
                  <Mail className="h-4 w-4" /> techrox01@gmail.com
                </a>
                <a href="tel:+923237643257" className="flex items-center gap-3 text-silver/90 hover:text-silver-bright">
                  <Phone className="h-4 w-4" /> +92 323 7643257
                </a>
                <div className="flex items-center gap-3 text-silver/90">
                <MapPin className="h-4 w-4" /> Lahore, Pakistan · Remote-first
                </div>
              </div>
            </TiltCard>
            <TiltCard className="glass-strong silver-border rounded-3xl p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-silver-dim">Response time</p>
              <p className="silver-text mt-2 font-display text-4xl font-bold">&lt; 48 hrs</p>
              <p className="mt-2 text-sm text-muted-foreground">Every inquiry gets a real reply from a human on the team — never a bot.</p>
            </TiltCard>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-10">
          <Eyebrow>FAQ</Eyebrow>
          <RevealText as="h2" text="Questions we get asked a lot." className="mt-4 font-display text-3xl font-bold md:text-5xl" />
        </div>
        <div className="mx-auto flex max-w-3xl flex-col gap-3">
          {faqs.map((f, i) => (
            <FaqItem key={f.q} q={f.q} a={f.a} delay={i * 0.05} />
          ))}
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  id,
  type,
  required,
  placeholder,
}: {
  label: string;
  id: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2 text-sm text-silver/90" htmlFor={id}>
      {label}
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-border/70 bg-white/[0.02] px-4 py-3 text-foreground outline-none transition focus:border-silver/60"
      />
    </label>
  );
}

function FaqItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={delay}>
      <div className="glass overflow-hidden rounded-2xl">
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
          aria-expanded={open}
        >
          <span className="font-medium text-silver-bright">{q}</span>
          <ChevronDown className={`h-4 w-4 shrink-0 text-silver-dim transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="px-6 pb-5 text-sm text-muted-foreground">{a}</p>
        </motion.div>
      </div>
    </Reveal>
  );
}
