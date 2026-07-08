export default function BlogLoading() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-border bg-slate-950 p-6 text-white">
        <div className="h-4 w-36 animate-pulse rounded-full bg-white/20" />
        <div className="mt-5 h-10 w-3/5 animate-pulse rounded-2xl bg-white/20" />
        <div className="mt-4 h-4 w-full animate-pulse rounded-full bg-white/10" />
        <div className="mt-3 h-4 w-11/12 animate-pulse rounded-full bg-white/10" />
      </div>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
        <div className="space-y-4">
          <div className="h-64 animate-pulse rounded-3xl border border-border bg-white/70" />
          <div className="h-56 animate-pulse rounded-3xl border border-border bg-white/70" />
        </div>
        <div className="grid gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="h-36 animate-pulse rounded-3xl border border-border bg-white/70"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

