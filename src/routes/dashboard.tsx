import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Inbox, CalendarCheck, PhoneMissed, Sparkles, Send, Search, Filter,
  Star, Phone, MessageSquare, Mail, AtSign, Paperclip, Smile,
  Users, TrendingUp, Clock, CheckCircle2, ChevronRight,
  ShieldCheck, Mic2, HeartHandshake, PlayCircle, ClipboardList,
  FileDown, Loader2, Plus,
} from "lucide-react";
import { Logo } from "@/components/SiteChrome";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Demo dashboard — Relay" },
      { name: "description", content: "Live-feel demo of the Relay AI inbox, bookings and missed-call rescue." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Dashboard,
});

type Tab = "inbox" | "calendar" | "missed" | "quality";

function Dashboard() {
  const [tab, setTab] = useState<Tab>("inbox");
  return (
    <div className="grid h-screen grid-cols-[240px_minmax(0,1fr)] bg-background text-foreground">
      <SideRail tab={tab} onChange={setTab} />
      <div className="flex min-w-0 flex-col">
        <TopBar />
        <div className="min-h-0 flex-1 overflow-hidden">
          {tab === "inbox" && <InboxView />}
          {tab === "calendar" && <CalendarView />}
          {tab === "missed" && <MissedView />}
          {tab === "quality" && <QualityView />}
        </div>
      </div>
    </div>
  );
}

function SideRail({ tab, onChange }: { tab: Tab; onChange: (t: Tab) => void }) {
  const items: { id: Tab; icon: typeof Inbox; label: string; count?: number }[] = [
    { id: "inbox", icon: Inbox, label: "Unified inbox", count: 12 },
    { id: "calendar", icon: CalendarCheck, label: "Bookings", count: 8 },
    { id: "missed", icon: PhoneMissed, label: "Missed calls", count: 3 },
    { id: "quality", icon: ShieldCheck, label: "Quality & QA", count: 4 },
  ];
  return (
    <aside className="flex flex-col border-r border-border bg-sidebar">
      <div className="flex h-16 items-center border-b border-border px-5">
        <Logo />
      </div>
      <nav className="flex-1 space-y-1 p-3">
        {items.map((it) => {
          const active = tab === it.id;
          return (
            <button
              key={it.id}
              onClick={() => onChange(it.id)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                active
                  ? "bg-primary/20 text-foreground ring-1 ring-primary/40"
                  : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
              }`}
            >
              <it.icon className="h-4 w-4" />
              <span className="flex-1 text-left">{it.label}</span>
              {it.count != null && (
                <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${
                  active ? "bg-primary/30 text-primary-foreground" : "bg-sidebar-accent text-muted-foreground"
                }`}>
                  {it.count}
                </span>
              )}
            </button>
          );
        })}
        <div className="mt-6 px-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Channels
        </div>
        <div className="space-y-1 px-1">
          {[
            { i: MessageSquare, l: "SMS" },
            { i: Phone, l: "WhatsApp" },
            { i: Mail, l: "Email" },
            { i: AtSign, l: "Instagram" },
          ].map((c) => (
            <div key={c.l} className="flex items-center gap-3 rounded-md px-3 py-2 text-xs text-muted-foreground hover:bg-sidebar-accent hover:text-foreground">
              <c.i className="h-3.5 w-3.5" />
              {c.l}
            </div>
          ))}
        </div>
      </nav>
      <div className="border-t border-border p-3">
        <Link to="/" className="flex items-center gap-2 rounded-md px-2 py-2 text-xs text-muted-foreground hover:text-foreground">
          ← Back to site
        </Link>
      </div>
    </aside>
  );
}

function TopBar() {
  return (
    <div className="flex h-16 items-center gap-4 border-b border-border bg-background/80 px-6 backdrop-blur">
      <div className="flex flex-1 items-center gap-2 rounded-lg border border-border bg-surface/60 px-3 py-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input
          placeholder="Search conversations, customers, bookings..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
        <kbd className="hidden rounded bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground sm:inline">⌘K</kbd>
      </div>
      <button className="hidden items-center gap-1.5 rounded-md border border-border bg-surface/60 px-3 py-2 text-xs text-muted-foreground hover:text-foreground sm:inline-flex">
        <Filter className="h-3.5 w-3.5" /> Filter
      </button>
      <div className="hidden h-8 w-8 items-center justify-center rounded-full bg-gradient-primary text-xs font-semibold text-primary-foreground sm:flex">
        AM
      </div>
    </div>
  );
}

