import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/portfolio/shared";
import { ExperienceTimeline } from "@/components/portfolio/Experience";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Sagaya Abinesh R" },
      { name: "description", content: "Senior AI/ML Engineer at Icebergs. Previously ML Programmer at Tata Consultancy Services. Building agentic AI, LSTM forecasters, and RAG systems." },
      { property: "og:title", content: "Experience — Sagaya Abinesh R" },
      { property: "og:description", content: "Career timeline: Senior AI/ML Engineer at Icebergs, formerly ML Programmer at TCS." },
      { property: "og:url", content: "https://sagaya-protfolio.lovable.app/experience" },
    ],
    links: [
      { rel: "canonical", href: "https://sagaya-protfolio.lovable.app/experience" },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h1 className="sr-only">Experience — Sagaya Abinesh R</h1>
      <SectionHeader index="00" title="Experience" subtitle="// $ git log --oneline --career" />
      <ExperienceTimeline />
    </div>
  );
}
