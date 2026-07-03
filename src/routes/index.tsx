import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Leaf, Wheat, Timer, Zap, Check, X, ShoppingBasket, Coffee,
  Cookie, Cake, Sparkles, ShieldCheck, Mail, Lock, ChevronDown, Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function ImagePlaceholder({ label, className = "" }: { label?: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl bg-muted border border-dashed border-border text-muted-foreground text-sm font-medium ${className}`}
    >
      <span className="opacity-70">{label ?? "imagen aquí"}</span>
    </div>
  );
}

function CTAButton({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "light" }) {
  const styles =
    variant === "primary"
      ? "bg-olive text-primary-foreground hover:bg-olive-deep"
      : "bg-cream text-olive-deep hover:bg-sand";
  return (
    <a
      href="#pago"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold shadow-soft transition-all hover:shadow-lg hover:-translate-y-0.5 ${styles}`}
    >
      {children}
      <Sparkles className="h-4 w-4" />
    </a>
  );
}

const painPoints = [
  "¿Terminás de comer y sentís la panza pesada o hinchada, incluso cuando intentás cuidarte?",
  "¿Querés comer mejor pero ya no sabés qué cocinar para sentirte bien?",
  "¿Sentís que hacés el esfuerzo de cuidarte pero igual seguís con falta de energía y pesadez?",
  "¿Empezás a comer saludable pero terminás abandonando porque no es práctico?",
  "¿Terminás comiendo cualquier cosa por ansiedad, cansancio o falta de ideas?",
];

const needCards = [
  { title: "Comidas antiinflamatorias", desc: "Que te dejan satisfecha y liviana." },
  { title: "Desayunos y meriendas", desc: "Para arrancar el día con más energía." },
  { title: "Comidas rápidas", desc: "Listas en 15 minutos." },
  { title: "Snacks inteligentes", desc: "Para evitar picar cualquier cosa." },
  { title: "Postres sin azúcar", desc: "Para disfrutar sin culpa." },
  { title: "Reemplazos simples", desc: "Cómo reemplazar azúcar y harinas sin dejar de disfrutar." },
];

const receiveCards = [
  { icon: Leaf, title: "+150 recetas saludables", desc: "Variedad para toda la semana." },
  { icon: Wheat, title: "Sin gluten y sin azúcar", desc: "Pensado para desinflamar." },
  { icon: Timer, title: "Organización semanal", desc: "Planificá sin estrés." },
  { icon: Cookie, title: "Snacks y postres", desc: "Antojos cuidados." },
];

const bonuses = [
  "Digestión Liviana (recetas bajas en FODMAP y sin gluten)",
  "Disfrutar Sin Lácteos",
  "Snacks Rápidos para Freidora de Aire",
  "Pan Casero Saludable",
  "Desayunos Altos en Proteína",
  "Almuerzos Saludables y Fáciles",
  "Cenas Ligeras y Rápidas",
  "Lista de Alimentos y Hábitos Saludables",
  "Bono Sorpresa (se revela con tu compra)",
];

const faqs = [
  { q: "¿Necesito saber cocinar para usar esta guía?", a: "No. Todas las recetas están explicadas paso a paso, con ingredientes simples y técnicas fáciles. Si sabés hervir agua, podés cocinarlas." },
  { q: "¿Los ingredientes son fáciles de conseguir?", a: "Sí. Priorizamos ingredientes que encontrás en cualquier supermercado o dietética de barrio, sin nombres raros ni productos importados." },
  { q: "¿Cuándo recibo el acceso?", a: "El acceso es inmediato. Apenas confirmes el pago, recibís el ebook y los bonos en tu correo." },
  { q: "¿Las recetas son sin gluten y sin azúcar?", a: "Sí, todas. Además indicamos cuando son sin lácteos o bajas en FODMAP para que puedas adaptarlas a vos." },
  { q: "¿En cuánto tiempo puedo notar cambios?", a: "La mayoría nota menos hinchazón y más energía en los primeros días. La constancia es la clave." },
  { q: "¿Tiene garantía?", a: "Sí, garantía total de 30 días. Si no quedás conforme, te devolvemos el 100% del dinero sin preguntas." },
];

