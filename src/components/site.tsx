import Link from "next/link";
import { ArrowUpRight, Recycle, Leaf, Phone, Mail, MapPin } from "lucide-react";

const links = [{href:"/services",label:"Services"},{href:"/schedule",label:"Schedule pickup"},{href:"/blog",label:"Journal"},{href:"/compliance",label:"Compliance"},{href:"/contact",label:"Contact"}];
export function SiteHeader() {
  return <header className="sticky top-0 z-50 border-b border-forest/10 bg-sand/90 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
      <Link href="/" className="flex items-center gap-2.5"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-forest text-lime"><Recycle size={23}/></span><span className="text-lg font-black tracking-tight text-forest">greenloop<span className="text-leaf">.</span></span></Link>
      <nav className="hidden items-center gap-7 md:flex">{links.map(l=><Link key={l.href} href={l.href} className="text-sm font-semibold text-forest/75 transition hover:text-leaf">{l.label}</Link>)}</nav>
      <Link href="/schedule" className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-bold text-white transition hover:bg-leaf">Book a pickup <ArrowUpRight size={16}/></Link>
    </div>
  </header>;
}
export function SiteFooter() {
  return <footer className="bg-forest text-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
      <div><Link href="/" className="flex items-center gap-2 text-xl font-black"><Recycle className="text-lime"/> greenloop.</Link><p className="mt-4 max-w-xs text-sm leading-6 text-white/65">A cleaner world starts with the choices we make every day. Waste less. Recover more.</p></div>
      <div><p className="mb-4 font-bold">Explore</p><div className="grid gap-3 text-sm text-white/65">{links.map(l=><Link key={l.href} href={l.href} className="hover:text-lime">{l.label}</Link>)}</div></div>
      <div><p className="mb-4 font-bold">Get in touch</p><div className="grid gap-3 text-sm text-white/65"><span className="flex gap-2"><Phone size={16}/> +234 800 000 0000</span><span className="flex gap-2"><Mail size={16}/> hello@greenloop.example</span><span className="flex gap-2"><MapPin size={16}/> Lagos, Nigeria</span></div></div>
      <div className="rounded-3xl bg-white/5 p-5"><Leaf className="mb-3 text-lime"/><p className="font-bold">Small actions. Big impact.</p><p className="mt-2 text-sm leading-6 text-white/60">Join our community for practical recycling tips and sustainability updates.</p><Link href="/blog" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-lime">Read the journal <ArrowUpRight size={15}/></Link></div>
    </div>
    <div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/45 sm:flex-row sm:justify-between lg:px-8"><span>© {new Date().getFullYear()} GreenLoop. Demo website concept.</span><span>Designed for a circular future.</span></div></div>
  </footer>;
}