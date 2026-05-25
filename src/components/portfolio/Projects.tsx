import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";

export const PROJECTS = [
  {
    id: "gymgpt",
    name: "GymGPT",
    tag: "RAG · LLM",
    summary:
      "Generative AI chatbot for gym-related queries, powered by Retrieval-Augmented Generation and Mixtral-8x7B.",
    bullets: [
      "Built on Mixtral-8x7B via Together AI for inference",
      "Streamlit + LangChain interface, FAISS vector store",
      "Nomic embeddings for high-quality semantic retrieval",
    ],
    stack: ["Mixtral-8x7B", "LangChain", "FAISS", "Streamlit", "Nomic Embeddings", "PyPDF"],
    accent: "from-primary/30 to-transparent",
  },
  {
    id: "cancer-cnn",
    name: "Cancer Detection CNN",
    tag: "Deep Learning · CV",
    summary:
      "Deep learning system that detects adenocarcinoma from histopathological biopsy images using CNNs.",
    bullets: [
      "TensorFlow + Keras CNN architecture",
      "Image preprocessing pipeline for histopath data",
      "Streamlit UI for interactive prediction",
    ],
    stack: ["TensorFlow", "Keras", "CNN", "Streamlit", "NumPy", "Scikit-learn"],
    accent: "from-emerald-400/30 to-transparent",
  },
  {
    id: "hvac-cad",
    name: "HVAC-CAD Automation",
    tag: "Agentic AI · CV",
    summary:
      "Production AI system that converts DWG/DXF floor plans into optimized HVAC duct layouts.",
    bullets: [
      "ODA-based DWG → DXF conversion + ezdxf geometry extraction",
      "OpenCV wall detection + YOLOv8/v11 room identification",
      "Auto TR/CFM calculation and duct layout generation",
    ],
    stack: ["YOLOv11", "OpenCV", "ezdxf", "FastAPI", "Python"],
    accent: "from-lime-400/30 to-transparent",
  },
  {
    id: "rag-sql",
    name: "RAG SQL Chatbot",
    tag: "LLM · Backend",
    summary:
      "Enterprise chatbot that translates natural language queries to SQL via intent detection on open-source LLMs.",
    bullets: [
      "Intent classification + RAG over schema docs",
      "Semantic search via sentence-transformers + FAISS",
      "Deployed as FastAPI service for dashboard integration",
    ],
    stack: ["RAG", "FAISS", "HuggingFace", "FastAPI", "MySQL"],
    accent: "from-primary/30 to-transparent",
  },
];

export function ProjectsGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {PROJECTS.map((p, i) => (
        <motion.article
          key={p.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className="group relative rounded-xl border border-border bg-card/60 overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-1"
        >
          <div className={`absolute inset-x-0 -top-32 h-64 bg-gradient-radial bg-gradient-to-b ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity blur-3xl`} />

          <div className="relative p-6">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <p className="font-mono text-xs text-primary mb-1.5 flex items-center gap-1.5">
                  <Sparkles size={12} /> {p.tag}
                </p>
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  {p.name}
                </h3>
              </div>
              <div className="flex gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                <a href="https://github.com" target="_blank" rel="noreferrer" aria-label={`${p.name} on GitHub`} className="h-8 w-8 grid place-items-center rounded border border-border hover:border-primary hover:text-primary transition-colors">
                  <Github size={14} />
                </a>
                <a href="#" aria-label={`Open ${p.name} live demo`} className="h-8 w-8 grid place-items-center rounded border border-border hover:border-primary hover:text-primary transition-colors">
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {p.summary}
            </p>

            <ul className="space-y-1.5 mb-5 font-mono text-xs">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-muted-foreground">
                  <span className="text-primary">›</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
              {p.stack.map((t) => (
                <span key={t} className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
