import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectGrid() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#000_0%,#020611_46%,#000_100%)] px-5 py-16 sm:px-8 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(57,230,208,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(72,168,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-med-cyan/50 to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-med-cyan">
              Selected Projects
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Medical imaging systems
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-400">
            Four visual-first projects for detection, segmentation, clinical
            prediction, and spatial anatomy.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
