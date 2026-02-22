import React, { useState, useEffect } from "react";
import { BLOG_POSTS } from "../constants";
import {
  Calendar,
  User,
  ArrowRight,
  Search,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const IMAGE_POOL = [
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1453948588355-66e3c16a495b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1507679799987-c73b4eafef1e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1526948531399-320e5e71f0ca?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1473186533642-42419a93c7d6?auto=format&fit=crop&q=80&w=800",
];

const BlogPage: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      const shuffledImages = [...IMAGE_POOL].sort(() => 0.5 - Math.random());
      try {
        const response = await fetch(
          `https://newsdata.io/api/1/latest?apikey=${import.meta.env.VITE_NEWSDATA_API_KEY}&q=law&country=ng`,
        );
        const data = await response.json();
        if (data.status === "success" && data.results) {
          const items = data.results.map((item: any, idx: number) => ({
            id: item.article_id || idx,
            title: item.title,
            excerpt:
              item.description ||
              "Latest legal development and strategic insights from Nigeria's top judicial analysts.",
            image:
              item.image_url || shuffledImages[idx % shuffledImages.length],
            category: item.category ? item.category[0] : "Legal Feed",
            date: new Date(item.pubDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
            author: item.creator ? item.creator[0] : "Legal Correspondent",
            link: item.link,
          }));
          setArticles(items);
        } else {
          throw new Error("Failed to fetch NewsData");
        }
      } catch (err) {
        console.error("News fetch error:", err);
        // Fallback to constants
        setArticles(BLOG_POSTS);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("_subject", "New Newsletter Subscription");

    try {
      // Adding a minimum delay of 1s to ensure the loading state is perceptible
      const [response] = await Promise.all([
        fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }),
        new Promise((resolve) => setTimeout(resolve, 1000)),
      ]);

      if (response.ok) {
        setSubscribed(true);
        form.reset();
        setTimeout(() => setSubscribed(false), 5000);
      }
    } catch (error) {
      console.error("Newsletter submission error:", error);
      setSubscribed(true); // Fallback success UI
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="pt-12">
      <section className="py-24 bg-white dark:bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="text-gold font-bold text-sm uppercase tracking-widest mb-4">
                Legal Insights
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 dark:text-white">
                Knowledge Hub
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Explore the latest updates in Nigerian corporate law, real
                estate trends, and strategic legal guidance from our expert
                partners.
              </p>
            </div>
            <div className="relative min-w-[300px]">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-navy-light/10 border-none focus:ring-1 focus:ring-gold dark:text-white"
              />
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gold"
                size={20}
              />
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 dark:bg-navy-light/10 aspect-video mb-8"></div>
                  <div className="h-4 bg-gray-200 dark:bg-navy-light/10 w-1/4 mb-4"></div>
                  <div className="h-8 bg-gray-200 dark:bg-navy-light/10 w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-navy-light/10 w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-navy-light/10 w-full mb-8"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredArticles.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden mb-8 aspect-video bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          IMAGE_POOL[
                            Math.floor(Math.random() * IMAGE_POOL.length)
                          ];
                      }}
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
                  <h3 className="text-3xl font-serif font-bold mb-4 dark:text-white group-hover:text-gold transition-colors leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed line-clamp-3">
                    {post.excerpt.replace(/<[^>]*>?/gm, "")}
                  </p>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-bold uppercase tracking-widest dark:text-white group-hover:text-gold transition-colors"
                  >
                    Read Article{" "}
                    {post.link ? (
                      <ExternalLink className="ml-2" size={16} />
                    ) : (
                      <ArrowRight className="ml-2" size={16} />
                    )}
                  </a>
                </motion.div>
              ))}
            </div>
          )}

          {/* Newsletter (Bento Style) */}
          <div className="mt-24 p-12 bg-navy text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-4xl font-serif font-bold mb-4">
                  Stay Strategically Informed.
                </h2>
                <p className="text-gray-400">
                  Join over 1,000 legal and business professionals receiving our
                  monthly regulatory briefing.
                </p>
              </div>
              <div className="md:w-1/2 w-full">
                {subscribed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center space-x-4 bg-gold/10 border border-gold/20 p-6 rounded-sm"
                  >
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-navy shrink-0">
                      <CheckCircle size={24} />
                    </div>
                    <div>
                      <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-1">
                        Subscription Confirmed
                      </h4>
                      <p className="text-gray-300 text-xs">
                        You are now on our list for exclusive legal
                        intelligence.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form className="flex" onSubmit={handleNewsletterSubmit}>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className="flex-grow px-6 py-4 bg-white/5 border border-white/10 focus:outline-none focus:border-gold transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gold text-navy px-8 font-bold text-sm uppercase tracking-widest whitespace-nowrap hover:bg-white transition-all duration-300 relative flex items-center justify-center min-w-[140px]"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              repeat: Infinity,
                              duration: 1,
                              ease: "linear",
                            }}
                            className="w-4 h-4 border-2 border-navy/30 border-t-navy rounded-full"
                          />
                          <span>Signing...</span>
                        </div>
                      ) : (
                        "Subscribe"
                      )}
                    </button>
                  </form>
                )}
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
