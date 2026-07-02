export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-black px-5 py-8 text-sm text-slate-400 sm:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[0.75fr_1.25fr_auto] lg:items-center">
        <p className="font-medium text-slate-300">
          Amanda Qu Zhiyan · Medical Imaging AI
        </p>
        <p className="max-w-3xl text-xs leading-5 text-slate-500">
          All medical images shown in this portfolio are anonymized, synthetic,
          or replaced with representative placeholders for privacy protection.
        </p>
        <a className="text-med-cyan transition hover:text-white" href="mailto:hello@example.com">
          Contact
        </a>
      </div>
    </footer>
  );
}
