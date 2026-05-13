import { motion } from 'framer-motion';
import { Bed, Bath, Maximize2, MapPin, ArrowUpRight } from 'lucide-react';

const LISTINGS = [
  {
    img: '/assets/listing-1.jpg',
    price: '$8,450,000',
    title: 'West Point Grey Estate',
    location: 'West Point Grey, Vancouver',
    beds: 6,
    baths: 7,
    sqft: '8,200',
    tag: 'New Listing'
  },
  {
    img: '/assets/listing-2.jpg',
    price: '$5,290,000',
    title: 'Coal Harbour Penthouse',
    location: 'Coal Harbour, Vancouver',
    beds: 4,
    baths: 5,
    sqft: '4,640',
    tag: 'Featured'
  },
  {
    img: '/assets/listing-3.jpg',
    price: '$12,800,000',
    title: 'Belmont Avenue Mansion',
    location: 'Point Grey, Vancouver',
    beds: 7,
    baths: 9,
    sqft: '11,500',
    tag: 'Exclusive'
  },
  {
    img: '/assets/listing-4.jpg',
    price: '$3,895,000',
    title: 'Kitsilano Modern Villa',
    location: 'Kitsilano, Vancouver',
    beds: 5,
    baths: 4,
    sqft: '3,900',
    tag: 'New'
  },
  {
    img: '/assets/listing-5.jpg',
    price: '$6,750,000',
    title: 'Shaughnessy Heritage',
    location: 'Shaughnessy, Vancouver',
    beds: 5,
    baths: 6,
    sqft: '6,420',
    tag: 'Featured'
  },
  {
    img: '/assets/listing-6.jpg',
    price: '$4,150,000',
    title: 'North Shore Retreat',
    location: 'West Vancouver, BC',
    beds: 4,
    baths: 4,
    sqft: '4,100',
    tag: 'Open House'
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
  })
};

export default function Listings() {
  return (
    <section
      id="listings"
      className="relative bg-white py-24 lg:py-32"
      aria-labelledby="listings-heading"
    >
      <div className="mx-auto max-w-hero px-6 md:px-10 lg:px-14">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-10 bg-brand-green" aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-green">
                Featured Properties
              </span>
            </motion.div>
            <motion.h2
              id="listings-heading"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 max-w-3xl font-display text-[36px] font-medium leading-[1.05] tracking-[-0.015em] text-brand-blue-deep sm:text-[48px] lg:text-[58px]"
            >
              Curated Homes in <span className="italic accent-sheen animate-shimmer">Vancouver</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-4 max-w-prose text-[16px] font-light leading-relaxed text-brand-navy/70"
            >
              Hand-selected residences across the city's most coveted neighbourhoods —
              from waterfront penthouses to architectural estates.
            </motion.p>
          </div>

          <motion.a
            href="#all-listings"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="group inline-flex items-center gap-2 rounded-full border border-brand-blue/20 px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-brand-blue transition-all hover:bg-brand-blue hover:text-white hover:shadow-card"
          >
            View All Listings
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
          </motion.a>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LISTINGS.map((l, i) => (
            <motion.article
              key={l.title}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              className="listing-card group relative overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-black/[0.03] transition-shadow duration-500 hover:shadow-card-hover"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={l.img}
                  alt={l.title}
                  loading="lazy"
                  className="listing-img absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
                  <span className="rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-blue shadow-sm">
                    {l.tag}
                  </span>
                  <span className="rounded-full bg-brand-blue/95 px-3 py-1.5 text-[12px] font-semibold text-white shadow-sm backdrop-blur">
                    {l.price}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="font-display text-[22px] font-semibold leading-tight text-brand-blue-deep transition-colors group-hover:text-brand-blue">
                  {l.title}
                </h3>
                <div className="mt-1.5 inline-flex items-center gap-1.5 text-[13px] text-brand-navy/65">
                  <MapPin className="h-3.5 w-3.5 text-brand-green" aria-hidden />
                  {l.location}
                </div>

                <div className="mt-5 flex items-center gap-5 border-t border-brand pt-4 text-[13px] text-brand-navy/75">
                  <span className="inline-flex items-center gap-1.5">
                    <Bed className="h-4 w-4 text-brand-blue" aria-hidden /> {l.beds} bd
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Bath className="h-4 w-4 text-brand-blue" aria-hidden /> {l.baths} ba
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Maximize2 className="h-4 w-4 text-brand-blue" aria-hidden /> {l.sqft} sqft
                  </span>
                </div>
              </div>

              <a
                href="#listing"
                aria-label={`View ${l.title}`}
                className="absolute inset-0 focus-ring rounded-3xl"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
