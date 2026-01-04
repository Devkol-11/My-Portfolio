import { motion } from 'framer-motion';
import { Cpu, Server, Database, Cloud } from 'lucide-react';

const skillGroups = [
    {
        title: "Frameworks & Runtimes",
        icon: <Cpu size={18} />,
        skills: ["Node.js", "Express", "Fastify", "NestJS", "TypeScript"],
        status: "DEPLOYED"
    },
    {
        title: "Architecture & Design",
        icon: <Server size={18} />,
        skills: ["Clean Architecture", "Hexagonal Architecture", "DDD", "Microservices", "REST API"],
        status: "DEPLOYED"
    },
    {
        title: "Data Persistence",
        icon: <Database size={18} />,
        skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Prisma/TypeORM"],
        status: "DEPLOYED"
    },
    {
        title: "Infrastructure & Ops",
        icon: <Cloud size={18} />,
        skills: ["Docker", "Kubernetes", "AWS", "RabbitMQ", "BullMQ", "CI/CD"],
        status: "DEPLOYED"
    }
];

export const Skills = () => {
    return (
        <section className="max-w-5xl mx-auto py-20 px-6">
            <div className="flex items-center gap-2 mb-12">
                <span className="w-2 h-8 bg-cyber-emerald rounded-sm"></span>
                <h2 className="text-2xl font-bold text-white tracking-tight">Skills & Tools</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillGroups.map((group, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel text-white p-6 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-3 text-cyber-emerald">
                                <div className="p-2 bg-cyber-emerald/10 rounded-lg">
                                    {group.icon}
                                </div>
                                <h3 className="font-mono font-bold">{group.title}</h3>
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-cyber-emerald/70 bg-cyber-emerald/5 px-2 py-1 rounded border border-cyber-emerald/20">
                                <div className="w-1.5 h-1.5 rounded-full bg-cyber-emerald animate-pulse"></div>
                                {group.status}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="text-sm text-slate-300 bg-white/5 px-3 py-1.5 rounded-md border border-white/5 hover:border-cyber-emerald/30 hover:text-white transition-all cursor-crosshair"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
