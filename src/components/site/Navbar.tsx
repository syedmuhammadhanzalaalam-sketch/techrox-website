"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/careers", label: "Careers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-none px-6 md:px-10">
        <div
          className={`flex items-center justify-between rounded-full px-8 py-5 transition-all duration-500 ${
            scrolled ? "glass-strong" : "border border-transparent bg-transparent"
          }`}
        >
          <Link href="/" className="group flex items-center gap-2" data-magnet>
            <Image src="/logo.jpeg" alt="TechRox" width={42} height={42} className="h-10 w-10 rounded-md object-contain" />
            <span className="silver-text font-display text-2xl font-bold tracking-tight">TechRox</span>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`group relative rounded-full px-5 py-2.5 text-lg font-medium transition hover:text-silver-bright ${
                  isActive(l.href) ? "text-silver-bright" : "text-silver/90"
                }`}
                data-magnet
              >
                {l.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-silver to-transparent transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-silver btn-silver-hover hidden text-base px-6 py-3 md:inline-flex" data-magnet>
  Get a Free Quote <ArrowRight className="h-4 w-4" />
</a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="rounded-full border border-border/60 p-2.5 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="glass-strong mt-2 rounded-3xl p-4 lg:hidden"
            >
              <ul className="flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={l.href}
                      className={`block rounded-xl px-4 py-3 text-base hover:bg-white/5 hover:text-silver-bright ${
                        isActive(l.href) ? "bg-white/5 text-silver-bright" : "text-silver/90"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-silver btn-silver-hover mt-3 text-sm">
  Get a Free Quote <ArrowRight className="h-4 w-4" />
</a>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
