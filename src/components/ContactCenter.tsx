import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const contactCards = [
    {
        label: 'Email',
        value: 'bethelCollins100@gmail.com',
        href: 'mailto:bethelCollins100@gmail.com',
    },
    {
        label: 'GitHub',
        value: 'github.com/Devkol-11',
        href: 'https://github.com/Devkol-11',
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/collins-bethel',
        href: 'https://linkedin.com/in/collins-bethel',
    },
    {
        label: 'WhatsApp',
        value: '+234 813 389 1619',
        href: 'https://wa.me/2348133891619',
    },
];

export const Contact = () => {
    return (
        <section id="contact" className="py-24 border-t-2 border-ink bg-surface-dim">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <p className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-ink-faint mb-3">
                    04 / LET'S SHIP
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 28 }}
                    className="py-10 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-ink leading-[1.02] tracking-tighter mb-4">
                        Got something<br />to build?
                    </h2>
                    <p className="text-ink-muted text-lg max-w-[46ch] mx-auto mb-8 leading-relaxed">
                        Open for full-stack engineering roles and startup collaborations. Bring me
                        your gnarliest systems problem — backend architecture, API design, or a UI
                        that needs to be fast and beautiful. Let's ship it.
                    </p>

                    <a
                        href="mailto:bethelCollins100@gmail.com"
                        className="btn-red-brut text-sm px-7 py-3.5 uppercase tracking-widest mx-auto"
                    >
                        bethelCollins100@gmail.com
                        <ArrowUpRight size={15} />
                    </a>
                </motion.div>

                {/* Contact cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
                    {contactCards.map(({ label, value, href }, index) => (
                        <motion.a
                            key={label}
                            href={href}
                            target={href.startsWith('mailto') ? undefined : '_blank'}
                            rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{
                                type: 'spring',
                                stiffness: 260,
                                damping: 28,
                                delay: index * 0.07,
                            }}
                            className="card-brut p-4 bg-surface hover:bg-accent transition-colors duration-150 group"
                        >
                            <p className="text-[10px] font-mono font-black uppercase tracking-[0.18em] text-ink-faint mb-1.5">
                                {label}
                            </p>
                            <p className="text-sm font-bold text-ink truncate">{value}</p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};
