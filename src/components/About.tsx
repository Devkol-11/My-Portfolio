import { motion } from 'framer-motion';

const stats = [
    {
        value: '3+',
        label: 'years. still not tired.',
        sub: 'Full-stack engineering',
        hoverClass: 'hover:bg-accent',
        hoverText: 'hover:text-on-accent',
    },
    {
        value: '10+',
        label: 'products shipped end-to-end.',
        sub: 'Projects delivered',
        hoverClass: 'hover:bg-accent-red hover:text-white',
        hoverText: '',
    },
    {
        value: '5+',
        label: 'systems still breathing.',
        sub: 'Live in production',
        hoverClass: 'hover:bg-accent-blue hover:text-white',
        hoverText: '',
    },
    {
        value: '∞',
        label: 'coffees. no regrets.',
        sub: 'Fuel consumed',
        hoverClass: 'hover:bg-green',
        hoverText: 'hover:text-on-green',
    },
];

const springItem = (delay = 0) => ({
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 as const },
    transition: { type: 'spring' as const, stiffness: 280, damping: 28, delay },
});

export const About = () => {
    return (
        <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-24 border-t-2 border-ink">
            <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-12 items-start">

                {/* Left label */}
                <div>
                    <p className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-ink-faint mb-3">
                        01 / THE ARCHITECT
                    </p>
                    <h2 className="text-3xl md:text-4xl font-black text-ink leading-tight tracking-tight">
                        Engineering<br />identity.
                    </h2>
                </div>

                {/* Right copy */}
                <motion.div {...springItem(0)} className="space-y-5">
                    <p className="text-ink-muted leading-relaxed text-lg">
                        I'm Collins — a full-stack engineer who ships the whole product.
                        Not just the API, not just the UI.{' '}
                        <span className="text-ink font-bold">The entire thing, end-to-end,
                        in production, under real load.</span>
                    </p>
                    <p className="text-ink-muted leading-relaxed text-lg">
                        I architect{' '}
                        <span className="text-ink font-bold">low-latency Go backends and resilient
                        Node.js APIs</span>, design schemas that survive traffic spikes, and
                        wire them to{' '}
                        <span className="text-ink font-bold">polished React and Next.js frontends</span>{' '}
                        that users actually enjoy.
                    </p>
                    <p className="text-ink-muted leading-relaxed text-lg">
                        From a startup's first MVP to a SaaS handling thousands of concurrent users —{' '}
                        <span className="text-ink font-bold">I take ideas from zero to deployed</span>{' '}
                        and keep them running for the long haul.
                    </p>
                </motion.div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t-2 border-ink">
                {stats.map(({ value, label, sub, hoverClass, hoverText }) => (
                    <div
                        key={label}
                        className={`card-brut p-6 transition-colors duration-150 group ${hoverClass} ${hoverText}`}
                    >
                        <p className="text-4xl md:text-5xl font-black text-ink tracking-tight group-hover:inherit">
                            {value}
                        </p>
                        <p className="text-[10px] font-mono font-black text-ink-faint mt-1.5 uppercase tracking-widest">
                            {sub}
                        </p>
                        <p className="text-[11px] font-bold text-ink-muted mt-1 leading-tight">
                            {label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
