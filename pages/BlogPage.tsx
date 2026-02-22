import React from "react";
import { Calendar, User, ArrowRight, Search } from "lucide-react";

const BlogPage: React.FC = () => {
  const [articles, setArticles] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState("");

  const IMAGE_POOL = [
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1507679799987-c73b4eafef1e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1528744585532-6aed366112d7?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1593113024227-46307612667d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1527529482837-45982136e031?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1585829365294-1b151a5617a2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1591291621164-2c6367723315?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1473186578172-c141e6798ee4?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1621504450181-55abc8a011fb?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1512403730398-20ec60da994c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1560179734-2e9f0f979963?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
  ];

  React.useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const shuffledImages = [...IMAGE_POOL].sort(() => 0.5 - Math.random());
      try {
        const response = await fetch(
          `https://newsdata.io/api/1/latest?apikey=pub_3dd86746afbf4968b6c1baf47c267bad&q=${searchQuery || 'law OR policy OR "international law" OR "legal order"'}&country=ng`,
        );
        const data = await response.json();
        if (data.status === "success" && data.results) {
          const items = data.results.map((item: any, idx: number) => ({
            id: item.article_id || idx,
            title: item.title,
            image:
              item.image_url || shuffledImages[idx % shuffledImages.length],
            category: item.category ? item.category[0] : "Legal Insights",
            date: new Date(item.pubDate).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }),
            author: item.creator ? item.creator[0] : "Legal Desk",
            excerpt:
              item.description ||
              "Strategic legal briefing and regulatory analysis.",
            link: item.link,
          }));
          setArticles(items);
        }
      } catch (err) {
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(
      () => {
        fetchNews();
      },
      searchQuery ? 500 : 0,
    );

    return () => clearTimeout(timer);
  }, [searchQuery]);

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {loading
              ? [1, 2, 4, 5].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-video bg-gray-200 dark:bg-navy-light/10 mb-8"></div>
                    <div className="h-4 bg-gray-200 dark:bg-navy-light/10 w-1/4 mb-4"></div>
                    <div className="h-8 bg-gray-200 dark:bg-navy-light/10 w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-navy-light/10 w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-navy-light/10 w-2/3"></div>
                  </div>
                ))
              : articles.map((post) => (
                  <a
                    key={post.id}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group cursor-pointer block"
                  >
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
                    <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed line-clamp-3">
                      {post.excerpt.replace(/<[^>]*>?/gm, "")}
                    </p>
                    <div className="flex items-center text-sm font-bold uppercase tracking-widest dark:text-white group-hover:text-gold transition-colors">
                      Read Article <ArrowRight className="ml-2" size={16} />
                    </div>
                  </a>
                ))}
          </div>

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
