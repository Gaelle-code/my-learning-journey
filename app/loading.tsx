export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <div className="space-y-8">
        <div className="rounded-3xl border border-border bg-white/80 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
          <div className="h-4 w-40 animate-pulse rounded-full bg-slate-200" />
          <div className="mt-6 h-12 w-3/4 animate-pulse rounded-2xl bg-slate-200" />
          <div className="mt-4 h-5 w-full animate-pulse rounded-full bg-slate-200" />
          <div className="mt-3 h-5 w-11/12 animate-pulse rounded-full bg-slate-200" />
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="h-12 w-36 animate-pulse rounded-full bg-slate-200" />
            <div className="h-12 w-36 animate-pulse rounded-full bg-slate-200" />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="h-44 animate-pulse rounded-3xl border border-border bg-white/70"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

