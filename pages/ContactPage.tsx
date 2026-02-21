import React, { useState, useEffect, useRef } from "react";
import { FIRM_INFO } from "../constants";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  // States for dynamic messaging
  const [email, setEmail] = useState("");
  const [summary, setSummary] = useState("");

  // Custom dropdown states
  const [scopeOpen, setScopeOpen] = useState(false);
  const [selectedScope, setSelectedScope] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const scopes = [
    "Corporate Advisory",
    "Real Estate Transaction",
    "Dispute Resolution",
    "Strategic Compliance",
    "Intellectual Property",
    "Mergers & Acquisitions",
    "Tax & Regulatory",
    "Other Private Matter",
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setScopeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-beige dark:bg-navy-dark overflow-x-hidden">
      {/* Premium Hero Header */}
      <section className="pt-40 pb-24 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="inline-flex items-center space-x-3 mb-8">
          <span className="w-12 h-[1px] bg-gold"></span>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold text-glow">
            Concierge Services
          </span>
        </div>
        <h1 className="text-6xl md:text-[120px] font-serif font-medium leading-[0.85] dark:text-white mb-16">
          Start Your <br /> <span className="italic text-gold">Briefing.</span>
        </h1>
        <p className="text-xl md:text-3xl text-navy/60 dark:text-gray-400 font-light max-w-2xl leading-relaxed italic">
          High-stakes legal counsel requires absolute discretion. Begin our
          engagement through a confidential briefing.
        </p>
      </section>

      {/* Main Content Grid */}
      <section className="pb-40 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-16">
            {/* Office Locations */}
            <div className="space-y-12">
              {FIRM_INFO.addresses.map((addr, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-start space-x-8">
                    <div className="w-14 h-14 bg-navy text-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-xl">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-3">
                        Principal Office 0{idx + 1}
                      </h4>
                      <p className="text-xl font-serif italic dark:text-white leading-relaxed">
                        {addr}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full h-[1px] bg-navy/5 dark:bg-white/5"></div>

            {/* Direct Channels */}
            <div className="space-y-10">
              <a
                href={`tel:${FIRM_INFO.phones[0]}`}
                className="flex items-center space-x-8 group"
              >
                <div className="w-14 h-14 rounded-full border border-navy/10 dark:border-white/10 flex items-center justify-center text-navy dark:text-white group-hover:bg-gold group-hover:border-gold group-hover:text-navy transition-all shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">
                    Secure Line
                  </h4>
                  <p className="text-2xl font-medium dark:text-white group-hover:text-gold transition-colors">
                    {FIRM_INFO.phones[0]}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${FIRM_INFO.email}`}
                className="flex items-center space-x-8 group"
              >
                <div className="w-14 h-14 rounded-full border border-navy/10 dark:border-white/10 flex items-center justify-center text-navy dark:text-white group-hover:bg-gold group-hover:border-gold group-hover:text-navy transition-all shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">
                    Confidential Email
                  </h4>
                  <p className="text-2xl font-medium dark:text-white group-hover:text-gold transition-colors">
                    {FIRM_INFO.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center space-x-8">
                <div className="w-14 h-14 rounded-full border border-navy/10 dark:border-white/10 flex items-center justify-center text-navy dark:text-white shadow-lg">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">
                    Advisory Hours
                  </h4>
                  <p className="text-2xl font-medium dark:text-white">
                    Monday — Friday: 8 AM - 6 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Priority Access CTA */}
            <div className="p-12 bg-navy text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-2xl font-serif font-medium mb-6 italic text-gold">
                  Immediate Strategic Need?
                </h4>
                <p className="text-gray-400 text-base mb-8 font-light">
                  Priority WhatsApp access for existing clients and high-stakes
                  urgent briefings.
                </p>
                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/${FIRM_INFO.phones[0].replace(/\s/g, "")}`,
                      "_blank",
                    )
                  }
                  className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:text-gold transition-colors border-b border-gold/30 pb-2 group-hover:border-gold"
                >
                  Establish Secure Connection{" "}
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-2 transition-transform"
                  />
                </button>
              </div>
              <MessageCircle
                size={120}
                className="absolute -bottom-10 -right-10 opacity-[0.03] text-gold pointer-events-none group-hover:scale-110 transition-transform duration-1000"
              />
            </div>
          </div>

          {/* Right Column: Premium Briefing Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-navy-light/5 p-12 lg:p-24 shadow-3xl relative border border-navy/5 dark:border-white/5">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-24 text-center animate-in fade-in zoom-in duration-700">
                  <div className="w-28 h-28 bg-gold rounded-full flex items-center justify-center mb-12 text-navy shadow-[0_0_30px_rgba(197,160,33,0.4)]">
                    <CheckCircle size={56} />
                  </div>
                  <h2 className="text-5xl font-serif font-medium mb-8 dark:text-white italic">
                    Briefing Received.
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-xl font-light leading-relaxed max-w-md mx-auto">
                    A Senior Associate will analyze your inquiry and initiate
                    contact within one standard business cycle.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative group">
                      <input
                        type="text"
                        required
                        className="w-full bg-transparent border-b-2 border-navy/10 dark:border-white/10 py-6 focus:border-gold outline-none transition-all dark:text-white text-xl font-light placeholder:text-navy/20 dark:placeholder:text-white/20"
                        placeholder="Full Legal Name"
                      />
                      <label className="absolute -top-8 left-0 text-[10px] font-bold uppercase tracking-[0.2em] text-gold opacity-0 group-focus-within:opacity-100 transition-opacity">
                        Legal Identity
                      </label>
                    </div>

                    <div className="relative group w-full max-w-full">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent border-b-2 border-navy/10 dark:border-white/10 py-6 focus:border-gold outline-none transition-all dark:text-white text-xl font-light placeholder:text-navy/30 dark:placeholder:text-white/30 break-words"
                        placeholder="Corporate Email"
                      />
                      <label className="absolute -top-8 left-0 text-[10px] font-bold uppercase tracking-[0.2em] text-gold opacity-0 group-focus-within:opacity-100 transition-opacity z-10">
                        Business Contact
                      </label>
                      <AnimatePresence>
                        {email.length > 0 && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="absolute -bottom-6 left-0 text-[10px] text-gold italic tracking-widest uppercase font-medium"
                          >
                            We will reach out to you soon
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div
                    className="relative group w-full max-w-full z-20 pt-4"
                    ref={dropdownRef}
                  >
                    <div
                      onClick={() => setScopeOpen(!scopeOpen)}
                      className="w-full bg-transparent border-b-2 border-navy/10 dark:border-white/10 py-6 pr-12 focus:border-gold outline-none transition-all dark:text-white text-xl font-light cursor-pointer flex items-center justify-between"
                    >
                      <span
                        className={
                          selectedScope
                            ? "text-navy dark:text-white"
                            : "text-navy/30 dark:text-white/30"
                        }
                      >
                        {selectedScope || "Select Area of Requirement"}
                      </span>
                      {scopeOpen ? (
                        <ChevronUp size={24} className="text-gold" />
                      ) : (
                        <ChevronDown
                          size={24}
                          className="text-navy/20 dark:text-white/20 group-hover:text-gold transition-colors"
                        />
                      )}
                    </div>
                    <label className="absolute -top-4 left-0 text-[10px] font-bold uppercase tracking-[0.2em] text-gold opacity-0 group-focus-within:opacity-100 transition-opacity z-10 hidden md:block">
                      Engagement Type
                    </label>

                    {/* Highly stylized custom dropdown options */}
                    <AnimatePresence>
                      {scopeOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scaleY: 0.95 }}
                          animate={{ opacity: 1, y: 0, scaleY: 1 }}
                          exit={{ opacity: 0, y: 10, scaleY: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 w-full mt-2 bg-white dark:bg-navy-light border border-navy/5 dark:border-white/5 shadow-2xl z-30 transform origin-top max-h-72 overflow-y-auto custom-scrollbar"
                        >
                          {scopes.map((scope, index) => (
                            <div
                              key={index}
                              onClick={() => {
                                setSelectedScope(scope);
                                setScopeOpen(false);
                              }}
                              className="px-6 py-4 border-b border-navy/5 dark:border-white/5 hover:bg-gold hover:text-navy dark:hover:bg-gold dark:hover:text-navy cursor-pointer transition-all text-lg font-light last:border-0"
                            >
                              {scope}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="relative group w-full max-w-full pt-4">
                    <textarea
                      required
                      rows={5}
                      value={summary}
                      onChange={(e) => setSummary(e.target.value)}
                      className="w-full bg-transparent border-b-2 border-navy/10 dark:border-white/10 py-6 focus:border-gold outline-none transition-all dark:text-white text-xl font-light placeholder:text-navy/30 dark:placeholder:text-white/30 resize-none break-words"
                      placeholder="Executive Summary of Your Briefing"
                      style={{
                        wordBreak: "break-word",
                      }}
                    ></textarea>
                    <label className="absolute top-0 left-0 text-[10px] font-bold uppercase tracking-[0.2em] text-gold opacity-0 group-focus-within:opacity-100 transition-opacity z-10">
                      Briefing Summary
                    </label>
                    <AnimatePresence>
                      {summary.length > 0 && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="absolute -bottom-6 left-0 text-[10px] text-gold italic tracking-widest uppercase font-medium"
                        >
                          Thanks for sharing your details
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-16">
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] max-w-[240px] leading-relaxed text-center md:text-left">
                      Submission acknowledges our standard confidentiality
                      protocols and non-disclosure engagement.
                    </p>
                    <button
                      type="submit"
                      disabled={!selectedScope}
                      className={`px-14 py-7 font-bold uppercase tracking-[0.4em] text-[11px] flex items-center group shadow-2xl transition-all ${!selectedScope ? "bg-gray-300 dark:bg-gray-800 text-gray-500 cursor-not-allowed" : "bg-navy dark:bg-gold text-white dark:text-navy hover:-translate-y-1 active:translate-y-0"}`}
                    >
                      Dispatch Briefing{" "}
                      <Send
                        size={18}
                        className={`ml-6 transition-transform ${selectedScope ? "group-hover:translate-x-2 group-hover:-translate-y-2" : ""}`}
                      />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Global Strategic Map Presence */}
      <section className="h-[70vh] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-navy/30 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover grayscale brightness-50 contrast-150"
            alt="Metropolitan Presence"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-20 px-6">
          <div className="glass p-12 lg:p-20 shadow-4xl text-center max-w-2xl border border-gold/30">
            <h4 className="font-serif font-medium text-4xl lg:text-5xl mb-6 dark:text-white italic">
              Unrivaled Presence.
            </h4>
            <p className="text-navy/70 dark:text-gray-400 text-lg mb-12 leading-relaxed font-light">
              Centrally located in the heart of Lagos' commercial and
              residential elite districts, ensuring absolute proximity to the
              engines of growth.
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-gold text-navy px-12 py-5 text-xs font-bold uppercase tracking-[0.3em] transition-all hover:bg-navy hover:text-gold shadow-xl"
            >
              Consult Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
