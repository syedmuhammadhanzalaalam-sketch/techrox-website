import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact — Get a Free Quote",
  description: "Tell TechRox what you're building. Get an honest, scoped plan back within 48 hours. Book a call or send a message.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact — TechRox", description: "Tell us what you're building.", url: "/contact" },
};

export default function Page() {
  return <ContactClient />;
}
