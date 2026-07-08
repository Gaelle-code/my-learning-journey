import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogTopics } from "@/data/blogTopics";

const topic = blogTopics.find((entry) => entry.slug === "mobile");

export const metadata: Metadata = {
  title: "Mobile Blog",
  description:
    "A clear explanation of mobile development, UX priorities, and the project ideas I want to practice next.",
};

export default function MobileBlogPage() {
  if (!topic) {
    return null;
  }

  return (
    <div className="space-y-6">
      <Card>
        <SectionHeading eyebrow="Mobile" title={topic.title} description={topic.summary} />
      </Card>

      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="text-xl font-semibold text-slate-950">What mobile development is</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Mobile development focuses on creating app experiences for phones and tablets, where
            touch navigation, clarity, and performance matter every time.
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
            Practice touch-friendly layouts, think through app navigation, and learn how mobile
            products stay comfortable to use on smaller screens.
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
