import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary shadow-glow">
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-primary-foreground">
          <path
            d="M4 6.5C4 5.12 5.12 4 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7A2.5 2.5 0 0 1 17.5 16H10l-4 4v-3.5A2.5 2.5 0 0 1 4 14V6.5Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <span className="font-display text-lg font-semibold tracking-tight">Relay</span>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="/#features" className="hover:text-foreground">Features</a>
          <a href="/#how" className="hover:text-foreground">How it works</a>
          <a href="/#integrations" className="hover:text-foreground">Integrations</a>
          <a href="/#pricing" className="hover:text-foreground">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/dashboard"
            className="hidden rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground sm:inline-flex"
          >
            Live demo
          </Link>
          <Link
            to="/dashboard"
            className="inline-flex items-center rounded-md bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-95"
          >
            Open dashboard
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            The AI concierge for every incoming customer conversation.
          </p>
        </div>
        <FooterCol title="Product" items={["Unified inbox", "AI booking", "Missed-call rescue", "Sentiment analysis"]} />
        <FooterCol title="Integrations" items={["Twilio", "WhatsApp", "Google Calendar", "HubSpot", "Salesforce"]} />
        <FooterCol title="Company" items={["About", "Customers", "Security", "Contact"]} />
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Relay AI, Inc. All rights reserved.
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-sm font-semibold">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i} className="hover:text-foreground cursor-pointer">{i}</li>
        ))}
      </ul>
    </div>
  );
}

export function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 sm:px-6 ${className}`}>
      {children}
    </section>
  );
}
