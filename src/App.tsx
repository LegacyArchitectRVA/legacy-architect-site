import React, { useMemo, useState } from "react";

type Pillar = {
  name: string;
  image: string;
  details: {
    why: string;
    protect: string[];
  };
};

const img = (id: string) => `https://drive.google.com/uc?export=view&id=${id}`;

const pillars: Pillar[] = [
  {
    name: "Digital Life",
    image: img("https://pub-edbffba3e85240eabfa80aa13a1b8169.r2.dev/Site/Digital.jpg"),
    details: {
      why: "Access is fragmented across accounts — without structure, nothing can be reached when it matters.",
      protect: ["Primary email", "Password manager", "2FA recovery", "Cloud storage"],
    },
  },
  {
    name: "Emergency",
    image: img("1_noKE-IGwrY77Qr1x6r5zGLDd1FenwlR"),
    details: {
      why: "Someone must be able to act immediately — without uncertainty or delay.",
      protect: ["Primary contact", "Authority path", "Access instructions"],
    },
  },
  {
    name: "Financial",
    image: img("1PDLuqGwzFN2QW8oKLQ2P4u12KDZgAWkI"),
    details: {
      why: "Assets exist, but visibility and control are often incomplete — especially under pressure.",
      protect: ["Accounts", "Insurance", "Debts", "Cash flow"],
    },
  },
  {
    name: "Household",
    image: img("1U1d0K4rqepZVrkg0JQnN_LuplXjKOW8A"),
    details: {
      why: "Daily operations fail without clear instructions and ownership — even when the tasks seem simple.",
      protect: ["Utilities", "Vendors", "Schedules", "Access"],
    },
  },
  {
    name: "Records",
    image: img("1YdKcpjpB3d1O1DoYVMJqvnfdlt9QRGlI"),
    details: {
      why: "Records exist, but they are rarely centralized or immediately accessible — which is when they matter most.",
      protect: ["IDs", "Titles", "Policies", "Medical"],
    },
  },
  {
    name: "Business",
    image: img("1WTUaFNg-tzOo2zmxK0mpdb5JBWIymYRx"),
    details: {
      why: "Operations depend on you — without structure, they stop.",
      protect: ["Systems", "Clients", "Revenue", "Access"],
    },
  },
  {
    name: "Legacy",
    image: img("10KWuzLs1SA00g6csMUJUljJc2Wll2ghj"),
    details: {
      why: "Intent is often known, but not clearly documented or accessible — which leaves others to interpret what you meant.",
      protect: ["Directives", "Preferences", "Instructions"],
    },
  },
];

const HERO_PLANNER_IMAGE = img("1YxDdQ_5LLqCf-FiBCIgasyrWa5K6YVFN");
const HOW_IT_WORKS_IMAGE = img("1lM2gzMkOUhXlu4YYgHX_4RBZQstal930");
const ABOUT_IMAGE = img("1BGa580QuSY48P599-SPieXVAmyeHODqE");
const WORKBOOK_IMAGE = img("1MAtwaW36O3P1gVAsYKzrwBagEr_qYwve");

