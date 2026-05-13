import { motion } from 'framer-motion';
import { Sparkles, Compass, Handshake, ShieldCheck } from 'lucide-react';

const ITEMS = [
  {
    icon: Compass,
    title: 'Local Market Intelligence',
    body: 'Deep neighbourhood-level expertise across Vancouver and the Lower Mainland, with pricing strategies that consistently outperform the market.'
  },
  {
    icon: Sparkles,
    title: 'Concierge Service',
    body: 'White-glove guidance from your first showing to the closing handshake — staging, marketing, and logistics handled end-to-end.'
  },
  {
    icon: Handshake,
    title: 'Negotiation Expertise',
    body: 'Over a decade of complex deal experience. Discreet, methodical, and ruthlessly aligned with your goals at every step.'
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Network',
    body: 'Direct access to a curated network of architects, designers, lenders and inspectors — the people who make luxury real estate move.'
  }
];

export default function WhyChoose() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-brand-blue-deep py-24 text-white lg:py-32"
      aria-labelledby="why-heading"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-blue/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-green/15 blur-3xl" />

      <div className="relative mx-auto max-w-hero px-6 md:px-10 lg:px-14">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-10 bg-brand-green" aria-hidden />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-green">
              The Strawhomes Difference
            </span>
          </motion.div>

          <motion.h2
            id="why-heading"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-display text-[36px] font-medium leading-[1.05] tracking-[-0.015em] sm:text-[48px] lg:text-[58px]"
          >
            Where luxury meets <span className="italic accent-sheen animate-shimmer">expertise</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-5 max-w-prose text-[16px] font-light leading-relaxed text-white/75"
          >
            Strawhomes is built on the belief that a home is more than an address — it's a chapter
            of your life. Our work is quiet, considered, and exceptional.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="glass-dark group rounded-2xl p-6 transition-all hover:border-white/25"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green transition-transform group-hover:scale-110">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-[20px] font-semibold leading-tight">
                {title}
              </h3>
              <p className="mt-3 text-[14px] font-light leading-relaxed text-white/70">
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
