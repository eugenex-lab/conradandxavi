import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  MoveUpRight,
  ArrowDown,
  Plus,
  Minus,
  ExternalLink,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { FIRM_INFO, PRACTICE_AREAS } from "../constants";

const HeroMediaSlider: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200",
    "/images/hero_1.png",
    "/images/legal_hero_4.png",
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
    <div className="relative w-full h-full overflow-hidden shadow-2xl rounded-sm">
      {images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`Slide ${idx}`}
          className={`absolute inset-0 w-full h-full object-cover grayscale transition-all duration-[2000ms] ease-in-out ${
            idx === current ? "opacity-100 scale-105" : "opacity-0 scale-100"
          } hover:grayscale-0 cursor-crosshair`}
        />
      ))}
    </div>
  );
};

const FullBackgroundSlider: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1507679799987-c73b4eafef1e?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=2000",
    "/images/hero_1.png",
    "/images/legal_hero_4.png",
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
            className="w-full h-full object-cover grayscale scale-105"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/60 via-navy/40 to-transparent"></div>
      <div className="absolute inset-0 bg-navy/10"></div>
    </div>
  );
};

const GlobalBackground: React.FC = () => {
  return (
    <>
      <div className="mesh-glow">
        <div className="flare w-[800px] h-[800px] bg-gold/20 top-[-20%] left-[-10%] animation-delay-0"></div>
        <div className="flare w-[700px] h-[700px] bg-navy/10 bottom-[0%] right-[-10%] animation-delay-2000"></div>
        <div className="flare w-[600px] h-[600px] bg-gold/15 top-[30%] right-[0%] animation-delay-4000"></div>
        <div className="flare w-[500px] h-[500px] bg-beige/30 middle-center opacity-40 blur-[150px]"></div>
      </div>
      <div className="grain"></div>
    </>
  );
};

// Reusable transition configuration
const transitionConfig = { duration: 0.8, ease: [0.76, 0, 0.24, 1] };

const AnimatedCounter = ({
  from,
  to,
  duration = 2,
}: {
  from: number;
  to: number;
  duration?: number;
}) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  React.useEffect(() => {
    if (inView && ref.current) {
      // Use framer-motion's native animate function which is already optimized
      // for requestAnimationFrame and avoids React state updates during animation
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.floor(value).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration]);

  // Render purely a span without any reactive state to avoid React re-render overhead.
  return <span ref={ref}>{from}</span>;
};

const faqData = [
  {
    question: "Corporate Advisory & Commercial Transactions",
    answer:
      "We provide comprehensive corporate advisory services including company formations, mergers & acquisitions, joint ventures, and commercial contract drafting. Our team ensures your business transactions are structured for maximum protection and compliance with Nigerian commercial law.",
  },
  {
    question: "Real Estate & Property Law",
    answer:
      "Our real estate practice covers property acquisitions, title verification, lease agreements, land use compliance, and dispute resolution. We protect your investments with rigorous due diligence and ensure all transactions meet regulatory requirements across Lagos and beyond.",
  },
  {
    question: "Dispute Resolution & Litigation",
    answer:
      "From high-stakes commercial litigation to alternative dispute resolution (ADR), our advocates represent clients before all tiers of Nigerian courts and arbitration panels. We pursue favorable outcomes with strategic precision and unwavering commitment.",
  },
  {
    question: "Intellectual Property Protection",
    answer:
      "We safeguard your creative and commercial assets through trademark registration, patent filing, copyright protection, and enforcement actions against infringement. Our IP practice ensures your innovations remain exclusively yours.",
  },
  {
    question: "Tax & Regulatory Compliance",
    answer:
      "Our regulatory team advises on tax planning, FIRS compliance, industry-specific licensing, and government regulatory frameworks. We help businesses navigate Nigeria's complex regulatory environment with confidence and clarity.",
  },
  {
    question: "Family Law & Estate Planning",
    answer:
      "We handle sensitive family matters including matrimonial proceedings, child custody, prenuptial agreements, estate planning, will drafting, and probate administration with the utmost discretion and care.",
  },
];

