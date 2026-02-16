
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, ShieldCheck, Scale, Gavel, Building2, MoveUpRight, ArrowDown } from 'lucide-react';
import { FIRM_INFO, PRACTICE_AREAS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-hidden bg-beige dark:bg-navy-dark">
      {/* Hero Section - Asymmetrical Luxury Design */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-stretch pt-20">
        {/* Left Content Column */}
        <div className="lg:w-7/12 flex items-center px-4 sm:px-12 lg:px-20 py-16 lg:py-0 z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-3 mb-8 reveal-up stagger-1">
              <span className="w-12 h-[1px] bg-gold"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">Est. {FIRM_INFO.established} — {FIRM_INFO.membership}</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-serif font-medium leading-[0.95] mb-8 dark:text-white reveal-up stagger-2">
              Bespoke <br />
              <span className="italic">Legal</span> Counsel <br />
              for the <span className="text-gold">Elite.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end reveal-up stagger-3">
              <p className="text-lg text-navy/60 dark:text-gray-400 font-light leading-relaxed">
                Strategic representation and proven results for high-stakes corporate and commercial litigation across global markets.
              </p>
              <div className="flex flex-col space-y-4">
                <Link to="/contact" className="group flex items-center justify-between bg-navy text-white px-8 py-6 text-xs font-bold tracking-widest transition-all hover:bg-gold hover:text-navy uppercase">
                  Schedule Consultation
                  <MoveUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <Link to="/practice" className="group flex items-center justify-between border border-navy/10 text-navy dark:text-white dark:border-white/10 px-8 py-6 text-xs font-bold tracking-widest transition-all hover:bg-navy/5 uppercase">
                  Our Expertise
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Media Column - Overlapping Images */}
        <div className="lg:w-5/12 relative hidden lg:block overflow-hidden">
          <div className="absolute inset-0 bg-navy/5 -z-10"></div>
          <div className="h-full flex flex-col justify-center items-center px-12">
            <div className="relative w-full aspect-[3/4] max-w-md">
              <div className="absolute -top-10 -right-10 w-full h-full border border-gold/30 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200" 
                alt="Conrad & Xavi HQ" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
              />
              <div className="absolute bottom-12 -left-20 bg-white dark:bg-navy p-10 shadow-xl max-w-xs">
                <span className="block text-gold font-bold text-[10px] tracking-widest uppercase mb-4">Firm Philosophy</span>
                <p className="font-serif italic text-xl dark:text-white">"Integrity is the bedrock upon which we build our client's future."</p>
              </div>
            </div>
          </div>
          
          {/* Vertical Badge */}
          <div className="absolute bottom-20 right-0 py-10 px-4 flex flex-col items-center bg-gold text-navy font-bold uppercase tracking-[0.5em] text-[10px] [writing-mode:vertical-rl]">
            Conrad & Xavi Legal Practice
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gold space-y-2 opacity-50 animate-bounce cursor-pointer">
           <span className="text-[10px] font-bold tracking-widest uppercase">Scroll</span>
           <ArrowDown size={14} />
        </div>
      </section>

      {/* Services Highlights - High Contrast Bento Grid */}
      <section className="py-32 bg-white dark:bg-navy-dark border-t border-navy/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-gold font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Our Practice</span>
              <h2 className="text-5xl md:text-7xl font-serif font-medium dark:text-white leading-tight">
                Architecting <br /> <span className="italic">Certainty</span> in Chaos.
              </h2>
            </div>
            <p className="text-navy/50 dark:text-gray-400 max-w-sm mb-2 text-sm uppercase tracking-widest font-bold">
              Providing rigorous legal analysis and strategic counsel across specialized sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-navy/5 dark:bg-white/5">
            {PRACTICE_AREAS.map((area, idx) => (
              <div key={area.id} className="bg-white dark:bg-navy-dark p-12 group transition-all duration-500 hover:bg-navy hover:text-white">
                <div className="text-[10px] font-bold text-gold mb-8 uppercase tracking-[0.3em]">0{idx + 1}</div>
                <h3 className="text-3xl font-serif font-medium mb-6 group-hover:italic transition-all dark:text-white group-hover:text-white">{area.title}</h3>
                <p className="text-navy/60 dark:text-gray-400 group-hover:text-white/70 mb-10 font-light leading-relaxed">
                  {area.description}
                </p>
                <Link to="/practice" className="inline-flex items-center text-gold font-bold text-[10px] uppercase tracking-widest border-b border-gold/30 group-hover:border-white/30 pb-2">
                  Learn More <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={12} />
                </Link>
              </div>
            ))}
            <div className="bg-gold p-12 flex flex-col justify-between items-start">
              <div className="text-navy">
                <h3 className="text-3xl font-serif font-bold mb-4">Seeking Global Partners?</h3>
                <p className="text-navy/70 text-sm font-medium">Our desk is open for strategic international collaborations and cross-border advisory.</p>
              </div>
              <button className="bg-navy text-white px-6 py-4 text-[10px] font-bold uppercase tracking-widest">Connect Locally</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Summary - Image Centric */}
      <section className="py-40 bg-beige dark:bg-navy-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-12 -left-12 text-[150px] font-serif font-bold luxury-text-outline select-none pointer-events-none">2014</div>
                <h2 className="text-5xl md:text-7xl font-serif font-medium mb-10 dark:text-white relative z-10">
                  A Decade of <br /> <span className="italic">Unwavering</span> <br /> Focus.
                </h2>
                <p className="text-lg text-navy/70 dark:text-gray-400 font-light leading-relaxed max-w-lg mb-12">
                  Established in Lagos, we have navigated the complexities of Nigerian corporate law with a commitment to excellence that remains unrivaled.
                </p>
                <div className="flex space-x-12">
                   <div>
                      <span className="block text-4xl font-serif text-gold font-bold mb-1">1000+</span>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-navy/40 dark:text-gray-500">Cases Resolved</span>
                   </div>
                   <div>
                      <span className="block text-4xl font-serif text-gold font-bold mb-1">NBA</span>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-navy/40 dark:text-gray-500">Certified Elite</span>
                   </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
              <div className="relative group overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=1200" 
                  alt="Senior Partners" 
                  className="w-full h-auto grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 shadow-3xl"
                />
                <div className="absolute inset-0 border-[30px] border-beige dark:border-navy-dark pointer-events-none transition-all duration-700 group-hover:border-[15px]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial - Minimalist Overlay */}
      <section className="py-32 bg-navy text-white text-center">
         <div className="max-w-4xl mx-auto px-4">
            <span className="text-gold font-bold text-[10px] uppercase tracking-[0.5em] mb-12 block">Client Retrospective</span>
            <blockquote className="text-4xl md:text-6xl font-serif italic mb-12 leading-tight">
              "Conrad & Xavi provided the strategic foresight that protected our assets when the market was most volatile. They are, without question, the definitive legal choice in Lagos."
            </blockquote>
            <div className="w-12 h-[1px] bg-gold mx-auto mb-6"></div>
            <div className="font-bold text-[10px] uppercase tracking-widest">Chief Dr. Emeka A. — Real Estate Magnate</div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-white dark:bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-6xl md:text-9xl font-serif font-medium mb-12 dark:text-white">Let's <span className="italic">Begin.</span></h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center space-x-6 text-gold group"
          >
            <span className="text-xl md:text-3xl font-serif italic group-hover:mr-4 transition-all">Secure your representation</span>
            <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center transition-all group-hover:bg-gold group-hover:text-navy">
              <MoveUpRight size={24} />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