/* ---------- Inbox ---------- */

const conversations = [
  { id: "1", name: "Sarah Chen", preview: "Table for 4 tonight at 7:30 — mom's birthday 🎂", time: "2m", channel: "SMS", unread: true, sentiment: 0.86, tag: "Booking" },
  { id: "2", name: "Marco Rossi", preview: "Need a catering quote for 30 people next Friday", time: "8m", channel: "WhatsApp", sentiment: 0.62, tag: "Lead" },
  { id: "3", name: "Unknown +1 415-555-9021", preview: "Missed call — auto-reply sent 4s ago", time: "12m", channel: "Call", sentiment: 0.5, tag: "Rescue", unread: true },
  { id: "4", name: "Priya Patel", preview: "I need to cancel my 3pm blowout, so frustrated", time: "20m", channel: "Web", sentiment: 0.18, tag: "Escalate", unread: true },
  { id: "5", name: "Jordan Rivera", preview: "Following up on the quote you sent Monday", time: "1h", channel: "Email", sentiment: 0.55, tag: "Follow-up" },
  { id: "6", name: "Casa Roma HQ", preview: "Weekly summary: 128 msgs, 47 bookings", time: "3h", channel: "Email", sentiment: 0.7 },
  { id: "7", name: "Devon Kim", preview: "Do you take reservations for New Year's Eve?", time: "Yesterday", channel: "SMS", sentiment: 0.66 },
];

function InboxView() {
  const [selected, setSelected] = useState(conversations[0]);
  return (
    <div className="grid h-full grid-cols-[320px_minmax(0,1fr)_320px]">
      {/* thread list */}
      <div className="flex flex-col overflow-hidden border-r border-border">
        <div className="border-b border-border px-4 py-3">
          <div className="text-sm font-semibold">All conversations</div>
          <div className="mt-0.5 text-xs text-muted-foreground">12 unread · 4 need attention</div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map((c) => {
            const active = selected.id === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelected(c)}
                className={`flex w-full flex-col gap-1 border-b border-border px-4 py-3 text-left transition ${
                  active ? "bg-primary/10" : "hover:bg-surface/50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 shrink-0 rounded-full ${c.unread ? "bg-primary-glow" : "bg-transparent"}`} />
                  <span className="min-w-0 flex-1 truncate text-sm font-medium">{c.name}</span>
                  <span className="text-[10px] text-muted-foreground">{c.time}</span>
                </div>
                <div className="truncate text-xs text-muted-foreground">{c.preview}</div>
                <div className="mt-1 flex items-center gap-1.5">
                  <ChannelBadge channel={c.channel} />
                  <SentimentBadge score={c.sentiment} />
                  {c.tag && <TagBadge tag={c.tag} />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* thread */}
      <ThreadPane c={selected} />

      {/* customer / CRM */}
      <CustomerPane c={selected} />
    </div>
  );
}

function ThreadPane({ c }: { c: typeof conversations[number] }) {
  return (
    <div className="flex min-w-0 flex-col">
      <div className="flex items-center justify-between border-b border-border px-6 py-4">
        <div className="min-w-0">
          <div className="truncate text-base font-semibold">{c.name}</div>
          <div className="text-xs text-muted-foreground">{c.channel} · Response SLA 30s · AI handling</div>
        </div>
        <div className="flex items-center gap-2">
          <SentimentBadge score={c.sentiment} large />
          <button className="rounded-md border border-border px-3 py-1.5 text-xs hover:bg-surface">Assign</button>
          <button className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90">
            Take over
          </button>
        </div>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto p-6">
        <DayDivider label="Today" />
        <Msg side="in" name={c.name} time="7:14 PM">{c.preview}</Msg>
        {c.tag === "Rescue" && (
          <SystemLine icon={<PhoneMissed className="h-3 w-3" />} text="Missed call detected · auto-reply queued" />
        )}
        <Msg side="out" name="Relay AI" time="7:14 PM" ai>
          Hi{c.name.startsWith("Unknown") ? "" : ` ${c.name.split(" ")[0]}`} — thanks for reaching out!
          I'm Relay, the AI concierge. To help you fastest, mind if I ask 2 quick questions?
        </Msg>
        <Msg side="out" name="Relay AI" time="7:14 PM" ai>
          1) What's the best way to help you today? 2) When would you like to come in?
        </Msg>
        {c.tag === "Escalate" && (
          <SystemLine
            icon={<TrendingUp className="h-3 w-3 rotate-180" />}
            text="Sentiment dropped to 0.18 — flagged for human takeover"
            variant="warn"
          />
        )}

        <AISuggestion />
      </div>

      <Composer />
    </div>
  );
}

