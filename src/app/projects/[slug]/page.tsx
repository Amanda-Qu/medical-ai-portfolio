import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProjectHero } from "@/components/project-detail/ProjectHero";
import { ProjectMediaGallery } from "@/components/project-detail/ProjectMediaGallery";
import { ProjectNavigation } from "@/components/project-detail/ProjectNavigation";
import { ProjectSummary } from "@/components/project-detail/ProjectSummary";
import { VisualHighlights } from "@/components/project-detail/VisualHighlights";
import { getNextProject, getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found"
    };
  }

  return {
    title: `${project.title} | Amanda Qu Zhiyan`,
    description: project.summary
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  const nextProject = getNextProject(params.slug);

  if (!project || !nextProject) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-med-bg">
        <ProjectHero project={project} />
        <ProjectMediaGallery project={project} />
        <ProjectSummary project={project} />
        <VisualHighlights project={project} />
        <ProjectNavigation nextProject={nextProject} />
      </main>
      <Footer />
    </>
  );
}
