import { motion } from 'framer-motion';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  // { id: 'contact', label: 'Contact' },
];

const Navbar = ({ activeSection, brand }) => (
  <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6">
    <nav className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 backdrop-blur-2xl">
      <div className="flex items-center justify-between">
        <a href="#home" className="font-display text-xl font-bold text-white">
          {brand}
        </a>
        <ul className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative px-4 py-2 text-sm font-medium transition ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                    }`}
                >
                  {item.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-sky-400 to-emerald-300"
                    />
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <ul className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 md:hidden">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium transition ${isActive
                    ? 'border-sky-300/60 bg-sky-300/15 text-white'
                    : 'border-white/15 bg-white/5 text-slate-300 hover:text-white'
                  }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  </header>
);

export default Navbar;
