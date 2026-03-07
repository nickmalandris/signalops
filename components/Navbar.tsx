import Link from "next/link";

const NAV_LINKS = [
  { label: "Problem", href: "#problem" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
];

export default function Navbar() {
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100/90 backdrop-blur-sm border-b border-base-300 px-6">
      <div className="navbar-start">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Signal<span className="text-primary">Ops</span>
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-mono text-base-content/60 hover:text-base-content transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a href="#apply" className="btn btn-primary btn-sm font-mono">
          Join Beta
        </a>
      </div>
    </div>
  );
}
