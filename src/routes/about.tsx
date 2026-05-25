import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader, TerminalCard } from "@/components/portfolio/shared";
import { SkillsGrid } from "@/components/portfolio/Skills";
import { GraduationCap, MapPin, Award } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sagaya Abinesh R" },
      { name: "description", content: "Senior AI/ML Engineer based in Chennai. Bachelor of Computer Science with 8.0 CGPA. Specialized in agentic AI, RAG, and computer vision." },
      { property: "og:title", content: "About — Sagaya Abinesh R" },
      { property: "og:description", content: "Senior AI/ML Engineer based in Chennai specializing in agentic AI, RAG, and computer vision." },
      { property: "og:url", content: "https://sagaya-protfolio.lovable.app/about" },
    ],
    links: [
      { rel: "canonical", href: "https://sagaya-protfolio.lovable.app/about" },
    ],
  }),
  component: AboutPage,
});

const CERTS = [
  "Data Analytics — Coding Invaders",
  "Crash Course on Python — Coursera",
  "Data Analytics by Google — Coursera",
  "Machine Learning with Python — IBM SkillBuild",
  "Deep Learning with TensorFlow — IBM SkillBuild",
  "Career Essentials in Data Analysis — Microsoft × LinkedIn",
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <h1 className="sr-only">About Sagaya Abinesh R — Senior AI/ML Engineer</h1>
      <SectionHeader index="00" title="About" subtitle="// $ whoami → engineer who ships" />

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-5 text-lg leading-relaxed text-muted-foreground"
        >
          <p>
            I'm <span className="text-primary font-semibold">Sagaya Abinesh R</span>, a
            Senior AI/ML Engineer based in Chennai. I work at the intersection of{" "}
            <span className="text-foreground">applied research</span> and{" "}
            <span className="text-foreground">production engineering</span> — taking
            modern AI primitives and building them into systems enterprises can
            actually run.
          </p>
          <p>
            Today I lead the development of <span className="text-primary">agentic AI</span>{" "}
            for ERP, CRM, and AI-CAD platforms at Icebergs — including an
            HVAC-CAD automation system that reads architectural floor plans
            (DWG/DXF), detects walls and rooms with computer vision, and
            generates optimized duct layouts.
          </p>
          <p>
            Before that, at <span className="text-primary">TCS</span>, I built
            time-series LSTM forecasters and RAG chatbots that translate natural
            language into SQL — deployed to real analytics dashboards via
            FastAPI.
          </p>
          <p>
            I care about quiet systems that work, fast iteration loops, and code
            that another engineer can pick up next quarter without flinching.
          </p>
        </motion.div>

        <TerminalCard title="profile.json">
          <pre className="text-foreground whitespace-pre-wrap leading-relaxed">
{`{
  `}<span className="text-primary">"name"</span>{`: "Sagaya Abinesh R",
  `}<span className="text-primary">"role"</span>{`: "Senior AI/ML Engineer",
  `}<span className="text-primary">"company"</span>{`: "Icebergs",
  `}<span className="text-primary">"location"</span>{`: "Chennai, IN",
  `}<span className="text-primary">"focus"</span>{`: [
    "Agentic AI",
    "RAG / LLMs",
    "Computer Vision",
    "Production ML"
  ],
  `}<span className="text-primary">"open_to"</span>{`: "senior_roles",
  `}<span className="text-primary">"status"</span>{`: "shipping ✓"
}`}
          </pre>
        </TerminalCard>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-20">
        {[
          { icon: GraduationCap, label: "education", value: "B.Sc Computer Science", sub: "Patrician College · 8.0 CGPA" },
          { icon: MapPin, label: "based in", value: "Chennai, India", sub: "open to remote / hybrid" },
          { icon: Award, label: "recognition", value: "LoR · ZealEye.Ai", sub: "for project contribution" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg border border-border bg-card/60 p-5 hover:border-primary/40 transition-colors">
            <s.icon size={18} className="text-primary mb-3" />
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
            <p className="text-foreground font-semibold mt-1">{s.value}</p>
            <p className="font-mono text-xs text-muted-foreground mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      <SectionHeader index="01" title="Stack" subtitle="// composed kit, ranked by frequency" />
      <SkillsGrid />

      <div className="mt-20">
        <SectionHeader index="02" title="Certifications" subtitle="// continuous learning log" />
        <div className="grid md:grid-cols-2 gap-3">
          {CERTS.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex items-center gap-3 rounded-md border border-border bg-card/40 px-4 py-3 hover:border-primary/40 transition-colors font-mono text-sm"
            >
              <span className="text-primary">[✓]</span>
              <span className="text-foreground/90">{c}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
