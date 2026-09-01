import { useState } from "react";
import { business } from "@/lib/site";
import { cn } from "@/lib/utils";
import { BtnSubmit } from "./ui";

const field =
  "h-13 w-full border border-current/20 bg-transparent px-4 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground focus:border-brand";

export type LeadFormVariant = "hail" | "info" | "job";

export function LeadForm({
  variant = "hail",
  title,
  intro,
  cta,
  className,
}: {
  variant?: LeadFormVariant;
  title?: string;
  intro?: string;
  cta?: string;
  className?: string;
}) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className={cn("border border-brand/40 bg-brand/8 p-10 text-center", className)}>
        <h3 className="h-card">Richiesta inviata.</h3>
        <p className="mt-4 text-muted-foreground">
          Ti ricontattiamo il prima possibile. Se hai urgenza chiamaci allo{" "}
          <a href={business.phoneHref} className="font-bold text-brand">
            {business.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      className={cn("space-y-4", className)}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div>
        <h3 className="h-card">
          {title ?? (variant === "hail" ? "Hai subito una grandinata?" : "Scrivici")}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {intro ??
            "Compila i campi essenziali: bastano meno di un minuto e qualche foto per iniziare."}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nome e cognome" name="nome" required autoComplete="name" />
        <Field
          label="Telefono"
          name="telefono"
          type="tel"
          required
          autoComplete="tel"
          hint="Il modo più veloce per aiutarti"
          highlight
        />
      </div>

      <Field label="Email" name="email" type="email" required autoComplete="email" />

      {variant === "hail" && (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Modello auto" name="modello" placeholder="Es. BMW Serie 3" />
          <Field label="Quando è avvenuta la grandinata?" name="data" type="date" />
        </div>
      )}

      {variant === "job" && (
        <Field label="Esperienza nel settore" name="esperienza" placeholder="Es. carrozziere da 3 anni" />
      )}

      {variant !== "info" && (
        <label className="block">
          <span className="mb-2 block text-[0.7rem] font-extrabold uppercase tracking-[0.18em]">
            {variant === "job" ? "Curriculum" : "Fotografie dell'auto"}
          </span>
          <input
            type="file"
            name="allegati"
            multiple={variant === "hail"}
            accept={variant === "job" ? ".pdf,.doc,.docx" : "image/*"}
            className="w-full border border-dashed border-current/25 bg-transparent p-4 text-sm file:mr-4 file:border-0 file:bg-brand file:px-4 file:py-2 file:text-xs file:font-extrabold file:uppercase file:tracking-[0.14em] file:text-[oklch(0.16_0.01_168)]"
          />
        </label>
      )}

      <label className="block">
        <span className="mb-2 block text-[0.7rem] font-extrabold uppercase tracking-[0.18em]">
          Messaggio {variant !== "job" && "(opzionale)"}
        </span>
        <textarea
          name="messaggio"
          rows={4}
          className="w-full border border-current/20 bg-transparent px-4 py-3 text-base outline-none transition-colors focus:border-brand"
        />
      </label>

      <label className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
        <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-[#00aa77]" />
        Autorizzo il trattamento dei dati per rispondere alla richiesta.
      </label>

      <BtnSubmit type="submit" className="w-full">
        {cta ?? "Richiedi una valutazione"}
      </BtnSubmit>

      <p className="text-center text-xs text-muted-foreground">
        Preferisci parlare?{" "}
        <a href={business.phoneHref} className="font-bold text-brand">
          {business.phone}
        </a>{" "}
        ·{" "}
        <a href={business.whatsapp} className="font-bold text-brand">
          WhatsApp
        </a>
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  hint,
  highlight,
  ...rest
}: {
  label: string;
  name: string;
  hint?: string;
  highlight?: boolean;
} & React.ComponentProps<"input">) {
  return (
    <label className="block">
      <span
        className={cn(
          "mb-2 block text-[0.7rem] font-extrabold uppercase tracking-[0.18em]",
          highlight && "text-brand",
        )}
      >
        {label}
      </span>
      <input name={name} className={cn(field, highlight && "border-brand/50")} {...rest} />
      {hint && <span className="mt-1.5 block text-xs text-muted-foreground">{hint}</span>}
    </label>
  );
}
