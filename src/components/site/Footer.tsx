import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.6 5.82c-1.02-.9-1.66-2.16-1.66-3.55h-3.07v13.44a2.9 2.9 0 1 1-2.9-2.9c.26 0 .52.03.76.1V9.9a5.99 5.99 0 0 0-.76-.05 5.98 5.98 0 1 0 5.98 5.98V8.6a8.02 8.02 0 0 0 4.68 1.5V7.03c-1.11 0-2.14-.35-3.03-1.21Z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.1.2-.3.2-.6.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.6-1.9-.1-.3 0-.4.1-.6l.4-.5c.1-.1.1-.3.1-.4 0-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 1.9 3 4.7 4.1.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3ZM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2Zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3A7.9 7.9 0 0 1 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8Z" />
    </svg>
  );
}

const socials = [
  { icon: WhatsAppIcon, label: "WhatsApp", href: WHATSAPP_URL, external: true },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/techroxofficial_01/", external: true },
  { icon: TikTokIcon, label: "TikTok", href: "https://www.tiktok.com/@techroxofficial_01", external: true },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61592531301761", external: true },
  { icon: Mail, label: "Email", href: "mailto:techrox01@gmail.com", external: false },
];

export function Footer() {
  const cols = [
    {
      title: "Company",
      links: [
        { href: "/about", label: "About" },
        { href: "/careers", label: "Careers" },
        { href: "/contact", label: "Contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { href: "/services/ai-solutions", label: "AI Solutions" },
        { href: "/services/ai-agents", label: "AI Agents" },
        { href: "/services/business-automation", label: "Business Automation" },
        { href: "/services/web-development", label: "Web Development" },
        { href: "/services/digital-marketing", label: "Digital Marketing" },
        { href: "/services/seo", label: "SEO" },
      ],
    },
    {
      title: "Products",
      links: [
        { href: "/products/career-path-finder", label: "Career Path Finder" },
        { href: "/products/ai-clinic-management", label: "AI Clinic Management" },
      ],
    },
  ];

  return (
    <footer className="relative mt-32 border-t border-border/60 bg-background/50 pt-20 pb-10">
      <div className="mx-auto max-w-none px-10 md:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.jpeg" alt="TechRox" width={32} height={32} className="h-8 w-8 object-contain" />
              <span className="silver-text font-display text-2xl font-bold tracking-tight">TechRox</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Powering next-gen technology for teams that refuse to move slowly. AI, automation,
              cloud, and craft — under one silver roof.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-silver btn-silver-hover mt-6 text-sm" data-magnet>
  Book a Consultation <ArrowUpRight className="h-4 w-4" />
</a>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-silver-dim">
                {c.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition hover:text-silver-bright"
                    >
                      <span className="relative">
                        {l.label}
                        <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-silver transition-transform duration-300 group-hover:scale-x-100" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="chrome-divider my-12" />

        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
          © 2025 TechRox. All rights reserved. Powering Next-Gen Technology.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                data-magnet
                className="grid h-10 w-10 place-items-center rounded-full border border-border/70 text-silver/80 transition hover:border-silver hover:text-silver-bright hover:shadow-[0_0_20px_oklch(0.9_0.01_260/0.4)]"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
