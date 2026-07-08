import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogTopics } from "@/data/blogTopics";

const topic = blogTopics.find((entry) => entry.slug === "frontend");

export const metadata: Metadata = {
  title: "Frontend Blog",
  description:
    "A clear explanation of frontend development, the tools involved, and the project ideas I want to try next.",
};

export default function FrontendBlogPage() {
  if (!topic) {
    return null;
  }

  return (
    <div className="space-y-6">
      <Card>
        <SectionHeading eyebrow="Frontend" title={topic.title} description={topic.summary} />
      </Card>

      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="text-xl font-semibold text-slate-950">What frontend development is</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Frontend development is the part of software people see and interact with directly. It
            combines structure, style, motion, and logic so a page feels clear and useful.
          </p>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold text-slate-950">Tools I want to keep practicing</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
            {topic.points.map((point) => (
              <li key={point}>- {point}</li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold text-slate-950">Learning goals</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Build stronger UI structure, write reusable components, and design pages that work
            well on mobile, tablet, and desktop.
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
