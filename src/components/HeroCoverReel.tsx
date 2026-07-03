"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";

type HeroCoverReelProps = {
  projects: Project[];
};

export function HeroCoverReel({ projects }: HeroCoverReelProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, [projects.length]);

  return (
    <div className="relative h-full w-full bg-black">
      {projects.map((project, index) => (
        <Image
          key={project.slug}
          src={project.coverImage}
          alt={`${project.title} cover`}
          fill
          sizes="(min-width: 1024px) 55vw, 100vw"
          priority={index === 0}
          className={`object-contain transition duration-700 ease-out ${
            index === activeIndex
              ? "scale-100 opacity-95"
              : "scale-[1.025] opacity-0"
          }`}
        />
      ))}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.55))]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(57,230,208,0.16),transparent_32%)]" />

      <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-med-cyan backdrop-blur">
        {String(activeIndex + 1).padStart(2, "0")} / 04
      </div>

      <div className="absolute bottom-12 left-4 right-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-med-cyan">
          {activeProject.category}
        </p>
        <p className="mt-2 max-w-xl text-lg font-semibold text-white sm:text-xl">
          {activeProject.title}
        </p>
      </div>
    </div>
  );
}
