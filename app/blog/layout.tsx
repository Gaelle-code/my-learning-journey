import type { Metadata } from "next";
import { BlogHeader } from "@/components/layout/BlogHeader";
import { BlogSidebar } from "@/components/layout/BlogSidebar";
import { SiteContainer } from "@/components/layout/SiteContainer";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "A nested blog layout for frontend, backend, and mobile learning notes inside the learning journey website.",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SiteContainer className="py-8 sm:py-10 lg:py-14">
      <div className="space-y-8">
        <BlogHeader />
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="lg:hidden">
              <BlogSidebar />
            </div>
            <div className="hidden lg:block">
              <BlogSidebar />
            </div>
          </aside>
          <main className="space-y-6">{children}</main>
        </div>
      </div>
    </SiteContainer>
  );
}

