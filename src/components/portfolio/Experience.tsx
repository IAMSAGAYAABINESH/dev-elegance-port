import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export const EXPERIENCE = [
  {
    role: "Senior AI/ML Engineer",
    company: "Icebergs",
    period: "12/2025 — Present",
    current: true,
    bullets: [
      "Leading development of agentic AI systems for ERP, AI-CAD, and CRM platforms",
      "Built AI-powered HVAC automation for CAD floor plans using DWG/DXF processing",
      "Implemented OpenCV wall detection + YOLOv8/v11 for room identification in CAD layouts",
      "Automated HVAC ducting design via TR/CFM calculations and optimized layouts",
      "Deployed RAG chatbots using LLMs, vector embeddings, and semantic search",
      "Architected scalable backends with FastAPI, Flask, Streamlit, and MySQL",
    ],
    stack: ["Agentic AI", "OpenCV", "YOLOv8", "ezdxf", "FastAPI", "RAG"],
  },
  {
    role: "Programmer, ML",
    company: "Tata Consultancy Services",
    period: "05/2024 — 11/2025",
    bullets: [
      "Developed time-series forecasting pipelines for productivity analytics dashboards",
      "Built compact LSTM models (~1.2M params) using TensorFlow with Bfloat16 precision",
      "Deployed ML models via FastAPI for real-time dashboard integration",
      "Built RAG chatbots for SQL querying with intent detection on open-source LLMs",
      "Implemented semantic search with HuggingFace, sentence-transformers, FAISS",
    ],
    stack: ["LSTM", "TensorFlow", "Bfloat16", "FAISS", "FastAPI", "HuggingFace"],
  },
  {
    role: "Software Development Intern",
    company: "ZealEye.Ai",
    period: "07/2022",
    bullets: [
      "Built CV-based document validation and ID verification system",
      "Developed OCR pipelines using OpenCV, PyTesseract, and Regex",
      "Improved processing accuracy via image preprocessing techniques",
      "Awarded Letter of Recommendation for project contribution",
    ],
    stack: ["OpenCV", "PyTesseract", "Regex", "Python"],
  },
];

export function ExperienceTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-3 md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent" />

      <div className="space-y-10">
        {EXPERIENCE.map((e, i) => (
          <motion.div
            key={e.company}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="relative pl-12 md:pl-16"
          >
            <div className="absolute left-0 top-1.5 grid place-items-center">
              <div className={`relative h-7 w-7 rounded-md border ${e.current ? "border-primary bg-primary/10 shadow-[0_0_16px_var(--neon-dim)]" : "border-border bg-card"} grid place-items-center`}>
                <Briefcase size={14} className={e.current ? "text-primary" : "text-muted-foreground"} />
                {e.current && <span className="absolute -inset-0.5 rounded-md border border-primary/50 animate-ping" />}
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card/60 p-6 hover:border-primary/40 transition-colors group">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display text-xl font-semibold">
                  {e.role}
                  {e.current && (
                    <span className="ml-3 inline-flex items-center gap-1.5 text-xs font-mono text-primary align-middle">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                      now
                    </span>
                  )}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
              </div>
              <p className="font-mono text-sm text-primary mb-4">@ {e.company}</p>

              <ul className="space-y-2 mb-4">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-sm text-muted-foreground">
                    <span className="text-primary mt-1.5 shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                {e.stack.map((t) => (
                  <span key={t} className="font-mono text-[11px] px-2 py-0.5 rounded border border-primary/30 text-primary/90 bg-primary/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
