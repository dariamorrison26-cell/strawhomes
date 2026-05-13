import { motion } from 'framer-motion';
import {
  Search,
  Home,
  TrendingUp,
  Phone,
  Mail,
  Globe,
  Building2,
  BarChart2,
  CalendarDays,
  Star,
  ShieldCheck
} from 'lucide-react';
import { useState } from 'react';

const TABS = ['Buy', 'Sell', 'Communities'];

/**
 * Verified facts (from strawhomes.com):
 *  - 20+ years experience
 *  - $80M+ in sales
 *  - 90+ transactions per year
 *  - RE/MAX Hall of Fame · Medallion Member 7 years · Top 10% of realtors
 *  - Phone: +1 (778) 900-2235
 *  - Email: mls@strawhomes.com
 *  - Office: 8481 Saskatchewan Ln, Vancouver, BC
 */
const STATS = [
  { icon: Building2, value: '$80M+', label: 'Total Sales Volume', tone: 'blue' },
  { icon: CalendarDays, value: '20+', label: 'Years of Experience', tone: 'green' },
  { icon: Star, value: '90+', label: 'Transactions / Year', tone: 'orange' },
  { icon: BarChart2, value: 'Top 10%', label: 'Vancouver Realtors', tone: 'blue' }
];

const TONES = {
  blue: 'bg-brand-blue text-white',
  green: 'bg-brand-green text-white',
  orange: 'bg-brand-orange text-white'
};

