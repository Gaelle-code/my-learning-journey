import Link from "next/link";
import { quickLinks } from "@/data/navigation";
import { siteConfig } from "@/lib/siteConfig";
import { SiteContainer } from "./SiteContainer";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white/70 py-10 backdrop-blur-xl">
      <SiteContainer>
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_auto] md:items-start">
          <div className="space-y-3">
            <p className="font-display text-xl font-semibold text-slate-950">{siteConfig.name}</p>
            <p className="max-w-2xl text-sm leading-6 text-muted">
              {siteConfig.tagline} Built for a clear reading experience with a layout that stays
              calm, focused, and easy to scan.
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              Quick links
            </p>
            <div className="flex flex-wrap gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-border bg-white px-4 py-2 text-sm text-slate-700 transition-colors hover:border-accent hover:text-accent-strong"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright {year} {siteConfig.name}.
          </p>
          <p>Built with Next.js App Router and Tailwind CSS.</p>
        </div>
      </SiteContainer>
    </footer>
  );
}
