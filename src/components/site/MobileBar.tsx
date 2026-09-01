import { Link } from "@tanstack/react-router";
import { business } from "@/lib/site";

export function MobileBar() {
  return (
    <div className="surface-dark fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/12 bg-carbon/95 backdrop-blur-xl lg:hidden">
      <a
        href={business.phoneHref}
        className="flex min-h-[62px] flex-col items-center justify-center gap-1 border-r border-white/10 text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-offwhite"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6 3z" />
        </svg>
        Chiama
      </a>
      <a
        href={business.whatsapp}
        className="flex min-h-[62px] flex-col items-center justify-center gap-1 border-r border-white/10 text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-offwhite"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.4 3.2l-4.9 1.3z" />
          <path d="M8.8 9.2c.4 2.6 2.9 4.9 5.5 5.4l1.2-1.5 2 .9v1.6c-3.6.6-7.9-2.9-8.9-6.9l1.4-.9z" />
        </svg>
        WhatsApp
      </a>
      <Link
        to="/contatti"
        className="flex min-h-[62px] flex-col items-center justify-center gap-1 bg-brand text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-[oklch(0.16_0.01_168)]"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 5h16v14H4z" />
          <path d="M4 6l8 6 8-6" />
        </svg>
        Valutazione
      </Link>
    </div>
  );
}
