import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const REVIEWS = [
  {
    quote:
      'Richard sold our Shaughnessy home above ask in under two weeks. From staging to negotiation, every step felt completely effortless.',
    name: 'Emily & David Chen',
    detail: 'Sold in Shaughnessy'
  },
  {
    quote:
      'We were first-time buyers and Richard treated us with the same attention as his top clients. The market intelligence alone was worth it.',
    name: 'Priya Sharma',
    detail: 'Bought in Kitsilano'
  },
  {
    quote:
      "Discreet, exceptionally thorough, and a complete pleasure to work with. Strawhomes is the only team we'll ever use.",
    name: 'Michael Reid',
    detail: 'Sold in Coal Harbour'
  }
];

export default function Testimonials() {
  return (
    <section className="relative bg-brand-cream py-24 lg:py-32" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-hero px-6 md:px-10 lg:px-14">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-10 bg-brand-green" aria-hidden />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-green">
              Clients
            </span>
          </motion.div>

          <motion.h2
            id="reviews-heading"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-display text-[36px] font-medium leading-[1.05] tracking-[-0.015em] text-brand-blue-deep sm:text-[48px] lg:text-[54px]"
          >
            Words from the people who matter most.
          </motion.h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-3xl bg-white p-7 shadow-card ring-1 ring-black/[0.02] sm:p-8"
            >
              <Quote
                className="absolute -right-2 -top-2 h-24 w-24 rotate-180 text-brand-orange/15"
                aria-hidden
              />
              <div className="relative flex items-center gap-0.5 text-brand-orange">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
              <blockquote className="relative mt-5 font-display text-[19px] font-medium leading-[1.55] text-brand-blue-deep">
                "{r.quote}"
              </blockquote>
              <figcaption className="relative mt-6 border-t border-brand pt-4">
                <div className="text-[14px] font-semibold text-brand-blue">{r.name}</div>
                <div className="mt-0.5 text-[12px] uppercase tracking-[0.14em] text-brand-navy/55">
                  {r.detail}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
