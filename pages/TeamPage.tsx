import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { TEAM_MEMBERS } from "../constants";
import {
  Linkedin,
  Mail,
  ArrowUpRight,
  X,
  ChevronDown,
  Scale,
  Award,
  Shield,
  Landmark,
} from "lucide-react";
import { TeamMember } from "../types";

const HERO_QUOTES = [
  {
    image: "/images/team_2.png",
    quote:
      "Justice is the constant and perpetual will to allot every man his due.",
    author: "Ulpian",
  },
  {
    image: "/images/team_1.png",
    quote:
      "The leading rule for the lawyer, as for the man of every other calling, is diligence.",
    author: "Abraham Lincoln",
  },
];

const TeamPage: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_QUOTES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════════════════════════════════
          DARK HERO BANNER — Full-Bleed Law Image Background
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative flex items-center overflow-hidden py-24 ">
        {/* Full Background Image */}
        <img
          src="/images/law-scale.jpg"
          alt="Scales of Justice"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 25%" }}
        />

        {/* Dark Overlay Gradients */}
        <div className="absolute inset-0 bg-navy/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/50 to-navy/70"></div>

        {/* Gold accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent z-10"></div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(174,152,98,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(174,152,98,0.3) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        ></div>

        {/* Content — Two Column Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column — Text */}
            <div>
              <div className="flex items-center gap-3 mb-4 animate-reveal-up">
                <div className="h-[1px] w-12 bg-gold/60"></div>
                <span className="text-gold font-bold text-xs uppercase tracking-[0.35em]">
                  Our Legal Team
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.05] mb-6 animate-reveal-up stagger-1">
                The Minds
                <br />
                Behind Your
                <br />
                <span className="relative inline-block mt-1">
                  <span className="relative z-10 text-gold">Success</span>
                  <span className="absolute bottom-1 left-0 right-0 h-2 md:h-3 bg-gold/15 -z-0 transform -skew-x-3"></span>
                </span>
              </h1>

              <p className="text-gray-300/90 text-sm md:text-base leading-relaxed max-w-lg mb-8 animate-reveal-up stagger-2">
                At Conrad & Xavi LP, our partners bring decades of combined
                expertise — delivering strategic counsel that safeguards your
                interests and propels your ambitions.
              </p>

              {/* CTA */}
              <button
                onClick={() =>
                  window.scrollBy({ top: 600, behavior: "smooth" })
                }
                className="inline-flex items-center gap-3 bg-gold/10 border border-gold/40 text-gold px-8 py-3.5 uppercase tracking-[0.25em] text-[10px] font-bold hover:bg-gold hover:text-navy transition-all duration-500 group animate-reveal-up stagger-3 rounded-full shadow-lg hover:shadow-gold/20"
              >
                Meet the Partners
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>

            {/* Right Column — Arched Law Image with Quote */}
            <div className="relative flex justify-center items-center animate-reveal-up stagger-2 mt-8 lg:mt-0">
              {/* Decorative concentric circles */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[110%] aspect-square border border-gold/10 rounded-full"></div>
                <div className="absolute w-[90%] aspect-square border border-gold/5 rounded-full"></div>
              </div>

              {/* Arched Image Slideshow */}
              <div className="relative w-56 sm:w-64 md:w-72 lg:w-[20rem] group cursor-pointer aspect-[3/4.5]">
                <div className="relative overflow-hidden rounded-t-full rounded-b-[30%] w-full h-full shadow-2xl shadow-black/40">
                  {HERO_QUOTES.map((hero, idx) => (
                    <div
                      key={hero.image}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        idx === heroIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                      }`}
                    >
                      <img
                        src={hero.image}
                        alt="Legal Expertise"
                        className="w-full h-full object-cover brightness-[0.8] transition-all duration-[6000ms] ease-linear"
                        style={{
                          objectPosition: "center",
                          transform:
                            idx === heroIndex ? "scale(1.05)" : "scale(1)",
                        }}
                      />
                      {/* Gradient overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent opacity-80 pointer-events-none"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent pointer-events-none"></div>

                      {/* Quote overlay at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-center pointer-events-none">
                        <div className="h-[1px] w-8 bg-gold/40 mx-auto mb-3"></div>
                        <p className="text-white/90 font-serif italic text-xs md:text-sm leading-relaxed translate-y-0 transition-transform duration-1000">
                          "{hero.quote}"
                        </p>
                        <p className="text-gold/70 text-[8px] uppercase tracking-[0.3em] mt-2 font-medium">
                          — {hero.author}
                        </p>
                      </div>
                    </div>
                  ))}
                  {/* Gold border frame */}
                  <div className="absolute inset-[3px] border border-gold/20 rounded-t-full rounded-b-[30%] z-20 pointer-events-none"></div>
                </div>

                {/* Floating established badge */}
                <div className="absolute top-[10%] -right-6 md:-right-10 px-3 py-1.5 md:px-4 md:py-2 bg-[#f4f1ea] rounded-full flex items-center shadow-2xl animate-float gap-2 border border-white/50 z-30">
                  <Landmark size={12} className="text-navy" />
                  <span className="text-navy font-bold text-[8px] md:text-[9px] uppercase tracking-widest whitespace-nowrap">
                    EST. 2014
                  </span>
                </div>

                {/* Floating justice badge */}
                <div
                  className="absolute bottom-[20%] -left-4 md:-left-8 px-3 py-1.5 md:px-4 md:py-2 bg-[#f4f1ea] rounded-full flex items-center shadow-2xl animate-float gap-2 border border-white/50 z-30"
                  style={{ animationDelay: "2s" }}
                >
                  <Scale size={12} className="text-navy" />
                  <span className="text-navy font-bold text-[8px] md:text-[9px] uppercase tracking-widest whitespace-nowrap">
                    JUSTICE
                  </span>
                </div>

                {/* Floating trust badge */}
                <div
                  className="absolute top-[40%] -left-6 md:-left-12 px-3 py-1.5 md:px-4 md:py-2 bg-[#f4f1ea] rounded-full sm:flex items-center shadow-2xl animate-float gap-2 border border-white/50 z-30 hidden"
                  style={{ animationDelay: "3.5s" }}
                >
                  <Shield size={12} className="text-navy" />
                  <span className="text-navy font-bold text-[8px] md:text-[9px] uppercase tracking-widest whitespace-nowrap">
                    TRUST
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gold accent */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent z-10"></div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PARTNER SECTION — Clean Off-White Background
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        id="partners"
        className="py-24 md:py-32 bg-beige dark:bg-navy-dark/90 relative overflow-hidden"
      >
        {/* Transition gradient from dark hero */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-navy/5 dark:from-navy-dark to-transparent pointer-events-none"></div>

        {/* Light decorative background pattern — scales of justice motif */}
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ae9862' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Background Accents */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-navy/[0.03] dark:bg-gold/[0.03] rounded-full blur-3xl -z-10 animate-pulse-slow delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 animate-reveal-up">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-gold/60"></div>
              <span className="text-gold font-bold text-xs uppercase tracking-[0.35em]">
                Elite Counsel
              </span>
              <div className="h-[1px] w-12 bg-gold/60"></div>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-navy dark:text-white leading-tight">
              Meet Our{" "}
              <span className="relative inline-block mt-2">
                <span className="relative z-10">Partners</span>
                <span className="absolute bottom-2 left-0 right-0 h-2 md:h-3 bg-gold/10 -z-0 transform -skew-x-3"></span>
              </span>
            </h2>

            <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg px-4 md:px-0 leading-relaxed max-w-2xl mx-auto">
              Our lawyers are more than just legal experts — they are strategic
              business advisors committed to delivering excellence and
              safeguarding your success.
            </p>
          </div>

          {/* Partner Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-12">
            {TEAM_MEMBERS.map((member, index) => (
              <div
                key={member.id}
                className={`group cursor-pointer animate-reveal-up stagger-${(index % 4) + 1} p-2 md:p-0`}
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative mb-5 overflow-hidden rounded-t-full rounded-b-full aspect-[3/4] shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-110"
                    style={{
                      objectPosition: member.imagePosition || "center top",
                    }}
                  />

                  {/* Premium Royal Blue Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy/90 via-navy/70 to-navy/30 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-end pb-16 text-white px-8 text-center pointer-events-none">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col items-center w-full">
                      <div className="text-white/60 font-bold text-[8px] uppercase tracking-[0.4em] mb-4">
                        {member.position}
                      </div>
                      {/* Bouncing Animation - Restored */}
                      <div className="mb-4 flex flex-col items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-300">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-[1px] bg-gold/50"></div>
                          <span className="text-[8px] text-gold uppercase tracking-[0.4em] font-bold">
                            Click to Open
                          </span>
                          <div className="w-6 h-[1px] bg-gold/50"></div>
                        </div>
                        <div className="animate-bounce mt-1">
                          <ChevronDown size={14} className="text-gold" />
                        </div>
                      </div>

                      {/* Primary CTA - Compact One-Line with Framer Motion Animation */}
                      <motion.div 
                        whileHover="hover"
                        whileTap={{ scale: 0.98 }}
                        variants={{
                          hover: { scale: 1.05 }
                        }}
                        className="flex items-center justify-center gap-3 bg-gold text-navy pl-7 pr-5 py-3 rounded-full shadow-[0_15px_30px_rgba(174,152,98,0.4)] cursor-pointer pointer-events-auto"
                      >
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] whitespace-nowrap">
                          View Profile
                        </span>
                        <motion.div 
                          className="w-7 h-7 rounded-full bg-navy flex items-center justify-center text-gold shadow-lg shrink-0"
                          initial={false}
                        >
                          <motion.div
                            variants={{
                              hover: { 
                                rotate: 45,
                                x: 2,
                                y: -2,
                                scale: 1.1
                              }
                            }}
                            transition={{ 
                              type: "spring", 
                              stiffness: 400, 
                              damping: 25 
                            }}
                          >
                            <ArrowUpRight size={12} />
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-end border-b border-gray-200 dark:border-white/10 pb-6 group-hover:border-gold transition-colors duration-500 h-40">
                  <div className="flex flex-col justify-end h-full">
                    <div className="min-h-[5rem] flex items-end">
                      <h3 className="text-3xl font-serif font-bold text-navy dark:text-white mb-2 leading-[1.1]">
                        {(() => {
                          const parts = member.name.split(" ");
                          if (parts.length === 3) {
                            return (
                              <>
                                {parts[0]} <br /> {parts[1][0]}. {parts[2]}
                              </>
                            );
                          }
                          return (
                            <>
                              {parts[0]} <br /> {parts[1]}
                            </>
                          );
                        })()}
                      </h3>
                    </div>
                    <p className="text-gold font-bold text-[10px] uppercase tracking-[0.2em]">
                      {member.position}
                    </p>
                  </div>
                  <button className="p-3 rounded-full border border-gold text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-500 transform group-hover:rotate-45 mb-1 shrink-0">
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div
            className="absolute inset-0 bg-navy/95 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedMember(null)}
          ></div>

          <div className="relative bg-white dark:bg-navy-dark w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-reveal-up max-h-[90vh]">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-[110] p-3 bg-white/20 hover:bg-white/30 dark:bg-white/10 dark:hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm shadow-xl"
            >
              <X size={24} className="text-black md:dark:text-white" />
            </button>

            <div className="w-full md:w-2/5 h-80 md:h-auto overflow-hidden shrink-0">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-full object-cover"
                style={{
                  objectPosition: selectedMember.imagePosition || "center top",
                }}
              />
            </div>

            <div className="w-full md:w-3/5 px-6 md:px-16 pb-6 md:pb-16 overflow-y-auto bg-white dark:bg-navy-dark flex flex-col relative">
              <div className="sticky top-0 z-20 bg-white dark:bg-navy-dark pt-8 md:pt-16 pb-6 border-b border-gray-100 dark:border-white/5 mb-8 md:mb-10">
                <div className="text-gold font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] mb-4">
                  {selectedMember.position}
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 dark:text-white leading-tight">
                  {selectedMember.name}
                </h2>
                <div className="h-1 w-20 bg-gold"></div>
              </div>

              <div className="space-y-6 md:space-y-8 flex-grow">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gold mb-3">
                    Professional Bio
                  </h4>
                  <div className="space-y-4">
                    {selectedMember.profile?.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg"
                      >
                        {paragraph}
                      </p>
                    )) || (
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                        {selectedMember.name} is a distinguished legal
                        practitioner specializing in{" "}
                        {selectedMember.specialization}.
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Practice Areas */}
                  {selectedMember.practiceAreas && (
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-gold mb-4 border-b border-gold/20 pb-2">
                        Practice Areas
                      </h4>
                      <ul className="space-y-2">
                        {selectedMember.practiceAreas.map((area, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                            <span className="text-base">{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Education */}
                  {selectedMember.education && (
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-gold mb-4 border-b border-gold/20 pb-2">
                        Education & Qualifications
                      </h4>
                      <ul className="space-y-3">
                        {selectedMember.education.map((edu, idx) => (
                          <li
                            key={idx}
                            className="text-gray-700 dark:text-gray-300"
                          >
                            <p className="text-base leading-snug">{edu}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Memberships */}
                  {selectedMember.memberships && (
                    <div className="md:col-span-2">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-gold mb-4 border-b border-gold/20 pb-2">
                        Memberships & Certifications
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedMember.memberships.map((membership, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-gray-100 dark:bg-white/5 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                          >
                            {membership}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-8 border-t border-gray-100 dark:border-white/10">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-3 bg-navy dark:bg-gold text-white dark:text-navy px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:transform hover:-translate-y-1 transition-all shadow-xl"
                  >
                    <Mail size={18} />
                    Send Message
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Join the Team */}
      <section className="py-20 md:py-32 bg-beige dark:bg-navy-dark/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-6xl font-serif font-bold mb-8 dark:text-white">
            Ready to join our practice?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 text-base md:text-lg">
            We are always looking for exceptional legal talent to join our
            growing firm. If you share our commitment to excellence, we'd like
            to hear from you.
          </p>
          <a
            href="#/contact"
            className="inline-block bg-navy dark:bg-gold px-12 py-5 font-bold text-white dark:text-navy uppercase tracking-[0.2em] text-sm hover:transform hover:-translate-y-1 transition-all shadow-xl hover:shadow-2xl"
          >
            CAREER OPPORTUNITIES
          </a>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
