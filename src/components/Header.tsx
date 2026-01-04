import { motion, steps } from 'framer-motion';
import { Terminal, Database, Shield } from 'lucide-react';

export const Header = () => {
    return (
        <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto pt-24 pb-16 px-6"
        >
            <div className="flex items-center gap-2 mb-8 text-cyber-emerald font-mono tracking-wider text-sm">
                <span className="animate-pulse">{'>'}</span>
                <span>SYSTEM_STATUS: ONLINE</span>
            </div>

            <div className="space-y-6">
                <motion.h1
                    className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-400 font-sans tracking-tight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Collins Bethel
                </motion.h1>

                <div className="h-8 md:h-12 flex items-center overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                            duration: 3,
                            ease: steps(40),
                        }}
                        className="whitespace-nowrap overflow-hidden border-r-4 border-cyber-emerald pr-1"
                    >
                        <h2 className="text-xl md:text-3xl text-cyber-emerald font-mono">
                            Backend Engineer
                        </h2>
                    </motion.div>
                </div>

                <motion.p
                    className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mt-6 font-light"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    I specialize in architecting <span className="text-white font-medium">high-performance, resilient backends</span>.
                    I turn complex business logic into scalable, secure, and clean codebases.
                </motion.p>
            </div>

            <motion.div
                className="mt-12 flex gap-6 text-slate-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <div className="flex items-center gap-2 group cursor-default">
                    <div className="p-2 rounded-md bg-cyber-gray border border-white/5 group-hover:border-cyber-emerald/50 transition-colors">
                        <Terminal size={20} className="text-cyber-emerald" />
                    </div>
                    <span className="text-sm font-mono group-hover:text-cyber-emerald transition-colors">Clean Code</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default">
                    <div className="p-2 rounded-md bg-cyber-gray border border-white/5 group-hover:border-cyber-violet/50 transition-colors">
                        <Database size={20} className="text-cyber-violet" />
                    </div>
                    <span className="text-sm font-mono group-hover:text-cyber-violet transition-colors">Scalability</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default">
                    <div className="p-2 rounded-md bg-cyber-gray border border-white/5 group-hover:border-white/20 transition-colors">
                        <Shield size={20} className="text-white" />
                    </div>
                    <span className="text-sm font-mono group-hover:text-white transition-colors">Security</span>
                </div>
            </motion.div>
        </motion.header>
    );
};
