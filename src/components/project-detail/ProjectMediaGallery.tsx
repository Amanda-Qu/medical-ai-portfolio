import type { Project } from "@/data/projects";
import { MediaFallback } from "@/components/project-detail/MediaFallback";

export function ProjectMediaGallery({ project }: { project: Project }) {
  return (
    <section className="relative overflow-hidden px-5 py-6 sm:px-8 lg:py-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-med-cyan/[0.06] to-transparent" />
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl">
          <div className="aspect-video">
            <MediaFallback
              type="video"
              src={project.video}
              poster={project.coverImage}
              alt={`${project.title} demo video`}
              label={`${project.title} demo video`}
              fit="contain"
            />
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {project.gallery.slice(0, 3).map((image, index) => (
            <div
              key={image}
              className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur transition hover:-translate-y-0.5 hover:border-med-cyan/55"
            >
              <MediaFallback
                type="image"
                src={image}
                alt={`${project.title} thumbnail ${index + 1}`}
                label={`${project.title} image ${index + 1}`}
                fit="contain"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
              <div className="pointer-events-none absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-med-cyan backdrop-blur">
                Frame 0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
