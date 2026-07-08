import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogTopics } from "@/data/blogTopics";

const topic = blogTopics.find((entry) => entry.slug === "backend");

export const metadata: Metadata = {
  title: "Backend Blog",
  description:
    "A clear explanation of backend development, APIs, databases, and the project ideas I want to explore.",
};

export default function BackendBlogPage() {
  if (!topic) {
    return null;
  }

  return (
    <div className="space-y-6">
      <Card>
        <SectionHeading eyebrow="Backend" title={topic.title} description={topic.summary} />
      </Card>

      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="text-xl font-semibold text-slate-950">What backend development is</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Backend development powers the behind-the-scenes systems that store data, enforce
            rules, and respond to requests from the user interface.
          </p>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold text-slate-950">Core concepts to remember</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
            {topic.points.map((point) => (
              <li key={point}>- {point}</li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold text-slate-950">Learning goals</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Understand how APIs move data, how authentication protects people, and how database
            concepts support useful application features.
          </p>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold text-slate-950">Project ideas</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
            {topic.projects.map((project) => (
              <li key={project}>- {project}</li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
}
