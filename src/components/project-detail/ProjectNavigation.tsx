import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectNavigation({
  nextProject
}: {
  nextProject: Project;
}) {
  return (
    <section className="border-t border-white/10 bg-[linear-gradient(180deg,#000,#020611)] px-5 py-7 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/#projects"
          className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-semibold text-med-cyan transition hover:border-med-cyan/60 hover:text-white"
        >
          Back to Projects
        </Link>
        <Link
          href={nextProject.href}
          className="group inline-flex items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-3 text-left backdrop-blur transition hover:border-med-cyan/70"
        >
          <span>
            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Next Project
            </span>
            <span className="mt-1 block text-sm font-semibold text-white group-hover:text-med-cyan">
              {nextProject.title}
            </span>
          </span>
          <span className="text-med-cyan">-&gt;</span>
        </Link>
      </div>
    </section>
  );
}
