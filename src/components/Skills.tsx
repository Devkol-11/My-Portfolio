import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { AWSIcon } from './TechIcons';

/* ── Category grid ── */
const categories = [
    {
        name: 'LANGUAGES',
        items: ['Go', 'C', 'TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML / CSS'],
        tagClass: 'skill-tag text-sm font-bold border-2 border-ink px-3 py-1 hover:bg-accent hover:text-on-accent hover:border-ink transition-colors duration-100 cursor-default text-ink',
        labelClass: 'text-[10px] font-mono font-black uppercase tracking-[0.18em] text-ink-faint mb-4',
    },
    {
        name: 'BACKEND',
        items: ['Go / Fiber', 'gRPC', 'Node.js', 'NestJS', 'Express', 'Fastify'],
        tagClass: 'text-sm font-bold border-2 border-accent-red bg-accent-red text-white px-3 py-1 cursor-default',
        labelClass: 'text-[10px] font-mono font-black uppercase tracking-[0.18em] text-accent-red mb-4',
    },
    {
        name: 'FRONTEND',
        items: ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'Framer Motion'],
        tagClass: 'text-sm font-bold border-2 border-accent-blue bg-accent-blue text-white px-3 py-1 cursor-default',
        labelClass: 'text-[10px] font-mono font-black uppercase tracking-[0.18em] text-accent-blue mb-4',
    },
    {
        name: 'DATABASES',
        items: ['PostgreSQL', 'Redis', 'MongoDB', 'Elasticsearch', 'Supabase'],
        tagClass: 'text-sm font-bold border-2 border-green bg-green text-on-green px-3 py-1 cursor-default',
        labelClass: 'text-[10px] font-mono font-black uppercase tracking-[0.18em] text-green mb-4',
    },
    {
        name: 'CLOUD & OPS',
        items: ['Docker', 'AWS', 'Kubernetes', 'CI / CD', 'Vercel'],
        tagClass: 'text-sm font-bold border-2 border-ink bg-accent text-on-accent px-3 py-1 cursor-default',
        labelClass: 'text-[10px] font-mono font-black uppercase tracking-[0.18em] text-ink-faint mb-4',
    },
    {
        name: 'TOOLS',
        items: ['Git', 'Linux / POSIX', 'Jest', 'Vitest', 'Swagger', 'ESLint'],
        tagClass: 'text-sm font-bold border-2 border-ink px-3 py-1 hover:bg-surface-dim transition-colors duration-100 cursor-default text-ink',
        labelClass: 'text-[10px] font-mono font-black uppercase tracking-[0.18em] text-ink-faint mb-4',
    },
];

/* ── Marquee items — Go first; AWS uses inline SVG ── */
type MarqueeItem = { name: string; slug: string; custom?: true };

const marqueeItems: MarqueeItem[] = [
    { name: 'Go',         slug: 'go'              },
    { name: 'TypeScript', slug: 'typescript'      },
    { name: 'React',      slug: 'react'           },
    { name: 'Node.js',    slug: 'nodedotjs'       },
    { name: 'Next.js',    slug: 'nextdotjs'       },
    { name: 'PostgreSQL', slug: 'postgresql'      },
    { name: 'Redis',      slug: 'redis'           },
    { name: 'Docker',     slug: 'docker'          },
    { name: 'Tailwind',   slug: 'tailwindcss'     },
    { name: 'AWS',        slug: 'aws', custom: true },
    { name: 'Vercel',     slug: 'vercel'          },
    { name: 'Git',        slug: 'git'             },
    { name: 'MongoDB',    slug: 'mongodb'         },
];

const doubled = [...marqueeItems, ...marqueeItems];

export const TechStack = () => {
    const { theme } = useTheme();
    const iconColor = theme === 'dark' ? 'f0f0f0' : theme === 'earth' ? '1a1208' : '0a0a0a';

    return (
        <section id="skills" className="py-24 border-t-2 border-ink bg-surface-dim">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <p className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-ink-faint mb-3">
                    02 / THE TOOLKIT
                </p>
                <h2 className="text-3xl md:text-4xl font-black text-ink tracking-tight mb-12">
                    Stack of choice.
                </h2>

                {/* Brutalist grid — ink gaps between cells */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 28 }}
                    className="border-2 border-ink overflow-hidden"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 bg-ink gap-[2px]">
                        {categories.map(({ name, items, tagClass, labelClass }) => (
                            <div key={name} className="bg-surface p-6">
                                <p className={labelClass}>{name}</p>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((item) => (
                                        <span key={item} className={tagClass} style={{ borderRadius: '2px' }}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Marquee */}
            <div className="mt-14 overflow-hidden border-t-2 border-b-2 border-ink py-4 bg-surface">
                <div className="flex marquee-track">
                    {doubled.map(({ name, slug, custom }, i) => (
                        <div key={`${slug}-${i}`} className="flex items-center gap-2.5 mx-8 shrink-0">
                            {custom && name === 'AWS' ? (
                                <AWSIcon
                                    color={`#${iconColor}`}
                                    width={18}
                                    height={18}
                                />
                            ) : (
                                <img
                                    src={`https://cdn.simpleicons.org/${slug}/${iconColor}`}
                                    alt={name}
                                    width={18}
                                    height={18}
                                    loading="lazy"
                                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                />
                            )}
                            <span className="text-sm font-black text-ink whitespace-nowrap uppercase tracking-widest">
                                {name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
