import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/portfolio/shared";
import { ExperienceTimeline } from "@/components/portfolio/Experience";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Sagaya Abinesh R" },
      { name: "description", content: "Senior AI/ML Engineer at Icebergs. Previously ML Programmer at Tata Consultancy Services. Building agentic AI, LSTM forecasters, and RAG systems." },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <SectionHeader index="00" title="Experience" subtitle="// $ git log --oneline --career" />
      <ExperienceTimeline />
    </div>
  );
}
