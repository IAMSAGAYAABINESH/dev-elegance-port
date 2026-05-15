import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="mx-auto max-w-7xl px-6 py-10 grid gap-8 md:grid-cols-3 font-mono text-sm">
        <div>
          <p className="text-primary mb-2">// signal</p>
          <p className="text-muted-foreground leading-relaxed">
            Building agentic AI systems, RAG pipelines, and computer vision tools
            that ship to production.
          </p>
        </div>
        <div>
          <p className="text-primary mb-2">// nav</p>
          <ul className="space-y-1.5">
            {[
              { to: "/about", label: "about" },
              { to: "/experience", label: "experience" },
              { to: "/projects", label: "projects" },
              { to: "/contact", label: "contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors">
                  → {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-primary mb-2">// connect</p>
          <div className="flex gap-3">
            <a href="mailto:abinesh.sagaya@gmail.com" className="h-9 w-9 grid place-items-center rounded border border-border hover:border-primary hover:text-primary transition-colors" aria-label="email"><Mail size={16} /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="h-9 w-9 grid place-items-center rounded border border-border hover:border-primary hover:text-primary transition-colors" aria-label="github"><Github size={16} /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="h-9 w-9 grid place-items-center rounded border border-border hover:border-primary hover:text-primary transition-colors" aria-label="linkedin"><Linkedin size={16} /></a>
          </div>
          <p className="mt-4 text-muted-foreground">+91 73054 93204</p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between font-mono text-xs text-muted-foreground">
          <span>© 2026 Sagaya Abinesh R</span>
          <span className="text-primary/70">echo "thanks for visiting" <span className="animate-blink">_</span></span>
        </div>
      </div>
    </footer>
  );
}
