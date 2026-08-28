import type { Metadata } from "next";
import { CareersClient } from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers — Join TechRox",
  description: "Open roles at TechRox across AI, design, cloud, marketing, content, and GTM. Remote-friendly, sprint-based, outcome-focused.",
  alternates: { canonical: "/careers" },
  openGraph: { title: "Careers — TechRox", description: "Join a studio that ships.", url: "/careers" },
};

export default function Page() {
  return <CareersClient />;
}
