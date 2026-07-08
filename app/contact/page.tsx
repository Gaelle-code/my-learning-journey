import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { SiteContainer } from "@/components/layout/SiteContainer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "A simple contact page for reaching out about the learning journal or software development studies.",
};

export default function ContactPage() {
  return (
    <SiteContainer className="py-8 sm:py-10 lg:py-14">
      <div className="space-y-8">
        <PageHero
          eyebrow="Say hello"
          title="A simple contact space for questions, feedback, or a quick hello."
          description="The layout is ready to be connected to a real inbox or form service when the project is deployed."
          primaryAction={{ href: "/blog", label: "Browse the notes" }}
          secondaryAction={{ href: "/about", label: "Read about me" }}
        />

        <section className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <Card>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Contact note
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950">Contact form preview</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              The form below is a clean preview. It does not submit data yet, which keeps the site
              honest until a real inbox or form handler is added.
            </p>
            <form className="mt-6 space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Name</span>
                <input
                  className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  type="text"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Message</span>
                <textarea
                  className="min-h-36 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="Write a short message..."
                />
              </label>
              <Button type="button" className="w-full sm:w-auto">
                Preview only
              </Button>
            </form>
          </Card>

          <div className="grid gap-4">
            <Card>
              <h2 className="text-xl font-semibold text-slate-950">Best ways to connect</h2>
              <div className="mt-4 space-y-3 text-sm leading-6 text-muted">
                <p>Use this layout as a placeholder for a real inbox or form service.</p>
                <p>Check the blog pages if you want to follow the learning topics.</p>
                <p>Keep the contact details consistent with the rest of the site when you deploy.</p>
              </div>
            </Card>

            <Card>
              <h2 className="text-xl font-semibold text-slate-950">What visitors should know</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <li>The site is meant to be simple, readable, and responsive.</li>
                <li>The navigation and footer are shared across the whole application.</li>
                <li>The blog section uses a nested layout for repeated learning content.</li>
              </ul>
            </Card>
          </div>
        </section>
      </div>
    </SiteContainer>
  );
}
