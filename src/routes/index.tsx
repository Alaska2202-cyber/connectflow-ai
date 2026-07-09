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
  ClipboardCheck,
  Gauge,
  Scale,
  Mic2,
  Palette,
  HeartHandshake,
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
      <QualityAssurance />
      <BrandVoice />
      <ManagerReview />
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

function HumanHandoff() {
  return (
    <Section id="handoff" className="py-24">
      <SectionHeader
        eyebrow="Seamless human handoff"
        title="When the AI steps aside, your team catches the customer mid-sentence."
        subtitle="No 'can you repeat that?' — agents inherit the full conversation, a plain-English summary, and every CRM detail the AI just pulled."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_1fr] lg:items-start">
        {/* Handoff card preview */}
        <div className="rounded-2xl border border-border bg-surface/70 p-5 shadow-elevated">
          <div className="flex items-center justify-between border-b border-border/60 pb-3">
            <div className="flex items-center gap-2">
              <GitPullRequestArrow className="h-4 w-4 text-primary-glow" />
              <span className="text-sm font-semibold">Handoff requested → Priya (Support)</span>
            </div>
            <span className="rounded-full bg-warning/15 px-2 py-0.5 text-[11px] font-medium text-warning">
              Sentiment dropping · 0.31
            </span>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border/60 bg-background/50 p-4">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <FileText className="h-3.5 w-3.5" /> AI summary
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                Marcus (VIP, 4 prior visits) booked a table for 6 tonight at 7pm but wants to
                move to Friday and add a highchair. AI offered Friday 7:15pm — customer went
                quiet, then asked for a manager.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <Tag>Reschedule</Tag>
                <Tag>VIP</Tag>
                <Tag>Escalation</Tag>
              </div>
            </div>

            <div className="rounded-xl border border-border/60 bg-background/50 p-4">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <ClipboardList className="h-3.5 w-3.5" /> CRM context (HubSpot)
              </div>
              <dl className="mt-2 space-y-1.5 text-xs">
                <Row k="Lifetime spend" v="$1,842" />
                <Row k="Last visit" v="Mar 14 · 8pm" />
                <Row k="Allergies" v="Shellfish" />
                <Row k="Loyalty tier" v="Gold" />
                <Row k="Open tickets" v="0" />
              </dl>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-primary/30 bg-primary/10 p-4">
            <div className="mb-2 flex items-center gap-2 text-xs font-medium text-primary-glow">
              <UserRoundCheck className="h-3.5 w-3.5" /> Suggested next step for the agent
            </div>
            <p className="text-sm text-foreground/90">
              Offer Friday 7:15pm with highchair + comp dessert (Marcus is Gold, no recent
              comp). Reply-ready draft loaded in your composer.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button className="inline-flex items-center gap-1.5 rounded-md bg-gradient-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-glow">
              Take over
            </button>
            <button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background/50 px-3 py-1.5 text-xs font-medium hover:bg-background">
              Send draft
            </button>
            <button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background/50 px-3 py-1.5 text-xs font-medium hover:bg-background">
              Return to AI
            </button>
          </div>
        </div>

        {/* Feature bullets */}
        <div className="space-y-4">
          {[
            {
              icon: FileText,
              t: "Full conversation summary",
              d: "Every handoff arrives with a plain-English recap, sentiment trend, entities extracted, and the exact reason the AI escalated.",
            },
            {
              icon: ClipboardList,
              t: "CRM context, pre-loaded",
              d: "Lifetime value, past visits, open tickets, notes and preferences pulled from HubSpot, Salesforce or Pipedrive — before the agent clicks reply.",
            },
            {
              icon: UserRoundCheck,
              t: "Warm transfer, not a cold drop",
              d: "Customer sees a brief 'connecting you with Priya' message. The agent inherits a suggested reply and can send in one click.",
            },
            {
              icon: GitPullRequestArrow,
              t: "Return to AI, anytime",
              d: "Agents can hand the thread back for booking confirmations, follow-ups or after-hours — with a note the AI reads in.",
            },
          ].map((f) => (
            <div key={f.t} className="flex gap-4 rounded-2xl border border-border bg-surface/60 p-5">
              <f.icon className="h-5 w-5 shrink-0 text-primary-glow" />
              <div>
                <div className="text-sm font-semibold">{f.t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{f.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-3">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className="font-medium text-foreground/90">{v}</dd>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md bg-surface-2 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
      {children}
    </span>
  );
}

function KnowledgeAutomation() {
  const gaps = [
    {
      q: "Do you have gluten-free pasta options?",
      count: 12,
      confidence: 0.24,
      status: "Needs answer",
      channel: "SMS · Webchat",
    },
    {
      q: "What's your policy on service dogs on the patio?",
      count: 5,
      confidence: 0.41,
      status: "Draft ready",
      channel: "WhatsApp",
    },
    {
      q: "Can I reschedule a birthday package within 24h?",
      count: 8,
      confidence: 0.36,
      status: "Assigned · Priya",
      channel: "SMS",
    },
  ];
  return (
    <div className="border-y border-border/60 bg-surface/30">
      <Section id="knowledge" className="py-24">
        <SectionHeader
          eyebrow="Knowledge automation"
          title="Your AI tells you what it doesn't know."
          subtitle="Relay clusters every low-confidence answer and unanswered question, then routes the gap to the right teammate so your knowledge base gets sharper every week."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            {[
              {
                icon: BrainCircuit,
                t: "Auto-detect low confidence",
                d: "Every AI reply is scored. When confidence drops or the customer rephrases, the exchange is captured as a candidate knowledge gap.",
              },
              {
                icon: AlertTriangle,
                t: "Cluster & prioritise",
                d: "Similar questions are grouped so you see 'asked 12 times this week' instead of 12 duplicate tickets.",
              },
              {
                icon: BookOpen,
                t: "Human writes once, AI learns forever",
                d: "Your team publishes an answer to the knowledge base. Relay picks it up automatically — no retraining, no engineering.",
              },
            ].map((f) => (
              <div key={f.t} className="flex gap-4 rounded-2xl border border-border bg-background/40 p-5">
                <f.icon className="h-5 w-5 shrink-0 text-primary-glow" />
                <div>
                  <div className="text-sm font-semibold">{f.t}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{f.d}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-background/50 shadow-elevated">
            <div className="flex items-center justify-between border-b border-border/60 px-5 py-3">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <AlertTriangle className="h-4 w-4 text-warning" />
                Knowledge gaps · this week
              </div>
              <span className="text-[11px] text-muted-foreground">25 detected · 3 highlighted</span>
            </div>
            <ul className="divide-y divide-border/60">
              {gaps.map((g) => (
                <li key={g.q} className="px-5 py-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="truncate text-sm font-medium">"{g.q}"</div>
                      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
                        <span>Asked <strong className="text-foreground/80">{g.count}×</strong></span>
                        <span>· AI confidence {(g.confidence * 100).toFixed(0)}%</span>
                        <span>· {g.channel}</span>
                      </div>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${
                        g.status === "Needs answer"
                          ? "bg-destructive/15 text-destructive"
                          : g.status === "Draft ready"
                          ? "bg-warning/15 text-warning"
                          : "bg-success/15 text-success"
                      }`}
                    >
                      {g.status}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface/60 px-2.5 py-1 text-[11px] font-medium hover:bg-surface">
                      <BookOpen className="h-3 w-3" /> Add to knowledge base
                    </button>
                    <button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface/60 px-2.5 py-1 text-[11px] font-medium hover:bg-surface">
                      Assign
                    </button>
                    <button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface/60 px-2.5 py-1 text-[11px] font-medium hover:bg-surface">
                      View 12 threads
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t border-border/60 px-5 py-3 text-[11px] text-muted-foreground">
              <span>Auto-synced to Notion, Guru & Zendesk Help Center</span>
              <span className="inline-flex items-center gap-1.5 text-success">
                <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" /> Learning live
              </span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

function QualityAssurance() {
  const rubric = [
    { label: "Policy compliance", score: 98, tone: "success" as const, note: "Refund cap respected · disclosures sent" },
    { label: "Resolution", score: 92, tone: "success" as const, note: "Customer confirmed booking rescheduled" },
    { label: "Tone & empathy", score: 84, tone: "success" as const, note: "Warm, acknowledged frustration early" },
    { label: "Brand voice", score: 71, tone: "warning" as const, note: "Used 'no worries' — off-brand for Nobu" },
    { label: "First-response time", score: 100, tone: "success" as const, note: "3s · within SLA" },
  ];
  const flagged = [
    { id: "#4821", who: "Priya P. · webchat", why: "Sentiment dropped mid-thread", score: 62 },
    { id: "#4790", who: "Marco L. · WhatsApp", why: "Refund issued above policy soft-cap", score: 74 },
    { id: "#4772", who: "Unknown · SMS", why: "Missed the birthday cue Sarah mentioned", score: 79 },
  ];
  return (
    <div className="border-y border-border/60 bg-surface/30">
      <Section id="qa" className="py-24">
        <SectionHeader
          eyebrow="Automated QA"
          title="Every conversation, graded. No sampling, no spreadsheets."
          subtitle="The AI audits its own tickets — and your agents' — for policy compliance, resolution and satisfaction. Managers get a ranked queue of what to review instead of a random 2%."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          {/* scorecard */}
          <div className="overflow-hidden rounded-2xl border border-border bg-background/50 shadow-elevated">
            <div className="flex items-center justify-between border-b border-border/70 bg-surface-2/50 px-5 py-3">
              <div className="flex items-center gap-2 text-sm">
                <ClipboardCheck className="h-4 w-4 text-primary-glow" />
                <span className="font-medium">Ticket #4821 · scorecard</span>
                <span className="text-xs text-muted-foreground">· auto-graded 2s after close</span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-warning/15 px-2 py-0.5 text-[11px] font-medium text-warning">
                <Gauge className="h-3 w-3" /> 89 / 100
              </span>
            </div>
            <div className="divide-y divide-border/60">
              {rubric.map((r) => (
                <div key={r.label} className="grid grid-cols-[160px_1fr_auto] items-center gap-4 px-5 py-3">
                  <div className="text-sm font-medium">{r.label}</div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
                    <div
                      className={`h-full rounded-full ${r.tone === "success" ? "bg-success" : "bg-warning"}`}
                      style={{ width: `${r.score}%` }}
                    />
                  </div>
                  <div className="text-right text-xs tabular-nums text-muted-foreground">{r.score}</div>
                  <div className="col-span-3 -mt-1 text-xs text-muted-foreground">{r.note}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-border/70 bg-surface-2/40 px-5 py-3">
              <div className="text-xs text-muted-foreground">
                Coaching note drafted for agent · CSAT predicted 4.6 / 5
              </div>
              <div className="flex gap-2">
                <button className="rounded-md border border-border bg-background/60 px-2.5 py-1 text-xs hover:bg-background">Send to agent</button>
                <button className="rounded-md bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground hover:opacity-90">Approve</button>
              </div>
            </div>
          </div>

          {/* flagged queue */}
          <div className="rounded-2xl border border-border bg-background/50 p-6">
            <div className="flex items-center gap-2 text-xs font-medium text-primary-glow">
              <Scale className="h-4 w-4" /> Manager review queue
            </div>
            <h3 className="mt-2 text-xl font-semibold">Only what needs a human eye.</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tickets are ranked by risk, not recency — policy exceptions, sentiment drops and low-confidence answers bubble up first.
            </p>
            <ul className="mt-5 space-y-3">
              {flagged.map((f) => (
                <li key={f.id} className="rounded-xl border border-border bg-surface/60 p-3">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">{f.id}</div>
                    <span className="rounded-full bg-warning/15 px-2 py-0.5 text-[11px] font-medium text-warning">
                      {f.score} / 100
                    </span>
                  </div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{f.who}</div>
                  <div className="mt-1.5 text-xs text-foreground/80">{f.why}</div>
                </li>
              ))}
            </ul>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
              <Stat label="Tickets today" value="1,284" />
              <Stat label="Auto-graded" value="100%" />
              <Stat label="Flagged" value="3.2%" />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border/70 bg-surface/50 px-2 py-2">
      <div className="font-display text-lg font-semibold">{value}</div>
      <div className="text-[11px] uppercase tracking-wide text-muted-foreground">{label}</div>
    </div>
  );
}

function BrandVoice() {
  return (
    <Section id="voice" className="py-24">
      <SectionHeader
        eyebrow="Voice & de-escalation"
        title="Warm under pressure. On-brand every time."
        subtitle="Upload your style guide once — Relay mirrors your tone, softens hard moments, and keeps forbidden phrases out of the thread."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* de-escalation */}
        <div className="rounded-2xl border border-border bg-background/50 p-6">
          <div className="flex items-center gap-2 text-xs font-medium text-primary-glow">
            <HeartHandshake className="h-4 w-4" /> Difficult moment · handled
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-surface-2 px-3.5 py-2 text-sm">
                This is the THIRD time my order is late. I want a full refund and I'm done.
              </div>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
              <span className="inline-flex items-center gap-1 rounded bg-destructive/15 px-1.5 py-0.5 text-destructive">
                Sentiment 0.14 · frustrated
              </span>
              <span className="inline-flex items-center gap-1 rounded bg-warning/15 px-1.5 py-0.5 text-warning">
                De-escalation mode on
              </span>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-gradient-primary px-3.5 py-2 text-sm text-primary-foreground shadow-glow">
                Marco, that's on us — three times is three too many. I've refunded tonight's order in full and comped your next delivery. Want me to have the manager, Elena, call you personally in the next 10 minutes?
              </div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[11px]">
            <Chip label="Acknowledged" tone="success" />
            <Chip label="Owned the miss" tone="success" />
            <Chip label="Offered human" tone="success" />
          </div>
        </div>

        {/* brand voice */}
        <div className="rounded-2xl border border-border bg-background/50 p-6">
          <div className="flex items-center gap-2 text-xs font-medium text-primary-glow">
            <Palette className="h-4 w-4" /> Brand voice · Nobu
          </div>
          <h3 className="mt-2 text-lg font-semibold">One style guide, every reply.</h3>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg border border-success/30 bg-success/10 p-3">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-success">On-brand</div>
              <ul className="mt-1.5 space-y-1 text-foreground/90">
                <li>"Delighted to reserve that for you."</li>
                <li>"Our pleasure — see you Saturday."</li>
                <li>"We'd be honored to host your party."</li>
              </ul>
            </div>
            <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-3">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-destructive">Blocked</div>
              <ul className="mt-1.5 space-y-1 text-muted-foreground line-through">
                <li>"No worries!"</li>
                <li>"lol sure thing 👍"</li>
                <li>"Cheapest option is…"</li>
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-border bg-surface/60 p-4">
            <div className="flex items-center gap-2 text-xs font-medium">
              <Mic2 className="h-3.5 w-3.5 text-primary-glow" /> Voice profile
            </div>
            <div className="mt-3 space-y-3">
              {[
                { label: "Formality", value: 78 },
                { label: "Warmth", value: 88 },
                { label: "Concision", value: 64 },
                { label: "Playfulness", value: 22 },
              ].map((v) => (
                <div key={v.label} className="grid grid-cols-[110px_1fr_auto] items-center gap-3">
                  <div className="text-xs text-muted-foreground">{v.label}</div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
                    <div className="h-full rounded-full bg-gradient-primary" style={{ width: `${v.value}%` }} />
                  </div>
                  <div className="text-[11px] tabular-nums text-muted-foreground">{v.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-success" />
            98.6% brand-voice adherence across 12,481 replies this week.
          </div>
        </div>
      </div>
    </Section>
  );
}

function Chip({ label, tone }: { label: string; tone: "success" | "warning" | "destructive" }) {
  const map = {
    success: "bg-success/15 text-success",
    warning: "bg-warning/15 text-warning",
    destructive: "bg-destructive/15 text-destructive",
  };
  return <span className={`rounded-full px-2 py-1 font-medium ${map[tone]}`}>{label}</span>;
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
