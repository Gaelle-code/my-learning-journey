import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { blogTopics } from "@/data/blogTopics";
import { learningJourney } from "@/data/learningJourney";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Meet the learner behind Gaelle Learning Journey and explore the frontend, backend, and mobile notes that shape the site.",
};

export default function HomePage() {
  return (
    <SiteContainer className="py-8 sm:py-10 lg:py-14">
      <div className="space-y-8">
        <PageHero
          eyebrow="Learning journal"
          title="Small projects, honest notes, and steady progress."
          description={`${siteConfig.name} is a simple, responsive Next.js App Router project that introduces the student, explains the current learning path, and highlights technology goals in a professional way.`}
          primaryAction={{ href: "/blog", label: "Read the notes" }}
          secondaryAction={{ href: "/about", label: "About the learner" }}
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              What you’ll find here
            </p>
            <p className="text-sm leading-6 text-slate-700">
              Short pages, practical topic notes, and a layout that stays calm on mobile and easy
              to scan on desktop.
            </p>
          </div>
        </PageHero>

        <section className="grid gap-4 md:grid-cols-3">
          {learningJourney.map((item) => (
            <Card key={item.title} className="h-full">
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted">{item.summary}</p>
            </Card>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <Card>
            <SectionHeading
              eyebrow="Technology goals"
              title="What I’m focusing on right now"
              description="This site is helping me practice the things that turn a basic scaffold into a page that feels finished."
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Clear React component structure",
                "App Router layouts and metadata",
                "Responsive Tailwind styling",
                "Project organization that is easy to keep up",
              ].map((goal) => (
                <div key={goal} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                  {goal}
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button href="/contact" variant="secondary">
                Contact me
              </Button>
            </div>
          </Card>

          <Card>
            <SectionHeading
              eyebrow="Blog sections"
              title="Read the notes by topic"
              description="Each section keeps the language simple and focuses on the parts I actually need to understand."
            />
            <div className="mt-6 grid gap-4">
              {blogTopics.map((topic) => (
                <Card key={topic.slug} className="bg-white/80 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                    {topic.label}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950">{topic.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{topic.summary}</p>
                  <div className="mt-4">
                    <Button href={`/blog/${topic.slug}`} size="sm" variant="outline">
                      Open section
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </SiteContainer>
  );
}