const FAQItem = ({
  item,
  isOpen,
  onToggle,
}: {
  item: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="border-b border-white/10 last:border-b-0">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-7 md:py-8 text-left group"
    >
      <h3 className="text-lg md:text-2xl font-serif font-medium text-white pr-8 group-hover:text-gold transition-colors duration-300">
        {item.question}
      </h3>
      <div
        className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${
          isOpen
            ? "bg-gold text-navy rotate-0"
            : "bg-white/10 text-white group-hover:bg-gold/20 group-hover:text-gold"
        }`}
      >
        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
      </div>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="overflow-hidden"
        >
          <p className="text-white/60 text-base md:text-lg font-light leading-relaxed pb-8 pr-16 max-w-3xl">
            {item.answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-navy dark:bg-[#001020] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[800px]">
        {/* Left Column: Lady Justice Image */}
        <div className="hidden lg:block lg:col-span-4 relative">
          <div className="sticky top-0 h-full">
            <img
              src="https://plus.unsplash.com/premium_photo-1668265206711-365ec11d3713?auto=format&fit=crop&q=100&w=1800"
              alt="Lady Justice Statue"
              className="w-full h-full object-cover object-center opacity-50 grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-navy/60 to-navy" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy" />
          </div>
        </div>

        {/* Right Column: FAQ Content */}
        <div className="lg:col-span-8 px-6 md:px-12 lg:px-20 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={transitionConfig}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-serif font-medium text-white leading-tight mb-6">
              Find Answers to Your <br />
              <span className="italic text-gold">Legal Questions.</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg font-light max-w-2xl leading-relaxed">
              Our team provides clear, reliable solutions to help you understand
              your rights and make informed decisions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, ...transitionConfig }}
            className="border-t border-white/10"
          >
            {faqData.map((item, idx) => (
              <React.Fragment key={idx}>
                <FAQItem
                  item={item}
                  isOpen={openIndex === idx}
                  onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                />
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ThoughtLeadershipSection = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Pool of 20 high-quality legal and corporate images
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
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
  ];

  useEffect(() => {
    const fetchNews = async () => {
      // Shuffle the pool to get unique images for each load
      const shuffledImages = [...IMAGE_POOL].sort(() => 0.5 - Math.random());

      try {
        const response = await fetch(
          "https://newsdata.io/api/1/latest?apikey=pub_3dd86746afbf4968b6c1baf47c267bad&q=law&country=ng",
        );
        const data = await response.json();
        if (data.status === "success" && data.results) {
          const items = data.results
            .slice(0, 3)
            .map((item: any, idx: number) => ({
              ...item,
              // Use the API's image if available, otherwise rotate from our pool
              displayImage:
                item.image_url ||
                shuffledImages[idx] ||
                IMAGE_POOL[idx % IMAGE_POOL.length],
              // Standardize values for the UI
              title: item.title,
              link: item.link,
              description:
                item.description ||
                "Latest legal development and strategic insights from Nigeria's top judicial analysts.",
              pubDate: item.pubDate,
              category: item.category ? item.category[0] : "Legal Feed",
            }));
          setArticles(items);
        } else {
          throw new Error("Failed to fetch NewsData");
        }
      } catch (err) {
        console.error("News fetch error:", err);
        setArticles([
          {
            title: "Analysis of the Electoral Act (Amendment) Bill 2026",
            description:
              "President Tinubu signs pivotal legislation mandating electronic transmission of results via the IReV portal, reshaping Nigeria's electoral transparency.",
            link: "https://thenigerialawyer.com",
            pubDate: "2026-02-18T10:00:00Z",
            displayImage: shuffledImages[0] || IMAGE_POOL[0],
            category: "Legislation",
          },
          {
            title: "Legal Challenges Mount Against the New 2026 Tax Regime",
            description:
              "Abuja High Court hears arguments on the constitutionality of the latest fiscal reforms scheduled to take full effect this month.",
            link: "https://thenigerialawyer.com",
            pubDate: "2026-02-15T09:30:00Z",
            displayImage: shuffledImages[1] || IMAGE_POOL[1],
            category: "Tax Law",
          },
          {
            title: "Supreme Court Clarifies Industrial Court Jurisdiction",
            description:
              "Landmark ruling defines the boundaries of defamation claims within employment settings, providing much-needed clarity for labor litigation.",
            link: "https://thenigerialawyer.com",
            pubDate: "2026-02-10T14:15:00Z",
            displayImage: shuffledImages[2] || IMAGE_POOL[2],
            category: "Judicial",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="py-40 bg-[#060816] text-white relative overflow-hidden">
      {/* Deep, atmospheric background */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.2, opacity: 0.1 }}
          whileInView={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 4, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover grayscale"
          alt="Law atmospheric detail"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060816] via-transparent to-[#060816]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block"
            >
              Intelligence
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-serif font-medium dark:text-white leading-tight"
            >
              Thought <br />
              <span className="italic text-gold">Leadership.</span>
            </motion.h2>
          </div>
          <Link
            to="/blog"
            className="group flex items-center space-x-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-gold transition-colors"
          >
            <span>View All Insights</span>
            <ArrowRight
              size={14}
              className="group-hover:translate-x-2 transition-transform"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {loading
            ? // Skeleton Loaders
              [1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="animate-pulse bg-navy/5 dark:bg-white/5 aspect-[4/5] rounded-xl"
                ></div>
              ))
            : articles.map((article, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, ...transitionConfig }}
                  className="group flex flex-col h-full bg-white/[0.03] border border-white/5 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={
                        article.displayImage ||
                        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800"
                      }
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                      alt={article.title}
                    />
                    <div className="absolute top-4 left-4 bg-navy/80 backdrop-blur-md px-3 py-1 rounded-full text-[8px] font-bold text-gold uppercase tracking-widest">
                      {article.category || "Legal Insights"}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="text-[10px] text-white/40 font-medium uppercase tracking-widest mb-4">
                      {new Date(article.pubDate).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif font-medium mb-4 text-white leading-snug group-hover:text-gold transition-colors line-clamp-3">
                      {article.title}
                    </h3>
                    <p className="text-sm font-light text-gray-400 mb-8 line-clamp-3 overflow-hidden">
                      {article.description.replace(/<[^>]*>?/gm, "")}
                    </p>
                    <div className="mt-auto pt-6 border-t border-navy/5 dark:border-white/5">
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-3 text-[10px] font-bold uppercase tracking-[0.3em] text-gold hover:text-navy dark:hover:text-white transition-all transform hover:-translate-y-1"
                      >
                        <span>Read Briefing</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
};

const HomePage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="relative overflow-hidden bg-beige/50 dark:bg-navy-dark">
      <GlobalBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-stretch">
        <FullBackgroundSlider />

        {/* Left Content Column */}
        <div className="lg:w-7/12 flex items-center px-4 sm:px-12 lg:px-20 py-20 lg:py-0 z-10 pt-32 lg:pt-0">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, ...transitionConfig }}
              className="inline-flex items-center space-x-3 mb-8"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="w-12 h-[1px] bg-gold origin-left"
              ></motion.span>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">
                Est. {FIRM_INFO.established} — {FIRM_INFO.membership}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, ...transitionConfig }}
              className="text-6xl md:text-8xl lg:text-[110px] font-serif font-medium leading-[0.95] mb-8 text-white relative"
            >
              Bespoke <br />
              <span className="italic">Legal</span> Counsel <br />
              for the{" "}
              <span className="text-gold relative inline-block group cursor-default">
                Elite.
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, ...transitionConfig }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end"
            >
              <p className="text-lg text-white/70 font-light leading-relaxed">
                Strategic representation and proven results for high-stakes
                corporate and commercial litigation across global markets.
              </p>
              <div className="flex flex-col space-y-4">
                <Link
                  to="/contact"
                  className="group relative flex items-center justify-between bg-white text-navy px-8 py-6 text-xs font-bold tracking-widest uppercase overflow-hidden shadow-xl"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                    Schedule Consultation
                  </span>
                  <MoveUpRight
                    size={18}
                    className="relative z-10 text-navy group-hover:text-white transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                  <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] z-0"></div>
                </Link>
                <Link
                  to="/practice"
                  className="group relative flex items-center justify-between border border-white/20 text-white px-8 py-6 text-xs font-bold tracking-widest uppercase overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-navy transition-colors duration-500 delay-100">
                    Our Expertise
                  </span>
                  <ArrowRight
                    size={18}
                    className="relative z-10 transition-all duration-500 group-hover:text-navy group-hover:translate-x-2 delay-100"
                  />
                  <div className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] z-0"></div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Media Column */}
        <div className="lg:w-5/12 relative hidden lg:block overflow-hidden">
          <motion.div
            style={{ y }}
            className="h-[120%] -mt-[10%] flex flex-col justify-center items-center px-12 lg:px-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, ...transitionConfig }}
              className="relative w-full aspect-[4/5] max-w-sm group"
            >
              <div className="absolute -inset-10 bg-gold/5 blur-3xl rounded-full scale-150 group-hover:bg-gold/10 transition-colors duration-1000"></div>
              <div className="absolute -top-6 -right-6 w-full h-full border border-gold/20 -z-10 group-hover:-top-8 group-hover:-right-8 transition-all duration-700"></div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full h-full"
              >
                <HeroMediaSlider />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, ...transitionConfig }}
                className="absolute -bottom-6 -left-6 bg-navy text-white px-6 py-4 text-[8px] font-bold tracking-[0.4em] uppercase shadow-2xl backdrop-blur-sm"
              >
                Lagos Office
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Minimal Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gold/40 cursor-pointer hover:text-gold transition-colors group"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown
              size={14}
              className="group-hover:scale-125 transition-transform"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Highlights */}
      <section className="relative py-32 bg-transparent border-t border-navy/5 dark:border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000"
            alt="Courtroom"
            className="w-full h-full object-cover opacity-[0.15] contrast-125 brightness-75 sepia-[0.3] mix-blend-multiply dark:mix-blend-screen transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 via-gold/5 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={transitionConfig}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
          >
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
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-navy/10 dark:border-white/10 rounded-2xl overflow-hidden bg-white/30 dark:bg-navy/30 backdrop-blur-xl shadow-2xl"
          >
            {PRACTICE_AREAS.slice(0, 3).map((area, idx) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: transitionConfig },
                }}
                key={area.id}
                viewport={{ once: true }}
                className={`relative p-10 md:p-14 group transition-all duration-700 hover:bg-white/50 dark:hover:bg-white/5 border-navy/5 dark:border-white/5 cursor-pointer ${
                  idx === 0 ? "lg:border-r" : idx === 1 ? "lg:border-r" : ""
                } ${idx < 2 ? "border-b lg:border-b-0" : "border-b md:border-b-0"}`}
              >
                <div className="flex items-center space-x-4 mb-12">
                  <span className="text-3xl font-serif italic text-gold/30 group-hover:text-gold transition-colors duration-500">
                    {idx === 0 ? "" : `0${idx}`}
                  </span>
                  <div className="h-[1px] w-12 bg-gold/20 group-hover:w-20 group-hover:bg-gold transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"></div>
                </div>

                <div className="relative z-10 transition-transform duration-700 ease-out group-hover:-translate-y-2">
                  <h3 className="text-3xl md:text-4xl font-serif font-medium mb-8 dark:text-white leading-tight">
                    {area.title}
                  </h3>
                  <p className="text-navy/60 dark:text-gray-400 mb-12 font-light leading-relaxed text-lg">
                    {area.description}
                  </p>

                  <Link
                    to="/practice"
                    className="inline-flex items-center group/btn"
                  >
                    <span className="text-gold font-bold text-[10px] uppercase tracking-[0.3em] relative overflow-hidden pb-1">
                      <span className="relative z-10">Explore Excellence</span>
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-500 ease-out"></span>
                    </span>
                    <div className="ml-4 w-10 h-10 rounded-full border border-gold/10 flex items-center justify-center group-hover/btn:bg-gold group-hover/btn:text-navy group-active/btn:scale-95 transition-all duration-500">
                      <MoveUpRight
                        size={16}
                        className="group-hover/btn:translate-x-[1px] group-hover/btn:-translate-y-[1px] transition-transform"
                      />
                    </div>
                  </Link>
                </div>

                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold/5 rounded-tl-full translate-x-16 translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000 ease-out pointer-events-none"></div>
              </motion.div>
            ))}

            <motion.div
              variants={{
                hidden: { opacity: 0, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: { duration: 1, ease: "easeOut" },
                },
              }}
              className="md:col-span-2 lg:col-span-3 bg-navy text-white p-12 md:p-20 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000')] opacity-10 grayscale group-hover:scale-110 transition-transform duration-[3s] ease-out"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent"></div>

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="max-w-2xl text-center lg:text-left">
                  <span className="text-gold font-bold text-[10px] uppercase tracking-[0.5em] mb-6 block">
                    Strategic Collaboration
                  </span>
                  <h3 className="text-4xl md:text-6xl font-serif font-medium mb-8 leading-tight">
                    Seeking Global{" "}
                    <span className="italic text-gold">Partners?</span>
                  </h3>
                  <p className="text-white/60 text-lg font-light leading-relaxed mb-0">
                    Our desk is open for strategic international collaborations,
                    cross-border advisory, and institutional legal support.
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="bg-gold text-navy px-12 py-8 text-[10px] font-bold uppercase tracking-[0.4em] overflow-hidden relative shadow-[0_4px_30px_rgba(212,175,55,0.15)] hover:shadow-[0_4px_40px_rgba(212,175,55,0.3)] transition-all duration-500 flex items-center space-x-6 shrink-0 group/cta hover:-translate-y-1 active:translate-y-0"
                >
                  <div className="absolute inset-0 bg-white translate-y-full group-hover/cta:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] z-0"></div>
                  <span className="relative z-10 group-hover/cta:text-navy transition-colors">
                    Inquire Locally
                  </span>
                  <ArrowRight
                    size={18}
                    className="relative z-10 group-hover/cta:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-40 bg-transparent relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -z-10 translate-x-1/2 skew-x-12"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={transitionConfig}
              className="lg:col-span-6"
            >
              <div className="relative">
                <div className="text-gold font-bold text-[10px] uppercase tracking-[0.4em] mb-8 flex items-center">
                  <span className="w-12 h-[1px] bg-gold mr-4"></span>
                  Our Legacy
                </div>
                <h2 className="text-5xl md:text-7xl font-serif font-medium mb-10 dark:text-white leading-tight">
                  A Decade of <br />{" "}
                  <motion.span
                    whileHover={{ color: "#d4af37" }}
                    className="italic text-gold inline-block transition-colors cursor-default"
                  >
                    Unwavering
                  </motion.span>{" "}
                  <br /> Focus.
                </h2>
                <p className="text-lg text-navy/60 dark:text-gray-400 font-light leading-relaxed max-w-lg mb-12">
                  Established in 2014, we have navigated the complexities of
                  Nigerian corporate law with a commitment to excellence that
                  remains unrivaled in the region.
                </p>
                <div className="grid grid-cols-2 gap-12 cursor-default">
                  <motion.div
                    whileHover={{ scale: 1.05, originX: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group"
                  >
                    <span className="block text-5xl font-serif text-gold font-bold mb-2">
                      <AnimatedCounter from={0} to={1000} />+
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-navy/40 dark:text-gray-500">
                      Cases Resolved
                    </span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, originX: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group"
                  >
                    <span className="block text-5xl font-serif text-gold font-bold mb-2">
                      NBA
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-navy/40 dark:text-gray-500">
                      Certified Elite
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={transitionConfig}
              className="lg:col-span-6 relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-lg aspect-[4/5] overflow-hidden group cursor-crosshair">
                <div className="absolute inset-0 border-[20px] border-beige dark:border-navy z-20 group-hover:border-[0px] transition-all duration-700 ease-out pointer-events-none"></div>
                <img
                  src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=1200"
                  alt="Senior Partners"
                  className="w-full h-full object-cover grayscale transition-all duration-[1.5s] ease-out group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute bottom-10 left-10 z-30 bg-gold p-8 text-navy shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition-transform group-hover:-translate-y-4 duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]">
                  <span className="block text-[8px] font-bold uppercase tracking-widest mb-2 opacity-80">
                    The Partners
                  </span>
                  <p className="font-serif italic text-lg leading-tight p-0 m-0">
                    Leading with vision, <br />
                    serving with honor.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thought Leadership Section */}
      <ThoughtLeadershipSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Who Are We Section */}
      <section className="py-32 md:py-48 bg-beige dark:bg-navy-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Overlapping Images */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={transitionConfig}
              className="relative flex items-center justify-center min-h-[450px] md:min-h-[550px]"
            >
              {/* Image 1 — Top Left: Scales of Justice */}
              <div className="absolute left-0 top-0 w-[55%] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl z-10 group">
                <img
                  src="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&q=80&w=800"
                  alt="Scales of justice"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              {/* Image 2 — Bottom Right: Lawyer signing contract */}
              <div className="absolute right-4 bottom-0 w-[55%] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl z-20 group">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
                  alt="Lawyer reviewing contract"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              {/* Decorative Gold accent */}
              <div className="absolute -bottom-6 left-[20%] w-24 h-24 border-2 border-gold/20 rounded-[1.5rem] -z-0" />
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, ...transitionConfig }}
            >
              <span className="text-gold font-bold text-[8px] uppercase tracking-[0.6em] mb-6 block">
                Your Security is Our Priority
              </span>
              <h2 className="text-5xl md:text-7xl font-serif font-medium mb-8 dark:text-white leading-tight cursor-default group">
                Secure Your <br />
                <span className="italic text-gold inline-block group-hover:scale-105 transition-transform duration-500">
                  Representation.
                </span>
              </h2>
              <p className="text-navy/60 dark:text-gray-400 text-lg font-light leading-relaxed mb-10 max-w-lg">
                Strategic representation and proven results for high-stakes
                corporate and commercial litigation across global markets. Begin
                your engagement with Conrad & Xavi LP today.
              </p>
              <Link
                to="/contact"
                className="group relative inline-flex items-center overflow-hidden bg-navy dark:bg-gold text-white dark:text-navy px-10 py-6 text-[10px] font-bold tracking-[0.4em] uppercase shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gold dark:bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] z-0" />
                <span className="relative z-10 group-hover:text-navy transition-colors duration-500 delay-100">
                  Schedule Private Consultation
                </span>
                <MoveUpRight
                  size={16}
                  className="relative z-10 ml-4 group-hover:text-navy group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 delay-100"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
