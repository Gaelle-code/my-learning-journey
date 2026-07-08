"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNavigation, blogNavigation } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/siteConfig";
import { SiteContainer } from "./SiteContainer";

const navigationLinks = [...primaryNavigation] satisfies ReadonlyArray<{
  href: string;
  label: string;
}>;

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-xl">
      <SiteContainer className="py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-lg font-semibold text-white shadow-[0_12px_25px_rgba(79,70,229,0.25)]">
              MJ
            </span>
            <span className="flex flex-col">
              <span className="font-display text-lg font-semibold tracking-tight text-slate-950">
                {siteConfig.name}
              </span>
              <span className="text-xs text-muted">Learning notes and project pages</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigationLinks.map((item) => {
              if (item.href === "/blog") {
                const active = pathname === item.href || pathname.startsWith("/blog");

                return (
                  <div key={item.href} className="relative group">
                    <Link
                      href={item.href}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                        active
                          ? "bg-accent-soft text-accent-strong"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
                      )}
                    >
                      {item.label}
                    </Link>

                    <div className="absolute left-0 mt-2 hidden w-48 rounded-lg border border-border bg-white p-2 shadow-md group-hover:block">
                      <nav className="flex flex-col gap-1">
                        {blogNavigation.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={cn(
                              "rounded-md px-3 py-2 text-sm font-medium block",
                              pathname === sub.href || pathname.startsWith(sub.href)
                                ? "bg-accent-soft text-accent-strong"
                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-950",
                            )}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </div>
                );
              }

              const active =
                pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-accent-soft text-accent-strong"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop contact button removed to keep header minimal */}

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-white/80 px-2 text-sm font-semibold text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition-colors lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {open ? (
          <div className="mt-4 rounded-3xl border border-border bg-white/90 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.08)] lg:hidden">
            <nav className="grid gap-2">
                {navigationLinks.map((item) => {
                  if (item.href === "/blog") {
                    const active = pathname === item.href || pathname.startsWith("/blog");

                    return (
                      <div key={item.href} className="grid gap-2">
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "rounded-2xl px-4 py-3 text-sm font-medium",
                            active ? "bg-accent-soft text-accent-strong" : "bg-slate-50 text-slate-700",
                          )}
                        >
                          {item.label}
                        </Link>

                        <div className="grid gap-2 pl-4">
                          {blogNavigation.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setOpen(false)}
                              className={cn(
                                "rounded-2xl px-3 py-2 text-sm font-medium",
                                pathname === sub.href || pathname.startsWith(sub.href)
                                  ? "bg-accent-soft text-accent-strong"
                                  : "bg-slate-50 text-slate-700",
                              )}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  const active =
                    pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-2xl px-4 py-3 text-sm font-medium",
                        active
                          ? "bg-accent-soft text-accent-strong"
                          : "bg-slate-50 text-slate-700",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
            </nav>
          </div>
        ) : null}
      </SiteContainer>
    </header>
  );
}
