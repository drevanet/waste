import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, ArrowUpRight, Recycle, Truck, ShieldCheck, CalendarDays,
  Leaf, CheckCircle2, CircleCheck, Building2, House, Factory, Sparkles,
  Clock3, MapPin, BadgeCheck, Sprout, Globe2, HeartHandshake, PackageCheck,
  ChevronRight, Quote, MoveUpRight
} from "lucide-react";
import { SectionTitle } from "@/components/section-title";

const photo = "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1800&q=85";

const features = [
  { icon: Truck, title: "Reliable collection", text: "Planned pickups for homes, offices and facilities—without the guesswork.", number: "01" },
  { icon: Recycle, title: "Smarter recovery", text: "We prioritise reuse, sorting and recycling before responsible disposal.", number: "02" },
  { icon: ShieldCheck, title: "Responsible handling", text: "Clear processes designed around safety, traceability and compliance.", number: "03" },
];

const services = [
  { icon: House, title: "Residential waste", tag: "For everyday living", text: "Keep your home, estate or apartment community clean with convenient scheduled collections.", image: "https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?auto=format&fit=crop&w=900&q=85" },
  { icon: Building2, title: "Commercial collection", tag: "For growing businesses", text: "Dependable waste support for offices, shops, hospitality venues and business premises.", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85" },
  { icon: Recycle, title: "Recycling programmes", tag: "Give materials another life", text: "Make sorting easier and divert eligible paper, plastics, metals and other recyclables.", image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=900&q=85" },
];

const steps = [
  { n: "01", title: "Tell us what you need", text: "Choose a service and share a few details about your waste collection." },
  { n: "02", title: "Choose your time", text: "Select a preferred pickup date and time window that suits your routine." },
  { n: "03", title: "Confirm your booking", text: "Review the price estimate and continue to secure Paystack checkout." },
  { n: "04", title: "We take it from here", text: "Our team can coordinate the pickup and route suitable materials toward recovery." },
];

const promises = [
  { icon: Leaf, title: "Recovery before disposal", text: "We encourage practical waste separation and prioritise recovery where appropriate." },
  { icon: BadgeCheck, title: "Safety-conscious service", text: "Responsible handling starts with clear procedures, suitable equipment and trained teams." },
  { icon: Globe2, title: "Community-first thinking", text: "Cleaner streets and smarter waste habits are built through consistent local action." },
];

const faqs = [
  { q: "What types of waste can I book for collection?", a: "You can request residential waste, eligible recyclables, commercial collection or bulky-waste pickup. Some hazardous, medical or regulated materials need a separate assessment and may not be accepted." },
  { q: "Can I choose my pickup date and time?", a: "Yes. The booking form lets you select a preferred date and time window. Your selection is a request until the operations team confirms availability." },
  { q: "How does online payment work?", a: "The booking page displays an estimated price in USD and converts it to NGN for Paystack checkout. The final naira amount depends on the exchange rate used when payment is initialized." },
  { q: "Do you provide services for businesses?", a: "Yes. Businesses can enquire about scheduled collections, recycling programmes and waste audits. Larger or specialised sites may require an assessment first." },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative isolate min-h-[690px] overflow-hidden bg-forest text-white">
        <Image src={photo} alt="Recyclable materials ready for responsible waste recovery" fill priority sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 image-overlay" />
        <div className="absolute -right-24 top-16 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -right-10 top-28 h-52 w-52 rounded-full border border-white/10" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:min-h-[690px] md:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-24">
          <div className="fade-in">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-lime" /> Waste, reimagined
            </div>
            <h1 className="max-w-2xl text-5xl font-black leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
              A cleaner planet starts <span className="text-lime">right here.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
              We make waste collection simpler, recycling smarter, and responsible disposal easier for the places we live, work and grow.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/schedule" className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-4 font-extrabold text-forest transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                Schedule a pickup <ArrowUpRight size={18} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-4 font-bold transition hover:border-lime hover:bg-white/10">
                Explore services <ArrowRight size={17} />
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/75">
              <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-lime" /> Easy online booking</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-lime" /> Clear price estimates</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-lime" /> Service built around you</span>
            </div>
          </div>
          <div className="fade-in-delay relative mx-auto w-full max-w-lg">
            <div className="rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
              <div className="relative">
                <Image src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&w=1000&q=85" alt="Waste collection and recycling work" width={900} height={700} className="h-[330px] w-full rounded-[1.5rem] object-cover sm:h-[400px]" />
                <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div><p className="text-xs uppercase tracking-widest text-white/70">Our promise</p><p className="mt-1 text-xl font-bold">Waste with a second life.</p></div>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-lime text-forest"><Recycle size={23} /></span>
                </div>
              </div>
              <div className="flex items-center justify-between px-4 py-4">
                <div><p className="text-sm font-bold">A smarter way forward</p><p className="mt-1 text-xs text-white/60">Collection · Recovery · Responsibility</p></div>
                <span className="flex -space-x-2"><span className="grid h-9 w-9 place-items-center rounded-full border-2 border-forest bg-lime text-forest"><Leaf size={15}/></span><span className="grid h-9 w-9 place-items-center rounded-full border-2 border-forest bg-white text-forest"><Truck size={15}/></span><span className="grid h-9 w-9 place-items-center rounded-full border-2 border-forest bg-[#bde6c9] text-forest"><Recycle size={15}/></span></span>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 rounded-2xl bg-lime px-5 py-4 text-forest shadow-xl sm:-left-7">
              <p className="text-2xl font-black">360°</p><p className="text-xs font-bold">waste solutions</p>
            </div>
            <div className="absolute -right-3 top-8 hidden rounded-2xl bg-white p-4 text-forest shadow-xl sm:block">
              <span className="flex items-center gap-2 text-sm font-extrabold"><Sparkles size={16} className="text-leaf"/> Small steps matter</span>
              <p className="mt-1 text-xs text-forest/55">Better habits, cleaner spaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK VALUE STRIP */}
      <section className="relative z-10 mx-auto -mt-1 max-w-7xl px-5 lg:px-8">
        <div className="grid overflow-hidden rounded-b-3xl border border-forest/10 bg-white shadow-soft sm:grid-cols-3 sm:rounded-3xl sm:-translate-y-7">
          {[
            {icon:CalendarDays,title:"Pickup on your schedule",text:"Choose a preferred collection window."},
            {icon:ShieldCheck,title:"Safety comes first",text:"Responsible handling at every step."},
            {icon:Recycle,title:"Think beyond the bin",text:"Make room for reuse and recovery."},
          ].map((x,i)=><div key={x.title} className={`flex gap-4 p-6 ${i!==2?"border-b border-forest/10 sm:border-b-0 sm:border-r":""}`}><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-lime/50 text-forest"><x.icon size={22}/></span><div><h2 className="font-extrabold">{x.title}</h2><p className="mt-1 text-sm leading-5 text-forest/55">{x.text}</p></div></div>)}
        </div>
      </section>

      {/* INTRO + FEATURES */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div><SectionTitle eyebrow="Better by design" title="Waste management that works for real life." description="From scheduled household collections to commercial recycling programmes, we make the responsible choice feel simple, clear and convenient." />
            <p className="mt-6 max-w-lg text-sm leading-7 text-forest/60">A cleaner environment is not one big gesture. It is a series of thoughtful choices, supported by reliable services and better everyday habits.</p>
            <Link href="/compliance" className="mt-6 inline-flex items-center gap-2 font-extrabold text-leaf">Get to know GreenLoop <ArrowRight size={17}/></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {features.map((f,i)=><article key={f.title} className="fade-in group rounded-3xl border border-forest/10 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-leaf/40 hover:shadow-soft" style={{animationDelay:`${i*.12}s`}}>
              <div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-lime/50 text-forest transition group-hover:bg-forest group-hover:text-lime"><f.icon size={23}/></span><span className="text-xs font-black tracking-widest text-forest/25">{f.number}</span></div>
              <h3 className="mt-5 text-lg font-extrabold">{f.title}</h3><p className="mt-3 text-sm leading-6 text-forest/60">{f.text}</p>
            </article>)}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><SectionTitle eyebrow="Services for every space" title="A cleaner solution for wherever life happens." description="Choose a collection service that fits your home, your business and the materials you need handled."/><Link href="/services" className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-forest/15 px-5 py-3 text-sm font-extrabold transition hover:bg-forest hover:text-white md:self-end">View all services <ArrowRight size={16}/></Link></div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s,i)=><article key={s.title} className="group overflow-hidden rounded-[1.7rem] border border-forest/10 bg-sand transition duration-300 hover:-translate-y-1 hover:shadow-soft" style={{animationDelay:`${i*.1}s`}}>
              <div className="relative overflow-hidden"><Image src={s.image} alt={s.title} width={900} height={650} className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"/><span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-extrabold text-forest backdrop-blur">{s.tag}</span></div>
              <div className="p-6"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-lime/60"><s.icon size={21}/></span><h3 className="text-xl font-black">{s.title}</h3></div><p className="mt-4 min-h-[72px] text-sm leading-6 text-forest/60">{s.text}</p><Link href="/schedule" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-leaf">Book this service <ArrowUpRight size={16} className="transition group-hover:translate-x-1"/></Link></div>
            </article>)}
          </div>
        </div>
      </section>

      {/* IMPACT STORY */}
      <section className="relative isolate overflow-hidden bg-forest py-20 text-white lg:py-24">
        <div className="absolute -right-28 -top-28 h-96 w-96 rounded-full border border-white/10"/><div className="absolute -right-8 -top-8 h-56 w-56 rounded-full border border-white/10"/>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative"><Image src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=1200&q=85" alt="Green landscape representing a healthier environment" width={1000} height={800} className="h-[430px] w-full rounded-[2rem] object-cover"/><div className="absolute -bottom-5 right-4 max-w-[250px] rounded-2xl bg-lime p-5 text-forest shadow-xl sm:-right-5"><Sprout size={25}/><p className="mt-3 text-lg font-black">Better choices add up.</p><p className="mt-1 text-sm leading-5 text-forest/70">Progress begins when we rethink what we throw away.</p></div></div>
          <div className="pt-3 lg:pl-8"><SectionTitle eyebrow="Our bigger purpose" title="What if waste became the beginning of something new?" description="A circular mindset sees potential in materials that might otherwise be thrown away. With thoughtful sorting, responsible collection and recovery, we can help reduce avoidable waste." light/>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">{promises.map(p=><div key={p.title} className="rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:bg-white/10"><p.icon size={23} className="text-lime"/><h3 className="mt-4 font-extrabold">{p.title}</h3><p className="mt-2 text-sm leading-6 text-white/60">{p.text}</p></div>)}</div>
            <Link href="/compliance" className="mt-8 inline-flex items-center gap-2 font-extrabold text-lime">Our responsibility framework <ArrowRight size={17}/></Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center"><SectionTitle eyebrow="Simple from the start" title="Your next pickup is just a few steps away." description="No complicated process. Just the details we need to help organise your collection." /></div>
        <div className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((x,i)=><article key={x.n} className="relative rounded-3xl border border-forest/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-soft"><div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest text-lg font-black text-lime">{x.n}</span>{i===0?<MapPin className="text-leaf"/>:i===1?<Clock3 className="text-leaf"/>:i===2?<CreditCardIcon/>:<PackageCheck className="text-leaf"/>}</div><h3 className="mt-6 text-lg font-black">{x.title}</h3><p className="mt-3 text-sm leading-6 text-forest/60">{x.text}</p>{i<3&&<ChevronRight className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-lime p-1 text-forest lg:block" size={28}/>}</article>)}
        </div>
        <div className="mt-10 text-center"><Link href="/schedule" className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-4 font-extrabold text-white transition hover:bg-leaf">Start your booking <ArrowUpRight size={18}/></Link></div>
      </section>

      {/* BUSINESS CALLOUT */}
      <section className="bg-[#e9f1e7] py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
          <div className="max-w-3xl"><p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.2em] text-leaf"><Factory size={16}/> For organisations</p><h2 className="mt-4 text-3xl font-black tracking-tight text-forest sm:text-4xl">Your business has a lot to do. Waste management shouldn’t slow it down.</h2><p className="mt-4 max-w-2xl leading-7 text-forest/65">Explore regular collection, recycling initiatives and waste audit enquiries designed around your premises, team and operating schedule.</p></div>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-4 font-extrabold text-white transition hover:bg-leaf">Discuss business services <ArrowRight size={17}/></Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><SectionTitle eyebrow="Built on trust" title="A better experience, from booking to collection." description="A good waste service should be easy to understand, straightforward to arrange and responsible in practice."/></div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {quote:"The booking journey is clear and easy to follow. I know what details to prepare before requesting a pickup.",name:"Residential customer",type:"Sample testimonial"},
            {quote:"Having a planned collection window helps our team organise the space and keep our day moving.",name:"Small business operator",type:"Sample testimonial"},
            {quote:"The focus on sorting and responsible recovery makes it easier to talk about better waste habits with our community.",name:"Community coordinator",type:"Sample testimonial"},
          ].map((t,i)=><figure key={t.name} className="rounded-3xl border border-forest/10 bg-white p-7 transition hover:shadow-soft"><Quote size={26} className="text-leaf"/><blockquote className="mt-5 text-base leading-7 text-forest/80">“{t.quote}”</blockquote><figcaption className="mt-6 border-t border-forest/10 pt-5"><p className="font-extrabold">{t.name}</p><p className="mt-1 text-xs text-forest/45">{t.type} — replace with a verified customer review</p></figcaption></figure>)}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.7fr_1.3fr] lg:px-8">
          <div><SectionTitle eyebrow="Good to know" title="Questions before you book?" description="Here are a few details to help you feel ready before scheduling your collection."/><Link href="/contact" className="mt-6 inline-flex items-center gap-2 font-extrabold text-leaf">Still have a question? Contact us <ArrowRight size={17}/></Link></div>
          <div className="space-y-3">{faqs.map((f,i)=><details key={f.q} className="group rounded-2xl border border-forest/10 bg-sand p-5 open:bg-lime/20"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold marker:content-none">{f.q}<span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-forest transition group-open:rotate-45"><span className="text-xl font-normal">+</span></span></summary><p className="mt-4 max-w-2xl text-sm leading-7 text-forest/65">{f.a}</p></details>)}</div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><SectionTitle eyebrow="From the journal" title="Fresh thinking for a less wasteful world." description="Explore simple guides and practical ideas for making better choices every day."/><Link href="/blog" className="inline-flex items-center gap-2 self-start font-extrabold text-leaf md:self-end">Visit the journal <ArrowRight size={17}/></Link></div>
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          <Link href="/blog" className="group grid overflow-hidden rounded-3xl border border-forest/10 bg-white sm:grid-cols-2"><div className="overflow-hidden"><Image src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=900&q=85" alt="Sorted recycling materials" width={900} height={700} className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-full"/></div><div className="p-6"><span className="text-xs font-black uppercase tracking-widest text-leaf">Recycling basics</span><h3 className="mt-3 text-xl font-black">A simple guide to sorting household waste</h3><p className="mt-3 text-sm leading-6 text-forest/60">Learn how small sorting habits can help keep useful materials in circulation.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold">Explore article <ArrowRight size={16}/></span></div></Link>
          <Link href="/blog" className="group grid overflow-hidden rounded-3xl border border-forest/10 bg-white sm:grid-cols-2"><div className="overflow-hidden"><Image src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=900&q=85" alt="Recycling and sustainable materials" width={900} height={700} className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-full"/></div><div className="p-6"><span className="text-xs font-black uppercase tracking-widest text-leaf">For businesses</span><h3 className="mt-3 text-xl font-black">Build a recycling routine your team can follow</h3><p className="mt-3 text-sm leading-6 text-forest/60">Make waste separation practical with clear bins, labels and consistent collection.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold">Explore article <ArrowRight size={16}/></span></div></Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-24">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-forest px-7 py-12 text-white md:px-12 md:py-16">
          <div className="absolute -right-20 -top-28 -z-10 h-80 w-80 rounded-full border border-white/10"/><div className="absolute -right-4 -top-12 -z-10 h-48 w-48 rounded-full border border-white/10"/>
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center"><div><p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.22em] text-lime"><HeartHandshake size={16}/> Ready when you are</p><h2 className="mt-3 max-w-2xl text-3xl font-black sm:text-4xl">Make your next pickup the start of something better.</h2><p className="mt-4 max-w-xl leading-7 text-white/65">Book a collection in minutes and take one more practical step toward a cleaner community.</p></div><Link href="/schedule" className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-4 font-extrabold text-forest transition hover:-translate-y-1 hover:shadow-xl">Book your collection <CalendarDays size={18}/></Link></div>
        </div>
      </section>
    </main>
  );
}

function CreditCardIcon() {
  return <ShieldCheck className="text-leaf" />;
}
