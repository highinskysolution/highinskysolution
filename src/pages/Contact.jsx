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
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-white/[0.06] bg-surface/40 relative overflow-hidden">
        <div className="glow-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand/[0.09] animate-blob"></div>
        <div className="glow-orb bottom-[-100px] right-[8%] w-[340px] h-[340px] bg-accent/[0.08] animate-blob-slow"></div>
        <div className="container mx-auto px-6 max-w-7xl text-center relative z-10" data-aos="fade-up">
          <div className="eyebrow mb-4">Get In Touch</div>
          <h1 className="mb-6">Contact <span className="text-gradient">Engineering</span></h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Direct line to our technical team. Submit your project requirements and we will return a comprehensive technical evaluation.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 border-b border-white/[0.06] bg-paper relative overflow-hidden">
        <div className="glow-orb top-[10%] left-[-8%] w-[380px] h-[380px] bg-accent/[0.06]"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">

            <div className="lg:col-span-4" data-aos="fade-right">
              <h3 className="mb-6">Direct <span className="text-gradient">Contact</span></h3>

              <div className="flex flex-col gap-6">
                <a href="mailto:highinskysolution@gmail.com" className="flex items-center gap-4 group">
                  <div className="icon-tile w-12 h-12 text-xl shrink-0 group-hover:bg-gradient-brand group-hover:text-[#04141a] group-hover:border-brand">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink mb-1 group-hover:text-brand transition-colors">Email Support</div>
                    <div className="text-sm text-muted">highinskysolution@gmail.com</div>
                  </div>
                </a>

                <a href="tel:+918080273949" className="flex items-center gap-4 group">
                  <div className="icon-tile w-12 h-12 text-xl shrink-0 group-hover:bg-gradient-brand group-hover:text-[#04141a] group-hover:border-brand">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink mb-1 group-hover:text-brand transition-colors">Phone / WhatsApp</div>
                    <div className="text-sm text-muted">+91 80802 73949</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="icon-tile w-12 h-12 text-xl shrink-0 shadow-glow">
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
              <div className="glass-panel p-8 lg:p-10 overflow-hidden">
                <div className="glow-orb top-[-40px] right-[-40px] w-56 h-56 bg-brand/[0.1]"></div>

                <div className="mb-8 pb-6 border-b border-white/[0.07] relative z-10">
                  <h3 className="mb-2">Request an <span className="text-gradient">Evaluation</span></h3>
                  <p className="text-sm text-muted">Please provide as much technical detail as possible.</p>
                </div>
                
                <form action="https://formsubmit.co/highinskysolution@gmail.com" method="POST" className="relative z-10">
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_subject" value="New HIGH IN SKY SOLUTIONS Inquiry!" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-xs font-semibold text-ink mb-2" htmlFor="name">Full Name</label>
                      <input className="field-input" id="name" name="name" type="text" required />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ink mb-2" htmlFor="email">Email Address</label>
                      <input className="field-input" id="email" name="email" type="email" required />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ink mb-2" htmlFor="phone">Phone Number</label>
                      <input className="field-input" id="phone" name="phone" type="tel" maxLength="10" pattern="[0-9]{10}" value={phone} onChange={handlePhoneChange} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ink mb-2" htmlFor="budget">Estimated Budget</label>
                      <select className="field-input appearance-none cursor-pointer" id="budget" name="budget" defaultValue="Need guidance">
                        <option className="bg-surface text-ink">Need guidance</option>
                        <option className="bg-surface text-ink">Basic website</option>
                        <option className="bg-surface text-ink">Business website</option>
                        <option className="bg-surface text-ink">Custom project</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-semibold text-ink mb-2" htmlFor="service">Primary Service Required</label>
                      <select className="field-input appearance-none cursor-pointer" id="service" name="service" value={serviceOption} onChange={(e) => setServiceOption(e.target.value)}>
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
                      <textarea className="field-input resize-y min-h-[120px]" id="message" name="message" required></textarea>
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
      <section className="py-24 lg:py-32 bg-surface/40 relative overflow-hidden">
        <div className="glow-orb bottom-[5%] right-[-8%] w-[400px] h-[400px] bg-brand/[0.07]"></div>
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="eyebrow mb-4">Support</div>
            <h2 className="mb-4">Frequently Asked <span className="text-gradient">Questions</span></h2>
            <p className="text-muted text-lg">Standard policies and procedures.</p>
          </div>

          <div className="flex flex-col gap-4" data-aos="fade-up">
            {faqs.map((faq, index) => (
              <div key={index} className={`glass-panel overflow-hidden transition-all duration-300 ease-premium ${openFaq === index ? 'border-brand/30 shadow-glow' : ''}`}>
                <button
                  className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className={`text-sm font-semibold transition-colors ${openFaq === index ? 'text-brand' : 'text-ink'}`}>{faq.q}</span>
                  <i className={`bi bi-chevron-down transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-brand' : 'text-muted'}`}></i>
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