function AISuggestion() {
  return (
    <div className="rounded-xl border border-primary/40 bg-primary/10 p-4">
      <div className="mb-2 flex items-center gap-2 text-xs font-medium">
        <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
        AI suggested reply
        <span className="ml-auto flex gap-1">
          <span className="typing-dot h-1.5 w-1.5 rounded-full bg-primary-glow" />
          <span className="typing-dot h-1.5 w-1.5 rounded-full bg-primary-glow" style={{ animationDelay: "0.15s" }} />
          <span className="typing-dot h-1.5 w-1.5 rounded-full bg-primary-glow" style={{ animationDelay: "0.3s" }} />
        </span>
      </div>
      <p className="text-sm">
        "Happy to help! I've got 7:30 and 7:45 open tonight for a party of 4. Which works better?
        I'll go ahead and note the birthday so we can bring out a little something 🎂"
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button className="rounded-md border border-border bg-background/40 px-3 py-1.5 text-xs hover:bg-background/70">
          Regenerate
        </button>
        <button className="rounded-md border border-border bg-background/40 px-3 py-1.5 text-xs hover:bg-background/70">
          Edit
        </button>
        <button className="ml-auto inline-flex items-center gap-1.5 rounded-md bg-gradient-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-glow hover:opacity-90">
          <Send className="h-3.5 w-3.5" /> Approve & send
        </button>
      </div>
    </div>
  );
}

function Composer() {
  return (
    <div className="border-t border-border p-4">
      <div className="rounded-xl border border-border bg-surface/70 p-3">
        <textarea
          rows={2}
          placeholder="Write a reply, or let Relay handle it..."
          className="w-full resize-none bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
        <div className="mt-2 flex items-center gap-2">
          <button className="rounded-md p-1.5 text-muted-foreground hover:bg-background/60 hover:text-foreground">
            <Paperclip className="h-4 w-4" />
          </button>
          <button className="rounded-md p-1.5 text-muted-foreground hover:bg-background/60 hover:text-foreground">
            <Smile className="h-4 w-4" />
          </button>
          <button className="ml-auto inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90">
            <Send className="h-3.5 w-3.5" /> Send
          </button>
        </div>
      </div>
    </div>
  );
}

