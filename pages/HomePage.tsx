import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  ShieldCheck,
  Scale,
  Gavel,
  Building2,
  MoveUpRight,
  ArrowDown,
} from "lucide-react";
import { FIRM_INFO, PRACTICE_AREAS } from "../constants";

const HeroMediaSlider: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200",
    "/images/hero_1.png",
    "/images/hero_2.png",
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden shadow-2xl">
      {images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`Slide ${idx}`}
          className={`absolute inset-0 w-full h-full object-cover grayscale transition-all duration-[2000ms] ease-in-out ${
            idx === current ? "opacity-100 scale-110" : "opacity-0 scale-100"
          } hover:grayscale-0`}
        />
      ))}
    </div>
  );
};

const FullBackgroundSlider: React.FC = () => {
  const images = [
    "/images/hero_1.png",
    "/images/hero_2.png",
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-navy">
      {images.map((img, idx) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            idx === current ? "opacity-30" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt="Background"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      ))}
      {/* Light Navy Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/60 via-navy/40 to-transparent"></div>
      <div className="absolute inset-0 bg-navy/10"></div>
    </div>
  );
};

const GlobalBackground: React.FC = () => {
  return (
    <>
      <div className="mesh-glow">
        {/* Colorful Gradient Flares */}
        <div className="flare w-[800px] h-[800px] bg-gold/20 top-[-20%] left-[-10%] animation-delay-0"></div>
        <div className="flare w-[700px] h-[700px] bg-navy/10 bottom-[0%] right-[-10%] animation-delay-2000"></div>
        <div className="flare w-[600px] h-[600px] bg-gold/15 top-[30%] right-[0%] animation-delay-4000"></div>
        <div className="flare w-[500px] h-[500px] bg-beige/30 middle-center opacity-40 blur-[150px]"></div>
      </div>
      <div className="grain"></div>
    </>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-beige/50 dark:bg-navy-dark">
      <GlobalBackground />
      {/* Hero Section - Asymmetrical Luxury Design */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-stretch">
        <FullBackgroundSlider />
        {/* Left Content Column */}
        <div className="lg:w-7/12 flex items-center px-4 sm:px-12 lg:px-20 py-20 lg:py-0 z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-3 mb-8 reveal-up stagger-1">
              <span className="w-12 h-[1px] bg-gold"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">
                Est. {FIRM_INFO.established} — {FIRM_INFO.membership}
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-serif font-medium leading-[0.95] mb-8 text-white reveal-up stagger-2">
              Bespoke <br />
              <span className="italic">Legal</span> Counsel <br />
              for the <span className="text-gold">Elite.</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end reveal-up stagger-3">
              <p className="text-lg text-white/70 font-light leading-relaxed">
                Strategic representation and proven results for high-stakes
                corporate and commercial litigation across global markets.
              </p>
              <div className="flex flex-col space-y-4">
                <Link
                  to="/contact"
                  className="group flex items-center justify-between bg-white text-navy px-8 py-6 text-xs font-bold tracking-widest transition-all hover:bg-gold hover:text-navy uppercase"
                >
                  Schedule Consultation
                  <MoveUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
                <Link
                  to="/practice"
                  className="group flex items-center justify-between border border-white/20 text-white px-8 py-6 text-xs font-bold tracking-widest transition-all hover:bg-white/10 uppercase"
                >
                  Our Expertise
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-2"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Media Column - Clean Cinematic Media */}
        <div className="lg:w-5/12 relative hidden lg:block">
          <div className="h-full flex flex-col justify-center items-center px-12 lg:px-20">
            <div className="relative w-full aspect-[4/5] max-w-sm group">
              {/* Animated Flare Behind Image */}
              <div className="absolute -inset-10 bg-gold/5 blur-3xl rounded-full scale-150 group-hover:bg-gold/10 transition-colors duration-1000"></div>

              <div className="absolute -top-6 -right-6 w-full h-full border border-gold/20 -z-10 group-hover:-top-8 group-hover:-right-8 transition-all duration-700"></div>
              <HeroMediaSlider />

              {/* Minimalist Floating Label */}
              <div className="absolute -bottom-6 -left-6 bg-navy text-white px-6 py-4 text-[8px] font-bold tracking-[0.4em] uppercase shadow-2xl">
                Lagos Office
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gold/40 animate-bounce cursor-pointer hover:text-gold transition-colors">
          <ArrowDown size={14} />
        </div>
      </section>

      {/* Services Highlights - Premium Interactive Cards */}
      <section className="py-32 bg-transparent border-t border-navy/5 dark:border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 animate-fade-in-up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-gold font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">
                Our Expertise
              </span>
              <h2 className="text-5xl md:text-7xl font-serif font-medium dark:text-white leading-tight">
                Architecting <br />{" "}
                <span className="italic text-gold">Certainty</span> in Chaos.
              </h2>
            </div>
            <p className="text-navy/50 dark:text-gray-400 max-w-sm mb-2 text-sm uppercase tracking-widest font-bold">
              Providing rigorous legal analysis and strategic counsel across
              specialized sectors.
            </p>
          </div>
        </div>

        {/* Single Row Infinite Slider */}
        <div className="flex overflow-hidden group/marquee">
          <div className="flex space-x-8 animate-scroll-left px-4 sm:px-12 lg:px-20">
            {[...PRACTICE_AREAS, ...PRACTICE_AREAS].map((area, idx) => (
              <div
                key={`${area.id}-${idx}`}
                className="relative flex-shrink-0 w-[380px] md:w-[450px] bg-white/40 dark:bg-navy/40 backdrop-blur-md p-10 md:p-14 group overflow-hidden border border-white/20 dark:border-white/10 hover-float"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16 group-hover:scale-[10] group-hover:bg-navy transition-transform duration-1000 ease-in-out"></div>
                <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  <div className="text-[10px] font-bold text-gold mb-8 uppercase tracking-[0.4em] flex items-center">
                    <span className="w-10 h-[1px] bg-gold/30 mr-4 group-hover:bg-white/30 transition-all"></span>
                    0{(idx % PRACTICE_AREAS.length) + 1}
                  </div>
                  <h3 className="text-3xl font-serif font-medium mb-6 group-hover:text-white transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-navy/60 dark:text-gray-400 group-hover:text-white/70 mb-10 font-light leading-relaxed">
                    {area.description}
                  </p>
                  <Link
                    to="/practice"
                    className="inline-flex items-center text-gold font-bold text-[10px] uppercase tracking-widest group-hover:text-white transition-all"
                  >
                    <span className="border-b border-gold/30 pb-1 mr-2">
                      Explore Excellence
                    </span>
                    <ArrowRight
                      className="transition-transform group-hover:translate-x-2"
                      size={14}
                    />
                  </Link>
                </div>
              </div>
            ))}

            {/* Seeking Global Partners - Highlight Slider Card */}
            <div className="relative flex-shrink-0 w-[450px] bg-navy/80 p-10 md:p-14 flex flex-col justify-between items-start overflow-hidden group shadow-2xl hover-float backdrop-blur-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-navy/40"></div>
              <div className="relative z-10 text-white">
                <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center mb-10 group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                  <MoveUpRight size={22} />
                </div>
                <h3 className="text-4xl font-serif font-bold mb-6 leading-tight">
                  Seeking Global <br />
                  <span className="italic text-gold">Partners?</span>
                </h3>
                <p className="text-white/60 text-sm font-light leading-relaxed mb-10">
                  Our desk is open for strategic international collaborations
                  and cross-border advisory.
                </p>
                <button className="bg-gold text-navy px-10 py-5 text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all">
                  Connect Locally
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Summary - High-End Corporate Narrative */}
      <section className="py-40 bg-transparent relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -z-10 translate-x-1/2 skew-x-12"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-6 animate-fade-in-up">
              <div className="relative">
                <div className="text-gold font-bold text-[10px] uppercase tracking-[0.4em] mb-8 flex items-center">
                  <span className="w-12 h-[1px] bg-gold mr-4"></span>
                  Our Legacy
                </div>
                <h2 className="text-5xl md:text-7xl font-serif font-medium mb-10 dark:text-white leading-tight">
                  A Decade of <br />{" "}
                  <span className="italic text-gold">Unwavering</span> <br />{" "}
                  Focus.
                </h2>
                <p className="text-lg text-navy/60 dark:text-gray-400 font-light leading-relaxed max-w-lg mb-12">
                  Established in 2014, we have navigated the complexities of
                  Nigerian corporate law with a commitment to excellence that
                  remains unrivaled in the region.
                </p>
                <div className="grid grid-cols-2 gap-12">
                  <div className="group">
                    <span className="block text-5xl font-serif text-gold font-bold mb-2 group-hover:scale-110 transition-transform origin-left duration-500">
                      1000+
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-navy/40 dark:text-gray-500">
                      Cases Resolved
                    </span>
                  </div>
                  <div className="group">
                    <span className="block text-5xl font-serif text-gold font-bold mb-2 group-hover:scale-110 transition-transform origin-left duration-500">
                      NBA
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-navy/40 dark:text-gray-500">
                      Certified Elite
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg aspect-[4/5] overflow-hidden group">
                <div className="absolute inset-0 border-[20px] border-beige dark:border-navy z-20 group-hover:border-[0px] transition-all duration-700"></div>
                <img
                  src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=1200"
                  alt="Senior Partners"
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute bottom-10 left-10 z-30 bg-gold p-8 text-navy shadow-2xl transition-transform group-hover:-translate-y-4 duration-700">
                  <span className="block text-[8px] font-bold uppercase tracking-widest mb-2">
                    The Partners
                  </span>
                  <p className="font-serif italic text-lg leading-tight">
                    Leading with vision, <br />
                    serving with honor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial - Cinematic Quote */}
      <section className="py-40 bg-navy dark:bg-[#001a35] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover"
            alt="Law detail"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-navy via-navy/90 to-transparent"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-gold/10 mb-12 border border-gold/20">
            <Award size={24} className="text-gold" />
          </div>
          <span className="text-gold font-bold text-[10px] uppercase tracking-[0.5em] mb-12 block">
            Client Retrospective
          </span>
          <blockquote className="text-4xl md:text-5xl lg:text-6xl font-serif italic mb-16 leading-[1.2]">
            "Conrad & Xavi provided the strategic foresight that protected our
            assets when the market was most volatile. They are the definitive
            legal choice."
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="w-16 h-[1px] bg-gold mb-8"></div>
            <div className="font-bold text-[10px] uppercase tracking-[0.4em] mb-2 text-white/80">
              Chief Dr. Emeka A.
            </div>
            <div className="text-[8px] uppercase tracking-widest text-gold font-bold">
              Real Estate Magnate
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Minimalist Wow */}
      <section className="py-48 bg-beige dark:bg-navy-dark relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-gold font-bold text-[8px] uppercase tracking-[0.6em] mb-12 block">
            Your Security is Our Priority
          </span>
          <h2 className="text-7xl md:text-9xl font-serif font-medium mb-16 dark:text-white leading-tight">
            Secure Your <br />
            <span className="italic text-gold">Representation.</span>
          </h2>
          <Link
            to="/contact"
            className="group inline-flex items-center bg-navy text-white px-12 py-8 text-[10px] font-bold tracking-[0.4em] uppercase transition-all duration-500 hover:bg-gold hover:text-navy hover:shadow-3xl"
          >
            Schedule Private Consultation
            <MoveUpRight
              size={18}
              className="ml-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
