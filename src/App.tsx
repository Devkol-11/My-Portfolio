import { Header } from './components/Header';
import { ProjectGrid } from './components/ProjectGrid';
import { Skills } from './components/Skills';
import { ContactCenter } from './components/ContactCenter';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-cyber-black text-slate-300 selection:bg-cyber-emerald/30 selection:text-cyber-emerald">

      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyber-emerald/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyber-violet/5 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 w-full">
        <Header />
        <ProjectGrid />
        <Skills />
        <ContactCenter />

        <footer className="text-center py-12 border-t border-white/5 bg-cyber-gray/20 backdrop-blur-sm">
          <p className="text-slate-500 text-sm font-mono">
            © {new Date().getFullYear()} Collins Bethel. System Status: <span className="text-cyber-emerald">OPERATIONAL</span>
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
