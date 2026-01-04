import { motion } from 'framer-motion';
import { Mail, GitBranch, FileText, Smartphone, Command } from 'lucide-react';

const contactLinks = [
    {
        label: "Email",
        value: "bethelCollins100@gmail.com",
        href: "mailto:bethelCollins100@gmail.com",
        icon: <Mail size={18} />,
        color: "text-blue-400"
    },
    {
        label: "GitHub",
        value: "github.com/Devkol-11",
        href: "https://github.com/Devkol-11",
        icon: <GitBranch size={18} />,
        color: "text-white"
    },
    {
        label: "WhatsApp",
        value: "08133891619",
        href: "https://wa.me/2348133891619",
        icon: <Smartphone size={18} />,
        color: "text-green-400"
    }
];

export const ContactCenter = () => {
    return (
        <section className="max-w-5xl mx-auto py-20 px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-cyber-gray border border-white/10 rounded-xl p-8 md:p-12 relative overflow-hidden"
            >
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-emerald/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-cyber-emerald font-mono text-sm mb-2">
                            <Command size={16} />
                            <span>COMMAND_CENTER</span>
                        </div>
                        <h2 className="text-3xl font-bold text-white">Ready to Work?</h2>
                        <p className="text-slate-400 max-w-md">
                            Open generally for backend roles and collaborations.
                            Let's build something scalable.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 w-full md:w-auto">
                        <a
                            href="/resume.pdf"
                            download
                            className="group flex items-center justify-between gap-4 bg-cyber-emerald/10 hover:bg-cyber-emerald/20 border border-cyber-emerald/50 hover:border-cyber-emerald text-cyber-emerald px-6 py-4 rounded-lg transition-all"
                        >
                            <span className="font-mono font-bold tracking-wide">[DOWNLOAD_SYSTEM_RESUME]</span>
                            <FileText size={20} className="group-hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 pt-12 border-t border-white/5">
                    {contactLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all group overflow-hidden"
                        >
                            <div className={`${link.color} p-2 rounded-md bg-white/5 group-hover:scale-110 transition-transform flex-shrink-0`}>
                                {link.icon}
                            </div>
                            <div className="flex flex-col min-w-0">
                                <span className="text-xs text-slate-500 font-mono uppercase tracking-wider">{link.label}</span>
                                <span className="text-slate-300 font-medium group-hover:text-white transition-colors truncate">{link.value}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
