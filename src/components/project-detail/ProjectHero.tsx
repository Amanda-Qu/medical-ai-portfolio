import type { Project } from "@/data/projects";

export function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_82%_12%,rgba(57,230,208,0.13),transparent_30%),linear-gradient(135deg,rgba(0,0,0,1)_0%,rgba(3,10,22,1)_54%,rgba(0,0,0,1)_100%)] px-5 pb-8 pt-9 sm:px-8 lg:pb-10">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(57,230,208,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(72,168,255,0.04)_1px,transparent_1px)] bg-[size:52px_52px]" />
      <div className="relative mx-auto max-w-7xl">
        <p
          className={`inline-block bg-gradient-to-r ${project.accent} bg-clip-text text-xs font-semibold uppercase tracking-[0.22em] text-transparent`}
        >
          {project.category}
        </p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-3 text-xl font-medium text-med-cyan/88">
              {project.titleZh}
            </p>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-7 text-slate-300">
              {project.positioning}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200 backdrop-blur"
              >
                {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
