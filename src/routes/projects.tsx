import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/portfolio/shared";
import { ProjectsGrid } from "@/components/portfolio/Projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Sagaya Abinesh R" },
      { name: "description", content: "Production AI systems and research projects: GymGPT RAG, Cancer Detection CNN, HVAC-CAD Automation, RAG SQL Chatbot." },
      { property: "og:title", content: "Projects — Sagaya Abinesh R" },
      { property: "og:description", content: "Selected AI/ML work including GymGPT (RAG), HVAC-CAD automation, cancer detection CNN, and RAG SQL chatbots." },
      { property: "og:url", content: "https://sagaya-protfolio.lovable.app/projects" },
    ],
    links: [
      { rel: "canonical", href: "https://sagaya-protfolio.lovable.app/projects" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <h1 className="sr-only">Projects — Sagaya Abinesh R</h1>
      <SectionHeader index="00" title="Projects" subtitle="// $ ls -la ./projects" />
      <ProjectsGrid />
    </div>
  );
}
