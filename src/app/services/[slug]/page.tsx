import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/site-content";
import { ServiceDetailClient } from "./ServiceDetailClient";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service not found" };
  const title = `${service.name} — TechRox`;
  return {
    title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title, description: service.description, url: `/services/${service.slug}` },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();
  return <ServiceDetailClient slug={service.slug} />;
}
