import type { Metadata } from "next";
import { getAllProjects } from "@/lib/projects";
import { PageHeader } from "@/components/shared/page-header";
import { ProjectCard } from "@/components/projects/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description: "Agjenti AI and everything else I've built — case studies with the problem, the solution, and the lessons.",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <>
      <PageHeader
        eyebrow="What I've built"
        title="Projects"
        description="Every project here is a real case study — the problem, the build, the timeline, and what I'd change if I did it again."
      />
      <div className="container-editorial grid gap-6 pb-28 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
