import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/lib/site-content";
import { ProductDetailClient } from "./ProductDetailClient";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return { title: "Product not found" };
  const title = `${product.name} — TechRox`;
  return {
    title,
    description: product.description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: { title, description: product.description, url: `/products/${product.slug}` },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();
  return <ProductDetailClient slug={product.slug} />;
}
