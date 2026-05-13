import { motion } from 'framer-motion';
import { Phone, Mail, Globe, Award, MapPin } from 'lucide-react';

export default function AgentFeature() {
  return (
    <section id="about" className="relative bg-brand-soft py-24 lg:py-32" aria-labelledby="agent-heading">
      <div className="mx-auto grid max-w-hero gap-12 px-6 md:px-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:px-14">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full max-w-[560px] overflow-hidden rounded-[28px] shadow-glass">
            <img
              src="/assets/richard-morrison.png"
              alt="Richard Morrison, Personal Real Estate Corporation"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Floating credentials card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -right-4 bottom-8 w-[260px] rounded-2xl bg-white p-5 shadow-card ring-1 ring-black/[0.02] lg:-right-10"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue text-white">
                <Award className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <div className="font-display text-[22px] font-semibold leading-none text-brand-blue">
                  Top 1%
                </div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-navy/65">
                  Fraser Valley REB
                </div>
              </div>
            </div>
            <div className="divider-accent my-4" />
            <p className="text-[12px] leading-relaxed text-brand-navy/70">
              Award-winning service, backed by over a decade of trusted local expertise.
            </p>
          </motion.div>
        </motion.div>

        {/* Text side */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-10 bg-brand-green" aria-hidden />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-green">
              Meet Your Realtor
            </span>
          </motion.div>

          <motion.h2
            id="agent-heading"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-display text-[40px] font-medium leading-[1.05] tracking-[-0.015em] text-brand-blue-deep sm:text-[52px] lg:text-[60px]"
          >
            Richard Morrison
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 text-[14px] font-semibold uppercase tracking-[0.16em] text-brand-blue"
          >
            Personal Real Estate Corporation
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 inline-flex items-center gap-1.5 text-[14px] text-brand-navy/70"
          >
            <MapPin className="h-4 w-4 text-brand-green" aria-hidden /> Vancouver, BC
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-prose text-[16.5px] font-light leading-[1.75] text-brand-navy/80"
          >
            With more than a decade of experience guiding clients across Vancouver and the Lower
            Mainland, Richard pairs deep market intelligence with an unwavering commitment to
            white-glove service. From your first showing to the closing handshake, every detail is
            handled with discretion, precision, and care.
          </motion.p>

          {/* Contact rows */}
          <motion.ul
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 grid gap-3 sm:grid-cols-2"
          >
            {[
              { icon: Phone, label: '+1 (778) 900-2235', href: 'tel:+17789002235' },
              { icon: Mail, label: 'mls@strawhomes.com', href: 'mailto:mls@strawhomes.com' },
              { icon: Globe, label: 'strawhomes.com', href: 'https://strawhomes.com' }
            ].map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="group flex items-center gap-3 rounded-xl border border-brand bg-white/70 px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-brand-blue/30 hover:bg-white hover:shadow-card"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue/8 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                    <Icon className="h-[15px] w-[15px]" aria-hidden />
                  </span>
                  <span className="text-[14px] font-medium text-brand-navy">{label}</span>
                </a>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
