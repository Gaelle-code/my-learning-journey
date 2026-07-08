import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
};

export function Card({ children, className, as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-3xl border border-border bg-surface/90 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] backdrop-blur",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

