import { motion } from 'framer-motion';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';

export default function CtaBand() {
  return (
    <section id="contact" className="relative overflow-hidden bg-brand-soft py-24 lg:py-32">
      <div className="mx-auto max-w-hero px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-blue-deep px-8 py-16 text-white shadow-glass sm:px-12 lg:px-20 lg:py-24"
        >
          {/* Decorative pattern */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-orange/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-white/8 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-brand-green" aria-hidden />
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-green">
                  Let's Talk
                </span>
              </div>
              <h2 className="mt-5 font-display text-[36px] font-medium leading-[1.05] tracking-[-0.015em] sm:text-[48px] lg:text-[60px]">
                Ready to find your <span className="italic accent-sheen animate-shimmer">dream home</span>?
              </h2>
              <p className="mt-5 max-w-prose text-[16px] font-light leading-relaxed text-white/75">
                Whether you're buying, selling, or simply curious about the market — a single
                conversation is the start of something extraordinary.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+17789002235"
                className="group flex items-center justify-between rounded-2xl bg-white/10 px-6 py-5 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green text-white">
                    <Phone className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                      Call
                    </div>
                    <div className="mt-0.5 font-display text-[20px] font-semibold">
                      +1 (778) 900-2235
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-white/70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </a>

              <a
                href="mailto:mls@strawhomes.com"
                className="group flex items-center justify-between rounded-2xl bg-white/10 px-6 py-5 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green text-white">
                    <Mail className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                      Email
                    </div>
                    <div className="mt-0.5 font-display text-[18px] font-semibold">
                      mls@strawhomes.com
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-white/70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </a>

              <a
                href="#consultation"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-orange px-6 py-5 text-[14px] font-semibold uppercase tracking-[0.1em] text-white transition-all hover:-translate-y-0.5 hover:bg-brand-orange-dark hover:shadow-card-hover"
              >
                Schedule a Private Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
