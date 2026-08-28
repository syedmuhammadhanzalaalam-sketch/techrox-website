import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us — Our Mission, Team & Story",
  description:
    "Meet TechRox: an IT company founded in 2019 by engineers who believe great software is built precisely and patiently. Our mission, values, timeline, and team.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About TechRox", description: "The story, the values, the team.", url: "/about" },
};

export default function Page() {
  return <AboutClient />;
}
