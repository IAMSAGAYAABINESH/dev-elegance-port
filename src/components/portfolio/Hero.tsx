import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Download, Terminal } from "lucide-react";

const ROLES = [
  "Senior AI/ML Engineer",
  "Agentic AI Architect",
  "RAG & LLM Specialist",
  "Computer Vision Engineer",
];

function useTypewriter(words: string[], speed = 80, pause = 1600) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const w = words[i];
    if (!del && text === w) {
      const t = setTimeout(() => setDel(true), pause);
      return () => clearTimeout(t);
    }
    if (del && text === "") {
      setDel(false);
      setI((i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => setText(del ? w.slice(0, text.length - 1) : w.slice(0, text.length + 1)),
      del ? speed / 2 : speed
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

const codeLines = [
  { c: "text-muted-foreground", t: "# initializing engineer.profile" },
  { c: "text-primary", t: "from sagaya import AIEngineer" },
  { c: "text-foreground", t: "" },
  { c: "text-foreground", t: "engineer = AIEngineer(" },
  { c: "text-foreground", t: '  name="Sagaya Abinesh R",' },
  { c: "text-foreground", t: '  role="Senior AI/ML Engineer",' },
  { c: "text-foreground", t: '  stack=["Python", "TensorFlow",' },
  { c: "text-foreground", t: '         "FastAPI", "LangChain"],' },
  { c: "text-foreground", t: '  focus=["Agentic AI", "RAG",' },
  { c: "text-foreground", t: '         "CV", "Production ML"],' },
  { c: "text-foreground", t: ")" },
  { c: "text-foreground", t: "" },
  { c: "text-muted-foreground", t: "# status:" },
  { c: "text-primary", t: "engineer.deploy()  → ✓ shipping" },
];

export function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      {/* grid background */}
      <div className="absolute inset-0 grid-bg opacity-[0.07] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      {/* scanline */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-scan" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-xs text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            available for senior ai/ml roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Sagaya
            <br />
            <span className="text-primary text-glow">Abinesh R</span>
            <span className="text-primary animate-blink">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-5 font-mono text-lg text-muted-foreground"
          >
            <span className="text-primary">&gt; </span>
            <span className="text-foreground">{role}</span>
            <span className="text-primary animate-blink">|</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-6 max-w-xl text-muted-foreground leading-relaxed"
          >
            I architect production-grade AI systems — from{" "}
            <span className="text-primary">agentic ERP/CRM platforms</span> and
            HVAC-CAD automation to LSTM forecasting and{" "}
            <span className="text-primary">RAG chatbots</span> serving real
            enterprise workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-sm text-primary-foreground hover:shadow-[0_0_32px_var(--neon-dim)] transition-all"
            >
              ./view-work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="mailto:abinesh.sagaya@gmail.com"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-5 py-3 font-mono text-sm hover:border-primary hover:text-primary transition-colors"
            >
              <Download size={16} /> resume.pdf
            </a>
          </motion.div>

          <div className="mt-10 grid grid-cols-3 max-w-md gap-6 font-mono">
            {[
              { k: "2+", v: "years shipping" },
              { k: "10+", v: "AI systems" },
              { k: "8.0", v: "cgpa / cs" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl font-bold text-primary text-glow">{s.k}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative animate-float"
        >
          <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
          <div className="relative rounded-xl border border-border bg-card/80 backdrop-blur overflow-hidden border-glow">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-terminal/60">
              <span className="h-3 w-3 rounded-full bg-destructive/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <span className="h-3 w-3 rounded-full bg-primary/80" />
              <span className="ml-3 font-mono text-xs text-muted-foreground flex items-center gap-1.5">
                <Terminal size={12} /> sagaya@portfolio:~/profile.py
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed bg-terminal/80">
              {codeLines.map((l, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.06 }}
                  className={`${l.c} whitespace-pre`}
                >
                  <span className="text-muted-foreground/40 mr-3 select-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {l.t || "\u00A0"}
                </motion.div>
              ))}
              <div className="mt-3 text-primary">
                $ <span className="animate-blink">_</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
