import type { Metadata } from "next";
import { ProductsClient } from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products — Career Path Finder & AI Clinic Management",
  description: "Career Path Finder and AI Clinic Management — flagship SaaS products engineered and operated by TechRox.",
  alternates: { canonical: "/products" },
  openGraph: { title: "Products — TechRox", description: "Software we built because someone had to.", url: "/products" },
};

export default function Page() {
  return <ProductsClient />;
}
