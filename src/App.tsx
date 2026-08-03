import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/navbar';
import { Hero } from './components/Header';
import { About } from './components/About';
import { TechStack } from './components/Skills';
import { Work } from './components/ProjectGrid';
import { Contact } from './components/ContactCenter';
const GitHubSVG = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
);

const LinkedInSVG = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

function App() {
  return (
    <ThemeProvider>
      <div className="bg-surface text-ink min-h-screen selection:bg-accent/30 selection:text-ink">
        <Navbar />
        <main>
          <Hero />
          <About />
          <TechStack />
          <Work />
          <Contact />
        </main>

        <footer className="border-t-2 border-ink bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

              {/* Brand */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 border-2 border-ink flex items-center justify-center">
                    <span className="text-[10px] font-black leading-none text-ink">CB</span>
                  </div>
                  <span className="font-black text-sm tracking-tight uppercase text-ink">
                    Collins Bethel
                  </span>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed max-w-[220px]">
                  Full-stack systems engineer. API to UI, database to deployment — the whole
                  stack, done right.
                </p>
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href="https://github.com/Devkol-11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-muted hover:text-ink transition-colors duration-150 p-1 hover:bg-accent border-2 border-transparent hover:border-ink"
                    aria-label="GitHub"
                  >
                    <GitHubSVG size={16} />
                  </a>
                  <a
                    href="https://linkedin.com/in/collins-bethel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-muted hover:text-ink transition-colors duration-150 p-1 hover:bg-accent border-2 border-transparent hover:border-ink"
                    aria-label="LinkedIn"
                  >
                    <LinkedInSVG size={16} />
                  </a>
                </div>
              </div>

              {/* Navigate */}
              <div className="space-y-3">
                <p className="text-[10px] font-mono font-black uppercase tracking-widest text-ink-faint">
                  Navigate
                </p>
                <ul className="space-y-2">
                  {['About', 'Skills', 'Work', 'Contact'].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-sm font-semibold text-ink-muted hover:text-ink transition-colors duration-150"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Elsewhere */}
              <div className="space-y-3">
                <p className="text-[10px] font-mono font-black uppercase tracking-widest text-ink-faint">
                  Elsewhere
                </p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://github.com/Devkol-11"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-ink-muted hover:text-ink transition-colors duration-150"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/collins-bethel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-ink-muted hover:text-ink transition-colors duration-150"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:bethelCollins100@gmail.com"
                      className="text-sm font-semibold text-ink-muted hover:text-ink transition-colors duration-150"
                    >
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t-2 border-ink mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
              <p className="text-xs font-black text-ink-faint uppercase tracking-widest">
                &copy; 2026 COLLINS BETHEL — ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
