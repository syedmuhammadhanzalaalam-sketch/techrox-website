import type { Metadata } from "next";
import { HomeClient } from "./HomeClient";

export const metadata: Metadata = {
  title: "TechRox — AI, Automation, Cloud & Web Development Company",
  description:
    "TechRox is an IT company building AI systems, autonomous agents, business automation, cloud infrastructure, and beautifully engineered web products for teams that refuse to move slowly.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "TechRox — Powering Next-Gen Technology",
    description: "AI, agents, automation, cloud, and web — engineered end-to-end by an IT studio that ships.",
    url: "/",
  },
};

export default function Page() {
  return <HomeClient />;
}
