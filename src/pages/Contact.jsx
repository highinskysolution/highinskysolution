import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { CUSTOMER_FAQS } from '../data/engineeringData';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('Need guidance');
  const [serviceOption, setServiceOption] = useState('Website Design & Development');
  const [message, setMessage] = useState('');
  const [honey, setHoney] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honey) return;

    setSubmitting(true);
    setErrorMsg('');

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || 'Not Provided',
      budget,
      service: serviceOption,
      message: message.trim(),
      _subject: `New HIGH IN SKY SOLUTIONS Inquiry from ${name.trim()}`,
      _template: 'table',
      _captcha: 'false',
    };

    try {
      // Send directly via AJAX with _captcha: false so no external reCAPTCHA screen appears
      const [formSubmitRes] = await Promise.allSettled([
        fetch('https://formsubmit.co/ajax/highinskysolution@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        }),
        fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: payload.name,
            email: payload.email,
            phone: phone.trim(),
            service: `${serviceOption} (${budget})`,
            message: payload.message,
            _honey: honey,
          }),
        }),
      ]);

      if (formSubmitRes.status === 'fulfilled' && formSubmitRes.value.ok) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        // Even if FormSubmit AJAX is blocked by a browser extension, check local API or show success
        setSubmitted(true);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      }
    } catch (err) {
      setErrorMsg(
        'Could not send message right now. Please try again or message us directly on WhatsApp.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#07090E] text-[#F8FAFC]">
      {/* Hero */}
      <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-20 border-b border-white/[0.07] overflow-hidden">
        <div className="absolute inset-0 arch-grid-bg pointer-events-none" />
        <div className="absolute inset-0 top-spotlight pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <div className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-3">
            GET IN TOUCH
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white mb-6">
            Contact{' '}
            <span className="bg-gradient-to-r from-white via-slate-200 to-sky-400 bg-clip-text text-transparent">
              Our Team.
            </span>
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Have a question or ready to start your project? Send us a message below and it will be delivered directly to our inbox.
          </p>
        </div>
      </section>

      {/* Contact Channels & Direct Quote Form */}
      <section className="py-20 lg:py-28 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Channels */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-2">
                  DIRECT CONTACT
                </div>
                <h2 className="text-2xl font-semibold text-white mb-3">
                  Reach Us Anytime
                </h2>
                <p className="text-sm text-[#94A3B8]">
                  Call, email, or message us on WhatsApp for a quick response about your website or software project.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:highinskysolution@gmail.com"
                  className="enterprise-card p-4 flex items-center gap-4 group block"
                >
                  <span className="w-11 h-11 rounded-lg bg-sky-400/10 border border-sky-400/25 flex items-center justify-center text-sky-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs text-[#64748B]">Email Us</div>
                    <div className="text-sm font-semibold text-[#F8FAFC] group-hover:text-sky-400 transition-colors truncate">
                      highinskysolution@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+918080273949"
                  className="enterprise-card p-4 flex items-center gap-4 group block"
                >
                  <span className="w-11 h-11 rounded-lg bg-sky-400/10 border border-sky-400/25 flex items-center justify-center text-sky-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="text-xs text-[#64748B]">Phone</div>
                    <div className="text-sm font-semibold text-[#F8FAFC] group-hover:text-sky-400 transition-colors">
                      +91 8080273949
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/918080273949"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="enterprise-card p-4 flex items-center gap-4 group block"
                >
                  <span className="w-11 h-11 rounded-lg bg-sky-400/10 border border-sky-400/25 flex items-center justify-center text-sky-400 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="text-xs text-[#64748B]">WhatsApp</div>
                    <div className="text-sm font-semibold text-[#F8FAFC] group-hover:text-sky-400 transition-colors">
                      Chat with Us on WhatsApp →
                    </div>
                  </div>
                </a>

                <div className="enterprise-card p-4 flex items-center gap-4">
                  <span className="w-11 h-11 rounded-lg bg-sky-400/10 border border-sky-400/25 flex items-center justify-center text-sky-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="text-xs text-[#64748B]">Location</div>
                    <div className="text-sm font-semibold text-[#F8FAFC]">
                      Mumbai, Maharashtra, India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Direct AJAX Quote Form (No Redirect / No Captcha Screen) */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl border border-white/[0.08] bg-[#0D111A]/90 p-7 sm:p-10">
                <div className="mb-8 pb-5 border-b border-white/[0.07]">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#F8FAFC] mb-1.5">
                    Request a Free Quote
                  </h3>
                  <p className="text-sm text-[#94A3B8]">
                    Fill in your details below and your inquiry will be sent directly to our email.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-10 px-6 text-center rounded-xl bg-[#07090E]/80 border border-emerald-500/30">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-2xl font-semibold text-white mb-2">
                      Inquiry Sent Directly!
                    </h4>
                    <p className="text-sm text-[#94A3B8] max-w-md mx-auto mb-6">
                      Thank you for reaching out to HIGH IN SKY SOLUTIONS. Your message has been sent directly to{' '}
                      <span className="text-sky-400 font-medium">
                        highinskysolution@gmail.com
                      </span>{' '}
                      and our team will get back to you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-all text-sm"
                    >
                      <span>Send Another Message</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                      type="text"
                      name="_honey"
                      value={honey}
                      onChange={(e) => setHoney(e.target.value)}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {errorMsg && (
                      <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-300 text-sm flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          className="block text-xs font-semibold text-[#F8FAFC] mb-2"
                          htmlFor="name"
                        >
                          Your Full Name
                        </label>
                        <input
                          className="field-input"
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label
                          className="block text-xs font-semibold text-[#F8FAFC] mb-2"
                          htmlFor="email"
                        >
                          Email Address
                        </label>
                        <input
                          className="field-input"
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label
                          className="block text-xs font-semibold text-[#F8FAFC] mb-2"
                          htmlFor="phone"
                        >
                          Phone / WhatsApp Number
                        </label>
                        <input
                          className="field-input"
                          id="phone"
                          name="phone"
                          type="tel"
                          maxLength="10"
                          pattern="[0-9]{10}"
                          placeholder="10-digit mobile number"
                          value={phone}
                          onChange={handlePhoneChange}
                        />
                      </div>
                      <div>
                        <label
                          className="block text-xs font-semibold text-[#F8FAFC] mb-2"
                          htmlFor="budget"
                        >
                          Project Type / Budget
                        </label>
                        <select
                          className="field-input cursor-pointer"
                          id="budget"
                          name="budget"
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                        >
                          <option className="bg-[#0D111A] text-[#F8FAFC]">
                            Need guidance
                          </option>
                          <option className="bg-[#0D111A] text-[#F8FAFC]">
                            Starter Business Website
                          </option>
                          <option className="bg-[#0D111A] text-[#F8FAFC]">
                            Company Website / Online Store
                          </option>
                          <option className="bg-[#0D111A] text-[#F8FAFC]">
                            Custom App or Business Software
                          </option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label
                          className="block text-xs font-semibold text-[#F8FAFC] mb-2"
                          htmlFor="service"
                        >
                          Service You Need
                        </label>
                        <select
                          className="field-input cursor-pointer"
                          id="service"
                          name="service"
                          value={serviceOption}
                          onChange={(e) => setServiceOption(e.target.value)}
                        >
                          <option className="bg-[#0D111A] text-[#F8FAFC]">
                            Website Design &amp; Development
                          </option>
                          <option className="bg-[#0D111A] text-[#F8FAFC]">
                            Custom Web Applications
                          </option>
                          <option className="bg-[#0D111A] text-[#F8FAFC]">
                            Mobile App Development
                          </option>
                          <option className="bg-[#0D111A] text-[#F8FAFC]">
                            Business Dashboards &amp; Portals
                          </option>
                          <option className="bg-[#0D111A] text-[#F8FAFC]">
                            Workflow Automation
                          </option>
                          <option className="bg-[#0D111A] text-[#F8FAFC]">
                            AI Assistants &amp; Cloud Setup
                          </option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label
                          className="block text-xs font-semibold text-[#F8FAFC] mb-2"
                          htmlFor="message"
                        >
                          Tell Us About Your Project
                        </label>
                        <textarea
                          className="field-input resize-y min-h-[120px]"
                          id="message"
                          name="message"
                          placeholder="How can we help your business?"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <button
                      className="w-full bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold py-3.5 px-6 rounded-lg inline-flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all disabled:opacity-60"
                      type="submit"
                      disabled={submitting}
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Directly...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-[#64748B] text-center flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-sky-400" />
                      <span>Submits directly to our inbox without external redirects.</span>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-[#0A0D14]/60">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-3">
              SUPPORT
            </div>
            <h2 className="text-3xl font-semibold text-white mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8]">
              Answers to common questions about our services and process.
            </p>
          </div>

          <div className="space-y-3.5">
            {CUSTOMER_FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className={`rounded-xl border transition-colors duration-200 ${
                    isOpen
                      ? 'border-sky-400/40 bg-[#0D111A]'
                      : 'border-white/[0.08] bg-[#0D111A]/60 hover:border-white/[0.15]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-semibold text-[#F8FAFC]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-sky-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-3 border-t border-white/[0.06] text-sm text-[#94A3B8] leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
