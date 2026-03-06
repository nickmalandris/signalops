import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100/90 backdrop-blur-sm border-b border-base-300 px-6">
      <div className="navbar-start">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Signal<span className="text-primary">Ops</span>
        </Link>
      </div>
      <div className="navbar-end">
        <a
          href="#apply"
          className="btn btn-primary btn-sm font-mono"
        >
          Join Beta
        </a>
      </div>
    </div>
  );
}
