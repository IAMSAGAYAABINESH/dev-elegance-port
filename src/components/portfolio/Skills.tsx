import { motion } from "framer-motion";

const SKILLS = [
  { cat: "languages", items: ["Python", "SQL"] },
  { cat: "ml/dl", items: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "LSTM", "CNN"] },
  { cat: "genai/llm", items: ["LangChain", "RAG", "FAISS", "HuggingFace", "Mixtral-8x7B", "Embeddings"] },
  { cat: "computer vision", items: ["OpenCV", "YOLOv8", "YOLOv11", "ezdxf", "OCR"] },
  { cat: "backend", items: ["FastAPI", "Flask", "Streamlit", "MySQL"] },
  { cat: "data/tools", items: ["Pandas", "NumPy", "Power BI", "Bfloat16"] },
];

export function SkillsMarquee() {
  return (
    <section className="border-y border-border bg-card/30 py-6 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex animate-marquee whitespace-nowrap">
        {[...SKILLS, ...SKILLS].map((s, i) => (
          <div key={i} className="flex items-center mx-8 font-mono text-sm">
            <span className="text-primary">{"//"}</span>
            <span className="ml-2 text-muted-foreground">{s.cat}:</span>
            <span className="ml-2 text-foreground">{s.items.join(" · ")}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SkillsGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {SKILLS.map((s, i) => (
        <motion.div
          key={s.cat}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="group relative rounded-lg border border-border bg-card/60 p-5 hover:border-primary/60 transition-colors"
        >
          <div className="absolute top-0 right-0 px-2 py-0.5 font-mono text-[10px] text-primary/60 border-l border-b border-border rounded-bl">
            {String(i + 1).padStart(2, "0")}
          </div>
          <h3 className="font-mono text-sm text-primary mb-3">
            <span className="text-muted-foreground">class </span>
            {s.cat.replace(/[^a-z]/g, "_")}
            <span className="text-muted-foreground">:</span>
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {s.items.map((it) => (
              <span
                key={it}
                className="font-mono text-xs px-2 py-1 rounded border border-border bg-secondary/50 text-foreground group-hover:border-primary/30 transition-colors"
              >
                {it}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
