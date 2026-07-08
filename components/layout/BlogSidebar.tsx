import { Card } from "@/components/ui/Card";
import { blogTopics } from "@/data/blogTopics";
import { learningFocusAreas } from "@/data/learningJourney";
import { BlogNavigation } from "./BlogNavigation";

export function BlogSidebar() {
  return (
    <div className="space-y-5">
      <Card>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
          Navigate
        </p>
        <div className="mt-4">
          <BlogNavigation />
        </div>
      </Card>

      <Card>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
          Learning areas
        </p>
        <div className="mt-4 space-y-4">
          {learningFocusAreas.map((area) => (
            <div key={area.title} className="rounded-2xl bg-slate-50 p-4">
              <p className="font-semibold text-slate-950">{area.title}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{area.description}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
          Blog topics
        </p>
        <div className="mt-4 space-y-3">
          {blogTopics.map((topic) => (
            <div key={topic.slug} className="rounded-2xl border border-border bg-white p-4">
              <p className="font-semibold text-slate-950">{topic.title}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{topic.summary}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

