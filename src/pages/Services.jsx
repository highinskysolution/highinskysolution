import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SmartImage from '../components/SmartImage';
import { FULL_SERVICES_CATALOG } from '../data/engineeringData';

const FILTER_TABS = [
  { key: 'all', label: 'All Services' },
  { key: 'dev', label: 'Websites & Apps' },
  { key: 'business', label: 'Business & Automation' },
  { key: 'ai', label: 'AI & Cloud Setup' },
];

const Services = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = searchParams.get('filter') || 'all';
  const [activeFilter, setActiveFilter] = useState(
    FILTER_TABS.some((t) => t.key === initialFilter) ? initialFilter : 'all'
  );

  useEffect(() => {
    const paramFilter = searchParams.get('filter');
    if (paramFilter && FILTER_TABS.some((t) => t.key === paramFilter)) {
      setActiveFilter(paramFilter);
    } else if (!paramFilter) {
      setActiveFilter('all');
    }
  }, [searchParams]);

  const handleFilterClick = (filterKey) => {
    setActiveFilter(filterKey);
    if (filterKey === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ filter: filterKey });
    }
  };

  const filteredServices =
    activeFilter === 'all'
      ? FULL_SERVICES_CATALOG
      : FULL_SERVICES_CATALOG.filter((service) => service.category === activeFilter);

  return (
    <div className="bg-[#07090E] text-[#F8FAFC]">
      {/* Hero */}
      <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-20 border-b border-white/[0.07] overflow-hidden">
        <div className="absolute inset-0 arch-grid-bg pointer-events-none" />
        <div className="absolute inset-0 top-spotlight pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <div className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-3">
            OUR SERVICES
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white mb-6">
            Solutions Built for{' '}
            <span className="bg-gradient-to-r from-white via-slate-200 to-sky-400 bg-clip-text text-transparent">
              Your Business.
            </span>
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-10">
            Explore the services we provide—from custom websites and mobile apps to time-saving business automation.
          </p>

          {/* Clean Category Filter Buttons */}
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-xl bg-[#0D111A] border border-white/[0.08]">
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => handleFilterClick(tab.key)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-sky-400 text-slate-950 font-semibold shadow-[0_0_16px_rgba(56,189,248,0.25)]'
                      : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.04]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Services Photo Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="enterprise-card overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Service Photograph */}
                  <div className="relative h-52 w-full overflow-hidden border-b border-white/[0.07]">
                    <SmartImage
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D111A] via-[#0D111A]/20 to-transparent" />
                    <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-md bg-[#07090E]/85 backdrop-blur-md border border-white/[0.1] text-xs font-medium text-sky-400">
                      {service.badge}
                    </span>
                  </div>

                  {/* Description & Features */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl font-semibold text-[#F8FAFC] mb-2.5 group-hover:text-sky-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    <div className="pt-4 border-t border-white/[0.07] space-y-2.5">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-xs font-medium text-slate-200"
                        >
                          <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 pt-2">
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <span>Get a Quote for This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 border-t border-white/[0.06] bg-[#0A0D14]/60 text-center px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Not sure which service{' '}
            <span className="bg-gradient-to-r from-white via-slate-200 to-sky-400 bg-clip-text text-transparent">
              fits best?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] mb-8">
            Tell us about your business goals and we will recommend the right solution and pricing for you.
          </p>
          <Link
            to="/contact"
            className="bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold px-7 py-3.5 rounded-lg inline-flex items-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all"
          >
            <span>Request Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
