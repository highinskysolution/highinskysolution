import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [phone, setPhone] = useState('');
  const [serviceOption, setServiceOption] = useState('Website Design');
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const serviceFromUrl = searchParams.get('service');
    if (serviceFromUrl) {
      setServiceOption(serviceFromUrl);
    }
  }, [searchParams]);

  const handlePhoneChange = (e) => {
    setPhone(e.target.value.replace(/[^0-9]/g, ''));
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is your typical project timeline?",
      a: "For custom website design and development, it usually takes 2–4 weeks depending on the complexity. Cloud infrastructure deployments and custom automations can typically be configured within 1–2 weeks."
    },
    {
      q: "Do you provide post-launch support?",
      a: "Yes. Every project includes 30 days of complimentary technical support. We also offer extended monthly hosting, monitoring, and security management plans."
    },
    {
      q: "How does the billing structure work?",
      a: "Our standard model operates on a milestone basis: a percentage upfront deposit to initiate development, with the remaining balance due upon milestone completions."
    },
    {
      q: "Do you work with international clients?",
      a: "Absolutely. We work with clients globally. All progress reviews and meetings are scheduled online in timezones convenient for you."
    }
  ];

  return (
    <div className="bg-paper">
      
      {/* Minimal Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-line bg-surface relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] pointer-events-none animate-blob"></div>
        <div className="container mx-auto px-6 max-w-7xl text-center relative z-10" data-aos="fade-up">
          <h1 className="mb-6">Contact Engineering</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Direct line to our technical team. Submit your project requirements and we will return a comprehensive technical evaluation.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 border-b border-line bg-paper">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
            
            <div className="lg:col-span-4" data-aos="fade-right">
              <h3 className="mb-6 text-brand drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">Direct Contact</h3>
              
              <div className="flex flex-col gap-6">
                <a href="mailto:highinskysolution@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-surface border border-line text-brand flex items-center justify-center text-xl transition-colors group-hover:bg-brand group-hover:text-paper group-hover:border-brand group-hover:shadow-glow">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink mb-1 group-hover:text-brand transition-colors">Email Support</div>
                    <div className="text-sm text-muted">highinskysolution@gmail.com</div>
                  </div>
                </a>
                
                <a href="tel:+918080273949" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-surface border border-line text-brand flex items-center justify-center text-xl transition-colors group-hover:bg-brand group-hover:text-paper group-hover:border-brand group-hover:shadow-glow">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink mb-1 group-hover:text-brand transition-colors">Phone / WhatsApp</div>
                    <div className="text-sm text-muted">+91 80802 73949</div>
                  </div>
                </a>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface border border-line text-brand flex items-center justify-center text-xl shadow-glow">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink mb-1">Headquarters</div>
                    <div className="text-sm text-muted">Mumbai, Maharashtra, India</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-8" data-aos="fade-left">
              <div className="bg-surface border border-line rounded-2xl p-8 lg:p-10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand/5 rounded-full blur-[80px] pointer-events-none"></div>
                
                <div className="mb-8 pb-6 border-b border-line relative z-10">
                  <h3 className="mb-2">Request an Evaluation</h3>
                  <p className="text-sm text-muted">Please provide as much technical detail as possible.</p>
                </div>
                
                <form action="https://formsubmit.co/highinskysolution@gmail.com" method="POST" className="relative z-10">
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_subject" value="New HIGH IN SKY SOLUTIONS Inquiry!" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-xs font-semibold text-ink mb-2" htmlFor="name">Full Name</label>
                      <input className="w-full px-4 py-2.5 rounded-lg border border-line bg-paper text-ink text-sm focus:bg-surface focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all placeholder-muted/50" id="name" name="name" type="text" required />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ink mb-2" htmlFor="email">Email Address</label>
                      <input className="w-full px-4 py-2.5 rounded-lg border border-line bg-paper text-ink text-sm focus:bg-surface focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all placeholder-muted/50" id="email" name="email" type="email" required />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ink mb-2" htmlFor="phone">Phone Number</label>
                      <input className="w-full px-4 py-2.5 rounded-lg border border-line bg-paper text-ink text-sm focus:bg-surface focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all placeholder-muted/50" id="phone" name="phone" type="tel" maxLength="10" pattern="[0-9]{10}" value={phone} onChange={handlePhoneChange} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ink mb-2" htmlFor="budget">Estimated Budget</label>
                      <select className="w-full px-4 py-2.5 rounded-lg border border-line bg-paper text-ink text-sm focus:bg-surface focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all appearance-none cursor-pointer" id="budget" name="budget" defaultValue="Need guidance">
                        <option className="bg-surface text-ink">Need guidance</option>
                        <option className="bg-surface text-ink">Basic website</option>
                        <option className="bg-surface text-ink">Business website</option>
                        <option className="bg-surface text-ink">Custom project</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-semibold text-ink mb-2" htmlFor="service">Primary Service Required</label>
                      <select className="w-full px-4 py-2.5 rounded-lg border border-line bg-paper text-ink text-sm focus:bg-surface focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all appearance-none cursor-pointer" id="service" name="service" value={serviceOption} onChange={(e) => setServiceOption(e.target.value)}>
                        <option className="bg-surface text-ink">Website Design</option>
                        <option className="bg-surface text-ink">Software Development</option>
                        <option className="bg-surface text-ink">App Development</option>
                        <option className="bg-surface text-ink">Business Apps</option>
                        <option className="bg-surface text-ink">AI Integration</option>
                        <option className="bg-surface text-ink">Automation</option>
                        <option className="bg-surface text-ink">Cloud Solution</option>
                        <option className="bg-surface text-ink">IT Consulting</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-semibold text-ink mb-2" htmlFor="message">Technical Requirements</label>
                      <textarea className="w-full px-4 py-3 rounded-lg border border-line bg-paper text-ink text-sm focus:bg-surface focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all resize-y min-h-[120px] placeholder-muted/50" id="message" name="message" required></textarea>
                    </div>
                  </div>
                  
                  <button className="btn btn-brand w-full" type="submit">
                    Submit Requirements
                  </button>
                  
                  <p className="text-xs text-muted text-center mt-4">
                    <i className="bi bi-shield-lock text-brand mr-1"></i> Form data is encrypted and securely transmitted.
                  </p>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Minimal FAQ Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="mb-4 text-brand drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">Frequently Asked Questions</h2>
            <p className="text-muted text-lg">Standard policies and procedures.</p>
          </div>
          
          <div className="flex flex-col gap-4" data-aos="fade-up">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-paper border border-line rounded-lg overflow-hidden transition-all duration-200">
                <button 
                  className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className={`text-sm font-semibold transition-colors ${openFaq === index ? 'text-brand' : 'text-ink'}`}>{faq.q}</span>
                  <i className={`bi bi-chevron-down transition-transform duration-200 ${openFaq === index ? 'rotate-180 text-brand' : 'text-muted'}`}></i>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-5 pt-0 text-muted text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
