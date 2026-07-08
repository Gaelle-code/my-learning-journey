import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction?: { href: string; label: string };
  secondaryAction?: { href: string; label: string };
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  children,
}: PageHeroProps) {
  return (
    <Card className="overflow-hidden">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.8fr)]">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            {eyebrow}
          </p>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted md:text-lg">
              {description}
            </p>
          </div>
          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col gap-3 sm:flex-row">
              {primaryAction ? <Button href={primaryAction.href}>{primaryAction.label}</Button> : null}
              {secondaryAction ? (
                <Button href={secondaryAction.href} variant="outline">
                  {secondaryAction.label}
                </Button>
              ) : null}
            </div>
          )}
        </div>
        {children ? (
          <div className="rounded-3xl border border-border bg-white/70 p-5">
            {children}
          </div>
        ) : null}
      </div>
    </Card>
  );
}