function LandingPage() {
  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative bg-gradient-to-b from-cream via-background to-secondary/40 px-5 pt-16 pb-20 sm:pt-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-olive/10 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-olive-deep">
                <Leaf className="h-3.5 w-3.5" /> Ebook antiinflamatorio
              </span>
              <h1 className="mt-5 font-serif text-4xl leading-[1.05] text-earth-dark sm:text-5xl md:text-6xl">
                ¿Cansada de la <em className="not-italic text-olive-deep">hinchazón</em> y la falta de energía?
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Decile adiós a la inflamación con recetas fáciles y deliciosas que te ayudan a sentirte más liviana desde los primeros días.
              </p>

              <div className="mt-8 rounded-2xl border border-gold-soft/60 bg-cream/80 p-5 shadow-soft">
                <p className="font-serif text-lg text-earth-dark sm:text-xl">
                  Más de <strong className="text-olive-deep">150 recetas rápidas y antiinflamatorias</strong> para dejar de sufrir pensando qué cocinar.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { icon: Cake, label: "Sin Azúcar" },
                  { icon: Wheat, label: "Sin Gluten" },
                  { icon: Timer, label: "Fáciles y Rápidas" },
                  { icon: Zap, label: "Más Energía" },
                ].map((f) => (
                  <div key={f.label} className="flex flex-col items-center gap-2 rounded-2xl bg-card px-3 py-4 shadow-card">
                    <f.icon className="h-6 w-6 text-olive" />
                    <span className="text-center text-xs font-semibold text-earth-dark">{f.label}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 font-serif text-xl italic text-olive-deep">
                Comé rico, sentite mejor, viví con más energía.
              </p>

              <div className="mt-6 flex justify-center md:justify-start">
                <CTAButton>Quiero desinflamarme</CTAButton>
              </div>
            </div>

            <div className="order-first md:order-last">
              <ImagePlaceholder
                label="imagen aquí — mockup ebook + celular"
                className="aspect-[4/5] w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-background px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-olive">¿Te suena familiar?</span>
            <h2 className="mt-3 font-serif text-3xl text-earth-dark sm:text-4xl md:text-5xl">
              El problema no es la falta de voluntad
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Es sentirte inflamada después de comer, no saber qué cocinar y terminar cansada de intentar cuidarte sin ver cambios reales.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {painPoints.map((p, i) => (
              <div key={i} className="rounded-2xl bg-card p-6 shadow-card border border-border/60">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-danger/10 text-danger">
                    <X className="h-4 w-4" />
                  </div>
                  <p className="text-base leading-relaxed text-earth-dark">{p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARACIÓN */}
      <section className="bg-secondary/40 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-serif text-3xl text-earth-dark sm:text-4xl md:text-5xl">
              La diferencia no está en hacer dieta
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Está en tener recetas simples, organizadas y deliciosas que puedas sostener incluso en semanas caóticas, sin pasar hambre ni sentir que hacés sacrificios.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border-2 border-danger/30 bg-danger/5 p-7">
              <h3 className="font-serif text-2xl text-danger">Dietas extremas</h3>
              <ul className="mt-5 space-y-3">
                {["Difíciles de sostener", "Te dejan sin ideas", "Generan ansiedad y restricción", "Volvés a los mismos hábitos"].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-danger" />
                    <span className="text-earth-dark">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border-2 border-olive/30 bg-olive/5 p-7">
              <h3 className="font-serif text-2xl text-olive-deep">Alimentación antiinflamatoria práctica</h3>
              <ul className="mt-5 space-y-3">
                {["Recetas fáciles y ricas", "Ingredientes simples", "Menos hinchazón y más energía", "Sostenible sin vivir a dieta"].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-olive" />
                    <span className="text-earth-dark">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TODO LO QUE NECESITAS */}
      <section className="bg-background px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mx-auto max-w-3xl text-center font-serif text-3xl text-earth-dark sm:text-4xl md:text-5xl">
            Todo lo que necesitás para sentirte más liviana y dejar de sufrir pensando qué cocinar
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {needCards.map((c) => (
              <div key={c.title} className="rounded-3xl bg-card p-5 shadow-card border border-border/50">
                <ImagePlaceholder className="aspect-[4/3] w-full" />
                <div className="mt-5 px-1 pb-2">
                  <h3 className="font-serif text-xl text-earth-dark">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTO Y PRECIO */}
      <section className="bg-gradient-to-b from-secondary/50 to-cream px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <ImagePlaceholder label="imagen aquí — ebook" className="aspect-[4/5] w-full max-w-sm mx-auto" />
            <div>
              <span className="inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-earth-dark">
                Oferta
              </span>
              <h2 className="mt-4 font-serif text-4xl text-earth-dark sm:text-5xl">Alivio en Cada Bocado</h2>
              <p className="mt-4 text-muted-foreground">
                Más de 150 recetas sin gluten y sin azúcar para desinflamarte, sentirte más liviana y volver a disfrutar cada comida.
              </p>

              <div className="mt-6 flex items-baseline gap-4">
                <span className="text-lg text-muted-foreground line-through">$39.900</span>
                <span className="font-serif text-5xl font-semibold text-olive-deep">$19.900</span>
                <span className="text-sm font-semibold text-earth">ARS</span>
              </div>

              <div className="mt-8">
                <CTAButton>Quiero desinflamarme</CTAButton>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="font-semibold">Pagá con:</span>
                {["Visa", "Mastercard", "Mercado Pago"].map((m) => (
                  <span key={m} className="rounded-md border border-border bg-card px-3 py-1.5 font-medium text-earth-dark">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTÍA */}
      <section className="bg-background px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center gap-5 rounded-3xl border-2 border-olive/20 bg-olive/5 p-8 text-center sm:flex-row sm:text-left">
            <ShieldCheck className="h-14 w-14 shrink-0 text-olive-deep" />
            <p className="font-serif text-xl text-earth-dark sm:text-2xl">
              Garantía de <strong>30 días</strong> con devolución total. Si no quedás conforme, te devolvemos el 100% del dinero, sin preguntas.
            </p>
          </div>
        </div>
      </section>

      {/* QUÉ VAS A RECIBIR */}
      <section className="bg-secondary/30 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mx-auto max-w-3xl text-center font-serif text-3xl text-earth-dark sm:text-4xl md:text-5xl">
            Todo pensado para que comer saludable se sienta simple
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {receiveCards.map((c) => (
              <div key={c.title} className="rounded-3xl bg-card p-7 text-center shadow-card border border-border/50">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-olive/10 text-olive-deep">
                  <c.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-serif text-xl text-earth-dark">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONOS */}
      <section className="bg-background px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-block rounded-full bg-gold/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-earth-dark">
              Bonos incluidos
            </span>
            <h2 className="mt-4 font-serif text-3xl text-earth-dark sm:text-4xl md:text-5xl">
              Además, <em className="not-italic text-olive-deep">TODO</em> esto gratis
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Con tu compra recibís estos bonos sin costo adicional.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bonuses.map((b) => (
              <div key={b} className="group relative rounded-3xl bg-card p-5 shadow-card border border-border/50">
                <div className="absolute right-4 top-4 z-10 rounded-full bg-danger px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-sm">
                  Hoy Gratis
                </div>
                <ImagePlaceholder label="imagen aquí — portada" className="aspect-[3/4] w-full" />
                <p className="mt-5 px-1 pb-2 font-serif text-lg leading-snug text-earth-dark">{b}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-gold-soft/70 bg-gold/10 p-8 text-center">
            <p className="font-serif text-2xl text-earth-dark sm:text-3xl">
              Un pack completo, hoy incluido <strong className="text-olive-deep">sin costo</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* OTROS LIBROS */}
      <section className="bg-secondary/30 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-serif text-3xl text-earth-dark sm:text-4xl">Otros libros de nuestra biblioteca</h2>
          <div className="mt-10 grid gap-8 rounded-3xl border border-border bg-card p-7 shadow-card md:grid-cols-[240px_1fr] md:items-center">
            <ImagePlaceholder className="aspect-[3/4] w-full" />
            <div>
              <h3 className="font-serif text-2xl text-earth-dark">Hipotiroidismo — Edición Completa</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Los dos libros juntos: la guía de nutrición funcional para el hipotiroidismo más el contenido avanzado sobre Hashimoto y gluten. Todo para acompañar tu bienestar, en una sola edición.
              </p>
              <p className="mt-5 font-serif text-3xl text-olive-deep">$60.000 <span className="text-sm text-earth">ARS</span></p>
              <a
                href="https://pay.hotmart.com/O106587208U?off=1tpjbfw1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-earth-dark px-6 py-3 text-sm font-semibold text-earth-dark transition-colors hover:bg-earth-dark hover:text-primary-foreground"
              >
                Ver más
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-background px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="font-serif text-3xl text-earth-dark sm:text-4xl md:text-5xl">
              Personas que ya dejaron de sentirse inflamadas
            </h2>
            <div className="mt-5 flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <span className="font-serif text-2xl text-earth-dark">4,9/5</span>
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-3xl border border-border bg-card p-6 shadow-card">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-4 h-24 rounded-xl bg-muted/60 p-3 text-xs text-muted-foreground italic">
                  Reseña aquí — próximamente
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted" />
                  <div className="text-sm">
                    <p className="font-semibold text-earth-dark">Nombre Apellido</p>
                    <p className="text-xs text-muted-foreground">Clienta verificada</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/30 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-serif text-3xl text-earth-dark sm:text-4xl md:text-5xl">Preguntas frecuentes</h2>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* PAGO */}
      <section id="pago" className="bg-background px-5 py-20 scroll-mt-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border-2 border-olive/30 bg-olive/10 p-6 text-center">
            <p className="font-serif text-xl text-earth-dark sm:text-2xl">
              Estás a un paso de volver a comer rico <strong className="text-olive-deep">SIN sentirte inflamada</strong> después.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
            <iframe
              src="https://pay.hotmart.com/T106579712X?checkoutMode=10"
              title="Checkout Hotmart — Alivio en Cada Bocado"
              className="w-full"
              style={{ height: "1200px", border: "0" }}
              allow="payment"
              loading="lazy"
            />
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-2xl bg-secondary/60 p-5 text-center text-sm text-earth-dark sm:flex-row sm:gap-6">
            <span className="flex items-center gap-2"><Lock className="h-4 w-4 text-olive" /> Pago 100% seguro</span>
            <span className="hidden text-border sm:inline">·</span>
            <span className="flex items-center gap-2"><Mail className="h-4 w-4 text-olive" /> Acceso inmediato por email</span>
            <span className="hidden text-border sm:inline">·</span>
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-olive" /> Garantía de 30 días</span>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="bg-earth-dark px-5 py-20 text-cream">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
            Empezá hoy a sentirte más liviana después de cada comida
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-cream/80">
            Más de 150 recetas sin gluten y sin azúcar para dejar de inflamarte y volver a disfrutar la comida.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton variant="light">Quiero desinflamarme</CTAButton>
          </div>
          <p className="mt-6 text-xs text-cream/70">
            Pago seguro · Acceso inmediato · Garantía 30 días
          </p>
        </div>
      </section>

      <footer className="bg-earth-dark px-5 py-8 text-center text-xs text-cream/50 border-t border-cream/10">
        © {new Date().getFullYear()} Alivio en Cada Bocado. Todos los derechos reservados.
      </footer>
    </main>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-serif text-lg text-earth-dark">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-olive transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
          {a}
        </div>
      )}
    </div>
  );
}
