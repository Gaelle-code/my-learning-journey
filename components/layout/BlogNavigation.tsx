import Link from "next/link";
import { blogNavigation } from "@/data/navigation";

export function BlogNavigation() {
  return (
    <nav className="grid gap-2">
      {blogNavigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded-2xl border border-border bg-white px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent-strong"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