function MetallicButton({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex w-full items-center justify-center rounded-full border border-[#F2E8C7]/55 bg-[linear-gradient(215deg,#D9CCA0_0%,#C4AB93_30%,#8A6E4A_60%,#4E3A19_100%)] px-5 py-3 font-serif text-[11px] font-bold tracking-[0.28em] text-black shadow-[0_12px_32px_rgba(0,0,0,0.45),0_0_50px_rgba(217,204,160,0.45),inset_0_1px_0_rgba(255,255,255,0.14)]"
    >
      {label}
    </a>
  );
}

function PillarsCarousel() {
  const items = useMemo(() => [...pillars, ...pillars], []);

  return (
    <div className="relative mt-6 overflow-hidden rounded-[1.5rem]">
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,rgba(217,204,160,0.12),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-[linear-gradient(90deg,#050505,transparent)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-[linear-gradient(270deg,#050505,transparent)]" />
      <div className="flex gap-4" style={{ animation: "scroll 28s linear infinite", width: "max-content" }}>
        {items.map((pillar, index) => (
          <div
            key={`${pillar.name}-${index}`}
            className="group relative h-[320px] w-[200px] flex-shrink-0 overflow-hidden rounded-[1.25rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
          >
            <img src={pillar.image} alt={pillar.name} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.88))]" />
            <div className="absolute inset-x-5 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(217,204,160,0.45),transparent)] opacity-80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,204,160,0.10),transparent_30%)] opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 z-20">
              <div className="font-serif text-[11px] tracking-[0.2em] text-[#D9CCA0]">{pillar.name}</div>
              <div className="mt-2 text-[11px] leading-5 text-white/70">{pillar.details.why}</div>
            </div>
          </div>
        ))}
      </div>
      <style>{`@keyframes scroll {0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </div>
  );
}

function PillarStrip() {
  const [active, setActive] = useState(0);
  const current = pillars[active];

  return (
    <div className="relative mt-10 rounded-[1.25rem] border border-white/10 bg-[#100d0a] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
      <div className="pointer-events-none absolute inset-0 rounded-[1.25rem] bg-[radial-gradient(circle_at_top,rgba(217,204,160,0.08),transparent_34%)]" />
      <img src={current.image} alt={current.name} className="relative z-10 h-[220px] w-full rounded-lg object-cover shadow-[0_18px_40px_rgba(0,0,0,0.35)]" />
      <div className="relative z-10 mt-4 font-serif text-sm tracking-[0.2em] text-[#D9CCA0]">{current.name}</div>
      <p className="relative z-10 mt-3 text-sm leading-6 text-white/70">{current.details.why}</p>
      <div className="relative z-10 mt-4 text-xs leading-6 text-white/60">{current.details.protect.join(" • ")}</div>
      <div className="relative z-10 mt-4 flex flex-wrap gap-2">
        {pillars.map((pillar, index) => (
          <button
            key={pillar.name}
            type="button"
            onClick={() => setActive(index)}
            className={`rounded-full border px-3 py-2 text-[10px] ${
              index === active ? "border-[#D9CCA0]/40 bg-[#D9CCA0]/20 text-[#D9CCA0]" : "border-white/10 text-white/50"
            }`}
          >
            {pillar.name}
          </button>
        ))}
      </div>
    </div>
  );
}

function VisualPanel({ image, eyebrow, title, body }: { image: string; eyebrow: string; title: string; body: string }) {
  return (
    <div className="relative mt-10 overflow-hidden rounded-[1.5rem] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
      <img src={image} alt={title} className="h-[320px] w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.82))]" />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="text-[11px] tracking-[0.32em] text-[#D9CCA0]">{eyebrow}</div>
        <div className="mt-3 font-serif text-3xl leading-tight text-white">{title}</div>
        <div className="mt-4 h-px w-24 bg-[linear-gradient(90deg,rgba(217,204,160,0.8),transparent)]" />
        <p className="mt-4 max-w-md text-sm leading-6 text-white/75">{body}</p>
      </div>
    </div>
  );
}

export default function Site() {
  return (
    <div className="min-h-screen bg-[#050505] px-4 py-10 pb-24 text-white [background-image:radial-gradient(circle_at_top,rgba(217,204,160,0.08),transparent_26%),linear-gradient(180deg,#050505_0%,#080706_30%,#050505_100%)]">
      <div className="mx-auto max-w-6xl">
        <div className="text-xs tracking-[0.4em] text-[#D9CCA0]">THE 7 PILLARS</div>
        <div className="mt-3 h-px w-28 bg-[linear-gradient(90deg,rgba(217,204,160,0.75),transparent)]" />
        <div className="mt-2 text-sm tracking-[0.08em] text-white/40">Order in Your Absence</div>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight text-white md:text-6xl [text-shadow:0_0_22px_rgba(217,204,160,0.08)]">
          If you were gone tomorrow, could someone run your life?
        </h1>
        <div className="mt-3 max-w-md text-sm text-white/45">For people who don’t want their absence to create chaos.</div>
        <div className="mt-3 max-w-md text-sm text-white/45">Your life runs because you’re here. This shows what happens if you’re not.</div>

        <VisualPanel
          image={HERO_PLANNER_IMAGE}
          eyebrow="PRIMARY FRAME"
          title="Your life is planned. Your absence isn’t."
          body="A Life Manual creates structure someone else can actually run when you cannot."
        />

        <PillarsCarousel />
        <PillarStrip />

        <div className="mt-12 max-w-md text-sm leading-6 text-white/55">You are not missing information. You are missing structure.</div>
        <div className="mt-3 max-w-md text-[12px] leading-6 text-white/38">This is visibility. It is not yet usable by someone else.</div>

        <div className="mt-8 text-sm text-white/55">At some point, this needs to be organized. The question is whether it happens now or later.</div>

        <div className="mt-10 rounded-[1.25rem] border border-white/10 bg-black/20 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.3)]">
          <div className="mb-4 text-[11px] tracking-[0.32em] text-[#D9CCA0]">WHAT HAPPENS WHEN YOU BOOK</div>
          <div className="space-y-2 text-sm leading-7 text-white/70">
            <div>• You schedule a 20-minute call</div>
            <div>• We walk through how your life is currently structured</div>
            <div>• We identify where someone else would get stuck</div>
            <div>• If it makes sense, we begin organizing it into something they can actually run</div>
          </div>
          <div className="mt-4 text-sm text-white/50">No preparation. No obligation.</div>
          <div className="mt-8 max-w-md">
            <MetallicButton label="BOOK YOUR LIFE MANUAL DISCOVERY CALL" href="https://cal.com/legacyarchitectrva/discovery-call" />
            <div className="mt-3 text-xs text-white/45">20 minutes · no preparation needed · no obligation</div>
            <div className="mt-2 text-xs text-white/45">You’re not committing to anything. You’re getting clarity on how this actually works.</div>
          </div>
        </div>

        <VisualPanel
          image={HOW_IT_WORKS_IMAGE}
          eyebrow="HOW IT WORKS"
          title="The structure behind continuity"
          body="We identify where things would stall, then organize the details, records, instructions, and access points so someone else can step in cleanly."
        />

        <VisualPanel
          image={ABOUT_IMAGE}
          eyebrow="ABOUT"
          title="Order in your absence."
          body="This is built for people who do not want their absence to create confusion, delay, or chaos for the people relying on them."
        />

        <VisualPanel
          image={WORKBOOK_IMAGE}
          eyebrow="WORKBOOK"
          title="Start smaller if you need to"
          body="The workbook gives you a private starting point if you are not ready to schedule yet but want to begin getting things organized."
        />

        <section className="mt-12">
          <blockquote className="max-w-md text-lg leading-8 text-white/60">
            “I consider myself organized. This made me realize how much depends on me.”
          </blockquote>
          <div className="mt-4 text-xs tracking-[0.4em] text-[#D9CCA0]">CLIENT PERSPECTIVE</div>
        </section>

        <section className="mt-10 rounded-[1.25rem] border border-white/10 bg-black/20 p-6 text-center shadow-[0_24px_60px_rgba(0,0,0,0.3)]">
          <div className="mb-4 text-[11px] tracking-[0.32em] text-[#D9CCA0]">WHY THIS MATTERS</div>
          <div className="text-[28px] leading-[1.45] text-white/82">
            “What we do for ourselves dies with us.<br />What we do for others lives forever.”
          </div>
        </section>

        <div className="mt-16 text-center text-sm text-white/45">This only becomes a problem when someone else has to deal with it.</div>
      </div>
    </div>
  );
}
