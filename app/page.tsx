'use client';

import { useState, type ReactNode } from 'react';
import {
  Check,
  Phone,
  Mail,
  ArrowRight,
  Building2,
  FileText,
  BadgeCheck,
  Workflow,
  Shield,
  Rocket,
  LineChart,
  Sparkles,
} from 'lucide-react';

/* -------------------- Shared UI -------------------- */
function ShellSection({ id, children, className = '' }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative w-full px-6 md:px-10 2xl:px-16 py-16 md:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 shadow-sm backdrop-blur">
      <Sparkles className="h-3.5 w-3.5" /> {children}
    </span>
  );
}

/* -------------------- Sections -------------------- */
function Hero() {
  return (
    <ShellSection id="home" className="pt-28 overflow-hidden">
      <div className="relative">
        {/* soft color blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/10 blur-3xl" />

        <div className="relative">
          <div className="mb-4">
            <Badge>EU pályázatokhoz illeszkedő szoftver + teljes körű lebonyolítás</Badge>
          </div>

          <h1 className="text-4xl/tight md:text-5xl/tight font-extrabold tracking-tight">
            Pályázati szoftver, ami <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">valódi üzleti eredményt</span> hoz.
          </h1>

          <p className="mt-4 text-base md:text-lg text-white/80 max-w-prose">
            Segítünk kiválasztani és bevezetni a legjobb vállalati szoftvert a cégének – pályázati tapasztalattal, gyártófüggetlenül. Összekötjük a megfelelő fejlesztőcsapattal, koordináljuk a projektet, és gondoskodunk a pályázati megfelelésről.
          </p>

          <ul className="mt-6 grid gap-2 text-sm text-white/80">
            {[
              'Ingyenes előszűrés és igényfelmérés',
              'Gyártófüggetlen ajánlatok – az Ön érdeke az első',
              'AI-optimalizált, gyors Next.js alapú web- és vállalati megoldások',
              'Pályázati dokumentáció támogatás, mérföldkő- és költségmenedzsment',
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <Check className="mt-[2px] h-4 w-4 shrink-0 text-indigo-400" /> {t}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-5 py-3 text-white font-semibold shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition">
              Kérek visszahívást <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white hover:bg-white/10 transition">
              Szolgáltatások
            </a>
          </div>

          {/* mini stats */}
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { t: 'Átlagos megtakarítás', v: '15–30%' },
              { t: 'Ajánlat összevetés', v: '3–5 beszállító' },
              { t: 'Átlagos átfutás', v: '1–4 hét' },
            ].map((s) => (
              <div key={s.t} className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur p-4 shadow-sm">
                <div className="text-xs text-white/60">{s.t}</div>
                <div className="text-lg font-bold">{s.v}</div>
              </div>
            ))}
          </div>

          {/* contact line */}
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/80">
            <div className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" /> <a href="tel:+36203295006" className="underline hover:text-white">+36 20 329 5006</a>
            </div>
            <div className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" /> <a href="mailto:info@palyazatiszoftver.hu" className="underline hover:text-white">info@palyazatiszoftver.hu</a>
            </div>
          </div>
        </div>
      </div>
    </ShellSection>
  );
}

