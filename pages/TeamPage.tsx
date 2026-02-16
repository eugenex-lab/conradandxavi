
import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const TeamPage: React.FC = () => {
  return (
    <div className="pt-12">
      <section className="py-24 bg-white dark:bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="text-gold font-bold text-sm uppercase tracking-widest mb-4">Elite Counsel</div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 dark:text-white">Meet Our Partners</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Our lawyers are more than just legal experts; they are strategic business advisors committed to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="group">
                <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-gray-100">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-4">
                    <a href="#" className="p-3 bg-gold text-navy rounded-full hover:bg-white transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href={`mailto:contact@conradxavi.com`} className="p-3 bg-gold text-navy rounded-full hover:bg-white transition-colors">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-serif font-bold dark:text-white">{member.name}</h3>
                    <p className="text-gold font-bold text-xs uppercase tracking-widest mb-4">{member.position}</p>
                    <div className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                      <p><span className="font-bold">Experience:</span> {member.experience}</p>
                      <p><span className="font-bold">Focus:</span> {member.specialization}</p>
                      <p className="italic">{member.qualifications}</p>
                    </div>
                  </div>
                  <button className="p-2 border border-gold text-gold hover:bg-gold hover:text-navy transition-all">
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="py-24 bg-gray-50 dark:bg-navy-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-8 dark:text-white">Ready to join our practice?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            We are always looking for exceptional legal talent to join our growing firm. If you share our commitment to excellence, we'd like to hear from you.
          </p>
          <a href="#/contact" className="inline-block border-2 border-navy dark:border-gold px-10 py-4 font-bold dark:text-gold uppercase tracking-widest text-sm hover:bg-navy hover:text-white dark:hover:bg-gold dark:hover:text-navy transition-all">
            CAREER OPPORTUNITIES
          </a>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
