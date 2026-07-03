import { HeroCoverReel } from "@/components/HeroCoverReel";
import { projects } from "@/data/projects";

export function HeroSection() {
  return (
    <section
      id="work"
      className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_78%_10%,rgba(57,230,208,0.12),transparent_30%),linear-gradient(135deg,rgba(0,0,0,1)_0%,rgba(3,8,18,1)_52%,rgba(0,0,0,1)_100%)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(57,230,208,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(72,168,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:py-10">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center rounded-full border border-med-cyan/30 bg-med-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-med-cyan backdrop-blur">
            Medical AI · Computer Vision
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Medical Imaging AI Portfolio
          </h1>
          <p className="mt-5 text-lg font-medium leading-8 text-med-ink/86 sm:text-xl">
            3D Anatomy · GI Lesion Detection · Gastric Region Segmentation ·
            Case-level HP Recognition
          </p>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
            I build AI systems for medical imaging, gastrointestinal lesion
            detection, anatomical understanding, and case-level clinical
            prediction.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 rounded-[1.35rem] border border-med-cyan/20" />
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-glow backdrop-blur-xl">
            <HeroCoverReel projects={projects} />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.42))]" />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-white/10 bg-black/35 px-4 py-3 text-xs uppercase tracking-[0.2em] text-med-cyan/85 backdrop-blur">
              <span>Portfolio Overview</span>
              <span>AI Demo Reel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
