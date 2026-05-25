import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export const EXPERIENCE = [
  {
    role: "Senior AI/ML Engineer",
    company: "Icebergs",
    period: "12/2025 – Present",
    current: true,
    bullets: [
      "Leading development of agentic AI systems for ERP, AI-CAD, and CRM platforms",
      "Developed an AI-powered HVAC automation system for CAD floor plans using DWG/DXF processing",
      "Built pipelines to convert DWG to DXF using ODA and extract geometry/layers using ezdxf",
      "Implemented OpenCV-based wall detection and geometric processing for floor plan analysis",
      "Used YOLOv8 and YOLOv11 models for object detection and room identification in CAD layouts",
      "Automated HVAC ducting design by calculating TR and CFM values and generating optimized duct layouts",
      "Architected and deployed multi-turn LLM chatbots with RAG, vector embeddings, and semantic retrieval for enterprise use",
      "Developed AI-powered invoice automation with GST computation, stock validation, and DB-driven sequencing",
      "Designed scalable backend systems using Python, FastAPI, Flask, Streamlit, and MySQL",
      "Delivered production-grade intelligent automation solutions for enterprise workflows",
    ],
    stack: ["Agentic AI", "OpenCV", "YOLOv8", "ezdxf", "FastAPI", "RAG"],
  },
  {
    role: "Programmer, ML",
    company: "Tata Consultancy Services",
    period: "05/2024 – 11/2025",
    bullets: [
      "Developed time-series forecasting pipelines for productivity and quality analytics dashboards",
      "Built compact LSTM-based forecasting models (~1.2M parameters) using TensorFlow and Keras",
      "Applied mixed precision training (Bfloat16) to improve inference efficiency and performance",
      "Performed preprocessing, feature engineering, model validation, and hyperparameter tuning",
      "Deployed ML models using FastAPI APIs for dashboard integration",
      "Built RAG-based chatbot systems for querying documents and used open-source LLMs",
      "Engineered end-to-end semantic search using HuggingFace, Sentence-Transformers, and FAISS vector store",
      "Worked extensively with Python, Pandas, NumPy, and Scikit-learn for ML development",
    ],
    stack: ["LSTM", "TensorFlow", "Bfloat16", "FAISS", "FastAPI", "HuggingFace"],
  },
  {
    role: "Software Development Intern",
    company: "ZealEye.Ai",
    period: "07/2022 – 07/2022",
    bullets: [
      "Developed a computer vision–based document validation and ID verification system",
      "Built OCR pipelines using OpenCV, PyTesseract, and Regular Expressions (Regex)",
      "Automated extraction and validation of essential details from multiple document types",
      "Improved document processing accuracy and reliability using image preprocessing techniques",
      "Developed the solution using Python-based automation workflows",
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
