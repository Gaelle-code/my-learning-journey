import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { developmentGoals, learningJourney } from "@/data/learningJourney";

export const metadata: Metadata = {
  title: "About",
  description:
    "Read about the student, learning background, current skills, and motivation behind the learning journey.",
};

export default function AboutPage() {
  return (
    <SiteContainer className="py-8 sm:py-10 lg:py-14">
      <div className="space-y-8">
        <PageHero
          eyebrow="About me"
          title="A short introduction to the person behind the learning journal."
          description="This page shares the background, current focus, and the kind of developer I am trying to become."
        />

        <section className="grid gap-4 lg:grid-cols-3">
          {learningJourney.map((item) => (
            <Card key={item.title}>
              <h2 className="text-xl font-semibold text-slate-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{item.summary}</p>
            </Card>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <Card>
            <SectionHeading
              eyebrow="Background"
              title="What I’m focusing on"
              description="I’m building a strong foundation in frontend development while gradually learning how the interface connects to the rest of an application."
            />
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-950">Current skills</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  HTML, CSS, JavaScript basics, React component patterns, responsive design, and
                  the Next.js App Router.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-950">Motivation</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  I enjoy building useful digital experiences and want to grow into a developer
                  who solves problems with clarity and care.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <SectionHeading
              eyebrow="Goals"
              title="How I want to grow"
              description="These goals keep my learning focused and help me stay consistent while I practice."
            />
            <div className="mt-6 space-y-3">
              {developmentGoals.map((goal, index) => (
                <div key={goal} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent-strong">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-slate-700">{goal}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </SiteContainer>
  );
}
