import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-brand-500 to-cyan-400" />
          <span className="font-display font-semibold tracking-tight">Aurora</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/70">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end className={({isActive}) => isActive ? "text-white" : "hover:text-white"}>
              {l.label}
            </NavLink>
          ))}
        </div>
        <button className="text-sm px-4 py-2 rounded-full text-black font-medium bg-gradient-to-r from-brand-400 to-cyan-300">Get started</button>
      </nav>
    </header>
  );
}
