import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/lib/siteConfig";

export function BlogHeader() {
  return (
    <Card className="bg-slate-950 text-white">
      <div className="grid gap-4 md:grid-cols-[minmax(0,1.2fr)_auto] md:items-end">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Learning blog
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {siteConfig.name} blog
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
            Explore how I am learning frontend, backend, and mobile development through structured
            study notes and practical project ideas.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/10 px-5 py-4 text-sm text-slate-200">
          <p className="font-semibold text-white">Focus areas</p>
          <p className="mt-2 leading-6">
            HTML, CSS, JavaScript, React, Next.js, APIs, databases, and mobile-first thinking.
          </p>
        </div>
      </div>
    </Card>
  );
}
