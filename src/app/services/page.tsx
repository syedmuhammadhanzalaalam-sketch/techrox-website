import type { Metadata } from "next";
import { ServicesClient } from "./ServicesClient";

export const metadata: Metadata = {
  title: "IT Services — AI, Automation, Cloud & Web Development",
  description:
    "Explore TechRox's IT services: AI solutions, AI agents, business automation, web development, digital marketing, and cloud solutions — six practices, one studio.",
  alternates: { canonical: "/services" },
  openGraph: { title: "Services — TechRox", description: "Six practices. One outcome-obsessed studio.", url: "/services" },
};

export default function Page() {
  return <ServicesClient />;
}
