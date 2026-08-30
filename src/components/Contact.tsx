import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, Phone, MapPin, Send, Sparkles, 
  CheckCircle2, Copy, Check, ArrowUpRight, MessageSquare 
} from 'lucide-react';
import { LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email';
    }
    if (!formData.subject.trim()) errors.subject = 'Please specify a subject';
    if (!formData.message.trim()) errors.message = 'Please type your message';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleOpenMailClient = () => {
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(`Hi Rithik,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-mono text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>07 / GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            LET'S BUILD SOMETHING.
          </h2>
          <p className="text-slate-400 font-mono text-xs sm:text-sm mt-2">
            Have an idea, project or opportunity? Let's connect.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-cyan to-transparent mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Details & LinkedIn */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              Whether you want to discuss an embedded hardware project, collaborate on IoT innovation, or explore opportunities, my inbox is always open.
            </p>

            {/* Direct Cards */}
            <div className="space-y-4 pt-2">
              {/* Email Card */}
              <div className="glass-card p-5 rounded-2xl border border-white/10 flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-dark-950 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">EMAIL DIRECTLY</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm sm:text-base font-display font-bold text-white hover:text-brand-cyan transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  data-cursor="hover"
                  className="p-2 rounded-xl bg-dark-900 border border-white/10 text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-brand-emerald" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="glass-card p-5 rounded-2xl border border-white/10 flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-dark-950 border border-brand-blue/30 flex items-center justify-center text-brand-blue flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">PHONE NUMBER</div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-sm sm:text-base font-display font-bold text-white hover:text-brand-cyan transition-colors"
                    >
                      +91 {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="glass-card p-5 rounded-2xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-dark-950 border border-brand-emerald/30 flex items-center justify-center text-brand-emerald flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">LOCATION</div>
                    <div className="text-sm sm:text-base font-display font-bold text-white">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LinkedIn CTA Button */}
            <div className="pt-4">
              <a
                href={PERSONAL_INFO.LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                data-cursor-text="LINKEDIN ↗"
                className="w-full py-4 px-6 rounded-2xl bg-dark-900 border border-brand-cyan/40 hover:border-brand-cyan flex items-center justify-between text-white group shadow-lg hover:shadow-glow-cyan transition-all"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-5 h-5 text-brand-cyan" />
                  <span className="font-display font-bold text-sm">CONNECT ON LINKEDIN</span>
                </div>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-brand-cyan" />
              </a>
            </div>
          </div>

          {/* Right Column: Frontend Contact Form */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-3xl border border-white/15 relative overflow-hidden">
            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-2xl bg-brand-emerald/20 border border-brand-emerald/40 flex items-center justify-center text-brand-emerald shadow-glow-emerald">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  Message Ready to Send!
                </h3>
                <p className="text-sm text-slate-300 max-w-md font-sans leading-relaxed">
                  Thank you for reaching out, <span className="text-brand-cyan font-bold">{formData.name}</span>. Click the button below to transfer this message directly to your default mail application, or connect with me via LinkedIn.
                </p>

                <div className="flex flex-wrap gap-3 pt-4 justify-center">
                  <button
                    onClick={handleOpenMailClient}
                    className="px-6 py-3 rounded-xl bg-brand-cyan text-dark-950 font-mono text-xs font-bold shadow-glow-cyan hover:bg-cyan-300 transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>LAUNCH IN EMAIL APP</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-5 py-3 rounded-xl bg-dark-900 border border-white/10 text-slate-300 font-mono text-xs hover:text-white transition-colors"
                  >
                    Reset Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan pb-2 border-b border-white/10">
                  <MessageSquare className="w-4 h-4" />
                  <span>DIRECT INQUIRY FORM</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className={`w-full px-4 py-3 rounded-xl bg-dark-950/80 border ${
                        formErrors.name ? 'border-red-500' : 'border-white/10 focus:border-brand-cyan'
                      } text-white text-sm outline-none transition-colors`}
                    />
                    {formErrors.name && (
                      <span className="text-[11px] font-mono text-red-400 mt-1 block">{formErrors.name}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-dark-950/80 border ${
                        formErrors.email ? 'border-red-500' : 'border-white/10 focus:border-brand-cyan'
                      } text-white text-sm outline-none transition-colors`}
                    />
                    {formErrors.email && (
                      <span className="text-[11px] font-mono text-red-400 mt-1 block">{formErrors.email}</span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    SUBJECT *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Embedded Project Collaboration / IoT Opportunity"
                    className={`w-full px-4 py-3 rounded-xl bg-dark-950/80 border ${
                      formErrors.subject ? 'border-red-500' : 'border-white/10 focus:border-brand-cyan'
                    } text-white text-sm outline-none transition-colors`}
                  />
                  {formErrors.subject && (
                    <span className="text-[11px] font-mono text-red-400 mt-1 block">{formErrors.subject}</span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    MESSAGE *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, ideas, or how we can collaborate..."
                    className={`w-full px-4 py-3 rounded-xl bg-dark-950/80 border ${
                      formErrors.message ? 'border-red-500' : 'border-white/10 focus:border-brand-cyan'
                    } text-white text-sm outline-none transition-colors resize-none`}
                  />
                  {formErrors.message && (
                    <span className="text-[11px] font-mono text-red-400 mt-1 block">{formErrors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  data-cursor="hover"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-emerald text-dark-950 font-mono text-xs sm:text-sm font-bold tracking-wider hover:brightness-110 shadow-glow-cyan transition-all flex items-center justify-center gap-2 transform active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND MESSAGE</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
