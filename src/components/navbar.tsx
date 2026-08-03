import { useState } from 'react';
import type { ReactNode } from 'react';
import { Menu, X, Sun, Moon, Leaf } from 'lucide-react';
import { useTheme, type Theme } from '../context/ThemeContext';

const navLinks = [
    { label: 'About',   href: '#about'   },
    { label: 'Work',    href: '#work'    },
    { label: 'Skills',  href: '#skills'  },
    { label: 'Contact', href: '#contact' },
];

const themeIcons: Record<Theme, ReactNode> = {
    light: <Sun  size={13} strokeWidth={2.5} />,
    dark:  <Moon size={13} strokeWidth={2.5} />,
    earth: <Leaf size={13} strokeWidth={2.5} />,
};

const themeOptions: { id: Theme; title: string }[] = [
    { id: 'light', title: 'Light' },
    { id: 'dark',  title: 'Dark'  },
    { id: 'earth', title: 'Earth' },
];

export const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-surface border-b-2 border-ink">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 relative flex items-center justify-between">

                {/*
                  LEFT — Logo + theme icon switcher
                  Theme switcher is grouped here so it's always far from HIRE ME
                */}
                <div className="flex items-center gap-3 shrink-0 z-10">
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-7 h-7 border-2 border-ink flex items-center justify-center group-hover:bg-accent transition-colors duration-150">
                            <span className="text-[10px] font-black leading-none text-ink">CB</span>
                        </div>
                        <span className="font-black text-sm tracking-tight uppercase text-ink hidden md:block">
                            Collins Bethel
                        </span>
                    </a>

                    {/* Theme icon switcher */}
                    <div className="flex border-2 border-ink overflow-hidden">
                        {themeOptions.map(({ id, title }) => (
                            <button
                                key={id}
                                onClick={() => setTheme(id)}
                                title={title}
                                aria-label={`Switch to ${title} theme`}
                                className={[
                                    'w-7 h-7 flex items-center justify-center',
                                    'border-r-2 border-ink last:border-r-0',
                                    'transition-colors duration-150',
                                    theme === id
                                        ? 'bg-ink text-surface'
                                        : 'bg-surface text-ink-faint hover:bg-accent hover:text-ink',
                                ].join(' ')}
                            >
                                {themeIcons[id]}
                            </button>
                        ))}
                    </div>
                </div>

                {/* CENTER — Nav links, absolutely centered (desktop only) */}
                <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    {navLinks.map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            className="text-[11px] font-black uppercase tracking-widest text-ink-muted hover:text-ink transition-colors duration-150"
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                {/* RIGHT — HIRE ME on desktop, hamburger on mobile */}
                <div className="flex items-center gap-2 shrink-0 z-10">
                    {/* Wrapper div hides/shows — btn-brut sets display:inline-flex which
                        overrides Tailwind's `hidden` at the same CSS specificity level */}
                    <div className="hidden md:block">
                        <a
                            href="mailto:bethelCollins100@gmail.com"
                            className="btn-brut text-[10px] px-4 py-2.5 uppercase tracking-widest"
                        >
                            Hire me
                        </a>
                    </div>
                    <button
                        className="md:hidden w-9 h-9 border-2 border-ink flex items-center justify-center hover:bg-accent transition-colors duration-150"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                    >
                        {open ? <X size={16} strokeWidth={2.5} /> : <Menu size={16} strokeWidth={2.5} />}
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            {open && (
                <div className="md:hidden border-t-2 border-ink bg-surface">
                    <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col">
                        {navLinks.map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                onClick={() => setOpen(false)}
                                className="text-sm font-black uppercase tracking-widest text-ink-muted hover:text-ink py-4 border-b-2 border-ink/10 last:border-0 transition-colors duration-150"
                            >
                                {label}
                            </a>
                        ))}
                        <a
                            href="mailto:bethelCollins100@gmail.com"
                            className="btn-brut text-xs px-5 py-4 uppercase tracking-widest mt-4 w-full justify-center"
                        >
                            Hire me
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};
