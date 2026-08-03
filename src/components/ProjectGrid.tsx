import { ArrowUpRight } from 'lucide-react';

const GitHubSVG = ({ size = 14 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
);

/* ── Code-window mockups ── */

const FinxMockup = () => (
  <div className="font-mono text-[10px] leading-relaxed p-3 bg-surface-dim overflow-hidden h-40">
    <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-ink/10">
      <span className="w-2 h-2 rounded-full bg-accent-red/70" />
      <span className="w-2 h-2 rounded-full bg-accent/70" />
      <span className="w-2 h-2 rounded-full bg-green/70" />
      <span className="ml-2 text-ink-faint">finx · wallet.tsx</span>
      <span className="ml-auto text-green font-black">● LIVE</span>
    </div>
    <div className="flex justify-between mb-1.5">
      <span className="text-ink-faint">balance</span>
      <span className="text-ink font-black">₦ 84,200.00</span>
    </div>
    <div className="space-y-1 border-t border-ink/10 pt-1.5">
      <div className="flex gap-2">
        <span className="text-accent-blue font-black w-3">←</span>
        <span className="text-ink-muted">@tunde</span>
        <span className="ml-auto text-green font-black">+₦3,500</span>
      </div>
      <div className="flex gap-2">
        <span className="text-accent-red font-black w-3">→</span>
        <span className="text-ink-muted">savings pot</span>
        <span className="ml-auto text-ink-faint">-₦2,000</span>
      </div>
      <div className="flex gap-2">
        <span className="text-accent-red font-black w-3">→</span>
        <span className="text-ink-muted">@grace</span>
        <span className="ml-auto text-ink-faint">-₦500</span>
      </div>
    </div>
    <div className="flex justify-between pt-2 border-t border-ink/10 mt-1">
      <span className="text-ink-faint">savings pot</span>
      <span className="text-accent font-black">₦24.5k / ₦50k</span>
    </div>
  </div>
);

const BaggedMockup = () => (
  <div className="font-mono text-[10px] leading-relaxed p-3 bg-surface-dim overflow-hidden h-40">
    <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-ink/10">
      <span className="w-2 h-2 rounded-full bg-accent-red/70" />
      <span className="w-2 h-2 rounded-full bg-accent/70" />
      <span className="w-2 h-2 rounded-full bg-green/70" />
      <span className="ml-2 text-ink-faint">bagged · analyze.ts</span>
    </div>
    <div className="flex justify-between mb-1.5">
      <span className="text-accent-blue font-black">$SOL</span>
      <span className="text-green font-black">72 · BULLISH</span>
    </div>
    <div className="space-y-1">
      <div className="text-[9px] text-ink-muted">
        <span className="text-green font-black">bull: </span>
        "Institutional inflows, breakout confirmed"
      </div>
      <div className="text-[9px] text-ink-muted">
        <span className="text-accent-red font-black">bear: </span>
        "Macro risk, RSI overbought at 78"
      </div>
    </div>
    <div className="flex justify-between pt-2 border-t border-ink/10 mt-2">
      <span className="text-ink-faint">sentiment</span>
      <span className="text-ink font-black tracking-tight">████████░░ 72%</span>
    </div>
  </div>
);

const NetRoomMockup = () => (
  <div className="font-mono text-[10px] leading-relaxed p-3 bg-surface-dim overflow-hidden h-40">
    <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-ink/10">
      <span className="w-2 h-2 rounded-full bg-accent-red/70" />
      <span className="w-2 h-2 rounded-full bg-accent/70" />
      <span className="w-2 h-2 rounded-full bg-green/70" />
      <span className="ml-2 text-ink-faint">netroom · hub.go</span>
      <span className="ml-auto text-green font-black">● RUN</span>
    </div>
    <div className="space-y-1">
      <div className="flex justify-between">
        <span className="text-ink-faint">clients</span>
        <span className="text-accent font-black">4,218 active</span>
      </div>
      <div className="flex justify-between">
        <span className="text-ink-faint">msg/s</span>
        <span className="text-green font-black">12,400</span>
      </div>
      <div className="flex justify-between">
        <span className="text-ink-faint">goroutines</span>
        <span className="text-ink font-black">4,231</span>
      </div>
    </div>
    <div className="flex justify-between pt-2 border-t border-ink/10 mt-2">
      <span className="text-ink-faint">ai latency</span>
      <span className="text-green font-black">0.3 ms avg</span>
    </div>
    <div className="text-[9px] mt-0.5">
      <span className="text-accent-blue">ai: </span>
      <span className="text-ink-faint">"summarising thread..."</span>
    </div>
  </div>
);

const CineVibeMockup = () => (
  <div className="font-mono text-[10px] leading-relaxed p-3 bg-surface-dim overflow-hidden h-40">
    <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-ink/10">
      <span className="w-2 h-2 rounded-full bg-accent-red/70" />
      <span className="w-2 h-2 rounded-full bg-accent/70" />
      <span className="w-2 h-2 rounded-full bg-green/70" />
      <span className="ml-2 text-ink-faint">cinevibe · discover.tsx</span>
    </div>
    <div className="mb-1.5 text-[9px]">
      <span className="text-ink-faint">prompt: </span>
      <span className="text-accent font-black">
        "dark, mind-bending sci-fi"
      </span>
    </div>
    <div className="space-y-1">
      <div className="flex gap-2">
        <span className="text-accent-blue font-black w-3">→</span>
        <span className="text-ink-muted">Arrival (2016)</span>
        <span className="ml-auto text-green font-black">92%</span>
      </div>
      <div className="flex gap-2">
        <span className="text-accent-blue font-black w-3">→</span>
        <span className="text-ink-muted">Annihilation (2018)</span>
        <span className="ml-auto text-green font-black">88%</span>
      </div>
      <div className="flex gap-2">
        <span className="text-accent-blue font-black w-3">→</span>
        <span className="text-ink-muted">Ex Machina (2014)</span>
        <span className="ml-auto text-ink font-black">85%</span>
      </div>
    </div>
    <div className="flex justify-between pt-1.5 border-t border-ink/10 mt-1">
      <span className="text-ink-faint">watchlist</span>
      <span className="text-accent font-black">12 saved</span>
    </div>
  </div>
);

/* ── Tag palette ── */
type TagCat = "backend" | "frontend" | "infra";

const tagStyle: Record<TagCat, string> = {
  backend: "bg-accent-red  text-white    border-2 border-ink",
  frontend: "bg-accent-blue text-white    border-2 border-ink",
  infra: "bg-accent text-on-accent     border-2 border-ink",
};

const projects = [
  {
    title: "Finx",
    description:
      "A P2P and savings app — send money peer-to-peer, set savings goals, and track spending in real time. Built for speed and a mobile-first UX.",
    tags: [
      { name: "React", cat: "frontend" as TagCat },
      { name: "Next.js", cat: "frontend" as TagCat },
      { name: "PostgreSQL", cat: "infra" as TagCat },
      { name: "Vercel", cat: "infra" as TagCat },
    ],
    Mockup: FinxMockup,
    github: "https://github.com/Devkol-11/finx" as string | null,
    live: "https://finx-web.vercel.app/" as string | null,
  },
  {
    title: "Bagged",
    description:
      "Crypto sentiment dashboard powered by CoinGecko market metrics and dual AI personas that roast tokens and debate bull vs. bear arguments in real time.",
    tags: [
      { name: "React", cat: "frontend" as TagCat },
      { name: "Node.js", cat: "backend" as TagCat },
      { name: "CoinGecko", cat: "backend" as TagCat },
      { name: "LLM API", cat: "infra" as TagCat },
    ],
    Mockup: BaggedMockup,
    github: "https://github.com/Devkol-11/Bagged" as string | null,
    live: null as string | null,
  },
  {
    title: "NetRoom",
    description:
      "High-concurrency Go WebSocket chat engine with non-blocking background goroutines for real-time AI assistant interactions — handles thousands of concurrent users.",
    tags: [
      { name: "Go", cat: "backend" as TagCat },
      { name: "WebSocket", cat: "backend" as TagCat },
      { name: "Redis", cat: "infra" as TagCat },
      { name: "Docker", cat: "infra" as TagCat },
    ],
    Mockup: NetRoomMockup,
    github: "https://github.com/Devkol-11/NetRoom" as string | null,
    live: null as string | null,
  },
  {
    title: "CineVibe",
    description:
      "Movie discovery app that translates natural-language vibe prompts into TMDB API queries. Describe a mood, get ranked matches — with dynamic personal watchlists.",
    tags: [
      { name: "React", cat: "frontend" as TagCat },
      { name: "Next.js", cat: "frontend" as TagCat },
      { name: "TMDB API", cat: "backend" as TagCat },
      { name: "TypeScript", cat: "backend" as TagCat },
    ],
    Mockup: CineVibeMockup,
    github: "https://github.com/Devkol-11/Cine-Vibe" as string | null,
    live: null as string | null,
  },
];

export const Work = () => {
  return (
    <section
      id="work"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-24 border-t-2 border-ink"
    >
      <p className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-ink-faint mb-3">
        03 / PROOF OF WORK
      </p>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-ink tracking-tight">
          Shipped to
          <br />
          real users.
        </h2>
        <p className="text-ink-muted text-sm leading-relaxed max-w-[44ch]">
          Full-stack products and high-performance backend services — built for
          production, not just portfolios.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map(({ title, description, tags, Mockup, github, live }) => (
          <article
            key={title}
            className="card-brut overflow-hidden flex flex-col group"
          >
            {/* Card body */}
            <div className="p-5 pb-4 flex-1">
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-black text-ink text-[1.05rem] leading-snug">
                  {title}
                </h3>
                <div className="flex items-center gap-0.5 shrink-0 mt-0.5">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-faint hover:text-ink p-1.5 hover:bg-accent transition-colors duration-100"
                      aria-label={`${title} on GitHub`}
                    >
                      <GitHubSVG size={15} />
                    </a>
                  )}
                  {live && (
                    <a
                      href={live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-faint hover:text-ink p-1.5 hover:bg-accent transition-colors duration-100"
                      aria-label={`Open ${title}`}
                    >
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-ink-muted leading-relaxed line-clamp-3 mb-4">
                {description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {tags.map(({ name, cat }) => (
                  <span
                    key={name}
                    className={`text-[11px] font-black px-2.5 py-0.5 uppercase tracking-wide ${tagStyle[cat]}`}
                    style={{ borderRadius: "2px" }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

            {/* Code-window preview */}
            <div
              className="mx-3 mb-3 border-2 border-ink overflow-hidden"
              style={{ borderRadius: "2px" }}
            >
              <div className="flex items-center gap-1.5 px-3 py-2 bg-ink">
                <div className="w-2 h-2 rounded-full bg-surface/20" />
                <div className="w-2 h-2 rounded-full bg-surface/20" />
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
              <Mockup />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
