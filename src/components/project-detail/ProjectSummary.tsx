import type { Project } from "@/data/projects";

const summaryItems = [
  ["Problem", "problem"],
  ["Method", "method"],
  ["Result", "result"],
  ["My Role", "role"]
] as const;

export function ProjectSummary({ project }: { project: Project }) {
  return (
    <section className="px-5 pb-6 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-4">
        {summaryItems.map(([label, key], index) => (
          <article
            key={label}
            className="min-h-44 rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-med-cyan">
                {label}
              </h2>
              <span className="text-xs font-semibold text-white/20">
                0{index + 1}
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              {project.sections[key]}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
