import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SectionHeader({ index, title, subtitle }: { index: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-12">
      <motion.p
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-mono text-sm text-primary mb-3"
      >
        <span className="text-muted-foreground">{index}.</span> ./{title.toLowerCase().replace(/\s+/g, "-")}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl font-bold tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground font-mono text-sm max-w-2xl">{subtitle}</p>
      )}
      <div className="mt-6 h-px bg-gradient-to-r from-primary via-primary/30 to-transparent" />
    </div>
  );
}

export function TerminalCard({ title = "bash", children, className = "" }: { title?: string; children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg border border-border bg-card/60 backdrop-blur overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/40">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">— {title} —</span>
      </div>
      <div className="p-5 font-mono text-sm">{children}</div>
    </div>
  );
}
