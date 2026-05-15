import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 font-mono">
      <div className="max-w-md text-center">
        <p className="text-primary text-sm">~/error</p>
        <h1 className="text-7xl font-bold text-primary text-glow mt-4">404</h1>
        <p className="mt-4 text-muted-foreground">$ cd /requested-page → not found</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-md border border-primary/40 px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          ← return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 font-mono">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-primary">runtime_error()</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-md border border-primary/40 px-4 py-2 text-sm text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          retry()
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sagaya Abinesh R — Senior AI/ML Engineer" },
      { name: "description", content: "Portfolio of Sagaya Abinesh R, Senior AI/ML Engineer specializing in agentic AI, LLMs, computer vision, and production ML systems." },
      { name: "author", content: "Sagaya Abinesh R" },
      { property: "og:title", content: "Sagaya Abinesh R — Senior AI/ML Engineer" },
      { property: "og:description", content: "Portfolio of Sagaya Abinesh R, Senior AI/ML Engineer specializing in agentic AI, LLMs, computer vision, and production ML systems." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sagaya Abinesh R — Senior AI/ML Engineer" },
      { name: "twitter:description", content: "Portfolio of Sagaya Abinesh R, Senior AI/ML Engineer specializing in agentic AI, LLMs, computer vision, and production ML systems." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6b5d8351-cbd9-49f4-93a1-1a7ae0059066/id-preview-4b0e3fd3--efd61382-4a06-4e83-8fff-fe62553013a9.lovable.app-1778850940360.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6b5d8351-cbd9-49f4-93a1-1a7ae0059066/id-preview-4b0e3fd3--efd61382-4a06-4e83-8fff-fe62553013a9.lovable.app-1778850940360.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1"><Outlet /></main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
