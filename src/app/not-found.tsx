import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="silver-text font-display text-8xl font-bold">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold text-silver-bright md:text-4xl">
        This page took a wrong turn.
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link href="/" className="btn-silver btn-silver-hover mt-8 text-sm">
        Back to home <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
