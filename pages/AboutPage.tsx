import React from 'react';
import { Target, Eye, Shield, Users, Award, ChevronDown, Quote } from 'lucide-react';
import { FIRM_INFO } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-beige dark:bg-navy-dark">
      {/* Hero Narrative */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale opacity-20"
            alt="The Firm Backdrop"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-beige dark:to-navy-dark"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-3 mb-8 reveal-up">
              <span className="w-12 h-[1px] bg-gold"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold text-glow">The Conrad & Xavi Story</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-serif font-medium leading-[0.9] mb-12 dark:text-white reveal-up stagger-1">
              Architects <br /> of <span className="italic text-gold">Legal Mastery.</span>
            </h1>
            <p className="text-xl md:text-3xl font-light text-navy/70 dark:text-gray-300 leading-relaxed mb-12 reveal-up stagger-2 max-w-2xl">
              Since {FIRM_INFO.established}, we have cultivated a practice defined by one singular metric: the strategic success of our clients.
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gold space-y-2 opacity-50 animate-bounce">
           <span className="text-[10px] font-bold tracking-widest uppercase">The Narrative</span>
           <ChevronDown size={14} />
        </div>
      </section>

      {/* The Visionary Core */}
      <section className="py-40 bg-navy text-white relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="luxury-text-outline text-[160px] font-serif font-bold opacity-10 absolute -top-32 -left-10 select-none hidden md:block">MASTER</div>
              <h2 className="text-5xl md:text-7xl font-serif font-medium mb-10 leading-tight">
                Our Core <br /><span className="italic text-gold">Philosophy.</span>
              </h2>
              <div className="space-y-12">
                <div className="flex items-start space-x-8">
                  <div className="w-12 h-[1px] bg-gold mt-4 shrink-0"></div>
                  <div>
                    <h4 className="text-2xl font-serif font-bold mb-3 italic">Calculated Precision</h4>
                    <p className="text-gray-400 font-light leading-relaxed text-lg">Every legal motion is a calculated step toward a larger strategic outcome. We do not react; we orchestrate.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-8">
                  <div className="w-12 h-[1px] bg-gold mt-4 shrink-0"></div>
                  <div>
                    <h4 className="text-2xl font-serif font-bold mb-3 italic">Client-Centric Dominance</h4>
                    <p className="text-gray-400 font-light leading-relaxed text-lg">Our clients are not just cases; they are partners in success. We protect their interests with a ferocity that is unmatched.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
               <div className="absolute -inset-10 bg-gold/10 blur-3xl -z-10"></div>
               <div className="relative group overflow-hidden">
                 <img 
                   src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop" 
                   className="w-full h-auto shadow-2xl transition-all duration-1000 group-hover:scale-105"
                   alt="Strategy Session"
                 />
                 <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors"></div>
               </div>
               <div className="absolute -bottom-10 -right-10 bg-gold p-12 hidden lg:block max-w-[320px] shadow-3xl">
                  <Quote size={40} className="text-navy mb-6 opacity-30" />
                  <p className="text-navy font-serif italic text-xl leading-snug">"Legal expertise is common. Strategic foresight is rare. We offer the latter."</p>
                  <div className="mt-6 text-[10px] font-bold uppercase tracking-widest text-navy/60">Senior Partner, Conrad & Xavi LP</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision - Elegant Split */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
            <div className="bg-white dark:bg-navy-light/5 p-16 lg:p-24 shadow-2xl relative border-t-4 border-gold group">
              <Target className="text-gold mb-10 group-hover:scale-110 transition-transform" size={56} />
              <h3 className="text-4xl font-serif font-medium mb-8 dark:text-white italic">The Mission</h3>
              <p className="text-xl text-navy/70 dark:text-gray-400 font-light leading-relaxed">
                To serve as the definitive legal conduit for those seeking excellence in the Nigerian and global markets, providing strategic representation that transcends standard legal practice.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <Eye className="text-gold mb-8" size={56} />
              <h3 className="text-4xl font-serif font-medium mb-8 dark:text-white italic">The Vision</h3>
              <p className="text-xl text-navy/70 dark:text-gray-400 font-light leading-relaxed">
                To be universally recognized as the gold standard for Nigerian legal practice, where every interaction is characterized by integrity, innovation, and unparalleled results.
              </p>
              <div className="mt-12 h-[1px] bg-navy/10 dark:bg-white/10 w-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Visual Chronicle */}
      <section className="py-40 bg-white dark:bg-navy-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-24">
            <span className="text-gold font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">The Evolution</span>
            <h2 className="text-5xl md:text-8xl font-serif font-medium dark:text-white">A Decade of <span className="italic">Impact.</span></h2>
          </div>
          
          <div className="relative">
            {/* The Line */}
            <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-[1px] bg-navy/5 dark:bg-white/5 -translate-x-1/2"></div>
            
            <div className="space-y-40 relative z-10">
              {[
                { year: '2014', title: 'The Genesis', desc: 'Conrad & Xavi LP was established in Lagos, setting a new benchmark for corporate legal consultancy.', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800' },
                { year: '2018', title: 'Strategic Growth', desc: 'Expanded into the Ikoyi financial district, specializing in high-end real estate and private equity.', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800' },
                { year: '2022', title: 'Global Integration', desc: 'Pivoted to include cross-border litigation and tech-driven legal advisory for international firms.', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800' },
                { year: '2024+', title: 'Excellence Continues', desc: 'Marking a decade of unwavering results and continuing to architect certainty for our elite clientele.', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800' }
              ].map((item, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row items-center gap-16 lg:gap-24 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="inline-block px-6 py-2 bg-navy text-gold text-sm font-bold mb-8 italic tracking-[0.2em]">{item.year}</div>
                    <h4 className="text-4xl font-serif font-medium mb-6 dark:text-white leading-tight">{item.title}</h4>
                    <p className="text-navy/60 dark:text-gray-400 font-light text-lg leading-relaxed max-w-sm md:ml-auto md:mr-0 mr-auto ml-auto">{item.desc}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border-[6px] border-gold bg-beige dark:bg-navy-dark relative z-20 shrink-0 shadow-[0_0_20px_rgba(197,160,33,0.3)]"></div>
                  <div className="md:w-1/2 group relative">
                    <div className="absolute inset-0 bg-navy/40 group-hover:bg-transparent transition-all z-10"></div>
                    <img 
                      src={item.img} 
                      className="w-full aspect-video object-cover transition-all duration-700 shadow-2xl border border-navy/5 grayscale group-hover:grayscale-0" 
                      alt={item.title}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-40 bg-beige dark:bg-navy-dark">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
            {[
              { title: 'Absolute Integrity', icon: Shield, desc: 'Transparency is our standard.' },
              { title: 'Strategic Mastery', icon: Award, desc: 'We calculate every outcome.' },
              { title: 'Fierce Loyalty', icon: Users, desc: 'We protect our own.' },
              { title: 'Bold Innovation', icon: Target, desc: 'Leading through evolution.' }
            ].map((val, idx) => (
              <div key={idx} className="group border-l border-navy/5 dark:border-white/5 pl-10">
                <div className="text-gold mb-10 group-hover:translate-x-2 transition-transform">
                  <val.icon size={44} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-serif font-bold mb-4 dark:text-white italic">{val.title}</h4>
                <p className="text-sm text-navy/50 dark:text-gray-500 font-light leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;