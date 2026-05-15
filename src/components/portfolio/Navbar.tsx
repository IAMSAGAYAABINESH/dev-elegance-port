import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "home", cmd: "~" },
  { to: "/about", label: "about", cmd: "whoami" },
  { to: "/experience", label: "experience", cmd: "history" },
  { to: "/projects", label: "projects", cmd: "ls ./projects" },
  { to: "/contact", label: "contact", cmd: "mail" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_12px_var(--neon)]" />
          <span className="font-mono text-sm">
            <span className="text-muted-foreground">~/</span>
            <span className="text-primary font-semibold">sagaya</span>
            <span className="text-foreground">.dev</span>
            <span className="text-primary animate-blink ml-0.5">_</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 font-mono text-sm">
          {links.map((l) => {
            const active = path === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-3 py-1.5 rounded-md transition-colors ${
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="text-primary/60">$</span> {l.label}
                {active && (
                  <span className="absolute -bottom-px left-3 right-3 h-px bg-primary shadow-[0_0_8px_var(--neon)]" />
                )}
              </Link>
            );
          })}
          <a
            href="mailto:abinesh.sagaya@gmail.com"
            className="ml-3 inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1.5 text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-[0_0_24px_var(--neon-dim)]"
          >
            ./hire-me
          </a>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-background/95 px-6 py-4 flex flex-col gap-2 font-mono text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="py-2 text-muted-foreground hover:text-primary"
            >
              <span className="text-primary/60">$</span> {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