function CustomerPane({ c }: { c: typeof conversations[number] }) {
  return (
    <aside className="flex min-w-0 flex-col overflow-y-auto border-l border-border bg-surface/40">
      <div className="border-b border-border p-5">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-primary font-semibold text-primary-foreground">
            {c.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
          </div>
          <div className="min-w-0">
            <div className="truncate font-semibold">{c.name}</div>
            <div className="text-xs text-muted-foreground">Customer · Casa Roma SF</div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <Stat label="Visits" value="7" />
          <Stat label="LTV" value="$1.2k" />
          <Stat label="Sentiment" value={c.sentiment.toFixed(2)} />
        </div>
      </div>

      <PaneSection title="AI intake summary" icon={<Sparkles className="h-3.5 w-3.5" />}>
        <ul className="space-y-1.5 text-xs text-muted-foreground">
          <li>• Party size: <span className="text-foreground">4</span></li>
          <li>• Occasion: <span className="text-foreground">Birthday (mom)</span></li>
          <li>• Preferred time: <span className="text-foreground">7:30 PM tonight</span></li>
          <li>• Special: <span className="text-foreground">Patio seating requested</span></li>
        </ul>
      </PaneSection>

      <PaneSection title="CRM · HubSpot" icon={<Users className="h-3.5 w-3.5" />}>
        <div className="space-y-2 text-xs">
          <Row k="Stage" v="Returning · VIP" />
          <Row k="Owner" v="Alex Morgan" />
          <Row k="Last touch" v="12 days ago" />
          <button className="mt-2 flex w-full items-center justify-between rounded-md border border-border bg-background/40 px-3 py-2 text-xs hover:bg-background/70">
            Sync updates to HubSpot <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </PaneSection>

      <PaneSection title="Auto follow-ups" icon={<Clock className="h-3.5 w-3.5" />}>
        <ul className="space-y-2 text-xs">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-success" />
            <span>Send confirmation SMS at 6:30 PM</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-success" />
            <span>Notify host of birthday note</span>
          </li>
          <li className="flex items-start gap-2 text-muted-foreground">
            <div className="mt-0.5 h-3.5 w-3.5 rounded-full border border-border" />
            <span>Post-visit review request (T+1 day)</span>
          </li>
        </ul>
      </PaneSection>

      <PaneSection title="Tags" icon={<Star className="h-3.5 w-3.5" />}>
        <div className="flex flex-wrap gap-1.5">
          {["VIP", "Patio-lover", "Wine club", "Anniversary Aug"].map((t) => (
            <span key={t} className="rounded-full bg-surface-2 px-2 py-0.5 text-[11px] text-foreground">
              {t}
            </span>
          ))}
        </div>
      </PaneSection>
    </aside>
  );
}

/* ---------- Calendar ---------- */

function CalendarView() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const bookings = [
    { d: 0, t: "12:30", who: "Chen, party 2", tag: "Lunch" },
    { d: 0, t: "19:45", who: "Sarah Chen · 4", tag: "Birthday" },
    { d: 1, t: "18:00", who: "Marco Rossi · 30", tag: "Catering" },
    { d: 2, t: "20:15", who: "Devon Kim · 2", tag: "NYE inquiry" },
    { d: 4, t: "19:00", who: "Rivera party · 6", tag: "Follow-up" },
    { d: 5, t: "13:30", who: "Patel · 3", tag: "Rescheduled" },
    { d: 6, t: "18:30", who: "Team dinner · 12", tag: "Private" },
  ];
  return (
    <div className="h-full overflow-y-auto p-6">
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Bookings this week</h1>
          <p className="text-sm text-muted-foreground">Synced with Google Calendar · 47 confirmed · 8 pending</p>
        </div>
        <button className="rounded-md bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90">
          + New booking
        </button>
      </header>
      <div className="grid grid-cols-7 gap-3">
        {days.map((d, i) => (
          <div key={d} className="rounded-xl border border-border bg-surface/60 p-3 min-h-[300px]">
            <div className="mb-2 flex items-center justify-between">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{d}</div>
              <div className="text-lg font-display">{10 + i}</div>
            </div>
            <div className="space-y-2">
              {bookings.filter((b) => b.d === i).map((b, idx) => (
                <div key={idx} className="rounded-lg border border-primary/30 bg-primary/10 p-2">
                  <div className="text-xs font-semibold">{b.t}</div>
                  <div className="mt-0.5 text-xs">{b.who}</div>
                  <div className="mt-1 inline-block rounded bg-background/40 px-1.5 py-0.5 text-[10px] text-muted-foreground">
                    {b.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Missed calls ---------- */

function MissedView() {
  const calls = [
    { num: "+1 415-555-9021", time: "12 min ago", city: "San Francisco, CA", status: "AI replied in 4s", reply: "Hi — sorry we missed you! How can we help today?", outcome: "Awaiting reply", tone: "neutral" },
    { num: "+1 628-555-1140", time: "38 min ago", city: "Oakland, CA", status: "AI replied in 3s", reply: "Hey! Missed your call — booking, quote or something else?", outcome: "Booked · 8pm Fri", tone: "success" },
    { num: "+1 415-555-3388", time: "1h ago", city: "San Francisco, CA", status: "AI replied in 5s", reply: "Sorry we missed you — reply with what you need.", outcome: "Lead qualified · handed to Alex", tone: "success" },
    { num: "+1 510-555-7712", time: "2h ago", city: "Berkeley, CA", status: "AI replied in 4s", reply: "Hi there — how can we help?", outcome: "No response · retry in 24h", tone: "warn" },
  ];
  return (
    <div className="h-full overflow-y-auto p-6">
      <header className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Missed-call rescue</h1>
          <p className="text-sm text-muted-foreground">Every missed call is auto-texted within 5 seconds.</p>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center">
          <Stat label="Today" value="14" />
          <Stat label="Recovered" value="9" />
          <Stat label="Avg reply" value="4.1s" />
        </div>
      </header>
      <div className="overflow-hidden rounded-xl border border-border bg-surface/60">
        <table className="w-full text-sm">
          <thead className="bg-surface-2/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="p-3">Caller</th>
              <th className="p-3">Auto-reply</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Outcome</th>
            </tr>
          </thead>
          <tbody>
            {calls.map((c) => (
              <tr key={c.num} className="border-t border-border">
                <td className="p-3">
                  <div className="font-medium">{c.num}</div>
                  <div className="text-xs text-muted-foreground">{c.city} · {c.time}</div>
                </td>
                <td className="max-w-md p-3 text-muted-foreground">{c.reply}</td>
                <td className="p-3 text-xs">{c.status}</td>
                <td className="p-3 text-right">
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                    c.tone === "success" ? "bg-success/15 text-success" :
                    c.tone === "warn" ? "bg-warning/15 text-warning" :
                    "bg-muted text-muted-foreground"
                  }`}>
                    {c.outcome}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------- Quality & QA ---------- */

type ReviewItem = {
  id: string;
  agent: string;
  ticket: string;
  reason: string;
  brand: number;
  qa: number;
  status: "Pending" | "Approved" | "Coaching sent";
};

const seedReviews: ReviewItem[] = [
  { id: "R-4821", agent: "Relay AI · Marco R.", ticket: "Refund · $184", reason: "Tone dipped mid-call", brand: 71, qa: 84, status: "Pending" },
  { id: "R-4790", agent: "Ayesha K.", ticket: "Complaint · noise", reason: "Missed empathy step", brand: 66, qa: 74, status: "Pending" },
  { id: "R-4772", agent: "Relay AI · Loft Events", ticket: "Reschedule", reason: "Policy citation missing", brand: 79, qa: 82, status: "Pending" },
];

const brandRules = [
  { rule: "Warm, first-name greeting within 8s", on: true },
  { rule: "No filler slang ('no worries', 'totally', 'yeah')", on: true },
  { rule: "Cite policy by name on refunds & reschedules", on: true },
  { rule: "Close with next step + ETA", on: true },
  { rule: "Match Nobu-style cadence (short, precise, warm)", on: false },
];

const escalationSteps = [
  { k: "Detect", d: "Sentiment < 0.35 for 2 turns OR keyword: 'furious', 'lawyer', 'refund now'" },
  { k: "Soften", d: "Switch to empathy script · slow cadence · acknowledge feeling before facts" },
  { k: "Guardrail", d: "Suppress upsell · disable auto-close · require human sign-off on offers > $50" },
  { k: "Handoff", d: "Warm transfer to on-call manager with summary + CRM + suggested reply" },
];

const sampleCalls = [
  { id: "SC-01", type: "Booking confirmation", dur: "1:42", score: 96 },
  { id: "SC-02", type: "Refund request", dur: "4:18", score: 78 },
  { id: "SC-03", type: "Noise complaint", dur: "6:02", score: 71 },
  { id: "SC-04", type: "Loyalty upsell", dur: "2:51", score: 92 },
  { id: "SC-05", type: "Allergy question", dur: "1:12", score: 99 },
  { id: "SC-06", type: "Missed-call rescue", dur: "0:48", score: 88 },
];

function QualityView() {
  const [reviews, setReviews] = useState<ReviewItem[]>(seedReviews);
  const [rules, setRules] = useState(brandRules);
  const [escalationOn, setEscalationOn] = useState(true);
  const [qaRunning, setQaRunning] = useState(false);
  const [qaReport, setQaReport] = useState<null | { batch: string; ran: number; avg: number; pass: number; flagged: number; at: string }>(null);

  const addReview = () => {
    const n = reviews.length + 1;
    setReviews([
      {
        id: `R-49${10 + n}`,
        agent: "Relay AI · new",
        ticket: "Escalation · sentiment 0.22",
        reason: "Auto-queued from live thread",
        brand: 68 + Math.floor(Math.random() * 12),
        qa: 70 + Math.floor(Math.random() * 15),
        status: "Pending",
      },
      ...reviews,
    ]);
  };
  const setStatus = (id: string, status: ReviewItem["status"]) =>
    setReviews((rs) => rs.map((r) => (r.id === id ? { ...r, status } : r)));

  const runQa = () => {
    setQaRunning(true);
    setQaReport(null);
    setTimeout(() => {
      const scores = sampleCalls.map((c) => c.score);
      const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
      const pass = scores.filter((s) => s >= 80).length;
      setQaReport({
        batch: `QA-${new Date().toISOString().slice(0, 10)}-${Math.floor(Math.random() * 900 + 100)}`,
        ran: sampleCalls.length,
        avg,
        pass,
        flagged: sampleCalls.length - pass,
        at: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      });
      setQaRunning(false);
    }, 1400);
  };

  return (
    <div className="h-full overflow-y-auto p-6">
      <header className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Quality & QA control room</h1>
          <p className="text-sm text-muted-foreground">Enforce voice, de-escalate hot threads, and audit sample calls.</p>
        </div>
        <div className="grid grid-cols-4 gap-3 text-center">
          <Stat label="Voice adherence" value="98.6%" />
          <Stat label="Auto-graded" value="1,284" />
          <Stat label="Flagged" value={`${reviews.filter((r) => r.status === "Pending").length}`} />
          <Stat label="De-escalated" value="17" />
        </div>
      </header>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Manager review queue */}
        <QCard
          icon={<ClipboardList className="h-4 w-4" />}
          title="Manager review queue"
          desc="Human sign-off on flagged AI replies and calls."
          action={
            <button onClick={addReview} className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90">
              <Plus className="h-3.5 w-3.5" /> Create manager review
            </button>
          }
        >
          <div className="space-y-2">
            {reviews.map((r) => (
              <div key={r.id} className="rounded-lg border border-border bg-background/40 p-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-sm font-medium">{r.id} · {r.ticket}</div>
                    <div className="text-xs text-muted-foreground">{r.agent} · {r.reason}</div>
                  </div>
                  <StatusPill status={r.status} />
                </div>
                <div className="mt-2 flex items-center gap-3 text-[11px] text-muted-foreground">
                  <Meter label="Brand" val={r.brand} />
                  <Meter label="QA" val={r.qa} />
                  {r.status === "Pending" && (
                    <div className="ml-auto flex gap-1.5">
                      <button onClick={() => setStatus(r.id, "Approved")} className="rounded-md bg-success/20 px-2 py-1 text-[11px] font-medium text-success hover:bg-success/30">Approve</button>
                      <button onClick={() => setStatus(r.id, "Coaching sent")} className="rounded-md bg-primary/20 px-2 py-1 text-[11px] font-medium text-primary-foreground hover:bg-primary/30">Coach</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </QCard>

        {/* Brand voice enforcement */}
        <QCard
          icon={<Mic2 className="h-4 w-4" />}
          title="Enforce brand voice on calls"
          desc="Rules run live on every AI turn. Violations block send."
          action={
            <span className="rounded-full bg-success/15 px-2 py-1 text-[11px] font-medium text-success">
              Live · {rules.filter((r) => r.on).length}/{rules.length} rules on
            </span>
          }
        >
          <ul className="space-y-2">
            {rules.map((r, i) => (
              <li key={r.rule} className="flex items-center justify-between rounded-lg border border-border bg-background/40 px-3 py-2">
                <span className="text-sm">{r.rule}</span>
                <button
                  onClick={() => setRules((rs) => rs.map((x, j) => (j === i ? { ...x, on: !x.on } : x)))}
                  className={`relative h-5 w-9 rounded-full transition ${r.on ? "bg-primary" : "bg-surface-2"}`}
                  aria-label="toggle"
                >
                  <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-background transition ${r.on ? "left-4" : "left-0.5"}`} />
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-3 rounded-lg border border-primary/30 bg-primary/10 p-3 text-xs">
            <div className="font-medium text-primary-foreground">Blocked phrase caught 2m ago</div>
            <div className="mt-1 text-muted-foreground">"No worries!" → replaced with "Of course — happy to help."</div>
          </div>
        </QCard>

        {/* De-escalation workflow */}
        <QCard
          icon={<HeartHandshake className="h-4 w-4" />}
          title="De-escalation workflow"
          desc="Kicks in when sentiment or intent signals a hot thread."
          action={
            <button
              onClick={() => setEscalationOn((v) => !v)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium ${
                escalationOn ? "bg-success/20 text-success" : "bg-surface-2 text-muted-foreground"
              }`}
            >
              {escalationOn ? "Workflow enabled" : "Workflow paused"}
            </button>
          }
        >
          <ol className="space-y-2">
            {escalationSteps.map((s, i) => (
              <li key={s.k} className="flex gap-3 rounded-lg border border-border bg-background/40 p-3">
                <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/20 text-xs font-semibold text-primary-foreground">
                  {i + 1}
                </div>
                <div>
                  <div className="text-sm font-medium">{s.k}</div>
                  <div className="text-xs text-muted-foreground">{s.d}</div>
                </div>
              </li>
            ))}
          </ol>
        </QCard>

        {/* QA sample calls */}
        <QCard
          icon={<PlayCircle className="h-4 w-4" />}
          title="Run QA on sample calls"
          desc="Grade a batch against policy, tone, resolution, and brand voice."
          action={
            <button
              onClick={runQa}
              disabled={qaRunning}
              className="inline-flex items-center gap-1.5 rounded-md bg-gradient-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-glow hover:opacity-90 disabled:opacity-60"
            >
              {qaRunning ? <><Loader2 className="h-3.5 w-3.5 animate-spin" /> Running…</> : <><PlayCircle className="h-3.5 w-3.5" /> Run QA batch</>}
            </button>
          }
        >
          <div className="mb-3 space-y-1.5">
            {sampleCalls.map((c) => (
              <div key={c.id} className="flex items-center justify-between rounded-md border border-border bg-background/40 px-3 py-1.5 text-xs">
                <span className="text-muted-foreground">{c.id}</span>
                <span className="flex-1 px-3">{c.type}</span>
                <span className="text-muted-foreground">{c.dur}</span>
                <span className={`ml-3 rounded px-1.5 py-0.5 font-medium ${
                  c.score >= 90 ? "bg-success/15 text-success" :
                  c.score >= 80 ? "bg-primary/15 text-primary-foreground" :
                  "bg-warning/15 text-warning"
                }`}>{c.score}</span>
              </div>
            ))}
          </div>

          {qaReport && (
            <div className="rounded-lg border border-primary/30 bg-primary/10 p-3">
              <div className="mb-2 flex items-center gap-2 text-xs font-medium">
                <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
                QA report {qaReport.batch}
                <span className="ml-auto text-muted-foreground">Generated {qaReport.at}</span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                <div className="rounded-md bg-background/40 py-2"><div className="font-semibold">{qaReport.ran}</div><div className="text-[10px] text-muted-foreground">Calls</div></div>
                <div className="rounded-md bg-background/40 py-2"><div className="font-semibold">{qaReport.avg}</div><div className="text-[10px] text-muted-foreground">Avg score</div></div>
                <div className="rounded-md bg-background/40 py-2"><div className="font-semibold text-success">{qaReport.pass}</div><div className="text-[10px] text-muted-foreground">Passed</div></div>
                <div className="rounded-md bg-background/40 py-2"><div className="font-semibold text-warning">{qaReport.flagged}</div><div className="text-[10px] text-muted-foreground">Flagged</div></div>
              </div>
              <button className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-md border border-border bg-background/40 px-3 py-1.5 text-xs hover:bg-background/70">
                <FileDown className="h-3.5 w-3.5" /> Download report.pdf
              </button>
            </div>
          )}
        </QCard>
      </div>
    </div>
  );
}

function QCard({ icon, title, desc, action, children }: { icon: React.ReactNode; title: string; desc: string; action?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-border bg-surface/60 p-5">
      <header className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary/20 text-primary-foreground">{icon}</span>
          <div>
            <h3 className="text-sm font-semibold">{title}</h3>
            <p className="text-xs text-muted-foreground">{desc}</p>
          </div>
        </div>
        {action}
      </header>
      {children}
    </section>
  );
}

function Meter({ label, val }: { label: string; val: number }) {
  const tone = val >= 85 ? "bg-success" : val >= 75 ? "bg-primary" : "bg-warning";
  return (
    <div className="flex items-center gap-1.5">
      <span>{label}</span>
      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-surface-2">
        <div className={`h-full ${tone}`} style={{ width: `${val}%` }} />
      </div>
      <span className="font-medium text-foreground">{val}</span>
    </div>
  );
}

function StatusPill({ status }: { status: ReviewItem["status"] }) {
  const map = {
    Pending: "bg-warning/15 text-warning",
    Approved: "bg-success/15 text-success",
    "Coaching sent": "bg-primary/15 text-primary-foreground",
  } as const;
  return <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${map[status]}`}>{status}</span>;
}

/* ---------- Small pieces ---------- */

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-border bg-background/40 px-3 py-2">
      <div className="text-sm font-semibold">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

function PaneSection({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="border-b border-border p-5">
      <div className="mb-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        {icon} {title}
      </div>
      {children}
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{k}</span>
      <span className="font-medium">{v}</span>
    </div>
  );
}

function ChannelBadge({ channel }: { channel: string }) {
  const map: Record<string, string> = {
    SMS: "bg-primary/15 text-primary-foreground",
    WhatsApp: "bg-success/15 text-success",
    Call: "bg-warning/15 text-warning",
    Web: "bg-accent text-accent-foreground",
    Email: "bg-muted text-muted-foreground",
    Instagram: "bg-destructive/15 text-destructive",
  };
  return <span className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${map[channel] ?? "bg-muted text-muted-foreground"}`}>{channel}</span>;
}

function SentimentBadge({ score, large = false }: { score: number; large?: boolean }) {
  const tone = score >= 0.6 ? "success" : score >= 0.4 ? "muted" : "destructive";
  const label = score >= 0.6 ? "Positive" : score >= 0.4 ? "Neutral" : "Negative";
  const cls =
    tone === "success" ? "bg-success/15 text-success" :
    tone === "destructive" ? "bg-destructive/15 text-destructive" :
    "bg-muted text-muted-foreground";
  return (
    <span className={`inline-flex items-center gap-1 rounded-full ${large ? "px-2.5 py-1 text-xs" : "px-1.5 py-0.5 text-[10px]"} font-medium ${cls}`}>
      {label} · {score.toFixed(2)}
    </span>
  );
}

function TagBadge({ tag }: { tag: string }) {
  const map: Record<string, string> = {
    Booking: "bg-primary/15 text-primary-foreground",
    Lead: "bg-primary-glow/20 text-foreground",
    Rescue: "bg-warning/15 text-warning",
    Escalate: "bg-destructive/15 text-destructive",
    "Follow-up": "bg-accent text-accent-foreground",
  };
  return <span className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${map[tag] ?? "bg-muted text-muted-foreground"}`}>{tag}</span>;
}

function DayDivider({ label }: { label: string }) {
  return (
    <div className="my-2 flex items-center gap-3">
      <div className="h-px flex-1 bg-border" />
      <span className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

function Msg({ side, name, time, ai = false, children }: { side: "in" | "out"; name: string; time: string; ai?: boolean; children: React.ReactNode }) {
  const isIn = side === "in";
  return (
    <div className={`flex ${isIn ? "justify-start" : "justify-end"}`}>
      <div className={`max-w-[70%] ${isIn ? "" : "text-right"}`}>
        <div className="mb-1 text-[10px] uppercase tracking-wider text-muted-foreground">
          {ai && "✨ "}{name} · {time}
        </div>
        <div
          className={`rounded-2xl px-4 py-2.5 text-sm leading-snug ${
            isIn
              ? "rounded-bl-sm bg-surface-2 text-foreground"
              : ai
              ? "rounded-br-sm bg-primary/20 text-foreground ring-1 ring-primary/30"
              : "rounded-br-sm bg-gradient-primary text-primary-foreground shadow-glow"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function SystemLine({ icon, text, variant = "info" }: { icon: React.ReactNode; text: string; variant?: "info" | "warn" }) {
  const cls = variant === "warn" ? "text-warning" : "text-muted-foreground";
  return (
    <div className={`flex items-center justify-center gap-1.5 text-[11px] ${cls}`}>
      {icon} {text}
    </div>
  );
}
