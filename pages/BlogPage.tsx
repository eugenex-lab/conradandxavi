
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

const BlogPage: React.FC = () => {
  return (
    <div className="pt-12">
      <section className="py-24 bg-white dark:bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="text-gold font-bold text-sm uppercase tracking-widest mb-4">Legal Insights</div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 dark:text-white">Knowledge Hub</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Explore the latest updates in Nigerian corporate law, real estate trends, and strategic legal guidance from our expert partners.
              </p>
            </div>
            <div className="relative min-w-[300px]">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-navy-light/10 border-none focus:ring-1 focus:ring-gold dark:text-white"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" size={20} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-8 aspect-video bg-gray-100">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-6 left-6 bg-gold text-navy text-[10px] font-bold uppercase tracking-widest px-4 py-2">
                    {post.category}
                  </div>
                </div>
                <div className="flex items-center space-x-6 mb-4 text-xs font-bold uppercase tracking-widest text-gold">
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4 dark:text-white group-hover:text-gold transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="flex items-center text-sm font-bold uppercase tracking-widest dark:text-white group-hover:text-gold transition-colors">
                  Read Article <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            ))}
          </div>

          {/* Newsletter (Bento Style) */}
          <div className="mt-24 p-12 bg-navy text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-4xl font-serif font-bold mb-4">Stay Strategically Informed.</h2>
                <p className="text-gray-400">Join over 1,000 legal and business professionals receiving our monthly regulatory briefing.</p>
              </div>
              <div className="md:w-1/2 w-full">
                <form className="flex">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-grow px-6 py-4 bg-white/5 border border-white/10 focus:outline-none focus:border-gold transition-colors"
                  />
                  <button className="bg-gold text-navy px-8 font-bold text-sm uppercase tracking-widest whitespace-nowrap hover:bg-white transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
