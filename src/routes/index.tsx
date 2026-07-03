import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Leaf, Wheat, Timer, Zap, Check, X, ShieldCheck, Mail, Lock,
  ChevronDown, Star, Sparkles, Clock, HeartPulse, UtensilsCrossed,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

/* ---------- Reusable pieces ---------- */

function ImagePlaceholder({ label = "imagen aquí", className = "" }: { label?: string; className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center rounded-lg bg-sand/60 border border-dashed border-olive/30 text-olive-deep/60 text-[11px] uppercase tracking-[0.2em] font-medium overflow-hidden ${className}`}
    >
      <div className="absolute inset-3 rounded-md border border-olive/10" />
      <span className="relative">{label}</span>
    </div>
  );
}

function ProductImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <img src={encodeURI(src)} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}

function CTAButton({
  children,
  variant = "primary",
  size = "md",
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "cream";
  size?: "md" | "lg";
}) {
  const styles = {
    primary: "bg-olive-deep text-cream hover:bg-ink",
    outline: "border-2 border-olive-deep text-olive-deep hover:bg-olive-deep hover:text-cream",
    cream: "bg-cream text-olive-deep hover:bg-sand",
  }[variant];
  const sizes = size === "lg" ? "px-10 py-5 text-base" : "px-8 py-4 text-sm";
  return (
    <a
      href="#pago"
      className={`group inline-flex items-center justify-center gap-3 rounded-full font-semibold tracking-wide uppercase transition-all duration-300 hover:-translate-y-0.5 shadow-soft ${sizes} ${styles}`}
    >
      {children}
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-current transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="divider-leaf mb-4">
      <span className="eyebrow">{children}</span>
    </div>
  );
}

/* ---------- Content ---------- */

const painPoints = [
  "Terminás de comer y sentís la panza pesada o hinchada, incluso cuando intentás cuidarte.",
  "Querés comer mejor pero ya no sabés qué cocinar para sentirte bien.",
  "Hacés el esfuerzo de cuidarte pero seguís con falta de energía y pesadez.",
  "Empezás a comer saludable pero terminás abandonando porque no es práctico.",
  "Terminás comiendo cualquier cosa por ansiedad, cansancio o falta de ideas.",
];

const needCards = [
  { icon: UtensilsCrossed, title: "Comidas antiinflamatorias", desc: "Que te dejan satisfecha y liviana." },
  { icon: Coffee, title: "Desayunos y meriendas", desc: "Para arrancar el día con más energía." },
  { icon: Timer, title: "Comidas rápidas", desc: "Listas en 15 minutos." },
  { icon: Leaf, title: "Snacks inteligentes", desc: "Para evitar picar cualquier cosa." },
  { icon: Sparkles, title: "Postres sin azúcar", desc: "Para disfrutar sin culpa." },
  { icon: HeartPulse, title: "Reemplazos simples", desc: "Sin azúcar ni harinas, sin renunciar al sabor." },
];

const receiveCards = [
  { icon: Leaf, title: "+150 recetas saludables", desc: "Variedad para toda la semana." },
  { icon: Wheat, title: "Sin gluten y sin azúcar", desc: "Pensado para desinflamar." },
  { icon: Clock, title: "Organización semanal", desc: "Planificá sin estrés." },
  { icon: Sparkles, title: "Snacks y postres", desc: "Antojos cuidados." },
];

const bonuses = [
  { n: "01", title: "Digestión Liviana", tag: "Bajo FODMAP · sin gluten", img: "/images/bajo en fodmap bonus.png" },
  { n: "02", title: "Disfrutar Sin Lácteos", tag: "Recetas sin lácteos", img: "/images/el placer sin lacteos bonus.png" },
  { n: "03", title: "Snacks para Freidora de Aire", tag: "Rápidos y crocantes", img: "/images/snacks freidora de aire bonus.png" },
  { n: "04", title: "Pan Casero Saludable", tag: "Sin harinas refinadas", img: "/images/pan casero bonus.png" },
  { n: "05", title: "Desayunos Altos en Proteína", tag: "Energía sostenida" },
  { n: "06", title: "Almuerzos Saludables y Fáciles", tag: "Para toda la semana" },
  { n: "07", title: "Cenas Ligeras y Rápidas", tag: "Livianas y sabrosas" },
  { n: "08", title: "Lista de Alimentos y Hábitos", tag: "Guía práctica" },
  { n: "09", title: "Bono Sorpresa", tag: "Se revela con tu compra" },
];

const faqs = [
  { q: "¿Necesito saber cocinar para usar esta guía?", a: "No. Todas las recetas están explicadas paso a paso, con ingredientes simples y técnicas fáciles. Si sabés hervir agua, podés cocinarlas." },
  { q: "¿Los ingredientes son fáciles de conseguir?", a: "Sí. Priorizamos ingredientes que encontrás en cualquier supermercado o dietética de barrio, sin nombres raros ni productos importados." },
  { q: "¿Cuándo recibo el acceso?", a: "El acceso es inmediato. Apenas confirmes el pago, recibís el ebook y los bonos en tu correo." },
  { q: "¿Las recetas son sin gluten y sin azúcar?", a: "Sí, todas. Además indicamos cuando son sin lácteos o bajas en FODMAP para que puedas adaptarlas a vos." },
  { q: "¿En cuánto tiempo puedo notar cambios?", a: "La mayoría nota menos hinchazón y más energía en los primeros días. La constancia es la clave." },
  { q: "¿Tiene garantía?", a: "Sí, garantía total de 30 días. Si no quedás conforme, te devolvemos el 100% del dinero sin preguntas." },
];

/* ---------- Page ---------- */

function LandingPage() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      <TopBar />
      <Hero />
      <MarqueeStrip />
      <PainSection />
      <CompareSection />
      <NeedsSection />
      <ProductSection />
      <GuaranteeSection />
      <ReceiveSection />
      <BonusesSection />
      <OtherBooksSection />
      <TestimonialsSection />
      <FAQSection />
      <PaymentSection />
      <ClosingSection />
      <Footer />
    </main>
  );
}

/* ---------- Sections ---------- */

function TopBar() {
  return (
    <header className="border-b border-border/60 bg-cream/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="container-editorial flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-olive" />
          <span className="font-serif text-lg text-olive-deep">Alivio en Cada Bocado</span>
        </div>
        <a href="#pago" className="hidden sm:inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-olive-deep hover:text-olive transition-colors">
          Quiero el ebook →
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream to-sand/40">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-olive-deep blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-olive blur-3xl" />
      </div>

      <div className="container-editorial relative py-16 sm:py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow">Ebook · Nutrición antiinflamatoria</span>
            <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.02] text-olive-deep sm:text-6xl lg:text-[4.5rem]">
              ¿Cansada de la <em className="italic text-olive">hinchazón</em> y la falta de energía?
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-earth-dark/80">
              Decile adiós a la inflamación con recetas fáciles y deliciosas que te ayudan a sentirte más liviana desde los primeros días.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <CTAButton size="lg">Quiero desinflamarme</CTAButton>
              <div className="flex items-center gap-2 text-sm text-earth">
                <ShieldCheck className="h-4 w-4 text-olive" />
                Garantía 30 días · Acceso inmediato
              </div>
            </div>

            <div className="mt-14 border-t border-olive/15 pt-8">
              <p className="font-serif text-xl italic text-olive-deep sm:text-2xl">
                "Comé rico, sentite mejor, viví con más energía."
              </p>
            </div>
          </div>

          <div className="relative">
            <ProductImage
              src="/images/alivio en cada bocado.png"
              alt="Ebook Alivio en Cada Bocado — mockup libro y celular"
              className="aspect-[4/5] w-full max-w-md mx-auto shadow-lift"
            />
            <div className="absolute -bottom-6 -left-4 sm:-left-8 max-w-[240px] rounded-lg bg-cream p-4 shadow-soft border border-olive/10">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl text-olive-deep">+150</span>
                <span className="text-xs uppercase tracking-widest text-earth">recetas</span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-earth-dark/80">
                rápidas y antiinflamatorias para dejar de sufrir pensando qué cocinar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueeStrip() {
  const items = [
    { icon: Sparkles, label: "Sin Azúcar" },
    { icon: Wheat, label: "Sin Gluten" },
    { icon: Timer, label: "Fáciles y Rápidas" },
    { icon: Zap, label: "Más Energía" },
  ];
  return (
    <section className="bg-olive-deep text-cream">
      <div className="container-editorial grid grid-cols-2 gap-y-6 py-10 sm:grid-cols-4">
        {items.map((it) => (
          <div key={it.label} className="flex items-center justify-center gap-3">
            <it.icon className="h-5 w-5 text-gold" />
            <span className="text-sm font-medium tracking-wider uppercase">{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function PainSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-editorial">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionEyebrow>¿Te suena familiar?</SectionEyebrow>
            <h2 className="font-serif text-4xl text-olive-deep sm:text-5xl lg:text-6xl">
              El problema no es la falta de voluntad.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-earth-dark/80">
              Es sentirte inflamada después de comer, no saber qué cocinar y terminar cansada de intentar cuidarte sin ver cambios reales.
            </p>
          </div>

          <div className="space-y-4">
            {painPoints.map((p, i) => (
              <div
                key={i}
                className="group flex items-start gap-5 border-t border-olive/15 pt-5 pb-1 transition-colors hover:border-olive-deep/40"
              >
                <span className="font-serif text-2xl text-olive/60 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-relaxed text-earth-dark sm:text-lg">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CompareSection() {
  return (
    <section className="bg-sand/50 py-24 sm:py-32">
      <div className="container-editorial">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>La diferencia</SectionEyebrow>
          <h2 className="font-serif text-4xl text-olive-deep sm:text-5xl lg:text-6xl">
            No está en hacer <em className="italic text-olive">dieta</em>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-earth-dark/80">
            Está en tener recetas simples, organizadas y deliciosas que puedas sostener incluso en semanas caóticas, sin pasar hambre ni sentir que hacés sacrificios.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <div className="rounded-lg bg-cream p-8 sm:p-10 border border-danger/20">
            <span className="eyebrow" style={{ color: "var(--danger)" }}>Dietas extremas</span>
            <h3 className="mt-3 font-serif text-2xl text-danger">Lo que no funciona</h3>
            <ul className="mt-8 space-y-4">
              {["Difíciles de sostener", "Te dejan sin ideas", "Generan ansiedad y restricción", "Volvés a los mismos hábitos"].map((t) => (
                <li key={t} className="flex items-start gap-3 border-b border-danger/10 pb-4 last:border-0">
                  <X className="mt-1 h-4 w-4 shrink-0 text-danger" />
                  <span className="text-earth-dark">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-olive-deep p-8 sm:p-10 text-cream shadow-lift">
            <span className="eyebrow" style={{ color: "var(--gold)" }}>Alimentación antiinflamatoria</span>
            <h3 className="mt-3 font-serif text-2xl text-cream">Lo que sí funciona</h3>
            <ul className="mt-8 space-y-4">
              {["Recetas fáciles y ricas", "Ingredientes simples", "Menos hinchazón y más energía", "Sostenible sin vivir a dieta"].map((t) => (
                <li key={t} className="flex items-start gap-3 border-b border-cream/15 pb-4 last:border-0">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-gold" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function NeedsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-editorial">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>Todo lo que necesitás</SectionEyebrow>
          <h2 className="font-serif text-4xl text-olive-deep sm:text-5xl lg:text-6xl">
            Para sentirte más liviana y dejar de sufrir pensando qué cocinar.
          </h2>
        </div>

        <div className="mt-20 space-y-16 lg:space-y-24">
          {needCards.map((c, i) => {
            const reversed = i % 2 === 1;
            return (
              <article
                key={c.title}
                className="grid gap-8 lg:grid-cols-2 lg:gap-16 lg:items-center"
              >
                <div className={reversed ? "lg:order-2" : ""}>
                  <ImagePlaceholder className="aspect-[4/3] w-full shadow-card" />
                </div>
                <div className={reversed ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-4">
                    <span className="number-badge">{String(i + 1).padStart(2, "0")}</span>
                    <c.icon className="h-6 w-6 text-olive" />
                  </div>
                  <h3 className="mt-5 font-serif text-3xl text-olive-deep sm:text-4xl">{c.title}</h3>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-earth-dark/80">{c.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductSection() {
  return (
    <section className="bg-gradient-to-b from-sand/40 to-cream py-24 sm:py-32">
      <div className="container-editorial">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <div className="relative">
            <ProductImage
              src="/images/alivio en cada bocado.png"
              alt="Ebook Alivio en Cada Bocado — portada"
              className="aspect-[4/5] w-full max-w-md mx-auto shadow-lift"
            />
            <div className="absolute top-6 -right-2 sm:right-6 rotate-6 rounded-full bg-danger px-5 py-2 text-xs font-bold uppercase tracking-widest text-cream shadow-soft">
              Oferta
            </div>
          </div>

          <div>
            <SectionEyebrow>El ebook</SectionEyebrow>
            <h2 className="font-serif text-5xl text-olive-deep sm:text-6xl lg:text-7xl">
              Alivio en Cada Bocado
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-earth-dark/80">
              Más de 150 recetas sin gluten y sin azúcar para desinflamarte, sentirte más liviana y volver a disfrutar cada comida.
            </p>

            <div className="mt-10 flex items-end gap-5 border-t border-b border-olive/15 py-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-earth">Antes</p>
                <p className="mt-1 text-2xl text-earth line-through">$39.900</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-olive">Hoy</p>
                <p className="mt-1 font-serif text-6xl leading-none text-olive-deep">
                  $19.900 <span className="text-lg text-earth font-sans">ARS</span>
                </p>
              </div>
            </div>

            <div className="mt-10">
              <CTAButton size="lg">Quiero desinflamarme</CTAButton>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-earth">
              <span className="uppercase tracking-widest">Pagá con:</span>
              {["Visa", "Mastercard", "Mercado Pago"].map((m) => (
                <span key={m} className="rounded-full border border-olive/25 bg-cream px-4 py-1.5 font-medium text-olive-deep">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GuaranteeSection() {
  return (
    <section className="py-16">
      <div className="container-editorial">
        <div className="mx-auto max-w-4xl rounded-lg border-2 border-olive/20 bg-cream p-8 sm:p-12">
          <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-olive-deep text-cream">
              <ShieldCheck className="h-10 w-10" />
            </div>
            <div>
              <span className="eyebrow">Sin riesgo</span>
              <p className="mt-2 font-serif text-2xl leading-snug text-olive-deep sm:text-3xl">
                Garantía de 30 días con devolución total.
              </p>
              <p className="mt-2 text-earth-dark/80">
                Si no quedás conforme, te devolvemos el 100% del dinero, sin preguntas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReceiveSection() {
  return (
    <section className="bg-sand/50 py-24 sm:py-32">
      <div className="container-editorial">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>Qué vas a recibir</SectionEyebrow>
          <h2 className="font-serif text-4xl text-olive-deep sm:text-5xl lg:text-6xl">
            Todo pensado para que comer saludable se sienta simple.
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-lg bg-olive/15 sm:grid-cols-2 lg:grid-cols-4">
          {receiveCards.map((c) => (
            <div key={c.title} className="bg-cream p-8 transition-colors hover:bg-cream/60">
              <c.icon className="h-8 w-8 text-olive" strokeWidth={1.5} />
              <h3 className="mt-6 font-serif text-2xl text-olive-deep">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-earth-dark/80">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BonusesSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-editorial">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-gold/40 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-olive-deep">
            Bonos incluidos
          </span>
          <h2 className="mt-5 font-serif text-4xl text-olive-deep sm:text-5xl lg:text-6xl">
            Además, <em className="italic text-olive">todo</em> esto gratis.
          </h2>
          <p className="mt-5 text-lg text-earth-dark/80">
            Con tu compra recibís estos bonos sin costo adicional.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bonuses.map((b) => (
            <article key={b.n} className="group relative flex flex-col overflow-hidden rounded-lg bg-cream border border-olive/10 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift">
              <div className="absolute top-4 right-4 z-10 rounded-full bg-olive-deep px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cream">
                Hoy gratis
              </div>
              {b.img ? (
                <ProductImage
                  src={b.img}
                  alt={`Bono — ${b.title}`}
                  className="aspect-[3/4] w-full rounded-none border-b border-olive/10"
                />
              ) : (
                <ImagePlaceholder label="portada" className="aspect-[3/4] w-full rounded-none border-0 border-b border-olive/10" />
              )}
              <div className="p-6">
                <span className="font-serif text-sm text-olive/60 tabular-nums">{b.n}</span>
                <h3 className="mt-2 font-serif text-xl leading-tight text-olive-deep">{b.title}</h3>
                <p className="mt-2 text-xs uppercase tracking-widest text-earth">{b.tag}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-lg bg-olive-deep p-10 text-center text-cream sm:p-14">
          <Sparkles className="mx-auto h-8 w-8 text-gold" />
          <p className="mt-5 font-serif text-3xl leading-snug sm:text-4xl">
            Un pack completo, hoy incluido <em className="italic text-gold">sin costo</em>.
          </p>
        </div>
      </div>
    </section>
  );
}

function OtherBooksSection() {
  return (
    <section className="bg-sand/40 py-24 sm:py-32">
      <div className="container-editorial max-w-5xl">
        <div className="text-center">
          <SectionEyebrow>Nuestra biblioteca</SectionEyebrow>
          <h2 className="font-serif text-3xl text-olive-deep sm:text-4xl">Otros libros de nuestra biblioteca</h2>
        </div>

        <article className="mt-12 grid gap-10 rounded-lg bg-cream p-6 shadow-card md:grid-cols-[260px_1fr] md:items-center md:p-10">
          <ProductImage
            src="/images/hipotiroidismo edicion completa.png"
            alt="Hipotiroidismo — Edición Completa"
            className="aspect-[3/4] w-full"
          />
          <div>
            <span className="eyebrow">Edición completa</span>
            <h3 className="mt-3 font-serif text-3xl text-olive-deep sm:text-4xl">Hipotiroidismo — Edición Completa</h3>
            <p className="mt-4 leading-relaxed text-earth-dark/80">
              Los dos libros juntos: la guía de nutrición funcional para el hipotiroidismo más el contenido avanzado sobre Hashimoto y gluten. Todo para acompañar tu bienestar, en una sola edición.
            </p>
            <div className="mt-6 flex flex-wrap items-baseline gap-4">
              <p className="font-serif text-4xl text-olive-deep">$60.000 <span className="text-sm text-earth font-sans">ARS</span></p>
            </div>
            <a
              href="https://pay.hotmart.com/O106587208U?off=1tpjbfw1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 rounded-full border-2 border-olive-deep px-7 py-3 text-xs font-semibold uppercase tracking-widest text-olive-deep transition-colors hover:bg-olive-deep hover:text-cream"
            >
              Ver más →
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-editorial">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>Testimonios</SectionEyebrow>
          <h2 className="font-serif text-4xl text-olive-deep sm:text-5xl lg:text-6xl">
            Personas que ya dejaron de sentirse inflamadas.
          </h2>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-cream border border-olive/15 px-5 py-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-serif text-xl text-olive-deep">4,9/5</span>
            <span className="text-xs uppercase tracking-widest text-earth">Reseñas verificadas</span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-col rounded-lg border border-olive/15 bg-cream p-7 shadow-card">
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-5 flex-1 rounded-md bg-sand/40 p-4 font-serif text-lg italic leading-snug text-olive-deep/70">
                "Reseña aquí — próximamente."
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-olive/10 pt-5">
                <div className="h-10 w-10 rounded-full bg-sand" />
                <div className="text-sm">
                  <p className="font-semibold text-olive-deep">Nombre Apellido</p>
                  <p className="text-xs uppercase tracking-widest text-earth">Clienta verificada</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="bg-sand/40 py-24 sm:py-32">
      <div className="container-editorial max-w-3xl">
        <div className="text-center">
          <SectionEyebrow>Preguntas frecuentes</SectionEyebrow>
          <h2 className="font-serif text-4xl text-olive-deep sm:text-5xl">Resolvemos tus dudas.</h2>
        </div>
        <div className="mt-12 divide-y divide-olive/15 border-y border-olive/15">
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PaymentSection() {
  return (
    <section id="pago" className="scroll-mt-16 py-24 sm:py-32">
      <div className="container-editorial max-w-3xl">
        <div className="text-center">
          <SectionEyebrow>Estás a un paso</SectionEyebrow>
          <h2 className="font-serif text-4xl text-olive-deep sm:text-5xl">
            De volver a comer rico <em className="italic text-olive">sin</em> sentirte inflamada.
          </h2>
        </div>

        <div className="mt-10 overflow-hidden rounded-lg border border-olive/20 bg-cream shadow-lift">
          <iframe
            src="https://pay.hotmart.com/T106579712X?checkoutMode=10"
            title="Checkout Hotmart — Alivio en Cada Bocado"
            className="w-full"
            style={{ height: "1250px", border: "0" }}
            allow="payment"
            loading="lazy"
          />
        </div>

        <div className="mt-8 grid gap-4 rounded-lg bg-olive-deep p-6 text-center text-cream sm:grid-cols-3 sm:text-left">
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <Lock className="h-5 w-5 text-gold" />
            <span className="text-sm">Pago 100% seguro</span>
          </div>
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <Mail className="h-5 w-5 text-gold" />
            <span className="text-sm">Acceso inmediato por email</span>
          </div>
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <ShieldCheck className="h-5 w-5 text-gold" />
            <span className="text-sm">Garantía de 30 días</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingSection() {
  return (
    <section className="relative overflow-hidden bg-olive-deep px-5 py-28 text-cream sm:py-36">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold blur-3xl" />
      </div>
      <div className="container-editorial relative max-w-3xl text-center">
        <Leaf className="mx-auto h-8 w-8 text-gold" />
        <h2 className="mt-6 font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
          Empezá hoy a sentirte más liviana después de cada comida.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-cream/80 text-lg leading-relaxed">
          Más de 150 recetas sin gluten y sin azúcar para dejar de inflamarte y volver a disfrutar la comida.
        </p>
        <div className="mt-10 flex justify-center">
          <CTAButton variant="cream" size="lg">Quiero desinflamarme</CTAButton>
        </div>
        <p className="mt-8 text-xs uppercase tracking-[0.25em] text-cream/70">
          Pago seguro · Acceso inmediato · Garantía 30 días
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink px-5 py-10 text-center text-xs text-cream/50">
      <div className="container-editorial flex flex-col items-center gap-3">
        <div className="flex items-center gap-2 text-cream/80">
          <Leaf className="h-4 w-4 text-gold" />
          <span className="font-serif text-base">Alivio en Cada Bocado</span>
        </div>
        <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-olive"
      >
        <span className="font-serif text-lg text-olive-deep sm:text-xl">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-olive transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pb-6 pr-12 text-base leading-relaxed text-earth-dark/80">
          {a}
        </div>
      )}
    </div>
  );
}

/* Missing lucide export used above */
function Coffee(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <path d="M6 2v3" /><path d="M10 2v3" /><path d="M14 2v3" />
    </svg>
  );
}
