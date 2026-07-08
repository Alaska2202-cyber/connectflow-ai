import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Inbox,
  CalendarCheck,
  Sparkles,
  PhoneMissed,
  Users,
  Image as ImageIcon,
  MessageSquare,
  Zap,
  ArrowRight,
  Check,
  Database,
  RefreshCcw,
  Package,
  UserCog,
  Plug,
  ShieldCheck,
  UserRoundCheck,
  FileText,
  ClipboardList,
  BookOpen,
  AlertTriangle,
  GitPullRequestArrow,
  BrainCircuit,
} from "lucide-react";
import { SiteHeader, SiteFooter, Section } from "@/components/SiteChrome";
import { InboxPreview } from "@/components/InboxPreview";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Relay — AI messaging & booking for restaurants and local businesses" },
      {
        name: "description",
        content:
          "Unify SMS, WhatsApp, webchat and missed calls in one AI inbox that books, qualifies leads and updates your CRM.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Trust />
      <Features />
      <HowItWorks />
      <SystemActions />
      <HumanHandoff />
      <KnowledgeAutomation />
      <Integrations />
      <Pricing />
      <CTA />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-hero">
      <Section className="grid gap-14 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
            New · Missed-call rescue in under 5 seconds
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            An AI concierge for <span className="text-gradient">every customer</span> conversation.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Relay unifies SMS, WhatsApp, webchat and email into one inbox — books appointments,
            qualifies leads, reads sentiment, and texts back every missed call. Automatically.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-95"
            >
              Try the live demo <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#how"
              className="inline-flex items-center rounded-md border border-border bg-surface/50 px-5 py-3 text-sm font-medium hover:bg-surface"
            >
              See how it works
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-success" /> No credit card</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-success" /> 14-day free trial</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-success" /> SOC 2 in progress</span>
          </div>
        </div>
        <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
          <InboxPreview />
        </div>
      </Section>
    </div>
  );
}

function Trust() {
  const logos = ["Nobu", "Sweetgreen", "Drybar", "Equinox", "Blueprint Dental", "Casa Roma"];
  return (
    <Section className="py-10">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Trusted by teams that live in their inbox
      </p>
      <div className="mt-6 grid grid-cols-2 gap-6 opacity-70 sm:grid-cols-3 lg:grid-cols-6">
        {logos.map((l) => (
          <div key={l} className="text-center font-display text-lg tracking-tight text-muted-foreground">
            {l}
          </div>
        ))}
      </div>
    </Section>
  );
}

const features = [
  {
    icon: Inbox,
    title: "Unified multichannel inbox",
    body: "SMS, WhatsApp, webchat, IG DM and email — one thread per customer, one team view.",
    span: "lg:col-span-2",
  },
  {
    icon: Sparkles,
    title: "AI booking agent",
    body: "Answers, negotiates times and confirms — 24/7.",
  },
  {
    icon: PhoneMissed,
    title: "Missed-call rescue",
    body: "Auto-texts every missed caller in seconds: 'Hi — how can we help?'",
  },
  {
    icon: MessageSquare,
    title: "Sentiment analysis",
    body: "Every message scored in real time. Escalate the unhappy ones before they churn.",
    span: "lg:col-span-2",
  },
  {
    icon: Users,
    title: "Lead qualification",
    body: "AI intake gathers name, need, budget and urgency before a human ever picks up.",
  },
  {
    icon: CalendarCheck,
    title: "Calendar sync",
    body: "Two-way sync with Google, Outlook and Apple Calendar.",
  },
  {
    icon: ImageIcon,
    title: "Multimedia processing",
    body: "Photos, PDFs and voice notes are transcribed, summarized and routed.",
  },
  {
    icon: Zap,
    title: "CRM automations",
    body: "Update HubSpot, Salesforce or Pipedrive and trigger follow-ups automatically.",
    span: "lg:col-span-2",
  },
];

function Features() {
  return (
    <Section id="features" className="py-24">
      <SectionHeader
        eyebrow="Platform"
        title="Everything you need to answer, book and follow up."
        subtitle="Purpose-built for restaurants, salons, clinics, studios and any local business that lives on inbound messages."
      />
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className={`group relative overflow-hidden rounded-2xl border border-border bg-surface/70 p-6 transition hover:border-primary/50 hover:bg-surface ${f.span ?? ""}`}
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/20" />
            <f.icon className="h-6 w-6 text-primary-glow" />
            <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{f.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Customer reaches out", d: "Text, WhatsApp, webchat, missed call or DM — Relay ingests it all into one thread." },
    { n: "02", t: "AI qualifies & responds", d: "Intake questions, sentiment scoring, multimedia parsing, booking negotiation — instantly." },
    { n: "03", t: "Human takes over gracefully", d: "Warm handoff with full context, CRM record updated, follow-up tasks scheduled." },
  ];
  return (
    <div className="border-y border-border/60 bg-surface/30">
      <Section id="how" className="py-24">
        <SectionHeader eyebrow="How it works" title="From ping to booked in under a minute." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.n} className="relative rounded-2xl border border-border bg-background/50 p-6">
              <div className="font-display text-3xl text-gradient">{s.n}</div>
              <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-muted-foreground md:block" />
              )}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

