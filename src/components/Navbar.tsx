import Link from "next/link";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-med-bg/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="text-base font-semibold tracking-[0.18em] text-white">
            Amanda Qu
          </span>
          <span className="mt-1 text-xs font-medium tracking-[0.2em] text-med-cyan/80 transition group-hover:text-med-cyan">
            Medical AI
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-base font-medium text-slate-200 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-med-cyan"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
