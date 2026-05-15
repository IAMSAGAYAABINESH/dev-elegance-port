import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/portfolio/shared";
import { ProjectsGrid } from "@/components/portfolio/Projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Sagaya Abinesh R" },
      { name: "description", content: "Production AI systems and research projects: GymGPT RAG, Cancer Detection CNN, HVAC-CAD Automation, RAG SQL Chatbot." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <SectionHeader index="00" title="Projects" subtitle="// $ ls -la ./projects" />
      <ProjectsGrid />
    </div>
  );
}
