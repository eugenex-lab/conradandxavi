import React from "react";
import { PRACTICE_AREAS, FIRM_INFO } from "../constants";
import {
  CheckCircle,
  Briefcase,
  Home,
  Scale,
  Users,
  ShieldCheck,
  ChevronRight,
  MoveUpRight,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const iconMap: any = {
  Briefcase: Briefcase,
  Home: Home,
  Scale: Scale,
  Users: Users,
  ShieldCheck: ShieldCheck,
};

// Colorful, premium images for each legal context
const practiceImages: Record<string, string> = {
  adv: "https://images.unsplash.com/photo-1507679799987-c7377058606c?q=80&w=1200&auto=format&fit=crop", // Business Advisory
  corp: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop", // Corporate
  real: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop", // Real Estate
  lit: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop", // Litigation
  fam: "https://images.unsplash.com/photo-1573164060021-450d168e2f27?q=80&w=1200&auto=format&fit=crop", // Family Law - High-end consultation
};

const PracticePage: React.FC = () => {
  return (
    <div className="bg-beige dark:bg-navy-dark pt-20 overflow-hidden">
      {/* Hero Section - High-End Corporate Aesthetic */}
      <section className="relative py-40 bg-navy text-white overflow-hidden">
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000"
            className="w-full h-full object-cover opacity-20 grayscale scale-110 animate-pulse-slow"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/40 to-navy"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10 text-center">
          <div className="inline-flex items-center space-x-6 mb-12 reveal-up stagger-1">
            <span className="w-16 h-[1px] bg-gold/50"></span>
            <span className="text-[12px] font-bold uppercase tracking-[0.5em] text-gold">
              Elite Legal Strategy
            </span>
            <span className="w-16 h-[1px] bg-gold/50"></span>
          </div>
          <h1 className="text-7xl md:text-9xl lg:text-[140px] font-serif font-medium mb-12 leading-[0.85] tracking-tight reveal-up stagger-2">
            Practice <br />{" "}
            <span className="italic text-gold">Excellence.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed reveal-up stagger-3">
            Providing rigorous legal representation and strategic counsel across
            specialized sectors since 2014.
          </p>
        </div>
      </section>

      {/* Practice Areas List - Modern Alternating Layout */}
      <section className="relative py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="space-y-48 lg:space-y-72">
            {PRACTICE_AREAS.map((area, idx) => {
              const IconComp = iconMap[area.icon];
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={area.id}
                  className={`flex flex-col lg:flex-row items-center gap-20 lg:gap-40 ${!isEven ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Text Content Column */}
                  <div className="lg:w-[45%] reveal-up">
                    <div className="flex items-center space-x-6 mb-10">
                      <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center text-gold dark:bg-white/5 backdrop-blur-sm">
                        {IconComp && <IconComp size={28} />}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-gold uppercase tracking-[0.4em]">
                          Area 0{idx + 1}
                        </span>
                        <span className="w-12 h-[1px] bg-gold/30 mt-1"></span>
                      </div>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-serif font-medium mb-10 dark:text-white leading-[1.1]">
                      {area.title}
                    </h2>

                    <p className="text-navy/60 dark:text-gray-400 text-xl mb-12 leading-relaxed font-light">
                      {area.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                      {area.keyServices.map((service, sidx) => (
                        <div
                          key={sidx}
                          className="group flex items-center space-x-4 p-4 border border-navy/5 dark:border-white/5 hover:border-gold/30 transition-all rounded-xl hover:bg-white/40 dark:hover:bg-white/5"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gold group-hover:scale-[2] transition-transform duration-500"></div>
                          <span className="text-sm font-medium dark:text-gray-300 group-hover:text-gold transition-colors tracking-wide">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="group flex items-center justify-between border border-navy/10 dark:border-white/10 px-10 py-8 text-xs font-bold tracking-[0.4em] uppercase transition-all hover:bg-gold hover:text-navy dark:text-white dark:hover:text-navy hover:shadow-2xl hover:shadow-gold/20"
                    >
                      Secure Representation
                      <div className="flex items-center space-x-3">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[8px] tracking-widest">
                          {area.title}
                        </span>
                        <MoveUpRight
                          size={20}
                          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </div>
                    </Link>
                  </div>

                  {/* Image Column - Luxurious Frame Layout */}
                  <div className="lg:w-[55%] relative group">
                    {/* Decorative Background Elements */}
                    <div
                      className={`absolute -inset-10 border border-gold/10 -z-10 rounded-[60px] blur-sm transition-all duration-1000 group-hover:border-gold/40 ${isEven ? "rotate-2" : "-rotate-2"}`}
                    ></div>

                    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border border-white/10">
                      {/* Depth Layer */}
                      <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-all duration-1000 z-10"></div>

                      <img
                        src={
                          practiceImages[area.id] ||
                          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200"
                        }
                        className="w-full h-full object-cover transition-all duration-[2500ms] ease-out scale-110 group-hover:scale-100 grayscale-[40%] group-hover:grayscale-0"
                        alt={area.title}
                      />

                      {/* Floating Category Label - Extreme Glassmorphism */}
                      <div
                        className={`absolute top-10 ${isEven ? "right-10" : "left-10"} bg-white/10 dark:bg-navy/10 backdrop-blur-2xl border border-white/20 p-8 shadow-2xl skew-x-[-8deg] z-20`}
                      >
                        <div className="skew-x-[8deg]">
                          <span className="text-[10px] font-bold text-gold uppercase tracking-[0.5em] mb-2 block">
                            Premium Sector
                          </span>
                          <span className="text-2xl font-serif font-bold dark:text-white uppercase tracking-tight">
                            {area.title.split(" ")[0]}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Stats/Badge Overlay */}
                    <div
                      className={`absolute -bottom-16 ${isEven ? "-left-16" : "-right-16"} bg-gold p-12 text-navy shadow-[0_40px_80px_-15px_rgba(174,152,98,0.5)] hidden xl:block z-30 animate-float`}
                    >
                      <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-6 border-b border-navy/10 pb-2">
                        Firm Analytic
                      </div>
                      <div className="text-6xl font-serif font-bold leading-none mb-3 italic">
                        99%
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
                        Proven Success Record
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Minimalist Wow */}
      <section className="py-64 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent opacity-50"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="w-20 h-[1px] bg-gold mx-auto mb-16"></div>
          <span className="text-gold font-bold text-[10px] uppercase tracking-[0.8em] mb-12 block">
            Strategic Resilience
          </span>
          <h2 className="text-6xl md:text-9xl font-serif font-medium mb-20 leading-[0.9] tracking-tighter">
            Defending <br />{" "}
            <span className="italic text-gold px-4">Legacy.</span>
          </h2>
          <Link
            to="/contact"
            className="group inline-flex items-center space-x-10 bg-white text-navy px-20 py-10 text-[10px] font-bold tracking-[0.6em] uppercase transition-all hover:bg-gold hover:shadow-[0_0_80px_rgba(174,152,98,0.4)]"
          >
            <span>Request Advisory</span>
            <ArrowRight
              size={24}
              className="transition-transform group-hover:translate-x-4"
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PracticePage;