export default function Hero() {
  const [tab, setTab] = useState('Buy');

  return (
    <section className="relative isolate w-full h-screen flex flex-col overflow-hidden" aria-label="Hero">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <video
          src="/assets/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-[65%_40%]"
        />
      </div>

      <div className="relative flex-1 max-w-hero pt-32 pb-2 pl-6 pr-6 md:pl-12 md:pr-8 md:pt-40 lg:pl-20 lg:pr-0 lg:pt-52 xl:pl-24">
        <div className="grid gap-8 items-end lg:grid-cols-[1fr_330px] lg:gap-6 xl:gap-8">
          {/* LEFT */}
          <div className="flex flex-col">
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[42px] font-light leading-[0.97] tracking-[-0.025em] text-brand-blue sm:text-[54px] md:text-[72px] lg:text-[84px] xl:text-[96px]"
              style={{ fontFeatureSettings: '"kern" 1, "liga" 1', letterSpacing: '-0.025em' }}
            >
              Find Your
              <br />
              Dream Home
            </motion.h1>

            {/* Orange accent line — matching reference design */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'left' }}
              className="mt-2.5 h-[3px] w-12 rounded-full bg-brand-orange"
              aria-hidden
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2.5 max-w-xl text-[14px] font-normal leading-relaxed text-brand-blue/75 sm:text-[15px]"
            >
              Strawhomes.com is the smart way to search real estate in Vancouver, BC.
            </motion.p>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 w-full max-w-[820px]"
            >
              <div role="tablist" className="flex w-fit overflow-hidden rounded-t-xl">
                {TABS.map((t) => {
                  const active = t === tab;
                  return (
                    <button
                      key={t}
                      role="tab"
                      aria-selected={active}
                      onClick={() => setTab(t)}
                      className={`px-6 py-2 text-[13px] font-semibold transition-all sm:px-8 ${active
                        ? 'bg-brand-blue text-white shadow-[0_-6px_20px_-8px_rgba(11,34,57,0.4)]'
                        : 'bg-white/80 text-brand-navy/75 hover:bg-white'
                        }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>

              <div className="rounded-b-2xl rounded-tr-2xl bg-white p-3 shadow-card sm:p-4">
                <label className="relative block">
                  <span className="sr-only">Search</span>
                  <Search
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-blue/70"
                    aria-hidden
                  />
                  <input
                    type="text"
                    placeholder="City, Neighbourhood, Address or MLS® #"
                    className="h-10 w-full rounded-xl border border-brand bg-brand-soft pl-12 pr-4 text-[14px] text-brand-navy placeholder:text-brand-navy/45 transition-all focus:border-brand-blue focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-blue/10"
                  />
                </label>

                <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-[1fr_1fr_1fr_1fr_auto]">
                  <FilterSelect label="Min Price" options={['No Min', '$500K', '$750K', '$1M', '$1.5M', '$2M', '$3M', '$5M+']} />
                  <FilterSelect label="Max Price" options={['No Max', '$750K', '$1M', '$1.5M', '$2M', '$3M', '$5M+', '$10M+']} />
                  <FilterSelect label="Beds" options={['Any', '1+', '2+', '3+', '4+', '5+']} />
                  <FilterSelect label="Baths" options={['Any', '1+', '2+', '3+', '4+']} />
                  <button
                    type="button"
                    className="col-span-2 inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-orange-dark hover:shadow-card-hover focus-ring md:col-span-1"
                  >
                    Search Homes
                  </button>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-3 flex w-full max-w-[820px] flex-col gap-2 sm:flex-row"
            >
              <a
                href="#listings"
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-4 text-[13.5px] font-semibold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-card-hover"
              >
                <Home className="h-[18px] w-[18px]" aria-hidden /> Buy a Home
              </a>
              {/* Ghost CTA — secondary priority to avoid Paradox of Choice */}
              <a
                href="#value"
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-brand-blue/30 bg-white/70 px-6 py-4 text-[13.5px] font-semibold text-brand-blue backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue hover:bg-white hover:shadow-card"
              >
                <TrendingUp className="h-[18px] w-[18px]" aria-hidden /> Value My Home
              </a>
            </motion.div>

            {/* Stat cards */}
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.75 } }
              }}
              className="mt-12 grid w-full grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4"
            >
              {STATS.map(({ icon: Icon, value, label, tone }) => (
                <motion.li
                  key={label}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 rounded-2xl bg-white px-4 pt-3.5 pb-7 shadow-card ring-1 ring-black/[0.02] sm:px-5 sm:pt-4 sm:pb-8"
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${TONES[tone]}`}
                    aria-hidden
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-display text-[20px] font-semibold leading-none text-brand-blue sm:text-[22px]">
                      {value}
                    </div>
                    <div className="mt-1.5 text-[12.5px] font-medium leading-tight text-brand-navy/70">
                      {label}
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* RIGHT — Profile Card */}
          <div className="profile-overflow-right mx-auto w-full max-w-[330px] self-end lg:mx-0 lg:justify-self-end">
            <motion.aside
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="w-full overflow-hidden rounded-3xl bg-white shadow-profile ring-1 ring-black/[0.02]"
              aria-label="Richard Morrison"
            >
              <div className="relative aspect-square w-full bg-brand-soft">
                <img
                  src="/assets/richard-morrison.png"
                  alt="Richard Morrison"
                  className="absolute inset-0 h-full w-full object-cover object-[center_25%]"
                  loading="eager"
                />
              </div>

              <div className="px-5 py-4 sm:px-6 sm:py-5">
                <h3 className="font-display text-[22px] font-semibold leading-tight text-brand-blue">
                  Richard Morrison
                </h3>
                <p className="mt-1 text-[11.5px] font-medium uppercase tracking-[0.14em] text-brand-navy/70">
                  Vancouver Realtor
                </p>
                <p className="text-[11.5px] text-brand-navy/70">
                  RE/MAX Real Estate Services · Vancouver, BC
                </p>

                <div className="mt-3 h-[2px] w-10 rounded-full bg-brand-green" aria-hidden />

                <ul className="mt-3 space-y-2 text-[13.5px]">
                  <li>
                    <a
                      href="tel:+17789002235"
                      className="group flex items-center gap-3 text-brand-navy transition-colors hover:text-brand-blue"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue/8 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                        <Phone className="h-[15px] w-[15px]" aria-hidden />
                      </span>
                      <span className="font-medium">+1 (778) 900-2235</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:mls@strawhomes.com"
                      className="group flex items-center gap-3 text-brand-navy transition-colors hover:text-brand-blue"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue/8 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                        <Mail className="h-[15px] w-[15px]" aria-hidden />
                      </span>
                      <span className="font-medium">mls@strawhomes.com</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://strawhomes.com"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 text-brand-navy transition-colors hover:text-brand-blue"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue/8 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                        <Globe className="h-[15px] w-[15px]" aria-hidden />
                      </span>
                      <span className="font-medium">strawhomes.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>

      {/* Trust bar — full-width, outside max-w-hero */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="w-full bg-gradient-to-r from-brand-blue via-brand-blue to-brand-blue-dark"
      >
        <div className="mx-auto flex max-w-hero flex-col items-center justify-center gap-3 px-6 py-5 text-center text-white md:flex-row md:gap-6 md:px-10 md:py-6 lg:px-14">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="h-5 w-5 text-brand-green" aria-hidden />
            <span className="text-[13px] font-semibold tracking-wide sm:text-[14.5px]">
              Local Expertise · Trusted Guidance · Exceptional Results
            </span>
          </div>
          <span className="hidden h-5 w-px bg-white/30 md:inline-block" aria-hidden />
          <span className="text-[13px] text-white/85 sm:text-[14px]">
            Proudly Helping Clients Across Vancouver and the Lower Mainland
          </span>
        </div>
      </motion.div>
    </section>
  );
}

function FilterSelect({ label, options }) {
  return (
    <label className="relative block">
      <span className="sr-only">{label}</span>
      <select
        defaultValue=""
        aria-label={label}
        className="select-arrow h-12 w-full cursor-pointer rounded-xl border border-brand bg-brand-soft px-4 text-[14px] font-medium text-brand-navy transition-all focus:border-brand-blue focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-blue/10"
      >
        <option value="" disabled>
          {label}
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
