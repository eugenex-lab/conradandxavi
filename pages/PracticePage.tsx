import React from 'react';
import { PRACTICE_AREAS, FIRM_INFO } from '../constants';
import { CheckCircle, Briefcase, Home, Scale, Users, ShieldCheck, ChevronRight, MoveUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: any = {
  Briefcase: Briefcase,
  Home: Home,
  Scale: Scale,
  Users: Users,
  ShieldCheck: ShieldCheck
};

// Colorful, premium images for each legal context
const practiceImages: Record<string, string> = {
  corp: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  real: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
  lit: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
  fam: "https://images.unsplash.com/photo-1581578731522-a00449a31861?q=80&w=1200&auto=format&fit=crop", // Family/Consultation context
  adv: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop"  // Business Advisory/Modern Office
};

const PracticePage: React.FC = () => {
  return (
    <div className="bg-beige dark:bg-navy-dark pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Hero Texture"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10 text-center">
          <div className="inline-flex items-center space-x-3 mb-8">
            <span className="w-8 h-[1px] bg-gold"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">Strategic Expertise</span>
            <span className="w-8 h-[1px] bg-gold"></span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-medium mb-8 leading-tight">
            Expertise <br /> <span className="italic text-gold">Redefined.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Our practice spans the most critical legal sectors, ensuring our clients have access to specialized knowledge when it matters most.
          </p>
        </div>
      </section>

      {/* Practice Areas List */}
      <section className="py-32 bg-beige dark:bg-navy-dark">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="space-y-40 lg:space-y-64">
            {PRACTICE_AREAS.map((area, idx) => {
              const IconComp = iconMap[area.icon];
              const isEven = idx % 2 === 0;
              
              return (
                <div key={area.id} className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Text Content */}
                  <div className="lg:w-1/2">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="w-12 h-12 bg-navy dark:bg-gold flex items-center justify-center text-gold dark:text-navy">
                        {IconComp && <IconComp size={24} />}
                      </div>
                      <span className="text-[10px] font-bold text-gold uppercase tracking-[0.3em]">Area 0{idx + 1}</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-serif font-medium mb-8 dark:text-white leading-tight">
                      {area.title}
                    </h2>
                    
                    <p className="text-navy/60 dark:text-gray-400 text-lg mb-10 leading-relaxed font-light">
                      {area.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                      {area.keyServices.map((service, sidx) => (
                        <div key={sidx} className="flex items-start space-x-3 text-sm font-medium dark:text-gray-300 group">
                          <CheckCircle size={18} className="text-gold shrink-0 mt-0.5" />
                          <span className="group-hover:text-gold transition-colors">{service}</span>
                        </div>
                      ))}
                    </div>

                    <Link 
                      to="/contact" 
                      className="inline-flex items-center space-x-4 text-navy dark:text-white group"
                    >
                      <span className="text-xs font-bold uppercase tracking-widest border-b-2 border-gold pb-1 group-hover:border-navy dark:group-hover:border-white transition-all">Secure representation</span>
                      <MoveUpRight size={16} className="text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Image Block */}
                  <div className="lg:w-1/2 relative">
                    <div className="relative overflow-hidden group">
                      <div className={`absolute -inset-4 border border-gold/20 -z-10 transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-4 ${!isEven ? 'translate-x-4 translate-y-4' : '-translate-x-4 -translate-y-4'}`}></div>
                      
                      {/* Base Image - Fully Colorful */}
                      <img 
                        src={practiceImages[area.id] || "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200"} 
                        className="w-full aspect-[4/5] object-cover shadow-2xl transition-all duration-1000 transform group-hover:scale-105" 
                        alt={area.title}
                      />
                      
                      {/* Corner Label shown on hover */}
                      <div className="absolute top-0 right-0 bg-gold text-navy text-[10px] font-bold uppercase tracking-widest px-4 py-2 translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                        {area.title}
                      </div>
                    </div>
                    
                    {/* Floating Info Tag */}
                    <div className={`absolute bottom-8 ${isEven ? '-right-8' : '-left-8'} bg-white dark:bg-navy p-8 shadow-2xl hidden md:block max-w-[200px] z-10`}>
                      <div className="text-[10px] font-bold text-gold uppercase tracking-widest mb-2">Success Rate</div>
                      <div className="text-4xl font-serif font-bold dark:text-white">99%</div>
                      <p className="text-[10px] text-gray-500 mt-2">Proven results in high-stakes negotiations.</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Advisory Banner */}
      <section className="py-40 bg-navy relative overflow-hidden text-white">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gold/5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-medium mb-10 leading-tight">
            Strategic Counsel <br /> <span className="italic">Beyond</span> Boundaries.
          </h2>
          <p className="text-gray-400 mb-12 text-lg font-light">Our specialists are available for a preliminary assessment of your unique legal situation, offering clarity where it's needed most.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/contact" 
              className="bg-gold hover:bg-white text-navy px-12 py-6 font-bold uppercase tracking-widest text-[10px] transition-all flex items-center shadow-2xl"
            >
              Request Advisory <ChevronRight className="ml-2" size={14} />
            </Link>
            <a 
              href={`mailto:${FIRM_INFO.email}`} 
              className="border-b border-white/20 hover:border-gold hover:text-gold transition-all py-2 text-[10px] font-bold uppercase tracking-widest"
            >
              Direct Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticePage;