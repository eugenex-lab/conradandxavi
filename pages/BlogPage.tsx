import React, { useState, useEffect, useRef } from "react";
import { BLOG_POSTS } from "../constants";
import {
  Calendar,
  User,
  ArrowRight,
  Search,
  ExternalLink,
  CheckCircle,
  Grid3X3,
  List,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGE_POOL = [
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1526948531399-320e5e71f0ca?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1473186533642-42419a93c7d6?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1453948588355-66e3c16a495b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1507679799987-c73b4eafef1e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
];

const TC = { duration: 0.8, ease: [0.76, 0, 0.24, 1] as any };

const BlogPage: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    const fetchNews = async () => {
      const shuffledImages = [...IMAGE_POOL].sort(() => 0.5 - Math.random());
      try {
        const res = await fetch(
          `https://newsdata.io/api/1/latest?apikey=${import.meta.env.VITE_NEWSDATA_API_KEY}&country=ng&category=politics,business,technology&image=1&video=0&removeduplicate=1`,
        );
        const data = await res.json();
        if (data.status === "success" && data.results) {
          setArticles(
            data.results.map((item: any, idx: number) => ({
              id: item.article_id || idx,
              title: item.title,
              excerpt:
                item.description ||
                "Strategic legal insight from Nigeria's premier counsel.",
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
            })),
          );
        } else throw new Error("API error");
      } catch {
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
      const [response] = await Promise.all([
        fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        }),
        new Promise((r) => setTimeout(r, 1000)),
      ]);
      if (response.ok) {
        setSubscribed(true);
        form.reset();
        setTimeout(() => setSubscribed(false), 6000);
      }
    } catch {
      setSubscribed(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const filtered = articles.filter(
    (a) =>
      a.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.category?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const featured = filtered[0];
  const sideArticles = filtered.slice(1, 3);
  const gridArticles = [...filtered.slice(3)].reverse();

  /* ─── Skeleton card ─────────────────────────────── */
  const Skeleton = () => (
    <div className="animate-pulse">
      <div className="bg-gray-200 dark:bg-white/5 aspect-[16/10] mb-4 rounded" />
      <div className="h-3 bg-gray-200 dark:bg-white/5 w-1/3 mb-3 rounded" />
      <div className="h-5 bg-gray-200 dark:bg-white/5 w-4/5 mb-2 rounded" />
      <div className="h-3 bg-gray-200 dark:bg-white/5 w-full mb-1 rounded" />
      <div className="h-3 bg-gray-200 dark:bg-white/5 w-3/4 rounded" />
    </div>
  );

  return (
    <div className="pt-16 bg-white dark:bg-[#00152e] min-h-screen transition-colors duration-300">
      {/* ══════════════════════════════════════════════
          EDITORIAL HEADER — left-aligned, minimal
      ══════════════════════════════════════════════ */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, ...TC }}
          className="text-[clamp(2.8rem,7vw,6rem)] font-serif font-medium text-navy dark:text-white leading-[0.9] tracking-tight"
        >
          Thought <em className="text-gold not-italic italic">Leadership.</em>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.28, ...TC }}
          className="flex items-center gap-3 mt-4"
        >
          <span className="h-px w-10 bg-gold" />
          <span className="text-gold text-[9px] font-bold uppercase tracking-[0.5em]">
            Intelligence · Analysis · Strategy
          </span>
        </motion.div>
      </header>

      {/* ══════════════════════════════════════════════
          FEATURED BLOCK — 2/3 + 1/3 asymmetric
      ══════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-0">
        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-[400px]">
            <div className="lg:col-span-2 bg-gray-100 dark:bg-white/5 animate-pulse border border-navy/10 dark:border-white/5" />
            <div className="flex flex-col gap-4">
              <div className="flex-1 bg-gray-100 dark:bg-white/5 animate-pulse border border-navy/10 dark:border-white/5" />
              <div className="flex-1 bg-gray-100 dark:bg-white/[0.02] animate-pulse border border-navy/10 dark:border-white/5" />
            </div>
          </div>
        ) : featured ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, ...TC }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4"
          >
            {/* Featured left — full bordered card */}
            <a
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:col-span-2 relative group cursor-pointer overflow-hidden block border border-navy/15 dark:border-white/8"
              style={{ minHeight: "420px" }}
            >
              <motion.img
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src={featured.image}
                alt={featured.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    IMAGE_POOL[Math.floor(Math.random() * IMAGE_POOL.length)];
                }}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-[1200ms] ease-out"
              />
              {/* gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00152e]/95 via-[#001830]/40 to-transparent" />

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="bg-gold text-navy text-[8px] font-bold uppercase tracking-widest px-3 py-1 mb-5 inline-block">
                  {featured.category}
                </span>
                <div className="flex items-center gap-3 text-[9px] text-white/40 uppercase tracking-widest font-bold mb-3">
                  <Calendar size={10} />
                  <span>{featured.date}</span>
                  <span className="w-px h-3 bg-white/20" />
                  <User size={10} />
                  <span className="truncate max-w-[120px]">
                    {featured.author}
                  </span>
                </div>
                <h2 className="text-2xl md:text-[1.7rem] font-serif font-medium text-white leading-snug mb-3 line-clamp-3">
                  {featured.title}
                </h2>
                <p className="text-white/45 text-sm font-light leading-relaxed line-clamp-2 mb-5 max-w-xl">
                  {featured.excerpt?.replace(/<[^>]*>?/gm, "")}
                </p>
                <span className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.35em] text-gold group-hover:text-white transition-colors duration-300">
                  Read Full Briefing <ArrowRight size={12} />
                </span>
              </div>
            </a>

            {/* Side column — two separate bordered cards with gap */}
            <div className="flex flex-col gap-4">
              {sideArticles.length === 0
                ? [1, 2].map((i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gray-100 dark:bg-white/[0.02] animate-pulse border border-navy/15 dark:border-white/8"
                    />
                  ))
                : sideArticles.map((post, i) => (
                    <a
                      key={post.id || i}
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group flex flex-col overflow-hidden cursor-pointer border border-navy/15 dark:border-white/8 hover:border-gold/30 dark:hover:border-gold/25 transition-colors duration-300"
                    >
                      {/* Image */}
                      <div className="relative overflow-hidden h-40 shrink-0">
                        <motion.img
                          initial={{ opacity: 0, y: -40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          src={post.image}
                          alt={post.title}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              IMAGE_POOL[
                                Math.floor(Math.random() * IMAGE_POOL.length)
                              ];
                          }}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                      </div>
                      {/* Text */}
                      <div className="p-5 flex flex-col flex-grow">
                        <span className="text-[8px] font-bold uppercase tracking-widest text-gold mb-2 block">
                          {post.category}
                        </span>
                        <h3 className="text-sm font-serif font-medium text-navy dark:text-white leading-snug mb-3 line-clamp-3 group-hover:text-gold dark:group-hover:text-gold transition-colors duration-300">
                          {post.title}
                        </h3>
                        <div className="mt-auto flex items-center justify-between">
                          <span className="text-[9px] text-navy/30 dark:text-white/25 uppercase tracking-widest font-bold">
                            {post.date}
                          </span>
                          <ArrowRight
                            size={13}
                            className="text-navy/20 dark:text-white/20 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300"
                          />
                        </div>
                      </div>
                    </a>
                  ))}
            </div>
          </motion.div>
        ) : null}
      </section>

      {/* ══════════════════════════════════════════════
          SEARCH BAR — detached, full width, editorial
      ══════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, ...TC }}
          className="flex items-center gap-5 border-y border-navy/10 dark:border-white/[0.07] py-5 bg-transparent"
        >
          <Search
            size={18}
            className="text-navy/40 dark:text-white/30 shrink-0"
          />
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Search briefings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none focus:outline-none text-navy dark:text-white placeholder:text-navy/30 dark:placeholder:text-white/25 text-sm tracking-wide"
            />
          </div>
          {articles.length > 0 && (
            <div className="flex items-center gap-5 shrink-0">
              <span className="w-px h-5 bg-navy/10 dark:bg-white/10 hidden md:block" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-navy/30 dark:text-white/20 whitespace-nowrap hidden md:block">
                {articles.length.toLocaleString()} INDEXED
              </span>
            </div>
          )}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════
          LATEST DISPATCHES GRID
      ══════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        {/* Section header + view toggle */}
        <div className="flex items-center justify-between mb-8">
          <motion.h2
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={TC}
            className="text-2xl font-serif font-medium text-navy dark:text-white"
          >
            Curated Insights
          </motion.h2>

          <div className="flex items-center gap-1 border border-navy/10 dark:border-white/10 p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 transition-colors duration-200 ${
                viewMode === "grid"
                  ? "bg-navy dark:bg-white/10 text-white dark:text-white"
                  : "text-navy/30 dark:text-white/25 hover:text-navy dark:hover:text-white"
              }`}
              aria-label="Grid view"
            >
              <Grid3X3 size={14} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 transition-colors duration-200 ${
                viewMode === "list"
                  ? "bg-navy dark:bg-white/10 text-white dark:text-white"
                  : "text-navy/30 dark:text-white/25 hover:text-navy dark:hover:text-white"
              }`}
              aria-label="List view"
            >
              <List size={14} />
            </button>
          </div>
        </div>

        {/* Cards */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 text-navy/30 dark:text-white/20 font-serif italic text-xl"
          >
            No briefings match "{searchQuery}".
          </motion.p>
        ) : (
          <AnimatePresence mode="wait">
            {viewMode === "grid" ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {gridArticles.map((post, idx) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: (idx % 3) * 0.07, ...TC }}
                    className="group cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-[16/10] mb-4 bg-gray-100 dark:bg-white/5">
                      <motion.img
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        src={post.image}
                        alt={post.title}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            IMAGE_POOL[
                              Math.floor(Math.random() * IMAGE_POOL.length)
                            ];
                        }}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                      <span className="absolute top-3 left-3 bg-gold text-navy text-[8px] font-bold uppercase tracking-widest px-3 py-1">
                        {post.category}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-widest text-navy/35 dark:text-white/25 mb-2">
                      <Calendar size={10} />
                      <span>{post.date}</span>
                      <span className="w-px h-3 bg-navy/15 dark:bg-white/10" />
                      <User size={10} />
                      <span className="truncate">{post.author}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-serif font-medium text-navy dark:text-white leading-snug mb-2 line-clamp-3 group-hover:text-gold dark:group-hover:text-gold transition-colors duration-400">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs text-navy/45 dark:text-white/30 font-light leading-relaxed line-clamp-2 mb-4">
                      {post.excerpt?.replace(/<[^>]*>?/gm, "")}
                    </p>

                    {/* CTA */}
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.3em] text-gold hover:text-navy dark:hover:text-white transition-colors duration-300"
                    >
                      Read Briefing
                      {post.link ? (
                        <ExternalLink size={11} />
                      ) : (
                        <ArrowRight size={11} />
                      )}
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* LIST VIEW */
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="divide-y divide-navy/8 dark:divide-white/5"
              >
                {gridArticles.map((post, idx) => (
                  <motion.a
                    key={post.id}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ delay: idx * 0.04, ...TC }}
                    className="group flex items-center gap-6 py-5 cursor-pointer hover:bg-navy/[0.02] dark:hover:bg-white/[0.02] -mx-2 px-2 transition-colors duration-300"
                  >
                    <div className="w-20 h-14 shrink-0 overflow-hidden bg-gray-100 dark:bg-white/5">
                      <motion.img
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        src={post.image}
                        alt={post.title}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            IMAGE_POOL[
                              Math.floor(Math.random() * IMAGE_POOL.length)
                            ];
                        }}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[8px] font-bold uppercase tracking-widest text-gold">
                          {post.category}
                        </span>
                        <span className="text-[9px] text-navy/30 dark:text-white/20 uppercase tracking-widest font-bold">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="text-sm font-serif font-medium text-navy dark:text-white leading-snug line-clamp-2 group-hover:text-gold dark:group-hover:text-gold transition-colors duration-300">
                        {post.title}
                      </h3>
                    </div>
                    <ArrowRight
                      size={14}
                      className="shrink-0 text-navy/20 dark:text-white/15 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300"
                    />
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </section>

      {/* ══════════════════════════════════════════════
          NEWSLETTER — editorial dark strip
      ══════════════════════════════════════════════ */}
      <section className="border-t border-navy/10 dark:border-white/10 bg-navy dark:bg-[#00152e] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={TC}
              className="text-gold text-[9px] font-bold uppercase tracking-[0.5em] mb-6 block"
            >
              Intelligence Dispatch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, ...TC }}
              className="text-4xl md:text-5xl font-serif font-medium leading-tight mb-5"
            >
              Stay Ahead of <br />
              <em className="text-gold italic">The Curve.</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, ...TC }}
              className="text-white/70 font-light leading-relaxed max-w-md"
            >
              Join 11,000+ legal and business leaders receiving our monthly
              regulatory briefing — the definitive dispatch from Nigeria's
              premier legal practice.
            </motion.p>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, ...TC }}
          >
            <AnimatePresence mode="wait">
              {subscribed ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={TC}
                  className="flex items-center gap-5 bg-gold text-navy p-8 rounded-sm"
                >
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-gold shrink-0">
                    <CheckCircle size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-sm mb-1">
                      You're In.
                    </h4>
                    <p className="text-navy/80 text-xs font-medium">
                      Expect your first briefing within 48 hours.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleNewsletterSubmit}
                  className="space-y-4"
                >
                  <div className="flex">
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Your email address"
                      className="flex-grow px-6 py-5 bg-white/10 border border-white/20 focus:outline-none focus:border-gold text-white placeholder:text-white/50 text-sm transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gold text-navy px-10 font-bold text-[10px] uppercase tracking-[0.3em] whitespace-nowrap hover:bg-white transition-all duration-500 flex items-center justify-center min-w-[140px]"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            repeat: Infinity,
                            duration: 0.9,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full"
                        />
                      ) : (
                        "Subscribe"
                      )}
                    </button>
                  </div>
                  <p className="text-white/40 text-[9px] uppercase tracking-[0.3em] font-bold">
                    No spam · Unsubscribe anytime
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
