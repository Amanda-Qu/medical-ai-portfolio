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
      className="group relative block overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/45 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-teal-600/60 hover:shadow-[0_0_34px_rgba(13,148,136,0.18)]"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.03] transition group-hover:ring-teal-700/25" />
      <div className="relative aspect-[4/3] overflow-hidden bg-black sm:aspect-video">
        <Image
          src={project.coverImage}
          alt={`${project.title} cover`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover opacity-95 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-black/26 to-black/0 transition duration-300 group-hover:via-black/14" />
        <div className="absolute left-5 top-5 flex items-center gap-3">
          <span className="rounded-full border border-slate-600/70 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-gray-200 backdrop-blur">
            0{index + 1}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-500">
            {project.category}
          </span>
        </div>
      </div>

      <div className="relative p-5 sm:p-6">
        <h3 className="text-2xl font-semibold leading-tight text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-gray-200">
          {project.summary}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-gray-400/70">
          {project.summaryZh}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gray-600/70 bg-black/20 px-3.5 py-1 text-xs font-mono uppercase tracking-[0.08em] text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm font-semibold text-teal-500 transition group-hover:text-teal-400">
          <span>View Case Study</span>
          <span className="transition group-hover:translate-x-1">-&gt;</span>
        </div>
      </div>
    </Link>
  );
}
