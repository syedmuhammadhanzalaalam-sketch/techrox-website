"use client";

import { Section, Eyebrow } from "@/components/site/Section";
import { RevealText } from "@/components/site/anim";

export function CareersClient() {
  return (
    <>
      <Section className="pt-8">
        <div className="mb-10">
          <Eyebrow>Open roles</Eyebrow>
          <RevealText as="h2" text="No positions available right now." className="mt-4 font-display text-3xl font-bold md:text-5xl" />
        </div>
        <div className="glass rounded-2xl p-10 text-center text-muted-foreground">
          We&apos;re not actively hiring at the moment, but we&apos;re always open to hearing from people who love their craft. Check back soon.
        </div>
      </Section>
    </>
  );
}