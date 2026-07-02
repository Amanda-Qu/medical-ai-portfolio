import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ProjectGrid } from "@/components/ProjectGrid";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProjectGrid />
        <section id="about" className="border-t border-white/10 bg-[linear-gradient(180deg,#000,#020308)] px-5 py-14 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-med-cyan">
              About
            </p>
            <p className="max-w-3xl text-2xl font-medium leading-10 text-white/88">
              Medical AI engineer focused on visual diagnosis workflows,
              endoscopic image understanding, anatomical reasoning, and
              multimodal clinical decision support.
            </p>
            <p className="max-w-3xl text-sm leading-6 text-slate-500 lg:col-start-2">
              All medical images shown in this portfolio are anonymized,
              synthetic, or replaced with representative placeholders for
              privacy protection.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