function SystemActions() {
  const actions = [
    {
      icon: RefreshCcw,
      title: "Process refunds",
      body: "POST to Stripe, Square or your billing API when a customer qualifies — with policy checks, caps and an audit trail.",
      code: `POST /v1/refunds\n{ "charge": "ch_3P…", "amount": 4200 }`,
    },
    {
      icon: Package,
      title: "Check inventory",
      body: "Query Shopify, Lightspeed or a custom warehouse REST endpoint before promising availability to a caller.",
      code: `GET /inventory?sku=OAT-MILK-32\n→ { "on_hand": 14, "eta": "2d" }`,
    },
    {
      icon: UserCog,
      title: "Update accounts",
      body: "Patch customer records, loyalty tiers, contact info or subscription plans directly in your source of truth.",
      code: `PATCH /customers/cus_9k2\n{ "tier": "vip", "notes": "…" }`,
    },
    {
      icon: Database,
      title: "Read from your DB",
      body: "Order history, past visits, allergy notes, open tickets — fetched live so the AI answers with your real data.",
      code: `GET /orders?customer=cus_9k2\n&limit=5&status=open`,
    },
  ];
  return (
    <div className="border-y border-border/60 bg-surface/30">
      <Section id="system-actions" className="py-24">
        <SectionHeader
          eyebrow="System integrations"
          title="Give the AI the keys to your backend — safely."
          subtitle="Connect Relay to any REST API and let it take real action: process refunds, check inventory, update accounts and query your database, all with scoped credentials and full audit logs."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="grid gap-4 sm:grid-cols-2">
            {actions.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-border bg-background/50 p-6 transition hover:border-primary/40"
              >
                <a.icon className="h-5 w-5 text-primary-glow" />
                <h3 className="mt-4 text-base font-semibold">{a.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{a.body}</p>
                <pre className="mt-4 overflow-x-auto rounded-md border border-border/70 bg-background/70 px-3 py-2 text-[11px] leading-relaxed text-muted-foreground">
{a.code}
                </pre>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-background/50 p-6">
            <div className="flex items-center gap-2 text-xs font-medium text-primary-glow">
              <Plug className="h-4 w-4" /> How it works
            </div>
            <h3 className="mt-2 text-xl font-semibold">One connector, any REST endpoint.</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Point Relay at your OpenAPI spec or describe an endpoint. We generate a typed tool
              the AI can call mid-conversation, gated by policies you define.
            </p>

            <ol className="mt-6 space-y-4 text-sm">
              {[
                { t: "Register the endpoint", d: "Paste a URL or upload an OpenAPI schema. Auth via API key, OAuth or signed JWT." },
                { t: "Define guardrails", d: "Refund caps, allow-lists, business-hours, human approval for high-risk actions." },
                { t: "AI calls it when relevant", d: "Every call is logged with request, response, latency and the reasoning trace." },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-[11px] font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-medium">{s.t}</div>
                    <div className="text-muted-foreground">{s.d}</div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 flex items-center gap-2 rounded-lg border border-success/30 bg-success/10 px-3 py-2 text-xs text-success">
              <ShieldCheck className="h-4 w-4" />
              Scoped credentials, PII redaction, and per-action audit log — on by default.
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

function Integrations() {
  const items = [
    "Twilio", "WhatsApp Business", "Google Calendar", "Outlook", "HubSpot",
    "Salesforce", "Pipedrive", "Zapier", "Slack", "Stripe", "OpenTable", "Square",
  ];
  return (
    <Section id="integrations" className="py-24">
      <SectionHeader
        eyebrow="Integrations"
        title="Plugs into the tools your team already uses."
        subtitle="One-click connections to your phone system, calendar, CRM and payments."
      />
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {items.map((i) => (
          <div
            key={i}
            className="rounded-xl border border-border bg-surface/70 px-4 py-4 text-center text-sm font-medium text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
          >
            {i}
          </div>
        ))}
      </div>
    </Section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$79",
      tag: "For solo operators",
      features: ["1 location", "SMS + webchat", "AI booking", "Missed-call rescue", "500 AI msgs / mo"],
    },
    {
      name: "Growth",
      price: "$249",
      tag: "Most popular",
      featured: true,
      features: ["3 locations", "All channels", "Sentiment analysis", "CRM sync", "5,000 AI msgs / mo", "Priority routing"],
    },
    {
      name: "Scale",
      price: "Custom",
      tag: "Multi-location & franchises",
      features: ["Unlimited locations", "Dedicated CSM", "Custom AI voice", "SLA + SSO", "Unlimited msgs"],
    },
  ];
  return (
    <Section id="pricing" className="py-24">
      <SectionHeader eyebrow="Pricing" title="Simple, per-location pricing." />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-2xl border p-6 transition ${
              t.featured
                ? "border-primary/60 bg-surface shadow-glow"
                : "border-border bg-surface/60 hover:border-primary/30"
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{t.name}</h3>
              {t.featured && (
                <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[11px] font-medium text-primary-foreground">
                  Popular
                </span>
              )}
            </div>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="font-display text-4xl font-semibold">{t.price}</span>
              {t.price.startsWith("$") && <span className="text-sm text-muted-foreground">/ mo</span>}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{t.tag}</p>
            <ul className="mt-6 space-y-2.5 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-success" /> {f}
                </li>
              ))}
            </ul>
            <Link
              to="/dashboard"
              className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition ${
                t.featured
                  ? "bg-gradient-primary text-primary-foreground hover:opacity-90"
                  : "border border-border hover:bg-surface"
              }`}
            >
              Start with {t.name}
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <Section className="py-24">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-hero p-10 text-center shadow-elevated sm:p-16">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" aria-hidden />
        <h2 className="relative text-3xl font-semibold tracking-tight sm:text-4xl">
          Stop losing customers to unanswered messages.
        </h2>
        <p className="relative mx-auto mt-3 max-w-xl text-muted-foreground">
          Give every inbound ping the answer, the booking and the follow-up it deserves.
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-95"
          >
            Open the demo dashboard <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#pricing"
            className="inline-flex items-center rounded-md border border-border bg-background/40 px-6 py-3 text-sm font-medium hover:bg-background/70"
          >
            See pricing
          </a>
        </div>
      </div>
    </Section>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">{eyebrow}</div>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
