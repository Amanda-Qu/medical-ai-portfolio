import type { Project } from "@/data/projects";
import { MediaFallback } from "@/components/project-detail/MediaFallback";

export function VisualHighlights({ project }: { project: Project }) {
  return (
    <section className="px-5 pb-8 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-med-cyan">
            Visual Highlights
          </h2>
          <p className="hidden text-sm text-slate-500 sm:block">
            Image-first evidence for model behavior and workflow value.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {project.visualHighlights.map((item, index) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-med-cyan/60 hover:shadow-[0_0_34px_rgba(57,230,208,0.16)]"
            >
              <div className="relative aspect-[4/3] bg-med-panel-soft">
                <MediaFallback
                  type="image"
                  src={item.image ?? project.gallery[index] ?? project.coverImage}
                  alt={`${project.title} ${item.title}`}
                  label={item.title}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/10 bg-black/35 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/78 backdrop-blur">
                  0{index + 1}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-5 text-slate-400">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
