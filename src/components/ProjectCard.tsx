import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      href={project.href}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-med-cyan/70 hover:shadow-[0_0_42px_rgba(57,230,208,0.22)]"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.03] transition group-hover:ring-med-cyan/30" />
      <div className="relative aspect-video overflow-hidden bg-black">
        <Image
          src={project.coverImage}
          alt={`${project.title} cover`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-contain opacity-90 transition duration-500 group-hover:scale-[1.025] group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/30 to-black/5 transition duration-300 group-hover:via-black/18" />
        <div className="absolute left-5 top-5 flex items-center gap-3">
          <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur">
            0{index + 1}
          </span>
          <span
            className={`bg-gradient-to-r ${project.accent} bg-clip-text text-xs font-semibold uppercase tracking-[0.2em] text-transparent`}
          >
            {project.category}
          </span>
        </div>
      </div>

      <div className="relative p-5 sm:p-6">
        <h3 className="text-2xl font-semibold leading-tight text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          {project.summary}
        </p>
        <p className="mt-2 text-xs leading-5 text-med-cyan/78">
          {project.summaryZh}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm font-semibold text-med-cyan">
          <span>View Case Study</span>
          <span className="transition group-hover:translate-x-1">-&gt;</span>
        </div>
      </div>
    </Link>
  );
}
