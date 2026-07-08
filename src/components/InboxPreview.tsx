import { CalendarCheck, Sparkles, Phone } from "lucide-react";

export function InboxPreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-3xl bg-gradient-primary opacity-20 blur-3xl" aria-hidden />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-elevated">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-border/70 bg-surface-2/60 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
          <div className="ml-3 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="rounded-md bg-background/50 px-2 py-0.5">relay.app / inbox</span>
          </div>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-success/15 px-2 py-0.5 text-[11px] font-medium text-success">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" /> Live
          </span>
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)] sm:grid-cols-[220px_minmax(0,1fr)]">
          {/* thread list */}
          <aside className="hidden border-r border-border/70 bg-background/30 p-3 sm:block">
            <div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Today · 12 new
            </div>
            {threads.map((t, i) => (
              <div
                key={t.name}
                className={`mb-1 rounded-lg px-3 py-2.5 text-xs ${
                  i === 0 ? "bg-primary/15 ring-1 ring-primary/30" : "hover:bg-surface-2/60"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{t.name}</span>
                  <span className="text-[10px] text-muted-foreground">{t.time}</span>
                </div>
                <div className="mt-0.5 truncate text-muted-foreground">{t.preview}</div>
                <div className="mt-1 flex items-center gap-1">
                  <ChannelPill channel={t.channel} />
                  {t.sentiment && <SentimentPill s={t.sentiment} />}
                </div>
              </div>
            ))}
          </aside>

          {/* active thread */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between border-b border-border/70 px-4 py-3">
              <div>
                <div className="text-sm font-semibold">Sarah Chen</div>
                <div className="text-xs text-muted-foreground">+1 (415) 555-0123 · SMS · New customer</div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-success/15 px-2 py-1 text-[11px] font-medium text-success">
                Positive · 0.86
              </span>
            </div>

            <div className="space-y-3 p-4">
              <Bubble side="in">
                Hey! Do you have a table for 4 tonight around 7:30? It's my mom's birthday 🎂
              </Bubble>
              <Bubble side="in" muted>
                Attached: <span className="underline">birthday-cake.jpg</span>
              </Bubble>
              <Bubble side="out">
                Hi Sarah — happy birthday to your mom! I can seat 4 at 7:45pm tonight on our patio.
                Want me to reserve it and add a complimentary dessert?
              </Bubble>

              <div className="rounded-xl border border-primary/30 bg-primary/10 p-3">
                <div className="mb-2 flex items-center gap-2 text-xs font-medium text-primary-foreground/90">
                  <Sparkles className="h-3.5 w-3.5" /> AI drafting reply
                  <span className="ml-auto flex gap-1">
                    <span className="typing-dot h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="typing-dot h-1.5 w-1.5 rounded-full bg-primary" style={{ animationDelay: "0.15s" }} />
                    <span className="typing-dot h-1.5 w-1.5 rounded-full bg-primary" style={{ animationDelay: "0.3s" }} />
                  </span>
                </div>
                <div className="text-sm text-foreground/90">
                  "Booked! Table for 4 at 7:45pm on the patio 🌿 We've added a birthday tiramisu.
                  See you tonight — reply STOP to cancel."
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Action icon={<CalendarCheck className="h-3.5 w-3.5" />} label="Add to calendar" />
                  <Action label="Sync to HubSpot" />
                  <Action label="Approve & send" primary />
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                <Phone className="h-3 w-3" /> Missed call auto-rescue triggered · replied in 4s
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const threads = [
  { name: "Sarah Chen", preview: "Table for 4 tonight?", time: "2m", channel: "SMS", sentiment: "pos" as const },
  { name: "Marco's Deli", preview: "Catering quote please", time: "8m", channel: "WA", sentiment: "neu" as const },
  { name: "Unknown caller", preview: "Missed call · auto-reply sent", time: "12m", channel: "Call" },
  { name: "Priya Patel", preview: "Cancel my 3pm blowout", time: "20m", channel: "Web", sentiment: "neg" as const },
  { name: "Jordan Rivera", preview: "Follow-up on quote", time: "1h", channel: "Email" },
];

function Bubble({ side, children, muted = false }: { side: "in" | "out"; children: React.ReactNode; muted?: boolean }) {
  const isIn = side === "in";
  return (
    <div className={`flex ${isIn ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-snug ${
          isIn
            ? "rounded-bl-sm bg-surface-2 text-foreground"
            : "rounded-br-sm bg-gradient-primary text-primary-foreground shadow-glow"
        } ${muted ? "opacity-70" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}

function ChannelPill({ channel }: { channel: string }) {
  return (
    <span className="rounded bg-background/50 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
      {channel}
    </span>
  );
}

function SentimentPill({ s }: { s: "pos" | "neg" | "neu" }) {
  const map = {
    pos: "bg-success/15 text-success",
    neg: "bg-destructive/15 text-destructive",
    neu: "bg-muted text-muted-foreground",
  };
  return <span className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${map[s]}`}>{s}</span>;
}

function Action({ icon, label, primary = false }: { icon?: React.ReactNode; label: string; primary?: boolean }) {
  return (
    <button
      className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition ${
        primary
          ? "bg-primary text-primary-foreground hover:opacity-90"
          : "border border-border bg-background/40 text-foreground hover:bg-background/70"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