function Services() {
  const items = [
    { icon: <Building2 className="h-5 w-5" />, title: 'Igényfelmérés & tanácsadás', text: 'Folyamat- és igényfeltárás, célok tisztázása, költségkeret és ütemezés meghatározása.' },
    { icon: <FileText className="h-5 w-5" />, title: 'Pályázati megfelelés', text: 'Dokumentációs támogatás, mérföldkövek, elszámolhatóság, beszállítói ajánlatok összegyűjtése.' },
    { icon: <Workflow className="h-5 w-5" />, title: 'Beszállító kiválasztás', text: 'Gyártófüggetlenül több megoldást hasonlítunk össze – demo, referencia, költség vs. érték.' },
    { icon: <Shield className="h-5 w-5" />, title: 'Projektmenedzsment', text: 'Bevezetés koordináció, határidők, kockázatkezelés, oktatás, változásmenedzsment.' },
    { icon: <Rocket className="h-5 w-5" />, title: 'AI-optimalizált fejlesztés', text: 'Next.js + Tailwind + shadcn/ui alapú gyors, SEO- és AI-kereső-barát web- és szoftvermegoldások.' },
    { icon: <LineChart className="h-5 w-5" />, title: 'Eredménymérés', text: 'KPI-k, analitika, megtérülés – nem csak megvalósítunk, mérjük is a hatást.' },
  ];

  return (
    <ShellSection id="services">
      <div className="mb-8 flex items-center gap-3">
        <Badge>Szolgáltatásaink</Badge>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Végigkísérjük a teljes utat az ötlettől a sikeres megvalósításig</h2>
      <p className="mt-3 text-white/80 max-w-3xl">A cél: olyan rendszert kapjon, ami valós üzleti problémát old meg, pályázati szempontból is hibátlan, és gyorsan bevezethető.</p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-1 shadow-lg hover:scale-[1.02] transition-transform">
            <div className="rounded-2xl bg-gradient-to-tr from-neutral-900/70 to-neutral-800/65 p-6 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-700 to-fuchsia-600/80 text-white shadow-md">
                  {it.icon}
                </div>
                <div>
                  <h3 className="font-semibold">{it.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{it.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ShellSection>
  );
}

function WhyUs() {
  const points = [
    'Gyártófüggetlen ajánlások – csak azt javasoljuk, ami Önnek jó',
    'Komoly pályázati tapasztalat, valós esettanulmányok',
    'AI-keresőkre optimalizált tartalom és technológia (Next.js)',
    'Gyors reakció, átlátható kommunikáció, fix mérföldkövek',
  ];

  return (
    <ShellSection id="why">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-sm backdrop-blur">
        <div className="flex items-center gap-3"><BadgeCheck className="h-5 w-5 text-indigo-400" /> <span className="text-sm font-semibold text-indigo-200">Miért minket?</span></div>
        <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">Érdek-képviselet Ön mellett, végig</h2>
        <p className="mt-2 text-white/85 max-w-3xl">Nem egy konkrét gyártóhoz kötődünk. Így a valóban megfelelő megoldást keressük meg és vezetjük be a cégénél – a pályázat kereteihez igazítva.</p>
        <p className="mt-4 max-w-3xl text-sm text-indigo-200 font-semibold">Fontos: <span className="text-white">Önnek nem kell fizetnie</span> — a szolgáltatásaink díját a <span className="text-white">szoftvergyártók</span> fedezik. Mi a cégek érdekeit képviseljük, Önnek ez <span className="text-white">költségmentes bevezetést</span> jelent, a kiválasztott szoftver <span className="text-white">piaci ára pedig változatlan</span> marad.</p>
        <ul className="mt-6 grid gap-3 md:grid-cols-2 text-sm text-white/80">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 bg-neutral-900/30 rounded-lg p-3 border border-white/5">
              <Check className="mt-[2px] h-4 w-4 text-indigo-400" /> <span className="text-sm">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </ShellSection>
  );
}

function Process() {
  const steps = [
    { t: 'Előszűrés & célok', d: 'Gyors hívás, igények, cél KPI-k, ütemezés.' },
    { t: 'Piackutatás', d: 'Megoldások feltérképezése, demók és referenciák.' },
    { t: 'Ajánlat & pályázati illesztés', d: 'Költségkeret, elszámolhatóság, mérföldkövek.' },
    { t: 'Bevezetés', d: 'Projektmenedzsment, oktatás, átadás.' },
    { t: 'Eredménymérés', d: 'Analitika, finomhangolás, ROI jelentés.' },
  ];

  return (
    <ShellSection id="process">
      <div className="mb-8 flex items-center gap-3"><Badge>Folyamat</Badge></div>
      <div className="grid gap-4 md:grid-cols-5">
        {steps.map((s, i) => (
          <div key={s.t} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
            <div className="absolute -top-3 left-6 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow">{i + 1}</div>
            <h3 className="mt-2 font-semibold">{s.t}</h3>
            <p className="mt-2 text-sm text-white/75">{s.d}</p>
          </div>
        ))}
      </div>
    </ShellSection>
  );
}

function CaseTeasers() {
  const cases = [
    { title: 'Gyártási ERP gyors bevezetés', tag: 'ERP / pályázat', icon: <Building2 className="h-6 w-6" /> },
    { title: 'Szerviz menedzsment mobil app', tag: 'Field Service', icon: <Rocket className="h-6 w-6" /> },
    { title: 'B2B értékesítési portál Next.js', tag: 'B2B Portál', icon: <LineChart className="h-6 w-6" /> },
  ];

  return (
    <ShellSection id="cases">
      <div className="mb-8 flex items-center gap-3"><Badge>Esettanulmányok (röviden)</Badge></div>
      <div className="grid gap-6 md:grid-cols-3">
        {cases.map((c) => (
          <div key={c.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-1 shadow-lg hover:-translate-y-1 transition-transform">
            <div className="rounded-2xl bg-gradient-to-tr from-neutral-900/70 to-neutral-800/65 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-indigo-700/80 p-3 text-white shadow-sm">{c.icon}</div>
                <div>
                  <div className="text-xs text-indigo-200 font-semibold">{c.tag}</div>
                  <h3 className="mt-0.5 font-semibold">{c.title}</h3>
                </div>
              </div>
              <p className="mt-3 text-sm text-white/70">Rövid leírás, mérhető eredmény, 10–20% hatékonyságnövekedés…</p>
              <a href="#contact" className="mt-3 inline-flex items-center text-sm font-semibold text-indigo-200 hover:underline">Érdekel <ArrowRight className="ml-1 h-4 w-4" /></a>
            </div>
          </div>
        ))}
      </div>
    </ShellSection>
  );
}

function FAQ() {
  const faqs = [
    { q: 'Mennyibe kerül a szolgáltatás?', a: 'Az előszűrés és igényfelmérés teljesen díjmentes. Ügyfeleinktől a szolgáltatásainkért semmilyen díjat nem kérünk: a költségeket a szoftvergyártó partnereink fedezik. Fontos, hogy a választott szoftver piaci ára változatlan marad – Ön ugyanazon az áron jut hozzá, mintha közvetlenül a gyártótól vásárolna, miközben a szakmai és pályázati támogatást tőlünk ingyen kapja.' },
    { q: 'Csak egy gyártóval dolgoznak?', a: 'Nem. Gyártófüggetlenek vagyunk, több ajánlatot versenyeztetünk és az Ön érdekeit képviseljük.' },
    { q: 'Vállalnak fejlesztést is?', a: 'Igen. Next.js alapú web- és egyedi szoftverfejlesztést vállalunk, AI-optimalizált tartalommal és technikai SEO-val.' },
    { q: 'Tudnak segíteni a pályázati dokumentációban?', a: 'Igen, a mérföldkőkijelöléstől az elszámolhatóságig végig támogatjuk a folyamatot.' },
  ];

  return (
    <ShellSection id="faq">
      <div className="mb-8 flex items-center gap-3"><Badge>GYIK</Badge></div>
      <div className="grid gap-4 md:grid-cols-2">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
            <h3 className="font-semibold">{f.q}</h3>
            <p className="mt-2 text-sm text-white/80">{f.a}</p>
          </div>
        ))}
      </div>
    </ShellSection>
  );
}

