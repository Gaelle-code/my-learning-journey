import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogTopics } from "@/data/blogTopics";

export const metadata: Metadata = {
  title: "Blog Overview",
  description:
    "An overview of the learning notes with links to frontend, backend, and mobile development.",
};

export default function BlogPage() {
  return (
    <div className="space-y-6">
      <Card>
        <SectionHeading
          eyebrow="Blog overview"
          title="The three areas I keep coming back to"
          description="These are the topics that shape most of my study time and the projects I build next."
        />
      </Card>

      <section className="grid gap-4">
        {blogTopics.map((topic) => (
          <Card key={topic.slug} as="article">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                  {topic.label}
                </p>
                <h2 className="text-2xl font-semibold text-slate-950">{topic.title}</h2>
                <p className="max-w-2xl text-sm leading-6 text-muted">{topic.summary}</p>
              </div>
              <Button href={`/blog/${topic.slug}`} variant="outline" size="sm">
                Open section
              </Button>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}
