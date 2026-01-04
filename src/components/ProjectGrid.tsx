import { motion } from 'framer-motion';
import { ExternalLink, Layers, Cpu, Lock } from 'lucide-react';

const projects = [
    {
        title: "E-Commerce API",
        architecture: "Hexagonal Architecture",
        stack: "NestJS + PostgreSQL + Redis",
        icon: <Layers size={24} />,
        status: "LIVE"
    },
    {
        title: "Real-time Chat Engine",
        architecture: "Clean Architecture",
        stack: "Fastify + Redis Pub/Sub + Socket.io",
        icon: <Cpu size={18} />,
        status: "LIVE"
    },
    {
        title: "Secure Auth System",
        architecture: "Domain-Driven Design (DDD)",
        stack: "Express + MongoDB + Docker",
        icon: <Lock size={24} />,
        status: "LIVE"
    }
];

export const ProjectGrid = () => {
    return (
        <section className="max-w-5xl mx-auto py-12 px-6">
            <div className="flex items-center gap-2 mb-12">
                <span className="w-2 h-8 bg-cyber-violet rounded-sm"></span>
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold text-white tracking-tight"
                >
                    Projects
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="glass-panel group p-6 rounded-xl hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all duration-300 border border-white/5 hover:border-cyber-violet/50"
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <div className="text-cyber-violet bg-cyber-violet/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    {project.icon}
                                </div>
                                <span className="text-[10px] bg-white/5 px-2 py-1 rounded text-slate-400 font-mono tracking-widest border border-white/5">
                                    {project.status}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-violet transition-colors min-h-[3.5rem] flex items-center">{project.title}</h3>

                            <div className="space-y-4 mb-8 flex-grow">
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Architecture</div>
                                    <p className="text-sm text-slate-300 bg-white/5 px-2 py-1 rounded inline-block border border-white/5">
                                        {project.architecture}
                                    </p>
                                </div>

                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Stack</div>
                                    <p className="text-sm text-slate-400 font-mono">
                                        {project.stack}
                                    </p>
                                </div>
                            </div>

                            <button className="flex items-center gap-2 text-sm font-bold text-cyber-violet hover:text-white transition-colors w-full justify-end group/btn pt-4 border-t border-white/5 mt-auto">
                                <span className="font-mono">VIEW_SOURCE</span>
                                <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