function ContactCTA() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // --- Formspree (client) ---
  const FORMSPREE_ID = 'xzzknopy';
  const actionUrl = `https://formspree.io/f/${FORMSPREE_ID}`;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const res = await fetch(actionUrl, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      if (res.ok) {
        setSent(true);
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        setError((data as any)?.error || (data as any)?.message || 'Beküldési hiba.');
      }
    } catch (err) {
      setError('Hálózati hiba.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ShellSection id="contact">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Kérjen díjmentes visszahívást</h2>
          <p className="mt-2 text-white/80">Írja meg röviden a célját és az időkeretet. 1 munkanapon belül jelentkezünk.</p>

          <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
            <input name="name" className="rounded-xl border border-white/10 bg-white/10 text-white px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-white/50" placeholder="Név" required />
            <input name="email" type="email" className="rounded-xl border border-white/10 bg-white/10 text-white px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-white/50" placeholder="Email" required />
            <input name="phone" className="rounded-xl border border-white/10 bg-white/10 text-white px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-white/50" placeholder="Telefon (opcionális)" />
            <textarea name="message" rows={5} className="rounded-xl border border-white/10 bg-white/10 text-white px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-white/50" placeholder="Pár mondat a projekt céljáról…" required />

            <input type="hidden" name="_subject" value="Új lead – palyazatiszoftver.hu" />
            {/* <input type="hidden" name="_next" value="https://palyazatiszoftver.hu/koszonjuk" /> */}

            <button disabled={loading || sent} type="submit" className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-5 py-3 text-white font-semibold shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition disabled:opacity-60">
              {sent ? 'Elküldve' : loading ? 'Küldés…' : 'Küldés'} <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            {error && <div className="text-sm text-red-300">{error}</div>}
            {sent && !error && <div className="text-sm text-emerald-300">Köszönjük! Hamarosan jelentkezünk.</div>}
          </form>
          <p className="mt-3 text-xs text-white/60">Űrlapküldés: Formspree (<code className="font-mono">xzzknopy</code>).</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur">
          <h3 className="font-semibold">Kapcsolat</h3>
          <div className="mt-3 grid gap-2 text-sm text-white/80">
            <div className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> <a href="tel:+36203295006" className="underline hover:text-white">+36 20 329 5006</a></div>
            <div className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> <a href="mailto:info@palyazatiszoftver.hu" className="underline hover:text-white">info@palyazatiszoftver.hu</a></div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-semibold text-indigo-200">SEO fókusz kulcsszavak (HU)</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-white/75">
              <li>pályázati szoftver</li>
              <li>vállalati szoftver pályázat</li>
              <li>szoftver bevezetés pályázat</li>
              <li>Next.js webfejlesztés pályázati projektekhez</li>
            </ul>
          </div>
        </div>
      </div>
    </ShellSection>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 md:px-10 2xl:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-white/70">© {new Date().getFullYear()} Pályázati Szoftver</div>
        <nav className="flex items-center gap-5 text-sm">
          <a href="#services" className="hover:underline">Szolgáltatások</a>
          <a href="#cases" className="hover:underline">Esettanulmányok</a>
          <a href="#faq" className="hover:underline">GYIK</a>
          <a href="#contact" className="hover:underline">Kapcsolat</a>
        </nav>
      </div>
    </footer>
  );
}

/* -------------------- Page with tech pattern background -------------------- */
export default function Page() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-neutral-950 via-slate-950 to-neutral-900 text-white overflow-hidden">
      {/* tech grid */}
      <svg className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0 L0 0 0 40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          </pattern>
          <linearGradient id="lg" x1="0" x2="1">
            <stop offset="0%" stopColor="#6d28d9" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#lg)" />
      </svg>

      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <CaseTeasers />
      <FAQ />
      <ContactCTA />
      <Footer />
    </div>
  );
}
