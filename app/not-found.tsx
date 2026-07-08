import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SiteContainer } from "@/components/layout/SiteContainer";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "A friendly not found page for invalid routes in the learning journey website.",
};

export default function NotFound() {
  return (
    <SiteContainer className="py-16 sm:py-20 lg:py-24">
      <Card className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
          This page could not be found.
        </h1>
        <p className="mt-4 text-base leading-7 text-muted">
          The link may be outdated or the route may not exist. The rest of the site is ready from
          the home page.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" size="md">
            Back to home
          </Button>
          <Button href="/blog" size="md" variant="outline">
            Explore the blog
          </Button>
        </div>
      </Card>
    </SiteContainer>
  );
}

