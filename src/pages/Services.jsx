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
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-line bg-surface">
        <div className="container mx-auto px-6 max-w-7xl text-center" data-aos="fade-up">
          <h1 className="mb-6 text-brand drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">Capabilities & Expertise</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-12">
            A comprehensive suite of engineering services. From beautiful user interfaces to robust cloud architectures and intelligent automation.
          </p>
          
          {/* Simple Filter Tabs */}
          <div className="inline-flex flex-wrap justify-center gap-2">
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${activeFilter === 'all' ? 'bg-brand text-[#0a0a0a] shadow-glow' : 'bg-paper border border-line text-ink hover:bg-zinc-800'}`} 
              onClick={() => handleFilterClick('all')}
            >
              All Solutions
            </button>
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${activeFilter === 'dev' ? 'bg-brand text-[#0a0a0a] shadow-glow' : 'bg-paper border border-line text-ink hover:bg-zinc-800'}`} 
              onClick={() => handleFilterClick('dev')}
            >
              Development
            </button>
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${activeFilter === 'business' ? 'bg-brand text-[#0a0a0a] shadow-glow' : 'bg-paper border border-line text-ink hover:bg-zinc-800'}`} 
              onClick={() => handleFilterClick('business')}
            >
              Enterprise
            </button>
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${activeFilter === 'ai' ? 'bg-brand text-[#0a0a0a] shadow-glow' : 'bg-paper border border-line text-ink hover:bg-zinc-800'}`} 
              onClick={() => handleFilterClick('ai')}
            >
              AI & Automation
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid - Clean Enterprise Cards */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div 
                key={service.id} 
                className="enterprise-card h-full flex flex-col overflow-hidden group bg-surface"
                data-aos="fade-up" 
                data-aos-delay={index * 50}
              >
                {/* Photo Header */}
                <div className="h-[180px] w-full bg-paper border-b border-line overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                
                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <i className={`bi ${service.icon} text-brand text-xl drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]`}></i>
                    <h3 className="text-lg mb-0">{service.title}</h3>
                  </div>
                  
                  <p className="text-sm leading-relaxed flex-grow mb-6">{service.desc}</p>
                  
                  <div className="pt-4 border-t border-line">
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
      <section className="py-24 bg-surface border-t border-line text-center">
        <div className="container mx-auto px-6 max-w-3xl" data-aos="fade-up">
          <h2 className="mb-6">Need a custom stack?</h2>
          <p className="text-lg text-muted mb-10">
            Don't see exactly what you need? We provide bespoke software architecture tailored precisely to your operational requirements.
          </p>
          <Link className="btn btn-brand btn-lg" to="/contact">
            Discuss Custom Solutions
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;
