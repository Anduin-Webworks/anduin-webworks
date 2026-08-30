import { Helmet } from "react-helmet-async";
import { ArrowDown, Check, Droplets, Eye, Heart, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const colors = [
  { name: "White Shores", hex: "#F2F0E4", role: "Primary surface", className: "bg-[#F2F0E4] text-[#0D0D0D]" },
  { name: "Black Lord", hex: "#0D0D0D", role: "Primary text", className: "bg-[#0D0D0D] text-[#F2F0E4]" },
  { name: "Yellow Yolk", hex: "#F2C46D", role: "Highlights", className: "bg-[#F2C46D] text-[#0D0D0D]" },
  { name: "Brown Dirt", hex: "#592B02", role: "Depth & supporting text", className: "bg-[#592B02] text-[#F2F0E4]" },
  { name: "Orange Strong", hex: "#F26835", role: "Calls to action", className: "bg-[#F26835] text-[#0D0D0D]" },
];

const values = ["Creativity", "Fun", "Learning", "Experimentation", "Resilience", "Improvement", "Beauty", "Collaboration", "Integrity"];

const principles: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Droplets, title: "Flow", body: "Create interfaces that guide people with ease." },
  { icon: Eye, title: "Clarity", body: "Make the important thing easy to see and understand." },
  { icon: Heart, title: "Care", body: "Design for real people, including people with different needs." },
  { icon: Sparkles, title: "Wonder", body: "Leave room for personality, beauty, and a little joy." },
];

const Brand = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Brand Guidelines | Anduin Webworks</title>
      <meta name="description" content="The public brand, design, accessibility, and experience guidelines for Anduin Webworks." />
    </Helmet>
    <Header />

    <main className="pt-20">
      <section className="relative overflow-hidden border-b border-border bg-primary px-4 py-24 text-primary-foreground md:py-36">
        <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-primary-foreground/20" />
        <div className="pointer-events-none absolute -bottom-48 left-1/3 h-96 w-96 rounded-full border border-primary-foreground/10" />
        <div className="container relative mx-auto max-w-6xl">
          <p className="mb-6 font-outfit text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">Anduin Webworks / Brand</p>
          <h1 className="max-w-4xl font-cinzel text-4xl font-bold leading-tight md:text-7xl">A river of ideas,<br /><span className="text-secondary">made tangible.</span></h1>
          <p className="mt-8 max-w-2xl font-outfit text-lg leading-relaxed text-primary-foreground/85 md:text-xl">A living guide to the principles, personality, and visual language behind our digital work.</p>
          <a href="#principles" className="mt-12 inline-flex items-center gap-3 font-outfit font-semibold tracking-wide text-secondary transition-transform hover:translate-y-1">Explore the guide <ArrowDown className="h-5 w-5" aria-hidden="true" /></a>
        </div>
      </section>

      <section id="principles" className="container mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-start">
          <div>
            <p className="mb-4 font-outfit text-sm font-semibold uppercase tracking-[0.25em] text-primary">The north star</p>
            <h2 className="font-cinzel text-3xl font-bold leading-tight text-foreground md:text-5xl">Flow naturally.<br />Stand distinctly.</h2>
          </div>
          <div className="brand-accent space-y-6 font-outfit text-lg leading-relaxed text-muted-foreground">
            <p>We create front-end experiences that feel considered, human, and quietly memorable. Like the Anduin River, our work is always moving: adapting to its surroundings while holding a clear sense of direction.</p>
            <p>Our visual language balances warmth with clarity, craft with usefulness, and experimentation with respect for the people using what we make.</p>
          </div>
        </div>
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(({ icon: Icon, title, body }) => <article key={title} className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-card)]"><Icon className="mb-8 h-7 w-7 text-secondary" aria-hidden="true" /><h3 className="mb-2 font-cinzel text-xl font-bold text-foreground">{title}</h3><p className="font-outfit leading-relaxed text-muted-foreground">{body}</p></article>)}
        </div>
      </section>

      <section className="bg-card px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl"><p className="mb-4 font-outfit text-sm font-semibold uppercase tracking-[0.25em] text-primary">Our character</p><h2 className="font-cinzel text-3xl font-bold text-foreground md:text-5xl">Values we carry</h2><p className="mt-5 font-outfit text-lg leading-relaxed text-muted-foreground">These values shape how we make, learn, collaborate, and improve.</p></div>
          <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">{values.map(value => <div key={value} className="flex items-center gap-3 border-b border-border py-4 font-outfit text-lg text-foreground"><Check className="h-5 w-5 text-secondary" aria-hidden="true" />{value}</div>)}</div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-2">
          <div><p className="mb-4 font-outfit text-sm font-semibold uppercase tracking-[0.25em] text-primary">The palette</p><h2 className="font-cinzel text-3xl font-bold text-foreground md:text-5xl">Earth, light, and warmth.</h2><p className="mt-5 max-w-xl font-outfit text-lg leading-relaxed text-muted-foreground">Use color with intention. White Shores and Black Lord establish readable foundations; our warm accents add energy, focus, and depth.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{colors.map(color => <div key={color.name} className={`min-h-32 rounded-lg p-5 ${color.className}`}><p className="font-cinzel text-lg font-bold">{color.name}</p><p className="mt-2 font-outfit text-sm opacity-80">{color.hex} · {color.role}</p></div>)}</div>
        </div>
      </section>

      <section className="bg-[#0D0D0D] px-4 py-20 text-[#F2F0E4] md:py-28">
        <div className="container mx-auto max-w-6xl"><div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]"><div><p className="mb-4 font-outfit text-sm font-semibold uppercase tracking-[0.25em] text-[#F2C46D]">Accessibility is foundational</p><h2 className="font-cinzel text-3xl font-bold leading-tight md:text-5xl">Beauty should<br />welcome everyone.</h2></div><div className="grid gap-6 sm:grid-cols-2">{["Never use color alone to communicate meaning.", "Use semantic structure, labels, focus states, and keyboard support.", "Keep language plain, feedback specific, and navigation predictable.", "Test responsive layouts, zoom, reduced motion, and assistive technology.",].map(item => <div key={item} className="border-l-2 border-[#F26835] pl-5 font-outfit text-lg leading-relaxed text-[#F2F0E4]/85">{item}</div>)}</div></div><p className="mt-16 max-w-3xl border-t border-[#F2F0E4]/20 pt-6 font-outfit text-sm leading-relaxed text-[#F2F0E4]/60">Our digital work aims for WCAG 2.2 Level AA where applicable. Accessibility and usability set the boundaries; Anduin’s character defines how the experience feels within them.</p></div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-20 text-center md:py-28"><p className="font-outfit text-lg text-muted-foreground">A living system, refined with every project.</p><h2 className="mx-auto mt-4 max-w-3xl font-cinzel text-3xl font-bold text-foreground md:text-5xl">Keep learning. Keep making. Keep the river moving.</h2></section>
    </main>
    <Footer />
  </div>
);

export default Brand;
