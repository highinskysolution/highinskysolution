import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const servicesData = [
    {
      id: 1,
      category: 'dev',
      title: 'Website Design & Development',
      icon: 'bi-window-sidebar',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
      desc: 'High-performance, responsive websites built with modern frameworks. We construct fluid layouts that prioritize speed and accessibility.',
      features: ['React & Next.js', 'Tailwind CSS', 'SEO Optimization']
    },
    {
      id: 2,
      category: 'dev',
      title: 'Custom Software Architecture',
      icon: 'bi-code-square',
      image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80',
      desc: 'Scalable backend systems and complex logic processors. We design database schemas and server architectures that handle massive loads.',
      features: ['Node.js & Express', 'RESTful APIs', 'Database Design']
    },
    {
      id: 3,
      category: 'ai',
      title: 'AI Integration',
      icon: 'bi-robot',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
      desc: 'Integrate powerful Large Language Models (LLMs) and custom AI logic directly into your business applications.',
      features: ['OpenAI Integration', 'Custom Chatbots', 'Data Processing']
    },
    {
      id: 4,
      category: 'business',
      title: 'Workflow Automation',
      icon: 'bi-cpu',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      desc: 'Eliminate manual data entry and repetitive tasks. We build intelligent scripts that connect your CRM, email, and databases securely.',
      features: ['API Connectors', 'Python Scripting', 'Zapier/Make']
    },
    {
      id: 5,
      category: 'business',
      title: 'Enterprise Dashboards',
      icon: 'bi-graph-up-arrow',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      desc: 'Secure internal portals that allow your team to monitor metrics, manage users, and handle business operations from a single interface.',
      features: ['Admin Panels', 'Data Visualization', 'Secure Auth']
    },
    {
      id: 6,
      category: 'dev',
      title: 'Cloud Solutions',
      icon: 'bi-cloud-check',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      desc: 'Reliable deployment and hosting architectures. We set up load balancers, secure databases, and CI/CD pipelines.',
      features: ['AWS / Vercel', 'Docker', 'Server Monitoring']
    }
  ];

  const filteredServices = activeFilter === 'all' 
    ? servicesData 
    : servicesData.filter(service => service.category === activeFilter);

  return (
    <div className="bg-paper">
      
      {/* Minimal Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-white/[0.06] bg-surface/40 relative overflow-hidden">
        <div className="glow-orb top-[-120px] right-[-60px] w-[460px] h-[460px] bg-brand/[0.12] animate-blob"></div>
        <div className="glow-orb bottom-[-120px] left-[-60px] w-[380px] h-[380px] bg-accent/[0.09] animate-blob-slow"></div>
        <div className="container mx-auto px-6 max-w-7xl text-center relative z-10" data-aos="fade-up">
          <div className="eyebrow mb-4">What We Offer</div>
          <h1 className="mb-6">Capabilities & <span className="text-gradient">Expertise</span></h1>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-12">
            A comprehensive suite of engineering services. From beautiful user interfaces to robust cloud architectures and intelligent automation.
          </p>
          
          {/* Simple Filter Tabs */}
          <div className="inline-flex flex-wrap justify-center gap-2">
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ease-premium ${activeFilter === 'all' ? 'bg-gradient-brand text-[#04141a] shadow-glow-btn -translate-y-0.5' : 'bg-white/[0.04] border border-white/10 text-muted hover:text-brand hover:border-brand/40 hover:-translate-y-0.5'}`} 
              onClick={() => handleFilterClick('all')}
            >
              All Solutions
            </button>
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ease-premium ${activeFilter === 'dev' ? 'bg-gradient-brand text-[#04141a] shadow-glow-btn -translate-y-0.5' : 'bg-white/[0.04] border border-white/10 text-muted hover:text-brand hover:border-brand/40 hover:-translate-y-0.5'}`} 
              onClick={() => handleFilterClick('dev')}
            >
              Development
            </button>
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ease-premium ${activeFilter === 'business' ? 'bg-gradient-brand text-[#04141a] shadow-glow-btn -translate-y-0.5' : 'bg-white/[0.04] border border-white/10 text-muted hover:text-brand hover:border-brand/40 hover:-translate-y-0.5'}`} 
              onClick={() => handleFilterClick('business')}
            >
              Enterprise
            </button>
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ease-premium ${activeFilter === 'ai' ? 'bg-gradient-brand text-[#04141a] shadow-glow-btn -translate-y-0.5' : 'bg-white/[0.04] border border-white/10 text-muted hover:text-brand hover:border-brand/40 hover:-translate-y-0.5'}`} 
              onClick={() => handleFilterClick('ai')}
            >
              AI & Automation
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid - Clean Enterprise Cards */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="glow-orb top-[20%] left-[-10%] w-[400px] h-[400px] bg-accent/[0.06]"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="enterprise-card h-full flex flex-col overflow-hidden group bg-surface/50"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                {/* Photo Header */}
                <div className="h-[180px] w-full border-b border-white/[0.07] overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-[900ms] ease-premium group-hover:scale-[1.08]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"></div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="icon-tile w-11 h-11 text-lg shrink-0 group-hover:bg-gradient-brand group-hover:text-[#04141a] group-hover:border-brand">
                      <i className={`bi ${service.icon}`}></i>
                    </span>
                    <h3 className="text-lg mb-0">{service.title}</h3>
                  </div>

                  <p className="text-sm leading-relaxed flex-grow mb-6">{service.desc}</p>

                  <div className="pt-4 border-t border-white/[0.07]">
                    <ul className="flex flex-col gap-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-semibold text-ink">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand shadow-glow"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal CTA */}
      <section className="py-24 lg:py-32 bg-surface/40 border-t border-white/[0.06] text-center relative overflow-hidden">
        <div className="glow-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] bg-brand/[0.08] animate-glow-pulse"></div>
        <div className="container mx-auto px-6 max-w-3xl relative z-10" data-aos="fade-up">
          <h2 className="mb-6">Need a <span className="text-gradient">custom stack?</span></h2>
          <p className="text-lg text-muted mb-10">
            Don't see exactly what you need? We provide bespoke software architecture tailored precisely to your operational requirements.
          </p>
          <Link className="btn btn-brand btn-lg group" to="/contact">
            Discuss Custom Solutions
            <i className="bi bi-arrow-right transition-transform duration-300 ease-premium group-hover:translate-x-1"></i>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;
