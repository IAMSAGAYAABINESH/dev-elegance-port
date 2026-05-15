import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { SkillsMarquee, SkillsGrid } from "@/components/portfolio/Skills";
import { SectionHeader } from "@/components/portfolio/shared";
import { ProjectsGrid } from "@/components/portfolio/Projects";
import { ExperienceTimeline } from "@/components/portfolio/Experience";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sagaya Abinesh R — Senior AI/ML Engineer" },
      { name: "description", content: "Senior AI/ML Engineer building agentic AI, RAG, computer vision and production ML systems." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <SkillsMarquee />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader index="01" title="Skills" subtitle="// the toolkit I ship with" />
        <SkillsGrid />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 border-t border-border">
        <SectionHeader index="02" title="Selected Work" subtitle="// production AI systems & research projects" />
        <ProjectsGrid />
        <div className="mt-10 text-center">
          <Link to="/projects" className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:gap-3 transition-all">
            ./view-all-projects <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 border-t border-border">
        <SectionHeader index="03" title="Experience" subtitle="// from intern → senior engineer" />
        <ExperienceTimeline />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 border-t border-border">
        <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-[0.05]" />
          <p className="relative font-mono text-sm text-primary mb-3">// let's build something</p>
          <h2 className="relative font-display text-4xl md:text-5xl font-bold mb-4">
            Have an AI problem worth solving?
          </h2>
          <p className="relative text-muted-foreground max-w-xl mx-auto mb-8">
            I'm available for senior engineering roles, complex AI consulting,
            and ambitious product collaborations.
          </p>
          <Link
            to="/contact"
            className="relative inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-sm text-primary-foreground hover:shadow-[0_0_32px_var(--neon-dim)] transition-all"
          >
            ./start-conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
