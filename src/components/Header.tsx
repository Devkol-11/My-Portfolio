import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';

const GitHubSVG = ({ size = 14 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
);

const LinkedInSVG = ({ size = 14 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);
import { useTheme } from '../context/ThemeContext';
import type { Theme } from '../context/ThemeContext';

/* ══════════════════════════════════════════════════════════
   PER-THEME SPRING CONFIGS — Emil rule: tune to personality
   ══════════════════════════════════════════════════════════ */

/** Badge mount spring — distinct personality per theme */
const badgeSpring = (theme: Theme) => ({
    type: 'spring' as const,
    stiffness: theme === 'light' ? 500 : theme === 'dark' ? 320 : 200,
    damping:   theme === 'light' ? 18  : theme === 'dark' ? 28  : 20,
});

/** Per-line hidden state for headline stagger */
const lineHidden = (theme: Theme) =>
    theme === 'dark'
        ? { opacity: 0, x: -16, filter: 'blur(6px)' }   // terminal slide-in + blur
        : { opacity: 0, y: theme === 'earth' ? 28 : 30 }; // organic / pop-art stamp

const lineVisible = { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' };

/** Per-line spring — fast for dark/light, slow for earth */
const lineSpring = (theme: Theme, i: number) => ({
    type: 'spring' as const,
    stiffness: theme === 'dark' ? 380 : theme === 'earth' ? 180 : 320,
    damping:   theme === 'dark' ? 36  : theme === 'earth' ? 22  : 28,
    delay:     (theme === 'dark' ? 0.04 : theme === 'earth' ? 0.06 : 0.06) + i * (theme === 'earth' ? 0.12 : theme === 'dark' ? 0.08 : 0.1),
});

/* ══════════════════════════════════════════════════════════
   "FULL SCOPE." HIGHLIGHT SWEEP
   Background layer only — text always visible on top.
   Three distinct behaviours per theme:
   - Light:  scaleX spring snap from left (stiffness 400, damping 25)
   - Dark:   opacity glow fade-in
   - Earth:  scaleX slide with elastic cubic-bezier(0.16, 1, 0.3, 1)
   ══════════════════════════════════════════════════════════ */
const sweepDelay = (theme: Theme) =>
    theme === 'dark' ? 0.38 : theme === 'earth' ? 0.55 : 0.46;

const sweepInitial = (theme: Theme): Record<string, number> =>
    theme === 'dark' ? { opacity: 0 } : { scaleX: 0 };

const sweepAnimate = (theme: Theme): Record<string, number> =>
    theme === 'dark' ? { opacity: 1 } : { scaleX: 1 };

const sweepTransition = (theme: Theme) => {
    const delay = sweepDelay(theme);
    if (theme === 'dark')
        return { type: 'spring' as const, stiffness: 180, damping: 22, delay };
    if (theme === 'earth')
        return { duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay };
    return { type: 'spring' as const, stiffness: 400, damping: 25, delay };
};

/* ══════════════════════════════════════════════════════════
   DATA
   ══════════════════════════════════════════════════════════ */
const currentWork = [
    {
        label:  'Switch Pay',
        sub:    'Payment Orchestrator + Router',
        tags:   ['Go', 'Docker', 'Postgres', 'Redis'],
        github: 'https://github.com/Devkol-11/switch-pay',
    },
    {
        label:  'GIG Link',
        sub:    'Freelancer–Creator Gig Platform',
        tags:   ['Node.js', 'Postgres', 'Redis', 'Docker'],
        github: 'https://github.com/Devkol-11/GIG-LINK' as string | null,
    },
    {
        label:  'Ticket Storm',
        sub:    'High-Concurrency Ticketing Simulation',
        tags:   ['Go', 'Docker', 'Simulation'],
        github: 'https://github.com/Devkol-11/ticket-storm' as string | null,
    },
];

const socialLinks = [
    { label: 'github/Devkol-11', href: 'https://github.com/Devkol-11',          icon: <GitHubSVG size={14} /> },
    { label: 'linkedin',         href: 'https://linkedin.com/in/collins-bethel', icon: <LinkedInSVG size={14} /> },
    { label: 'email',            href: 'mailto:bethelCollins100@gmail.com',      icon: <Mail     size={14} /> },
];

/* ══════════════════════════════════════════════════════════
   COMPONENT
   ══════════════════════════════════════════════════════════ */
export const Hero = () => {
    const { theme } = useTheme();
    const prefersReduced = useReducedMotion() ?? false;

    return (
        <section className="min-h-[100dvh] flex items-center pt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-16 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-center">

                    {/* ── Left: animated text only ── */}
                    <div className="space-y-7">

                        {/* AVAILABLE badge — tactile spring bounce on mount */}
                        <motion.div
                            initial={prefersReduced ? false : { opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={badgeSpring(theme)}
                        >
                            <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-ink border-2 border-ink bg-accent px-3.5 py-1.5">
                                <span className="relative flex h-2 w-2 shrink-0">
                                    <span className="badge-ping-ring" />
                                    <span className="badge-ping-dot" />
                                </span>
                                Available for work
                            </span>
                        </motion.div>

                        {/* ── Headline: 3 staggered lines, per-theme spring physics ── */}
                        <h1
                            className="font-black text-ink leading-[0.93] tracking-tighter hyphens-none"
                            style={{ fontSize: 'clamp(2.6rem, 8vw, 5.2rem)' }}
                        >
                            {/* Lines 1 & 2: plain slide-in */}
                            {(['Full-stack', 'engineer.'] as const).map((word, i) => (
                                <motion.span
                                    key={word}
                                    style={{ display: 'block' }}
                                    initial={prefersReduced ? false : lineHidden(theme)}
                                    animate={lineVisible}
                                    transition={lineSpring(theme, i)}
                                >
                                    {word}
                                </motion.span>
                            ))}

                            {/* Line 3: slide-in + independent highlight SWEEP behind text */}
                            <motion.span
                                style={{ display: 'block', marginTop: '0.25rem' }}
                                initial={prefersReduced ? false : lineHidden(theme)}
                                animate={lineVisible}
                                transition={lineSpring(theme, 2)}
                            >
                                {/*
                                  Two-layer structure:
                                  - motion.span (bg): sweeps/fades in independently
                                  - span (text):      always visible, sits on top
                                */}
                                <span style={{ position: 'relative', display: 'inline-block' }}>
                                    <motion.span
                                        aria-hidden="true"
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'var(--color-accent)',
                                            transformOrigin: 'left center',
                                        }}
                                        initial={prefersReduced ? undefined : sweepInitial(theme)}
                                        animate={sweepAnimate(theme)}
                                        transition={prefersReduced ? undefined : sweepTransition(theme)}
                                    />
                                    <span className="relative text-on-accent px-2 pb-0.5">
                                        Full scope.
                                    </span>
                                </span>
                            </motion.span>
                        </h1>

                        {/* Body — startup MVP specialist */}
                        <motion.p
                            initial={prefersReduced ? false : { opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', stiffness: 280, damping: 30, delay: 0.26 }}
                            className="text-base md:text-lg text-ink-muted leading-relaxed max-w-[46ch]"
                        >
                            I'm Collins Bethel. I help startups{' '}
                            <span className="text-ink font-bold">build, ship, and scale
                            production-ready MVPs from scratch</span> — and stick around to
                            maintain them. From low-latency{' '}
                            <span className="text-ink font-bold">Go backends</span> and resilient{' '}
                            <span className="text-ink font-bold">Node.js APIs</span> to
                            polished, high-converting{' '}
                            <span className="text-ink font-bold">React interfaces</span>,{' '}
                            I own the full product lifecycle.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={prefersReduced ? false : { opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', stiffness: 280, damping: 28, delay: 0.30 }}
                            className="flex items-center gap-3 flex-wrap"
                        >
                            <a href="#work" className="btn-brut text-xs px-6 py-3.5 uppercase tracking-widest">
                                View my work
                            </a>
                            <a
                                href="/collins-bethel-cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-ghost-brut text-xs px-6 py-3.5 uppercase tracking-widest"
                            >
                                Resume
                                <ArrowUpRight size={14} />
                            </a>
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            initial={prefersReduced ? false : { opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ type: 'spring', stiffness: 220, damping: 30, delay: 0.45 }}
                            className="flex flex-wrap items-center gap-5 pt-1"
                        >
                            {socialLinks.map(({ label, href, icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith('mailto') ? undefined : '_blank'}
                                    rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-muted hover:text-ink transition-colors duration-150"
                                >
                                    {icon}
                                    <span>{label}</span>
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* ── Right: STATIC sidebar — zero transforms, zero float ── */}
                    <div className="hidden lg:block">
                        <div className="card-brut p-5 space-y-3 bg-surface">
                            <p className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-ink-faint pb-1">
                                Currently building
                            </p>
                            {currentWork.map(({ label, sub, tags, github }) => (
                                <div
                                    key={label}
                                    className="bg-surface-dim border-2 border-ink p-4 hover:bg-accent transition-colors duration-150 group"
                                >
                                    <div className="flex items-start justify-between gap-2 mb-0.5">
                                        <p className="text-sm font-bold text-ink leading-snug group-hover:text-on-accent">
                                            {label}
                                        </p>
                                        {github && (
                                            <a
                                                href={github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="shrink-0 border-2 border-ink p-1 text-ink-faint hover:bg-ink hover:text-surface transition-colors duration-100"
                                                aria-label={`${label} on GitHub`}
                                            >
                                                <GitHubSVG size={12} />
                                            </a>
                                        )}
                                    </div>
                                    <p className="text-[10px] text-ink-faint group-hover:text-on-accent mb-2 leading-tight">
                                        {sub}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[10px] font-black border-2 border-ink px-2 py-0.5 text-ink group-hover:text-on-accent"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
