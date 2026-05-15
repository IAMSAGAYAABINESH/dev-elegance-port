import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader, TerminalCard } from "@/components/portfolio/shared";
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sagaya Abinesh R" },
      { name: "description", content: "Get in touch with Sagaya Abinesh R for senior AI/ML roles, consulting, or collaboration." },
    ],
  }),
  component: ContactPage,
});

const CHANNELS = [
  { icon: Mail, label: "email", value: "abinesh.sagaya@gmail.com", href: "mailto:abinesh.sagaya@gmail.com" },
  { icon: Phone, label: "phone", value: "+91 73054 93204", href: "tel:+917305493204" },
  { icon: Linkedin, label: "linkedin", value: "/in/sagaya-abinesh", href: "https://www.linkedin.com" },
  { icon: Github, label: "github", value: "@sagaya-abinesh", href: "https://github.com" },
];

function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <SectionHeader index="00" title="Contact" subtitle="// $ ssh sagaya@portfolio.dev — open channel" />

      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold mb-4"
          >
            Let's build the next thing.
          </motion.h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Whether you're hiring, exploring an AI initiative, or need a hand
            designing a production ML system — drop a line. I read everything
            and reply within 48 hours.
          </p>

          <div className="space-y-2.5">
            {CHANNELS.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex items-center justify-between gap-4 rounded-lg border border-border bg-card/60 px-5 py-4 hover:border-primary/60 hover:bg-card transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 grid place-items-center rounded-md border border-border bg-secondary/50 group-hover:border-primary/40 group-hover:text-primary transition-colors">
                    <c.icon size={16} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">--{c.label}</p>
                    <p className="font-mono text-sm text-foreground">{c.value}</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-transform" />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <TerminalCard title="send-message.sh">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const subject = encodeURIComponent(`Portfolio: ${fd.get("name")}`);
                const body = encodeURIComponent(`${fd.get("message")}\n\n— ${fd.get("name")} (${fd.get("email")})`);
                window.location.href = `mailto:abinesh.sagaya@gmail.com?subject=${subject}&body=${body}`;
              }}
              className="space-y-4"
            >
              <Field name="name" label="--name" placeholder="ada lovelace" />
              <Field name="email" label="--email" placeholder="ada@example.com" type="email" />
              <Field name="message" label="--message" placeholder="describe your project, role, or idea..." textarea />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 font-mono text-sm text-primary-foreground hover:shadow-[0_0_24px_var(--neon-dim)] transition-all"
              >
                ./send <span className="text-primary-foreground/60">→</span> abinesh.sagaya@gmail.com
              </button>
              <p className="font-mono text-xs text-muted-foreground text-center">
                # opens your default mail client
              </p>
            </form>
          </TerminalCard>
        </motion.div>
      </div>
    </div>
  );
}

function Field({ name, label, placeholder, type = "text", textarea }: { name: string; label: string; placeholder: string; type?: string; textarea?: boolean }) {
  const cn = "w-full bg-terminal/60 border border-border rounded-md px-3 py-2.5 font-mono text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:shadow-[0_0_0_1px_var(--neon-dim)] transition-all";
  return (
    <label className="block">
      <span className="block font-mono text-xs text-primary mb-1.5">{label}</span>
      {textarea ? (
        <textarea name={name} required rows={5} placeholder={placeholder} className={cn} />
      ) : (
        <input name={name} required type={type} placeholder={placeholder} className={cn} />
      )}
    </label>
  );
}
